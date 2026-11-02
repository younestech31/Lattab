import { headers } from 'next/headers';
import HeaderShellServer from './header/HeaderShellServer';
import HeaderClient from './header/HeaderClient';
import type { Language } from '@/lib/i18n/translations';

export default async function Header() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';
  
  const lang: Language = pathname.startsWith('/fr') ? 'fr' : 'ar';
  const isHomePage = pathname === '/' || pathname === '/fr';

  return (
    <header
      id="main-header"
      role="banner"
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-transparent py-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <HeaderShellServer lang={lang} isHomePage={isHomePage} />
          <HeaderClient lang={lang} isHomePage={isHomePage} />
        </div>
      </div>
    </header>
  );
}
