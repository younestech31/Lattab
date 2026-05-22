import React from 'react';
import Link from 'next/link';
import { 
  Language, 
  t 
} from '@/lib/i18n/translations';
import { 
  USEFUL_LINKS_CATEGORIES 
} from '@/lib/data/usefulLinks';
import {
  BookOpen,
  Scale,
  Calculator,
  Landmark,
  Map,
  Building2,
  TrendingUp,
  Store,
  Home,
  Building,
  FileSearch,
  ShieldCheck,
  UserCheck,
  Briefcase,
  ExternalLink
} from 'lucide-react';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Scale,
  Calculator,
  Landmark,
  Map,
  Building2,
  TrendingUp,
  Store,
  Home,
  Building,
  FileSearch,
  ShieldCheck,
  UserCheck,
  Briefcase
};

interface UsefulLinksProps {
  lang: Language;
  categoryIds?: string[];
  variant?: 'full' | 'compact';
}

export default function UsefulLinks({
  lang,
  categoryIds,
  variant = 'full',
}: UsefulLinksProps) {
  const isRtl = lang === 'ar';
  
  // Filter categories if specific ones are requested
  const filteredCategories = USEFUL_LINKS_CATEGORIES.filter(cat => 
    !categoryIds || categoryIds.includes(cat.id)
  );

  const opensNewTabLabel = t(lang, 'usefulLinks', 'opens_new_tab');
  const externalLinkLabel = t(lang, 'usefulLinks', 'external_link');

  if (variant === 'compact') {
    return (
      <div 
        dir={isRtl ? 'rtl' : 'ltr'} 
        className="space-y-4 text-left rtl:text-right"
        role="navigation" 
        aria-label={t(lang, 'usefulLinks', 'section_title')}
      >
        <h4 className="font-bold text-gray-900 mb-3 text-base">
          {t(lang, 'usefulLinks', 'section_title')}
        </h4>
        <ul className="space-y-2.5">
          {filteredCategories.flatMap(cat => cat.links).map(link => {
            const IconComponent = IconMap[link.icon] || BookOpen;
            const linkData = lang === 'fr' ? link.fr : link.ar;
            
            return (
              <li key={link.id} className="flex items-center gap-2">
                <IconComponent className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  hrefLang="fr"
                  className="text-sm text-gray-600 hover:text-emerald-600 hover:underline transition-colors flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-0.5 outline-none"
                  aria-label={`${linkData.label} — ${opensNewTabLabel}`}
                >
                  <span className="line-clamp-1">{linkData.label}</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 shrink-0" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <section 
      id="useful-links" 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="py-16 bg-gray-50 border-t border-gray-100"
      role="navigation" 
      aria-label={`${t(lang, 'usefulLinks', 'section_title')} / Liens utiles`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {t(lang, 'usefulLinks', 'section_title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(lang, 'usefulLinks', 'section_subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map(cat => {
            const catTitle = lang === 'fr' ? cat.fr.title : cat.ar.title;
            const catSubtitle = lang === 'fr' ? cat.fr.subtitle : cat.ar.subtitle;
            
            return (
              <div key={cat.id} className="space-y-6">
                {/* Category Header with indicator border */}
                <div className={`p-1 border-emerald-500 rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 ltr:border-r-0 pl-3 pr-3`}>
                  <h3 className="text-xl font-bold text-gray-900">
                    {catTitle}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {catSubtitle}
                  </p>
                </div>

                {/* Grid of Links in Category */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.links.map(link => {
                    const IconComponent = IconMap[link.icon] || BookOpen;
                    const linkData = lang === 'fr' ? link.fr : link.ar;

                    return (
                      <li key={link.id}>
                        <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                          <div className="space-y-4">
                            {/* Icon & External indicator */}
                            <div className="flex items-center justify-between">
                              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center transition-colors group-hover:bg-emerald-100" aria-hidden="true">
                                <IconComponent className="w-5 h-5" />
                              </div>
                              <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100 flex items-center gap-1 font-mono">
                                {externalLinkLabel}
                                <ExternalLink className="w-3 h-3" aria-hidden="true" />
                              </span>
                            </div>

                            {/* Label & Description */}
                            <div className="space-y-2">
                              <h4 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-emerald-700 transition-colors">
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  hrefLang="fr"
                                  className="focus:outline-none focus:underline"
                                  aria-label={`${linkData.label} — ${opensNewTabLabel}`}
                                >
                                  {linkData.label}
                                </a>
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {linkData.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA to whole directory and search */}
        <div className="mt-14 text-center">
          <Link
            href={lang === 'fr' ? '/fr/liens-utiles' : '/liens-utiles'}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 text-base md:text-lg focus-visible:ring-4 focus-visible:ring-emerald-500/20 outline-none"
          >
            {lang === 'fr' 
              ? 'Consulter l\'annuaire complet & interactif' 
              : 'الولوج إلى الدليل التفاعلي الكامل للبوابات'}
            <svg 
              className={`w-5 h-5 transform transition-transform ${isRtl ? 'rotate-180 hover:-translate-x-1' : 'hover:translate-x-1'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
