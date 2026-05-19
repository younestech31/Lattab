'use server';

import { z } from 'zod';

const AppointmentSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون على الأقل حرفين').max(100),
  phone: z.string().regex(/^[\d\s\+\-\(\)]{8,20}$/, 'رقم هاتف غير صحيح'),
  email: z.string().email('بريد إلكتروني غير صحيح').optional().or(z.literal('')),
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
  const rawData = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    service: formData.get('service'),
    date: formData.get('date'),
    time: formData.get('time'),
    notes: formData.get('notes'),
    company: formData.get('company'),
    honeypot: formData.get('honeypot'),
  };

  const result = AppointmentSchema.safeParse(rawData);
  
  if (!result.success) {
    return { 
      success: false, 
      errors: result.error.flatten().fieldErrors as Record<string, string[]>
    };
  }
  
  // Optional: Add logic here to save to database or send email
  
  return { 
    success: true, 
    errors: {}, 
    data: result.data 
  };
}
