import { cookies, headers } from 'next/headers';
import NextTopLoader from 'nextjs-toploader';
import { LanguageProvider } from '@/lib/i18n';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Cairo } from 'next/font/google';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from '@/lib/constants';
import { JsonLdScript } from '@/components/schema';
import type { Viewport } from 'next';

const cairo = Cairo({ 
  subsets: ['arabic'], 
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#059669',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'موثق وهران | مكتب الأستاذ لعطب محمد - Notaire Oran',
    template: '%s | موثق لعطب - وهران',
  },
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ خدمات توثيق عقاري، وكالات، تأسيس شركات، وحاسبة الأسعار المرجعية 2026. حجز موعد سريع.',
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
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ خدمات توثيق عقاري، وكالات، تأسيس شركات، وحاسبة الأسعار المرجعية 2026. حجز موعد سريع.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'ar-DZ': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  verification: {
    google: 'bb0bdf3d32a68c3f',
  },
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const nonce = headerStore.get('x-nonce') ?? '';
  const resolvedLang = (cookieStore.get('lang')?.value as 'ar' | 'fr') || 'ar';

  return (
    <html lang={resolvedLang} dir={resolvedLang === 'ar' ? 'rtl' : 'ltr'} className={cairo.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        
        {/* Main App Icon */}
        <link rel="apple-touch-icon" href="/logo-optimized.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        <link rel="manifest" href="/manifest.json" />
        
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link rel="preload" href="/logo-optimized.png" as="image" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <meta name="indexnow-key" content="23640b5098f44acf92740b8ccee9f405" />

        <JsonLdScript
          schema={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LegalService", "Notary"],
                "name": "مكتب الأستاذ لعطب محمد - موثق بوهران",
                "description": "مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ خدمات توثيق عقاري، وكالات، تأسيس شركات، وحاسبة الأسعار المرجعية 2026. حجز موعد سريع.",
                "image": {
                  "@type": "ImageObject",
                  "url": `${SITE_URL}/logo-optimized.png`
                },
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
                  "worksFor": { "@id": `${SITE_URL}/#organization` }
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
          }}
          nonce={nonce}
        />
      </head>
  <body className="font-cairo" suppressHydrationWarning>
    <LanguageProvider defaultLang={resolvedLang}>
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
      <div className="no-print">
        <Header />
      </div>
      <FloatingWhatsApp />
      
      {children}

      <div className="no-print">
        <Footer />
      </div>

      <Analytics />
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="kIcznbOizJFi9WN+OY1t/g"
        strategy="lazyOnload"
        nonce={nonce}
      />
    </LanguageProvider>
  </body>
    </html>
  );
}
