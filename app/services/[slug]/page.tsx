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
      title: 'خدمة غير موجودة',
      robots: { index: false, follow: true },
    };
  }

  const pageUrl = `${SITE_URL}/services/${slug}`;
  const frUrl = `${SITE_URL}/fr/services/${slug}`;

  return {
    title: { absolute: service.ar.metaTitle },
    description: service.ar.metaDescription,
    alternates: {
      canonical: pageUrl,
      languages: {
        'ar-DZ': pageUrl,
        'fr-DZ': frUrl,
        'x-default': pageUrl,
      },
    },
    openGraph: {
      title: service.ar.metaTitle,
      description: service.ar.metaDescription,
      url: pageUrl,
      siteName: 'الأستاذ لعطب محمد — موثق بوهران',
      locale: 'ar_DZ',
      alternateLocale: ['fr_DZ'],
      type: 'article',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: service.ar.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.ar.metaTitle,
      description: service.ar.metaDescription,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} lang="ar" />;
}
