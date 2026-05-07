import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data/blog';
import { SITE_URL as base } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        'ar-DZ': `${base}/blog/${post.slug}`,
      }
    }
  }));

  return [
    {
      url: `${base}/`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${base}/og-image.jpg`],
      alternates: {
        languages: {
          'ar-DZ': `${base}/`,
        }
      }
    },
    {
      url: `${base}/calculateur-prix-referentiel`,
      lastModified: new Date('2025-12-01'),
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          'ar-DZ': `${base}/calculateur-prix-referentiel`,
        }
      }
    },
    {
      url: `${base}/blog`,
      lastModified: new Date('2025-10-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'ar-DZ': `${base}/blog`,
        }
      }
    },
    {
      url: `${base}/terms-privacy`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          'ar-DZ': `${base}/terms-privacy`,
        }
      }
    },
    ...blogEntries,
  ];
}
