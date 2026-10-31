import { z } from 'zod';

export const gn31FormSchema = z.object({
  // Administrative routing
  directionWilaya: z.string().default('وهران'),
  commune: z.string().default('وهران'),
  inspection: z.string().default('مفتشية الضرائب وهران شرق'),

  // Identifiers
  nif: z.string().default(''), // 20 digits
  nai: z.string().default(''), // 11 digits (رقم المادة)
  nin: z.string().default(''), // 18 digits (رقم التعريف الوطني)

  // Declaration Type
  declarationType: z.enum(['first_year', 'change']).default('first_year'),

  // Section I: موقع الملكية
  propWilaya: z.string().default('وهران'),
  propCommune: z.string().default('وهران'),
  propRue: z.string().min(2, 'عنوان أو شارع الملكية مطلوب'),
  propDetails: z.string().default(''),

  // Section II: تعيين الشاغل
  occupantType: z.enum(['physique', 'morale']).default('physique'),

  // Personne physique
  nomPrenom: z.string().default(''),
  dateLieuNaissance: z.string().default(''),
  adresseResidence: z.string().default(''),
  communeResidence: z.string().default('وهران'),
  wilayaResidence: z.string().default('وهران'),
  codePostal: z.string().default('31000'),
  telephone: z.string().default(''),
  email: z.string().default(''),
  qualitePhysique: z.enum(['proprietaire', 'usufruitier']).default('proprietaire'),

  // Personne morale
  nomSociete: z.string().default(''),
  siegeSocial: z.string().default(''),
  telSociete: z.string().default(''),
  faxSociete: z.string().default(''),
  emailSociete: z.string().default(''),
  qualiteMorale: z.enum(['proprietaire', 'concessionnaire']).default('proprietaire'),

  // Section III: معلومات تخص الملكية
  natureBien: z.enum(['individuel', 'appartement', 'collectif', 'professionnel', 'terrain']).default('individuel'),

  // Dates
  dateAchat: z.string().default(''),
  dateAchevement: z.string().default(''),
  dateOccupationPartielle: z.string().default(''),
  dateOccupationTotale: z.string().default(''),

  // Residential details (Page 2)
  usageResidence: z.enum(['principale', 'secondaire']).default('principale'),
  isLoue: z.boolean().default(false),

  // Areas (m²)
  superficieTotale: z.coerce.number().min(0).default(0),
  superficieHabitation: z.coerce.number().min(0).default(0),
  superficieProfessionnelle: z.coerce.number().min(0).default(0),
  superficieDependances: z.coerce.number().min(0).default(0),
  superficieNonBatie: z.coerce.number().min(0).default(0),

  // Collective building details
  nbEtages: z.coerce.number().min(0).default(0),

  // Non-bâties / Terrains (Page 3)
  surfaceAgricoleIrriguee: z.coerce.number().min(0).default(0), // hectares
  surfaceAgricoleNonIrriguee: z.coerce.number().min(0).default(0), // hectares
  surfaceTerrainConstructible: z.coerce.number().min(0).default(0), // m²

  // Final Signature Block
  faitA: z.string().default('وهران'),
  dateDeclaration: z.string().default(() => new Date().toISOString().split('T')[0]),
});

export type GN31FormData = z.infer<typeof gn31FormSchema>;

export const initialGN31Values: GN31FormData = {
  directionWilaya: 'وهران',
  commune: 'وهران',
  inspection: 'مفتشية الضرائب وهران شرق',
  nif: '',
  nai: '',
  nin: '',
  declarationType: 'first_year',
  propWilaya: 'وهران',
  propCommune: 'وهران',
  propRue: 'حي العقيد لطفي',
  propDetails: 'عمارة A، الطابق 3، رقم 12',
  occupantType: 'physique',
  nomPrenom: '',
  dateLieuNaissance: '',
  adresseResidence: 'وهران',
  communeResidence: 'وهران',
  wilayaResidence: 'وهران',
  codePostal: '31000',
  telephone: '',
  email: '',
  qualitePhysique: 'proprietaire',
  nomSociete: '',
  siegeSocial: '',
  telSociete: '',
  faxSociete: '',
  emailSociete: '',
  qualiteMorale: 'proprietaire',
  natureBien: 'individuel',
  dateAchat: '2020-01-15',
  dateAchevement: '2020-01-15',
  dateOccupationPartielle: '',
  dateOccupationTotale: '2020-02-01',
  usageResidence: 'principale',
  isLoue: false,
  superficieTotale: 150,
  superficieHabitation: 130,
  superficieProfessionnelle: 0,
  superficieDependances: 20,
  superficieNonBatie: 50,
  nbEtages: 1,
  surfaceAgricoleIrriguee: 0,
  surfaceAgricoleNonIrriguee: 0,
  surfaceTerrainConstructible: 0,
  faitA: 'وهران',
  dateDeclaration: new Date().toISOString().split('T')[0],
};
