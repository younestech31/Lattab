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

export async function validateAppointment(formData: unknown) {
  const result = AppointmentSchema.safeParse(formData);
  if (!result.success) {
    return { success: false as const, errors: result.error.flatten().fieldErrors };
  }
  
  if (result.data.honeypot) {
    return { success: true as const, data: result.data };
  }
  
  return { success: true as const, data: result.data };
}
