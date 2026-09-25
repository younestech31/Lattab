import { Metadata } from 'next';
import ContactPageView from '@/components/ContactPageView';
import { SITE_URL } from '@/lib/config';

export const revalidate = 86400; // 24h ISR

export async function generateMetadata(): Promise<Metadata> {
  const title = 'اتصل بنا وحجز موعد — الأستاذ لعطب محمد | موثق وهران';
  const desc = 'بيانات الاتصال وحجز موعد لدى مكتب الأستاذ لعطب محمد موثق بوهران. حي العقيد لطفي، أرقام الهاتف، البريد الإلكتروني، مواعيد العمل، والموقع الجغرافي.';

  return {
    title: { absolute: title },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/contact`,
      languages: {
        'ar-DZ': `${SITE_URL}/contact`,
        'fr-DZ': `${SITE_URL}/fr/contact`,
        'x-default': `${SITE_URL}/contact`,
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `${SITE_URL}/contact`,
      siteName: 'الأستاذ لعطب محمد — موثق بوهران',
      locale: 'ar_DZ',
      alternateLocale: ['fr_DZ'],
      type: 'website',
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

export default function ContactPage() {
  return <ContactPageView lang="ar" />;
}
