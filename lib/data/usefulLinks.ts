// lib/data/usefulLinks.ts
// Verified official Algerian government portals — last checked: 2026-05-22
// All URLs are .gov.dz, .dz state-agency domains, or JORADP official domains.
// Never link to commercial aggregators or private portals.

import type { Language } from '@/lib/i18n/translations';

export interface UsefulLink {
  id: string;
  url: string;
  icon: string;             // Lucide icon name string
  ar: { label: string; description: string };
  fr: { label: string; description: string };
  /** Relevance to notarial acts — used for SEO keyword context */
  tags: string[];
}

export interface UsefulLinksCategory {
  id: string;
  ar: { title: string; subtitle: string };
  fr: { title: string; subtitle: string };
  links: UsefulLink[];
}

export const USEFUL_LINKS_CATEGORIES: UsefulLinksCategory[] = [

  // ─── 1. LÉGISLATION & JOURNAL OFFICIEL ───────────────────────────────────
  {
    id: 'legislation',
    ar: {
      title: 'التشريع والتنظيم',
      subtitle: 'النصوص القانونية الرسمية المعتمدة في الجزائر',
    },
    fr: {
      title: 'Législation & Réglementation',
      subtitle: 'Textes juridiques officiels de la République algérienne',
    },
    links: [
      {
        id: 'joradp',
        url: 'https://www.joradp.dz',
        icon: 'BookOpen',
        ar: {
          label: 'الجريدة الرسمية للجمهورية الجزائرية',
          description: 'مصدر النصوص القانونية والتنظيمية الرسمية: القوانين والمراسيم والأوامر',
        },
        fr: {
          label: 'Journal Officiel de la République Algérienne',
          description: 'Source officielle des lois, décrets, ordonnances et textes réglementaires',
        },
        tags: ['loi', 'décret', 'ordonnance', 'qanun', 'tashri3'],
      },
      {
        id: 'mjustice',
        url: 'https://www.mjustice.dz',
        icon: 'Scale',
        ar: {
          label: 'وزارة العدل',
          description: 'بوابة وزارة العدل: حفظ الحقوق وتنظيم المهن القانونية بما فيها التوثيق',
        },
        fr: {
          label: 'Ministère de la Justice',
          description: 'Portail officiel: droit, organisation judiciaire et professions juridiques dont le notariat',
        },
        tags: ['justice', 'notariat', 'professions juridiques', 'tawthiq'],
      },
    ],
  },

  // ─── 2. FISCALITÉ & FINANCES ─────────────────────────────────────────────
  {
    id: 'fiscalite',
    ar: {
      title: 'الجباية والمالية',
      subtitle: 'الإدارات الجبائية وبوابات الدفع والسعر المرجعي',
    },
    fr: {
      title: 'Fiscalité & Finances Publiques',
      subtitle: 'Administrations fiscales, paiements en ligne et prix de référence',
    },
    links: [
      {
        id: 'mfdgi',
        url: 'https://www.mfdgi.gov.dz',
        icon: 'Calculator',
        ar: {
          label: 'المديرية العامة للضرائب',
          description: 'بوابة الضرائب: السعر المرجعي للعقار، تسجيل العقود، الجداول الضريبية',
        },
        fr: {
          label: 'Direction Générale des Impôts (DGI)',
          description: 'Portail fiscal: prix de référence immobilier, droits d\'enregistrement, tableaux fiscaux',
        },
        tags: ['impôts', 'prix référence', 'enregistrement', 'daribah', 'si3r marji3i'],
      },
      {
        id: 'mf',
        url: 'https://www.mf.gov.dz',
        icon: 'Landmark',
        ar: {
          label: 'وزارة المالية',
          description: 'قوانين المالية، تعديلات الميزانية، والتشريعات المالية المؤثرة في التوثيق',
        },
        fr: {
          label: 'Ministère des Finances',
          description: 'Lois de finances, textes budgétaires et réglementations financières liées aux actes notariés',
        },
        tags: ['loi de finances', 'budget', 'fiscalité immobilière'],
      },
      {
        id: 'fadaeldjazair',
        url: 'https://fadaeldjazair.mf.gov.dz',
        icon: 'Map',
        ar: {
          label: 'بوابة فضاء الجزائر الجغرافية',
          description: 'الجيوبورتال الرسمي: البيانات المساحية والعقارية على كامل التراب الوطني',
        },
        fr: {
          label: 'Géoportail Fadaeldjazair',
          description: 'Portail géographique officiel: données cadastrales et foncières sur tout le territoire national',
        },
        tags: ['cadastre', 'foncier', 'masaha', 'plan cadastral'],
      },
    ],
  },

  // ─── 3. REGISTRE DU COMMERCE & INVESTISSEMENT ────────────────────────────
  {
    id: 'commerce',
    ar: {
      title: 'السجل التجاري والاستثمار',
      subtitle: 'تأسيس الشركات والاستثمار الرسمي',
    },
    fr: {
      title: 'Registre du Commerce & Investissements',
      subtitle: 'Création de sociétés, immatriculation et cadre légal de l\'investissement',
    },
    links: [
      {
        id: 'cnrc',
        url: 'https://www.cnrc.dz',
        icon: 'Building2',
        ar: {
          label: 'المركز الوطني للسجل التجاري (CNRC)',
          description: 'تسجيل الشركات والمؤسسات، الاستعلام عن السجلات التجارية',
        },
        fr: {
          label: 'Centre National du Registre du Commerce (CNRC)',
          description: 'Immatriculation des sociétés, consultation des registres commerciaux',
        },
        tags: ['CNRC', 'registre commerce', 'société', 'SARL', 'SPA', 'sharikah'],
      },
      {
        id: 'aapi',
        url: 'https://www.aapi.dz',
        icon: 'TrendingUp',
        ar: {
          label: 'وكالة ترقية الاستثمار (AAPI)',
          description: 'المنصة الرقمية للمستثمرين، الوعاء العقاري الاقتصادي وإجراءات الاستثمار',
        },
        fr: {
          label: 'Agence Algérienne de Promotion de l\'Investissement (AAPI)',
          description: 'Plateforme numérique invest.gov.dz, foncier économique et procédures d\'investissement',
        },
        tags: ['investissement', 'foncier économique', 'AAPI', 'istithmar'],
      },
      {
        id: 'commerce-gov',
        url: 'https://www.commerce.gov.dz',
        icon: 'Store',
        ar: {
          label: 'وزارة التجارة',
          description: 'تنظيم التجارة وحماية المستهلك وشروط مزاولة النشاط التجاري',
        },
        fr: {
          label: 'Ministère du Commerce',
          description: 'Réglementation commerciale, protection du consommateur, conditions d\'exercice du commerce',
        },
        tags: ['commerce', 'tijarah', 'réglementation commerciale'],
      },
    ],
  },

  // ─── 4. IMMOBILIER & FONCIER ─────────────────────────────────────────────
  {
    id: 'immobilier',
    ar: {
      title: 'العقار والأملاك',
      subtitle: 'برامج السكن، التسجيل العقاري والمنشآت العمومية',
    },
    fr: {
      title: 'Immobilier & Foncier',
      subtitle: 'Programmes de logement, enregistrement foncier et organismes publics immobiliers',
    },
    links: [
      {
        id: 'aadl',
        url: 'https://www.aadl.com.dz',
        icon: 'Home',
        ar: {
          label: 'وكالة عدل (AADL)',
          description: 'برامج السكن بالإيجار المفضي للتملك AADL 2 و AADL 3، الاستعلام والتسجيل',
        },
        fr: {
          label: 'Agence AADL',
          description: 'Programmes de logement location-vente AADL 2 et AADL 3, suivi des dossiers',
        },
        tags: ['AADL', 'logement', 'location-vente', 'maskan', 'sukan'],
      },
      {
        id: 'mhuv',
        url: 'https://www.mhuv.gov.dz',
        icon: 'Building',
        ar: {
          label: 'وزارة السكن والعمران والمدينة',
          description: 'برامج السكن الوطنية، التعمير، رخص البناء والامتثال',
        },
        fr: {
          label: 'Ministère de l\'Habitat, de l\'Urbanisme et de la Ville',
          description: 'Programmes nationaux de logement, urbanisme, permis de construire et conformité',
        },
        tags: ['habitat', 'urbanisme', 'permis construire', 'conformité', 'tasri7 al-bina2'],
      },
      {
        id: 'domaines',
        url: 'https://www.domaines.dz',
        icon: 'FileSearch',
        ar: {
          label: 'المديرية العامة للأملاك الوطنية',
          description: 'الأملاك العقارية للدولة، التنازل عن الملكية العامة، شهادات السلبية',
        },
        fr: {
          label: 'Direction Générale des Domaines Nationaux',
          description: 'Patrimoine immobilier de l\'État, cession de biens publics, certificats négatifs',
        },
        tags: ['domaines', 'bien public', 'certificat négatif', 'cession', 'amlak dawla'],
      },
    ],
  },

  // ─── 5. SÉCURITÉ SOCIALE & TRAVAIL ───────────────────────────────────────
  {
    id: 'social',
    ar: {
      title: 'الضمان الاجتماعي والعمل',
      subtitle: 'التغطية الاجتماعية وعقود الشغل والتأمينات',
    },
    fr: {
      title: 'Sécurité Sociale & Travail',
      subtitle: 'Couverture sociale, contrats de travail et assurances obligatoires',
    },
    links: [
      {
        id: 'cnas',
        url: 'https://www.cnas.dz',
        icon: 'ShieldCheck',
        ar: {
          label: 'الصندوق الوطني للتأمينات الاجتماعية (CNAS)',
          description: 'التأمين الصحي للعمال، الاشتراكات الاجتماعية، إجراءات الضمان الاجتماعي',
        },
        fr: {
          label: 'Caisse Nationale des Assurances Sociales (CNAS)',
          description: 'Assurance maladie des salariés, cotisations sociales, prestations de la sécurité sociale',
        },
        tags: ['CNAS', 'sécurité sociale', 'assurance maladie', 'daman ijtima3i'],
      },
      {
        id: 'casnos',
        url: 'https://www.casnos.com.dz',
        icon: 'UserCheck',
        ar: {
          label: 'CASNOS — ضمان غير الأجراء',
          description: 'الضمان الاجتماعي للعمال غير الأجراء والمهنيين الحرين والتجار',
        },
        fr: {
          label: 'CASNOS — Non-salariés',
          description: 'Sécurité sociale des travailleurs non-salariés, professions libérales et commerçants',
        },
        tags: ['CASNOS', 'non-salarié', 'profession libérale', 'ghayr ajir'],
      },
      {
        id: 'mtess',
        url: 'https://www.mtess.gov.dz',
        icon: 'Briefcase',
        ar: {
          label: 'وزارة العمل والتشغيل والضمان الاجتماعي',
          description: 'قانون العمل، تسوية النزاعات المهنية، وتشريعات الضمان الاجتماعي',
        },
        fr: {
          label: 'Ministère du Travail, de l\'Emploi et de la Sécurité Sociale',
          description: 'Droit du travail, règlement des conflits professionnels, législation sociale',
        },
        tags: ['travail', 'amal', 'droit du travail', 'contrat travail'],
      },
    ],
  },

];

/** Returns all links flattened with their category for search/SEO purposes */
export function getAllUsefulLinks(): (UsefulLink & { categoryId: string })[] {
  return USEFUL_LINKS_CATEGORIES.flatMap(cat =>
    cat.links.map(link => ({ ...link, categoryId: cat.id }))
  );
}

/** Returns localized label and description for a given link */
export function getLocalizedLink(link: UsefulLink, lang: Language) {
  return lang === 'fr' ? link.fr : link.ar;
}
