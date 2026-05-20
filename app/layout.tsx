import NextTopLoader from 'nextjs-toploader';
import { LanguageProvider } from '@/lib/i18n';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from '@/lib/config';
import type { Viewport } from 'next';
import { cookies, headers } from 'next/headers';

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

/**
 * alternates (hreflang) must never be set at the layout level — it applies to all child routes and produces duplicate tags.
 * Define alternates only in leaf page.tsx files.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'مكتب الأستاذ لعطب محمد - موثق وهران',
    template: '%s | مكتب الأستاذ لعطب محمد - موثق وهران',
  },
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ توثيق عقارات، وكالات، تأسيس شركات وحاسبة الأسعار المرجعية 2026. احجز موعدك.', // 128 chars
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'مكتب الأستاذ لعطب محمد — موثق معتمد بوهران',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مكتب الأستاذ لعطب محمد - موثق وهران',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد بوهران ⚖️ توثيق عقارات، وكالات، تأسيس شركات وحاسبة الأسعار المرجعية 2026. احجز موعدك.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  verification: {
    google: 'bb0bdf3d32a68c3f',
  },
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const headerStore = await headers();
  const headerLang = headerStore.get('x-lang') as 'ar' | 'fr' | null;
  const cookieStore = await cookies();
  const cookieLang = (cookieStore.get('lang')?.value as 'ar' | 'fr') ?? 'ar';
  const resolvedLang = headerLang || cookieLang;

  return (
    <html lang={resolvedLang} dir={resolvedLang === 'ar' ? 'rtl' : 'ltr'} className={cairo.variable} suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preload" as="image" href="/logo-small.webp" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <meta name="indexnow-key" content="23640b5098f44acf92740b8ccee9f405" />
      </head>
      <body className="font-cairo" suppressHydrationWarning>
        <LanguageProvider lang={resolvedLang}>
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 [html[dir=rtl]_&]:focus:right-4 [html[dir=rtl]_&]:focus:left-auto focus:z-[9999] focus:bg-emerald-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
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
        </LanguageProvider>
      </body>
    </html>
  );
}
