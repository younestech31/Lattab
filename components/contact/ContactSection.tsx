import { Suspense } from 'react';
import ContactTabs from './ContactTabs';
import ClientMap from './ClientMap';
import { Language, translations } from '@/lib/i18n/translations';

const MapLoading = ({ lang }: { lang: string }) => (
  <div className="bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center text-gray-400 text-sm font-medium gap-3">
    <div className="w-5 h-5 border-2 border-gray-300 border-t-emerald-500 rounded-full animate-spin" />
    {lang === 'ar' ? 'جارٍ تحميل الخريطة...' : 'Chargement de la carte...'}
  </div>
);

interface ContactSectionProps {
  contactInfo?: React.ReactNode;
  lang: Language;
}

export default function ContactSection({ contactInfo, lang }: ContactSectionProps) {
  const isRtl = lang === 'ar';
  const t_contact = translations[lang].contact;

  return (
    <section id="contact" className="scroll-mt-20 md:scroll-mt-24 py-12 bg-gray-50 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      <div id="appointment" className="absolute -top-24" />
      <div id="inquiry" className="absolute -top-24" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 no-print">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t_contact.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t_contact.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t_contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          {contactInfo}

          {/* Contact Form */}
          <div id="booking-form" className="lg:col-span-2 scroll-mt-24">
            <ContactTabs lang={lang} />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-3xl overflow-hidden border-2 border-white shadow-lg no-print">
          <Suspense fallback={<MapLoading lang={lang} />}>
            <ClientMap />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
