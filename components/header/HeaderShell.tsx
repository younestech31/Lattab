'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLang } from '@/lib/i18n';
import { translations } from '@/lib/i18n/translations';

/**
 * Interface representing a navigation link item.
 */
export interface NavLinkItem {
  href: string;
  label: string;
}

/**
 * Client Component representing the static shell of the header.
 * Renders the brand logo and the desktop navigation link options.
 */
export default function HeaderShell() {
  const { lang } = useLang();
  const pathname = usePathname();
  const text = translations[lang].nav;
  const isHomePage = pathname === '/' || pathname === '/fr';
  const headerActive = !isHomePage;

  const getHref = (href: string) => {
    if (lang === 'fr') {
      if (href.startsWith('/#')) {
        return `/fr#${href.slice(2)}`;
      }
      if (href === '/blog') {
        return '/fr/blog';
      }
      if (href === '/calculateur-prix-referentiel') {
        return '/fr/calculateur-prix-referentiel';
      }
      if (href === '/useful-links') {
        return '/fr/useful-links';
      }
      if (href === '/formulaires') {
        return '/fr/formulaires';
      }
    }
    return href;
  };

  const navLinks: NavLinkItem[] = [
    { href: '/#home', label: text.home },
    { href: '/#services', label: text.services },
    { href: '/calculateur-prix-referentiel', label: text.calculator },
    { href: '/formulaires', label: text.forms },
    { href: '/useful-links', label: text.useful_links },
    { href: '/blog', label: text.blog },
    { href: '/#notary-role', label: text.notary_role },
    { href: '/#procedures', label: text.procedures },
    { href: '/#legal-updates', label: text.news },
    { href: '/#faq', label: text.faq },
    { href: '/#contact', label: text.contact },
  ];

  return (
    <>
      {/* Brand & Logo */}
      <Link href={getHref('/#home')} className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white flex items-center justify-center">
          <Image
            src="/logo-small.webp"
            alt={lang === 'ar' ? 'شعار ديوان التوثيق - وهران' : 'Logo de l\'Étude Office Notarial - Oran'}
            width={40}
            height={40}
            quality={75}
            priority={true}
            unoptimized={false}
          />
        </div>
        <div>
          <span className={`block text-base font-bold leading-tight brand-text transition-colors duration-300 ${headerActive ? 'text-gray-800' : 'text-white'}`}>
            {text.name}
          </span>
          <p className={`text-xs leading-tight notary-subtext transition-colors duration-300 ${headerActive ? 'text-emerald-600' : 'text-emerald-200'}`}>
            {text.notary}
          </p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4">
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getHref(link.href)}
              className={`font-medium transition-colors hover:text-emerald-500 whitespace-nowrap text-sm leading-none link-text duration-300 ${
                headerActive ? 'text-gray-700' : 'text-white'
              } ${([text.notary_role, text.procedures, text.news, text.faq] as string[]).includes(link.label) ? 'hidden' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
