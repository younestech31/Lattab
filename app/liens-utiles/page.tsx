import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Scale } from 'lucide-react';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';
import { SITE_URL } from '@/lib/config';
import PortalsDirectory from '@/components/PortalsDirectory';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

export const revalidate = 86400; // Cache 24h (ISR)

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'الدليل الرسمي الموثوق للبوابات الحكومية والمنصات الرقمية في الجزائر لقوانين التوثيق، مسح الأراضي، الضرائب والسجل التجاري.';
  assertDescriptionLength(desc, 'liens-utiles');

  return {
    title: { absolute: 'دليل البوابات والمواقع الرسمية الجزائرية | موثق وهران' },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/liens-utiles`,
      languages: {
        'ar-DZ': `${SITE_URL}/liens-utiles`,
        'fr-DZ': `${SITE_URL}/fr/liens-utiles`,
        'x-default': `${SITE_URL}/liens-utiles`,
      },
    },
    openGraph: {
      title: 'دليل البوابات والمواقع الرسمية الجزائرية | موثق وهران',
      description: desc,
      url: `${SITE_URL}/liens-utiles`,
      siteName: 'مكتب الأستاذ لعطب محمد - موثق وهران',
      type: 'website',
      locale: 'ar_DZ',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function UsefulLinksPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "دليل البوابات والمواقع الرسمية الجزائرية — موثق وهران",
    "description": "الدليل الرسمي الموثوق للبوابات الحكومية والمنصات الرقمية القانونية والمالية والعقارية في الجزائر",
    "publisher": {
      "@type": "LegalService",
      "name": "مكتب الأستاذ لعطب محمد - موثق بوهران",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Oran",
        "addressCountry": "DZ"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <SchemaScriptLoader schemas={[pageSchema]} />
      
      {/* Hero Header Section */}
      <header className="bg-emerald-950 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Modern high-contrast grid lines pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          {/* Back button */}
          <div className="mb-8 text-right">
            <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-white font-bold transition-colors group">
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              أو العودة للرئيسية
            </Link>
          </div>

          <div className="space-y-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 text-emerald-300 text-sm font-semibold border border-emerald-800/60 shadow-inner">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              بوابات ومنصات حكومية مؤمنة ومحدثة لعام 2026
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              روابط حكومية وبوابات رسمية تهم المواطن
            </h1>
            <p className="text-base md:text-lg text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              يسهم هذا الفضاء الإرشادي في إدماج المواطنين مع مختلف البوابات الرقمية لبلادنا (الجريدة الرسمية، وزارة العدل، الضرائب، مسح الأراضي، والسجل التجاري) لتسهيل المعاملات والتحقق من القوانين.
            </p>
          </div>
        </div>
      </header>

      {/* Main Filterable Directory Section */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <PortalsDirectory lang="ar" />
        
        {/* Civic Guidance Note under Law 06-02 Compliance (No commercial actions, pure public utility context) */}
        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-emerald-600 shrink-0" />
            <h2 className="text-lg font-extrabold text-gray-900">تنبيه قانوني وإرشادي للمواطنين</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            وفقًا للمرسوم والشروط التوجيهية للخدمة التوثيقية الجزائرية والتشريع الجاري العمل به، يهدف هذا الدليل التعريفي حصريًا إلى توجيه المواطنين والمستثمرين للوصول المباشر إلى مصالح الإدارات والوزارات وهيئات الدولة الجزائرية عبر الأنترنت. مكتب التوثيق لا يتحمل أي مسؤولية قانونية عن محتوى المواقع الخارجية ولا يعمل كوسيط في استغلالها أو تحصيل رسوم عليها. نوصي دائمًا بالتأكد من موثوقية رمز الحماية وقفل الاتصال <span className="font-mono">https://</span> بجانب المواقع الحكومية.
          </p>
        </div>
      </main>
    </div>
  );
}
