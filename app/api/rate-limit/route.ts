import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Rate Limiting constants
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

// In-memory map for rate limiting (Node.js runtime caches module across requests)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown';
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

  return NextResponse.json({ success: true }, { status: 200 });
}
