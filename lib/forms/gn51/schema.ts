import { z } from 'zod';

export const gn51FormSchema = z.object({
  // En-tête administratif
  wilaya: z.string().default('وهران'),
  structure: z.string().default('قباضة الضرائب وهران المركز'),

  // I. Bailleur (المؤجر)
  bailleurNom: z.string().default(''),
  bailleurAdresse: z.string().default(''),
  bailleurCommune: z.string().default('وهران'),
  bailleurWilaya: z.string().default('وهران'),
  bailleurCodePostal: z.string().default('31000'),
  bailleurNif: z.string().default(''),
  bailleurNin: z.string().default(''),

  // I. Preneur (المستأجر)
  preneurNom: z.string().default(''),
  preneurAdresse: z.string().default(''),
  preneurCommune: z.string().default(''),
  preneurWilaya: z.string().default(''),
  preneurCodePostal: z.string().default(''),
  preneurNif: z.string().default(''),
  preneurNin: z.string().default(''),

  // II. Bien loué (العقار المؤجر)
  natureBien: z.string().default('شقة / Appartement'),
  lieuSituation: z.string().default(''),
  communeBien: z.string().default('وهران'),
  wilayaBien: z.string().default('وهران'),
  codePostalBien: z.string().default('31000'),
  articleImposition: z.string().default(''),
  destination: z.enum(['habitation', 'commercial', 'agricole']).default('habitation'),
  dateDebutContrat: z.string().default(''),
  dateFinContrat: z.string().default(''),
  periodicite: z.string().default('شهريا / Mensuelle'),

  // III. Montants et imposition (المبالغ والضريبة)
  isOverThreshold: z.boolean().default(false), // > 1.800.000 DA
  // ≤ 1.800.000 DA
  loyerHabitation: z.coerce.number().min(0).default(0),
  loyerCommercial: z.coerce.number().min(0).default(0),
  loyerNonBatiNonAgricole: z.coerce.number().min(0).default(0),
  loyerAgricole: z.coerce.number().min(0).default(0),
  // > 1.800.000 DA
  loyerExcedentaire: z.coerce.number().min(0).default(0),

  // Mode de paiement & certification
  modePaiement: z.enum(['cheque_bancaire', 'cheque_postal', 'numeraire']).default('numeraire'),
  chequeBanqueNum: z.string().default(''),
  chequeBanqueDate: z.string().default(''),
  chequeBanqueAgence: z.string().default(''),
  chequePostalNum: z.string().default(''),
  chequePostalDate: z.string().default(''),

  faitA: z.string().default('وهران'),
  dateDeclaration: z.string().default(''),
});

export type GN51FormData = z.infer<typeof gn51FormSchema>;

export const initialGN51Values: GN51FormData = {
  wilaya: 'وهران',
  structure: 'قباضة الضرائب وهران المركز',

  bailleurNom: '',
  bailleurAdresse: '',
  bailleurCommune: 'وهران',
  bailleurWilaya: 'وهران',
  bailleurCodePostal: '31000',
  bailleurNif: '',
  bailleurNin: '',

  preneurNom: '',
  preneurAdresse: '',
  preneurCommune: '',
  preneurWilaya: '',
  preneurCodePostal: '',
  preneurNif: '',
  preneurNin: '',

  natureBien: 'شقة / Appartement',
  lieuSituation: '',
  communeBien: 'وهران',
  wilayaBien: 'وهران',
  codePostalBien: '31000',
  articleImposition: '',
  destination: 'habitation',
  dateDebutContrat: '',
  dateFinContrat: '',
  periodicite: 'شهريا / Mensuelle',

  isOverThreshold: false,
  loyerHabitation: 0,
  loyerCommercial: 0,
  loyerNonBatiNonAgricole: 0,
  loyerAgricole: 0,
  loyerExcedentaire: 0,

  modePaiement: 'numeraire',
  chequeBanqueNum: '',
  chequeBanqueDate: '',
  chequeBanqueAgence: '',
  chequePostalNum: '',
  chequePostalDate: '',

  faitA: 'وهران',
  dateDeclaration: '',
};
