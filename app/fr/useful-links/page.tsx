import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';
import { Scale, BookOpen, Building2, Landmark, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import WebPageSchema from '@/components/WebPageSchema';

export const revalidate = 86400; // 24h ISR static page

export async function generateMetadata(): Promise<Metadata> {
  const desc = "Liens et sources juridiques utiles en Algérie - Ministère de la Justice, Journal Officiel, Registre de Commerce, proposés par l'étude de Me Lattab Mohamed.";
  assertDescriptionLength(desc, 'French Useful Links / app/fr/useful-links/page.tsx');

  return {
    title: 'Liens et Institutions Utiles en Algérie | Notaire Oran',
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/fr/useful-links`,
      languages: {
        'ar-DZ': `${SITE_URL}/useful-links`,
        'fr-DZ': `${SITE_URL}/fr/useful-links`,
        'x-default': `${SITE_URL}/useful-links`,
      },
    },
    openGraph: {
      title: 'Liens et ressources administratives et juridiques utiles | Me Lattab Mohamed',
      description: desc,
      url: `${SITE_URL}/fr/useful-links`,
      siteName: 'Étude Notariale — Maître Lattab Mohamed, Notaire Oran',
      locale: 'fr_DZ',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function FrenchUsefulLinksPage() {
  const categories = [
    {
      title: 'Justice et Législation',
      icon: <Scale className="w-6 h-6" />,
      links: [
        {
          name: 'Ministère de la Justice Algérien',
          url: 'https://www.mjustice.dz',
          desc: 'Consultation des lois de base régissant la profession de notaire et l\'administration de la justice en Algérie.'
        },
        {
          name: 'Secrétariat Général du Gouvernement - Journal Officiel (JORADP)',
          url: 'https://www.joradp.dz',
          desc: 'Le seul référentiel officiel pour télécharger les décrets, lois foncières et codes commerciaux mis à jour.'
        },
        {
          name: 'Chambre Nationale des Notaires d\'Algérie',
          url: 'https://www.cnn.dz',
          desc: 'Organe d\'orientation et de régulation de l\'activité notariale au niveau national.'
        }
      ]
    },
    {
      title: 'Investissement et Création d\'Entreprise',
      icon: <Building2 className="w-6 h-6" />,
      links: [
        {
          name: 'Agence Algérienne de Promotion de l\'Investissement (AAPI)',
          url: 'https://www.aapi.dz',
          desc: 'Portail officiel d\'enregistrement des projets et d\'octroi d\'avantages fiscaux et d\'accès au foncier économique.'
        },
        {
          name: 'Centre National du Registre du Commerce - Sidjilcom (CNRC)',
          url: 'https://sidjilcom.cnrc.dz',
          desc: 'Vérification de la disponibilité des dénominations sociales, immatriculation au registre du commerce et dépôt des comptes.'
        },
        {
          name: 'Ministère du Commerce et de la Promotion des Exportations',
          url: 'https://www.commerce.gov.dz',
          desc: 'Suivi de la réglementation régissant les pratiques commerciales, la concurrence et les activités réglementées.'
        },
        {
          name: 'Chambre Algérienne de Commerce et d\'Industrie (CACI)',
          url: 'https://www.caci.dz',
          desc: 'Institution d\'appui à l\'investissement fournissant l\'assistance technique et réglementaire aux entrepreneurs.'
        }
      ]
    },
    {
      title: 'Fiscalité, Immobilier et Logement',
      icon: <BookOpen className="w-6 h-6" />,
      links: [
        {
          name: 'Direction Générale des Impôts (DGI)',
          url: 'https://mfdgi.gov.dz',
          desc: 'Portail de télédéclaration et d\'évaluation des taxes et des d\'enregistrement applicables aux actes authentiques.'
        },
        {
          name: 'Ministère de l\'Habitat, de l\'Urbanisme et de la Ville',
          url: 'https://www.mhu.gov.dz',
          desc: 'Suivi de la législation liée aux opérations d\'urbanisme, de construction et de promotions immobilières en Algérie.'
        },
        {
          name: 'Entreprise Nationale de Promotion Immobilière (ENPI)',
          url: 'https://www.enpi.dz',
          desc: 'Portail dédié au suivi des projets immobiliers libres et aidés de promotion publique.'
        }
      ]
    },
    {
      title: 'Administration Publique et Locale à Oran',
      icon: <Landmark className="w-6 h-6" />,
      links: [
        {
          name: 'Portail Officiel de la Wilaya d\'Oran',
          url: 'http://www.wilaya-oran.dz',
          desc: 'Suivi de l\'actualité, des arrêtés locaux et des décisions institutionnelles de la Wilaya d\'Oran pour l\'investissement local.'
        },
        {
          name: 'Ministère de l\'Intérieur, des Collectivités Locales et de l\'Aménagement',
          url: 'https://www.interieur.gov.dz',
          desc: 'Délivrance de documents administratifs en ligne et informations sur l\'organisation communale algérienne.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        url={`${SITE_URL}/fr/useful-links`}
        name="Liens et Institutions Utiles en Algérie | Maître Lattab Mohamed"
        description="Liens et sources juridiques utiles en Algérie - Ministère de la Justice, Journal Officiel, Registre de Commerce, proposés par l'étude de Me Lattab Mohamed."
        breadcrumbs={[
          { name: "Accueil", item: `${SITE_URL}/fr` },
          { name: "Liens utiles", item: `${SITE_URL}/fr/useful-links` }
        ]}
      />
      <main id="main-content" className="bg-gray-50 pb-20" dir="ltr">
        {/* Hero Section */}
        <div className="bg-emerald-900 text-white pt-32 pb-20 mb-12 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            {/* Back to Home Button */}
            <div className="mb-8 text-left">
              <Link 
                href="/fr" 
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-white font-bold transition-colors group"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour à l&apos;accueil de l&apos;étude
              </Link>
            </div>

            <BookOpen className="w-20 h-20 mx-auto mb-6 text-emerald-400 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center font-sans">
              Liens et Institutions Utiles en Algérie
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed text-center font-sans">
              Votre guide de référence institutionnel pour accéder directement aux portails des administrations, législations et services publics de la République Algérienne.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          {/* Navigation Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5 font-sans" aria-label="Breadcrumb">
            <Link href="/fr" className="hover:text-emerald-600 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Liens utiles</span>
          </nav>

          {/* Information Warning - Law 06-02 Compliance */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl mb-12 flex flex-col sm:flex-row items-start gap-4 shadow-sm text-left">
            <div className="p-1.5 text-amber-600 bg-amber-100 rounded-lg flex-shrink-0 mt-0.5">⚖️</div>
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-2 font-sans">Note de Régulation Notariale</h3>
              <p className="text-sm text-amber-800 leading-relaxed font-sans">
                Ce répertoire institutionnel est édité et partagé par l&apos;étude de Me Lattab Mohamed dans un but exclusif d&apos;orientation administrative générale. 
                Il ne contient aucune offre promotionnelle ou référence commerciale payante, en stricte conformité avec le Code de déontologie notariale en vigueur en Algérie (Loi 06-02).
              </p>
            </div>
          </div>

          {/* Categories Grid - Nested nicely inside terms visual wrapper */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6 md:p-12 space-y-16">
              {categories.map((category, catIdx) => (
                <section key={catIdx} className="text-left">
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {category.links.map((link, linkIdx) => (
                      <div 
                        key={linkIdx} 
                        className="p-5 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-emerald-50/10 hover:border-emerald-100/60 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-5"
                      >
                        <div className="max-w-3xl">
                          <h3 className="text-base font-bold text-gray-950 mb-1.5 font-sans">
                            {link.name}
                          </h3>
                          <p className="text-xs text-gray-600 leading-relaxed font-sans">
                            {link.desc}
                          </p>
                        </div>

                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-all shadow-sm hover:shadow hover:-translate-y-0.5 self-start md:self-auto shrink-0"
                        >
                          <span>Visiter le site officiel</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Institutional Back Link */}
          <div className="mt-14 pt-8 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 mb-4 font-sans">
              Étude sous le contrôle du Ministère de la Justice. Me Lattab Mohamed, notaire agréé près la Cour d&apos;Oran.
            </p>
            <Link
              href="/fr"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <span>Retour à la page d&apos;accueil du cabinet</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
