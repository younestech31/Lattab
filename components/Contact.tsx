'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, Building, CheckCircle, Loader2, Copy } from 'lucide-react';
import { WORKING_HOURS } from '@/lib/constants';

// ─── ثوابت تحديد معدل الإرسال (Rate Limiting) ───────────────
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 دقائق

// ─── دالة تنظيف النصوص ──────────────────────────
function cleanText(input: string): string {
  return input
    ? input.trim().replace(/<[^>]*>?/g, '').slice(0, 1000)
    : '';
}

// ─── تحويل الوقت المعروض إلى صيغة 24 ساعة للتخزين ───────────
const TIME_DISPLAY_TO_24H: Record<string, string> = {
  '08:30 صباحاً': '08:30',
  '09:00 صباحاً': '09:00',
  '10:00 صباحاً': '10:00',
  '11:00 صباحاً': '11:00',
  '01:30 ظهراً':  '13:30',
  '02:00 ظهراً':  '14:00',
  '03:00 عصراً':  '15:00',
};

const MORNING_SLOTS = ['08:30 صباحاً', '09:00 صباحاً', '10:00 صباحاً', '11:00 صباحاً'];
const AFTERNOON_SLOTS = ['01:30 ظهراً', '02:00 ظهراً', '03:00 عصراً'];

// ─── إرسال الموعد عبر WhatsApp ───────────────────────
function openWhatsAppAppointment(data: {
  name: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}) {
  const name = cleanText(data.name);
  const phone = cleanText(data.phone);
  const email = cleanText(data.email);
  const company = cleanText(data.company);
  const service = cleanText(data.service);
  const notes = cleanText(data.notes);

  let text = `طلب حجز موعد جديد:
الاسم: ${name}
الخدمة: ${service}
التاريخ: ${data.date}
الوقت: ${data.time}
رقم الهاتف: \u200E${phone}\u200E`;

  if (email) text += `\nالبريد الإلكتروني: ${email}`;
  if (company) text += `\nالشركة/المؤسسة: ${company}`;
  if (notes) text += `\nملاحظات: ${notes}`;

  window.open(`https://api.whatsapp.com/send/?phone=213562296981&text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

// ─── إرسال الاستفسار عبر WhatsApp ───────────────
function openWhatsAppInquiry(data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}) {
  const name = cleanText(data.name);
  const phone = cleanText(data.phone);
  const email = cleanText(data.email);
  const service = cleanText(data.service);
  const message = cleanText(data.message);

  let text = `استفسار عام:
الاسم: ${name}
الخدمة: ${service}
رقم الهاتف: \u200E${phone}\u200E`;

  if (email) text += `\nالبريد الإلكتروني: ${email}`;
  text += `\nالرسالة: ${message}`;

  window.open(`https://api.whatsapp.com/send/?phone=213562296981&text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

// ─── دالة تسجيل الأخطاء الآمنة ──────────────────────────
function logError(message: string, error?: any) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(message, error);
  } else {
    // هنا يمكن إضافة خدمة مثل Sentry
    // Sentry.captureException(error);
  }
}

