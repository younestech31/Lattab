import React, { Suspense } from 'react';
import { Metadata } from 'next';
export const revalidate = 86400;
import Link from 'next/link';
import { Calculator, AlertCircle, TrendingDown, Info } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import PriceCalculator from '@/components/PriceCalculator';
import CalculatorSkeleton from '@/components/CalculatorSkeleton';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';
import WebPageSchema from '@/components/WebPageSchema';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';

export async function generateMetadata(): Promise<Metadata> {
  const desc = "Calculateur officiel des prix de référence immobiliers 2026 à Oran. Outil d'estimation basé sur les grilles de la Direction Générale des Impôts d'Algérie.";
  assertDescriptionLength(desc, 'calculateur-prix-referentiel-fr');

  return {
    title: { absolute: 'Calculateur Prix Référence Immobilier 2026 — Oran' },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/fr/calculateur-prix-referentiel`,
      languages: {
        'ar-DZ': `${SITE_URL}/calculateur-prix-referentiel`,
        'fr-DZ': `${SITE_URL}/fr/calculateur-prix-referentiel`,
        'x-default': `${SITE_URL}/calculateur-prix-referentiel`,
      },
    },
    openGraph: {
      title: 'Calculateur Prix Référence Immobilier 2026 — Oran',
      description: desc,
      url: `${SITE_URL}/fr/calculateur-prix-referentiel`,
      siteName: 'Étude Public Notarial — Maître Lattab Mohamed',
      type: 'website',
      images: [{ 
        url: `${SITE_URL}/calculateur-prix-referentiel/opengraph-image`, 
        width: 1200, 
        height: 630, 
        alt: 'Calculateur des prix de référence immobilier Oran' 
      }],
      locale: 'fr_DZ',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Calculateur des prix de référence immobilier — Oran, Algérie',
      description: desc,
      images: [`${SITE_URL}/calculateur-prix-referentiel/opengraph-image`],
    },
    robots: { index: true, follow: true },
  };
}

export default function CalculatorPageFR() {
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculateur des prix de référence immobilier — Oran, Algérie",
    "url": `${SITE_URL}/fr/calculateur-prix-referentiel`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "DZD" }
  };

  return (
    <div className="min-h-screen bg-white" dir="ltr" lang="fr">
      <SchemaScriptLoader schemas={[webApplicationSchema]} />
      <WebPageSchema
        url={`${SITE_URL}/fr/calculateur-prix-referentiel`}
        name="Calculateur des prix de référence immobilier 2026"
        description="Calculateur des prix de référence officiels du Ministère des Finances 2026 pour immobilier à Oran."
        breadcrumbs={[
          { name: "Accueil", item: `${SITE_URL}/fr` },
          { name: "Calculateur prix de référence", item: `${SITE_URL}/fr/calculateur-prix-referentiel` }
        ]}
      />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-emerald-900 text-white pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-8 text-left">
              <Link href="/fr" className="inline-flex items-center gap-2 text-emerald-400 hover:text-white font-bold transition-colors group">
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour à l&apos;accueil
              </Link>
            </div>
            
            <Calculator className="w-20 h-20 mx-auto mb-6 text-emerald-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center leading-tight">
              Calculateur des prix de référence immobilier 2026
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto text-center leading-relaxed">
              Outil d&apos;estimation indicatif basé sur les barèmes officiels approuvés par la Direction Générale des Impôts (DGI) en Algérie.
            </p>
          </div>
        </div>

        {/* The Calculator Component */}
        <div className="-mt-10 relative z-20">
          <Suspense fallback={<CalculatorSkeleton />}>
            <PriceCalculator 
              lang="fr"
              initialData={null}
              initialCommunes={[]}
              initialRegionId=""
            />
          </Suspense>
        </div>

        {/* SEO Supporting Articles / Guides */}
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Guide Complet des Prix de Référence Immobilier 2026</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Guide 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comment utiliser le calculateur des prix de référence 2026 ?</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ce calculateur est basé sur les tarifs et barèmes officiels de la Direction Générale des Impôts. Sélectionnez simplement votre wilaya, commune, nature du bien (appartement, terrain, villa), sa superficie exacte, et la zone urbaine correspondante.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                <li>Définissez l&apos;activité : Vente ou Location</li>
                <li>Sélectionnez la région et la catégorie du bien</li>
                <li>Obtenez la valeur réglementaire minimale et maximale estimée de la transaction</li>
              </ul>
            </div>

            {/* Guide 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Que se passe-t-il si vous déclarez en dessous de la référence ?</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Légalement, le notaire a le droit de refuser de rédiger l&apos;acte de transfert s&apos;il constate une sous-évaluation manifeste de la valeur. Si l&apos;acte est enregistré, l&apos;administration fiscale déclenchera une procédure de <strong>redressement fiscal</strong>.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                <li>Des pénalités et amendes de retard très lourdes</li>
                <li>Redressement de l&apos;IRG et des taxes foncières</li>
                <li>Droit de préemption possible de l&apos;État sur le bien</li>
              </ul>
            </div>

            {/* Guide 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Différence entre Prix de Référence et Prix du Marché</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>Prix de Référence :</strong> C&apos;est le prix administratif adopté par l&apos;État à des fins fiscales pour lutter contre la sous-déclaration fiscale.<br/><br/>
                <strong>Prix du Marché :</strong> C&apos;est le prix réel conclu de gré à gré entre les parties selon la loi de l&apos;offre et de la demande.
              </p>
              <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                L&apos;estimation déclarée dans l&apos;acte d’achat ou de vente doit impérativement être supérieure ou égale au barème référentiel calculé !
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/fr#contact"
              className="inline-flex py-4 px-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-lg transition-colors shadow-lg shadow-emerald-600/30"
            >
              Besoin de conseils sur la valeur réglementaire de votre bien ? Contactez-nous
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
