import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data/blog';
import { SITE_URL as base, LAST_CONTENT_UPDATED } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {

  const staticPages = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
      images: [`${base}/logo.webp`]
    },
    {
      path: 'calculateur-prix-referentiel',
      priority: 0.9,
      changeFrequency: 'monthly' as const
    },
    {
      path: 'blog',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      path: 'terms-privacy',
      priority: 0.3,
      changeFrequency: 'yearly' as const
    }
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static pages
  staticPages.forEach(page => {
    sitemapEntries.push({
      url: `${base}${page.path ? '/' + page.path : ''}`,
      lastModified: new Date(LAST_CONTENT_UPDATED),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      ...(page.images ? { images: page.images } : {}),
      alternates: {
        languages: {
          'ar-DZ': `${base}${page.path ? '/' + page.path : ''}`,
          'fr-DZ': `${base}/fr${page.path ? '/' + page.path : ''}`,
          'x-default': `${base}${page.path ? '/' + page.path : ''}`,
        },
      }
    });
    sitemapEntries.push({
      url: `${base}/fr${page.path ? '/' + page.path : ''}`,
      lastModified: new Date(LAST_CONTENT_UPDATED),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      ...(page.images ? { images: page.images } : {}),
      alternates: {
        languages: {
          'ar-DZ': `${base}${page.path ? '/' + page.path : ''}`,
          'fr-DZ': `${base}/fr${page.path ? '/' + page.path : ''}`,
          'x-default': `${base}${page.path ? '/' + page.path : ''}`,
        },
      }
    });
  });

  // Blog posts
  blogPosts.forEach(post => {
    sitemapEntries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified || post.dateISO),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'ar-DZ': `${base}/blog/${post.slug}`,
          'fr-DZ': `${base}/fr/blog/${post.slug}`,
          'x-default': `${base}/blog/${post.slug}`,
        },
      },
    });
    sitemapEntries.push({
      url: `${base}/fr/blog/${post.slug}`,
      lastModified: new Date(post.dateModified || post.dateISO),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'ar-DZ': `${base}/blog/${post.slug}`,
          'fr-DZ': `${base}/fr/blog/${post.slug}`,
          'x-default': `${base}/blog/${post.slug}`,
        },
      },
    });
  });

  return sitemapEntries;
}
