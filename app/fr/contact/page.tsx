import { Metadata } from 'next';
import ContactPageView from '@/components/ContactPageView';
import { SITE_URL, OFFICE_INFO } from '@/lib/config';

export const revalidate = 86400; // 24h ISR

export async function generateMetadata(): Promise<Metadata> {
  const title = `Coordonnées — Office notarial de Maître Lattab à Oran`;
  const desc = `Contactez l'office notarial à Oran (Akid Lotfi, près le ${OFFICE_INFO.tribunal.fr}) pour vos démarches et renseignements administratifs. Horaires d'ouverture et localisation.`;

  return {
    title: { absolute: title },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/fr/contact`,
      languages: {
        'ar-DZ': `${SITE_URL}/contact`,
        'fr-DZ': `${SITE_URL}/fr/contact`,
        'x-default': `${SITE_URL}/contact`,
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `${SITE_URL}/fr/contact`,
      siteName: 'Office Notarial - Oran',
      locale: 'fr_DZ',
      alternateLocale: ['ar_DZ'],
      type: 'website',
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

export default function FrenchContactPage() {
  return <ContactPageView lang="fr" />;
}
