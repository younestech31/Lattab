'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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
    { href: '/calculateur-prix-referentiel', label: 'حاسبة السعر المرجعي' },
    { href: '/#why-choose-us', label: 'لماذا نحن' },
    { href: '/#about', label: 'عن الموثق' },
    { href: '/#procedures', label: 'الإجراءات' },
    { href: '/#legal-updates', label: 'أخبار قانونية' },
    { href: '/#faq', label: 'الأسئلة الشائعة' },
    { href: '/#contact', label: 'اتصل بنا' },
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
                src="/logo.png"
                alt="شعار مكتب الأستاذ لعطب محمد"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
                fetchPriority="high"
                unoptimized
              />
            </div>
            <div>
              <span className={`block text-xl font-bold ${headerActive ? 'text-gray-800' : 'text-white'}`}>
               الأستاذ لعطب محمد
              </span>
              <p className={`text-xs ${headerActive ? 'text-emerald-600' : 'text-emerald-200'}`}>
                موثق معتمد
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-emerald-500 whitespace-nowrap text-xs xl:text-sm ${
                  headerActive ? 'text-gray-700' : 'text-white'
                } ${['لماذا نحن', 'الإجراءات', 'أخبار قانونية', 'الأسئلة الشائعة'].includes(link.label) ? 'hidden xl:block' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#booking-form"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              احجز موعد
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className={`lg:hidden p-2 rounded-lg ${
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
