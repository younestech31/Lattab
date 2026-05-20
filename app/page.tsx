import type { Metadata } from 'next';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/contact';
import ContactInfo from '@/components/ContactInfo';
import CalculatorCTA from '@/components/CalculatorCTA';
import { cookies, headers } from 'next/headers';
import { Language } from '@/lib/i18n/translations';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { SITE_URL } from '@/lib/config';
import NotaryRole from '@/components/WhyChooseUs';
import Procedures from '@/components/Procedures';
import LegalUpdates from '@/components/LegalUpdates';
import FAQ from '@/components/FAQ';
import { JsonLdScript } from '@/components/schema';
import { NonceAnalyticsLoader } from '@/components/NonceAnalyticsLoader';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

const SectionSkeleton = ({ height = 'h-64' }: { height?: string }) => (
  <div className={`w-full ${height} bg-gray-50 animate-pulse rounded-lg`} aria-hidden="true" />
);

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'الديوان العمومي للتوثيق — موثق محكمة فلاوسن وهران. معلومات حول الإجراءات التوثيقية والوثائق المطلوبة والعقارات وتأسيس الشركات وفق القانون الجزائري.';
  assertDescriptionLength(desc, 'Home Page / app/page.tsx');

  return {
    title: 'الديوان العمومي للتوثيق — موثق محكمة فلاوسن وهران | الأستاذ لعطب محمد',
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
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Validate these schema changes using Google's Rich Results Test tool:
// https://search.google.com/test/rich-results
// Dynamic testing URL: https://search.google.com/test/rich-results?url=https://lattab.vercel.app/
async function buildHomeSchema(): Promise<Record<string, unknown>> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "GovernmentOffice",
    "name": "الديوان العمومي للتوثيق — الأستاذ لعطب محمد",
    "description": "الديوان العمومي للتوثيق — موثق محكمة فلاوسن وهران",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي",
      "addressLocality": "وهران",
      "addressRegion": "وهران",
      "postalCode": "31000",
      "addressCountry": "DZ"
    },
    "telephone": "+213562296981",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday"],
        "opens": "08:30",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday"],
        "opens": "13:30",
        "closes": "16:00"
      }
    ]
  };

  return schema;
}

export default async function Home() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang')?.value as Language) ?? 'ar';
  
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';
  const consolidatedSchema = await buildHomeSchema();

  return (
    <div className="min-h-screen bg-white">
      <JsonLdScript schema={consolidatedSchema} nonce={nonce} />
      <NonceAnalyticsLoader />
      <main id="main-content">
        <div className="no-print">
          <Hero />
          <Services />
...

          <CalculatorCTA />
          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <NotaryRole />
          </Suspense>
          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <Procedures />
          </Suspense>
          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <LegalUpdates />
          </Suspense>
          <Suspense fallback={<SectionSkeleton height="h-48" />}>
            <FAQ />
          </Suspense>
        </div>
        <Contact contactInfo={<ContactInfo lang={lang} />} />
      </main>
      <div className="no-print">
        <StickyMobileCTA />
      </div>
    </div>
  );
}
