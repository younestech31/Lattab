/**
 * @file AppointmentForm.tsx
 * @client Form interactive state management, Server Action hook (useActionState), and search params handling.
 */
'use client';

import { useState, useEffect, useActionState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { User, Phone, FileText, Building, CheckCircle, Loader2, AlertTriangle, Printer, ExternalLink } from 'lucide-react';
import { AdministrativeInquiryData } from './types';
import { validateAppointment, AppointmentState } from '@/app/actions/appointment';
import { useLang } from '@/lib/i18n';
import { translations } from '@/lib/i18n/translations';
import { buildInquiryWaUrl } from '@/lib/contact/channels';

export default function AppointmentForm({ services }: { services: readonly string[] }) {
  const { lang } = useLang();
  const t_form = translations[lang].contact.form;
  const isAr = lang === 'ar';

  const searchParams = useSearchParams();
  const initialState: AppointmentState = { success: false, errors: {} };
  const [state, formAction, isPending] = useActionState(validateAppointment, initialState);

  const [inquiryData, setInquiryData] = useState<AdministrativeInquiryData>({
    name: '',
    phone: '',
    service: '',
    notes: '',
    company: '',
    honeypot: '',
  });

  const [inquiryAgreed, setInquiryAgreed] = useState(false);
  const [isInquirySubmitted, setIsInquirySubmitted] = useState(false);
  const whatsappUrlRef = useRef<string | null>(null);


  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && services.includes(decodeURIComponent(serviceParam))) {
      setInquiryData((prev) => ({ ...prev, service: decodeURIComponent(serviceParam) }));
    }
  }, [searchParams, services]);

  useEffect(() => {
    if (state.success && !isInquirySubmitted) {
      setIsInquirySubmitted(true);
      const url = whatsappUrlRef.current || buildInquiryWaUrl(lang, inquiryData.service);
      window.location.href = url;
    }
  }, [state.success, isInquirySubmitted, inquiryData, lang]);

  const formatPhoneNumber = (value: string) => {
    return value.replace(/[^\d\s\+\-\(\)]/g, '');
  };

  const getRequiredDocsForService = (serviceName: string) => {
    const hints = translations[lang].contact.form.required_docs_hints as unknown as Record<string, string[]>;
    return hints[serviceName] || null;
  };

  const handleFormSubmit = (formData: FormData) => {
    const url = buildInquiryWaUrl(lang, inquiryData.service);
    whatsappUrlRef.current = url;
    formAction(formData);
  };

  if (state.success || isInquirySubmitted) {
    const waUrl = whatsappUrlRef.current || buildInquiryWaUrl(lang, inquiryData.service);
    return (
      <div role="status" aria-live="polite" className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t_form.success_appointment_title}</h3>
          <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
            {t_form.success_appointment_desc}
          <span className="block mt-2 text-sm">{lang === 'fr' ? 'Le bureau n’a pas encore reçu votre demande : vous devez envoyer le message dans WhatsApp.' : 'لم يتلق المكتب طلبك بعد؛ يجب إرسال الرسالة عبر واتساب لإتمام الإرسال.'}</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-emerald-100 max-w-md mx-auto text-start space-y-3 shadow-sm">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            {isAr ? 'ملخص الاستفسار الإداري' : 'Résumé de la demande'}
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{t_form.name}:</span>
            <span className="font-medium text-gray-900">{inquiryData.name}</span>
          </div>
          {inquiryData.company && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t_form.company}:</span>
              <span className="font-medium text-gray-900">{inquiryData.company}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{t_form.service}:</span>
            <span className="font-medium text-gray-900">{inquiryData.service}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 no-print">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-sm"
          >
            <ExternalLink className="w-5 h-5" />
            {isAr ? 'فتح المحادثة عبر واتساب مباشرة' : 'Ouvrir WhatsApp directement'}
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-semibold py-3 px-6 rounded-xl transition-colors shadow-sm"
          >
            <Printer className="w-5 h-5 text-gray-500" />
            {isAr ? 'طباعة الملخص' : 'Imprimer le résumé'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form action={handleFormSubmit} className="space-y-6" noValidate>
      {state.errors?._form && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 text-red-500" />
          <span>{state.errors._form[0]}</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inquiry-name" className="block text-sm font-medium text-gray-700 mb-2 text-start">
            <User className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.name}
          </label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            required
            maxLength={100}
            value={inquiryData.name}
            onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            placeholder={t_form.name_placeholder}
          />
          {state.errors?.name && <p className="text-red-500 text-xs mt-1 text-start">{state.errors.name[0]}</p>}
        </div>
        <div>
          <label htmlFor="inquiry-phone" className="block text-sm font-medium text-gray-700 mb-2 text-start">
            <Phone className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.phone}
          </label>
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            required
            pattern="^\+?[0-9\s\-\(\)]{8,}$"
            title={t_form.phone_error}
            value={inquiryData.phone}
            onChange={(e) => setInquiryData({ ...inquiryData, phone: formatPhoneNumber(e.target.value) })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            placeholder={t_form.phone_placeholder}
            dir="ltr"
          />
          {state.errors?.phone && <p className="text-red-500 text-xs mt-1 text-start">{state.errors.phone[0]}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        <div>
          <label htmlFor="inquiry_company" className="block text-sm font-medium text-gray-700 mb-2 text-start">
            <Building className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.company}
          </label>
          <input
            id="inquiry_company"
            name="company"
            type="text"
            maxLength={100}
            value={inquiryData.company}
            onChange={(e) => setInquiryData({ ...inquiryData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            placeholder={t_form.company_placeholder}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        <div>
          <label htmlFor="inquiry_service" className="block text-sm font-medium text-gray-700 mb-2 text-start">
            {t_form.service}
          </label>
          <select
            id="inquiry_service"
            name="service"
            required
            value={inquiryData.service}
            onChange={(e) => setInquiryData({ ...inquiryData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
          >
            <option value="">{t_form.service_select}</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          {state.errors?.service && <p className="text-red-500 text-xs mt-1 text-start">{state.errors.service[0]}</p>}
          {inquiryData.service && getRequiredDocsForService(inquiryData.service) && (
            <div className="mt-3 bg-blue-50 text-blue-800 p-3 rounded-lg border border-blue-100 text-sm animate-in fade-in slide-in-from-top-2 text-start">
              <p className="font-bold mb-1">{t_form.required_docs}</p>
              <ul className="list-disc list-inside space-y-1 text-blue-700 ms-2">
                {getRequiredDocsForService(inquiryData.service)?.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>

      <input
        type="text"
        name="honeypot"
        value={inquiryData.honeypot}
        onChange={(e) => setInquiryData({ ...inquiryData, honeypot: e.target.value })}
        style={{ display: 'none', position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="inq-notes" className="block text-sm font-medium text-gray-700 mb-2 text-start">
          <FileText className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
          {t_form.notes}
        </label>
        <textarea
          id="inq-notes"
          name="notes"
          rows={3}
          maxLength={1000}
          value={inquiryData.notes}
          onChange={(e) => setInquiryData({ ...inquiryData, notes: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
          placeholder={t_form.notes_placeholder}
        />
        <div className={`flex ${isAr ? 'justify-end' : 'justify-start'} mt-1`}>
          <span className="text-xs text-gray-400">{(inquiryData.notes || '').length} / 1000</span>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
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
              if (['الشروط', 'والأحكام', 'وسياسة', 'الخصوصية', 'conditions', "d'utilisation", 'politique', 'confidentialité'].some((w) => word.includes(w))) {
                return (
                  <span key={i} className="text-emerald-600 hover:underline">{word} </span>
                );
              }
              return word + ' ';
            })}
          </label>
          <a href={lang === 'fr' ? '/fr/terms-privacy' : '/terms-privacy'} target="_blank" rel="noopener noreferrer" className="sr-only">Terms and Privacy</a>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 touch-manipulation"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t_form.loading}
          </>
        ) : (
          <>
            <CheckCircle className="w-5 h-5" />
            {t_form.submit_appointment}
          </>
        )}
      </button>
    </form>
  );
}
