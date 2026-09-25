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
import UsefulLinksSection from '@/components/UsefulLinksSection';
import { JsonLdScript } from '@/components/schema';
import { AnalyticsScriptLoader } from '@/components/AnalyticsScriptLoader';
import { faqs } from '@/lib/data/faq';

const SectionSkeleton = ({ height = 'h-64' }: { height?: string }) => (
  <div
    className={`w-full ${height.replace(/^h-/, 'min-h-')} bg-gray-50 animate-pulse rounded-lg`}
    aria-hidden="true"
    role="presentation"
  />
);

function buildHomeSchemas(lang: Language): Record<string, unknown>[] {
  const isAr = lang === 'ar';
  const pageUrl = isAr ? SITE_URL : `${SITE_URL}/fr`;
  const notaryId = isAr ? `${SITE_URL}/#notary-office` : `${SITE_URL}/fr#notary-office`;

  const notarySchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Notary"],
    "@id": notaryId,
    "url": pageUrl,
    "name": isAr ? "الأستاذ لعطب محمد — موثق بوهران" : "Maître Lattab Mohamed, notaire à Oran",
    "legalName": isAr ? "الأستاذ لعطب محمد — موثق بوهران" : "Maître Lattab Mohamed, notaire à Oran",
    "alternateName": isAr ? "الديوان العمومي للتوثيق" : "Office notarial Maître Lattab Mohamed",
    "description": isAr
      ? "الديوان العمومي للتوثيق — موثق معتمد لدى محكمة فلاوسن بوهران، حي العقيد لطفي. توثيق عقود بيع العقارات، تأسيس الشركات، الوكالات، الفريضة، والرهون."
      : "Notaire à Oran agréé près le Tribunal de Flaussen, Akid Lotfi. Actes de vente immobilière, création de sociétés, procuration, succession. Prise de rendez-vous.",
    "image": `${SITE_URL}/logo.webp`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": isAr
        ? "حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي"
        : "Cité 557 Logements, Immeuble D24, 1er Étage, Appt 768, Akid Lotfi",
      "addressLocality": isAr ? "وهران" : "Oran",
      "addressRegion": isAr ? "وهران" : "Oran",
      "postalCode": "31000",
      "addressCountry": "DZ"
    },
    "telephone": "+213562296981",
    "email": "maitrelattabmohamed@gmail.com",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.7277124,
      "longitude": -0.5931358
    },
    "hasMap": "https://www.google.com/maps/place/NOTAIRE+LATTAB+MOHAMED/@35.7277124,-0.5931358,17z",
    "sameAs": [
      "https://www.google.com/maps/place/NOTAIRE+LATTAB+MOHAMED/@35.7277124,-0.5931358,17z"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Oran" },
      { "@type": "AdministrativeArea", "name": "Aïn Témouchent" },
      { "@type": "AdministrativeArea", "name": "Mostaganem" },
      { "@type": "AdministrativeArea", "name": "Relizane" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:30",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "13:30",
        "closes": "16:00"
      }
    ]
  };

  const faqSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": isAr ? faq.questionAr : faq.questionFr,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isAr ? faq.answerAr : faq.answerFr
      }
    }))
  };

  return [notarySchema, faqSchema];
}

export async function HomeContent({ lang }: { lang: Language }) {
  const schemas = buildHomeSchemas(lang);

  return (
    <div className="min-h-screen bg-white">
      {schemas.map((schema, idx) => (
        <JsonLdScript key={idx} schema={schema} />
      ))}
      <AnalyticsScriptLoader />
      <div className="flex flex-col">
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

          <UsefulLinksSection lang={lang} />
        </div>
        <Contact contactInfo={<ContactInfo lang={lang} />} lang={lang} />
      </div>
      <div className="no-print">
        <StickyMobileCTA />
      </div>
    </div>
  );
}
