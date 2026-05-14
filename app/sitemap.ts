import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data/blog';
import { SITE_URL as base, SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified || post.dateISO),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        'ar-DZ': `${base}/blog/${post.slug}`,
        'x-default': `${base}/blog/${post.slug}`,
      },
    },
  }));

  return [
    {
      url: `${base}/`,
      lastModified: new Date(SITE_CONFIG.lastUpdated),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        `${base}/logo.webp`
      ],
      alternates: {
        languages: {
          'ar-DZ': `${base}/`,
          'x-default': `${base}/`,
        },
      },
    },
    {
      url: `${base}/calculateur-prix-referentiel`,
      lastModified: new Date(SITE_CONFIG.lastUpdated),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'ar-DZ': `${base}/calculateur-prix-referentiel`,
          'x-default': `${base}/calculateur-prix-referentiel`,
        },
      },
    },
    {
      url: `${base}/blog`,
      lastModified: blogPosts.length > 0
        ? new Date(blogPosts[0].dateISO)   // most recent post date
        : new Date(SITE_CONFIG.lastUpdated),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'ar-DZ': `${base}/blog`,
          'x-default': `${base}/blog`,
        },
      },
    },
    {
      url: `${base}/terms-privacy`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          'ar-DZ': `${base}/terms-privacy`,
          'x-default': `${base}/terms-privacy`,
        },
      },
    },
    ...blogEntries,
  ];
}
