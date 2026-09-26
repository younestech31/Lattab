import Link from 'next/link';
import Image from 'next/image';
import { Language, translations } from '@/lib/i18n/translations';

/**
 * Interface representing a navigation link item.
 */
export interface NavLinkItem {
  href: string;
  label: string;
}

/**
 * Props for the HeaderShell component.
 */
export interface HeaderShellProps {
  lang: Language;
  pathname: string;
}

/**
 * Server Component representing the static shell of the header.
 * Renders the brand logo and the desktop navigation link options.
 */
export default function HeaderShell({ lang, pathname }: HeaderShellProps) {
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
    }
    return href;
  };

  const navLinks: NavLinkItem[] = [
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
      {/* Brand & Logo */}
      <Link href={getHref('/#home')} className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-white flex items-center justify-center">
          <Image
            src="/logo-small.webp"
            alt={lang === 'ar' ? 'شعار ديوان التوثيق - وهران' : 'Logo de l\'Étude Office Notarial - Oran'}
            width={48}
            height={48}
            quality={75}
            priority={true}
            unoptimized={false}
          />
        </div>
        <div>
          <span className={`block text-xl font-bold brand-text transition-colors duration-300 ${headerActive ? 'text-gray-800' : 'text-white'}`}>
            {text.name}
          </span>
          <p className={`text-xs notary-subtext transition-colors duration-300 ${headerActive ? 'text-emerald-600' : 'text-emerald-200'}`}>
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
              href={getHref(link.href)}
              className={`font-medium transition-colors hover:text-emerald-500 whitespace-nowrap text-xs xl:text-sm link-text duration-300 ${
                headerActive ? 'text-gray-700' : 'text-white'
              } ${([text.notary_role, text.procedures, text.news, text.faq, text.useful_links] as string[]).includes(link.label) ? 'hidden xl:block' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={getHref('/#booking-form')}
            className={`font-medium transition-colors hover:text-emerald-500 whitespace-nowrap text-xs xl:text-sm link-text duration-300 ${
              headerActive ? 'text-gray-700' : 'text-white'
            }`}
          >
            {text.book}
          </Link>
        </nav>
      </div>
    </>
  );
}
