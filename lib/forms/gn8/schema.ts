import { z } from 'zod';

export const gn8FormSchema = z.object({
  // التوجيه الإداري
  directionWilaya: z.string().default(''),
  service: z.string().default(''),

  // المعرفات الجبائية
  nif: z.string().default(''), // 20 digits
  nai: z.string().default(''), // 11 digits (رقم المادة)

  // النظام الجبائي
  regime: z.enum(['ibs', 'irg', 'ifu', 'unspecified']).default('unspecified'),
  irgCategorie: z.string().default(''), // صنف الخضوع في IRG (مثل BIC, BNC, مهن حرة)

  // معلومات المكلف بالضريبة
  taxpayerType: z.enum(['physique', 'morale', 'auto_entrepreneur', 'unspecified']).default('unspecified'),
  nomRaisonSociale: z.string().default(''),
  nin: z.string().default(''), // 18 digits (رقم التعريف الوطني)
  formeJuridique: z.string().default(''),
  activitePrincipale: z.string().default(''),

  // النشاطات الثانوية وعناوينها (حتى 3)
  activiteSec1: z.string().default(''),
  activiteSec1_adr: z.string().default(''),
  activiteSec2: z.string().default(''),
  activiteSec2_adr: z.string().default(''),
  activiteSec3: z.string().default(''),

  // العناوين والاتصال
  adresseSiege: z.string().default(''),
  adresseEtablissementAlgerie: z.string().default(''), // للشركات الأجنبية
  adresseResidence: z.string().default(''), // إقامة المكلف بالضريبة
  telephone: z.string().default(''),
  email: z.string().default(''),
  numeroRc: z.string().default(''), // رقم السجل التجاري
  numeroAgrement: z.string().default(''), // رقم الاعتماد / بطاقة الحرفي / المقاول الذاتي

  // صفة المصرح وتاريخ البداية
  qualiteDeclarant: z.enum(['proprietaire', 'locataire', 'gerant_libre', 'gerant_salarie', 'unspecified']).default('unspecified'),
  dateDebutActivite: z.string().default(''),

  // التصديق والإقرار
  faitA: z.string().default(''),
  dateDeclaration: z.string().default(''),
});

export type GN8FormData = z.infer<typeof gn8FormSchema>;

export const initialGN8Values: GN8FormData = {
  directionWilaya: '',
  service: '',
  nif: '',
  nai: '',
  regime: 'unspecified',
  irgCategorie: '',
  taxpayerType: 'unspecified',
  nomRaisonSociale: '',
  nin: '',
  formeJuridique: '',
  activitePrincipale: '',
  activiteSec1: '',
  activiteSec1_adr: '',
  activiteSec2: '',
  activiteSec2_adr: '',
  activiteSec3: '',
  adresseSiege: '',
  adresseEtablissementAlgerie: '',
  adresseResidence: '',
  telephone: '',
  email: '',
  numeroRc: '',
  numeroAgrement: '',
  qualiteDeclarant: 'unspecified',
  dateDebutActivite: '',
  faitA: '',
  dateDeclaration: '',
};
