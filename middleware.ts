import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isKnownPublicRoute } from '@/lib/data/knownRoutes';

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

  const isDev = process.env.NODE_ENV !== 'production';
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://analytics.ahrefs.com https://va.vercel-insights.com https://maps.googleapis.com${isDev ? " 'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline' https://maps.googleapis.com https://fonts.googleapis.com;
    img-src 'self' data: blob: https://www.google.com https://maps.googleapis.com https://maps.gstatic.com;
    font-src 'self' data:;
    connect-src 'self' ws: wss: https://analytics.ahrefs.com https://va.vercel-insights.com https://api.indexnow.org https://maps.googleapis.com https://maps.gstatic.com;
    frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
  `.replace(/\n\s+/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  // Language detection based strictly on URL prefix (/fr = French, / = Arabic)
  let lang = 'ar';
  if (url.pathname.startsWith('/fr') && (url.pathname === '/fr' || url.pathname.startsWith('/fr/'))) {
    lang = 'fr';
  } else {
    lang = 'ar';
  }

  requestHeaders.set('x-lang', lang);
  requestHeaders.set('x-pathname', url.pathname);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('x-lang', lang);

  const isKnownRoute = isKnownPublicRoute(url.pathname);
  const isDynamic = request.method === 'POST' || url.searchParams.has('q');

  // Dynamic/search requests or unknown routes (404 candidates)
  if (isDynamic || !isKnownRoute) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  } else {
    response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }

  if (isDynamic) {
    response.headers.set('Cache-Control', 'private, no-store');
  } else {
    // Static marketing pages: ISR / public cache
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:ico|png|jpg|jpeg|webp|svg|txt|xml)).*)'],
};

