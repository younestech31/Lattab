import { z } from 'zod';

export const gn17FormSchema = z.object({
  // Tax Bureau & Administrative routing
  wilaya: z.string().default(''),
  recette: z.string().default(''),
  inspection: z.string().default(''),

  // I. Cédant (المتنازل)
  cedantNomPrenom: z.string().min(2, 'الاسم واللقب مطلوب'),
  cedantDateNaissance: z.string().optional(),
  cedantLieuNaissance: z.string().optional(),
  cedantFiliation: z.string().optional(), // ابن ... و ...
  cedantAdresse: z.string().min(2, 'العنوان مطلوب'),
  cedantCommune: z.string().default(''),
  cedantWilaya: z.string().default(''),
  cedantCodePostal: z.string().default(''),
  cedantNin: z.string().default(''), // NIN (رقم التعريف الوطني)
  cedantNif: z.string().default(''), // NIF
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
  commune: z.string().default(''),
  cadastreRef: z.string().optional(), // القسم ورقم القطعة
  originePropriete: z.string().optional(), // عقد شراء، هبة، فريضة...
  dateActeOrigine: z.string().optional(),
  refPublicationOrigine: z.string().optional(), // مجلد ... رقم ...
  dateAchevement: z.string().optional(),
  natureActeCession: z.string().default(''),
  dateActeCession: z.string().optional(),

  // III. Montants & Plus-value (المبالغ)
  montantCession: z.coerce.number().min(0).default(0),
  fraisCession: z.coerce.number().min(0).default(0),
  fraisAutres: z.coerce.number().min(0).default(0), // ج: مصاريف أخرى مثبتة قانوناً
  valeurOrigine: z.coerce.number().min(0).default(0),
  fraisAcquisition: z.coerce.number().min(0).default(0),
  acquisitionPriceUnknown: z.boolean().default(false), // 40% of sale price per Art. 78 CIDTA / LF 2026
  anneeDetention: z.coerce.number().min(0).max(100).default(0),

  // IV. Liquidation de l'impôt (الضريبة)
  isSolePrimaryResidence: z.boolean().default(false), // تخفيض 50%
  faitA: z.string().default(''),
  dateDeclaration: z.string().default(''),
});

export type GN17FormData = z.infer<typeof gn17FormSchema>;

export const initialGN17Values: GN17FormData = {
  wilaya: '',
  recette: '',
  inspection: '',
  cedantNomPrenom: '',
  cedantDateNaissance: '',
  cedantLieuNaissance: '',
  cedantFiliation: '',
  cedantAdresse: '',
  cedantCommune: '',
  cedantWilaya: '',
  cedantCodePostal: '',
  cedantNin: '',
  cedantNif: '',
  cedantProfession: '',
  buyer1NomPrenom: '',
  buyer1DateLieu: '',
  buyer1Adresse: '',
  buyer1Nif: '',
  buyer2NomPrenom: '',
  buyer2DateLieu: '',
  buyer2Adresse: '',
  buyer2Nif: '',
  buyer3NomPrenom: '',
  buyer3DateLieu: '',
  buyer3Adresse: '',
  buyer3Nif: '',
  natureBien: '',
  situationBien: '',
  commune: '',
  cadastreRef: '',
  originePropriete: '',
  dateActeOrigine: '',
  refPublicationOrigine: '',
  dateAchevement: '',
  natureActeCession: '',
  dateActeCession: '',
  montantCession: 0,
  fraisCession: 0,
  fraisAutres: 0,
  valeurOrigine: 0,
  fraisAcquisition: 0,
  acquisitionPriceUnknown: false,
  anneeDetention: 0,
  isSolePrimaryResidence: false,
  faitA: '',
  dateDeclaration: '',
};
