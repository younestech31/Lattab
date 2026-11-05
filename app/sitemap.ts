import { MetadataRoute } from 'next';
import { blogPosts, frBlogPosts } from '@/lib/data/blog';
import { SITE_URL as base } from '@/lib/config';
import { STATIC_LOCALE_MAP, BLOG_PAIRS_MAP, FR_TO_AR_BLOG_MAP } from '@/lib/data/localeMap';
import { getNAEActivities, getNAEDatasetManifest } from '@/lib/nae/data';
import { isNAEActivityIndexable } from '@/lib/nae/seo';

function getValidLastModified(primary?: string, fallback?: string): Date | undefined {
  for (const value of [primary, fallback]) {
    if (typeof value !== 'string' || !value.trim()) continue;
    const timestamp = Date.parse(value);
    if (Number.isFinite(timestamp)) return new Date(timestamp);
  }
  return undefined;
}

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
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
        alternates: {
          languages,
        },
      });

      // French entry
      staticEntries.push({
        url: frUrl,
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
        ...(getValidLastModified(post.dateModified)
          ? { lastModified: getValidLastModified(post.dateModified) }
          : {}),
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
        ...(getValidLastModified(post.dateModified)
          ? { lastModified: getValidLastModified(post.dateModified) }
          : {}),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages,
        },
      };
    });

  const manifest = getNAEDatasetManifest();
  const importedAt = Date.parse(manifest.imported_at);
  const naeLastModified = Number.isFinite(importedAt) ? new Date(importedAt) : undefined;

  const naeEntries: MetadataRoute.Sitemap = getNAEActivities().flatMap((activity) => {
    const arIndexable = isNAEActivityIndexable(activity, 'ar');
    const frIndexable = isNAEActivityIndexable(activity, 'fr');
    if (!arIndexable && !frIndexable) return [];

    const arUrl = `${base}/nae/${activity.code}`;
    const frUrl = `${base}/fr/nae/${activity.code}`;
    const languages: Record<string, string> = {};
    if (arIndexable) languages['ar-DZ'] = arUrl;
    if (frIndexable) languages['fr-DZ'] = frUrl;
    languages['x-default'] = arIndexable ? arUrl : frUrl;

    const entries: MetadataRoute.Sitemap = [];
    if (arIndexable) entries.push({url:arUrl,...(naeLastModified?{lastModified:naeLastModified}:{}),changeFrequency:'yearly',priority:0.45,alternates:{languages}});
    if (frIndexable) entries.push({url:frUrl,...(naeLastModified?{lastModified:naeLastModified}:{}),changeFrequency:'yearly',priority:0.45,alternates:{languages}});
    return entries;
  });

  return [...staticEntries, ...blogEntries, ...frBlogEntries, ...naeEntries];
}
