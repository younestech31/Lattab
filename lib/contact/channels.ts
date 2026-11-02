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
 * Builds a sanitized WhatsApp inquiry URL.
 * Only allows https://wa.me/<digits>?text=. Rejects any other scheme.
 * Strips <> and control characters from service, collapses whitespace, max 80 chars.
 */
export function buildInquiryWaUrl(lang: 'ar' | 'fr' = 'ar', service: string = ''): string {
  const sanitizedService = (service || '')
    .replace(/[<>]/g, '')
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80);

  const digits = officeTelDigits();

  let message = '';
  if (lang === 'fr') {
    // French formal, no sales wording
    message = sanitizedService
      ? `Bonjour, je souhaite effectuer une demande de renseignement administratif concernant : ${sanitizedService}. Office notarial, Akid Lotfi, Oran.`
      : `Bonjour, je souhaite effectuer une demande de renseignement administratif. Office notarial, Akid Lotfi, Oran.`;
  } else {
    message = sanitizedService
      ? `السلام عليكم، أود الاستفسار الإداري حول: ${sanitizedService}. المكتب: ديوان التوثيق، العقيد لطفي، وهران.`
      : `السلام عليكم، أود الاستفسار الإداري. المكتب: ديوان التوثيق، العقيد لطفي، وهران.`;
  }

  const url = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  if (!url.startsWith(`https://wa.me/${digits}?text=`)) {
    throw new Error('Invalid WhatsApp URL generated');
  }

  return url;
}
