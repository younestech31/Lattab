export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lattab.vercel.app';

export const OFFICE_INFO = {
  notaryFullName: {
    ar: 'الأستاذ لعطب محمد',
    fr: 'Maître Lattab Mohamed',
  },
  title: {
    ar: 'موثق لدى محكمة فلاوسن — ولاية وهران',
    fr: 'Notaire près le Tribunal de Felaoucene — Wilaya d\'Oran',
  },
  officialDesignation: {
    ar: 'الديوان العمومي للتوثيق',
    fr: 'Étude Publique Notariale',
  },
  jurisdiction: {
    ar: 'ولاية وهران — الجزائر',
    fr: 'Wilaya d\'Oran — Algérie',
  },
  legalBasis: {
    ar: 'طبقاً للقانون رقم 06-02 المؤرخ في 20 فبراير 2006',
    fr: 'Conformément à la loi n° 06-02 du 20 février 2006',
  },
} as const;

export const TITLE_TEMPLATE_SUFFIX = ' — موثق وهران' as const;
export const FR_TITLE_SUFFIX = ' — Notaire Oran' as const;

export const WORKING_HOURS = {
  days: 'الأحد - الخميس',
  morning: '08:30 - 12:00',
  afternoon: '13:30 - 16:00',
  full: 'الأحد - الخميس: 08:30 - 12:00 و 13:30 - 16:00',
  closed: 'الجمعة والسبت: مغلق'
} as const;

export const SITE_CONFIG = {
  version: '1.2',
} as const;

import { blogPosts } from '@/lib/data/blog';
export const LAST_CONTENT_UPDATED = blogPosts.reduce(
  (max, post) => (post.dateISO > max ? post.dateISO : max),
  '2026-01-01'
);
