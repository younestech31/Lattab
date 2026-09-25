import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_DATA } from '@/lib/data/servicesData';
import ServiceDetailView from '@/components/ServiceDetailView';
import { SITE_URL } from '@/lib/config';

export const revalidate = 86400; // 24h ISR
export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map(slug => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return {
      title: 'Service introuvable',
      robots: { index: false, follow: true },
    };
  }

  const arUrl = `${SITE_URL}/services/${slug}`;
  const frUrl = `${SITE_URL}/fr/services/${slug}`;

  return {
    title: { absolute: service.fr.metaTitle },
    description: service.fr.metaDescription,
    alternates: {
      canonical: frUrl,
      languages: {
        'ar-DZ': arUrl,
        'fr-DZ': frUrl,
        'x-default': arUrl,
      },
    },
    openGraph: {
      title: service.fr.metaTitle,
      description: service.fr.metaDescription,
      url: frUrl,
      siteName: 'Maître Lattab Mohamed, notaire à Oran',
      locale: 'fr_DZ',
      alternateLocale: ['ar_DZ'],
      type: 'article',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: service.fr.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.fr.metaTitle,
      description: service.fr.metaDescription,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FrenchServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} lang="fr" />;
}
