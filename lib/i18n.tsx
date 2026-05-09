'use client';

import React, { createContext, useContext, useState } from 'react';
import { setLanguageCookie } from '@/app/actions/language';

export type Language = 'ar' | 'fr';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, defaultLang = 'ar' }: { children: React.ReactNode, defaultLang?: Language }) {
  const [lang, setLangState] = useState<Language>(defaultLang);

  const toggleLang = () => {
    setLangState((prev) => {
      const next = prev === 'ar' ? 'fr' : 'ar';
      setLanguageCookie(next);
      return next;
    });
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    setLanguageCookie(newLang);
  };

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
