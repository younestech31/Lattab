import type { Metadata } from 'next';
import Script from 'next/script';
import { Cairo } from 'next/font/google';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Analytics } from "@vercel/analytics/next";

const cairo = Cairo({ 
  subsets: ['arabic'], 
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
});

const SITE_URL = 'https://lattab.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'موثق وهران | مكتب الأستاذ لعطب محمد - Notaire Oran',
    template: '%s | موثق لعطب - وهران',
  },
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران. عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار 2026.',
  keywords: [
    'موثق وهران', 'موثق معتمد وهران', 'مكتب توثيق وهران', 'توثيق عقود الجزائر', 'تصريح ثمن بيع عقاري 2026', 'عقود عقارية', 'تأسيس شركات الجزائر',
    'notaire Oran', 'notaire agréé Oran', 'office notarial Oran', 'acte de vente Oran', 'prix référence immobilier Algérie 2026', 'création société Algérie'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران. عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار 2026.',
    url: SITE_URL,
    siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    locale: 'ar_DZ',
    type: 'website',
    countryName: 'الجزائر',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران. عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار 2026.',
  },
  alternates: {
    languages: {
      'ar-DZ': SITE_URL,
      'fr-DZ': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/logo-optimized.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/logo-optimized.png', sizes: '180x180' }],
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <link rel="preconnect" href="https://firestore.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://apis.google.com" crossOrigin="anonymous" />
        <meta name="indexnow-key" content="23640b5098f44acf92740b8ccee9f405" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LegalService",
                  "name": "Maître Lattab Mohamed - Notaire agréé à Oran | موثق لعطب محمد وهران",
                  "description": "Office notarial agréé à Oran. Actes de vente, prix de référence immobilier 2026, création de sociétés. مكتب توثيق معتمد في وهران يقدم خدمات عقارية وقانونية شاملة.",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://lattab.vercel.app/logo-optimized.png"
                  },
                  "@id": `${SITE_URL}/#organization`,
                  "url": SITE_URL,
                  "telephone": "+213562296981",
                  "priceRange": "$$",
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
                  "founder": {
                    "@type": "Person",
                    "name": "لعطب محمد"
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
                  "name": "مكتب الأستاذ لعطب محمد - موثق بوهران",
                  "description": "موثق معتمد بوهران — خدمات توثيق قانوني، عقارات، تأسيس شركات",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://lattab.vercel.app/blog?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
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
            })
          }}
        />
      </head>
      <body className="font-cairo" suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
        <Analytics />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="kIcznbOizJFi9WN+OY1t/g"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
