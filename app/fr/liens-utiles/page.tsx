import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Scale } from 'lucide-react';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';
import { SITE_URL } from '@/lib/config';
import PortalsDirectory from '@/components/PortalsDirectory';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

export const revalidate = 86400; // Cache 24h (ISR)

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'Annuaire officiel des portails gouvernementaux algériens : législation (JORADP), ministère de la Justice, impôts (DGI), investissement, et cadastre.';
  assertDescriptionLength(desc, 'fr/liens-utiles');

  return {
    title: { absolute: 'Annuaire des Portails & Sites Officiels Algériens | Notaire Oran' },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/fr/liens-utiles`,
      languages: {
        'ar-DZ': `${SITE_URL}/liens-utiles`,
        'fr-DZ': `${SITE_URL}/fr/liens-utiles`,
        'x-default': `${SITE_URL}/liens-utiles`,
      },
    },
    openGraph: {
      title: 'Annuaire des Portails & Sites Officiels Algériens | Notaire' + ' Oran',
      description: desc,
      url: `${SITE_URL}/fr/liens-utiles`,
      siteName: 'Étude Notariale de Me Lattab Mohamed - Oran',
      type: 'website',
      locale: 'fr_DZ',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function UsefulLinksPageFr() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Annuaire des Portails & Sites Officiels Algériens — Notaire Oran",
    "description": "Annuaire institutionnel officiel des portails gouvernementaux et plateformes numériques juridiques, fiscales et foncières en Algérie",
    "publisher": {
      "@type": "LegalService",
      "name": "Étude Notariale de Maître Lattab Mohamed",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Oran",
        "addressCountry": "DZ"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <SchemaScriptLoader schemas={[pageSchema]} />
      
      {/* Hero Header Section */}
      <header className="bg-emerald-950 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Modern grid lines pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          {/* Back button */}
          <div className="mb-8 text-left">
            <Link href="/fr" className="inline-flex items-center gap-2 text-emerald-400 hover:text-white font-bold transition-colors group">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </Link>
          </div>

          <div className="space-y-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 text-emerald-300 text-sm font-semibold border border-emerald-800/60 shadow-inner">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Portails d&apos;État sécurisés et vérifiés pour 2026
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Portails & Ressources Utiles pour le Citoyen
            </h1>
            <p className="text-base md:text-lg text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Consultez les bourses d&apos;informations et services en ligne officiels de l&apos;administration algérienne (Journal Officiel, Ministère de la Justice, DGI, CNRC, cadastre, AADL).
            </p>
          </div>
        </div>
      </header>

      {/* Main Filterable Directory Section */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <PortalsDirectory lang="fr" />
        
        {/* Civic Guidance Note */}
        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-emerald-600 shrink-0" />
            <h2 className="text-lg font-extrabold text-gray-900">Informations & Conformité Légale</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Conformément à la réglementation de la profession notariale en Algérie et aux dispositions de la loi 06-02, cet annuaire est mis à disposition des citoyens et des entrepreneurs à titre gratuit et purement informatif. Il vise à simplifier l&apos;accès aux plateformes numériques d&apos;État. Notre étude notariale décline toute responsabilité quant aux contenus des sites tiers officiels répertoriés ou à leurs éventuels dysfonctionnements temporaires.
          </p>
        </div>
      </main>
    </div>
  );
}
