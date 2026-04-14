import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css'; // Global styles
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const cairo = Cairo({ 
  subsets: ['arabic'], 
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران. خدمات توثيق عقود البيع، حساب السعر المرجعي للعقار 2026، وتأسيس الشركات. — Maître Lattab Mohamed, notaire agréé à Oran. Services: actes de vente, prix de référence immobilier 2026, création de sociétés.',
  keywords: [
    // عربية
    'موثق وهران', 'توثيق عقود الجزائر', 'تصريح ثمن بيع عقاري 2026', 'موثق الجزائر', 'عقود عقارية', 'مكتب توثيق', 'وهران',
    // فرنسية
    'notaire Oran', 'notaire agréé Oran', 'acte de vente Oran', 'prix référence immobilier Algérie 2026', 'office notarial Oran', 'création société Algérie', 'notaire Algérie',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'Notaire agréé à Oran — موثق معتمد بوهران. Actes de vente, prix référence immobilier 2026, création de sociétés.',
    url: 'https://lattab.vercel.app',
    siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    images: [
      {
        url: 'https://archive.org/download/Opn-logo/Picsart_26-04-11_23-10-29-566.png',
        width: 800,
        height: 600,
        alt: 'Maître Lattab Mohamed - Notaire Oran / موثق لعطب محمد وهران',
      },
    ],
    locale: 'ar_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'Notaire agréé à Oran — actes de vente, immobilier 2026, sociétés.',
    images: ['https://archive.org/download/Opn-logo/Picsart_26-04-11_23-10-29-566.png'],
  },
  alternates: {
    canonical: 'https://lattab.vercel.app',
    languages: {
      'ar-DZ': 'https://lattab.vercel.app',
      'fr-DZ': 'https://lattab.vercel.app',
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="kIcznbOizJFi9WN+OY1t/g" async></script>
        
        {/* ✅ أضف هذين السطرين */}
        <link rel="alternate" hrefLang="ar-DZ" href="https://lattab.vercel.app" />
        <link rel="alternate" hrefLang="fr-DZ" href="https://lattab.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://lattab.vercel.app" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Notary",
              "name": "Maître Lattab Mohamed - Notaire agréé à Oran | موثق لعطب محمد وهران",
              "description": "Office notarial agréé à Oran. Actes de vente, prix de référence immobilier 2026, création de sociétés. مكتب توثيق معتمد في وهران يقدم خدمات عقارية وقانونية شاملة.",
              "image": "https://archive.org/download/Opn-logo/Picsart_26-04-11_23-10-29-566.png",
              "@id": "https://lattab.vercel.app",
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
              ]
            })
          }}
        />
      </head>
      <body className="font-cairo" suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
