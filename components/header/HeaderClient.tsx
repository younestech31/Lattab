'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { translations, type Language } from '@/lib/i18n/translations';
import LanguageSwitcher from '../LanguageSwitcher';
import { useFocusTrap } from '@/lib/hooks/useFocusTrap';

function resolveLang(pathname: string | null): Language {
  if (!pathname) return 'ar';
  return pathname === '/fr' || pathname.startsWith('/fr/') ? 'fr' : 'ar';
}

function isHome(pathname: string | null): boolean {
  return pathname === '/' || pathname === '/fr';
}

/**
 * Client Component that manages interactive portions of the header,
 * including brand text, nav links, language switcher, and mobile drawer.
 * Language is derived from usePathname() so it stays correct after client-side
 * language switches (Server Component header would stay stale from layout cache).
 */
export default function HeaderClient() {
  const pathname = usePathname();
  const lang = resolveLang(pathname);
  const isHomePage = isHome(pathname);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ticking = useRef(false);
  const mobileNavRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const text = translations[lang].nav;
  const headerActive = !isHomePage || isScrolled || isMenuOpen;

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const header = document.getElementById('main-header');
      if (header && !header.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  useFocusTrap(isMenuOpen, mobileNavRef);

  // Close mobile menu when language/route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const getHref = (href: string) => {
    if (lang === 'fr') {
      if (href.startsWith('/#')) {
        return `/fr#${href.slice(2)}`;
      }
      if (href === '/blog') return '/fr/blog';
      if (href === '/calculateur-prix-referentiel') return '/fr/calculateur-prix-referentiel';
      if (href === '/useful-links') return '/fr/useful-links';
      if (href === '/nae') return '/fr/nae';
      if (href === '/formulaires') return '/fr/formulaires';
    }
    return href;
  };

  const navLinks = [
    { href: '/#home', label: text.home },
    { href: '/#services', label: text.services },
    { href: '/calculateur-prix-referentiel', label: text.calculator },
    { href: '/formulaires', label: text.forms },
    { href: '/nae', label: lang === 'ar' ? 'دليل النشاطات' : 'Nomenclature des activités' },
    { href: '/useful-links', label: text.useful_links },
    { href: '/blog', label: text.blog },
    { href: '/#notary-role', label: text.notary_role },
    { href: '/#procedures', label: text.procedures },
    { href: '/#legal-updates', label: text.news },
    { href: '/#faq', label: text.faq },
    { href: '/#contact', label: text.contact },
  ];

  const brandTextClass = headerActive ? 'text-gray-800' : 'text-white';
  const notaryTextClass = headerActive ? 'text-emerald-600' : 'text-emerald-200';
  const menuBtnClass = headerActive ? 'text-gray-700' : 'text-white';
  const linkTextClass = headerActive ? 'text-gray-700' : 'text-white';

  return (
    <>
      {headerActive && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
          #main-header {
            background-color: white !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
          #main-header .link-text {
            color: #374151 !important;
          }
          #main-header .link-text:hover {
            color: #10b981 !important;
          }
          #main-header .brand-text {
            color: #1f2937 !important;
          }
          #main-header .notary-subtext {
            color: #059669 !important;
          }
          #main-header .menu-btn {
            color: #374151 !important;
          }
        `,
          }}
        />
      )}

      {/* Brand — language-aware, updates on client navigation */}
      <Link href={getHref('/#home')} className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white flex items-center justify-center">
          <Image
            src="/logo-small.webp"
            alt={
              lang === 'ar'
                ? 'شعار ديوان التوثيق - وهران'
                : "Logo de l'Étude Office Notarial - Oran"
            }
            width={40}
            height={40}
            quality={75}
            priority={true}
          />
        </div>
        <div>
          <span
            className={`block text-base font-bold leading-tight brand-text transition-colors duration-300 ${brandTextClass}`}
          >
            {text.name}
          </span>
          <p
            className={`text-xs leading-tight notary-subtext transition-colors duration-300 ${notaryTextClass}`}
          >
            {text.notary}
          </p>
        </div>
      </Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-4">
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getHref(link.href)}
              className={`font-medium transition-colors hover:text-emerald-500 whitespace-nowrap text-sm leading-none link-text duration-300 ${linkTextClass} ${([text.notary_role, text.procedures, text.news, text.faq] as string[]).includes(link.label) ? 'hidden' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher headerActive={headerActive} />
      </div>

      {/* Mobile controls */}
      <div className="flex items-center gap-3 lg:hidden shrink-0">
        <LanguageSwitcher headerActive={headerActive} isMobile={true} />
        <button
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          aria-label={isMenuOpen ? (lang === 'ar' ? 'إغلاق القائمة' : 'Fermer le menu') : (lang === 'ar' ? 'فتح القائمة' : 'Ouvrir le menu')}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className={`p-2 rounded-lg menu-btn transition-colors duration-300 ${menuBtnClass}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          ref={mobileNavRef}
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'ar' ? 'قائمة التنقل' : 'Menu de navigation'}
          className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-gray-200 shadow-xl px-6 py-8"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-gray-800 text-lg hover:text-emerald-600 transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={getHref('/#contact')}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              {text.book}
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
