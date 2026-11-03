import type { Metadata } from 'next';
export const revalidate = 86400; // 24h ISR
import { HomeContent } from '@/components/HomeContent';
import { SITE_URL, OFFICE_INFO } from '@/lib/config';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Notaire à Oran — ${OFFICE_INFO.officeNameShort.fr} | ${OFFICE_INFO.tribunal.fr}`;
  const desc = `Notaire à Oran agréé près le ${OFFICE_INFO.tribunal.fr}, Akid Lotfi. Actes de vente immobilière, création de sociétés, procuration, succession et renseignements administratifs.`;

  return {
    title: { absolute: title },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/fr`,
      languages: {
        'ar-DZ': SITE_URL,
        'fr-DZ': `${SITE_URL}/fr`,
        'x-default': SITE_URL,
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `${SITE_URL}/fr`,
      siteName: 'Office Notarial - Oran',
      locale: 'fr_DZ',
      alternateLocale: ['ar_DZ'],
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Office Notarial - Oran' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FrenchHome() {
  return <HomeContent lang="fr" />;
}
