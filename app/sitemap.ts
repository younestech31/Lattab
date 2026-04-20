import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lattab.vercel.app';
  
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: `${base}/`,                                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0, images: [{ url: `${base}/og-image.jpg`, alt: 'مكتب الأستاذ لعطب محمد - موثق' }] },
    { url: `${base}/calculateur-prix-referentiel`,        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/blog`,                                lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/terms-privacy`,                       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ...blogEntries,
  ];
}
