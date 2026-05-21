'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { t } from '@/lib/i18n/translations';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-granted'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {t(lang, 'cookie_banner', 'message')}
        </p>
        <div className="flex items-center gap-3">
          <Link 
            href="/terms-privacy" 
            className="text-sm text-gray-600 hover:text-emerald-700 underline"
          >
            {t(lang, 'cookie_banner', 'privacy_policy')}
          </Link>
          <button 
            onClick={accept}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors"
          >
            {t(lang, 'cookie_banner', 'accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
