import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Rate limiting is handled in middleware.ts
  return NextResponse.json({ success: true, message: 'مسموح بالمرور' }, { status: 200 });
}
