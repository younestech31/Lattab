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
    title: { ar: 'العدالة والتشريع والمراجع القانونية', fr: 'Justice, législation et références juridiques' },
    icon: 'scale',
  },
  {
    id: 'commerce',
    title: { ar: 'التجارة والسجل التجاري والاستثمار', fr: 'Commerce, registre du commerce et investissement' },
    icon: 'building',
  },
  {
    id: 'property_tax',
    title: { ar: 'الضرائب والعقار والسكن', fr: 'Fiscalité, immobilier et logement' },
    icon: 'book',
  },
  {
    id: 'local',
    title: { ar: 'الخدمات الإدارية العمومية', fr: 'Services administratifs publics' },
    icon: 'landmark',
  },
];

export const USEFUL_LINKS: UsefulLink[] = [
  {
    id: 'mjustice',
    url: 'https://www.mjustice.gov.dz/ar/',
    name: { ar: 'وزارة العدل', fr: 'Ministère de la Justice' },
    desc: {
      ar: 'البوابة الرسمية لقطاع العدالة، وتضم الأخبار والنصوص والخدمات والمعلومات المتعلقة بالجهات القضائية.',
      fr: 'Portail institutionnel du secteur de la justice : actualités, textes, services et informations sur les juridictions.',
    },
    category: 'justice',
  },
  {
    id: 'legal-portal',
    url: 'https://droit.mjustice.gov.dz/ar/',
    name: { ar: 'بوابة القانون الجزائري', fr: 'Portail du droit algérien' },
    desc: {
      ar: 'مرجع إلكتروني تابع لوزارة العدل للبحث في النصوص القانونية والاجتهاد القضائي، بما في ذلك مواد القانون المدني والأسرة والتجارة.',
      fr: 'Portail du Ministère de la Justice pour consulter les textes juridiques et la jurisprudence, notamment en droit civil, familial et commercial.',
    },
    category: 'justice',
  },
  {
    id: 'joradp',
    url: 'http://www.joradp.dz/HFR/Index.htm',
    name: { ar: 'الجريدة الرسمية للجمهورية الجزائرية', fr: 'Journal officiel de la République algérienne' },
    desc: {
      ar: 'المرجع الرسمي لنشر القوانين والأوامر والمراسيم والقرارات التنظيمية. يُستحسن الرجوع إلى عدد الجريدة وتاريخ النشر عند الاستشهاد بنص.',
      fr: 'Référence officielle pour la publication des lois, ordonnances, décrets et textes réglementaires. Vérifiez le numéro et la date du Journal lors de toute citation.',
    },
    category: 'justice',
  },
  {
    id: 'oran-court',
    url: 'https://cour-oran.mjustice.dz/',
    name: { ar: 'مجلس قضاء وهران', fr: 'Cour d’Oran' },
    desc: {
      ar: 'البوابة القضائية المحلية التابعة لوزارة العدل للاطلاع على المعلومات والإعلانات المتعلقة بمجلس قضاء وهران.',
      fr: 'Portail officiel de la juridiction d’Oran, rattaché au Ministère de la Justice, pour ses informations et annonces.',
    },
    category: 'justice',
  },
  {
    id: 'aapi',
    url: 'https://aapi.dz/ar/',
    name: { ar: 'الوكالة الجزائرية لترقية الاستثمار (AAPI)', fr: 'Agence algérienne de promotion de l’investissement (AAPI)' },
    desc: {
      ar: 'معلومات المستثمرين ومرافقة المشاريع الاستثمارية والإطار التنظيمي والمزايا المرتبطة بالاستثمار في الجزائر.',
      fr: 'Informations destinées aux investisseurs, accompagnement des projets et renseignements sur le cadre et les avantages de l’investissement en Algérie.',
    },
    category: 'commerce',
  },
  {
    id: 'cnrc',
    url: 'https://sidjilcom.cnrc.dz/ar/web/sidjilcom',
    name: { ar: 'المركز الوطني للسجل التجاري — سجلكوم', fr: 'Centre national du registre du commerce — Sidjilcom' },
    desc: {
      ar: 'بوابة المركز الوطني للسجل التجاري للبحث عن التجار والشركات والتسميات والأنشطة، والاطلاع على خدمات السجل التجاري الإلكترونية.',
      fr: 'Portail du CNRC pour rechercher des commerçants, sociétés, dénominations et activités, et accéder aux services électroniques du registre du commerce.',
    },
    category: 'commerce',
  },
  {
    id: 'commerce-ministry',
    url: 'https://www.commerce.gov.dz/ar/',
    name: { ar: 'وزارة التجارة وترقية الصادرات', fr: 'Ministère du Commerce et de la Promotion des exportations' },
    desc: {
      ar: 'المعلومات والبيانات التنظيمية المتعلقة بالتجارة، وحماية المستهلك، والأنشطة التجارية، والهيئات التابعة للقطاع.',
      fr: 'Informations institutionnelles et réglementaires relatives au commerce, à la protection du consommateur et aux organismes du secteur.',
    },
    category: 'commerce',
  },
  {
    id: 'caci',
    url: 'https://www.caci.dz/',
    name: { ar: 'الغرفة الجزائرية للتجارة والصناعة (CACI)', fr: 'Chambre algérienne de commerce et d’industrie (CACI)' },
    desc: {
      ar: 'معلومات وخدمات الغرفة الجزائرية للتجارة والصناعة في مجالات المؤسسات والتبادل التجاري والتعاون الاقتصادي.',
      fr: 'Informations et services de la CACI dans les domaines des entreprises, des échanges commerciaux et de la coopération économique.',
    },
    category: 'commerce',
  },
  {
    id: 'dgi',
    url: 'https://mfdgi.gov.dz/',
    name: { ar: 'المديرية العامة للضرائب (DGI)', fr: 'Direction générale des impôts (DGI)' },
    desc: {
      ar: 'المصدر الرسمي للمعلومات الجبائية، والتصريحات والدفع عن بُعد، والخدمات الرقمية الموجهة للمكلفين بالضريبة.',
      fr: 'Source officielle des informations fiscales, des déclarations et paiements à distance ainsi que des services numériques destinés aux contribuables.',
    },
    category: 'property_tax',
  },
  {
    id: 'housing-ministry',
    url: 'https://www.mhuv.gov.dz/',
    name: { ar: 'وزارة السكن والعمران والمدينة والتهيئة العمرانية', fr: 'Ministère de l’Habitat, de l’Urbanisme et de la Ville' },
    desc: {
      ar: 'الموقع المؤسساتي لقطاع السكن والعمران، بما في ذلك الأخبار والتنظيمات والمعلومات المتعلقة ببرامج السكن.',
      fr: 'Site institutionnel du secteur de l’habitat et de l’urbanisme : actualités, réglementation et informations sur les programmes de logement.',
    },
    category: 'property_tax',
  },
  {
    id: 'enpi',
    url: 'https://enpi.dz/',
    name: { ar: 'المؤسسة الوطنية للترقية العقارية (ENPI)', fr: 'Entreprise nationale de promotion immobilière (ENPI)' },
    desc: {
      ar: 'الموقع الرسمي للمؤسسة الوطنية للترقية العقارية ومعلومات برامج السكن الترقوي والخدمات المرتبطة بها، وفق ما تعلنه المؤسسة.',
      fr: 'Site officiel de l’ENPI et informations sur les programmes de logement promotionnel et les services proposés, selon les annonces de l’établissement.',
    },
    category: 'property_tax',
  },
  {
    id: 'interior-services',
    url: 'https://services.interieur.gov.dz/ar/',
    name: { ar: 'بوابة الخدمات الإلكترونية لوزارة الداخلية', fr: 'Portail des services en ligne du Ministère de l’Intérieur' },
    desc: {
      ar: 'بوابة الخدمات العمومية الرقمية، ومنها وثائق الحالة المدنية، والوثائق البيومترية، والشباك عن بُعد وبعض الإجراءات الإدارية.',
      fr: 'Portail des services publics numériques : état civil, documents biométriques, guichet à distance et plusieurs démarches administratives.',
    },
    category: 'local',
  },
];

export function getHomeUsefulLinks() {
  const priorityIds = ['mjustice', 'joradp', 'cnrc', 'dgi'];
  return USEFUL_LINKS.filter((link) => priorityIds.includes(link.id));
}
