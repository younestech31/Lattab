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

const SectionSkeleton = ({ height = 'h-64' }: { height?: string }) => (
  <div
    className={`w-full ${height.replace(/^h-/, 'min-h-')} bg-gray-50 animate-pulse rounded-lg`}
    aria-hidden="true"
    role="presentation"
  />
);

async function buildHomeSchema(): Promise<Record<string, unknown>> {
  // NOTE: aggregateRating, priceRange, hasOfferCatalog intentionally omitted.
  // Algerian notarial deontological rules prohibit fee listings, ratings, and
  // service catalogues framed as commercial offers. Law No. 06-02, Art. 17.
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "NotaryOffice"],
    "@id": `${SITE_URL}/#notary-office`,
    "url": SITE_URL,
    "name": "الديوان العمومي للتوثيق — الأستاذ لعطب محمد",
    "legalName": "الديوان العمومي للتوثيق — الأستاذ لعطب محمد",
    "alternateName": "Office Notarial Maître Lattab Mohamed",
    "description": "الديوان العمومي للتوثيق — موثق معتمد لدى محكمة فلاوسن وهران وفق القانون الجزائري للإجراءات التوثيقية والشركات والمعاملات العقارية.",
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
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Wilaya d'Oran"
    },
    "serviceType": [
      "العقود والتوثيقات",
      "تأسيس الشركات",
      "المعاملات العقارية",
      "الوكالات والرهون",
      "Rédaction d'actes",
      "Création d'entreprises",
      "Transactions immobilières",
      "Procurations et hypothèques"
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
