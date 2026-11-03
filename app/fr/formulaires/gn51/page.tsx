import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL, GOOGLE_MAPS_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN51FormFiller from '@/components/forms/gn51/GN51FormFiller';
import { JsonLdScript } from '@/components/schema';

export const metadata: Metadata = {
  title: 'Formulaire Série G N° 51 — Déclaration des Revenus de Location Immobilière',
  description: 'Remplissage et génération du formulaire officiel DGI Série G N° 51 : déclaration des revenus provenant de la location, à titre civil, de biens bâtis et non bâtis (IRG/Location: 7% habitation, 15% commercial) - Articles 42 et 104 du CIDTA.',
  alternates: {
    canonical: `${SITE_URL}/fr/formulaires/gn51`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/gn51`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/gn51`,
      'x-default': `${SITE_URL}/formulaires/gn51`,
    },
  },
  openGraph: {
    title: 'Formulaire Série G N° 51 — IRG Location Immobilière | Office Notarial Oran',
    description: 'Imprimé officiel DGI tenant lieu de bordereau avis de versement rempli et prêt pour impression et dépôt légal auprès de la recette des impôts.',
    url: `${SITE_URL}/fr/formulaires/gn51`,
    locale: 'fr_DZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Formulaire Série G N° 51 — Revenus de Location Immobilière',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formulaire Série G N° 51 — IRG Location Immobilière | Office Notarial Oran',
    description: 'Imprimé officiel DGI rempli et prêt pour impression et dépôt légal auprès de la recette des impôts.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GN51PageFR() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    '@id': `${SITE_URL}/fr#notary-office`,
    'name': 'Formulaire Série G N° 51 — Déclaration des Revenus de Location Immobilière',
    'url': `${SITE_URL}/fr/formulaires/gn51`,
    'description': 'Outil de remplissage du formulaire officiel Série G N° 51 pour la liquidation de l\'IRG sur revenus de location et la génération d\'un fichier PDF conforme au gabarit officiel.',
    'provider': {
      '@type': 'GovernmentService',
      '@id': `${SITE_URL}/fr#notary-office`,
      'name': 'Office Notarial - Oran',
      'legalName': 'Office Notarial - Oran',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Cité 557 logts, Bâtiment D24, 1er étage, n° 768, Colonel Lotfi',
        'addressLocality': 'Oran',
        'addressRegion': 'Oran',
        'postalCode': '31000',
        'addressCountry': 'DZ',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 35.7277124,
        'longitude': -0.5931358,
      },
      'hasMap': GOOGLE_MAPS_URL,
      'areaServed': { '@type': 'AdministrativeArea', 'name': 'Oran' },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Quel est le délai légal pour déposer la déclaration Série G N° 51 ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'La déclaration tenant lieu de bordereau avis de versement doit être souscrite au plus tard le vingt (20) du mois qui suit celui de la perception des loyers auprès de la recette des impôts du lieu de situation du bien loué.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Quels sont les taux applicables selon la nature du bien loué ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pour un montant annuel inférieur ou égal à 1.800.000 DA : 7% pour les biens à usage d\'habitation, 15% pour les locaux commerciaux, professionnels ou terrains non bâtis, et 10% pour les terrains agricoles. Au-delà de 1.800.000 DA, une imposition provisoire au taux unique de 7% s\'applique.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Comment s\'effectue le règlement de l\'impôt ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Le paiement s\'effectue au guichet de la recette des impôts compétente en numéraire, par chèque bancaire ou par chèque postal contre remise d\'une quittance officielle.',
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
        eyebrow="Direction Générale des Impôts — Série G N° 51"
        badgeText="Au plus tard le 20 du mois"
        title="Déclaration des Revenus de Location Immobilière"
        description="Imprimé officiel tenant lieu de bordereau avis de versement pour liquider l'IRG/Location (7% habitation, 15% commercial) et télécharger le PDF officiel conforme pour dépôt légal."
        breadcrumbs={[
          { name: 'Accueil', href: '/fr' },
          { name: 'Formulaires officiels', href: '/fr/formulaires' },
          { name: 'Série G N° 51' },
        ]}
      />
      <main className="bg-gray-50 min-h-[60vh] pb-16">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-16 text-center text-gray-500">
              Chargement du formulaire Série G N° 51...
            </div>
          }
        >
          <GN51FormFiller />
        </Suspense>
      </main>
    </div>
  );
}
