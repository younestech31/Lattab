import React, { Suspense } from 'react';
import { Metadata } from 'next';
export const revalidate = 86400;
import { Calculator } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import PriceCalculator from '@/components/PriceCalculator';
import CalculatorSkeleton from '@/components/CalculatorSkeleton';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';
import WebPageSchema from '@/components/WebPageSchema';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'Calculateur des prix de référence officiels du Ministère des Finances 2026 pour immobilier à Oran.';
  assertDescriptionLength(desc, 'calculateur-prix-referentiel-fr');

  return {
    title: { absolute: 'Calculateur des prix de référence immobilier — Oran, Algérie' },
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
      title: 'Calculateur des prix de référence immobilier — Oran, Algérie',
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
        <div className="bg-emerald-900 text-white pt-32 pb-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <Calculator className="w-20 h-20 mx-auto mb-6 text-emerald-400" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Calculateur des prix de référence immobilier 2026
                </h1>
            </div>
        </div>
        
        <div className="-mt-10 relative z-20">
          <Suspense fallback={<CalculatorSkeleton />}>
            <PriceCalculator lang="fr" initialData={null} initialCommunes={[]} initialRegionId="" />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
