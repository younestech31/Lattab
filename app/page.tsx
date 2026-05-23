import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';
import { HomeContent } from '@/components/HomeContent';

export const revalidate = 86400; // 24h ISR

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'الديوان العمومي للتوثيق — موثق محكمة فلاوسن وهران. معلومات حول الإجراءات التوثيقية والوثائق المطلوبة والعقارات وتأسيس الشركات وفق القانون الجزائري.';
  assertDescriptionLength(desc, 'Home Page / app/page.tsx');

  return {
    title: 'الديوان العمومي للتوثيق وهران — الأستاذ لعطب محمد',
    description: desc,
    keywords: 'موثق وهران, توثيق عقود, بيع عقار الجزائر, تأسيس شركة, وكالة, رهن عقاري, السعر المرجعي العقاري',
    alternates: {
      canonical: `${SITE_URL}/`,
      languages: {
        'ar-DZ': `${SITE_URL}/`,
        'fr-DZ': `${SITE_URL}/fr`,
        'x-default': `${SITE_URL}/`,
      },
    },
    openGraph: {
      title: 'الديوان العمومي للتوثيق — موثق وهران',
      description: 'الديوان العمومي للتوثيق — معلومات حول الإجراءات التوثيقية والوثائق المطلوبة لولاية وهران.',
      url: `${SITE_URL}/`,
      siteName: 'الديوان العمومي للتوثيق — الأستاذ لعطب محمد موثق بوهران',
      locale: 'ar_DZ',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'الديوان العمومي للتوثيق — الأستاذ لعطب محمد موثق بوهران',
        },
      ],
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
