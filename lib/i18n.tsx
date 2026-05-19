'use client';

import React, { createContext, useContext, useState } from 'react';
import { setLanguageCookie } from '@/app/actions/language';
import { useRouter, usePathname, useParams } from 'next/navigation';

export type Language = 'ar' | 'fr';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, lang }: { children: React.ReactNode, lang: Language }) {
  const [langState, setLangState] = useState<Language>(lang);
  const router = useRouter();
  const pathname = usePathname();

  const handleLangSwitch = async (newLang: Language) => {
    setLangState(newLang);
    await setLanguageCookie(newLang);
    
    // Switch locale logic: 
    // If current is /fr/blog, switching to 'ar' -> /blog
    // If current is /blog, switching to 'fr' -> /fr/blog
    // pathname always includes /fr/ if in fr, but not /ar/ if in ar. Wait, pathname might be /fr/something.
    
    const isCurrentlyFr = pathname.startsWith('/fr/') || pathname === '/fr';
    
    let nextPathname = pathname;
    
    if (newLang === 'fr' && !isCurrentlyFr) {
      nextPathname = `/fr${pathname === '/' ? '' : pathname}`;
    } else if (newLang === 'ar' && isCurrentlyFr) {
      nextPathname = pathname.replace(/^\/fr/, '') || '/';
    }
    
    // Optional: preserve searchParams if needed (can be added via useSearchParams)
    router.push(nextPathname);
    router.refresh();
  };

  const toggleLang = () => {
    const nextLang = langState === 'ar' ? 'fr' : 'ar';
    handleLangSwitch(nextLang);
  };

  const setLang = (newLang: Language) => {
    handleLangSwitch(newLang);
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
