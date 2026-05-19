import { AppointmentFormData as ZodAppointmentFormData } from '@/app/actions/appointment';

export type AppointmentFormData = ZodAppointmentFormData;

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
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

export function buildWhatsAppUrl({ service, source }: { service: string, source: string }) {
  const text = `السلام عليكم، أود الاستفسار بخصوص ${service}. (المصدر: ${source})`;
  return `https://api.whatsapp.com/send/?phone=213562296981&text=${encodeURIComponent(text)}`;
}

export function openWhatsAppAppointment(data: AppointmentFormData) {
  const name = cleanText(data.name);
  const phone = cleanText(data.phone);
  const email = cleanText(data.email ?? '');
  const company = cleanText(data.company ?? '');
  const service = cleanText(data.service);
  const notes = cleanText(data.notes ?? '');

  let text = `طلب حجز موعد جديد:
الاسم: ${name}
الخدمة: ${service}
التاريخ: ${data.date}
الوقت: ${data.time}
رقم الهاتف: \u200E${phone}\u200E`;

  if (email) text += `\nالبريد الإلكتروني: ${email}`;
  if (company) text += `\nالشركة/المؤسسة: ${company}`;
  if (notes) text += `\nملاحظات: ${notes}`;

  window.open(`https://api.whatsapp.com/send/?phone=213562296981&text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

export function generateWhatsAppAppointmentUrl(data: AppointmentFormData): string {
  const name = cleanText(data.name);
  const phone = cleanText(data.phone);
  const email = cleanText(data.email ?? '');
  const company = cleanText(data.company ?? '');
  const service = cleanText(data.service);
  const notes = cleanText(data.notes ?? '');

  let text = `طلب حجز موعد جديد:
الاسم: ${name}
الخدمة: ${service}
التاريخ: ${data.date}
الوقت: ${data.time}
رقم الهاتف: \u200E${phone}\u200E`;

  if (email) text += `\nالبريد الإلكتروني: ${email}`;
  if (company) text += `\nالشركة/المؤسسة: ${company}`;
  if (notes) text += `\nملاحظات: ${notes}`;

  return `https://api.whatsapp.com/send/?phone=213562296981&text=${encodeURIComponent(text)}`;
}

export function saveLastWhatsAppUrl(url: string) {
  try {
    sessionStorage.setItem('lastWhatsAppUrl', url);
  } catch (e) {
    console.error('Failed to save lastWhatsAppUrl', e);
  }
}

export function getLastWhatsAppUrl(): string | null {
  try {
    return sessionStorage.getItem('lastWhatsAppUrl');
  } catch (e) {
    console.error('Failed to read lastWhatsAppUrl', e);
    return null;
  }
}

export function openWhatsAppInquiry(data: InquiryFormData) {
  const name = cleanText(data.name);
  const phone = cleanText(data.phone);
  const email = cleanText(data.email);
  const service = cleanText(data.service);
  const message = cleanText(data.message);

  let text = `استفسار عام:
الاسم: ${name}
الخدمة: ${service}
رقم الهاتف: \u200E${phone}\u200E`;

  if (email) text += `\nالبريد الإلكتروني: ${email}`;
  text += `\nالرسالة: ${message}`;

  window.open(`https://api.whatsapp.com/send/?phone=213562296981&text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

export function getRequiredDocuments(service: string) {
  return REQUIRED_DOCUMENTS_HINT[service] || null;
}
