import { MetadataRoute } from 'next';
import { blogPosts, frBlogPosts } from '@/lib/data/blog';
import { SITE_URL as base, LAST_CONTENT_UPDATED } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {

  const blogEntries: MetadataRoute.Sitemap = [...blogPosts]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .map(post => {
      const frEquivalent = frBlogPosts.find(fr => fr.arSlug === post.slug);
      
      const languages: Record<string, string> = {
        'ar-DZ': `${base}/blog/${post.slug}`,
        'x-default': `${base}/blog/${post.slug}`,
      };
      
      // If we don't have a French equivalent, the Arabic post serves as the French post per previous logic, or we let Google know there's no French yet. The instructions say we should have proper cross-linking.
      if (frEquivalent) {
        languages['fr-DZ'] = `${base}/blog/fr/${frEquivalent.slug}`;
      } else {
        languages['fr-DZ'] = `${base}/blog/${post.slug}`;
      }

      return {
        url: `${base}/blog/${post.slug}`,
        lastModified: new Date(post.dateModified || post.dateISO),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages,
        },
      };
    });

  const frBlogEntries: MetadataRoute.Sitemap = [...frBlogPosts]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .map(post => {
      const languages: Record<string, string> = {
        'fr-DZ': `${base}/blog/fr/${post.slug}`,
      };
      
      if (post.arSlug) {
        languages['ar-DZ'] = `${base}/blog/${post.arSlug}`;
        languages['x-default'] = `${base}/blog/${post.arSlug}`;
      }

      return {
        url: `${base}/blog/fr/${post.slug}`,
        lastModified: new Date(post.dateModified || post.dateISO),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages,
        },
      };
    });

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
    ...frBlogEntries,
  ];
}
