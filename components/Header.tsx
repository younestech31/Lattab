'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/lib/i18n';
import { translations } from '@/lib/i18n/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { lang, toggleLang } = useLang();
  
  const text = translations[lang].nav;
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
      const header = document.querySelector('header');
      if (header && !header.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/#home', label: text.home },
    { href: '/#services', label: text.services },
    { href: '/calculateur-prix-referentiel', label: text.calculator },
    { href: '/blog', label: text.blog },
    { href: '/#why-choose-us', label: text.why_us },
    { href: '/#about', label: text.about },
    { href: '/#procedures', label: text.procedures },
    { href: '/#legal-updates', label: text.news },
    { href: '/#faq', label: text.faq },
    { href: '/#contact', label: text.contact },
  ];

  const headerActive = !isHomePage || isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        headerActive
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-white flex items-center justify-center">
              <Image
                src="/logo-small.webp"
                alt="شعار مكتب الأستاذ لعطب محمد"
                width={48}
                height={48}
                quality={75}
                priority={true}
                unoptimized={false}
              />
            </div>
            <div>
              <span className={`block text-xl font-bold ${headerActive ? 'text-gray-800' : 'text-white'}`}>
               {text.name}
              </span>
              <p className={`text-xs ${headerActive ? 'text-emerald-600' : 'text-emerald-200'}`}>
                {text.notary}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            <nav className="flex items-center gap-3 xl:gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-emerald-500 whitespace-nowrap text-xs xl:text-sm ${
                    headerActive ? 'text-gray-700' : 'text-white'
                  } ${([text.why_us, text.procedures, text.news, text.faq] as string[]).includes(link.label) ? 'hidden xl:block' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#booking-form"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                {text.book}
              </Link>
              <LanguageSwitcher headerActive={headerActive} />
            </nav>
          </div>

          {/* Mobile Menu Button & Lang Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher headerActive={headerActive} isMobile={true} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}

              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              className={`p-2 rounded-lg ${
                headerActive ? 'text-gray-700' : 'text-white'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-nav" className={`lg:hidden mt-4 pb-4 border-t pt-4 border-gray-200`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium text-gray-700`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;