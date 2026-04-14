'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#home', label: 'الرئيسية' },
    { href: '/#services', label: 'خدماتنا' },
    { href: '/#calculator', label: 'حاسبة مرجعية' },
    { href: '/#why-choose-us', label: 'لماذا نحن' },
    { href: '/#about', label: 'عن الموثق' },
    { href: '/#procedures', label: 'الإجراءات' },
    { href: '/#legal-updates', label: 'أخبار قانونية' },
    { href: '/#faq', label: 'الأسئلة الشائعة' },
    { href: '/#contact', label: 'اتصل بنا' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              {/* اللوغو الجديد */}
              <Image
                src="https://ia600909.us.archive.org/16/items/Opn-logo/logo-notaire-lattab.png"
                alt="مكتب الأستاذ لعطب محمد - موثق بوهران"
                width={48}
                height={48}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div>
              <span className={`block text-xl font-bold ${isScrolled || isMenuOpen ? 'text-gray-800' : 'text-white'}`}>
               الأستاذ لعطب محمد
              </span>
              <p className={`text-xs ${isScrolled || isMenuOpen ? 'text-emerald-600' : 'text-emerald-200'}`}>
                موثق معتمد
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-emerald-500 whitespace-nowrap ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#booking-form"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              احجز موعد
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled || isMenuOpen ? 'text-gray-700' : 'text-white'
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`lg:hidden mt-4 pb-4 border-t pt-4 border-gray-200`}>
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
              <Link
                href="/#booking-form"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                احجز موعد
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
