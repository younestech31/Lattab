'use client';

import { useLayoutEffect, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function DocumentLanguage() {
  const pathname = usePathname();
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const isFr = pathname === '/fr' || pathname?.startsWith('/fr/');
    document.documentElement.lang = isFr ? 'fr' : 'ar';
    document.documentElement.dir = isFr ? 'ltr' : 'rtl';
  }, [pathname]);

  return null;
}
