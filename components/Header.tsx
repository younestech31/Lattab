import HeaderShell from './header/HeaderShell';
import HeaderClient from './header/HeaderClient';
import { headers } from 'next/headers';
import { Language } from '@/lib/i18n/translations';

/**
 * Interface representing the props for the Header parent component.
 */
export interface HeaderProps {
  lang?: Language;
}

/**
 * Composition-layer Server Component representing the layout header.
 * Orchestrates the Server-rendered static structures (HeaderShell) and the 
 * interactive islands (HeaderClient) side by side under a single server-rendered <header>.
 * 
 * Written justification for client partition: Required for scroll event listeners,
 * active mobile modal toggle states, and focus trap keydown managers which cannot run on the server.
 */
export default async function Header({ lang = 'ar' }: HeaderProps) {
  const headersList = await headers();
  const pathname = headersList.get('x-lang') === 'fr' ? `/fr${headersList.get('x-pathname') || ''}` : (headersList.get('x-pathname') || '/');
  
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
          <HeaderShell lang={lang} pathname={pathname} />
          <HeaderClient lang={lang} pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
