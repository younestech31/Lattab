import { AppointmentFormData as ZodAppointmentFormData } from '@/app/actions/appointment';
import { buildInquiryWaUrl } from '@/lib/contact/channels';

export type AdministrativeInquiryData = ZodAppointmentFormData;
/** @deprecated Use AdministrativeInquiryData */
export type AppointmentFormData = AdministrativeInquiryData;

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

export function openWhatsAppInquiry(data: InquiryFormData, lang: 'ar' | 'fr' = 'ar') {
  const url = buildInquiryWaUrl(lang, data.service);
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function getRequiredDocuments(service: string) {
  return REQUIRED_DOCUMENTS_HINT[service] || null;
}
