import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

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

  const isDev = process.env.NODE_ENV !== 'production';
  // Last updated: 2026-05-14 — includes Google Maps, Ahrefs Analytics, Vercel Analytics
  const cspHeader = `default-src 'self'; script-src 'self' 'unsafe-inline' https://analytics.ahrefs.com https://va.vercel-insights.com https://maps.googleapis.com${isDev ? " 'unsafe-eval'" : ""}; style-src 'self' 'unsafe-inline' https://maps.googleapis.com https://fonts.googleapis.com; img-src 'self' data: blob: https://www.google.com https://maps.googleapis.com https://maps.gstatic.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://analytics.ahrefs.com https://va.vercel-insights.com https://api.indexnow.org https://wa.me https://maps.googleapis.com https://maps.gstatic.com; frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self';`;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Content-Security-Policy', cspHeader);
  
  // 301 Redirect from /blog/fr/[slug] to /fr/blog/[slug]
  if (url.pathname.startsWith('/blog/fr/')) {
    const slug = url.pathname.slice('/blog/fr/'.length);
    url.pathname = `/fr/blog/${slug}`;
    return NextResponse.redirect(url, { status: 301 });
  }

  // Language detection based on URL prefix or cookie
  let lang = 'ar';
  if (url.pathname.startsWith('/fr') && (url.pathname === '/fr' || url.pathname.startsWith('/fr/'))) {
    lang = 'fr';
  } else {
    // Check if the page is one of the neutral paths (for core routes / and /blog, path strictly defines language)
    const isMainOrBlog = url.pathname === '/' || url.pathname.startsWith('/blog');
    if (!isMainOrBlog) {
      lang = request.cookies.get('lang')?.value === 'fr' ? 'fr' : 'ar';
    } else {
      lang = 'ar';
    }
  }

  requestHeaders.set('x-lang', lang);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('x-lang', lang);

  // Set-Cookie to keep the cookie in sync with Detected Language for URL-based routes and bilingual state
  response.cookies.set('lang', lang, { path: '/', maxAge: 31536000 });

  // Dynamic/personalised requests
  const isDynamic = request.method === 'POST' || url.searchParams.has('q');
  
  if (isDynamic) {
    response.headers.set('Cache-Control', 'private, no-store');
  } else {
    // Static pages
    // The architectural assumption in the prompt is INCORRECT:
    // Server Components like NonceScriptLoader reading headers() will force Next.js into dynamic rendering.
    // Even if we set s-maxage here, caching a nonce at the edge while middleware generates a new CSP header 
    // will cause a nonce mismatch and block all scripts. 
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    response.headers.set('Surrogate-Control', 'no-store'); // Tells Vercel to delegate to the page's revalidate
  }

  // Vary header: Keep Vary: Cookie only on routes where language actually varies the response
  // /blog/[slug] and /blog/fr/[slug] do not vary by language cookie in main content.
  const isBlogPost = url.pathname.startsWith('/blog/') && url.pathname !== '/blog';
  if (!isBlogPost) {
    response.headers.set('Vary', 'Cookie');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:ico|png|jpg|jpeg|webp|svg|txt|xml)).*)'],
};
