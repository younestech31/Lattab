import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css'; // Global styles

const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'مكتب الأستاذ لعطب محمد - موثق وهران | توثيق عقود الجزائر وتصريح ثمن بيع عقاري 2026',
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد في وهران. متخصصون في توثيق عقود الجزائر، تصريح ثمن بيع عقاري 2026، والخدمات القانونية العقارية والمدنية.',
  keywords: ['موثق وهران', 'توثيق عقود الجزائر', 'تصريح ثمن بيع عقاري 2026', 'موثق الجزائر', 'عقود عقارية', 'مكتب توثيق', 'وهران'],
  openGraph: {
    title: 'مكتب الأستاذ لعطب محمد - موثق وهران | توثيق عقود الجزائر',
    description: 'خدمات التوثيق القانوني في الجزائر - توثيق العقود وحساب الأسعار المرجعية للعقار 2026.',
    type: 'website',
    locale: 'ar_DZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق وهران',
    description: 'خدمات التوثيق القانوني في الجزائر - توثيق العقود وحساب الأسعار المرجعية للعقار 2026.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo" suppressHydrationWarning>{children}</body>
    </html>
  );
}
