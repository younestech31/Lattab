import { Metadata } from 'next';
import AboutView from '@/components/AboutView';
import { SITE_URL } from '@/lib/config';

export const revalidate = 86400; // 24h ISR

export async function generateMetadata(): Promise<Metadata> {
  const title = 'عن المكتب — الأستاذ لعطب محمد | موثق وهران محكمة فلاوسن';
  const desc = 'المسار المهني والمؤهلات الأكاديمية للأستاذ لعطب محمد، موثق معتمد لدى محكمة فلاوسن بوهران منذ 2008، ماجستير في القانون الخاص، وخبرة تفوق 15 سنة في التوثيق.';

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
      siteName: 'الأستاذ لعطب محمد — موثق بوهران',
      locale: 'ar_DZ',
      alternateLocale: ['fr_DZ'],
      type: 'profile',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'الأستاذ لعطب محمد — موثق بوهران',
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
