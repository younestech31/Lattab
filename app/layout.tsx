import NextTopLoader from 'nextjs-toploader';
import { LanguageProvider } from '@/lib/i18n';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Cairo } from 'next/font/google';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from '@/lib/constants';

const cairo = Cairo({ 
  subsets: ['arabic'], 
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'موثق وهران | مكتب الأستاذ لعطب محمد - Notaire Oran',
    template: '%s | موثق لعطب - وهران',
  },
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران. عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار 2026.',
  keywords: [
    'موثق وهران', 'موثق معتمد وهران', 'مكتب توثيق وهران',
    'توثيق عقود الجزائر', 'تصريح ثمن بيع عقاري 2026',
    'عقود عقارية', 'تأسيس شركات الجزائر',
    'notaire Oran', 'notaire agréé Oran', 'office notarial Oran',
    'acte de vente Oran', 'prix référence immobilier Algérie 2026',
    'création société Algérie', 'Maître Lattab Mohamed',
  ],
  authors: [{ name: 'مكتب الأستاذ لعطب محمد', url: SITE_URL }],
  creator: 'مكتب الأستاذ لعطب محمد',
  publisher: 'مكتب الأستاذ لعطب محمد',
  category: 'legal services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران. عقود البيع، تأسيس الشركات، وحساب السعر المرجعي للعقار 2026.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'ar-DZ': SITE_URL,
      'fr-DZ': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  verification: {
    google: 'bb0bdf3d32a68c3f',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/logo-optimized.png" as="image" fetchPriority="high" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <meta name="indexnow-key" content="23640b5098f44acf92740b8ccee9f405" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LegalService",
                  "name": "مكتب الأستاذ لعطب محمد - موثق بوهران",
                  "description": "Office notarial agréé à Oran. Actes de vente, prix de référence immobilier 2026, création de sociétés. مكتب توثيق معتمد في وهران يقدم خدمات عقارية وقانونية شاملة.",
                  "image": {
                    "@type": "ImageObject",
                    "url": `${SITE_URL}/logo-optimized.png`
                  },
                  "@id": `${SITE_URL}/#organization`,
                  "url": SITE_URL,
                  "telephone": "+213562296981",
                  "priceRange": "$$",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "47",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
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
                      "urlTemplate": `${SITE_URL}/blog?q={search_term_string}`
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
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-emerald-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
    >
      تخطى إلى المحتوى الرئيسي
    </a>
    <NextTopLoader 
      color="#059669"
      showSpinner={false}
      height={3}
    />
    <LanguageProvider>
          {children}
          <FloatingWhatsApp />
          <Analytics />
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="kIcznbOizJFi9WN+OY1t/g"
            strategy="lazyOnload"
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
