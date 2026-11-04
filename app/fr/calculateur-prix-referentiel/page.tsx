import React, { Suspense } from 'react';
import { Metadata } from 'next';
export const revalidate = 86400;
import Link from 'next/link';
import { Calculator, AlertCircle, TrendingDown, Info } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import PriceCalculator from '@/components/PriceCalculator';
import CalculatorSkeleton from '@/components/CalculatorSkeleton';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';
import WebPageSchema from '@/components/WebPageSchema';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';

export async function generateMetadata(): Promise<Metadata> {
  const desc = "Calculateur indicatif des fourchettes de valeurs vénales immobilières en Algérie, fondé sur le référentiel de la Direction Générale des Impôts pour 2025–2026 et les données disponibles dans l'outil.";
  assertDescriptionLength(desc, 'calculateur-prix-referentiel-fr');

  return {
    title: { absolute: 'Calculateur des prix immobiliers de référence 2025–2026 — Algérie' },
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
      title: 'Calculateur des prix immobiliers de référence 2025–2026 — Algérie',
      description: desc,
      url: `${SITE_URL}/fr/calculateur-prix-referentiel`,
      siteName: 'Office Notarial - Oran',
      type: 'website',
      images: [{ 
        url: `${SITE_URL}/calculateur-prix-referentiel/opengraph-image`, 
        width: 1200, 
        height: 630, 
        alt: 'Calculateur des prix immobiliers de référence 2025–2026 — Algérie' 
      }],
      locale: 'fr_DZ',
      alternateLocale: ['ar_DZ'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Calculateur des prix immobiliers de référence 2025–2026 — Algérie',
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
    "@id": `${SITE_URL}/fr/calculateur-prix-referentiel#application`,
    "name": "Calculateur des prix immobiliers de référence 2025–2026 — Algérie",
    "url": `${SITE_URL}/fr/calculateur-prix-referentiel`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "DZD" },
    "provider": { "@id": `${SITE_URL}/#notary-office` }
  };

  return (
    <div className="min-h-screen bg-white" dir="ltr" lang="fr">
      <SchemaScriptLoader schemas={[webApplicationSchema]} />
      <WebPageSchema
        url={`${SITE_URL}/fr/calculateur-prix-referentiel`}
        name="Calculateur des prix immobiliers de référence 2025–2026"
        description="Fourchettes de valeurs vénales immobilières du référentiel DGI 2025–2026, selon les données disponibles dans l'outil."
        breadcrumbs={[
          { name: "Accueil", item: `${SITE_URL}/fr` },
          { name: "Calculateur prix de référence", item: `${SITE_URL}/fr/calculateur-prix-referentiel` }
        ]}
      />
      <div className="bg-gray-50 pb-16" dir="ltr" lang="fr">
        <UnifiedPageHeader
          lang="fr"
          badgeText="Outils et services numériques indicatifs"
          badgeIcon={<Calculator className="w-4 h-4" />}
          eyebrow="Office notarial"
          title="Calculateur des prix immobiliers de référence 2025–2026"
          description="Outil d'estimation indicatif basé sur les barèmes officiels approuvés par la Direction Générale des Impôts (DGI) et le Ministère des Finances en Algérie."
          breadcrumbs={[
            { name: 'Accueil', href: '/fr' },
            { name: 'Calculateur prix de référence' },
          ]}
        />

        <div className="relative z-20">
          <Suspense fallback={<CalculatorSkeleton />}>
            <PriceCalculator 
              lang="fr"
              initialData={null}
              initialCommunes={[]}
              initialRegionId=""
            />
          </Suspense>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Guide de lecture du référentiel immobilier 2025–2026</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comment utiliser le calculateur des prix de référence 2026 ?</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                L’outil présente les fourchettes de valeurs vénales publiées par la Direction Générale des Impôts dans son référentiel 2025–2026, selon les données disponibles pour la wilaya, la commune, la nature du bien et la zone. Sélectionnez les caractéristiques correspondant à votre recherche.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                <li>{"Définissez l'activité : Vente ou Location"}</li>
                <li>Sélectionnez la région et la catégorie du bien</li>
                <li>Consultez les limites inférieure et supérieure de la fourchette publiée, sans les interpréter comme un prix obligatoire ou une évaluation individuelle</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comment interpréter les limites de la fourchette de référence ?</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {"Le référentiel de la DGI présente des fourchettes de valeurs vénales immobilières. La valeur vénale peut intervenir dans la détermination de l'assiette fiscale selon la nature de l'opération et les textes applicables. La limite inférieure publiée ne constitue pas, à elle seule, un seuil légal général à appliquer automatiquement à chaque acte ; le résultat de cet outil ne suffit pas à déterminer le traitement fiscal d'une opération. "}
                <strong>redressement fiscal</strong>.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                <li>Le traitement fiscal dépend de la nature de l’opération et des textes applicables.</li>
                <li>L’administration fiscale compétente détermine l'assiette et les droits dus.</li>
                <li>Il convient de consulter la version officielle à jour et les documents propres au bien.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fourchette de référence et valeur réelle du bien</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>Fourchette de référence :</strong>{" limites inférieure et supérieure de valeurs vénales présentées dans les tableaux de la DGI pour une période déterminée."}
                <br/><br/>
                <strong>Valeur réelle du bien :</strong>{" elle dépend notamment de sa situation, de ses caractéristiques, de son état et des circonstances de l'opération. Cet outil ne remplace ni une évaluation individualisée ni un contrôle administratif."}
              </p>
              <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                {"Le résultat est purement indicatif ; il ne détermine pas à lui seul la validité du prix déclaré, les impôts et droits dus ou les honoraires du notaire."}
              </p>
            </div>
          </div>
          
          <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <h3 className="mb-3 text-lg font-bold text-gray-900">Source officielle et limites des données</h3>
            <p className="mb-3 text-sm leading-7 text-gray-700">
              Le référentiel publié par la Direction Générale des Impôts pour 2025–2026 présente des fourchettes de valeurs vénales par région, wilaya, commune, zone et type de bien. Consultez la publication officielle pour vérifier la version applicable et toute mise à jour ultérieure.
            </p>
            <p className="mb-4 text-sm leading-7 text-gray-700">
              Note territoriale : la base actuelle de l’outil reprend uniquement les données qui y sont intégrées et ne crée pas de tableaux indépendants pour les nouvelles wilayas. La loi n° 26-06 du 4 avril 2026 porte le découpage territorial à 69 wilayas et prévoit un transfert progressif des prérogatives durant 2026. La liste proposée dans l'outil ne remplace donc pas la vérification auprès du service fiscal compétent.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.mfdgi.gov.dz/fr/services-num/autres-services-numeriques/referentiel-des-prix-de-limmobilier" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-xl bg-emerald-800 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
                Référentiel immobilier — Direction Générale des Impôts
              </a>
              <a href="https://www.joradp.dz/FTP/jo-francais/2026/F2026025.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-bold text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
                Loi n° 26-06 — Journal officiel
              </a>
              <Link href="/fr/contact" className="inline-flex min-h-11 items-center rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-bold text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
                Coordonnées de l’office
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
