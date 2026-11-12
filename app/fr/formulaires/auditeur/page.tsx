import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import PrecisionCoordinateAuditor from '@/components/forms/PrecisionCoordinateAuditor';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Auditeur de Précision Métrique des Formulaires Fiscaux DGI | Office Notarial Oran',
  description: 'Outil de vérification et calibration sub-millimétrique des coordonnées de remplissage des imprimés fiscaux algériens (G17, G31, G08, G51) en arabe et français.',
  alternates: {
    canonical: `${SITE_URL}/fr/formulaires/auditeur`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/auditeur`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/auditeur`,
      'x-default': `${SITE_URL}/formulaires/auditeur`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FormAuditorFrenchPage() {
  return (
    <div>
      <UnifiedPageHeader
        lang="fr"
        eyebrow="Calibration & Audit Technique"
        badgeText="Précision 0.00 mm"
        title="Auditeur Métrique des Formulaires"
        description="Inspection détaillée et calibration au millimètre exact des grilles et champs des formulaires officiels DGI (G17, G31, G08, G51) en arabe et en français avec superposition métrique."
        breadcrumbs={[
          { name: 'Accueil', href: '/fr' },
          { name: 'Formulaires officiels', href: '/fr/formulaires' },
          { name: 'Auditeur métrique' },
        ]}
      />
      <main className="bg-gray-50 min-h-[70vh]">
        <PrecisionCoordinateAuditor />
      </main>
    </div>
  );
}
