'use client';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calendar, Clock, User, Phone, Mail, FileText, Building, CheckCircle, Loader2 } from 'lucide-react';
import { AppointmentFormData, TIME_DISPLAY_TO_24H, MORNING_SLOTS, AFTERNOON_SLOTS, getRequiredDocuments, openWhatsAppAppointment } from './types';
import { validateAppointment } from '@/app/actions/appointment';

export default function AppointmentForm({ services }: { services: string[] }) {
  const searchParams = useSearchParams();
  const [appointmentData, setAppointmentData] = useState<AppointmentFormData>({
    name: '', phone: '', email: '', service: '',
    date: '', time: '', notes: '', company: '',
    honeypot: '',
  });
  
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && services.includes(decodeURIComponent(serviceParam))) {
      setAppointmentData(prev => ({ ...prev, service: decodeURIComponent(serviceParam) }));
    }
  }, [searchParams, services]);

  const [isAppointmentSubmitted, setIsAppointmentSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [appointmentAgreed, setAppointmentAgreed] = useState(false);

  const maxDateString = useMemo(() => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 90);
    return maxDate.toISOString().split('T')[0];
  }, []);

  const isPastTime = (slot: string, selectedDate: string) => {
    if (!selectedDate) return false;
    const now = new Date();
    const localISOTime = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    if (selectedDate !== localISOTime) return false;
    
    const time24h = TIME_DISPLAY_TO_24H[slot] ?? slot;
    if (!time24h) return false;
    
    const [hours, minutes] = time24h.split(':').map(Number);
    const currentTime = new Date();
    return currentTime.getHours() > hours || (currentTime.getHours() === hours && currentTime.getMinutes() > minutes);
  };

  const formatPhoneNumber = (value: string) => {
    return value.replace(/[^\d\s\+\-\(\)]/g, '');
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!appointmentAgreed) {
      setSubmitError('يرجى الموافقة على الشروط والأحكام وسياسة الخصوصية للمتابعة');
      return;
    }

    setIsSubmitting(true);
    try {
      const validation = await validateAppointment(appointmentData);
      if (!validation.success) {
        const firstError = Object.values(validation.errors)[0]?.[0] ?? 'خطأ في بيانات النموذج';
        setSubmitError(firstError);
        setIsSubmitting(false);
        return;
      }

      const phoneDigits = appointmentData.phone.replace(/\D/g, '');
      const rateLimitRes = await fetch('/api/rate-limit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phoneDigits }),
      });

      if (!rateLimitRes.ok) {
        const errorData = await rateLimitRes.json();
        setSubmitError(errorData.error || 'تم تجاوز الحد المسموح به. يرجى الانتظار ثم المحاولة.');
        setIsSubmitting(false);
        return;
      }

      openWhatsAppAppointment(validation.data);
      setIsAppointmentSubmitted(true);
      setTimeout(() => {
        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch {
      setSubmitError('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مجدداً أو التواصل معنا عبر الهاتف.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isAppointmentSubmitted) {
    return (
      <div className="text-center py-12 print:py-0">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 no-print">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2 no-print">تم استلام طلب الحجز!</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 max-w-md mx-auto no-print">
          <p className="text-amber-800 text-sm font-medium">
            ملاحظة: موعدك حالياً &quot;قيد التأكيد&quot;. سيتواصل معك فريق المكتب عبر الهاتف لتأكيد الموعد النهائي أو اقتراح وقت بديل في حال وجود تعارض.
          </p>
        </div>
        <p className="text-gray-500 text-sm no-print mb-8">تم تسجيل طلبك بنجاح في نظام المكتب.</p>
        
        {/* Receipt Card */}
        <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 text-right max-w-sm mx-auto mb-6 shadow-sm relative no-print:shadow-md receipt-card print:border-black print:border">
          <div className="flex justify-between items-start mb-4 border-b border-gray-100 pb-4 print:border-black">
            <div>
              <h4 className="font-bold text-gray-900 text-lg">مكتب الأستاذ لعطب محمد</h4>
              <p className="text-gray-500 text-sm">موثق معتمد بوهران</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <p><span className="font-bold ms-2">الاسم:</span> {appointmentData.name}</p>
            <p><span className="font-bold ms-2">الخدمة:</span> {appointmentData.service}</p>
            <p><span className="font-bold ms-2">التاريخ:</span> <span dir="ltr">{appointmentData.date}</span></p>
            <p><span className="font-bold ms-2">الوقت:</span> {appointmentData.time}</p>
            <p><span className="font-bold ms-2">الهاتف:</span> <span dir="ltr">{appointmentData.phone}</span></p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 print:border-black flex justify-between items-center">
             <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold border border-amber-200 print:border-black">
               في انتظار التأكيد  / En attente
             </span>
             <span className="text-gray-500 text-xs font-medium" dir="ltr">+213 562 29 69 81</span>
          </div>
        </div>
        
        <button
          onClick={() => window.print()}
          className="mb-4 w-full block bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition-colors no-print"
        >
          طباعة الإيصال
        </button>

        <button
          onClick={() => {
            setIsAppointmentSubmitted(false);
            setAppointmentData({ name: '', phone: '', email: '', service: '', date: '', time: '', notes: '', company: '', honeypot: '' });
          }}
          className="text-emerald-600 hover:text-emerald-700 font-medium text-sm underline no-print"
        >
          تقديم طلب آخر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleAppointmentSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="appt-name" className="block text-sm font-medium text-gray-700 mb-2"><User className="inline w-4 h-4 ms-2" />الاسم الكامل *</label>
          <input
            id="appt-name"
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
          <label htmlFor="appt-phone" className="block text-sm font-medium text-gray-700 mb-2 text-start"><Phone className="inline w-4 h-4 ms-2" />رقم الهاتف *</label>
          <input
            id="appt-phone"
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
          <label htmlFor="appt-email" className="block text-sm font-medium text-gray-700 mb-2"><Mail className="inline w-4 h-4 ms-2" />البريد الإلكتروني (اختياري)</label>
          <input
            id="appt-email"
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
          <label htmlFor="appointment_company" className="block text-sm font-medium text-gray-700 mb-2"><Building className="inline w-4 h-4 ms-2" />الشركة/المؤسسة (اختياري)</label>
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
          <label htmlFor="appointment_service" className="block text-sm font-medium text-gray-700 mb-2">نوع الخدمة المطلوبة *</label>
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
          {(appointmentData.service && getRequiredDocuments(appointmentData.service)) && (
            <div className="mt-3 bg-blue-50 text-blue-800 p-3 rounded-lg border border-blue-100 text-sm animate-in fade-in slide-in-from-top-2">
              <p className="font-bold mb-1">الوثائق الأساسية المطلوبة لهذه الخدمة:</p>
              <ul className="list-disc list-inside space-y-1 text-blue-700 mr-2">
                {getRequiredDocuments(appointmentData.service)?.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="appointment_date" className="block text-sm font-medium text-gray-700 mb-2"><Calendar className="inline w-4 h-4 ms-2" />التاريخ المفضل *</label>
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
          <p className="text-xs text-gray-500 mt-2">ملاحظة: المواعيد خلال الأعياد الدينية المتغيرة خاضعة للتأكيد لاحقاً.</p>
        </div>
      </div>

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
        <label className="block text-sm font-medium text-gray-700 mb-2"><Clock className="inline w-4 h-4 ms-2" />الوقت المفضل *</label>
        
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
        <label htmlFor="appt-notes" className="block text-sm font-medium text-gray-700 mb-2"><FileText className="inline w-4 h-4 ms-2" />ملاحظات إضافية</label>
        <textarea
          id="appt-notes"
          rows={3}
          maxLength={1000}
          value={appointmentData.notes}
          onChange={(e) => setAppointmentData({ ...appointmentData, notes: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
          placeholder="أي معلومات إضافية تريد إضافتها..."
        />
        <div className="flex justify-end mt-1">
          <span className="text-xs text-gray-400">{(appointmentData.notes || '').length} / 1000</span>
        </div>
      </div>

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
        </div>
      </div>

      <div role="alert" aria-live="assertive" aria-atomic="true">
        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{submitError}</div>
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
  );
}
