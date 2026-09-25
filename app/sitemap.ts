import { MetadataRoute } from 'next';
import { blogPosts, frBlogPosts } from '@/lib/data/blog';
import { SITE_URL as base } from '@/lib/config';
import { STATIC_LOCALE_MAP, BLOG_PAIRS_MAP, FR_TO_AR_BLOG_MAP } from '@/lib/data/localeMap';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static and service routes
  const staticEntries: MetadataRoute.Sitemap = [];

  for (const entry of STATIC_LOCALE_MAP) {
    const arUrl = `${base}${entry.arPath === '/' ? '' : entry.arPath}`;
    
    if (entry.frPath) {
      const frUrl = `${base}${entry.frPath}`;
      const languages: Record<string, string> = {
        'ar-DZ': arUrl,
        'fr-DZ': frUrl,
        'x-default': arUrl,
      };

      // Arabic entry
      staticEntries.push({
        url: arUrl,
        lastModified: new Date(entry.lastmod),
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
        alternates: {
          languages,
        },
      });

      // French entry
      staticEntries.push({
        url: frUrl,
        lastModified: new Date(entry.lastmod),
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
        alternates: {
          languages,
        },
      });
    } else {
      // Only Arabic exists
      staticEntries.push({
        url: arUrl,
        lastModified: new Date(entry.lastmod),
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
        alternates: {
          languages: {
            'ar-DZ': arUrl,
            'x-default': arUrl,
          },
        },
      });
    }
  }

  // Arabic blog posts
  const blogEntries: MetadataRoute.Sitemap = [...blogPosts]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .map(post => {
      const frSlug = BLOG_PAIRS_MAP[post.slug];
      const arUrl = `${base}/blog/${post.slug}`;
      
      const languages: Record<string, string> = {
        'ar-DZ': arUrl,
        'x-default': arUrl,
      };
      
      // Emit xhtml alternate for fr-DZ ONLY when French counterpart exists
      if (frSlug) {
        languages['fr-DZ'] = `${base}/fr/blog/${frSlug}`;
      }

      return {
        url: arUrl,
        lastModified: new Date(post.dateModified || post.dateISO),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages,
        },
      };
    });

  // French blog posts
  const frBlogEntries: MetadataRoute.Sitemap = [...frBlogPosts]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .map(post => {
      const arSlug = FR_TO_AR_BLOG_MAP[post.slug] || post.arSlug;
      const frUrl = `${base}/fr/blog/${post.slug}`;
      
      const languages: Record<string, string> = {
        'fr-DZ': frUrl,
      };
      
      if (arSlug) {
        languages['ar-DZ'] = `${base}/blog/${arSlug}`;
        languages['x-default'] = `${base}/blog/${arSlug}`;
      }

      return {
        url: frUrl,
        lastModified: new Date(post.dateModified || post.dateISO),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages,
        },
      };
    });

  return [
    ...staticEntries,
    ...blogEntries,
    ...frBlogEntries,
  ];
}
