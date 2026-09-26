import { Metadata } from 'next';
import AboutView from '@/components/AboutView';
import { SITE_URL } from '@/lib/config';

export const revalidate = 86400; // 24h ISR

export async function generateMetadata(): Promise<Metadata> {
  const title = 'À propos — Office Notarial - Oran | Notaire à Oran';
  const desc = 'Parcours et compétences de Office Notarial - Oran, notaire agréé près le Tribunal de Flaussen à Oran depuis 2008. Titulaire d\'un magister en droit privé.';

  return {
    title: { absolute: title },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/fr/a-propos`,
      languages: {
        'ar-DZ': `${SITE_URL}/a-propos`,
        'fr-DZ': `${SITE_URL}/fr/a-propos`,
        'x-default': `${SITE_URL}/a-propos`,
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `${SITE_URL}/fr/a-propos`,
      siteName: 'Office Notarial - Oran',
      locale: 'fr_DZ',
      alternateLocale: ['ar_DZ'],
      type: 'profile',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Office Notarial - Oran',
        },
      ],
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

export default function FrenchAboutPage() {
  return <AboutView lang="fr" />;
}
