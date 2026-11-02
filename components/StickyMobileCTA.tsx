'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { FileText } from 'lucide-react';

export default function StickyMobileCTA() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  
  const [isVisible, setIsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300);
        
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          // Hide when #contact is on screen
          setIsContactVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
        } else {
          setIsContactVisible(false);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
        {/* Single Administrative Inquiry Link to #contact */}
        <Link 
          href="#contact"
          className="grow pointer-events-auto bg-emerald-700 text-white font-bold text-center h-14 flex items-center justify-center gap-2 rounded-xl shadow-lg hover:bg-emerald-800 active:bg-emerald-900 transition-colors text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 touch-manipulation"
          aria-label={isAr ? 'استفسار إداري — الانتقال إلى قسم التواصل' : 'Demande administrative — Accéder aux informations de contact'}
        >
          <FileText className="w-5 h-5 shrink-0" aria-hidden="true" />
          <span>{isAr ? 'استفسار إداري' : 'Demande administrative'}</span>
        </Link>

        {/* Spacer for the permanently fixed Layout WhatsApp button */}
        <div className="w-14 h-14 shrink-0 pointer-events-none" />
      </div>
    </div>
  );
}
