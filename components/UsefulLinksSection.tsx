'use client';

// ⚠️ Law 06-02 Compliance — Institutional informational directories only. 
// No self-praise, conversion flows, or promotional call-to-actions.

import React from 'react';
import Link from 'next/link';
import { Scale, FileText, Building2, Landmark } from 'lucide-react';
import { DirectionalArrow } from '@/components/ui/DirectionalArrow';

interface UsefulLinksSectionProps {
  lang: 'ar' | 'fr';
}

export default function UsefulLinksSection({ lang }: UsefulLinksSectionProps) {
  const isAr = lang === 'ar';

  const links = [
    { 
      name: isAr ? 'وزارة العدل الجزائرية' : 'Ministère de la Justice', 
      desc: isAr ? 'بوابة العدالة والتشريعات الوطنية ومتابعة الملفات القضائية' : 'Portail de la justice, législation nationale et suivi des affaires',
      url: 'https://www.mjustice.dz',
      icon: <Scale className="w-8 h-8" />
    },
    { 
      name: isAr ? 'الأمانة العامة للحكومة - الجريدة الرسمية' : 'Journal Officiel (JORADP)', 
      desc: isAr ? 'تحميل ومراجعة القوانين والمراسيم التنفيذية والقرارات الحكومية' : 'Visualisation et décrets, lois et publications officielles de la république',
      url: 'https://www.joradp.dz',
      icon: <FileText className="w-8 h-8" />
    },
    { 
      name: isAr ? 'المركز الوطني للسجل التجاري - سجلكوم' : 'Registre du Commerce (CNRC)', 
      desc: isAr ? 'التحقق الاقتصادي وتأسيس الشركات التجارية والبحث عن المتعاملين' : 'Bande de données, recherche de dénominations et de registre commercial',
      url: 'https://sidjilcom.cnrc.dz',
      icon: <Building2 className="w-8 h-8" />
    },
    { 
      name: isAr ? 'الغرفة الوطنية للموثقين' : 'Chambre Nationale des Notaires', 
      desc: isAr ? 'الهيئة التنظيمية الرسمية للتأطير المهني للموثقين في الجزائر' : 'Organisme de régulation et de déontologie notariale en Algérie',
      url: 'https://www.cnn.dz',
      icon: <Landmark className="w-8 h-8" />
    },
  ];

  const t = {
    ar: {
      badge: 'روابط مرجعية وإدارية',
      title: 'روابط إدارية وقانونية مفيدة',
      subtitle: 'دليلك التوثيقي المؤسساتي المعتمد للوصول المباشر إلى منصات الإدارة والتشريع والخدمات العمومية في الجزائر.',
      moreLinks: 'عرض الدليل الكامل للمصادر والروابط المفيدة',
      pageUrl: '/useful-links'
    },
    fr: {
      badge: 'Liens Institutionnels',
      title: 'Liens et Institutions Utiles',
      subtitle: 'Accédez directement aux portails des administrations publiques, législatives et réglementaires de la République Algérienne.',
      moreLinks: 'Consulter l\'annuaire complet des liens',
      pageUrl: '/fr/useful-links'
    }
  }[lang];

  return (
    <section 
      id="useful-links-section" 
      className="scroll-mt-20 md:scroll-mt-24 py-12 bg-gray-50 border-t border-gray-100" 
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-start"
            >
              <div>
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-snug group-hover:text-emerald-600 transition-colors duration-300">
                  {link.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {link.desc}
                </p>
              </div>
              
              <div className="border-t border-gray-100 mt-4 pt-4 flex items-center justify-between text-xs font-semibold text-gray-500 group-hover:text-emerald-600 transition-colors duration-300">
                <span>{isAr ? 'زيارة الموقع الرسمي' : 'Visiter le site officiel'}</span>
                <DirectionalArrow lang={lang} className="w-4 h-4" rtlClassName="group-hover:-translate-x-1" ltrClassName="group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>

        {/* Link to dedicated detailed subpage */}
        <div className="mt-12 text-center">
          <Link 
            href={t.pageUrl} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-200 text-emerald-700 font-bold rounded-xl text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
          >
            <span>{t.moreLinks}</span>
            <DirectionalArrow 
              lang={lang} 
              className="w-4 h-4 text-emerald-700 font-bold" 
              rtlClassName="group-hover:-translate-x-1" 
              ltrClassName="group-hover:translate-x-1" 
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
