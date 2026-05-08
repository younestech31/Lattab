import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog/',
          '/calculateur-prix-referentiel',
          '/terms-privacy',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/scripts/',
          '/*.json$',
        ],
      },
      {
        // Block AI scrapers that don't respect copyright
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web'],
        disallow: ['/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
