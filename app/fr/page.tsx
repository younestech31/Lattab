import type { Metadata } from 'next';
import Home from '../page';
import { SITE_URL } from '@/lib/config';
import { assertDescriptionLength } from '@/lib/utils/metaDescription';

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'Office de Maître Lattab Mohamed, notaire agréé à Oran ⚖️ Immobilier, création de sociétés, procurations et calculateur de prix de référence 2026.'; // 147 chars
  assertDescriptionLength(desc, 'French Home Page / app/fr/page.tsx');

  return {
    title: { absolute: 'Office Notarial de Maître Lattab Mohamed — Notaire à Oran' },
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
      title: 'Office Notarial de Maître Lattab Mohamed — Notaire à Oran',
      description: desc,
      url: `${SITE_URL}/fr`,
      siteName: 'Office Notarial de Maître Lattab Mohamed — Notaire à Oran',
      locale: 'fr_DZ',
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Office Notarial de Maître Lattab Mohamed — Notaire à Oran' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Office Notarial de Maître Lattab Mohamed — Notaire à Oran',
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
