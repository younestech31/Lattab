'use server';

import { z } from 'zod';
import { headers } from 'next/headers';
import { checkRateLimit } from '@/lib/utils/rateLimiter';
import { generateWhatsAppInquiryUrl } from '@/lib/utils/whatsapp';

const InquirySchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون على الأقل حرفين').max(100),
  phone: z.string().regex(/^[\d\s\+\-\(\)]{8,20}$/, 'رقم هاتف غير صحيح'),
  service: z.string().min(1, 'يرجى اختيار الخدمة').max(200),
  message: z.string().min(5, 'رسالة قصيرة جداً').max(1000),
  honeypot: z.string().optional(),
  lang: z.enum(['ar', 'fr']).default('ar'),
});

export type InquiryFormData = z.infer<typeof InquirySchema>;

export type InquiryState = {
  success: boolean;
  errors: Record<string, string[]>;
  data?: {
    whatsappUrl: string;
  };
  message?: string;
};

export async function validateInquiry(prevState: InquiryState, formData: FormData): Promise<InquiryState> {
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
    message: formData.get('message'),
    honeypot: formData.get('honeypot'),
    lang: formData.get('lang') || 'ar',
  };

  const result = InquirySchema.safeParse(rawData);
  
  if (result.success && result.data.honeypot && result.data.honeypot.trim() !== '') {
    console.warn('[honeypot_inquiry]', ip, new Date().toISOString());
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
  
  const whatsappUrl = generateWhatsAppInquiryUrl(result.data, result.data.lang);

  return { 
    success: true, 
    errors: {}, 
    data: {
      whatsappUrl
    } 
  };
}
