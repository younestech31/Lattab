export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lattab.vercel.app';

export const OFFICE_INFO = {
  notaryName: {
    ar: 'الأستاذ لعطب محمد',
    fr: 'Maître Lattab Mohamed',
  },
  officeNameShort: {
    ar: 'ديوان التوثيق - وهران',
    fr: 'Office Notarial - Oran',
  },
  officeNameLong: {
    ar: 'الديوان العمومي للتوثيق ببلدية وهران — الأستاذ لعطب محمد',
    fr: 'Office Public Notarial — Maître Lattab Mohamed (Oran)',
  },
  notaryFullName: {
    ar: 'ديوان التوثيق - وهران',
    fr: 'Office Notarial - Oran',
  },
  title: {
    ar: 'الديوان العمومي للتوثيق ببلدية وهران',
    fr: "Étude Publique Notariale - Commune d'Oran",
  },
  officialDesignation: {
    ar: 'الديوان العمومي للتوثيق',
    fr: 'Office Public Notarial',
  },
  tribunal: {
    ar: 'محكمة فلاوسن بوهران',
    fr: 'Tribunal de Fellaoucène à Oran',
  },
  court: {
    ar: 'مجلس قضاء وهران',
    fr: "Cour d'Oran",
  },
  jurisdiction: {
    ar: 'ولاية وهران — الجزائر',
    fr: "Wilaya d'Oran — Algérie",
  },
  address: {
    ar: 'حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي، وهران 31000',
    fr: 'Cité 557 Logements, Immeuble D24, 1er Étage, Appt 768, Akid Lotfi, Oran 31000',
    street: {
      ar: 'حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي',
      fr: 'Cité 557 Logements, Immeuble D24, 1er Étage, Appt 768, Akid Lotfi',
    },
    city: {
      ar: 'وهران',
      fr: 'Oran',
    },
    postalCode: '31000',
    country: 'DZ',
  },
  hours: {
    ar: 'من الأحد إلى الخميس: 08:30 – 12:00 ومن 13:30 – 16:00 (الجمعة والسبت: مغلق)',
    fr: 'Du dimanche au jeudi : 08h30 – 12h00 et 13h30 – 16h00 (Vendredi et samedi : fermé)',
    schema: 'Su,Mo,Tu,We,Th 08:30-12:00,13:30-16:00',
  },
  legalBasis: {
    ar: 'طبقاً للقانون رقم 06-02 المؤرخ في 20 فبراير 2006 المنظم لمهنة الموثق',
    fr: 'Conformément à la loi n° 06-02 du 20 février 2006 portant organisation du notariat',
  },
} as const;

export const TITLE_TEMPLATE_SUFFIX = ' — موثق وهران' as const;
export const FR_TITLE_SUFFIX = ' — Notaire Oran' as const;

export const WORKING_HOURS = {
  days: {
    ar: 'الأحد - الخميس',
    fr: 'Dimanche - Jeudi',
  },
  morning: '08:30 - 12:00',
  afternoon: '13:30 - 16:00',
  full: {
    ar: 'الأحد - الخميس: 08:30 - 12:00 و 13:30 - 16:00',
    fr: 'Dimanche - Jeudi : 08h30 - 12h00 et 13h30 - 16h00',
  },
  closed: {
    ar: 'الجمعة والسبت: مغلق',
    fr: 'Vendredi et samedi : fermé',
  },
} as const;

export const SITE_CONFIG = {
  version: '1.2',
} as const;

export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/NwPD6ik2evPreyCc7';

export const LAST_CONTENT_UPDATED = '2026-09-24';

