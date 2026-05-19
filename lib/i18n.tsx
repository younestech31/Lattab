'use client';

import React, { createContext, useContext, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { setLanguageCookie } from '@/app/actions/language';

export type Language = 'ar' | 'fr';

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, lang }: { children: React.ReactNode, lang: Language }) {
  const [langState, setLangState] = useState<Language>(lang);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLang = () => {
    const nextLang = langState === 'ar' ? 'fr' : 'ar';
    setLangState(nextLang);
    setLanguageCookie(nextLang).then(() => {
      startTransition(() => {
        router.refresh();
      });
    });
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    setLanguageCookie(newLang).then(() => {
      startTransition(() => {
        router.refresh();
      });
    });
  };

  return (
    <LanguageContext.Provider value={{ lang: langState, setLang, toggleLang }}>
      <div style={{ opacity: isPending ? 0.7 : 1, transition: 'opacity 0.2s' }}>
        {children}
      </div>
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
