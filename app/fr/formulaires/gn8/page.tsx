import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL, GOOGLE_MAPS_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN8FormFiller from '@/components/forms/gn8/GN8FormFiller';
import { JsonLdScript } from '@/components/schema';

export const metadata: Metadata = {
  title: 'Formulaire Série G N° 08 — Déclaration d\'Existence (DGI Algérie)',
  description: 'Remplissage et génération du formulaire officiel DGI Série G N° 08 : déclaration d\'existence dans les 30 jours du début d\'activité (Art. 51 du CTCA et Art. 183 du CIDTA).',
  alternates: {
    canonical: `${SITE_URL}/fr/formulaires/gn8`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/gn8`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/gn8`,
      'x-default': `${SITE_URL}/formulaires/gn8`,
    },
  },
  openGraph: {
    title: 'Formulaire Série G N° 08 — Déclaration d\'Existence | Office Notarial Oran',
    description: 'Imprimé officiel DGI 2024 rempli et prêt pour impression et dépôt avec la liste des pièces justificatives.',
    url: `${SITE_URL}/fr/formulaires/gn8`,
    locale: 'fr_DZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Formulaire Série G N° 08 — Déclaration d\'Existence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formulaire Série G N° 08 — Déclaration d\'Existence | Office Notarial Oran',
    description: 'Imprimé officiel DGI 2024 rempli et prêt pour impression et dépôt avec la liste des pièces justificatives.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GN8PageFR() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    '@id': `${SITE_URL}/fr#notary-office`,
    'name': 'Formulaire Série G N° 08 — Déclaration d\'Existence',
    'url': `${SITE_URL}/fr/formulaires/gn8`,
    'description': 'Outil de remplissage du formulaire officiel Série G N° 08 pour la déclaration d\'existence auprès de l\'administration fiscale algérienne et génération d\'un fichier PDF conforme au modèle officiel.',
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
        eyebrow="Direction Générale des Impôts — Série G N° 08"
        badgeText="Délai légal : 30 jours"
        title="Déclaration d'existence (Série G N° 08)"
        description="Formulaire officiel obligatoire à souscrire auprès de l'inspection des impôts du lieu d'exercice dans les 30 jours du début d'activité (Art. 51 du CTCA et Art. 183 du CIDTA)."
        breadcrumbs={[
          { name: 'Accueil', href: '/fr' },
          { name: 'Formulaires officiels', href: '/fr/formulaires' },
          { name: 'Série G N° 08' },
        ]}
      />
      <main className="bg-gray-50 min-h-[60vh] pb-16">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-16 text-center text-gray-500">
              Chargement du formulaire Série G N° 08...
            </div>
          }
        >
          <GN8FormFiller />
        </Suspense>
      </main>
    </div>
  );
}
