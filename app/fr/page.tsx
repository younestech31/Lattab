import type { Metadata } from 'next';
import Home from '../page';
import { SITE_URL } from '@/lib/config';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'Étude Public Notarial — Maître Lattab Mohamed, Notaire à Oran ⚖️ Rédaction d\'actes, contrat de vente immobilière, constitution de sociétés et calcul de prix de référence.';
  assertDescriptionLength(desc, 'French Home Page / app/fr/page.tsx');

  return {
    title: { absolute: 'Étude Public Notarial — Maître Lattab Mohamed, Notaire à Oran' },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/fr`,
      languages: {
        'ar-DZ': `${SITE_URL}/`,
        'fr-DZ': `${SITE_URL}/fr`,
        'x-default': `${SITE_URL}/`,
      },
    },
    openGraph: {
      title: 'Étude Public Notarial — Maître Lattab Mohamed, Notaire à Oran',
      description: desc,
      url: `${SITE_URL}/fr`,
      siteName: 'Étude Public Notarial — Maître Lattab Mohamed, Notaire à Oran',
      locale: 'fr_DZ',
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Étude Public Notarial — Maître Lattab Mohamed, Notaire à Oran' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Étude Public Notarial — Maître Lattab Mohamed, Notaire à Oran',
      description: desc,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default Home;
