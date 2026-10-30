import { z } from 'zod';

export const gn17FormSchema = z.object({
  // Tax Bureau & Administrative routing
  wilaya: z.string().default('وهران'),
  recette: z.string().default('قباضة الضرائب العقيد لطفي'),
  inspection: z.string().default('مفتشية الضرائب وهران شرق'),

  // I. Cédant (المتنازل)
  cedantNomPrenom: z.string().min(2, 'الاسم واللقب مطلوب'),
  cedantDateNaissance: z.string().optional(),
  cedantLieuNaissance: z.string().optional(),
  cedantFiliation: z.string().optional(), // ابن ... و ...
  cedantAdresse: z.string().min(2, 'العنوان مطلوب'),
  cedantNif: z.string().optional(), // NIF / NIN
  cedantProfession: z.string().optional(),

  // Cessionnaire 1 (المشتري الأول)
  buyer1NomPrenom: z.string().min(2, 'اسم ولقب المشتري مطلوب'),
  buyer1DateLieu: z.string().optional(),
  buyer1Adresse: z.string().optional(),
  buyer1Nif: z.string().optional(),

  // Cessionnaire 2 (اختياري)
  buyer2NomPrenom: z.string().optional(),
  buyer2DateLieu: z.string().optional(),
  buyer2Adresse: z.string().optional(),
  buyer2Nif: z.string().optional(),

  // Cessionnaire 3 (اختياري)
  buyer3NomPrenom: z.string().optional(),
  buyer3DateLieu: z.string().optional(),
  buyer3Adresse: z.string().optional(),
  buyer3Nif: z.string().optional(),

  // II. Designation du bien (تعيين العقار)
  natureBien: z.string().min(2, 'طبيعة العقار مطلوبة'), // شقة، فيلا، قطعة أرض...
  situationBien: z.string().min(2, 'موقع العقار مطلوب'),
  commune: z.string().default('وهران'),
  cadastreRef: z.string().optional(), // القسم ورقم القطعة
  originePropriete: z.string().optional(), // عقد شراء، هبة، فريضة...
  dateActeOrigine: z.string().optional(),
  refPublicationOrigine: z.string().optional(), // مجلد ... رقم ...
  dateAchevement: z.string().optional(),
  natureActeCession: z.string().default('عقد بيع رسمي'),
  dateActeCession: z.string().optional(),

  // III. Montants & Plus-value (المبالغ)
  montantCession: z.coerce.number().min(1, 'سعر التنازل يجب أن يكون أكبر من الصفر'),
  fraisCession: z.coerce.number().min(0).default(0),
  valeurOrigine: z.coerce.number().min(0, 'سعر التملك الأصلي مطلوب'),
  fraisAcquisition: z.coerce.number().min(0).default(0),
  useFlatExpenses: z.boolean().default(false), // 3%
  anneeDetention: z.coerce.number().min(0).max(100).default(0),

  // IV. Liquidation de l'impôt (الضريبة)
  isSolePrimaryResidence: z.boolean().default(false), // تخفيض 50%
  faitA: z.string().default('وهران'),
  dateDeclaration: z.string().default(() => new Date().toISOString().split('T')[0]),
});

export type GN17FormData = z.infer<typeof gn17FormSchema>;

export const initialGN17Values: GN17FormData = {
  wilaya: 'وهران',
  recette: 'قباضة الضرائب العقيد لطفي',
  inspection: 'مفتشية الضرائب وهران شرق',
  cedantNomPrenom: '',
  cedantDateNaissance: '',
  cedantLieuNaissance: 'وهران',
  cedantFiliation: '',
  cedantAdresse: 'وهران',
  cedantNif: '',
  cedantProfession: '',
  buyer1NomPrenom: '',
  buyer1DateLieu: '',
  buyer1Adresse: 'وهران',
  buyer1Nif: '',
  buyer2NomPrenom: '',
  buyer2DateLieu: '',
  buyer2Adresse: '',
  buyer2Nif: '',
  buyer3NomPrenom: '',
  buyer3DateLieu: '',
  buyer3Adresse: '',
  buyer3Nif: '',
  natureBien: 'شقة سكنية (سكن ترقوي / فردي)',
  situationBien: 'حي العقيد لطفي، وهران',
  commune: 'وهران',
  cadastreRef: 'قسم 12، مجموعة ملكية رقم 45',
  originePropriete: 'عقد بيع رسمي مشهر بالمحافظة العقارية',
  dateActeOrigine: '2018-05-10',
  refPublicationOrigine: 'حجم 1245 رقم 67',
  dateAchevement: '2018-05-10',
  natureActeCession: 'عقد بيع نهائي',
  dateActeCession: new Date().toISOString().split('T')[0],
  montantCession: 18000000,
  fraisCession: 0,
  valeurOrigine: 12000000,
  fraisAcquisition: 360000,
  useFlatExpenses: true,
  anneeDetention: 8,
  isSolePrimaryResidence: false,
  faitA: 'وهران',
  dateDeclaration: new Date().toISOString().split('T')[0],
};
