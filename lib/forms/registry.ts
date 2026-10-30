import { FormalFormDefinition } from './types';

/**
 * Registry of official Algerian administrative & tax forms.
 * Single source of truth for the entire platform.
 */
export const FORM_REGISTRY: FormalFormDefinition[] = [
  {
    slug: 'gn17',
    templatePath: '/forms/gn17.pdf',
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
