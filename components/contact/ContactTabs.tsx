'use client';
import { useState, useEffect, Suspense } from 'react';
import AppointmentForm from './AppointmentForm';
import InquiryForm from './InquiryForm';

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

export default function ContactTabs() {
  const [activeTab, setActiveTab] = useState<'appointment' | 'inquiry'>('appointment');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#appointment' || hash === '#contact') setActiveTab('appointment');
      else if (hash === '#inquiry') setActiveTab('inquiry');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="flex gap-4 mb-8 border-b border-gray-100 pb-4 no-print">
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

      <noscript dangerouslySetInnerHTML={{ __html: '<div class="p-6 bg-red-50 text-red-800 rounded-xl border border-red-200 mb-6"><h3 class="font-bold mb-2">تنبيه: النموذج لا يعمل بدون JavaScript</h3><p>يرجى التواصل معنا مباشرة عبر الهاتف: <a href="tel:+213562296981" class="underline font-bold">+213 562 29 69 81</a> أو عبر البريد الإلكتروني: <a href="mailto:maitrelattabmohamed@gmail.com" class="underline font-bold">maitrelattabmohamed@gmail.com</a></p></div>' }} />
      
      {activeTab === 'appointment' ? (
        <Suspense fallback={<div>جاري التحميل...</div>}>
          <AppointmentForm services={services} />
        </Suspense>
      ) : (
        <InquiryForm services={services} />
      )}
    </div>
  );
}
