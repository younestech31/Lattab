import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css'; // Global styles
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران. خدمات توثيق عقود البيع، حساب السعر المرجعي للعقار 2026، وتأسيس الشركات. خبرة 15 عاماً في القانون العقاري الجزائري.',
  keywords: ['موثق وهران', 'توثيق عقود الجزائر', 'تصريح ثمن بيع عقاري 2026', 'موثق الجزائر', 'عقود عقارية', 'مكتب توثيق', 'وهران', 'توثيق عقاري'],
  robots: 'index, follow',
  openGraph: {
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'خدمات التوثيق القانوني في الجزائر - توثيق العقود وحساب الأسعار المرجعية للعقار 2026.',
    type: 'website',
    locale: 'ar_DZ',
    images: [
      {
        url: 'https://archive.org/download/Opn-logo/Picsart_26-04-11_23-10-29-566.png',
        width: 800,
        height: 600,
        alt: 'مكتب الأستاذ لعطب محمد',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'خدمات التوثيق القانوني في الجزائر - توثيق العقود وحساب الأسعار المرجعية للعقار 2026.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="kIcznbOizJFi9WN+OY1t/g" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Notary",
              "name": "مكتب الأستاذ لعطب محمد - موثق معتمد",
              "description": "مكتب توثيق معتمد في وهران يقدم خدمات عقارية وقانونية شاملة.",
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
