'use client';

import React, { createContext, useContext, useTransition, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export type Language = 'ar' | 'fr';

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isPending: boolean;
  setAlternatePaths: (paths: Record<Language, string> | null) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, lang }: { children: React.ReactNode, lang: Language }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [alternatePaths, setAlternatePaths] = useState<Record<Language, string> | null>(null);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang]);

  // Reset alternate paths when pathname changes
  React.useEffect(() => {
    setAlternatePaths(null);
  }, [pathname]);

  const handleLanguageChange = (nextLang: Language) => {
    let targetPath = pathname;
    
    // Check if current page is structured as /fr/...
    const isFrPage = pathname.startsWith('/fr') && (pathname === '/fr' || pathname.startsWith('/fr/'));

    let isPathChanging = false;

    if (alternatePaths && alternatePaths[nextLang]) {
      targetPath = alternatePaths[nextLang];
      isPathChanging = targetPath !== pathname;
    } else if (nextLang === 'fr') {
      if (!isFrPage) {
        targetPath = pathname === '/' ? '/fr' : `/fr${pathname}`;
        isPathChanging = true;
      }
    } else {
      if (isFrPage) {
        targetPath = pathname === '/fr' ? '/' : pathname.replace(/^\/fr/, '');
        isPathChanging = true;
      }
    }

    startTransition(() => {
      if (isPathChanging) {
        router.push(targetPath);
      } else {
        router.refresh();
      }
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
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isPending, setAlternatePaths }}>
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

export function RegisterAlternatePath({ paths }: { paths: Record<Language, string> }) {
  const { setAlternatePaths } = useLang();
  
  React.useEffect(() => {
    setAlternatePaths(paths);
    return () => {
      setAlternatePaths(null);
    };
  }, [paths, setAlternatePaths]);

  return null;
}

