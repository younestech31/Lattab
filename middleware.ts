import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate Limiting constants (Edge Cache)
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

// In-memory map for rate limiting (Edge runtime: single process per region)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // 1. Rate Limiting for /api/rate-limit
  if (url.pathname === '/api/rate-limit') {
    const ip = request.headers.get('x-forwarded-for') || 'unknown_ip';
    
    // In a post request, the phone is in the body, but for middleware simplicity, 
    // we can just limit by IP.
    const clientKey = `${ip}`;
    const now = Date.now();

    const rateLimitInfo = rateLimitMap.get(clientKey);

    if (rateLimitInfo) {
      if (now > rateLimitInfo.resetTime) {
        rateLimitMap.set(clientKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      } else if (rateLimitInfo.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: 'لقد تجاوزت الحد المسموح به من الطلبات. يرجى المحاولة بعد 10 دقائق.' },
          { status: 429 }
        );
      } else {
        rateLimitMap.set(clientKey, { count: rateLimitInfo.count + 1, resetTime: rateLimitInfo.resetTime });
      }
    } else {
      rateLimitMap.set(clientKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }
  }

  // 2. Remove trailing slashes (except root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 301 });
  }

  // 3. Enforce lowercase URLs (prevents duplicate content)
  const lowercasePath = url.pathname.toLowerCase();
  if (url.pathname !== lowercasePath) {
    url.pathname = lowercasePath;
    return NextResponse.redirect(url, { status: 301 });
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const isDev = process.env.NODE_ENV !== 'production';
  // Last updated: 2026-05-14 — includes Google Maps, Ahrefs Analytics, Vercel Analytics
  const cspHeader = `default-src 'self'; script-src 'self' 'nonce-${nonce}' https://analytics.ahrefs.com https://va.vercel-insights.com https://maps.googleapis.com${isDev ? " 'unsafe-eval'" : ""}; style-src 'self' 'nonce-${nonce}' https://maps.googleapis.com; img-src 'self' data: blob: https://www.google.com https://maps.googleapis.com https://maps.gstatic.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://analytics.ahrefs.com https://va.vercel-insights.com https://api.indexnow.org https://api.whatsapp.com https://maps.googleapis.com https://maps.gstatic.com; frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self';`;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:ico|png|jpg|jpeg|webp|svg|txt|xml)).*)', '/api/rate-limit'],
};
