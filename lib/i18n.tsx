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

export function LanguageProvider({ children, lang }: { children: React.ReactNode, lang: Language }) {
  const [langState, setLangState] = useState<Language>(lang);

  const toggleLang = () => {
    const nextLang = langState === 'ar' ? 'fr' : 'ar';
    setLangState(nextLang);
    setLanguageCookie(nextLang).then(() => {
      window.location.reload();
    });
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    setLanguageCookie(newLang).then(() => {
        window.location.reload();
    });
  };

  return (
    <LanguageContext.Provider value={{ lang: langState, setLang, toggleLang }}>
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
