import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css'; // Global styles
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد في وهران. متخصصون في توثيق عقود الجزائر، تصريح ثمن بيع عقاري 2026، والخدمات القانونية العقارية والمدنية.',
  keywords: ['موثق وهران', 'توثيق عقود الجزائر', 'تصريح ثمن بيع عقاري 2026', 'موثق الجزائر', 'عقود عقارية', 'مكتب توثيق', 'وهران'],
  openGraph: {
    title: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    description: 'خدمات التوثيق القانوني في الجزائر - توثيق العقود وحساب الأسعار المرجعية للعقار 2026.',
    type: 'website',
    locale: 'ar_DZ',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Notary",
              "name": "مكتب الأستاذ لعطب محمد - موثق معتمد",
              "image": "https://ia600106.us.archive.org/3/items/logo_black_202604/logo_black.png",
              "@id": "https://lattab.vercel.app",
              "url": "https://lattab.vercel.app",
              "telephone": "+213562296981",
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
