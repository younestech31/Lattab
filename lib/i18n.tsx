'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'fr';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Language) || 'ar';
    }
    return 'ar';
  });

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'ar' ? 'fr' : 'ar';
      if (typeof window !== 'undefined') {
        localStorage.setItem('lang', next);
      }
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return context;
}
