import Link from 'next/link';
import { Language, translations } from '@/lib/i18n/translations';
import { SERVICE_TO_BLOG_MAP } from '@/lib/data/serviceBlogMap';
import { Home, FileText, Users, Building2, Lock, Heart, Scale } from 'lucide-react';

// Keys must match the `title` field from translations exactly
const SERVICE_ICON_MAP: Record<string, React.ReactNode> = {
  'عقود البيع والشراء العقارية': <Home className="w-8 h-8" />,
  'Actes de vente immobilière':   <Home className="w-8 h-8" />,
  'عقود الزواج والاتفاق المالي': <Heart className="w-8 h-8" />,
  'Contrats de mariage':          <Heart className="w-8 h-8" />,
  'الوكالات والتفويضات':         <Users className="w-8 h-8" />,
  'Procurations et mandats':      <Users className="w-8 h-8" />,
  'تأسيس الشركات والمؤسسات':    <Building2 className="w-8 h-8" />,
  'Constitution de sociétés':     <Building2 className="w-8 h-8" />,
  'الرهن والتأمينات':            <Lock className="w-8 h-8" />,
  'Hypothèques et assurances':    <Lock className="w-8 h-8" />,
  'الفريضة والتركات':           <Scale className="w-8 h-8" />,
  'Successions et héritages':     <Scale className="w-8 h-8" />,
};

const SERVICE_TO_SLUG_MAP: Record<string, string> = {
  // Arabic
  'عقود البيع والشراء العقارية': 'vente-immobiliere',
  'عقود الزواج والاتفاق المالي': 'contrat-mariage',
  'الوكالات والتفويضات': 'procuration',
  'تأسيس الشركات والمؤسسات': 'creation-societe',
  'الرهن والتأمينات': 'hypotheque',
  'الفريضة والتركات': 'succession',
  
  // French
  'Actes de vente immobilière': 'vente-immobiliere',
  'Contrats de mariage': 'contrat-mariage',
  'Procurations et mandats': 'procuration',
  'Constitution de sociétés': 'creation-societe',
  'Hypothèques et assurances': 'hypotheque',
  'Successions et héritages': 'succession',
};

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const content = translations[lang].services;

  return (
    <section id="services" className="scroll-mt-20 md:scroll-mt-24 py-12 bg-gray-50" dir={lang === 'fr' ? 'ltr' : 'rtl'}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {content.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.heading}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
            >
              {/* Icon — Keeping original icons hardcoded as they were in Services.tsx */}
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {SERVICE_ICON_MAP[service.title] ?? <FileText className="w-8 h-8" />}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Service Info Link */}
              <div className="border-t border-gray-100 mt-4 pt-4 flex flex-col gap-2">
                {SERVICE_TO_SLUG_MAP[service.title] && (
                  <Link
                    href={lang === 'ar' ? `/services/${SERVICE_TO_SLUG_MAP[service.title]}` : `/fr/services/${SERVICE_TO_SLUG_MAP[service.title]}`}
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-bold flex items-center justify-center sm:justify-start gap-1 transition-colors"
                  >
                    {lang === 'ar' ? 'معرفة المزيد ←' : 'En savoir plus →'}
                  </Link>
                )}
                {/* Internal Blog Link - Optional secondary link if mapping exists */}
                {SERVICE_TO_BLOG_MAP[service.title] && (
                  <Link
                    href={lang === 'ar' ? `/blog/${SERVICE_TO_BLOG_MAP[service.title]}` : `/fr/blog/${SERVICE_TO_BLOG_MAP[service.title]}`}
                    className="text-gray-400 hover:text-emerald-600 text-[10px] font-medium flex items-center justify-center sm:justify-start gap-1 transition-colors"
                  >
                    {lang === 'ar' ? 'مقالات ذات صلة' : 'Articles connexes'}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {content.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};
