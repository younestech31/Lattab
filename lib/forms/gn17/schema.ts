import { z } from 'zod';

export const gn17FormSchema = z.object({
  // Tax Bureau & Administrative routing
  wilaya: z.string().default(''),
  recette: z.string().default(''),
  // En-tête administratif
  wilaya: z.string().default(''),
  recette: z.string().default(''),

  // I. Désignation du cédant
  cedantNomPrenom: z.string().min(2, 'الاسم واللقب مطلوب'),
  cedantAdresse: z.string().min(2, 'العنوان مطلوب'),
  cedantCommune: z.string().default(''),
  cedantWilaya: z.string().default(''),
  cedantCodePostal: z.string().default(''),
  cedantNin: z.string().default(''),
  cedantNif: z.string().default(''),

  // I. Désignation des acquéreurs (three official rows)
  buyer1NomPrenom: z.string().min(2, 'اسم ولقب المشتري الأول مطلوب'),
  buyer1Adresse: z.string().default(''),
  buyer2NomPrenom: z.string().default(''),
  buyer2Adresse: z.string().default(''),
  buyer3NomPrenom: z.string().default(''),
  buyer3Adresse: z.string().default(''),

  // II. Désignation du bien ou des droits réels cédés
  natureBien: z.string().min(2, 'طبيعة العقار مطلوبة'),
  consistanceGlobale: z.string().default(''),
  natureDroitsReels: z.string().default(''),
  situationBien: z.string().min(2, 'موقع العقار مطلوب'),
  commune: z.string().default(''),
  wilayaBien: z.string().default(''),
  codePostalBien: z.string().default(''),
  articleImposition: z.string().default(''),
  natureOperation: z.enum(['onerous', 'donation', 'unspecified']).default('unspecified'),
  originePropriete: z.string().default(''),
  dateActeOrigine: z.string().default(''),
  dateActeCession: z.string().default(''),
  natureActeCession: z.string().default(''),

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
  wilaya: '',
  recette: '',
  cedantNomPrenom: '',
  cedantAdresse: '',
  cedantCommune: '',
  cedantWilaya: '',
  cedantCodePostal: '',
  cedantNin: '',
  cedantNif: '',
  buyer1NomPrenom: '',
  buyer1Adresse: '',
  buyer2NomPrenom: '',
  buyer2Adresse: '',
  buyer3NomPrenom: '',
  buyer3Adresse: '',
  natureBien: '',
  consistanceGlobale: '',
  natureDroitsReels: '',
  situationBien: '',
  commune: '',
  wilayaBien: '',
  codePostalBien: '',
  articleImposition: '',
  natureOperation: 'unspecified',
  originePropriete: '',
  dateActeOrigine: '',
  dateActeCession: '',
  natureActeCession: '',
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
