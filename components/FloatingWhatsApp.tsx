'use client';
import { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';

// Custom SVG for WhatsApp icon for better representation.
const FloatingWhatsApp = () => {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!showTooltip) return;
    const t = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(t);
  }, [showTooltip]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end pb-[env(safe-area-inset-bottom,0px)]" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        <a
          href="https://api.whatsapp.com/send/?phone=213562296981"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label={isAr ? 'تواصل معنا عبر واتساب' : 'Contactez-nous sur WhatsApp'}
        >
          <svg 
            className="w-8 h-8 fill-current" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414zM12.004 0C5.374 0 0 5.373 0 12.001c0 2.112.547 4.178 1.588 6.003L.057 24l6.162-1.616a11.953 11.953 0 005.785 1.517c6.629 0 12.002-5.373 12.002-12.001C24.006 5.373 18.632 0 12.004 0zM12.004 21.902c-1.934 0-3.83-.518-5.482-1.499l-.393-.233-3.674.963.98-3.582-.255-.406a9.865 9.865 0 01-1.513-5.144c0-5.457 4.441-9.898 9.897-9.898 5.457 0 9.899 4.441 9.899 9.898 0 5.458-4.442 9.899-9.899 9.899z"/>
          </svg>
        </a>
        {showTooltip && (
          <div className={`absolute bottom-16 ${isAr ? 'right-0' : 'left-0'} bg-white text-gray-800 text-sm font-medium 
                          px-4 py-2 rounded-xl shadow-lg whitespace-nowrap border border-gray-100
                          animate-fade-in`}
               aria-hidden="true">
            {isAr ? '💬 تحدث معنا الآن!' : '💬 Discutons maintenant !'}
            <div className={`absolute -bottom-2 ${isAr ? 'right-5' : 'left-5'} w-3 h-3 bg-white rotate-45 border-b border-r border-gray-100`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
