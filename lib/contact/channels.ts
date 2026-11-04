// Char codes for official contact phone digits
const TEL_DIGITS_CODES = [50, 49, 51, 53, 54, 50, 50, 57, 54, 57, 56, 49];

// Char codes for official contact email address
const EMAIL_CODES = [
  109, 97, 105, 116, 114, 101, 108, 97, 116, 116, 97, 98, 109, 111, 104, 97, 109, 101, 100, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109
];

export function officeTelDigits(): string {
  return String.fromCharCode(...TEL_DIGITS_CODES);
}

export function officeEmail(): string {
  return String.fromCharCode(...EMAIL_CODES);
}

/**
 * Builds a sanitized WhatsApp inquiry URL. User-entered details are included
 * only in the message prepared on the visitor's device; they are not stored here.
 */
export interface InquiryMessageDetails {
  name?: string;
  phone?: string;
  company?: string;
  message?: string;
}

function sanitizeMessageField(value: string | undefined, maxLength: number): string {
  return (value || '')
    .replace(/[<>]/g, '')
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

export function buildInquiryWaUrl(
  lang: 'ar' | 'fr' = 'ar',
  service: string = '',
  details: InquiryMessageDetails = {},
): string {
  const sanitizedService = sanitizeMessageField(service, 100);
  const name = sanitizeMessageField(details.name, 100);
  const phone = sanitizeMessageField(details.phone, 25);
  const company = sanitizeMessageField(details.company, 100);
  const extraMessage = sanitizeMessageField(details.message, 700);
  const digits = officeTelDigits();

  const lines = lang === 'fr'
    ? [
        'Bonjour, je souhaite effectuer une demande de renseignement administratif.',
        'Service concerné : ' + (sanitizedService || 'Non précisé'),
        'Nom : ' + (name || 'Non précisé'),
        'Téléphone : ' + (phone || 'Non précisé'),
        ...(company ? ['Société / institution : ' + company] : []),
        ...(extraMessage ? ['Précisions : ' + extraMessage] : []),
        'Office notarial, Akid Lotfi, Oran.',
      ]
    : [
        'السلام عليكم، أود تقديم استفسار إداري.',
        'نوع الخدمة: ' + (sanitizedService || 'غير محدد'),
        'الاسم: ' + (name || 'غير محدد'),
        'رقم الهاتف: ' + (phone || 'غير محدد'),
        ...(company ? ['المؤسسة: ' + company] : []),
        ...(extraMessage ? ['تفاصيل إضافية: ' + extraMessage] : []),
        'المكتب: ديوان التوثيق، العقيد لطفي، وهران.',
      ];

  const message = lines.join('\n');
  const url = 'https://wa.me/' + digits + '?text=' + encodeURIComponent(message);
  if (!url.startsWith('https://wa.me/' + digits + '?text=')) {
    throw new Error('Invalid WhatsApp URL generated');
  }
  return url;
}
