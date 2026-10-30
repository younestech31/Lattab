'use client';

import HeaderShell from './header/HeaderShell';
import HeaderClient from './header/HeaderClient';
import type { Language } from '@/lib/i18n';

export interface HeaderProps {
  lang?: Language;
}

export default function Header(_props: HeaderProps = {}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '/fr';
  const headerActive = !isHomePage;

  return (
    <header
      id="main-header"
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        headerActive
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <HeaderShell />
          <HeaderClient />
        </div>
      </div>
    </header>
  );
}
