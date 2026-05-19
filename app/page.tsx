import type { Metadata } from 'next';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FAQSchema from './faq-schema';
import Contact from '@/components/contact';
import ContactInfo from '@/components/ContactInfo';
import CalculatorCTA from '@/components/CalculatorCTA';
import WebPageSchema from '@/components/WebPageSchema';
import { NonceScriptLoader } from '@/components/NonceScriptLoader';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { SITE_URL } from '@/lib/config';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Procedures from '@/components/Procedures';
import LegalUpdates from '@/components/LegalUpdates';
import FAQ from '@/components/FAQ';


const SectionSkeleton = ({ height = 'h-64' }: { height?: string }) => (
  <div className={`w-full ${height} bg-gray-50 animate-pulse rounded-lg`} aria-hidden="true" />
);

export const metadata: Metadata = {
  title: 'مكتب الأستاذ لعطب محمد - موثق وهران',
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      'ar-DZ': `${SITE_URL}/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: 'مكتب الأستاذ لعطب محمد - موثق وهران',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ خدمات توثيق عقاري، وكالات، تأسيس شركات، وحاسبة الأسعار المرجعية 2026. حجز موعد سريع.',
    url: `${SITE_URL}/`,
    siteName: 'مكتب الأستاذ لعطب محمد - موثق وهران',
    locale: 'ar_DZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'مكتب الأستاذ لعطب محمد - موثق معتمد بوهران' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق وهران',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ خدمات توثيق عقاري، وكالات، تأسيس شركات، وحاسبة الأسعار المرجعية 2026. حجز موعد سريع.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "Notary"],
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
        "@id": `${SITE_URL}/#organization`,
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
          "dayOfWeek": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "08:30",
          "closes": "12:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "13:30",
          "closes": "16:00"
        }
      ],
      "sameAs": [
        "https://maps.app.goo.gl/NwPD6ik2evPreyCc7"
      ],
      "employee": {
        "@type": "Person",
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
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": SITE_URL
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NonceScriptLoader schemas={[homeSchema]} />
      <WebPageSchema
        url={`${SITE_URL}/`}
        name="مكتب الأستاذ لعطب محمد - موثق وهران"
        description="مكتب توثيق معتمد في وهران يقدم خدمات عقارية وقانونية شاملة: عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار."
        breadcrumbs={[
          { name: "الرئيسية", item: `${SITE_URL}/` }
        ]}
      />
      <main id="main-content">
        <div className="no-print">
          <FAQSchema />
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
        <Contact contactInfo={<ContactInfo />} />
      </main>
      <div className="no-print">
        <StickyMobileCTA />
      </div>
    </div>
  );
}
