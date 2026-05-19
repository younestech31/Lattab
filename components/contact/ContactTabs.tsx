'use client';
import { useState, useEffect, Suspense } from 'react';
import AppointmentForm from './AppointmentForm';
import InquiryForm from './InquiryForm';
import { Language, translations } from '@/lib/i18n/translations';

export default function ContactTabs({ lang }: { lang: Language }) {
  const [activeTab, setActiveTab] = useState<'appointment' | 'inquiry'>('appointment');

  const services = translations[lang].contact.form.services_list;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#appointment' || hash === '#contact' || hash === '#booking-form') setActiveTab('appointment');
      else if (hash === '#inquiry') setActiveTab('inquiry');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row gap-4 mb-8 border-b border-gray-100 pb-4 no-print">
        <button
          onClick={() => setActiveTab('appointment')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition-colors touch-manipulation ${
            activeTab === 'appointment'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
          }`}
        >
          {translations[lang].contact.tabs.appointment}
        </button>
        <button
          onClick={() => setActiveTab('inquiry')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition-colors touch-manipulation ${
            activeTab === 'inquiry'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
          }`}
        >
          {translations[lang].contact.tabs.inquiry}
        </button>
      </div>

      <noscript>
        <p className="p-4 bg-gray-50 rounded-xl text-center text-gray-700">
          {lang === 'ar' ? 'يرجى التواصل على' : 'Veuillez nous contacter au'}{' '}
          <a href="tel:+213562296981" className="text-emerald-600 font-bold hover:underline" dir="ltr">+213 562 29 69 81</a>
        </p>
      </noscript>
      
      {activeTab === 'appointment' ? (
        <Suspense fallback={<div className="p-8 text-center text-gray-400">...</div>}>
          <AppointmentForm services={services} />
        </Suspense>
      ) : (
        <Suspense fallback={<div className="p-8 text-center text-gray-400">...</div>}>
          <InquiryForm services={services} />
        </Suspense>
      )}
    </div>
  );
}
