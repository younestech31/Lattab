'use client';
import { useState, useRef, useEffect } from 'react';
import { User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import { InquiryFormData, openWhatsAppInquiry } from './types';

export default function InquiryForm({ services }: { services: string[] }) {
  const [inquiryData, setInquiryData] = useState<InquiryFormData>({
    name: '', phone: '', email: '', service: '', message: '',
  });
  const [isInquirySubmitted, setIsInquirySubmitted] = useState(false);
  const [inquiryAgreed, setInquiryAgreed] = useState(false);
  const [inquiryError, setInquiryError] = useState<string | null>(null);
  const retryButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isInquirySubmitted) retryButtonRef.current?.focus();
  }, [isInquirySubmitted]);

  const formatPhoneNumber = (value: string) => {
    return value.replace(/[^\d\s\+\-\(\)]/g, '');
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryError(null);

    if (!inquiryAgreed) {
      setInquiryError('يرجى الموافقة على الشروط والأحكام وسياسة الخصوصية للمتابعة');
      return;
    }

    const phoneDigits = inquiryData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 8) {
      setInquiryError('يرجى إدخال رقم هاتف صحيح');
      return;
    }

    openWhatsAppInquiry(inquiryData);
    setIsInquirySubmitted(true);
  };

  if (isInquirySubmitted) {
    return (
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
    );
  }

  return (
    <form onSubmit={handleInquirySubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inq-name" className="block text-sm font-medium text-gray-700 mb-2"><User className="inline w-4 h-4 ml-2" />الاسم الكامل *</label>
          <input
            id="inq-name"
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
          <label htmlFor="inq-phone" className="block text-sm font-medium text-gray-700 mb-2"><Phone className="inline w-4 h-4 ml-2" />رقم الهاتف *</label>
          <input
            id="inq-phone"
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
          <label htmlFor="inq-email" className="block text-sm font-medium text-gray-700 mb-2"><Mail className="inline w-4 h-4 ml-2" />البريد الإلكتروني (اختياري)</label>
          <input
            id="inq-email"
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
          <label className="block text-sm font-medium text-gray-700 mb-2"><FileText className="inline w-4 h-4 ml-2" />الخدمة المتعلقة بالاستفسار *</label>
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
        <label htmlFor="inq-message" className="block text-sm font-medium text-gray-700 mb-2">رسالتك أو استفسارك *</label>
        <textarea
          id="inq-message"
          required
          rows={5}
          maxLength={1000}
          value={inquiryData.message}
          onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
          placeholder="اكتب رسالتك أو استفسارك هنا..."
        />
        <div className="flex justify-end mt-1">
          <span className="text-xs text-gray-400">{inquiryData.message.length} / 1000</span>
        </div>
      </div>

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
        </div>
      </div>

      {inquiryError && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{inquiryError}</div>
      )}

      <button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
      >
        إرسال الاستفسار
      </button>
    </form>
  );
}
