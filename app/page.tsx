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
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Procedures from '@/components/Procedures';
import LegalUpdates from '@/components/LegalUpdates';
import FAQ from '@/components/FAQ';
import { faqs } from '@/lib/data/faq';
import { JsonLdScript } from '@/components/schema';
import { NonceAnalyticsLoader } from '@/components/NonceAnalyticsLoader';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

const SectionSkeleton = ({ height = 'h-64' }: { height?: string }) => (
  <div className={`w-full ${height} bg-gray-50 animate-pulse rounded-lg`} aria-hidden="true" />
);

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ توثيق عقارات، وكالات، تأسيس شركات وحاسبة الأسعار المرجعية 2026. احجز موعدك.'; // 128 chars
  assertDescriptionLength(desc, 'Home Page / app/page.tsx');

  return {
    title: { absolute: 'مكتب الأستاذ لعطب محمد — موثق وهران' },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/`,
      languages: {
        'ar-DZ': `${SITE_URL}/`,
        'fr-DZ': `${SITE_URL}/fr`,
        'x-default': `${SITE_URL}/`,
      },
    },
    openGraph: {
      title: 'مكتب الأستاذ لعطب محمد — موثق وهران',
      description: desc,
      url: `${SITE_URL}/`,
      siteName: 'مكتب الأستاذ لعطب محمد — موثق وهران',
      locale: 'ar_DZ',
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'مكتب الأستاذ لعطب محمد - موثق معتمد بوهران' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'مكتب الأستاذ لعطب محمد — موثق وهران',
      description: desc,
      images: [`${SITE_URL}/og-image.jpg`],
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
async function buildHomeSchema(lang: 'ar' | 'fr'): Promise<Record<string, unknown>> {
  const headerStore = await headers();
  const currentLang = (headerStore.get('x-lang') ?? lang ?? 'ar') as 'ar' | 'fr';

  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "Notary",
      "@id": `${SITE_URL}/#organization`,
      "name": "مكتب الأستاذ لعطب محمد - موثق وهران",
      "description": "مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ خدمات توثيق عقاري، وكالات، تأسيس شركات، وحاسبة الأسعار المرجعية 2026. حجز موعد سريع.",
      "image": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/og-image.jpg`,
        "width": 1200,
        "height": 630
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["#main-content h1", ".hero-description", "#contact"]
      },
      "mentions": [
        { "@type": "City", "name": "وهران", "sameAs": "https://www.wikidata.org/wiki/Q183236" },
        { "@type": "City", "name": "Oran" },
        { "@type": "AdministrativeArea", "name": "ولاية وهران" }
      ],
      "url": SITE_URL,
      "telephone": "+213562296981",
      "priceRange": "$$",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+213562296981",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "French"],
        "areaServed": "DZ"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي",
        "addressLocality": "وهران",
        "postalCode": "31000",
        "addressCountry": "DZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.7277124,
        "longitude": -0.5931358
      },
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
      ],
      "hasMap": "https://maps.app.goo.gl/NwPD6ik2evPreyCc7",
      "currenciesAccepted": "DZD",
      "paymentAccepted": "Cash",
      "founder": { "@id": `${SITE_URL}/#person-mohamed-lattab` },
      "employee": { "@id": `${SITE_URL}/#person-mohamed-lattab` },
      "knowsLanguage": ["ar", "fr"],
      "areaServed": {
        "@type": "City",
        "name": "وهران",
        "sameAs": "https://www.wikidata.org/wiki/Q183236"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "خدمات توثيقية",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "عقود البيع والشراء العقاري" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تأسيس الشركات" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "عقود الزواج والطلاق" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "الوكالات العامة والخاصة" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "الرهن والتأمين العقاري" } }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person-mohamed-lattab`,
      "name": "لعطب محمد",
      "jobTitle": "موثق معتمد",
      "worksFor": { "@id": `${SITE_URL}/#organization` },
      "knowsAbout": [
        "Droit immobilier algérien",
        "Création de sociétés en Algérie",
        "Succession et droit de la famille algérien",
        "Prix référentiel immobilier Algérie 2026",
        "القانون العقاري الجزائري",
        "التوثيق في الجزائر"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "مكتب الأستاذ لعطب محمد - موثق وهران",
      "description": "موثق معتمد بوهران ⚖️ خدمات توثيق عقاري، وكالات، تأسيس شركات، وحاسبة الأسعار المرجعية 2026",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/blog?q={search_term_string}`
        },
        "query-input": {
          "@type": "PropertyValueSpecification",
          "valueName": "search_term_string",
          "valueRequired": true
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      "url": `${SITE_URL}/`,
      "name": "مكتب الأستاذ لعطب محمد - موثق وهران",
      "description": "مكتب توثيق معتمد في وهران يقدم خدمات عقارية وقانونية شاملة: عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار.",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "inLanguage": currentLang === 'ar' ? 'ar-DZ' : 'fr-DZ',
      "breadcrumb": { "@id": `${SITE_URL}/#breadcrumb` }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": `${SITE_URL}/`
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntityOfPage": { "@id": `${SITE_URL}/#webpage` },
      "inLanguage": currentLang === 'ar' ? 'ar-DZ' : 'fr-DZ',
      "mainEntity": faqs.map(faq => {
        if (currentLang === 'ar') {
          return {
            "@type": "Question",
            "name": faq.questionAr,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answerAr
            }
          };
        } else {
          return {
            "@type": "Question",
            "name": faq.questionFr,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answerFr
            }
          };
        }
      })
    }
  ];

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

export default async function Home() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang')?.value as Language) ?? 'ar';
  
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';
  const currentLang = (headerStore.get('x-lang') ?? lang) as 'ar' | 'fr';
  const consolidatedSchema = await buildHomeSchema(currentLang);

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
            <WhyChooseUs />
          </Suspense>
          <Suspense fallback={<SectionSkeleton height="h-80" />}>
            <About />
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
