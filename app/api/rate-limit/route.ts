import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/utils/rateLimiter';

export const runtime = 'nodejs';

// Ce rate-limiter offre une protection best-effort sur un seul worker. Pour une protection multi-instance garantie, un store distribué est requis.

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown';
  
  // We can also leverage Vercel-specific geo/IP headers if needed
  const country = request.headers.get('x-vercel-ip-country') ?? 'unknown';
  
  const clientKey = `${ip}:${country}`;
  
  const limitResult = checkRateLimit(clientKey);
  
  if (!limitResult.success) {
    return NextResponse.json(
      { error: 'لقد تجاوزت الحد المسموح به من الطلبات. يرجى المحاولة بعد 10 دقائق.' },
      { 
        status: 429,
        headers: {
          'Retry-After': String(limitResult.retryAfter)
        }
      }
    );
  }
  
  return NextResponse.json({ success: true }, { status: 200 });
}
