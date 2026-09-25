import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/static/',
        ],
        disallow: [
          '/api/',
          '/scripts/',
          '/*?*q=',
        ],
      },
      {
        // Allow AI citation crawlers to index all public content
        userAgent: ['GPTBot', 'PerplexityBot', 'anthropic-ai', 'Claude-Web', 'OAI-SearchBot'],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        // Block high-volume scraper bots that provide no SEO or citation value
        userAgent: ['Bytespider', 'Omgilibot', 'peer39_crawler', 'CCBot', 'MJ12bot'],
        disallow: ['/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

