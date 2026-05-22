import { OFFICE_WHATSAPP_NUMBER } from '@/lib/config/contact';

export const buildWhatsAppUrl = ({ service, source }: { service: string, source: string }, lang: 'ar' | 'fr' = 'ar') => {
  const message = lang === 'ar'
    ? `السلام عليكم، أود الاستفسار حول: ${service}. (المصدر: ${source})`
    : `Bonjour, je souhaite me renseigner concernant: ${service}. (Source: ${source})`;
  return `https://wa.me/${OFFICE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export function cleanText(input: string): string {
  return input
    ? input.trim().replace(/<[^>]*>?/g, '').slice(0, 1000)
    : '';
}

export function generateWhatsAppInquiryUrl(data: { name: string; phone: string; service: string; message: string; }, lang: 'ar' | 'fr' = 'ar') {
  const name = cleanText(data.name);
  const phone = cleanText(data.phone);
  const service = cleanText(data.service);
  const message = cleanText(data.message);

  const text = lang === 'ar'
    ? `استفسار عام:
الاسم: ${name}
الخدمة: ${service}
رقم الهاتف: \u200E${phone}\u200E
الرسالة: ${message}`
    : `Demande de renseignement:
Nom: ${name}
Service: ${service}
Téléphone: ${phone}
Message: ${message}`;

  return `https://wa.me/${OFFICE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
