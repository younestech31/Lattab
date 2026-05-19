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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShow = isVisible && !isContactVisible;

  return (
    <div 
      className={`fixed bottom-6 inset-x-0 z-40 md:hidden px-6 pb-[env(safe-area-inset-bottom,0px)] pointer-events-none transition-transform duration-300 ease-in-out ${
        shouldShow ? 'translate-y-0' : 'translate-y-[200%]'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="w-full pointer-events-auto pe-[5.5rem]">
        <Link 
          href="/#booking-form"
          className="block w-full bg-emerald-600 text-white font-bold text-center py-4 rounded-2xl shadow-[0_8px_30px_rgba(5,150,105,0.3)] hover:bg-emerald-700 transition-colors"
        >
          {translations[lang].contact.tabs.appointment}
        </Link>
      </div>
    </div>
  );
}
