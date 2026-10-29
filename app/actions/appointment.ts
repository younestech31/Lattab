'use server';

import { z } from 'zod';
import { headers } from 'next/headers';
import { notifyAppointment } from '@/lib/utils/notify';

function getAlgiersTodayYYYYMMDD(): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Africa/Algiers',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(new Date());
}

function isAlgiersWeekend(dateStr: string): boolean {
  const [year, month, day] = dateStr.split('-').map(Number);
  const dateUtc = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  const dayName = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Algiers',
    weekday: 'short',
  }).format(dateUtc);
  return dayName === 'Fri' || dayName === 'Sat';
}

const AppointmentSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون على الأقل حرفين').max(100),
  phone: z.string().regex(/^[\d\s\+\-\(\)]{8,20}$/, 'رقم هاتف غير صحيح'),
  service: z.string().min(1, 'يرجى اختيار الخدمة'),
  date: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'صيغة التاريخ غير صحيحة')
    .refine((d) => d >= getAlgiersTodayYYYYMMDD(), 'لا يمكن اختيار تاريخ في الماضي')
    .refine((d) => !isAlgiersWeekend(d), 'لا يمكن حجز موعد في أيام العطلة الأسبوعية (الجمعة والسبت)'),
  time: z.string().min(1, 'يرجى اختيار وقت الموعد'),
  notes: z.string().max(500).optional(),
  company: z.string().max(200).optional(),
  honeypot: z.string().optional(),
});

// ─────────────────────────────────────────────────────────────
// In-Memory Rate Limiting for Appointment Submissions (Temporary)
//
// TODO: Replace with distributed KV / Upstash Redis for production multi-instance
// serverless deployments (e.g. Vercel Functions). In-memory state is isolated
// per container instance and does not persist across cold starts.
// ─────────────────────────────────────────────────────────────
const APPOINTMENT_RATE_LIMIT_WINDOW_MS = 3 * 60 * 1000; // 3 minutes
const phoneRateLimitMap = new Map<string, number>();

function cleanExpiredRateLimits(now: number) {
  if (phoneRateLimitMap.size > 200) {
    for (const [phone, timestamp] of phoneRateLimitMap.entries()) {
      if (now - timestamp > APPOINTMENT_RATE_LIMIT_WINDOW_MS) {
        phoneRateLimitMap.delete(phone);
      }
    }
  }
}

export type AppointmentFormData = z.infer<typeof AppointmentSchema>;

export type AppointmentState = {
  success: boolean;
  errors: Record<string, string[]>;
  data?: AppointmentFormData;
  message?: string;
};

export async function validateAppointment(prevState: AppointmentState, formData: FormData): Promise<AppointmentState> {
  const rawData = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    date: formData.get('date'),
    time: formData.get('time'),
    notes: formData.get('notes'),
    company: formData.get('company'),
    honeypot: formData.get('honeypot'),
  };

  const result = AppointmentSchema.safeParse(rawData);
  
  if (result.success && result.data.honeypot && result.data.honeypot.trim() !== '') {
    const reqHeaders = await headers();
    const ip = reqHeaders.get('x-forwarded-for') || '127.0.0.1';
    console.warn('[honeypot]', ip, new Date().toISOString());
    return { success: false, errors: {} };
  }
  
  if (!result.success) {
    const errors: Record<string, string[]> = {};
    const fieldErrors = result.error.flatten().fieldErrors;
    for (const [key, messages] of Object.entries(fieldErrors)) {
      if (messages) {
        errors[key] = messages;
      }
    }
    return { 
      success: false, 
      errors
    };
  }

  // Rate-limiting check per sanitized phone number
  const normalizedPhone = result.data.phone.replace(/\D/g, '');
  const now = Date.now();
  cleanExpiredRateLimits(now);

  const lastAttempt = phoneRateLimitMap.get(normalizedPhone);
  if (lastAttempt && now - lastAttempt < APPOINTMENT_RATE_LIMIT_WINDOW_MS) {
    return {
      success: false,
      errors: {
        phone: ['تم إرسال طلب لهذا الرقم مؤخراً. يرجى الانتظار بضع دقائق قبل إعادة المحاولة.'],
      },
      message: 'لقد تم إرسال طلب مؤخراً. يرجى الانتظار 3 دقائق قبل إعادة المحاولة.',
    };
  }

  phoneRateLimitMap.set(normalizedPhone, now);
  
  // Send notification server-side
  try {
    await notifyAppointment({
      timestamp: new Date().toISOString(),
      name: result.data.name,
      service: result.data.service,
      date: result.data.date,
      time: result.data.time,
      phone: result.data.phone,
      notes: result.data.notes,
    });
  } catch (error) {
    console.error('[APPOINTMENT] Notification error');
    if (error instanceof TypeError || error instanceof ReferenceError) {
      return {
        success: false,
        errors: { _form: ['حدث خطأ أثناء معالجة الطلب.'] },
        message: 'حدث خطأ أثناء معالجة الطلب.',
      };
    }
  }
  
  return { 
    success: true, 
    errors: {}, 
    data: result.data 
  };
}
