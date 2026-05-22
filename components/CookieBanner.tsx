'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { t } from '@/lib/i18n/translations';
import { setConsentCookie } from '@/app/actions/consent';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    try {
      const match = document.cookie.match(/(^| )cookie-consent=([^;]+)/);
      if (!match) {
        setIsVisible(true);
      }
    } catch (e) {
      console.warn("Could not read document.cookie", e);
      setIsVisible(true);
    }
  }, []);

  const accept = async () => {
    try {
      await setConsentCookie(true);
      localStorage.setItem('cookie-consent', 'true');
    } catch (e) {
      console.warn("localStorage inaccessible", e);
    }
    setIsVisible(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-granted'));
  };

  const reject = async () => {
    try {
      await setConsentCookie(false);
      localStorage.setItem('cookie-consent', 'false');
    } catch (e) {
      console.warn("localStorage inaccessible", e);
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {t(lang, 'cookie_banner', 'message')}
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 shrink-0">
          <Link 
            href={lang === 'fr' ? "/fr/terms-privacy" : "/terms-privacy"} 
            className="text-sm text-gray-600 hover:text-emerald-700 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
          >
            {t(lang, 'cookie_banner', 'privacy_policy')}
          </Link>
          <div className="flex items-center gap-3">
            <button 
              type="button"
              onClick={reject}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold px-6 py-2.5 rounded-lg text-sm min-h-[44px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              {t(lang, 'cookie_banner', 'reject')}
            </button>
            <button 
              type="button"
              onClick={accept}
              className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold px-6 py-2.5 rounded-lg text-sm min-h-[44px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              {t(lang, 'cookie_banner', 'accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
