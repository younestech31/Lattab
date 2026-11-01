import { FormalFormDefinition } from './types';

/**
 * Registry of official Algerian administrative & tax forms.
 * Single source of truth for the entire platform.
 */
export const FORM_REGISTRY: FormalFormDefinition[] = [
  {
    slug: 'gn17',
    templatePath: '/forms/gn17.pdf',
    templatePathFr: '/forms/gn17_fr.pdf',
    officialNumber: 'سلسلة ج رقم 17 / Série G N° 17',
    title: {
      ar: 'التصريح بفائض القيمة العقارية (ج رقم 17)',
      fr: 'Déclaration de Plus-Value Immobilière (Série G N° 17)',
    },
    shortDescription: {
      ar: 'استمارة التصريح بالضريبة على الدخل الإجمالي (IRG) بفائض القيمة الناتج عن التنازل عن العقارات المبنية وغير المبنية والحقوق العينية العقارية.',
      fr: 'Formulaire officiel de déclaration de la plus-value de cession d\'immeubles bâtis ou non bâtis et droits réels immobiliers (IRG/Plus-value).',
    },
    legalRef: {
      ar: 'المادة 80 مكرر و 80-1 من قانون الضرائب المباشرة والرسوم المماثلة (CIDTA)',
      fr: 'Articles 80 bis et 80-1 du Code des Impôts Directs et Taxes Assimilées (CIDTA)',
    },
    category: 'impots',
    pages: 2,
    enabled: true,
    badge: {
      ar: 'إلزامي خلال 30 يوماً',
      fr: 'Délai légal : 30 jours',
    },
  },
  {
    slug: 'gn31',
    templatePath: '/forms/gn31.pdf',
    officialNumber: 'سلسلة ج رقم 31 / Série G N° 31',
    title: {
      ar: 'تصريح الرسم العقاري (ج رقم 31)',
      fr: 'Déclaration de la taxe foncière (Série G N° 31)',
    },
    shortDescription: {
      ar: 'تصريح بالرسم العقاري على الملكيات المبنية وغير المبنية (المادة 261 مكرر من قانون الضرائب المباشرة والرسوم المماثلة CIDTA).',
      fr: 'Déclaration de la taxe foncière sur les propriétés bâties et non bâties (Art. 261 bis du CIDTA).',
    },
    legalRef: {
      ar: 'المادة 261 مكرر من قانون الضرائب المباشرة والرسوم المماثلة (CIDTA)',
      fr: 'Article 261 bis du Code des Impôts Directs et Taxes Assimilées (CIDTA)',
    },
    category: 'impots',
    pages: 4,
    enabled: true,
    badge: {
      ar: 'إيداع سنوي / تغيير',
      fr: 'Annuelle / Changement',
    },
  },
  {
    slug: 'gn8',
    templatePath: '/forms/gn8.pdf',
    officialNumber: 'سلسلة ج رقم 08 / Série G N° 08',
    title: {
      ar: 'تصريح بالوجود (ج رقم 08)',
      fr: 'Déclaration d\'existence (Série G N° 08)',
    },
    shortDescription: {
      ar: 'تصريح يكتتب في الثلاثين (30) يوماً التي تلي بداية النشاط لدى مصالح الضرائب لمكان ممارسة النشاط.',
      fr: 'Déclaration à souscrire dans les 30 jours suivant le début d\'activité auprès des services fiscaux du lieu d\'exercice.',
    },
    legalRef: {
      ar: 'المادة 51 من قانون الرسوم على رقم الأعمال والمادة 183 من قانون الضرائب المباشرة والرسوم المماثلة',
      fr: 'Article 51 du CTCA et Article 183 du CIDTA',
    },
    category: 'impots',
    pages: 2,
    enabled: true,
    badge: {
      ar: 'إلزامي خلال 30 يوماً',
      fr: 'Délai légal : 30 jours',
    },
  },
  {
    // Disabled example entry to verify registry extensibility and resilience
    slug: 'gn18',
    templatePath: '/forms/gn18.pdf',
    officialNumber: 'سلسلة ج رقم 18 / Série G N° 18',
    title: {
      ar: 'تصريح التنازل عن الأسهم والحصص الاجتماعية (ج 18)',
      fr: 'Déclaration de cession d\'actions et parts sociales (G N° 18)',
    },
    shortDescription: {
      ar: 'تصريح جبائي بفائض القيمة المحقق من التنازل عن الحصص الاجتماعية في الشركات.',
      fr: 'Déclaration fiscale de plus-value sur cession de parts sociales.',
    },
    legalRef: {
      ar: 'قانون الضرائب المباشرة والرسوم المماثلة',
      fr: 'Code des Impôts Directs',
    },
    category: 'impots',
    pages: 2,
    enabled: false,
  },
];

export function getEnabledForms(): FormalFormDefinition[] {
  return FORM_REGISTRY.filter((f) => f.enabled);
}

export function getFormBySlug(slug: string): FormalFormDefinition | undefined {
  return FORM_REGISTRY.find((f) => f.slug === slug);
}