// ─── المكوّن الرئيسي ──────────────────────────────────────────
const Contact = () => {
  const [activeTab, setActiveTab] = useState<'appointment' | 'inquiry'>('appointment');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#appointment' || hash === '#contact') setActiveTab('appointment');
      else if (hash === '#inquiry') setActiveTab('inquiry');
    };
    window.addEventListener('hashchange', handleHashChange);
    // فحص الـ hash عند التحميل الأول أيضاً
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // ─── دالة تنسيق رقم الهاتف تلقائياً ────────────────────────
  const formatPhoneNumber = (value: string) => {
    // إزالة كل ما ليس رقماً أو رمزاً مسموحاً (مثل + أو فراغات)
    return value.replace(/[^\d\s\+\-\(\)]/g, '');
  };

  // ── حالة نموذج الاستفسار ──
  const [inquiryData, setInquiryData] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  });
  const [isInquirySubmitted, setIsInquirySubmitted] = useState(false);
  const [inquiryAgreed, setInquiryAgreed] = useState(false);
  const retryButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isInquirySubmitted) retryButtonRef.current?.focus();
  }, [isInquirySubmitted]);

  // ── حالة نموذج الموعد ──
  const [appointmentData, setAppointmentData] = useState({
    name: '', phone: '', email: '', service: '',
    date: '', time: '', notes: '', company: '',
    honeypot: '', // حقل الـ honeypot
  });
  const [isAppointmentSubmitted, setIsAppointmentSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [appointmentAgreed, setAppointmentAgreed] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAppointmentSubmitted) {
      setCountdown(10);
      timer = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) {
            setIsAppointmentSubmitted(false);
            setAppointmentData({ name: '', phone: '', email: '', service: '', date: '', time: '', notes: '', company: '', honeypot: '' });
            clearInterval(timer);
          }
          return c - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isAppointmentSubmitted]);

  const services = [
    'عقود البيع والشراء العقارية',
    'عقود الإيجار والتأجير',
    'الوكالات والتفويضات',
    'عقود الزواج والمستندات العائلية',
    'تأسيس الشركات والمؤسسات',
    'الرهن والتأمينات',
    'التصريحات والمصادقات',
    'استشارة قانونية',
    'خدمات أخرى',
  ];

  const isWeekend = (dateString: string) => {
    const day = new Date(dateString + 'T12:00:00').getDay();
    return day === 5 || day === 6;
  };

  const maxDateString = useMemo(() => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 90);
    return maxDate.toISOString().split('T')[0];
  }, []);

  const isPastTime = (slot: string, selectedDate: string) => {
    if (!selectedDate) return false;
    // We compare with current local timezone split
    const tzOffset = (new Date()).getTimezoneOffset() * 60000; 
    const localISOTime = (new Date(Date.now() - tzOffset)).toISOString().split('T')[0];
    if (selectedDate !== localISOTime) return false;
    
    const time24h = TIME_DISPLAY_TO_24H[slot] ?? slot;
    if (!time24h) return false;
    
    const [hours, minutes] = time24h.split(':').map(Number);
    const currentTime = new Date();
    return currentTime.getHours() > hours || (currentTime.getHours() === hours && currentTime.getMinutes() > minutes);
  };

  // ── إرسال الموعد ──
  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // التحقق من رقم الهاتف
    const phoneDigits = appointmentData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 8) {
      setSubmitError('يرجى إدخال رقم هاتف صحيح');
      return;
    }

    // التحقق من الـ honeypot
    if (appointmentData.honeypot) {
      return; // تجاهل الطلب إذا تم ملء الحقل
    }

    if (!appointmentAgreed) {
      setSubmitError('يرجى الموافقة على الشروط والأحكام وسياسة الخصوصية للمتابعة');
      return;
    }

    if (!appointmentData.time) {
      setSubmitError('يرجى اختيار وقت الموعد');
      return;
    }
    if (isWeekend(appointmentData.date)) {
      setSubmitError('عذراً، المكتب مغلق في عطلة نهاية الأسبوع (الجمعة والسبت). يرجى اختيار يوم آخر.');
      return;
    }

    const selectedDate = new Date(appointmentData.date + 'T12:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setSubmitError('لا يمكن حجز موعد في تاريخ مضى. يرجى اختيار تاريخ مستقبلي.');
      return;
    }

    if (isPastTime(appointmentData.time, appointmentData.date)) {
      setSubmitError('لا يمكن حجز موعد في وقت مضى اليوم. يرجى اختيار وقت آخر.');
      return;
    }

    setIsSubmitting(true);
    try {
      // التحقق من خوادم Next.js للـ Rate Limiting بناءً على IP ورقم الهاتف
      const rateLimitRes = await fetch('/api/rate-limit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneDigits }),
      });

      if (!rateLimitRes.ok) {
        const errorData = await rateLimitRes.json();
        setSubmitError(errorData.error || 'تم تجاوز الحد المسموح به. يرجى الانتظار ثم المحاولة.');
        setIsSubmitting(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 500)); // محاكاة تحميل بسيط
      openWhatsAppAppointment({ ...appointmentData });
      setIsAppointmentSubmitted(true);
      // التمرير إلى أعلى النموذج بعد الإرسال الناجح
      setTimeout(() => {
        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err: any) {
      logError('[Contact] Firestore error:', err);
      if (err instanceof Error && err.message) {
        setSubmitError(err.message);
      } else {
        setSubmitError('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مجدداً أو التواصل معنا عبر الهاتف.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── إرسال الاستفسار ──
  const [inquiryError, setInquiryError] = useState<string | null>(null);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryError(null);

    if (!inquiryAgreed) {
      setInquiryError('يرجى الموافقة على الشروط والأحكام وسياسة الخصوصية للمتابعة');
      return;
    }

    // التحقق من رقم الهاتف
    const phoneDigits = inquiryData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 8) {
      setInquiryError('يرجى إدخال رقم هاتف صحيح');
      return;
    }

    openWhatsAppInquiry(inquiryData);
    setIsInquirySubmitted(true);
  };

  return (
    <section id="contact" className="py-12 bg-gray-50 relative">
      <div id="appointment" className="absolute -top-24" />
      <div id="inquiry" className="absolute -top-24" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            احجز موعدك الآن
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            تواصل معنا لحجز موعد أو الاستفسار عن خدماتنا. نحن هنا لمساعدتك.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">العنوان</h3>
                  <p className="text-gray-600 text-sm">
                    <a
                      href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 transition-colors"
                    >
                      حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768
                      <br />
                      العقيد لطفي، وهران
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">الهاتف</h3>
                  <div className="text-gray-600 text-sm space-y-2" dir="ltr">
                    <div className="flex items-center gap-2">
                      <a href="tel:+213562296981" className="hover:text-emerald-600 transition-colors font-medium">
                        +213 562 29 69 81
                      </a>
                      <button onClick={() => navigator.clipboard.writeText('+213562296981')} aria-label="نسخ رقم الهاتف" className="text-gray-400 hover:text-emerald-600 transition-colors">
                        <Copy className="w-4 h-4" />
                      </button>
                      <span className="text-gray-400 text-xs ml-2" dir="rtl">(الخاص بالمكتب)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="tel:+213558440001" className="hover:text-emerald-600 transition-colors font-medium">
                        +213 558 44 00 01
                      </a>
                      <button onClick={() => navigator.clipboard.writeText('+213558440001')} aria-label="نسخ رقم الهاتف" className="text-gray-400 hover:text-emerald-600 transition-colors">
                        <Copy className="w-4 h-4" />
                      </button>
                      <span className="text-gray-400 text-xs ml-2" dir="rtl">(للدعم خارج أوقات العمل فقط)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">البريد الإلكتروني</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="mailto:maitrelattabmohamed@gmail.com" className="hover:text-emerald-600 transition-colors">
                      maitrelattabmohamed@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">أوقات العمل</h3>
                  <p className="text-gray-600 text-sm">
                    {WORKING_HOURS.days}: {WORKING_HOURS.morning}
                    <br />
                    و {WORKING_HOURS.afternoon}
                    <br />
                    {WORKING_HOURS.closed}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="booking-form" className="lg:col-span-2 scroll-mt-24">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b border-gray-100 pb-4">
                <button
                  onClick={() => setActiveTab('appointment')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold transition-colors ${
                    activeTab === 'appointment'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  حجز موعد
                </button>
                <button
                  onClick={() => setActiveTab('inquiry')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold transition-colors ${
                    activeTab === 'inquiry'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  استفسار عام
                </button>
              </div>

              {/* ──────────── تبويب حجز الموعد ──────────── */}
              <noscript>
                <div className="p-6 bg-red-50 text-red-800 rounded-xl border border-red-200 mb-6">
                  <h3 className="font-bold mb-2">تنبيه: النموذج لا يعمل بدون JavaScript</h3>
                  <p>يرجى التواصل معنا مباشرة عبر الهاتف: <a href="tel:+213562296981" className="underline font-bold">+213 562 29 69 81</a> أو عبر البريد الإلكتروني: <a href="mailto:maitrelattabmohamed@gmail.com" className="underline font-bold">maitrelattabmohamed@gmail.com</a></p>
                </div>
              </noscript>
              {activeTab === 'appointment' ? (
                isAppointmentSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">تم استلام طلب الحجز!</h3>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 max-w-md mx-auto">
                      <p className="text-amber-800 text-sm font-medium">
                        ملاحظة: موعدك حالياً &quot;قيد التأكيد&quot;. سيتواصل معك فريق المكتب عبر الهاتف لتأكيد الموعد النهائي أو اقتراح وقت بديل في حال وجود تعارض.
                      </p>
                    </div>
                    <p className="text-gray-600 mb-2">
                       سيتم إعادة تحميل النموذج في غضون {countdown} ثانية.
                    </p>
                    <p className="text-gray-500 text-sm">
                      تم تسجيل طلبك بنجاح في نظام المكتب.
                    </p>
                    <button
                      onClick={() => {
                        setIsAppointmentSubmitted(false);
                        setAppointmentData({ name: '', phone: '', email: '', service: '', date: '', time: '', notes: '', company: '', honeypot: '' });
                      }}
                      className="mt-8 text-emerald-600 hover:text-emerald-700 font-medium text-sm underline"
                    >
                      تقديم طلب آخر
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="inline w-4 h-4 ml-2" />
                          الاسم الكامل *
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={appointmentData.name}
                          onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="inline w-4 h-4 ml-2" />
                          رقم الهاتف *
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="^\+?[0-9\s\-\(\)]{8,}$"
                          title="أدخل رقم هاتف صحيح"
                          value={appointmentData.phone}
                          onChange={(e) => setAppointmentData({ ...appointmentData, phone: formatPhoneNumber(e.target.value) })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="رقم الهاتف (مثل: 0555555555 أو +123...)"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="inline w-4 h-4 ml-2" />
                          البريد الإلكتروني (اختياري)
                        </label>
                        <input
                          type="email"
                          maxLength={100}
                          value={appointmentData.email}
                          onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="example@email.com"
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <label htmlFor="appointment_company" className="block text-sm font-medium text-gray-700 mb-2">
                          <Building className="inline w-4 h-4 ml-2" />
                          الشركة/المؤسسة (اختياري)
                        </label>
                        <input
                          id="appointment_company"
                          type="text"
                          maxLength={100}
                          value={appointmentData.company}
                          onChange={(e) => setAppointmentData({ ...appointmentData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="اسم الشركة"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="appointment_service" className="block text-sm font-medium text-gray-700 mb-2">
                          نوع الخدمة المطلوبة *
                        </label>
                        <select
                          id="appointment_service"
                          required
                          value={appointmentData.service}
                          onChange={(e) => setAppointmentData({ ...appointmentData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                        >
                          <option value="">اختر الخدمة</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="appointment_date" className="block text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="inline w-4 h-4 ml-2" />
                          التاريخ المفضل *
                        </label>
                        <input
                          id="appointment_date"
                          type="date"
                          required
                          value={appointmentData.date}
                          onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          max={maxDateString}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* حقل الـ honeypot المخفي */}
                    <input
                      type="text"
                      name="honeypot"
                      value={appointmentData.honeypot}
                      onChange={(e) => setAppointmentData({ ...appointmentData, honeypot: e.target.value })}
                      style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                      aria-hidden="true"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline w-4 h-4 ml-2" />
                        الوقت المفضل *
                        <span className="text-xs text-gray-500 mr-2 font-normal">(المواعيد تخضع للتأكيد الهاتفي)</span>
                      </label>
                      
                      <div className="mb-3">
                        <span className="text-xs font-bold text-gray-500 mb-2 block">الفترة الصباحية</span>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                          {MORNING_SLOTS.map((slot, index) => (
                            <button
                              key={`morning-${index}`}
                              type="button"
                              onClick={() => setAppointmentData({ ...appointmentData, time: slot })}
                              disabled={isPastTime(slot, appointmentData.date)}
                              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                                appointmentData.time === slot
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : isPastTime(slot, appointmentData.date)
                                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-500'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-gray-500 mb-2 block">الفترة المسائية</span>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                          {AFTERNOON_SLOTS.map((slot, index) => (
                            <button
                              key={`afternoon-${index}`}
                              type="button"
                              onClick={() => setAppointmentData({ ...appointmentData, time: slot })}
                              disabled={isPastTime(slot, appointmentData.date)}
                              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                                appointmentData.time === slot
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : isPastTime(slot, appointmentData.date)
                                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-500'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FileText className="inline w-4 h-4 ml-2" />
                        ملاحظات إضافية
                      </label>
                      <textarea
                        rows={3}
                        maxLength={1000}
                        value={appointmentData.notes}
                        onChange={(e) => setAppointmentData({ ...appointmentData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                        placeholder="أي معلومات إضافية تريد إضافتها..."
                      />
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex items-center h-5">
                        <input
                          id="terms-appointment"
                          name="terms-appointment"
                          type="checkbox"
                          required
                          checked={appointmentAgreed}
                          onChange={(e) => setAppointmentAgreed(e.target.checked)}
                          className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer"
                        />
                      </div>
                      <div className="text-sm">
                        <label htmlFor="terms-appointment" className="font-medium text-gray-700 cursor-pointer">
                          أوافق على <a href="/terms-privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">الشروط والأحكام وسياسة الخصوصية</a> الخاصة بالمكتب.
                        </label>
                        <p className="text-gray-500 text-xs mt-1">بموجب هذا، أنت توافق على معالجة بياناتك الشخصية لغرض حجز الموعد.</p>
                      </div>
                    </div>

{/* رسالة الخطأ مع تأمين إمكانية الوصول */}
                    <div role="alert" aria-live="assertive" aria-atomic="true">
                      {submitError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                          {submitError}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          تأكيد حجز الموعد
                        </>
                      )}
                    </button>
                  </form>
                )
              ) : (
                /* ──────────── تبويب الاستفسار (WhatsApp) ──────────── */
                isInquirySubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">جاري فتح WhatsApp!</h3>
                    <p className="text-gray-600 mb-6">
                      إذا لم يُفتح تطبيق WhatsApp أو النافذة تلقائيًا، يمكنك النقر على الزر أدناه لإعادة المحاولة، أو تقديم استفسار جديد.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        ref={retryButtonRef}
                        onClick={() => openWhatsAppInquiry(inquiryData)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        إعادة فتح WhatsApp
                      </button>
                      <button
                        onClick={() => {
                          setIsInquirySubmitted(false);
                          setInquiryData({ name: '', phone: '', email: '', service: '', message: '' });
                          setInquiryAgreed(false);
                        }}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-colors text-sm"
                      >
                        إرسال استفسار جديد
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="inline w-4 h-4 ml-2" />
                          الاسم الكامل *
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={inquiryData.name}
                          onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="inline w-4 h-4 ml-2" />
                          رقم الهاتف *
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="^\+?[0-9\s\-\(\)]{8,}$"
                          title="أدخل رقم هاتف صحيح"
                          value={inquiryData.phone}
                          onChange={(e) => setInquiryData({ ...inquiryData, phone: formatPhoneNumber(e.target.value) })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="رقم الهاتف (مثل: 0555555555 أو +123...)"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="inline w-4 h-4 ml-2" />
                          البريد الإلكتروني (اختياري)
                        </label>
                        <input
                          type="email"
                          maxLength={100}
                          value={inquiryData.email}
                          onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                          placeholder="example@email.com"
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FileText className="inline w-4 h-4 ml-2" />
                          الخدمة المتعلقة بالاستفسار *
                        </label>
                        <select
                          required
                          value={inquiryData.service}
                          onChange={(e) => setInquiryData({ ...inquiryData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                        >
                          <option value="">اختر الخدمة</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        رسالتك أو استفسارك *
                      </label>
                      <textarea
                        required
                        rows={5}
                        maxLength={1000}
                        value={inquiryData.message}
                        onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                        placeholder="اكتب رسالتك أو استفسارك هنا..."
                      />
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex items-center h-5">
                        <input
                          id="terms-inquiry"
                          name="terms-inquiry"
                          type="checkbox"
                          required
                          checked={inquiryAgreed}
                          onChange={(e) => setInquiryAgreed(e.target.checked)}
                          className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer"
                        />
                      </div>
                      <div className="text-sm">
                        <label htmlFor="terms-inquiry" className="font-medium text-gray-700 cursor-pointer">
                          أوافق على <a href="/terms-privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">الشروط والأحكام وسياسة الخصوصية</a> الخاصة بالمكتب.
                        </label>
                        <p className="text-gray-500 text-xs mt-1">بموجب هذا، أنت توافق على معالجة بياناتك الشخصية لغرض التواصل معك.</p>
                      </div>
                    </div>

                    {/* رسالة الخطأ مع تأمين إمكانية الوصول */}
                    <div role="alert" aria-live="assertive" aria-atomic="true">
                      {inquiryError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                          {inquiryError}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      إرسال الاستفسار عبر WhatsApp
                    </button>
                  </form>
                )
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-gray-800">موقع المكتب</h3>
            <a
              href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-5 py-2.5 rounded-xl font-bold transition-colors w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              الفتح في تطبيق الخرائط
            </a>
          </div>
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.938810222046!2d-0.5931358!3d35.7277124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e63c19cea6045%3A0x8f3a2767975898bd!2sNOTAIRE%20LATTAB%20MOHAMED!5e0!3m2!1sar!2sdz!4v1712698680000!5m2!1sar!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مكتب الموثق لعطب محمد"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
