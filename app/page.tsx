import type { Metadata } from 'next';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/contact';
import ContactInfo from '@/components/ContactInfo';
import CalculatorCTA from '@/components/CalculatorCTA';
import { Language } from '@/lib/i18n/translations';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { SITE_URL } from '@/lib/config';
import NotaryRole from '@/components/NotaryRole';
import Procedures from '@/components/Procedures';
import LegalUpdates from '@/components/LegalUpdates';
import FAQ from '@/components/FAQ';
import { JsonLdScript } from '@/components/schema';
import { AnalyticsScriptLoader } from '@/components/AnalyticsScriptLoader';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

export const revalidate = 86400; // 24h ISR

const SectionSkeleton = ({ height = 'h-64' }: { height?: string }) => (
  <div
    className={`w-full ${height.replace(/^h-/, 'min-h-')} bg-gray-50 animate-pulse rounded-lg`}
    aria-hidden="true"
    role="presentation"
  />
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

async function buildHomeSchema(): Promise<Record<string, unknown>> {
  // NOTE: aggregateRating, priceRange, hasOfferCatalog intentionally omitted.
  // Algerian notarial deontological rules prohibit fee listings, ratings, and
  // service catalogues framed as commercial offers. Law No. 06-02, Art. 17.
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "GovernmentOffice",
    "@id": `${SITE_URL}/#notary-office`,
    "url": SITE_URL,
    "name": "الديوان العمومي للتوثيق — الأستاذ لعطب محمد",
    "description": "الديوان العمومي للتوثيق — موثق محكمة فلاوسن وهران",
    "image": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/logo.webp`,
      "width": 512,
      "height": 512
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي",
      "addressLocality": "وهران",
      "addressRegion": "وهران",
      "postalCode": "31000",
      "addressCountry": "DZ"
    },
    "telephone": "+213562296981",
    "hasMap": "https://www.google.com/maps/place/NOTAIRE+LATTAB+MOHAMED/@35.7277124,-0.5931358,17z",
    "sameAs": [
      "https://www.google.com/maps/place/NOTAIRE+LATTAB+MOHAMED/@35.7277124,-0.5931358,17z"
    ],
    "priceRange": undefined,
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
  return <HomeContent lang="ar" />;
}

export async function HomeContent({ lang }: { lang: Language }) {
  const consolidatedSchema = await buildHomeSchema();

  return (
    <div className="min-h-screen bg-white">
      <JsonLdScript schema={consolidatedSchema} />
      <AnalyticsScriptLoader />
      <main id="main-content">
        <div className="no-print">
          <Hero lang={lang} />
          <Services lang={lang} />
          <CalculatorCTA lang={lang} />
          
          <Suspense fallback={<SectionSkeleton height="min-h-[480px]" />}>
            <NotaryRole lang={lang} />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="min-h-[600px]" />}>
            <Procedures lang={lang} />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="min-h-[720px]" />}>
            <LegalUpdates lang={lang} />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="min-h-[520px]" />}>
            <FAQ lang={lang} />
          </Suspense>
        </div>
        <Contact contactInfo={<ContactInfo lang={lang} />} lang={lang} />
      </main>
      <div className="no-print">
        <StickyMobileCTA />
      </div>
    </div>
  );
}
