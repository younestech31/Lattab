'use server';

import { z } from 'zod';
import { headers } from 'next/headers';
import { notifyAppointment } from '@/lib/utils/notify';
import { checkRateLimit } from '@/lib/utils/rateLimiter';

const AppointmentSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون على الأقل حرفين').max(100),
  phone: z.string().regex(/^[\d\s\+\-\(\)]{8,20}$/, 'رقم هاتف غير صحيح'),
  service: z.string().min(1, 'يرجى اختيار الخدمة'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(d => new Date(d) >= new Date(new Date().toDateString()), 'تاريخ غير صحيح'),
  time: z.string().min(1, 'يرجى اختيار وقت الموعد'),
  notes: z.string().max(500).optional(),
  company: z.string().max(200).optional(),
  honeypot: z.string().optional(),
});

export type AppointmentFormData = z.infer<typeof AppointmentSchema>;

export type AppointmentState = {
  success: boolean;
  errors: Record<string, string[]>;
  data?: AppointmentFormData;
  message?: string;
};

export async function validateAppointment(prevState: AppointmentState, formData: FormData): Promise<AppointmentState> {
  const reqHeaders = await headers();
  const ip = reqHeaders.get('x-forwarded-for') || reqHeaders.get('x-real-ip') || '127.0.0.1';
  const country = reqHeaders.get('x-vercel-ip-country') ?? 'unknown';
  const clientKey = `${ip}:${country}`;

  const limitResult = checkRateLimit(clientKey);
  if (!limitResult.success) {
    return {
      success: false,
      errors: {
        global: [`الرجاء المحاولة بعد ${limitResult.retryAfter} ثانية. لقد تجاوزت حد تقديم الطلبات.`]
      },
      message: `الرجاء المحاولة بعد ${limitResult.retryAfter} ثانية. لقد تجاوزت حد تقديم الطلبات.`
    };
  }

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
    console.error('[APPOINTMENT] Notification error:', error);
  }
  
  return { 
    success: true, 
    errors: {}, 
    data: result.data 
  };
}

