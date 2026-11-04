'use server';

import { headers } from 'next/headers';
import {
  AdministrativeInquirySchema,
  INSTITUTIONAL_ACT_TYPES,
  AdministrativeInquiryData,
} from '@/lib/contact/inquirySchema';

export { INSTITUTIONAL_ACT_TYPES, AdministrativeInquirySchema };
export type { AdministrativeInquiryData };

export type InquiryState = {
  success: boolean;
  errors: Record<string, string[]>;
  message?: string;
};

// Aliases for backward compatibility with existing component imports
export type AppointmentState = InquiryState;
export interface AppointmentFormData {
  name: string;
  phone: string;
  service: string;
  notes?: string;
  company?: string;
  honeypot?: string;
}

// In-memory sliding window rate limiter (ephemeral, no persistent PII storage)
const submissionMap = new Map<string, number[]>();

function checkRateLimit(clientIp: string): { allowed: boolean; retryAfterSeconds?: number } {
  try {
    const now = Date.now();
    const windowMs = 10 * 60 * 1000; // 10 minutes
    const maxSubmissions = 5;

    let timestamps = submissionMap.get(clientIp) || [];
    timestamps = timestamps.filter((t) => now - t < windowMs);

    if (timestamps.length >= maxSubmissions) {
      const oldest = timestamps[0];
      const retryAfterSeconds = Math.ceil((windowMs - (now - oldest)) / 1000);
      return { allowed: false, retryAfterSeconds };
    }

    timestamps.push(now);
    submissionMap.set(clientIp, timestamps);
    return { allowed: true };
  } catch {
    // Fail closed on limiter errors
    return { allowed: false, retryAfterSeconds: 60 };
  }
}

export async function submitAdministrativeInquiry(
  _prevState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  try {
    const headerList = await headers();
    const forwardedFor = headerList.get('x-forwarded-for');
    const realIp = headerList.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : (realIp || '127.0.0.1');

    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      const retryMsg = rateCheck.retryAfterSeconds
        ? `الرجاء المحاولة بعد ${rateCheck.retryAfterSeconds} ثانية.`
        : 'تم تجاوز الحد الأقصى للطلبات. الرجاء المحاولة لاحقاً.';
      return {
        success: false,
        errors: { _form: [retryMsg] },
        message: retryMsg,
      };
    }

    // Fast-path honeypot check: Non-empty honeypot returns { success: false, errors: {} }
    const websiteVal = formData.get('companyWebsite') ?? formData.get('honeypot');
    if (typeof websiteVal === 'string' && websiteVal.trim() !== '') {
      return { success: false, errors: {} };
    }

    const nameRaw = formData.get('name');
    const phoneRaw = formData.get('phone');
    const serviceRaw = formData.get('service');
    const messageRaw = formData.get('message') || formData.get('notes');

    // Strip spaces and optional leading plus from phone number
    const sanitizedPhone = typeof phoneRaw === 'string'
      ? phoneRaw.replace(/\s+/g, '').replace(/^\+/, '')
      : '';

    const rawData = {
      name: typeof nameRaw === 'string' ? nameRaw : '',
      phone: sanitizedPhone,
      service: typeof serviceRaw === 'string' ? serviceRaw : '',
      message: typeof messageRaw === 'string' && messageRaw.trim() !== '' ? messageRaw : undefined,
      companyWebsite: typeof websiteVal === 'string' ? websiteVal.trim() : '',
    };

    const parseResult = AdministrativeInquirySchema.safeParse(rawData);

    if (!parseResult.success) {
      const errors: Record<string, string[]> = {};
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      for (const [key, messages] of Object.entries(fieldErrors)) {
        if (messages && messages.length > 0) {
          errors[key] = messages;
        }
      }
      return {
        success: false,
        errors,
      };
    }

    return {
      success: true,
      errors: {},
    };
  } catch {
    return {
      success: false,
      errors: { _form: ['حدث خطأ أثناء معالجة الطلب.'] },
      message: 'حدث خطأ أثناء معالجة الطلب.',
    };
  }
}

export const validateAppointment = submitAdministrativeInquiry;
