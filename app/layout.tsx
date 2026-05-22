import NextTopLoader from 'nextjs-toploader';
import { LanguageProvider } from '@/lib/i18n';
import type { Metadata } from 'next';
import { Cairo, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import CookieBanner from '@/components/CookieBanner';
import { SITE_URL } from '@/lib/config';
import type { Viewport } from 'next';
import { headers } from 'next/headers';
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister';

const cairo = Cairo({ 
  subsets: ['arabic'], 
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
  preload: false,
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
    default: 'الديوان العمومي للتوثيق — الأستاذ لعطب محمد موثق بوهران',
    template: '%s — الديوان العمومي للتوثيق',
  },
  description: 'الديوان العمومي للتوثيق — الأستاذ لعطب محمد موثق بوهران ⚖️ لتوثيق عقودكم من عقارات وشركات ووكالات وفق أحكام القانون الجزائري، مع حاسبة الأسعار المرجعية 2026.',
  keywords: [
    'الديوان العمومي للتوثيق', 'موثق وهران', 'موثق معتمد وهران', 'الديوان العمومي للتوثيق وهران',
    'توثيق عقود الجزائر', 'تصريح ثمن بيع عقاري 2026',
    'عقود عقارية', 'تأسيس شركات الجزائر',
    'notaire Oran', 'notaire agréé Oran', 'Etude Public Notarial Oran',
    'acte de vente Oran', 'prix référence immobilier Algérie 2026',
    'création société Algérie', 'Maître Lattab Mohamed',
  ],
  authors: [{ name: 'الديوان العمومي للتوثيق', url: SITE_URL }],
  creator: 'الديوان العمومي للتوثيق',
  publisher: 'الديوان العمومي للتوثيق',
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
        alt: 'الديوان العمومي للتوثيق — الأستاذ لعطب محمد موثق بوهران',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الديوان العمومي للتوثيق — الأستاذ لعطب محمد موثق بوهران',
    description: 'الديوان العمومي للتوثيق — الأستاذ لعطب محمد موثق بوهران ⚖️ لتوثيق عقودكم من عقارات وشركات ووكالات وفق أحكام القانون الجزائري، مع حاسبة الأسعار المرجعية 2026.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  verification: {
    google: 'bb0bdf3d32a68c3f',
  },
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  /* NOTE: headers() here forces dynamic rendering for the layout. Child page segments (app/page.tsx, app/fr/page.tsx) are separately statically rendered. In Next.js 15, Page-level static rendering is still achievable because each page segment is independently optimised — the layout being dynamic does not force pages to be dynamic when pages themselves do not call dynamic functions. See Next.js 15 partial prerendering docs. */
  const resolvedLang = (await headers()).get('x-lang') as 'ar' | 'fr' ?? 'ar';

  return (
    <html lang={resolvedLang} dir={resolvedLang === 'ar' ? 'rtl' : 'ltr'} className={`${cairo.variable} ${resolvedLang === 'fr' ? ibmPlexSans.variable : ''}`} suppressHydrationWarning>
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
        {/* next/font/google self-hosts Cairo at build time — no runtime Google Fonts connection occurs */}
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <meta name="indexnow-key" content="fa0c5260a1b1458b87b8ff3e7df53cf2" />
      </head>
      <body className="font-cairo" suppressHydrationWarning>
        <LanguageProvider lang={resolvedLang}>
          <a 
            href="#main-content" 
            lang={resolvedLang}
            className="skip-link"
          >
            {resolvedLang === 'ar' ? 'تخطى إلى المحتوى الرئيسي' : 'Passer au contenu principal'}
          </a>
          <NextTopLoader 
            color="#059669"
            showSpinner={false}
            height={3}
          />
          <ServiceWorkerRegister />
          <div className="no-print">
            <Header lang={resolvedLang} />
          </div>
          <FloatingWhatsApp />
          
          {children}
          <div className="no-print">
            <Footer lang={resolvedLang} />
          </div>
          <AnalyticsWrapper />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
