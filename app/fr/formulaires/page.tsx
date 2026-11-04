import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import FormsIndex from '@/components/forms/FormsIndex';
import { JsonLdScript } from '@/components/schema';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Formulaires fiscaux officiels à remplir — G17 G31 G08 G51 | Office notarial Oran',
  description: 'Préparez et imprimez les formulaires de la DGI : G17 (plus-value immobilière), G31 (taxe foncière), G08 (déclaration d’existence) et G51 (revenus locatifs).',
  alternates: {
    canonical: `${SITE_URL}/fr/formulaires`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires`,
      'fr-DZ': `${SITE_URL}/fr/formulaires`,
      'x-default': `${SITE_URL}/formulaires`,
    },
  },
  openGraph: {
    title: 'Formulaires fiscaux officiels à remplir — G17 G31 G08 G51 | Office notarial Oran',
    description: 'Remplissage et impression des formulaires fiscaux officiels de la DGI : plus-value immobilière G17, taxe foncière G31, déclaration d’existence G08 et location immobilière G51.',
    url: `${SITE_URL}/fr/formulaires`,
    locale: 'fr_DZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Formulaires fiscaux officiels à remplir — G17 G31 G08 G51',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formulaires fiscaux officiels à remplir — G17 G31 G08 G51 | Office notarial Oran',
    description: 'Remplissage et impression des formulaires fiscaux officiels de la DGI : plus-value immobilière G17, taxe foncière G31, déclaration d’existence G08 et location immobilière G51.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FormulairesPageFR() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Formulaires et déclarations fiscales officielles en Algérie',
    'description': 'Catalogue des formulaires officiels de la Direction Générale des Impôts (DGI) pour remplissage et impression directe.',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Série G N° 17 — Déclaration de plus-value immobilière',
        'url': `${SITE_URL}/fr/formulaires/gn17`,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Série G N° 31 — Déclaration de la taxe foncière',
        'url': `${SITE_URL}/fr/formulaires/gn31`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Série G N° 08 — Déclaration d\'existence',
        'url': `${SITE_URL}/fr/formulaires/gn8`,
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Série G N° 51 — Déclaration de location immobilière',
        'url': `${SITE_URL}/fr/formulaires/gn51`,
      },
    ],
  };

  return (
    <div>
      <JsonLdScript schema={itemListSchema} />
      <UnifiedPageHeader
        lang="fr"
        eyebrow="Assistance administrative & fiscale"
        badgeText="Imprimés officiels DGI"
        title="Formulaires officiels"
        description="Préparation indicative et impression des formulaires DGI G17, G31, G08 et G51. Vérifiez les données et les exigences actuelles auprès du service fiscal compétent avant le dépôt."
        breadcrumbs={[
          { name: 'Accueil', href: '/fr' },
          { name: 'Formulaires officiels' },
        ]}
      />
      <main className="bg-gray-50 min-h-[60vh]">
        <FormsIndex />
      </main>
    </div>
  );
}
