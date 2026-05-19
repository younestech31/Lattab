import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog/', '/services/', '/glossaire/', '/faq'],
        disallow: ['/api/', '/scripts/', '/*.json'],
      },
      {
        // Allow AI crawlers to read public content for citation
        userAgent: ['GPTBot', 'PerplexityBot', 'anthropic-ai', 'Claude-Web'],
        allow: ['/', '/blog/', '/services/', '/faq', '/glossaire/', '/calculateur-prix-referentiel'],
        disallow: ['/api/'],
      },
      {
        // Block scraper bots that provide no SEO value
        userAgent: ['Bytespider', 'Omgilibot', 'peer39_crawler', 'CCBot'],
        disallow: ['/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
