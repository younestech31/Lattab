import Image from 'next/image';
import Link from 'next/link';
import { Language, translations } from '@/lib/i18n/translations';
import { OFFICE_INFO } from '@/lib/config';
import ObfuscatedPhone from './ui/ObfuscatedPhone';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const isRTL = lang === 'ar';

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
      if (href === '/terms-privacy') {
        return '/fr/terms-privacy';
      }
    }
    return href;
  };

  const quickLinks = [
    { href: '/#home', label: translations[lang].nav.home },
    { href: '/#services', label: translations[lang].nav.services },
    { href: '/calculateur-prix-referentiel', label: translations[lang].nav.calculator },
    { href: '/blog', label: translations[lang].nav.blog },
    { href: '/useful-links', label: translations[lang].nav.useful_links },
    { href: '/#procedures', label: translations[lang].nav.procedures },
    { href: '/#faq', label: translations[lang].nav.faq },
    { href: '/#appointment', label: translations[lang].nav.contact },
    { href: '/terms-privacy', label: translations[lang].footer.terms_link },
  ];

  const services = lang === 'ar' ? [
    'عقود البيع والشراء',
    'عقود الإيجار',
    'الوكالات',
    'عقود الزواج',
    'تأسيس الشركات',
    'الرهن والتأمين',
    'التصريحات والمصادقات',
    'حساب السعر المرجعي',
  ] : [
    'Actes de vente',
    'Actes de location',
    'Procurations et mandats',
    'Actes de mariage',
    'Constitution de sociétés',
    'Hypothèques et assurances',
    'Certification de signature',
    'Calcul de prix de référence',
  ];

  return (
    <footer 
      className="bg-gray-900 text-white relative border-t border-gray-800 overflow-hidden" 
      id="footer"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.05),transparent_50%)]" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Link href={getHref('/#home')} className="flex items-center gap-3">
                <div className="w-16 h-16 bg-white rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <Image 
                    src="/logo-small.webp" 
                    alt={translations[lang].hero.title} 
                    width={64} 
                    height={64}
                    className="w-full h-full object-contain"
                    quality={75}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{translations[lang].hero.title}</h3>
                  <p className="text-gray-400 text-sm">{translations[lang].hero.subtitle}</p>
                </div>
              </Link>
            </div>
            
            {/* Institutional Information */}
            <div className="mb-6" dir={lang === 'fr' ? 'ltr' : 'rtl'}>
              <h3 className="font-bold text-white text-sm mb-3">
                {lang === 'ar' ? 'المعلومات المؤسسية' : 'Informations institutionnelles'}
              </h3>
              <dl className="space-y-1.5 text-emerald-200 text-xs">
                <div>
                  <dt className="sr-only">{lang === 'ar' ? 'الصفة الرسمية' : 'Qualité officielle'}</dt>
                  <dd>{OFFICE_INFO.officialDesignation[lang]}</dd>
                </div>
                <div>
                  <dt className="sr-only">{lang === 'ar' ? 'الاختصاص القضائي' : 'Juridiction'}</dt>
                  <dd>{OFFICE_INFO.title[lang]}</dd>
                </div>
                <div>
                  <dt className="sr-only">{lang === 'ar' ? 'الإطار القانوني' : 'Cadre légal'}</dt>
                  <dd className="text-emerald-300/70 text-[11px]">{OFFICE_INFO.legalBasis[lang]}</dd>
                </div>
              </dl>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/213562296981"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors tooltip-trigger relative group"
                title={isRTL ? 'تواصل عبر واتساب' : 'Contactez-nous sur WhatsApp'}
              >
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414zM12.004 0C5.374 0 0 5.373 0 12.001c0 2.112.547 4.178 1.588 6.003L.057 24l6.162-1.616a11.953 11.953 0 005.785 1.517c6.629 0 12.002-5.373 12.002-12.001C24.006 5.373 18.632 0 12.004 0zM12.004 21.902c-1.934 0-3.83-.518-5.482-1.499l-.393-.233-3.674.963.98-3.582-.255-.406a9.865 9.865 0 01-1.513-5.144c0-5.457 4.441-9.898 9.897-9.898 5.457 0 9.899 4.441 9.899 9.898 0 5.458-4.442 9.899-9.899 9.899z"/>
                </svg>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {isRTL ? 'تواصل عبر واتساب' : 'Contactez-nous sur WhatsApp'}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-2 border-transparent border-t-gray-800" />
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{translations[lang].footer.quick_links_title}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={getHref(link.href)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <svg 
                      className="w-4 h-4 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      style={{ transform: isRTL ? 'none' : 'scaleX(-1)' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">{translations[lang].footer.services_title}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={getHref('/#services')}
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-bold mb-4">{translations[lang].footer.tools_title}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={getHref('/calculateur-prix-referentiel')}
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 11h.01M12 14h.01M15 11h.01M12 7h.01M15 7h.01M15 14h.01M9 11h.01M12 17h.01M15 17h.01" />
                  </svg>
                  {translations[lang].nav.calculator}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">{translations[lang].footer.contact_title}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 text-sm">
                  <a 
                    href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {lang === 'ar' ? (
                      <>
                        حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768
                        <br />
                        العقيد لطفي، وهران
                      </>
                    ) : (
                      <>
                        Cité 557 Logements, Immeuble D24, 1er Étage, Appt 768
                        <br />
                        Akid Lotfi, Oran
                      </>
                    )}
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-gray-400 text-sm space-y-1 font-mono" dir="ltr">
                  <div>
                    <ObfuscatedPhone number="+213562296981" display="+213 562 29 69 81" lang={lang} className="hover:text-emerald-400 transition-colors" />
                    <span className="text-gray-500 text-xs ms-2">{translations[lang].contact.info.phone_office}</span>
                  </div>
                  <div>
                    <ObfuscatedPhone number="+213558440001" display="+213 558 44 00 01" lang={lang} className="hover:text-emerald-400 transition-colors" />
                    <span className="text-gray-500 text-xs ms-2">{translations[lang].contact.info.phone_support}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 text-sm font-mono">
                  <a href="mailto:maitrelattabmohamed@gmail.com" className="hover:text-emerald-400 transition-colors">maitrelattabmohamed@gmail.com</a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-400 text-sm">
                  {translations[lang].contact.info.working_hours}: {translations[lang].contact.info.working_hours_details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-400 text-sm mb-6">
            <p>
              {isRTL 
                ? 'هذا الموقع إعلامي بحت ولا يُعد دعوة للتعامل أو إعلاناً تجارياً. الموثق ضابط عمومي معيَّن بمرسوم رئاسي.'
                : 'Ce site est purement informatif et ne constitue ni une sollicitation commerciale ni une publicité. Le notaire est un officier public nommé par décret présidentiel.'
              }
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-right">
              © {new Date().getFullYear()} {translations[lang].footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <Link href={getHref('/terms-privacy')} className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
                {translations[lang].footer.privacy_link}
              </Link>
              <Link href={getHref('/terms-privacy')} className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
                {translations[lang].footer.terms_link}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
