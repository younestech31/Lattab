'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/lib/i18n';
import { translations } from '@/lib/i18n/translations';
import LanguageSwitcher from '../LanguageSwitcher';
import { useFocusTrap } from '@/lib/hooks/useFocusTrap';

/**
 * Client Component that manages interactive portions of the header,
 * such as scroll styling, language switching, and mobile drawer accessibility.
 */
export default function HeaderClient() {
  const { lang } = useLang();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ticking = useRef(false);
  const mobileNavRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const text = translations[lang].nav;
  const isHomePage = pathname === '/' || pathname === '/fr';
  const headerActive = !isHomePage || isScrolled || isMenuOpen;

  // Track scroll with passive listener and requestAnimationFrame
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

  // Handle body overflow on mobile menu toggle
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on clicks outside
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

  // Handle Escape key
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

  // Engage focus trap inside mobile nav popup
  useFocusTrap(isMenuOpen, mobileNavRef);

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
    }
    return href;
  };

  const navLinks = [
    { href: '/#home', label: text.home },
    { href: '/#services', label: text.services },
    { href: '/calculateur-prix-referentiel', label: text.calculator },
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
      {/* Styles injected to dynamically alter the server-rendered parent header */}
      {headerActive && (
        <style dangerouslySetInnerHTML={{ __html: `
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
        `}} />
      )}

      {/* Desktop Language Switcher (aligned to the right next to Nav links) */}
      <div className="hidden lg:flex items-center shrink-0">
        <LanguageSwitcher headerActive={headerActive} />
      </div>

      {/* Mobile Controls & Hamburger */}
      <div className="flex items-center gap-3 lg:hidden shrink-0">
        <LanguageSwitcher headerActive={headerActive} isMobile={true} />
        <button
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className={`p-2 rounded-lg menu-btn transition-colors duration-300 ${
            headerActive ? 'text-gray-700' : 'text-white'
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Panel */}
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
              href={getHref('/#booking-form')}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-sm"
            >
              {text.book}
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
