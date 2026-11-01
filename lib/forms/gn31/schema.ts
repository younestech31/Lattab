import { z } from 'zod';

export const gn31FormSchema = z.object({
  // Administrative routing
  directionWilaya: z.string().default(''),
  commune: z.string().default(''),
  inspection: z.string().default(''),

  // Identifiers
  nif: z.string().default(''), // 20 digits
  nai: z.string().default(''), // 11 digits (رقم المادة)
  nin: z.string().default(''), // 18 digits (رقم التعريف الوطني)

  // Declaration Type
  declarationType: z.enum(['first_year', 'change']).default('first_year'),

  // Section I: موقع الملكية
  propWilaya: z.string().default(''),
  propCommune: z.string().default(''),
  propRue: z.string().default(''),
  propDetails: z.string().default(''),

  // Section II: تعيين الشاغل
  occupantType: z.enum(['physique', 'morale']).default('physique'),

  // Personne physique
  nomPrenom: z.string().default(''),
  dateLieuNaissance: z.string().default(''),
  adresseResidence: z.string().default(''),
  communeResidence: z.string().default(''),
  wilayaResidence: z.string().default(''),
  codePostal: z.string().default(''),
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
  faitA: z.string().default(''),
  dateDeclaration: z.string().default(''),
});

export type GN31FormData = z.infer<typeof gn31FormSchema>;

export const initialGN31Values: GN31FormData = {
  directionWilaya: '',
  commune: '',
  inspection: '',
  nif: '',
  nai: '',
  nin: '',
  declarationType: 'first_year',
  propWilaya: '',
  propCommune: '',
  propRue: '',
  propDetails: '',
  occupantType: 'physique',
  nomPrenom: '',
  dateLieuNaissance: '',
  adresseResidence: '',
  communeResidence: '',
  wilayaResidence: '',
  codePostal: '',
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
  dateAchat: '',
  dateAchevement: '',
  dateOccupationPartielle: '',
  dateOccupationTotale: '',
  usageResidence: 'principale',
  isLoue: false,
  superficieTotale: 0,
  superficieHabitation: 0,
  superficieProfessionnelle: 0,
  superficieDependances: 0,
  superficieNonBatie: 0,
  nbEtages: 0,
  surfaceAgricoleIrriguee: 0,
  surfaceAgricoleNonIrriguee: 0,
  surfaceTerrainConstructible: 0,
  faitA: '',
  dateDeclaration: '',
};
