import { Metadata } from 'next';
import AboutView from '@/components/AboutView';
import { SITE_URL } from '@/lib/config';

export const revalidate = 86400; // 24h ISR

export async function generateMetadata(): Promise<Metadata> {
  const title = 'عن المكتب — ديوان التوثيق - وهران | موثق وهران محكمة فلاوسن';
  const desc = 'دليل إعلامي وتوعوي شامل حول الإجراءات والوثائق القانونية المطلوبة لإتمام المعاملات الرسمية في الجزائر.';

  return {
    title: { absolute: title },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/a-propos`,
      languages: {
        'ar-DZ': `${SITE_URL}/a-propos`,
        'fr-DZ': `${SITE_URL}/fr/a-propos`,
        'x-default': `${SITE_URL}/a-propos`,
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `${SITE_URL}/a-propos`,
      siteName: 'ديوان التوثيق ببلدية وهران',
      locale: 'ar_DZ',
      alternateLocale: ['fr_DZ'],
      type: 'profile',
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

export default function AboutPage() {
  return <AboutView lang="ar" />;
}
