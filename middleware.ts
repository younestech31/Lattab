import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// HTTP→HTTPS is handled natively by Vercel. The old redirect created a double-redirect chain.
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
