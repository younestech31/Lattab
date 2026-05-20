'use client';

import React, { createContext, useContext, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export type Language = 'ar' | 'fr';

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isPending: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, lang }: { children: React.ReactNode, lang: Language }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang]);

  const handleLanguageChange = (nextLang: Language) => {
    let targetPath = pathname;
    
    // Check if current page is structured as /fr/...
    const isFrPage = pathname.startsWith('/fr') && (pathname === '/fr' || pathname.startsWith('/fr/'));

    if (nextLang === 'fr') {
      if (!isFrPage) {
        targetPath = `/fr${pathname === '/' ? '' : pathname}`;
      }
    } else {
      if (isFrPage) {
        targetPath = pathname === '/fr' ? '/' : pathname.replace(/^\/fr/, '');
      }
    }

    startTransition(() => {
      router.push(targetPath);
    });
  };

  const toggleLang = () => {
    const nextLang = lang === 'ar' ? 'fr' : 'ar';
    handleLanguageChange(nextLang);
  };

  const setLang = (newLang: Language) => {
    handleLanguageChange(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isPending }}>
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

