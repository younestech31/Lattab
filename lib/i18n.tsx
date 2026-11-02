'use client';

import React, { createContext, useContext, useTransition, useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getCounterpartBlogUrl } from '@/lib/data/localeMap';

export type Language = 'ar' | 'fr';

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isPending: boolean;
  setAlternatePaths: (paths: Record<Language, string> | null) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function resolveLangFromPath(pathname: string | null): Language {
  if (!pathname) return 'ar';
  return pathname === '/fr' || pathname.startsWith('/fr/') ? 'fr' : 'ar';
}

/** Map a path to the other language using alternatePaths, blog pairs, or /fr prefix. */
function resolveTargetPath(
  pathname: string,
  nextLang: Language,
  alternatePaths: Record<Language, string> | null,
): string {
  // 1. Explicit alternate registered by the page (blog posts with different slugs)
  if (alternatePaths?.[nextLang]) {
    return alternatePaths[nextLang];
  }

  // 2. Blog pair map (handles same-slug and different-slug blog posts)
  if (pathname.startsWith('/blog/') || pathname.startsWith('/fr/blog/')) {
    const counterpart = getCounterpartBlogUrl(pathname);
    if (counterpart && counterpart !== pathname) {
      return counterpart;
    }
  }

  // 3. Generic /fr prefix logic for static routes
  const isFrPage = pathname === '/fr' || pathname.startsWith('/fr/');

  if (nextLang === 'fr') {
    if (isFrPage) return pathname;
    return pathname === '/' ? '/fr' : `/fr${pathname}`;
  }

  // nextLang === 'ar'
  if (!isFrPage) return pathname;
  return pathname === '/fr' ? '/' : pathname.replace(/^\/fr/, '') || '/';
}

export function LanguageProvider({
  children,
  lang: _initialLang = 'ar',
}: {
  children: React.ReactNode;
  lang?: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [alternatePaths, setAlternatePathsState] = useState<Record<Language, string> | null>(null);

  const langFromPath = resolveLangFromPath(pathname);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = langFromPath;
      document.documentElement.dir = langFromPath === 'ar' ? 'rtl' : 'ltr';
    }
  }, [langFromPath]);

  // Do NOT clear alternatePaths on every pathname change — that creates a race
  // where toggleLang runs with null alternates. Pages register via RegisterAlternatePath
  // and clean up on unmount; that is sufficient.

  const setAlternatePaths = useCallback((paths: Record<Language, string> | null) => {
    setAlternatePathsState(paths);
  }, []);

  const handleLanguageChange = useCallback(
    (nextLang: Language) => {
      const current = pathname || '/';
      const targetPath = resolveTargetPath(current, nextLang, alternatePaths);
      const isPathChanging = targetPath !== current;

      startTransition(() => {
        if (isPathChanging) {
          router.push(targetPath);
        } else {
          router.refresh();
        }
      });
    },
    [pathname, alternatePaths, router],
  );

  const toggleLang = useCallback(() => {
    const nextLang = langFromPath === 'ar' ? 'fr' : 'ar';
    handleLanguageChange(nextLang);
  }, [langFromPath, handleLanguageChange]);

  const setLang = useCallback(
    (newLang: Language) => {
      handleLanguageChange(newLang);
    },
    [handleLanguageChange],
  );

  return (
    <LanguageContext.Provider
      value={{ lang: langFromPath, setLang, toggleLang, isPending, setAlternatePaths }}
    >
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

/** Register the AR/FR counterpart paths for the current page (e.g. blog posts). */
export function RegisterAlternatePath({ paths }: { paths: Record<Language, string> }) {
  const { setAlternatePaths } = useLang();

  React.useEffect(() => {
    setAlternatePaths(paths);
    return () => {
      setAlternatePaths(null);
    };
  }, [paths.ar, paths.fr, setAlternatePaths]);

  return null;
}
