import { NextResponse } from 'next/server';

// ─── ثوابت تحديد معدل الإرسال (Rate Limiting) ───────────────
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 دقائق

// استخدام Map للتخزين المؤقت في الذاكرة (Memory Store)
// هذا مناسب لبيئة Vercel Serverless Functions للطلبات من نفس الـ Instance
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(req: Request) {
  try {
    // الحصول على الـ IP الخاص بالمستخدم أو رقم الهاتف من الطلب
    const ip = req.headers.get('x-forwarded-for') || 
               req.headers.get('x-real-ip') || 
               'unknown_ip';
    
    const body = await req.json();
    const phone = body?.phone || 'unknown_phone';
    
    // يمكننا تتبع المعدل بناءً على الـ IP أو رقم الهاتف (نستخدم مفتاح مركب)
    const clientKey = `${ip}_${phone}`;
    const now = Date.now();

    // تنظيف الخريطة (Garbage Collection) بشكل عشوائي لمنع استهلاك الذاكرة
    if (Math.random() < 0.1) {
      rateLimitMap.forEach((value, key) => {
        if (now > value.resetTime) {
          rateLimitMap.delete(key);
        }
      });
    }

    const rateLimitInfo = rateLimitMap.get(clientKey);

    if (rateLimitInfo) {
      if (now > rateLimitInfo.resetTime) {
        // إعادة تعيين العداد إذا انتهت المدة
        rateLimitMap.set(clientKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      } else if (rateLimitInfo.count >= RATE_LIMIT_MAX) {
        // تجاوز الحد المسموح
        return NextResponse.json(
          { error: 'لقد تجاوزت الحد المسموح به من الطلبات. يرجى المحاولة بعد 10 دقائق.' },
          { status: 429 }
        );
      } else {
        // زيادة العداد
        rateLimitMap.set(clientKey, { count: rateLimitInfo.count + 1, resetTime: rateLimitInfo.resetTime });
      }
    } else {
      // أول طلب
      rateLimitMap.set(clientKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    return NextResponse.json({ success: true, message: 'مسموح بالمرور' }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
