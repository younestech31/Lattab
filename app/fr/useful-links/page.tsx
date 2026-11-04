import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import { Scale, Building2, Book, Landmark, ExternalLink, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import WebPageSchema from '@/components/WebPageSchema';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import { USEFUL_LINKS, USEFUL_LINK_CATEGORIES } from '@/lib/data/usefulLinks';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'Annuaire pratique des sources officielles algériennes : justice, législation, registre du commerce, investissement, fiscalité, immobilier et services administratifs.';
  
  return {
    title: { absolute: 'Liens officiels et juridiques utiles en Algérie | Notaire Oran' },
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
      title: 'Annuaire des liens officiels, juridiques et administratifs en Algérie | Office Notarial - Oran',
      description: desc,
      url: `${SITE_URL}/fr/useful-links`,
      siteName: 'Office Public Notarial - Oran',
      locale: 'fr_DZ',
      alternateLocale: ['ar_DZ'],
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Annuaire des liens officiels, juridiques et administratifs en Algérie',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Liens officiels et juridiques utiles en Algérie | Notaire Oran',
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

function getLinkHost(url: string) {
  return new URL(url).hostname.replace(/^www\./, '');
}

export default function UsefulLinksPageFR() {
  const lang = 'fr';
  const reviewedDate = '4 novembre 2026';

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        url={`${SITE_URL}/fr/useful-links`}
        name="Liens officiels et juridiques utiles en Algérie | Notaire Oran"
        description="Annuaire des sources officielles algériennes en matière de justice, législation, commerce, investissement, fiscalité, immobilier et démarches administratives."
        breadcrumbs={[
          { name: 'Accueil', item: `${SITE_URL}/fr` },
          { name: 'Liens utiles', item: `${SITE_URL}/fr/useful-links` },
        ]}
      />

      <div className="bg-gray-50 pb-20" dir="ltr">
        <UnifiedPageHeader
          lang={lang}
          badgeText="Annuaire des sources et portails officiels"
          badgeIcon={<Book className="w-4 h-4" />}
          eyebrow="Office Public Notarial"
          title="Liens et sources juridiques et administratives utiles"
          description="Un annuaire structuré pour accéder directement aux sites institutionnels algériens liés aux démarches juridiques, notariales, immobilières et administratives."
          breadcrumbs={[
            { name: 'Accueil', href: '/fr' },
            { name: 'Liens utiles' },
          ]}
        />

        <div className="container mx-auto mt-8 max-w-6xl px-4">
          <div className="mb-8 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-start md:p-6">
            <div className="shrink-0 rounded-xl bg-amber-100 p-2 text-amber-700">
              <Scale className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2 className="mb-2 text-base font-bold text-amber-950 md:text-lg">Information sur la nature de ces liens</h2>
              <p className="text-sm leading-7 text-amber-900/90">
                Cet annuaire est fourni à titre d’orientation générale. Les liens renvoient vers des sites gérés par des organismes externes à l’office. Celui-ci ne contrôle ni leur contenu, ni la disponibilité de leurs services, ni leurs conditions d’utilisation. Leur consultation ne dispense pas de vérifier les textes et démarches auprès de l’autorité compétente.
              </p>
              <p className="mt-3 text-xs text-amber-800">
                Dernière révision éditoriale de l’annuaire : <time dateTime="2026-11-04">{reviewedDate}</time>
              </p>
            </div>
          </div>

          <nav aria-label="Navigation entre les catégories de liens utiles" className="mb-8 flex flex-wrap gap-2">
            {USEFUL_LINK_CATEGORIES.map((category) => {
              const count = USEFUL_LINKS.filter((link) => link.category === category.id).length;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-emerald-300 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  <span>{category.title[lang]}</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-800">{count}</span>
                </a>
              );
            })}
          </nav>

          <div className="space-y-8">
            {USEFUL_LINK_CATEGORIES.map((category) => {
              const CategoryIcon = IconMap[category.icon];
              const categoryLinks = USEFUL_LINKS.filter((link) => link.category === category.id);

              if (categoryLinks.length === 0) return null;

              return (
                <section
                  key={category.id}
                  id={category.id}
                  aria-labelledby={`${category.id}-heading`}
                  className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-8"
                >
                  <div className="mb-6 flex items-center justify-between gap-4 border-b border-gray-100 pb-5">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="rounded-xl bg-emerald-50 p-3 text-emerald-800">
                        <CategoryIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h2 id={`${category.id}-heading`} className="text-lg font-bold leading-snug text-gray-950 md:text-2xl">
                        {category.title[lang]}
                      </h2>
                    </div>
                    <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                      {categoryLinks.length} liens
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {categoryLinks.map((link) => {
                      const resolvedUrl = link.urlFr ?? link.url;
                      return (
                      <article
                        key={link.id}
                        className="group flex h-full flex-col justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                      >
                        <div>
                          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                            <h3 className="text-base font-bold leading-7 text-gray-950">
                              {link.name[lang]}
                            </h3>
                            <span dir="ltr" className="rounded-md bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-600">
                              {getLinkHost(resolvedUrl)}
                            </span>
                          </div>
                          <p className="text-sm leading-7 text-gray-600">
                            {link.desc[lang]}
                          </p>
                        </div>

                        <a
                          href={resolvedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ouvrir ${link.name[lang]} dans un nouvel onglet`}
                          className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                        >
                          <span>Visiter le portail officiel</span>
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          <span className="sr-only">S’ouvre dans un nouvel onglet</span>
                        </a>
                      </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            <p className="mx-auto mb-5 max-w-3xl text-xs leading-6 text-gray-500">
              Les noms, marques et sites des organismes appartiennent à leurs titulaires. La présence d’un lien dans cet annuaire ne signifie ni partenariat, ni agrément, ni validation par ces organismes et ne garantit pas la disponibilité permanente du site ou du service.
            </p>
            <Link
              href="/fr"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-emerald-800 transition-colors hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              <span>Retour à la page d’accueil de l’office</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
