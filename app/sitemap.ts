import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lattab.vercel.app';
  return [
    { url: `${base}/`,                                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services/acte-de-vente-oran`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/creation-societe-oran`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/procuration-notariee-oran`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/hypotheque-oran`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/successions-heritages-oran`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/calculateur-prix-referentiel`,        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/blog`,                                lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/fr`,                                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/terms-privacy`,                       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}
