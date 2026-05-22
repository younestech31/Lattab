'use client';

import React, { useState, useMemo } from 'react';
import { Language, t } from '@/lib/i18n/translations';
import { USEFUL_LINKS_CATEGORIES } from '@/lib/data/usefulLinks';
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
  ExternalLink,
  Search,
  X
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

interface PortalsDirectoryProps {
  lang: Language;
}

export default function PortalsDirectory({ lang }: PortalsDirectoryProps) {
  const isRtl = lang === 'ar';
  
  // States for search and active category filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const opensNewTabLabel = t(lang, 'usefulLinks', 'opens_new_tab');
  const externalLinkLabel = t(lang, 'usefulLinks', 'external_link');

  // Translations specifically for the interactive search directory
  const uiTranslations = {
    ar: {
      searchPlaceholder: 'ابحث عن بوابات رسمية (مثال: سجل تجاري، ضرائب، مسح)...',
      searchLabel: 'البحث في الدليل المرجعي:',
      tabAll: 'جميع القطاعات',
      noResults: 'لم يتم العثور على أي بوابة تطابق معايير البحث الخاصة بك.',
      clearBtn: 'مسح التصفية',
      showingTitle: 'عرض النتائج المتاحة حسب المعايير',
      categoriesLabel: 'تصفية حسب القطاع والنشاط:',
      tagsLabel: 'الكلمات الدالة الرئيسية:'
    },
    fr: {
      searchPlaceholder: 'Rechercher un portail (ex: registre du commerce, impôts, cadastre)...',
      searchLabel: 'Rechercher dans l\'annuaire :',
      tabAll: 'Tous les secteurs',
      noResults: 'Aucun portail officiel ne correspond à vos critères de recherche.',
      clearBtn: 'Réinitialiser les filtres',
      showingTitle: 'Résultats correspondants à votre recherche',
      categoriesLabel: 'Filtrer par secteur d\'activité :',
      tagsLabel: 'Mots-clés associés :'
    }
  }[lang];

  // Flat list of all links with safety and metadata included
  const allLinks = useMemo(() => {
    return USEFUL_LINKS_CATEGORIES.flatMap(cat => 
      cat.links.map(link => ({
        ...link,
        categoryId: cat.id,
        categoryNameAr: cat.ar.title,
        categoryNameFr: cat.fr.title
      }))
    );
  }, []);

  // Filter and search logic
  const filteredLinks = useMemo(() => {
    let result = allLinks;

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(link => link.categoryId === selectedCategory);
    }

    // Filter by Search Query (Case-insensitive search on labels, descriptions, and tags)
    if (searchQuery.trim()) {
      const normalizedQuery = searchQuery.toLowerCase().trim();
      result = result.filter(link => {
        const arMatch = link.ar.label.toLowerCase().includes(normalizedQuery) || 
                        link.ar.description.toLowerCase().includes(normalizedQuery);
        const frMatch = link.fr.label.toLowerCase().includes(normalizedQuery) || 
                        link.fr.description.toLowerCase().includes(normalizedQuery);
        const tagsMatch = link.tags.some(tag => tag.toLowerCase().includes(normalizedQuery));
        
        return arMatch || frMatch || tagsMatch;
      });
    }

    return result;
  }, [allLinks, selectedCategory, searchQuery]);

  // Handle clearing of input and category state reset
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Search & Statistics Box Header */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-6">
        <div className="relative">
          <label className="sr-only" htmlFor="directory-search">{uiTranslations.searchLabel}</label>
          <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            id="directory-search"
            type="text"
            className="w-full pl-11 pr-11 py-4 bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl text-gray-800 placeholder-gray-400 outline-none transition-all text-base md:text-lg ps-12 pe-12"
            placeholder={uiTranslations.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 end-0 pe-4 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              aria-label="Clear Search Input"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Categories Tab Bar */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {uiTranslations.categoriesLabel}
          </p>
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 whitespace-nowrap text-sm font-medium rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {uiTranslations.tabAll} ({allLinks.length})
            </button>
            {USEFUL_LINKS_CATEGORIES.map(cat => {
              const count = allLinks.filter(l => l.categoryId === cat.id).length;
              const title = lang === 'fr' ? cat.fr.title : cat.ar.title;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 whitespace-nowrap text-sm font-medium rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  }`}
                >
                  {title} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Directory Content Listing */}
      {filteredLinks.length > 0 ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-sm text-gray-500 px-1">
            <p>
              {isRtl ? (
                <>تم العثور على <strong>{filteredLinks.length}</strong> بوابة رسمية موافقة للبحث.</>
              ) : (
                <><strong>{filteredLinks.length}</strong> portails officiels correspondent à votre recherche.</>
              )}
            </p>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1 transition-colors"
              >
                {uiTranslations.clearBtn}
              </button>
            )}
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" id="portals-annuary-grid">
            {filteredLinks.map(link => {
              const IconComponent = IconMap[link.icon] || BookOpen;
              const linkData = lang === 'fr' ? link.fr : link.ar;
              const categoryName = lang === 'fr' ? link.categoryNameFr : link.categoryNameAr;

              return (
                <li key={link.id} className="group">
                  <div className="h-full bg-white border border-gray-100 hover:border-emerald-200 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Top bar with icon & category badge */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-emerald-100" aria-hidden="true">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 bg-gray-50 border border-gray-100 text-gray-500 rounded-full">
                          {categoryName}
                        </span>
                      </div>

                      {/* Main info text */}
                      <div className="space-y-2">
                        <h3 className="font-extrabold text-gray-900 text-xl leading-tight group-hover:text-emerald-700 transition-colors">
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
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {linkData.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom action indicators & tags */}
                    <div className="pt-6 mt-6 border-t border-gray-50 flex flex-wrap items-center justify-between gap-4">
                      {/* SEO tags listing context */}
                      <div className="flex flex-wrap gap-1 items-center max-w-[70%]">
                        <span className="text-xs text-gray-400 mr-1 rtl:ml-1 font-medium">{uiTranslations.tagsLabel}</span>
                        {link.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-[11px] font-mono font-medium px-2 py-0.5 bg-gray-50 text-gray-400 rounded-md border border-gray-100">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 px-3 py-1.5 rounded-full bg-emerald-50/50 hover:bg-emerald-50 hover:text-emerald-700 transition-all outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        aria-label={`${linkData.label} — ${opensNewTabLabel}`}
                      >
                        {externalLinkLabel}
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center max-w-lg mx-auto space-y-4 shadow-sm">
          <p className="text-gray-500 text-base md:text-lg">
            {uiTranslations.noResults}
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-full transition-colors shadow-lg shadow-emerald-600/10 outline-none"
          >
            {uiTranslations.clearBtn}
          </button>
        </div>
      )}
    </div>
  );
}
