'use client';
import dynamic from 'next/dynamic';
import ContactTabs from './ContactTabs';

const MapComponent = dynamic(() => import('../MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[400px] font-sans">
      Loading map...
    </div>
  ),
});

export default function ContactSection({ contactInfo }: { contactInfo?: React.ReactNode }) {
  return (
    <section id="contact" className="scroll-mt-20 md:scroll-mt-24 py-12 bg-gray-50 relative">
      <div id="appointment" className="absolute -top-24" />
      <div id="inquiry" className="absolute -top-24" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 no-print">
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
          {contactInfo}

          {/* Contact Form */}
          <div id="booking-form" className="lg:col-span-2 scroll-mt-24">
            <ContactTabs />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-3xl overflow-hidden border-2 border-white shadow-lg no-print">
          <MapComponent />
        </div>
      </div>
    </section>
  );
}
