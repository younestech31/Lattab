import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './lib/i18n-config';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // 1. Remove trailing slashes (except root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 301 });
  }

  // 2. Enforce lowercase URLs (prevents duplicate content)
  const lowercasePath = url.pathname.toLowerCase();
  if (url.pathname !== lowercasePath) {
    url.pathname = lowercasePath;
    return NextResponse.redirect(url, { status: 301 });
  }

  const nonce = btoa(crypto.randomUUID());
  const isDev = process.env.NODE_ENV !== 'production';
  const cspHeader = `default-src 'self'; script-src 'self' 'nonce-${nonce}' https://analytics.ahrefs.com https://va.vercel-insights.com https://maps.googleapis.com${isDev ? " 'unsafe-eval'" : ""}; style-src 'self' 'nonce-${nonce}' https://maps.googleapis.com; img-src 'self' data: blob: https://www.google.com https://maps.googleapis.com https://maps.gstatic.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://analytics.ahrefs.com https://va.vercel-insights.com https://api.indexnow.org https://api.whatsapp.com https://maps.googleapis.com https://maps.gstatic.com; frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self';`;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);
  
  const pathname = url.pathname;
  const pathnameHasLocale = locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  let locale = defaultLocale;
  
  if (pathnameHasLocale) {
    locale = pathname.split('/')[1] as typeof defaultLocale;
  } else {
    const cookieLang = request.cookies.get('lang')?.value;
    if (cookieLang && locales.includes(cookieLang as any)) {
      locale = cookieLang as any;
    } else {
      const acceptLanguage = request.headers.get('accept-language');
      if (acceptLanguage && acceptLanguage.includes('fr')) {
         locale = 'fr';
      }
    }
  }

  requestHeaders.set('x-lang', locale);

  let response;

  if (!pathnameHasLocale) {
    if (locale === defaultLocale) {
      // Rewrite to /ar/...
      const rewriteUrl = request.nextUrl.clone();
      rewriteUrl.pathname = `/${defaultLocale}${pathname}`;
      response = NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
    } else {
      // Redirect to /fr/...
      url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
      return NextResponse.redirect(url);
    }
  } else if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    // Redirect /ar/... to /...
    url.pathname = pathname.replace(new RegExp(`^/${defaultLocale}`), '') || '/';
    return NextResponse.redirect(url);
  } else {
    response = NextResponse.next({ request: { headers: requestHeaders } });
  }

  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('x-lang', locale);
  
  if (request.cookies.get('lang')?.value !== locale) {
    response.cookies.set('lang', locale, { path: '/', maxAge: 31536000 });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:ico|png|jpg|jpeg|webp|svg|txt|xml)).*)'],
};
