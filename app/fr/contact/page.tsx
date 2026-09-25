import { Metadata } from 'next';
import ContactPageView from '@/components/ContactPageView';
import { SITE_URL } from '@/lib/config';

export const revalidate = 86400; // 24h ISR

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Contact et rendez-vous — Maître Lattab Mohamed | Notaire à Oran';
  const desc = 'Contactez l\'office notarial de Maître Lattab Mohamed à Oran (Akid Lotfi). Prise de rendez-vous, téléphones directes, horaires d\'ouverture et localisation.';

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
      siteName: 'Maître Lattab Mohamed, notaire à Oran',
      locale: 'fr_DZ',
      alternateLocale: ['ar_DZ'],
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Maître Lattab Mohamed, notaire à Oran',
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
