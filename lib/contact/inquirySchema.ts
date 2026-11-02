import { z } from 'zod';

export const INSTITUTIONAL_ACT_TYPES = [
  // Arabic institutional act types
  'عقود البيع والشراء العقارية',
  'عقود الإيجار والتأجير',
  'الوكالات والتفويضات',
  'عقود الزواج والمستندات العائلية',
  'عقود الزواج والاتفاق المالي',
  'تأسيس الشركات والمؤسسات',
  'الرهن والتأمينات',
  'التصريحات والمصادقات',
  'الفريضة والتركات',
  // French institutional act types
  'Actes de vente immobilière',
  'Actes de location',
  'Procurations et mandats',
  'Actes de mariage et documents familiaux',
  'Contrats de mariage',
  'Constitution de sociétés',
  'Hypothèques et assurances',
  'Déclarations et certifications',
  'Successions et héritages',
] as const;

export const AdministrativeInquirySchema = z.object({
  name: z.string().trim().min(2, 'الاسم يجب أن يحتوي على حرفين على الأقل').max(100, 'الاسم طويل جداً'),
  phone: z
    .string()
    .trim()
    .regex(/^(?:213|0)?[0-9]+$/, 'رقم هاتف غير صحيح')
    .refine((val) => val.length >= 8 && val.length <= 15, 'رقم هاتف غير صحيح'),
  service: z.enum(INSTITUTIONAL_ACT_TYPES, {
    message: 'يرجى اختيار نوع المعاملة',
  }),
  message: z.string().trim().max(500, 'الرسالة لا يجب أن تتجاوز 500 حرف').optional(),
  companyWebsite: z.string().max(0, 'حقل غير مسموح'),
});

export type AdministrativeInquiryData = z.infer<typeof AdministrativeInquirySchema>;
