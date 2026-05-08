import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // 1. Redirect www → non-www
  if (host.startsWith('www.')) {
    url.host = host.replace('www.', '');
    return NextResponse.redirect(url, { status: 301 });
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

  // 4. Add security headers for all responses
  const response = NextResponse.next();
  response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1');

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:ico|png|jpg|jpeg|webp|svg|txt|xml)).*)'],
};
