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

export const metadata: Metadata = {
  title: 'موثق وهران | مكتب الأستاذ لعطب محمد - Notaire Oran',
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران (Notaire agréé à Oran). تقديم خدمات التوثيق القانوني، عقود البيع والشراء، الإيجار، تأسيس الشركات، وحساب السعر المرجعي للعقار 2026.',
  keywords: [
    'موثق وهران', 'موثق معتمد وهران', 'مكتب توثيق وهران', 'توثيق عقود الجزائر', 'تصريح ثمن بيع عقاري 2026', 'عقود عقارية', 'تأسيس شركات الجزائر',
    'notaire Oran', 'notaire agréé Oran', 'office notarial Oran', 'acte de vente Oran', 'prix référence immobilier Algérie 2026', 'création société Algérie'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'Notaire agréé à Oran — موثق معتمد بوهران. Actes de vente, prix référence immobilier 2026, création de sociétés.',
    siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    images: [
      {
        url: 'https://ia600909.us.archive.org/16/items/Opn-logo/logo-notaire-lattab.png',
        width: 800,
        height: 600,
        alt: 'Maître Lattab Mohamed - Notaire Oran / موثق لعطب محمد وهران',
      },
    ],
    locale: 'ar_DZ',
    type: 'website',
    countryName: 'الجزائر',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'Notaire agréé à Oran — actes de vente, immobilier 2026, sociétés.',
    images: ['https://ia600909.us.archive.org/16/items/Opn-logo/logo-notaire-lattab.png'],
  },
  icons: {
    icon: [
      { url: '/icon', type: 'image/png' },
      { url: 'https://ia600909.us.archive.org/16/items/Opn-logo/logo-notaire-lattab.png', type: 'image/png' }
    ],
    shortcut: 'https://ia600909.us.archive.org/16/items/Opn-logo/logo-notaire-lattab.png',
    apple: 'https://ia600909.us.archive.org/16/items/Opn-logo/logo-notaire-lattab.png',
  },
  metadataBase: new URL('https://lattab.vercel.app'),
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href="/icon" type="image/png" sizes="32x32" />
        <link rel="icon" href="https://ia600909.us.archive.org/16/items/Opn-logo/logo-notaire-lattab.png" type="image/png" />
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
                  "image": "https://ia600909.us.archive.org/16/items/Opn-logo/logo-notaire-lattab.png",
                  "@id": "https://lattab.vercel.app/#organization",
                  "url": "https://lattab.vercel.app",
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
                  "@id": "https://lattab.vercel.app/#website",
                  "url": "https://lattab.vercel.app",
                  "name": "مكتب الأستاذ لعطب محمد - موثق بوهران",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://lattab.vercel.app/?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://lattab.vercel.app/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "الرئيسية",
                      "item": "https://lattab.vercel.app/"
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
