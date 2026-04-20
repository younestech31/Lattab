import type { Metadata } from 'next';
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
  title: 'موثق وهران | مكتب الأستاذ لعطب محمد - Notaire Oran',
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران. خدمات توثيق قانوني: عقود البيع والإيجار، تأسيس الشركات، وحساب السعر المرجعي للعقار 2026.',
  keywords: [
    'موثق وهران', 'موثق معتمد وهران', 'مكتب توثيق وهران', 'توثيق عقود الجزائر', 'تصريح ثمن بيع عقاري 2026', 'عقود عقارية', 'تأسيس شركات الجزائر',
    'notaire Oran', 'notaire agréé Oran', 'office notarial Oran', 'acte de vente Oran', 'prix référence immobilier Algérie 2026', 'création société Algérie'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'موثق معتمد بوهران. تقديم خدمات التوثيق، العقود، وتأسيس الشركات.',
    siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مكتب الأستاذ لعطب محمد - موثق معتمد بوهران | Notaire Oran',
        type: 'image/jpeg',
      },
    ],
    locale: 'ar_DZ',
    type: 'website',
    countryName: 'الجزائر',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'موثق معتمد بوهران. تقديم خدمات التوثيق، العقود، وتأسيس الشركات.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    languages: {
      'ar-DZ': `${SITE_URL}/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' }
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://firestore.googleapis.com" />
        <link rel="preconnect" href="https://apis.google.com" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="kIcznbOizJFi9WN+OY1t/g" async></script>

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
                  "image": SITE_URL + "/logo.png",
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
                  "serviceType": ["Notary", "Real Estate Law", "Corporate Law", "Family Law"]
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  "url": SITE_URL,
                  "name": "مكتب الأستاذ لعطب محمد - موثق بوهران"
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
      </body>
    </html>
  );
}
