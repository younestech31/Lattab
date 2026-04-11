import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css'; // Global styles

const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'مكتب الأستاذ لعطب محمد | توثيق العقود والخدمات القانونية - الجزائر',
  description: 'مكتب موثق معتمد في الجزائر - خدمات توثيق العقود والوثائق القانونية',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo" suppressHydrationWarning>{children}</body>
    </html>
  );
}
