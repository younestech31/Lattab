import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL, GOOGLE_MAPS_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN17FormFiller from '@/components/forms/gn17/GN17FormFiller';
import { JsonLdScript } from '@/components/schema';

export const metadata: Metadata = {
  title: 'Formulaire Série G N° 17 — Déclaration de Plus-Value Immobilière',
  description: 'Remplissage et génération du formulaire officiel DGI Série G N° 17 : déclaration de la plus-value de cession d\'immeubles, calcul de l\'abattement pour durée de détention et liquidation de l\'impôt à 15% (Art. 80 bis du CIDTA).',
  alternates: {
    canonical: `${SITE_URL}/fr/formulaires/gn17`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/gn17`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/gn17`,
      'x-default': `${SITE_URL}/formulaires/gn17`,
    },
  },
  openGraph: {
    title: 'Formulaire Série G N° 17 — Plus-Value Immobilière | Office Notarial Oran',
    description: 'Imprimé officiel DGI rempli et prêt pour impression et dépôt légal auprès de la recette des impôts.',
    url: `${SITE_URL}/fr/formulaires/gn17`,
    locale: 'fr_DZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Formulaire Série G N° 17 — Plus-Value Immobilière',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formulaire Série G N° 17 — Plus-Value Immobilière | Office Notarial Oran',
    description: 'Imprimé officiel DGI rempli et prêt pour impression et dépôt légal auprès de la recette des impôts.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GN17PageFR() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    '@id': `${SITE_URL}/fr#notary-office`,
    'name': 'Formulaire Série G N° 17 — Déclaration de Plus-Value Immobilière',
    'url': `${SITE_URL}/fr/formulaires/gn17`,
    'description': 'Outil de remplissage du formulaire officiel Série G N° 17 pour la liquidation de l\'IRG/Plus-value immobilière et la génération d\'un fichier PDF conforme au gabarit officiel.',
    'provider': {
      '@type': 'GovernmentService',
      '@id': `${SITE_URL}/fr#notary-office`,
      'name': 'Office Notarial - Oran',
      'legalName': 'Office Notarial - Oran',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Cité 557 Logements, Immeuble D24, 1er Étage, Appt 768, Akid Lotfi',
        'addressLocality': 'Oran',
        'addressRegion': 'Oran',
        'postalCode': '31000',
        'addressCountry': 'DZ'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 35.7277124,
        'longitude': -0.5931358
      },
      'hasMap': GOOGLE_MAPS_URL,
      'areaServed': { '@type': 'AdministrativeArea', 'name': 'Oran' },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          'opens': '08:30',
          'closes': '12:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          'opens': '13:30',
          'closes': '16:00'
        }
      ]
    }
  };

  return (
    <div>
      <JsonLdScript schema={serviceSchema} />
      <UnifiedPageHeader
        lang="fr"
        eyebrow="Direction Générale des Impôts — Série G N° 17"
        badgeText="Délai légal : 30 jours"
        title="Déclaration de Plus-Value sur Cession d'Immeubles"
        description="Formulaire officiel pour la liquidation de l'IRG/Plus-value au taux légal de 15%, avec calcul de l'abattement pour durée de détention et abattement spécial pour logement unique, prêt pour dépôt légal."
        breadcrumbs={[
          { name: 'Accueil', href: '/fr' },
          { name: 'Formulaires officiels', href: '/fr/formulaires' },
          { name: 'Série G N° 17' },
        ]}
      />
      <main className="bg-gray-50 min-h-[60vh] pb-16">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-16 text-center text-gray-500">
              Chargement du formulaire Série G N° 17...
            </div>
          }
        >
          <GN17FormFiller />
        </Suspense>
      </main>
    </div>
  );
}
