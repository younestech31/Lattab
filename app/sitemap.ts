import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data/blog';
import { SITE_URL as base } from '@/lib/config';
import { LAST_CONTENT_UPDATED } from '@/lib/server-constants';

export default function sitemap(): MetadataRoute.Sitemap {

  const blogEntries: MetadataRoute.Sitemap = [...blogPosts]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified || post.dateISO),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        'ar-DZ': `${base}/blog/${post.slug}`,
        'fr-DZ': `${base}/blog/${post.slug}`,
        'x-default': `${base}/blog/${post.slug}`,
      },
    },
  }));

  return [
    {
      url: `${base}/`,
      lastModified: new Date(LAST_CONTENT_UPDATED),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        `${base}/logo.webp`
      ],
      alternates: {
        languages: {
          'ar-DZ': `${base}/`,
          'fr-DZ': `${base}/`,
          'x-default': `${base}/`,
        },
      },
    },
    {
      url: `${base}/calculateur-prix-referentiel`,
      lastModified: new Date(LAST_CONTENT_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'ar-DZ': `${base}/calculateur-prix-referentiel`,
          'fr-DZ': `${base}/calculateur-prix-referentiel`,
          'x-default': `${base}/calculateur-prix-referentiel`,
        },
      },
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(LAST_CONTENT_UPDATED),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'ar-DZ': `${base}/blog`,
          'fr-DZ': `${base}/blog`,
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
          'fr-DZ': `${base}/terms-privacy`,
          'x-default': `${base}/terms-privacy`,
        },
      },
    },
    ...blogEntries,
  ];
}
