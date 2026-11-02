import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL, GOOGLE_MAPS_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN31FormFiller from '@/components/forms/gn31/GN31FormFiller';
import { JsonLdScript } from '@/components/schema';

export const metadata: Metadata = {
  title: 'Formulaire Série G N° 31 — Déclaration de la Taxe Foncière',
  description: 'Remplissage et génération du formulaire officiel DGI Série G N° 31 : déclaration de la taxe foncière sur les propriétés bâties et non bâties (Articles 261-r et 261-s du CIDTA).',
  alternates: {
    canonical: `${SITE_URL}/fr/formulaires/gn31`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/gn31`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/gn31`,
      'x-default': `${SITE_URL}/formulaires/gn31`,
    },
  },
  openGraph: {
    title: 'Formulaire Série G N° 31 — Taxe Foncière | Office Notarial Oran',
    description: 'Imprimé officiel DGI rempli et prêt pour impression et dépôt auprès des services fiscaux compétents.',
    url: `${SITE_URL}/fr/formulaires/gn31`,
    locale: 'fr_DZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Formulaire Série G N° 31 — Taxe Foncière',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formulaire Série G N° 31 — Taxe Foncière | Office Notarial Oran',
    description: 'Imprimé officiel DGI rempli et prêt pour impression et dépôt auprès des services fiscaux compétents.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GN31PageFR() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    '@id': `${SITE_URL}/fr#notary-office`,
    'name': 'Formulaire Série G N° 31 — Déclaration de la Taxe Foncière',
    'url': `${SITE_URL}/fr/formulaires/gn31`,
    'description': 'Outil de remplissage du formulaire officiel Série G N° 31 pour la déclaration de la taxe foncière sur les propriétés bâties et non bâties et la génération d\'un fichier PDF conforme au gabarit officiel.',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Quel est le délai légal de souscription de la déclaration Série G N° 31 ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'La déclaration Série G N° 31 doit être souscrite dans un délai de deux mois suivant l\'achèvement ou l\'occupation totale ou partielle de l\'immeuble, ou dans les deux mois suivant l\'achèvement de toute modification de structure ou d\'affectation, conformément aux Articles 261-r et 261-s du CIDTA.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Quelles sont les propriétés soumises à la déclaration Série G N° 31 ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'La déclaration couvre l\'ensemble des propriétés bâties (logements individuels, appartements en copropriété, immeubles collectifs, locaux professionnels et commerciaux) ainsi que les propriétés non bâties (terres agricoles et terrains à bâtir).',
        },
      },
      {
        '@type': 'Question',
        'name': 'Quelle est la valeur juridique du document généré et où le déposer ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Le document généré est un exemplaire destiné à la vérification et à la préparation matérielle de la déclaration. Il doit être imprimé, signé et déposé auprès de l\'inspection ou de la recette des impôts du lieu de situation de l\'immeuble.',
        },
      },
    ],
  };

  return (
    <div>
      <JsonLdScript schema={serviceSchema} />
      <JsonLdScript schema={faqSchema} />
      <UnifiedPageHeader
        lang="fr"
        eyebrow="Direction Générale des Impôts — Série G N° 31"
        badgeText="Annuelle / Changement"
        title="Déclaration de la Taxe Foncière sur les Propriétés Bâties et Non Bâties"
        description="Formulaire officiel pour la souscription de la taxe foncière conformément aux Articles 261-r et 261-s du CIDTA, avec génération du fichier PDF officiel conforme pour dépôt légal."
        breadcrumbs={[
          { name: 'Accueil', href: '/fr' },
          { name: 'Formulaires officiels', href: '/fr/formulaires' },
          { name: 'Série G N° 31' },
        ]}
      />
      <main className="bg-gray-50 min-h-[60vh] pb-16">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-16 text-center text-gray-500">
              Chargement du formulaire Série G N° 31...
            </div>
          }
        >
          <GN31FormFiller />
        </Suspense>
      </main>
    </div>
  );
}
