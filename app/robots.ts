import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog/', '/calculateur-prix-referentiel', '/terms-privacy'],
        disallow: ['/api/', '/scripts/', '/*.json'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web', 'PerplexityBot', 'Bytespider', 'Omgilibot', 'peer39_crawler'],
        disallow: ['/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
