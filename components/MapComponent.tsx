'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export default function MapComponent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { lang } = useLang();
  const isAr = lang === 'ar';

  if (!isLoaded) {
    return (
      <div className="w-full h-full min-h-[300px] bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
          <MapPin className="w-7 h-7" />
        </div>
        <p className="text-gray-800 font-bold text-base mb-1">
          {isAr ? 'خريطة ديوان التوثيق - وهران' : "Carte de l'Office Notarial - Oran"}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm max-w-sm mb-5">
          {isAr
            ? 'حي 557 مسكن، العمارة D24، الطابق الأول، العقيد لطفي، وهران'
            : 'Cité 557 Logements, Immeuble D24, 1er Étage, Akid Lotfi, Oran'}
        </p>
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer"
        >
          <MapPin className="w-4 h-4" />
          {isAr ? 'عرض الخريطة' : 'Afficher la carte'}
        </button>
      </div>
    );
  }

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.938810222046!2d-0.5931358!3d35.7277124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e63c19cea6045%3A0x8f3a2767975898bd!2sNOTAIRE%20LATTAB%20MOHAMED!5e0!3m2!1sar!2sdz!4v1712698680000!5m2!1sar!2sdz"
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: '0.75rem' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={isAr ? 'موقع ديوان التوثيق' : "Localisation de l'Office Notarial"}
    />
  );
}
