import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN17FormFiller from '@/components/forms/gn17/GN17FormFiller';

export const metadata: Metadata = {
  title: 'Formulaire Série G N° 17 — Déclaration de Plus-Value Immobilière',
  description: 'Remplissage et génération du formulaire officiel DGI Série G N° 17 : déclaration de la plus-value de cession d\'immeubles, calcul de l\'abattement pour durée de détention et liquidation de l\'impôt à 15% (Art. 80 bis du CIDTA).',
  alternates: {
    canonical: `${SITE_URL}/fr/formulaires/gn17`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/gn17`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/gn17`,
    },
  },
  openGraph: {
    title: 'Formulaire Série G N° 17 — Plus-Value Immobilière | Office Notarial Oran',
    description: 'Imprimé officiel DGI rempli et prêt pour impression et dépôt légal auprès de la recette des impôts.',
    url: `${SITE_URL}/fr/formulaires/gn17`,
    locale: 'fr_DZ',
    type: 'website',
  },
};

export default function GN17PageFR() {
  return (
    <div>
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
