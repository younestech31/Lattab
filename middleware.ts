import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isKnownPublicRoute } from '@/lib/data/knownRoutes';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Bypass internal Next.js assets, API routes, static files, fonts, images, and public documents
  if (
    url.pathname.startsWith('/_next/') ||
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/fonts/') ||
    /\.(ttf|otf|woff|woff2|eot|png|jpg|jpeg|webp|svg|ico|txt|xml|pdf)$/i.test(url.pathname)
  ) {
    return NextResponse.next();
  }

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

  const requestHeaders = new Headers(request.headers);

  // Generate per-request nonce for strict CSP
  const nonce = crypto.randomUUID();
  requestHeaders.set('x-nonce', nonce);

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

  response.headers.set('x-lang', lang);

  const isProd = process.env.NODE_ENV === 'production';
  const cspHeader = [
    "default-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    `frame-ancestors ${isProd ? "'self'" : "*"}`,
    isProd ? "upgrade-insecure-requests" : "",
    "font-src 'self' data:",
    "img-src 'self' data: blob: https://www.google.com https://maps.googleapis.com https://maps.gstatic.com",
    "style-src 'self' 'unsafe-inline'",
    `script-src ${isProd ? `'self' 'nonce-${nonce}'` : `'self' 'unsafe-eval' 'unsafe-inline' 'nonce-${nonce}'`}`,
    `connect-src ${isProd ? "'self' https://va.vercel-insights.com" : "'self' ws: wss: http: https:"}`,
    "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com",
  ]
    .filter(Boolean)
    .join('; ');

  response.headers.set('Content-Security-Policy', cspHeader);

  const isKnownRoute = isKnownPublicRoute(url.pathname);
  const isDynamic = request.method === 'POST' || url.searchParams.has('q');

  // Dynamic/search requests or unknown routes (404 candidates)
  if (isDynamic || !isKnownRoute) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  } else {
    response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }

  const isRSC =
    request.headers.get('RSC') === '1' ||
    request.headers.has('Next-Router-State-Tree') ||
    request.headers.has('Next-Router-Prefetch') ||
    request.headers.has('Next-Url') ||
    (request.headers.get('Accept')?.includes('text/x-component') ?? false) ||
    url.searchParams.has('_rsc');

  const isDev = process.env.NODE_ENV !== 'production';

  // Cache-Control rules (mandatory order)
  if (isDev || isRSC) {
    response.headers.set('Cache-Control', 'no-store, must-revalidate');
  } else if (isDynamic) {
    response.headers.set('Cache-Control', 'private, no-store');
  } else {
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|fonts|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:ico|png|jpg|jpeg|webp|svg|txt|xml|ttf|woff|woff2|eot|otf)).*)'],
};
