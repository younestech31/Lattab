import { AppointmentFormData as ZodAppointmentFormData } from '@/app/actions/appointment';

export type AppointmentFormData = ZodAppointmentFormData;

export interface InquiryFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export const ALGERIAN_HOLIDAYS = [
  '01-01', // رأس السنة الميلادية
  '01-12', // رأس السنة الأمازيغية (يناير)
  '05-01', // عيد العمال
  '07-05', // عيد الاستقلال
  '11-01', // اندلاع الثورة التحريرية
];

export const TIME_DISPLAY_TO_24H: Record<string, string> = {
  '08:30 صباحاً': '08:30',
  '09:00 صباحاً': '09:00',
  '10:00 صباحاً': '10:00',
  '11:00 صباحاً': '11:00',
  '01:30 ظهراً':  '13:30',
  '02:00 ظهراً':  '14:00',
  '03:00 عصراً':  '15:00',
};

export const MORNING_SLOTS = ['08:30 صباحاً', '09:00 صباحاً', '10:00 صباحاً', '11:00 صباحاً'];
export const AFTERNOON_SLOTS = ['01:30 ظهراً', '02:00 ظهراً', '03:00 عصراً'];

export const REQUIRED_DOCUMENTS_HINT: Record<string, string[]> = {
  'عقود البيع والشراء العقارية': [
    'سند الملكية (من البائع)',
    'شهادة عدم الرهن أو سلبية الرهن',
    'وثائق الهوية للطرفين',
  ],
  'عقود الإيجار والتأجير': [
    'سند ملكية العقار',
    'بطاقة الهوية للمؤجر والمستأجر',
  ],
  'الوكالات والتفويضات': [
    'بطاقة الهوية للموكل والوكيل',
    'شهادة الميلاد',
    'معلومات دقيقة عن الغرض من الوكالة',
  ],
  'عقود الزواج والمستندات العائلية': [
    'شهادات الميلاد للطرفين',
    'بطاقات الهوية',
    'شاهدان بالغان',
  ],
  'تأسيس الشركات والمؤسسات': [
    'وثائق الهوية وشهادات الميلاد للشركاء',
    'تسمية الشركة المرغوبة',
    'عقد ملكية أو إيجار المقر',
  ],
  'الرهن والتأمينات': [
    'سند الملكية',
    'عقد القرض أو وثيقة الدين',
    'وثائق الهوية',
  ],
  'التصريحات والمصادقات': [
    'بطاقة الهوية',
    'موضوع المصادقة بدقة',
  ]
};

export function cleanText(input: string): string {
  return input
    ? input.trim().replace(/<[^>]*>?/g, '').slice(0, 1000)
    : '';
}

export function buildWhatsAppUrl({ service, source }: { service: string, source: string }, lang: 'ar' | 'fr' = 'ar') {
  const text = lang === 'ar'
    ? `السلام عليكم، أود الاستفسار بخصوص ${service}. (المصدر: ${source})`
    : `Bonjour, je souhaite me renseigner concernant: ${service}. (Source: ${source})`;
  return `https://wa.me/213562296981?text=${encodeURIComponent(text)}`;
}

export function openWhatsAppAppointment(data: AppointmentFormData, lang: 'ar' | 'fr' = 'ar') {
  const name = cleanText(data.name);
  const phone = cleanText(data.phone);
  const company = cleanText(data.company ?? '');
  const service = cleanText(data.service);
  const notes = cleanText(data.notes ?? '');

  let text = lang === 'ar' 
    ? `طلب حجز موعد جديد:
الاسم: ${name}
الخدمة: ${service}
التاريخ: ${data.date}
الوقت: ${data.time}
رقم الهاتف: \u200E${phone}\u200E`
    : `Nouvelle demande de rendez-vous:
Nom: ${name}
Service: ${service}
Date: ${data.date}
Heure: ${data.time}
Téléphone: ${phone}`;

  if (company) {
    text += lang === 'ar' ? `\nالشركة/المؤسسة: ${company}` : `\nEntreprise: ${company}`;
  }
  if (notes) {
    text += lang === 'ar' ? `\nملاحظات: ${notes}` : `\nNotes: ${notes}`;
  }

  window.open(`https://wa.me/213562296981?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

export function generateWhatsAppAppointmentUrl(data: AppointmentFormData, lang: 'ar' | 'fr' = 'ar'): string {
  const name = cleanText(data.name);
  const phone = cleanText(data.phone);
  const company = cleanText(data.company ?? '');
  const service = cleanText(data.service);
  const notes = cleanText(data.notes ?? '');

  let text = lang === 'ar' 
    ? `طلب حجز موعد جديد:
الاسم: ${name}
الخدمة: ${service}
التاريخ: ${data.date}
الوقت: ${data.time}
رقم الهاتف: \u200E${phone}\u200E`
    : `Nouvelle demande de rendez-vous:
Nom: ${name}
Service: ${service}
Date: ${data.date}
Heure: ${data.time}
Téléphone: ${phone}`;

  if (company) {
    text += lang === 'ar' ? `\nالشركة/المؤسسة: ${company}` : `\nEntreprise: ${company}`;
  }
  if (notes) {
    text += lang === 'ar' ? `\nملاحظات: ${notes}` : `\nNotes: ${notes}`;
  }

  return `https://wa.me/213562296981?text=${encodeURIComponent(text)}`;
}

export function openWhatsAppInquiry(data: InquiryFormData, lang: 'ar' | 'fr' = 'ar') {
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

  window.open(`https://wa.me/213562296981?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

export function getRequiredDocuments(service: string) {
  return REQUIRED_DOCUMENTS_HINT[service] || null;
}
