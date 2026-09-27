import NextTopLoader from 'nextjs-toploader';
import { LanguageProvider } from '@/lib/i18n';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import CookieBanner from '@/components/CookieBanner';
import { SITE_URL } from '@/lib/config';
import type { Viewport } from 'next';
import { headers } from 'next/headers';

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
    default: 'الأستاذ لعطب محمد — موثق بوهران',
    template: '%s',
  },
  description: 'مكتب الأستاذ لعطب محمد، موثق معتمد لدى محكمة فلاوسن وهران — للإعلام والتوثيق الرسمي للعقود العقارية والتجارية والأحوال الشخصية وفق القانون الجزائري، مع حاسبة الأسعار المرجعية 2026.',
  authors: [{ name: 'الأستاذ لعطب محمد - موثق بوهران', url: `${SITE_URL}/a-propos` }],
  creator: 'الأستاذ لعطب محمد - موثق بوهران',
  publisher: 'الأستاذ لعطب محمد - موثق بوهران',
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
    type: 'website',
    locale: 'ar_DZ',
    alternateLocale: ['fr_DZ'],
    url: SITE_URL,
    siteName: 'الأستاذ لعطب محمد — موثق بوهران',
    title: 'الأستاذ لعطب محمد — موثق بوهران',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد لدى محكمة فلاوسن وهران — للإعلام والتوثيق الرسمي للعقود وفق أحكام القانون الجزائري.',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'الأستاذ لعطب محمد — موثق بوهران',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الأستاذ لعطب محمد — موثق بوهران',
    description: 'مكتب الأستاذ لعطب محمد، موثق معتمد لدى محكمة فلاوسن وهران — للإعلام والتوثيق الرسمي للعقود وفق أحكام القانون الجزائري.',
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
        {/* next/font/google self-hosts Cairo at build time — no runtime Google Fonts connection occurs */}
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for (var i = 0; i < registrations.length; i++) {
                      registrations[i].unregister();
                    }
                  });
                }
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (var i = 0; i < names.length; i++) {
                      caches.delete(names[i]);
                    }
                  });
                }
              }
            `
          }}
        />
      </head>
      <body className="font-cairo" suppressHydrationWarning>
        <LanguageProvider lang={resolvedLang}>
          <a 
            href="#main-content" 
            lang={resolvedLang}
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 [html[dir=rtl]_&]:focus:right-4 [html[dir=rtl]_&]:focus:left-auto focus:z-[9999] focus:bg-emerald-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
          >
            {resolvedLang === 'ar' ? 'تخطى إلى المحتوى الرئيسي' : 'Passer au contenu principal'}
          </a>
          <NextTopLoader 
            color="#059669"
            showSpinner={false}
            height={3}
          />
          <div className="no-print">
            <Header lang={resolvedLang} />
          </div>
          <FloatingWhatsApp />
          
          <main id="main-content" className="flex-grow flex flex-col">
            {children}
          </main>
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
