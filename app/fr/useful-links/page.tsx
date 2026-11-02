import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import { Scale, Building2, Book, Landmark, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import WebPageSchema from '@/components/WebPageSchema';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import { USEFUL_LINKS, USEFUL_LINK_CATEGORIES } from '@/lib/data/usefulLinks';

export const revalidate = 86400; // 24h ISR static page

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'Sources et liens juridiques et administratifs utiles en Algérie fournis par l\'Office Notarial d\'Oran : Ministère de la Justice, Journal Officiel, Registre du Commerce et Fiscalité.';
  
  return {
    title: { absolute: 'Sources et Liens Administratifs et Juridiques Utiles | Notaire Oran' },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/fr/useful-links`,
      languages: {
        'ar-DZ': `${SITE_URL}/useful-links`,
        'fr-DZ': `${SITE_URL}/fr/useful-links`,
        'x-default': `${SITE_URL}/useful-links`,
      },
    },
    openGraph: {
      title: 'Liens et sources juridiques et administratifs utiles en Algérie | Office Notarial - Oran',
      description: desc,
      url: `${SITE_URL}/fr/useful-links`,
      siteName: 'Office Notarial - Oran',
      locale: 'fr_DZ',
      alternateLocale: ['ar_DZ'],
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Sources et Liens Administratifs et Juridiques Utiles | Notaire Oran',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sources et Liens Administratifs et Juridiques Utiles | Notaire Oran',
      description: desc,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const IconMap = {
  scale: Scale,
  building: Building2,
  book: Book,
  landmark: Landmark,
};

export default function UsefulLinksPageFR() {
  const lang = 'fr';

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        url={`${SITE_URL}/fr/useful-links`}
        name="Sources et Liens Administratifs et Juridiques Utiles | Notaire Oran"
        description="Sources et liens juridiques et administratifs utiles en Algérie fournis par l'Office Notarial d'Oran : Ministère de la Justice, Journal Officiel, Registre du Commerce et Fiscalité."
        breadcrumbs={[
          { name: "Accueil", item: `${SITE_URL}/fr` },
          { name: "Liens Utiles", item: `${SITE_URL}/fr/useful-links` }
        ]}
      />

      <div className="bg-gray-50 pb-20" dir="ltr">
        <UnifiedPageHeader
          lang={lang}
          badgeText="Annuaire des sources et liens officiels"
          badgeIcon={<Book className="w-4 h-4" />}
          eyebrow="Office Public Notarial"
          title="Liens et Sources Juridiques et Administratives"
          description="Votre guide institutionnel agréé pour accéder aux plateformes administratives, législatives et aux services publics officiels en République Algérienne."
          breadcrumbs={[
            { name: 'Accueil', href: '/fr' },
            { name: 'Liens Utiles' },
          ]}
        />

        <div className="container mx-auto px-4 max-w-5xl mt-8">
          {/* Information Warning - Law 06-02 Compliance */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl mb-12 flex flex-col sm:flex-row items-start gap-4 shadow-sm text-start">
            <div className="p-1.5 text-amber-600 bg-amber-100 rounded-lg flex-shrink-0 mt-0.5">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-amber-900 mb-2">Note Réglementaire Importante</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                Cet annuaire est partagé par l&apos;<strong>Office Notarial - Oran</strong> à des fins d&apos;orientation administrative générale. 
                Ces sites sont institutionnels et publics ; l&apos;office n&apos;en assure pas la gestion, et leur accès ne remplace pas l&apos;acte notarié officiel conformément à la loi 06-02.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6 md:p-12 space-y-16">
              {USEFUL_LINK_CATEGORIES.map((category) => {
                const CategoryIcon = IconMap[category.icon];
                const categoryLinks = USEFUL_LINKS.filter(link => link.category === category.id);
                
                if (categoryLinks.length === 0) return null;

                return (
                  <section key={category.id} className="text-start">
                    <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                      <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {category.title[lang]}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      {categoryLinks.map((link) => (
                        <div 
                          key={link.id} 
                          className="p-5 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-emerald-50/10 hover:border-emerald-100/60 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-5"
                        >
                          <div className="max-w-3xl">
                            <h3 className="text-base font-bold text-gray-950 mb-1.5">
                              {link.name[lang]}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {link.desc[lang]}
                            </p>
                          </div>

                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${link.name[lang]} - ouvre un nouvel onglet`}
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-xs transition-all shadow-sm hover:shadow hover:-translate-y-0.5 self-start md:self-auto shrink-0 min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                          >
                            <span>Visiter le site officiel</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 mb-4">
              L&apos;Office Public Notarial est sous la tutelle du Ministère de la Justice Algérien. Office Notarial - Oran - Notaire agréé près la Cour d&apos;Oran.
            </p>
            <Link
              href="/fr"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 rounded-lg px-2 py-1"
            >
              <span>Retour à l&apos;accueil de l&apos;office</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
