'use client';
import { useState, useMemo, useEffect, useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calendar, Clock, User, Phone, Mail, FileText, Building, CheckCircle, Loader2, AlertTriangle } from 'lucide-react';
import { AppointmentFormData, TIME_DISPLAY_TO_24H, MORNING_SLOTS, AFTERNOON_SLOTS, buildWhatsAppUrl } from './types';
import { validateAppointment, AppointmentState } from '@/app/actions/appointment';
import { useLang } from '@/lib/i18n';
import { translations } from '@/lib/i18n/translations';

export default function AppointmentForm({ services }: { services: readonly string[] }) {
  const { lang } = useLang();
  const t_form = translations[lang].contact.form;
  const isAr = lang === 'ar';
  
  const searchParams = useSearchParams();
  const initialState: AppointmentState = { success: false, errors: {} };
  const [state, formAction, isPending] = useActionState(validateAppointment, initialState);

  const [appointmentData, setAppointmentData] = useState<AppointmentFormData>({
    name: '', phone: '', email: '', service: '',
    date: '', time: '', notes: '', company: '',
    honeypot: '',
  });

  const [appointmentAgreed, setAppointmentAgreed] = useState(false);
  
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && services.includes(decodeURIComponent(serviceParam))) {
      setAppointmentData(prev => ({ ...prev, service: decodeURIComponent(serviceParam) }));
    }
  }, [searchParams, services]);

  const maxDateString = useMemo(() => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 90);
    return maxDate.toISOString().split('T')[0];
  }, []);

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

  if (state.success) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100 text-center animate-fade-in" role="alert" aria-live="assertive">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t_form.success_appointment_title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {t_form.success_appointment_desc}
        </p>
        
        <div className="flex flex-col gap-4">
          <a 
            href={buildWhatsAppUrl({ service: appointmentData.service || (isAr ? 'موعد' : 'RDV'), source: isAr ? 'نموذج الحجز' : 'Formulaire de réservation' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-emerald-200 touch-manipulation"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            {isAr ? 'تحدث معنا عبر واتساب' : 'Parlez-nous sur WhatsApp'}
          </a>
          <button
            onClick={() => window.location.reload()}
            className="text-emerald-600 hover:text-emerald-700 font-medium text-sm underline touch-manipulation"
          >
            {t_form.another_request}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" id="booking-form" dir={isAr ? 'rtl' : 'ltr'}>
      {Object.keys(state.errors).length > 0 && (
        <div className="bg-red-50 border-s-4 border-red-500 p-4 mb-6 animate-fade-in" role="alert" aria-live="assertive">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <div className="text-red-700 font-medium text-start">
              <p>{t_form.error_title}</p>
              <a href="tel:+213562296981" className="font-bold underline block mt-1" dir="ltr">+213 562 29 69 81</a>
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

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="appt-email" className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className={`inline w-4 h-4 ${isAr ? 'ms-2' : 'me-2'}`} />
            {t_form.email}
          </label>
          <input
            id="appt-email"
            name="email"
            type="email"
            maxLength={100}
            value={appointmentData.email}
            onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            placeholder={t_form.email_placeholder}
            dir="ltr"
          />
        </div>
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
              <ul className={`list-disc list-inside space-y-1 text-blue-700 ${isAr ? 'mr-2' : 'ml-2'}`}>
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
            min={new Date().toISOString().split('T')[0]}
            max={maxDateString}
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
          <a href="/terms-privacy" target="_blank" rel="noopener noreferrer" className="sr-only">Terms and Privacy</a>
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
