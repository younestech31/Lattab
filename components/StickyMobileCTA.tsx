'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const shouldShow = isVisible && !isContactVisible;

  return (
    <div 
      className={`fixed bottom-6 inset-x-0 z-40 md:hidden px-6 pb-[env(safe-area-inset-bottom,0px)] pointer-events-none transition-transform duration-300 ease-in-out ${
        shouldShow ? 'translate-y-0' : 'translate-y-[200%]'
      }`}
    >
      <div className="w-full pl-[5.5rem] pointer-events-auto">
        <Link 
          href="/#booking-form"
          className="block w-full bg-emerald-600 text-white font-bold text-center py-4 rounded-2xl shadow-[0_8px_30px_rgba(5,150,105,0.3)] hover:bg-emerald-700 transition-colors"
        >
          احجز موعد
        </Link>
      </div>
    </div>
  );
}
