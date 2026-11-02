'use server';

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
  date?: string;
  time?: string;
  notes?: string;
  company?: string;
  honeypot?: string;
}

export async function submitAdministrativeInquiry(
  prevStateOrFormData: InquiryState | FormData,
  maybeFormData?: FormData
): Promise<InquiryState> {
  try {
    const formData = maybeFormData instanceof FormData
      ? maybeFormData
      : prevStateOrFormData instanceof FormData
        ? prevStateOrFormData
        : new FormData();

    // Fast-path honeypot check: Non-empty honeypot returns { success: false, errors: {} } with no outbound call
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
    console.error('[INQUIRY_VALIDATION_ERROR]');
    return {
      success: false,
      errors: { _form: ['حدث خطأ أثناء معالجة الطلب.'] },
      message: 'حدث خطأ أثناء معالجة الطلب.',
    };
  }
}

export const validateAppointment = submitAdministrativeInquiry;
