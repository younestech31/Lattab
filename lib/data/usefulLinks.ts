export type UsefulLink = {
  id: string;
  url: string;
  name: { ar: string; fr: string };
  desc: { ar: string; fr: string };
  category: 'justice' | 'commerce' | 'property_tax' | 'local';
};

export type UsefulCategory = {
  id: UsefulLink['category'];
  title: { ar: string; fr: string };
  icon: 'scale' | 'building' | 'book' | 'landmark';
};

export const USEFUL_LINK_CATEGORIES: UsefulCategory[] = [
  {
    id: 'justice',
    title: { ar: 'القطاع القضائي والعدالة', fr: 'Secteur de la Justice' },
    icon: 'scale',
  },
  {
    id: 'commerce',
    title: { ar: 'الاستثمار وتأسيس الشركات', fr: 'Investissement et Entreprises' },
    icon: 'building',
  },
  {
    id: 'property_tax',
    title: { ar: 'الضرائب والعقارات والسكن', fr: 'Fiscalité, Immobilier et Logement' },
    icon: 'book',
  },
  {
    id: 'local',
    title: { ar: 'الإدارة المحلية والشؤون المحلية', fr: 'Administration et Affaires Locales' },
    icon: 'landmark',
  },
];

export const USEFUL_LINKS: UsefulLink[] = [
  {
    id: 'mjustice',
    url: 'https://www.mjustice.dz',
    name: { ar: 'وزارة العدل الجزائرية', fr: 'Ministère de la Justice Algérien' },
    desc: {
      ar: 'البوابة الرسمية لوزارة العدل والاطلاع على القوانين المنظمة لمهنة التوثيق والشؤون القضائية.',
      fr: 'Portail officiel du Ministère de la Justice pour consulter les lois régissant le notariat.',
    },
    category: 'justice',
  },
  {
    id: 'joradp',
    url: 'https://www.joradp.dz',
    name: { ar: 'الأمانة العامة للحكومة - الجريدة الرسمية', fr: 'Secrétariat Général du Gouvernement - Journal Officiel' },
    desc: {
      ar: 'المرجع الرسمي لتحميل المراسيم التنفيذية والقوانين العقارية والتشريعات المحدثة بالجمهورية.',
      fr: 'Référence officielle pour télécharger les décrets exécutifs et les lois foncières de la République.',
    },
    category: 'justice',
  },
  {
    id: 'cnn',
    url: 'https://www.cnn.dz',
    name: { ar: 'الغرفة الوطنية للموثقين', fr: 'Chambre Nationale des Notaires (CNN)' },
    desc: {
      ar: 'الهيئة الممثلة لمهنة الموثقين لتنظيم الشأن التوثيقي ومتابعة المقاييس المهنية والأخلاقية.',
      fr: 'Organe représentatif de la profession notariale pour réguler les normes déontologiques.',
    },
    category: 'justice',
  },
  {
    id: 'aapi',
    url: 'https://www.aapi.dz',
    name: { ar: 'الوكالة الجزائرية لترقية الاستثمار (AAPI)', fr: 'Agence Algérienne de Promotion de l\'Investissement' },
    desc: {
      ar: 'البوابة الرسمية لتسجيل المشاريع الاستثمارية والاستفادة من المزايا الجبائية وشروط العقار الاقتصادي.',
      fr: 'Portail pour l\'enregistrement des projets d\'investissement et l\'accès aux avantages fiscaux.',
    },
    category: 'commerce',
  },
  {
    id: 'cnrc',
    url: 'https://sidjilcom.cnrc.dz',
    name: { ar: 'المركز الوطني للسجل التجاري - سجلكوم (CNRC)', fr: 'Centre National du Registre du Commerce (CNRC)' },
    desc: {
      ar: 'التحقق من قيد الشركات التجارية، حجز التسميات الاجتماعية للمؤسسات، وإيداع الحسابات السنوية.',
      fr: 'Vérification du registre des sociétés, réservation de dénominations et dépôt des comptes.',
    },
    category: 'commerce',
  },
  {
    id: 'dgi',
    url: 'https://mfdgi.gov.dz',
    name: { ar: 'المديرية العامة للضرائب (DGI)', fr: 'Direction Générale des Impôts (DGI)' },
    desc: {
      ar: 'بوابة المكلفين بالضريبة لحساب الرسوم، خدمات التسجيل، والتسيير الإلكتروني لرسوم العقود.',
      fr: 'Portail des contribuables pour le calcul des taxes et l\'enregistrement des actes officiels.',
    },
    category: 'property_tax',
  },
  {
    id: 'enpi',
    url: 'https://www.enpi.dz',
    name: { ar: 'المؤسسة الوطنية للترقية العقارية (ENPI)', fr: 'Entreprise Nationale de Promotion Immobilière' },
    desc: {
      ar: 'البوابة الرسمية لمتابعة مشاريع السكن الترقوي الحر والمدعم الموجه للمواطنين.',
      fr: 'Portail officiel pour le suivi des projets de promotion immobilière publique et libre.',
    },
    category: 'property_tax',
  },
  {
    id: 'wilaya-oran',
    url: 'http://www.wilaya-oran.dz',
    name: { ar: 'البوابة الرسمية لولاية وهران', fr: 'Portail Officiel de la Wilaya d\'Oran' },
    desc: {
      ar: 'البوابة الإدارية لمتابعة الشؤون الولائية والتنظيمية والقرارات المحلية لولاية وهران.',
      fr: 'Portail administratif pour le suivi des affaires de la wilaya et des décisions locales.',
    },
    category: 'local',
  },
];

export function getHomeUsefulLinks() {
  const priorityIds = ['mjustice', 'joradp', 'cnrc', 'cnn'];
  return USEFUL_LINKS.filter((link) => priorityIds.includes(link.id));
}
