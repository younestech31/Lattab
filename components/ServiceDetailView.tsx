import Link from 'next/link';
import { ServiceData } from '@/lib/data/servicesData';
import { Language } from '@/lib/i18n/translations';
import { SITE_URL } from '@/lib/config';
import { JsonLdScript } from '@/components/schema';
import { blogPosts, frBlogPosts } from '@/lib/data/blog';

interface ServiceDetailViewProps {
  service: ServiceData;
  lang: Language;
}

export default function ServiceDetailView({ service, lang }: ServiceDetailViewProps) {
  const isAr = lang === 'ar';
  const content = isAr ? service.ar : service.fr;
  const pageUrl = isAr ? `${SITE_URL}/services/${service.slug}` : `${SITE_URL}/fr/services/${service.slug}`;
  const homeUrl = isAr ? '/' : '/fr';
  const contactUrl = isAr ? '/contact' : '/fr/contact';
  const calcUrl = isAr ? '/calculateur-prix-referentiel' : '/fr/calculateur-prix-referentiel';

  // Retrieve related blog posts
  const posts = isAr ? blogPosts : frBlogPosts;
  const relatedSlugs = isAr ? service.relatedBlogSlugs.ar : service.relatedBlogSlugs.fr;
  const relatedArticles = posts.filter(art => relatedSlugs.includes(art.slug));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isAr ? 'الرئيسية' : 'Accueil',
        item: isAr ? SITE_URL : `${SITE_URL}/fr`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isAr ? 'الخدمات التوثيقية' : 'Services notariaux',
        item: isAr ? `${SITE_URL}/#services` : `${SITE_URL}/fr#services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: content.title,
        item: pageUrl,
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: content.h1,
    description: content.metaDescription,
    step: content.steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.name,
      text: s.text,
      url: `${pageUrl}#step-${idx + 1}`,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar-DZ' : 'fr-DZ'}>
      <JsonLdScript schema={breadcrumbSchema} />
      <JsonLdScript schema={howToSchema} />

      {/* Hero / Header Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 text-white pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-emerald-200">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href={homeUrl} className="hover:text-white transition-colors underline-offset-4 hover:underline">
                  {isAr ? 'الرئيسية' : 'Accueil'}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`${homeUrl}#services`} className="hover:text-white transition-colors underline-offset-4 hover:underline">
                  {isAr ? 'الخدمات' : 'Services'}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">
                {content.title}
              </li>
            </ol>
          </nav>

          {/* Single H1 on page */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {content.h1}
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed mb-8 max-w-3xl">
            {content.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href={contactUrl}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-500/25 text-sm md:text-base flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {isAr ? 'حجز موعد بالمكتب' : 'Prendre rendez-vous'}
            </Link>
            <a
              href="https://wa.me/213562296981"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-semibold transition-all text-sm md:text-base flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-emerald-400 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414zM12.004 0C5.374 0 0 5.373 0 12.001c0 2.112.547 4.178 1.588 6.003L.057 24l6.162-1.616a11.953 11.953 0 005.785 1.517c6.629 0 12.002-5.373 12.002-12.001C24.006 5.373 18.632 0 12.004 0zM12.004 21.902c-1.934 0-3.83-.518-5.482-1.499l-.393-.233-3.674.963.98-3.582-.255-.406a9.865 9.865 0 01-1.513-5.144c0-5.457 4.441-9.898 9.897-9.898 5.457 0 9.899 4.441 9.899 9.898 0 5.458-4.442 9.899-9.899 9.899z" />
              </svg>
              {isAr ? 'استفسار عبر واتساب' : 'WhatsApp direct'}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Target Audience */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-2.5 h-7 bg-emerald-600 rounded-full" />
            {isAr ? 'لمن تتوجه هذه الخدمة التوثيقية؟' : 'À qui s\'adresse ce service ?'}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {content.targetAudience.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/60">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Required Documents */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-2.5 h-7 bg-emerald-600 rounded-full" />
            {isAr ? 'الملف والوثائق المطلوبة' : 'Dossier et pièces à fournir'}
          </h2>
          <div className="space-y-6">
            {content.requiredDocuments.map((cat, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-bold text-emerald-800 mb-3">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.items.map((doc, docIdx) => (
                    <li key={docIdx} className="flex items-start gap-2.5 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Procedural Steps (HowTo) */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm" id="procedure-steps">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-2.5 h-7 bg-emerald-600 rounded-full" />
            {isAr ? 'مراحل وإجراءات التوثيق' : 'Étapes et déroulement de la procédure'}
          </h2>
          <div className="relative border-l-2 border-emerald-200 rtl:border-l-0 rtl:border-r-2 ml-4 rtl:ml-0 rtl:mr-4 space-y-8 py-2">
            {content.steps.map((step, idx) => (
              <div key={idx} id={`step-${idx + 1}`} className="relative pl-6 rtl:pl-0 rtl:pr-6">
                <span className="absolute -left-3.5 rtl:left-auto rtl:-right-3.5 top-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* In-depth legal analysis */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <span className="w-2.5 h-7 bg-emerald-600 rounded-full" />
            {isAr ? 'الإطار القانوني والأبعاد التوثيقية' : 'Cadre légal et perspectives juridiques'}
          </h2>
          {content.inDepthContent.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800">{section.heading}</h3>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-gray-600 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* Jurisdiction / Oran Notes */}
        <section className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-xl font-bold text-emerald-950 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-emerald-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {isAr ? 'الاختصاص القضائي والتنظيمي — وهران' : 'Compétence territoriale — Oran & Tribunal de Flaussen'}
          </h2>
          <div className="space-y-3 text-emerald-900 text-sm leading-relaxed">
            {content.jurisdictionNotes.map((note, idx) => (
              <p key={idx}>{note}</p>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-2.5 h-7 bg-emerald-600 rounded-full" />
            {isAr ? 'أسئلة شائعة' : 'Questions fréquentes'}
          </h2>
          <div className="space-y-4">
            {content.faq.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links & Tools */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                {isAr ? 'مقالات وأدلة قانونية ذات صلة' : 'Guides et articles juridiques connexes'}
              </h2>
              <p className="text-gray-400 text-sm">
                {isAr ? 'اطلع على تحليلاتنا ومقالات المدونة المحدثة' : 'Consultez les articles spécialisés de notre blog juridique'}
              </p>
            </div>
            {service.isPropertyRelated && (
              <Link
                href={calcUrl}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-2 self-start md:self-auto"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 11h.01M12 14h.01M15 11h.01M12 7h.01M15 7h.01M15 14h.01M9 11h.01M12 17h.01M15 17h.01" />
                </svg>
                {isAr ? 'حاسبة السعر المرجعي العقاري' : 'Calculateur de prix référentiel'}
              </Link>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {relatedArticles.length > 0 ? (
              relatedArticles.slice(0, 2).map((art, idx) => (
                <Link
                  key={idx}
                  href={isAr ? `/blog/${art.slug}` : `/fr/blog/${art.slug}`}
                  className="bg-gray-800/80 hover:bg-gray-800 p-5 rounded-xl border border-gray-700/60 transition group"
                >
                  <p className="text-emerald-400 text-xs font-semibold mb-2">
                    {art.category || (isAr ? 'مقال قانوني' : 'Article juridique')}
                  </p>
                  <h3 className="text-white font-bold text-base group-hover:text-emerald-300 transition-colors line-clamp-2 mb-2">
                    {art.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                    {art.description}
                  </p>
                </Link>
              ))
            ) : (
              <Link
                href={isAr ? '/blog' : '/fr/blog'}
                className="bg-gray-800 p-5 rounded-xl border border-gray-700/60 hover:bg-gray-750 transition text-sm text-gray-300"
              >
                {isAr ? 'تصفح جميع مقالات المدونة القانونية' : 'Consulter tous les articles du blog juridique'}
              </Link>
            )}
          </div>
        </section>

        {/* Bottom Booking CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 text-white text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            {isAr ? 'هل تحتاج إلى استشارة أو توثيق رسمي بوهران؟' : 'Besoin d\'un conseil ou d\'un acte notarié à Oran ?'}
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {isAr
              ? 'مكتب الأستاذ لعطب محمد بحي العقيد لطفي يستقبلكم يومياً من الأحد إلى الخميس لدراسة ملفاتكم وإنجاز معاملاتكم التوثيقية بأعلى معايير الدقة والأمان القانوني.'
              : 'L\'office notarial de Maître Lattab Mohamed à Akid Lotfi vous accueille du dimanche au jeudi pour instruire vos dossiers avec diligence et sécurité juridique.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href={contactUrl}
              className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-3 rounded-xl font-bold transition shadow-lg text-sm md:text-base"
            >
              {isAr ? 'الاتصال وحجز موعد' : 'Prendre rendez-vous'}
            </Link>
            <a
              href="tel:+213562296981"
              className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-3 rounded-xl font-semibold transition text-sm md:text-base flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+213 562 29 69 81</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
