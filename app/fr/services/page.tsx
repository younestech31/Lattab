import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Building2, Users, Scale, Heart, Lock, ArrowRight, Calendar, FileText } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/data/servicesData';
import { SITE_URL } from '@/lib/config';
import WebPageSchema from '@/components/WebPageSchema';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';
import PhoneLink from '@/components/ui/PhoneLink';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'Guide des actes notariés à Oran : vente immobilière, constitution de sociétés, procurations, successions et hypothèques selon le droit algérien en vigueur.';
  assertDescriptionLength(desc, 'services-fr');

  const pageUrl = `${SITE_URL}/fr/services`;
  const arUrl = `${SITE_URL}/services`;

  return {
    title: { absolute: 'Services Notariaux — Office Notarial à Oran' },
    description: desc,
    alternates: {
      canonical: pageUrl,
      languages: {
        'ar-DZ': arUrl,
        'fr-DZ': pageUrl,
        'x-default': arUrl,
      },
    },
    openGraph: {
      title: 'Services Notariaux — Office Notarial à Oran',
      description: desc,
      url: pageUrl,
      siteName: 'Office Notarial - Oran — Me Lattab Mohamed',
      locale: 'fr_DZ',
      alternateLocale: ['ar_DZ'],
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Services Notariaux Office Notarial Oran',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Services Notariaux — Office Notarial à Oran',
      description: desc,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'vente-immobiliere': <Home className="w-7 h-7 text-emerald-600" />,
  'creation-societe': <Building2 className="w-7 h-7 text-emerald-600" />,
  'procuration': <Users className="w-7 h-7 text-emerald-600" />,
  'succession': <Scale className="w-7 h-7 text-emerald-600" />,
  'contrat-mariage': <Heart className="w-7 h-7 text-emerald-600" />,
  'hypotheque': <Lock className="w-7 h-7 text-emerald-600" />,
};

const SERVICE_BOOKING_PARAM_FR: Record<string, string> = {
  'vente-immobiliere': 'Actes de vente immobilière',
  'creation-societe': 'Constitution de sociétés',
  'procuration': 'Procurations et mandats',
  'succession': 'Actes de mariage et documents familiaux',
  'contrat-mariage': 'Actes de mariage et documents familiaux',
  'hypotheque': 'Hypothèques et assurances',
};

export default function FrenchServicesPage() {
  const serviceList = Object.values(SERVICES_DATA);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services notariaux de l’Office Notarial d’Oran',
    description: 'Nomenclature des actes notariés et formalités légales en Algérie',
    itemListElement: serviceList.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.fr.title,
      url: `${SITE_URL}/fr/services/${service.slug}`,
      description: service.fr.subtitle,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir="ltr" lang="fr">
      <SchemaScriptLoader schemas={[itemListSchema]} />
      <WebPageSchema
        url={`${SITE_URL}/fr/services`}
        name="Services Notariaux — Office Notarial à Oran"
        description="Guide officiel des actes et formalités notariées auprès de l’étude notariale à Oran selon la législation algérienne."
        breadcrumbs={[
          { name: 'Accueil', item: `${SITE_URL}/fr` },
          { name: 'Services notariaux', item: `${SITE_URL}/fr/services` },
        ]}
      />

      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-gray-500 overflow-x-auto whitespace-nowrap" aria-label="Fil d'Ariane">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/fr" className="hover:text-emerald-700 transition-colors">Accueil</Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-800 font-semibold" aria-current="page">Services notariaux</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Office Public Notarial — Me Lattab Mohamed
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Nomenclature des Actes et Services Notariaux
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Titulaire d’un office public près le Tribunal de Fellaoucène à Oran, notre étude assure l’authentification, la conservation et l’opposabilité de tous vos actes civils et commerciaux conformément à la loi 06-02 régissant le notariat en Algérie.
            </p>
          </header>

          {/* Cards Grid */}
          <section aria-label="Liste des prestations notariales" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {serviceList.map((service) => {
              const bookingParam = SERVICE_BOOKING_PARAM_FR[service.slug] || service.fr.title;
              const bookingUrl = `/fr/contact?service=${encodeURIComponent(bookingParam)}`;
              const detailsUrl = `/fr/services/${service.slug}`;

              return (
                <article
                  key={service.slug}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 flex flex-col justify-between transition-all duration-200 group"
                >
                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center transition-colors shrink-0">
                        {SERVICE_ICONS[service.slug] || <FileText className="w-7 h-7 text-emerald-600" />}
                      </div>
                      {service.isPropertyRelated && (
                        <span className="bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-200">
                          Immobilier / Conservation
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      <Link href={detailsUrl} className="hover:underline">
                        {service.fr.title}
                      </Link>
                    </h2>

                    {/* Short Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.fr.subtitle}
                    </p>

                    {/* Target Audience Highlight */}
                    {service.fr.targetAudience && service.fr.targetAudience.length > 0 && (
                      <div className="mb-4 text-xs text-gray-500 bg-gray-50 rounded-lg p-2.5 border border-gray-100">
                        <span className="font-semibold text-gray-700 block mb-1">Public concerné :</span>
                        <p className="line-clamp-2">{service.fr.targetAudience[0]}</p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2 mt-4">
                    <Link
                      href={detailsUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                      aria-label={`Détails de ${service.fr.title}`}
                    >
                      <span>Formalités & Pièces</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href={bookingUrl}
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors shadow-sm"
                      aria-label={`Prendre rendez-vous pour ${service.fr.title}`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Rendez-vous</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Consultation CTA Banner */}
          <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white rounded-3xl p-8 md:p-12 shadow-xl text-center md:text-start flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Besoin d’un acte spécifique ou d’un conseil juridique ?
              </h2>
              <p className="text-emerald-100 text-sm md:text-base leading-relaxed">
                Notre étude notariale située au quartier Akid Lotfi à Oran vous accueille pour préparer vos dossiers, vérifier les titres de propriété et rédiger vos conventions avec rigueur.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/fr/contact"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-all text-center shadow-lg"
              >
                Prendre rendez-vous
              </Link>
              <PhoneLink
                type="office"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-xl transition-all border border-white/20 justify-center"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
