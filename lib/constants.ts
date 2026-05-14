import { blogPosts } from '@/lib/data/blog';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lattab.vercel.app';

export const WORKING_HOURS = {
  days: 'الأحد - الخميس',
  morning: '08:30 - 12:00',
  afternoon: '13:30 - 16:00',
  full: 'الأحد - الخميس: 08:30 - 12:00 و 13:30 - 16:00',
  closed: 'الجمعة والسبت: مغلق'
};

export const SITE_CONFIG = {
  version: '1.2',
};

export const LAST_CONTENT_UPDATED = blogPosts.reduce((max, post) => 
  post.dateISO > max ? post.dateISO : max, '2026-01-01');
