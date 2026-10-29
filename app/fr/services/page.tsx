import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Building2, Users, Scale, Heart, Lock, ArrowRight, Calendar, FileText } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/data/servicesData';
import { SITE_URL } from '@/lib/config';
import WebPageSchema from '@/components/WebPageSchema';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';
import PhoneLink from '@/components/ui/PhoneLink';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
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

      <UnifiedPageHeader
        lang="fr"
        badgeText="Prestations et actes authentiques notariés"
        badgeIcon={<Scale className="w-4 h-4" />}
        eyebrow="Office Public Notarial — Me Lattab Mohamed"
        title="Nomenclature des Actes et Services Notariaux"
        description="Titulaire d’un office public près le Tribunal de Fellaoucène à Oran, notre étude assure l’authentification, la conservation et l’opposabilité de tous vos actes civils et commerciaux conformément à la loi 06-02 régissant le notariat en Algérie."
        backLink={{
          href: '/fr',
          label: "Retour à l'accueil de l'étude",
        }}
        breadcrumbs={[
          { name: 'Accueil', href: '/fr' },
          { name: 'Services notariaux' },
        ]}
      />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-6xl">

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

          {/* Institutional Office Information */}
          <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200 text-slate-800">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-start">
                <h2 className="text-xl font-bold text-slate-900">
                  Informations officielles et réception
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Office Public Notarial — Maître Lattab Mohamed, notaire près le Tribunal de Fellaoucène à Oran. Siège : Quartier Akid Lotfi, Oran. Réception du public : du dimanche au jeudi (08h30–12h00 et 13h30–16h00).
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 shrink-0">
                <Link
                  href="/fr/contact"
                  className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl font-semibold transition text-sm flex items-center gap-2"
                >
                  Coordonnées et démarches
                </Link>
                <PhoneLink
                  type="office"
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-5 py-2.5 rounded-xl font-medium transition text-sm flex items-center gap-2"
                  icon={
                    <svg className="w-4 h-4 flex-shrink-0 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
