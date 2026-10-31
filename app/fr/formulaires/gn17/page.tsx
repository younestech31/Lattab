import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
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
};

export default function GN17PageFR() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Formulaire Série G N° 17 — Déclaration de Plus-Value Immobilière',
    'url': `${SITE_URL}/fr/formulaires/gn17`,
    'inLanguage': 'fr-DZ',
    'applicationCategory': 'TaxApplication',
    'operatingSystem': 'Web',
    'description': 'Outil de remplissage du formulaire officiel Série G N° 17 pour la liquidation de l\'IRG/Plus-value immobilière et la génération d\'un fichier PDF conforme au gabarit officiel.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'DZD',
    },
    'provider': {
      '@type': ['LegalService', 'Notary'],
      'name': 'Office Notarial — Me Lattab Mohamed',
      'url': `${SITE_URL}/fr`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Quel est le délai légal pour déposer la déclaration Série G N° 17 ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'La déclaration Série G N° 17 doit être souscrite et déposée auprès de la recette des impôts territorialement compétente dans un délai légal de trente (30) jours à compter de la date de l\'acte de cession, conformément à l\'article 80 bis du Code des Impôts Directs et Taxes Assimilées.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Quel est le taux de l\'impôt sur la plus-value immobilière et les règles d\'abattement ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'L\'impôt sur le revenu global (IRG/Plus-value) est liquidé au taux légal de 15%. Un abattement de 5% par an est accordé au-delà de la deuxième année de détention, plafonné à 50% après 12 ans de détention, avec prise en compte des exonérations applicables au logement unique selon les conditions légales.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Où doit être déposé le document généré et quelle est sa valeur juridique ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Le document généré est un exemplaire destiné à la vérification et à la préparation matérielle de la déclaration. Il doit être imprimé et déposé avec les pièces justificatives auprès de la recette des impôts du lieu de situation de l\'immeuble cédé.',
        },
      },
    ],
  };

  return (
    <div>
      <JsonLdScript schema={webApplicationSchema} />
      <JsonLdScript schema={faqSchema} />
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
