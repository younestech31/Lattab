import type { Metadata } from 'next';
import { SITE_URL, OFFICE_INFO } from '@/lib/config';
import { HomeContent } from '@/components/HomeContent';

export const revalidate = 86400; // 24h ISR

export async function generateMetadata(): Promise<Metadata> {
  const title = `موثق وهران — ${OFFICE_INFO.officeNameShort.ar} | ${OFFICE_INFO.tribunal.ar}`;
  const desc = `موثق معتمد لدى ${OFFICE_INFO.tribunal.ar}، حي العقيد لطفي. توثيق عقود بيع العقارات، تأسيس الشركات، الوكالات، الفريضة، والرهون وتقديم الإرشادات الإدارية الرسمية.`;

  return {
    title,
    description: desc,
    alternates: {
      canonical: SITE_URL,
      languages: {
        'ar-DZ': SITE_URL,
        'fr-DZ': `${SITE_URL}/fr`,
        'x-default': SITE_URL,
      },
    },
    openGraph: {
      title,
      description: desc,
      url: SITE_URL,
      siteName: 'ديوان التوثيق ببلدية وهران',
      locale: 'ar_DZ',
      alternateLocale: ['fr_DZ'],
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'ديوان التوثيق ببلدية وهران',
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

export default async function Home() {
  return <HomeContent lang="ar" />;
}
