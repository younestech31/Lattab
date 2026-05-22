'use client';
import { useState, useRef, useEffect, useActionState } from 'react';
import { User, Phone, FileText, CheckCircle } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { translations } from '@/lib/i18n/translations';
import { validateInquiry, InquiryState } from '@/app/actions/inquiry';

export default function InquiryForm({ services }: { services: readonly string[] }) {
  const { lang } = useLang();
  const t_form = translations[lang].contact.form;
  const isAr = lang === 'ar';

  const [inquiryAgreed, setInquiryAgreed] = useState(false);
  const retryButtonRef = useRef<HTMLButtonElement>(null);

  const formatPhoneNumber = (value: string) => {
    return value.replace(/[^\d\s\+\-\(\)]/g, '');
  };

  const initialState: InquiryState = {
    success: false,
    errors: {}
  };

  const [state, formAction, isPending] = useActionState(validateInquiry, initialState);

  useEffect(() => {
    if (state.success && state.data?.whatsappUrl) {
      const url = state.data.whatsappUrl;
      const timer = setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [state.success, state.data?.whatsappUrl]);

  useEffect(() => {
    if (state.success) retryButtonRef.current?.focus();
  }, [state.success]);

  if (state.success) {
    return (
      <div className="text-center py-12" role="alert" aria-live="assertive">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{t_form.success_inquiry_title}</h3>
        <p className="text-gray-600 mb-6">
          {t_form.success_inquiry_desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            ref={retryButtonRef}
            onClick={() => {
              if (state.data?.whatsappUrl) {
                window.open(state.data.whatsappUrl, '_blank', 'noopener,noreferrer');
              }
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 touch-manipulation"
          >
            {t_form.retry_whatsapp}
          </button>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-colors text-sm touch-manipulation"
          >
            {t_form.new_inquiry}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Honeypot field */}
      <div className="absolute opacity-0 -z-10" aria-hidden="true">
        <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="lang" value={lang} />
      
      {/* RTL-safe: uses logical properties */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inq-name" className="block text-sm font-medium text-gray-700 mb-2">
            <User className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.name}
          </label>
          <input
            id="inq-name"
            name="name"
            type="text"
            required
            maxLength={100}
            className={`w-full px-4 py-3 rounded-xl border ${state.errors?.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-200'} focus:ring-2 outline-none transition-all`}
            placeholder={t_form.name_placeholder}
          />
          {state.errors?.name && (
            <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="inq-phone" className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.phone}
          </label>
          <input
            id="inq-phone"
            name="phone"
            type="tel"
            required
            pattern="^\+?[0-9\s\-\(\)]{8,}$"
            title={t_form.phone_error}
            onChange={(e) => e.target.value = formatPhoneNumber(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border ${state.errors?.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-200'} focus:ring-2 outline-none transition-all`}
            placeholder={t_form.phone_placeholder}
            dir="ltr"
          />
          {state.errors?.phone && (
            <p className="mt-1 text-sm text-red-600">{state.errors.phone[0]}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        <div>
          <label htmlFor="inq-service" className="block text-sm font-medium text-gray-700 mb-2">
            <FileText className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.service}
          </label>
          <select
            id="inq-service"
            name="service"
            required
            className={`w-full px-4 py-3 rounded-xl border ${state.errors?.service ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-200'} focus:ring-2 outline-none transition-all bg-white`}
          >
            <option value="">{t_form.service_select}</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          {state.errors?.service && (
            <p className="mt-1 text-sm text-red-600">{state.errors.service[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="inq-message" className="block text-sm font-medium text-gray-700 mb-2">{lang === 'ar' ? 'رسالتك أو استفسارك *' : 'Votre message ou demande *'}</label>
        <textarea
          id="inq-message"
          name="message"
          required
          rows={5}
          maxLength={1000}
          className={`w-full px-4 py-3 rounded-xl border ${state.errors?.message ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-200'} focus:ring-2 outline-none transition-all resize-none`}
          placeholder={lang === 'ar' ? 'اكتب رسالتك أو استفسارك هنا...' : 'Écrivez votre message ou demande ici...'}
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>
        )}
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
        <div className="text-sm text-start">
          <label htmlFor="terms-inquiry" className="font-medium text-gray-700 cursor-pointer">
            {t_form.terms.split(' ').map((word, i) => {
              if (['الشروط', 'والأحكام', 'وسياسة', 'الخصوصية', 'conditions', "d'utilisation", 'politique', 'confidentialité'].some(w => word.includes(w))) {
                return (
                  <span key={i} className="text-emerald-600 hover:underline font-bold">{word} </span>
                );
              }
              return word + ' ';
            })}
          </label>
          <a href={lang === 'fr' ? "/fr/terms-privacy" : "/terms-privacy"} target="_blank" rel="noopener noreferrer" className="sr-only">Terms and Privacy</a>
        </div>
      </div>

      {state.errors?.global && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm" role="alert">
          {state.errors.global[0]}
        </div>
      )}

      {!inquiryAgreed && isPending === false && (
        <div className="text-sm text-gray-500 mt-2 text-center" aria-live="polite">
          {lang === 'ar' ? 'يجب الموافقة على الشروط للمتابعة' : 'Vous devez accepter les conditions pour continuer'}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending || !inquiryAgreed}
        className={`w-full py-4 rounded-xl transition-colors flex items-center justify-center gap-2 touch-manipulation font-bold text-white
          ${isPending || !inquiryAgreed ? 'bg-gray-400 cursor-not-allowed opacity-70' : 'bg-emerald-600 hover:bg-emerald-700'}
        `}
      >
        {isPending ? t_form.loading : t_form.submit_inquiry}
      </button>
    </form>
  );
}
