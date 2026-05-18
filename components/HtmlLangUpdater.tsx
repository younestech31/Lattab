'use client';
import { useEffect } from 'react';
import { useLang, type Language } from '@/lib/i18n';

export function HtmlLangUpdater() {
  const { lang, setLang } = useLang();
  
  useEffect(() => {
    // Restore from cookie on mount
    const langCookie = document.cookie.split('; ').find(row => row.startsWith('lang='))?.split('=')[1] as Language;
    if (langCookie && (langCookie === 'ar' || langCookie === 'fr')) {
      setLang(langCookie);
    }
  }, [setLang]);
  
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return null;
}
