'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { translations } from '@/lib/i18n/translations';

export default function StickyMobileCTA() {
  const { lang} = useLang();
  const isAr = lang === 'ar';
  
  const [isVisible, setIsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        // Show CTA only after scrolling down
        setIsVisible(window.scrollY > 300);
        
        // Calculate intersection on the fly instead of relying on stateful IntersectionObserver
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          // Contact segment starts being visible when top arrives at viewport bottom
          setIsContactVisible(rect.top <= window.innerHeight);
        } else {
          setIsContactVisible(false);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShow = isVisible && !isContactVisible;

  return (
    <div 
      className={`fixed bottom-4 inset-x-0 z-40 md:hidden pointer-events-none transition-transform duration-300 ease-in-out ${
        shouldShow ? 'translate-y-0' : 'translate-y-[200%]'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 flex items-center gap-2 pb-[env(safe-area-inset-bottom,0px)]">
        {/* Appointment Bar */}
        <Link 
          href="/#booking-form"
          className="grow pointer-events-auto bg-amber-500 text-white font-bold text-center h-14 flex items-center justify-center rounded-xl shadow-lg hover:bg-amber-600 transition-colors text-base"
          aria-label={isAr ? 'طلب موعد إداري — الانتقال إلى نموذج الحجز' : 'Demande de RDV — Accéder au formulaire'}
        >
          {translations[lang].contact.tabs.appointment}
        </Link>

         {/* Spacer for the permanently fixed Layout WhatsApp button */}
         <div className="w-14 h-14 shrink-0 pointer-events-none" />
      </div>
    </div>
  );
}
