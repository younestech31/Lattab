import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import FormsIndex from '@/components/forms/FormsIndex';

export const metadata: Metadata = {
  title: 'Formulaires et Imprimés Officiels — Office Notarial Oran',
  description: 'Catalogue des imprimés et formulaires fiscaux et administratifs algériens (Série G N° 17, déclarations de plus-value immobilière) avec remplissage et téléchargement PDF direct.',
  alternates: {
    canonical: `${SITE_URL}/fr/formulaires`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires`,
      'fr-DZ': `${SITE_URL}/fr/formulaires`,
    },
  },
  openGraph: {
    title: 'Formulaires et Imprimés Officiels — Office Notarial Oran',
    description: 'Remplissage et génération PDF des formulaires administratifs et fiscaux algériens conformes aux gabarits de la DGI.',
    url: `${SITE_URL}/fr/formulaires`,
    locale: 'fr_DZ',
    type: 'website',
  },
};

export default function FormulairesPageFR() {
  return (
    <div>
      <UnifiedPageHeader
        lang="fr"
        eyebrow="Assistance administrative & fiscale"
        badgeText="Imprimés officiels DGI"
        title="Formulaires et Imprimés Officiels"
        description="Assistance au remplissage et à l'impression des déclarations et formulaires administratifs et fiscaux algériens, avec traitement strictement local garantissant votre confidentialité."
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
