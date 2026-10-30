import Link from 'next/link';
import { ServiceData } from '@/lib/data/servicesData';
import { Language } from '@/lib/i18n/translations';
import { SITE_URL } from '@/lib/config';
import { JsonLdScript } from '@/components/schema';
import { blogPosts, frBlogPosts } from '@/lib/data/blog';
import PhoneLink from '@/components/ui/PhoneLink';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import { Scale, FileText, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 text-gray-800" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar-DZ' : 'fr-DZ'}>
      <JsonLdScript schema={breadcrumbSchema} />
      <JsonLdScript schema={howToSchema} />

      {/* Hero / Header Section */}
      <UnifiedPageHeader
        lang={lang}
        badgeText={content.title}
        badgeIcon={<Scale className="w-4 h-4" />}
        eyebrow={isAr ? 'الديوان العمومي للتوثيق' : 'Office Notarial'}
        title={content.h1}
        description={content.subtitle}
        backLink={{
          href: isAr ? '/services' : '/fr/services',
          label: isAr ? 'العودة لجميع الخدمات التوثيقية' : 'Retour à tous les services',
        }}
        breadcrumbs={[
          { name: isAr ? 'الرئيسية' : 'Accueil', href: homeUrl },
          { name: isAr ? 'الخدمات' : 'Services', href: isAr ? '/services' : '/fr/services' },
          { name: content.title },
        ]}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
          <Link
            href={contactUrl}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md text-sm md:text-base flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {isAr ? 'معلومات الاتصال والمواعيد الإدارية' : 'Coordonnées et démarches'}
          </Link>
          <PhoneLink
            type="office"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-semibold transition-all text-sm md:text-base flex items-center gap-2"
            icon={
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
          />
        </div>
      </UnifiedPageHeader>

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
              <li key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
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
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {isAr ? 'الاختصاص القضائي والتنظيمي — وهران' : 'Compétence territoriale — Oran & Tribunal de Flaussen'}
          </h2>
          <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
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
              <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links & Tools */}
        <section className="bg-emerald-900 text-white rounded-2xl p-8 space-y-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-800 pb-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                {isAr ? 'مقالات وأدلة قانونية ذات صلة' : 'Guides et articles juridiques connexes'}
              </h2>
              <p className="text-emerald-200 text-sm">
                {isAr ? 'اطلع على تحليلاتنا ومقالات المدونة المحدثة' : 'Consultez les articles spécialisés de notre blog juridique'}
              </p>
            </div>
            {service.isPropertyRelated && (
              <Link
                href={calcUrl}
                className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-2 self-start md:self-auto shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 11h.01M12 14h.01M15 11h.01M12 7h.01M15 7h.01M15 14h.01M9 11h.01M12 17h.01M15 17h.01" />
                </svg>
                {isAr ? 'حاسبة السعر المرجعي العقاري' : 'Calculateur de prix référentiel'}
              </Link>
            )}
          </div>

          {service.slug === 'vente-immobiliere' && (
            <div className="bg-emerald-950/70 border border-emerald-700/60 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-amber-300 text-xs font-bold flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>{isAr ? 'الالتزام الجبائي للتصريح بفائض القيمة (سلسلة ج رقم 17)' : 'Déclaration fiscale de plus-value (Série G N° 17)'}</span>
                </div>
                <p className="text-emerald-100 text-xs leading-relaxed max-w-2xl">
                  {isAr
                    ? 'المادة 80 مكرر من قانون الضرائب المباشرة: يلتزم البائع بإيداع تصريح فائض القيمة ج 17 خلال 30 يوماً من تاريخ إبرام العقد التوثيقي لدى قباضة الضرائب لموقع العقار.'
                    : 'En vertu de l\'article 80 bis du CIDTA, le cédant est tenu de souscrire la déclaration Série G N° 17 auprès de la recette des impôts dans les 30 jours suivant la passation de l\'acte.'}
                </p>
              </div>
              <Link
                href={isAr ? '/formulaires/gn17' : '/fr/formulaires/gn17'}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto"
              >
                <span>{isAr ? 'تعبئة استمارة ج 17' : 'Remplir l\'imprimé G N° 17'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            {relatedArticles.length > 0 ? (
              relatedArticles.slice(0, 2).map((art, idx) => (
                <Link
                  key={idx}
                  href={isAr ? `/blog/${art.slug}` : `/fr/blog/${art.slug}`}
                  className="bg-emerald-800/60 hover:bg-emerald-800 p-5 rounded-xl border border-emerald-700/60 transition group"
                >
                  <p className="text-amber-300 text-xs font-semibold mb-2">
                    {art.category || (isAr ? 'مقال قانوني' : 'Article juridique')}
                  </p>
                  <h3 className="text-white font-bold text-base group-hover:text-amber-200 transition-colors line-clamp-2 mb-2">
                    {art.title}
                  </h3>
                  <p className="text-emerald-100 text-xs line-clamp-2 leading-relaxed">
                    {art.description}
                  </p>
                </Link>
              ))
            ) : (
              <Link
                href={isAr ? '/blog' : '/fr/blog'}
                className="bg-emerald-800/60 p-5 rounded-xl border border-emerald-700/60 hover:bg-emerald-800 transition text-sm text-emerald-100"
              >
                {isAr ? 'تصفح جميع مقالات المدونة القانونية' : 'Consulter tous les articles du blog juridique'}
              </Link>
            )}
          </div>
        </section>

        {/* Institutional Office Information */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-gray-800">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-start">
              <h2 className="text-xl font-bold text-gray-800">
                {isAr ? 'البيانات الرسمية وأوقات الاستقبال' : 'Informations officielles et réception'}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {isAr
                  ? 'الديوان العمومي للتوثيق — حي العقيد لطفي، وهران. أوقات الاستقبال: من الأحد إلى الخميس، من 08:30 إلى 12:00 ومن 13:30 إلى 16:00.'
                  : 'Office Notarial — Quartier Akid Lotfi, Oran. Réception du public : du dimanche au jeudi, de 08h30 à 12h00 et de 13h30 à 16h00.'}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shrink-0">
              <Link
                href={contactUrl}
                className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl font-bold transition text-sm flex items-center gap-2 shadow-sm"
              >
                {isAr ? 'معلومات الاتصال بالديوان' : 'Coordonnées de l\'office'}
              </Link>
              <PhoneLink
                type="office"
                className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-5 py-2.5 rounded-xl font-medium transition text-sm flex items-center gap-2"
                icon={
                  <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
