'use client';
import { useState, useEffect, useActionState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calendar, Clock, User, Phone, FileText, Building, CheckCircle, Loader2, AlertTriangle, Printer, ExternalLink } from 'lucide-react';
import { AppointmentFormData, TIME_DISPLAY_TO_24H, MORNING_SLOTS, AFTERNOON_SLOTS, generateWhatsAppAppointmentUrl } from './types';
import { validateAppointment, AppointmentState } from '@/app/actions/appointment';
import { useLang } from '@/lib/i18n';
import { translations } from '@/lib/i18n/translations';
import PhoneLink from '@/components/ui/PhoneLink';

export default function AppointmentForm({ services }: { services: readonly string[] }) {
  const { lang } = useLang();
  const t_form = translations[lang].contact.form;
  const isAr = lang === 'ar';
  
  const searchParams = useSearchParams();
  const initialState: AppointmentState = { success: false, errors: {} };
  const [state, formAction, isPending] = useActionState(validateAppointment, initialState);

  const [appointmentData, setAppointmentData] = useState<AppointmentFormData>({
    name: '', phone: '', service: '',
    date: '', time: '', notes: '', company: '',
    honeypot: '',
  });

  const [appointmentAgreed, setAppointmentAgreed] = useState(false);
  const [isAppointmentSubmitted, setIsAppointmentSubmitted] = useState(false);
  const [minDate, setMinDate] = useState<string>('');
  const [maxDate, setMaxDate] = useState<string>('');
  const whatsappUrlRef = useRef<string | null>(null);
  
  useEffect(() => {
    const now = new Date();
    setMinDate(now.toISOString().split('T')[0]);
    
    const max = new Date();
    max.setDate(max.getDate() + 90);
    setMaxDate(max.toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && services.includes(decodeURIComponent(serviceParam))) {
      setAppointmentData(prev => ({ ...prev, service: decodeURIComponent(serviceParam) }));
    }
  }, [searchParams, services]);

  // Handle successful submission and navigation
  useEffect(() => {
    if (state.success && !isAppointmentSubmitted) {
      setIsAppointmentSubmitted(true);
      const url = whatsappUrlRef.current || generateWhatsAppAppointmentUrl(appointmentData, lang);
      window.location.href = url;
    }
  }, [state.success, isAppointmentSubmitted, appointmentData, lang]);

  const getRequiredDocsForService = (service: string) => {
    const hints = t_form.required_docs_hints as Record<string, readonly string[]>;
    return hints[service] || null;
  };

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

  const localizeTimeSlot = (slot: string) => {
    if (lang === 'ar') return slot;
    return slot.replace('صباحاً', 'AM').replace('ظهراً', 'PM').replace('عصراً', 'PM');
  };

  const handleManualWhatsAppOpen = () => {
    const url = whatsappUrlRef.current || generateWhatsAppAppointmentUrl(appointmentData, lang);
    window.location.href = url;
  };

  if (state.success || isAppointmentSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100 text-center animate-fade-in" role="alert" aria-live="assertive">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 no-print">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t_form.success_appointment_title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {t_form.success_appointment_desc}
        </p>

        {/* Receipt display for printing */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-start border border-gray-100">
          <h4 className="font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">{isAr ? 'تفاصيل الموعد' : 'Détails du RDV'}</h4>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t_form.name}:</span>
              <span className="font-medium text-gray-900">{appointmentData.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t_form.service}:</span>
              <span className="font-medium text-gray-900">{appointmentData.service}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t_form.date} & {t_form.time}:</span>
              <span className="font-medium text-gray-900">{appointmentData.date} - {appointmentData.time}</span>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3 no-print">
             <button 
              onClick={() => window.print()}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 rounded-xl transition-all"
            >
              <Printer className="w-4 h-4" />
              {t_form.print}
            </button>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 no-print">
          <button 
            onClick={handleManualWhatsAppOpen}
            className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-emerald-200 touch-manipulation"
          >
            <ExternalLink className="w-5 h-5" />
            {t_form.fallback_whatsapp}
          </button>

          <div className="mt-2 p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm">
            <p className="text-blue-800 font-medium mb-2">
              {t_form.fallback_call}
            </p>
            <PhoneLink type="office" className="text-lg font-bold text-blue-900 underline block" />
          </div>

          <button
            onClick={() => window.location.reload()}
            className="text-emerald-600 hover:text-emerald-700 font-medium text-sm underline mt-4 touch-manipulation"
          >
            {t_form.another_request}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form 
      action={async (formData) => {
        const url = generateWhatsAppAppointmentUrl(appointmentData, lang);
        whatsappUrlRef.current = url;
        await formAction(formData);
      }}
      className="space-y-6" 
      id="booking-form" 
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {Object.keys(state.errors).length > 0 && (
        <div className="bg-red-50 border-s-4 border-red-500 p-4 mb-6 animate-fade-in" role="alert" aria-live="assertive">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <div className="text-red-700 font-medium text-start">
              <p>{t_form.error_title}</p>
              <PhoneLink type="office" className="font-bold underline block mt-1" />
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="appt-name" className="block text-sm font-medium text-gray-700 mb-2">
            <User className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.name}
          </label>
          <input
            id="appt-name"
            name="name"
            type="text"
            required
            maxLength={100}
            value={appointmentData.name}
            onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            placeholder={t_form.name_placeholder}
          />
        </div>
        <div>
          <label htmlFor="appt-phone" className="block text-sm font-medium text-gray-700 mb-2 text-start">
            <Phone className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.phone}
          </label>
          <input
            id="appt-phone"
            name="phone"
            type="tel"
            required
            pattern="^\+?[0-9\s\-\(\)]{8,}$"
            title={t_form.phone_error}
            value={appointmentData.phone}
            onChange={(e) => setAppointmentData({ ...appointmentData, phone: formatPhoneNumber(e.target.value) })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            placeholder={t_form.phone_placeholder}
            dir="ltr"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-1 gap-6">
        <div>
          <label htmlFor="appointment_company" className="block text-sm font-medium text-gray-700 mb-2">
            <Building className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.company}
          </label>
          <input
            id="appointment_company"
            name="company"
            type="text"
            maxLength={100}
            value={appointmentData.company}
            onChange={(e) => setAppointmentData({ ...appointmentData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            placeholder={t_form.company_placeholder}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="appointment_service" className="block text-sm font-medium text-gray-700 mb-2">
            {t_form.service}
          </label>
          <select
            id="appointment_service"
            name="service"
            required
            value={appointmentData.service}
            onChange={(e) => setAppointmentData({ ...appointmentData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
          >
            <option value="">{t_form.service_select}</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          {(appointmentData.service && getRequiredDocsForService(appointmentData.service)) && (
            <div className={`mt-3 bg-blue-50 text-blue-800 p-3 rounded-lg border border-blue-100 text-sm animate-in fade-in slide-in-from-top-2 text-start`}>
              <p className="font-bold mb-1">{t_form.required_docs}</p>
              <ul className="list-disc list-inside space-y-1 text-blue-700 ms-2">
                {getRequiredDocsForService(appointmentData.service)?.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="appointment_date" className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.date}
          </label>
          <input
            id="appointment_date"
            name="date"
            type="date"
            required
            value={appointmentData.date}
            onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
            min={minDate}
            max={maxDate}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          />
          <p className="text-xs text-gray-500 mt-2 text-start">{t_form.date_note}</p>
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

      <input type="hidden" name="time" value={appointmentData.time} required />

      <div className="text-start">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Clock className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
          {t_form.time}
        </label>
        
        <div className="mb-3">
          <span className="text-xs font-bold text-gray-500 mb-2 block">{t_form.time_morning}</span>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {MORNING_SLOTS.map((slot, index) => (
              <button
                key={`morning-${index}`}
                type="button"
                onClick={() => setAppointmentData({ ...appointmentData, time: slot })}
                disabled={isPastTime(slot, appointmentData.date)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors touch-manipulation ${
                  appointmentData.time === slot
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : isPastTime(slot, appointmentData.date)
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-500'
                }`}
              >
                {localizeTimeSlot(slot)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-bold text-gray-500 mb-2 block">{t_form.time_afternoon}</span>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {AFTERNOON_SLOTS.map((slot, index) => (
              <button
                key={`afternoon-${index}`}
                type="button"
                onClick={() => setAppointmentData({ ...appointmentData, time: slot })}
                disabled={isPastTime(slot, appointmentData.date)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors touch-manipulation ${
                  appointmentData.time === slot
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : isPastTime(slot, appointmentData.date)
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-500'
                }`}
              >
                {localizeTimeSlot(slot)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="appt-notes" className="block text-sm font-medium text-gray-700 mb-2">
          <FileText className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
          {t_form.notes}
        </label>
        <textarea
          id="appt-notes"
          name="notes"
          rows={3}
          maxLength={1000}
          value={appointmentData.notes}
          onChange={(e) => setAppointmentData({ ...appointmentData, notes: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
          placeholder={t_form.notes_placeholder}
        />
        <div className={`flex ${isAr ? 'justify-end' : 'justify-start'} mt-1`}>
          <span className="text-xs text-gray-400">{(appointmentData.notes || '').length} / 1000</span>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
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
        <div className="text-sm text-start">
          <label htmlFor="terms-appointment" className="font-medium text-gray-700 cursor-pointer">
            {t_form.terms.split(' ').map((word, i) => {
              if (['الشروط', 'والأحكام', 'وسياسة', 'الخصوصية', 'conditions', "d'utilisation", 'politique', 'confidentialité'].some(w => word.includes(w))) {
                return (
                  <span key={i} className="text-emerald-600 hover:underline">{word} </span>
                );
              }
              return word + ' ';
            })}
          </label>
          <a href={lang === 'fr' ? "/fr/terms-privacy" : "/terms-privacy"} target="_blank" rel="noopener noreferrer" className="sr-only">Terms and Privacy</a>
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
