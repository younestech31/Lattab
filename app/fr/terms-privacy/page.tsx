import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, FileText, Scale, Lock, Phone, MapPin, Mail, Clock, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { WORKING_HOURS, SITE_URL, GOOGLE_MAPS_URL } from '@/lib/config';
import PhoneLink from '@/components/ui/PhoneLink';

export const metadata: Metadata = {
  title: { absolute: "Conditions & Confidentialité — Office Notarial" },
  description: "Découvrez les conditions d'utilisation et la politique de confidentialité de l'étude notariale de Office Notarial - Oran à Oran: traitement de vos données, obligations juridiques et secret professionnel.",
  alternates: {
    canonical: `${SITE_URL}/fr/terms-privacy`,
    languages: {
      'ar-DZ': `${SITE_URL}/terms-privacy`,
      'fr-DZ': `${SITE_URL}/fr/terms-privacy`,
      'x-default': `${SITE_URL}/terms-privacy`,
    },
  },
  openGraph: {
    url: `${SITE_URL}/fr/terms-privacy`,
    title: "Conditions & Confidentialité — Office Notarial",
    description: "Découvrez les conditions d'utilisation et la politique de confidentialité de l'étude notariale de Office Notarial - Oran à Oran.",
    siteName: 'Office Notarial - Oran',
    images: [{ url: `${SITE_URL}/logo.webp`, width: 512, height: 512, alt: "Conditions d'Utilisation" }],
    locale: 'fr_DZ',
    alternateLocale: ['ar_DZ'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Conditions & Confidentialité — Office Notarial",
    description: "Découvrez les conditions d'utilisation et la politique de confidentialité de l'étude notariale de Office Notarial - Oran à Oran.",
    images: [`${SITE_URL}/logo.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TermsPrivacyPageFR = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50" dir="ltr">
        {/* Hero Section */}
        <div className="bg-emerald-900 text-white pt-32 pb-20 mb-12 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Back to Home Button inside Hero */}
            <div className="mb-8 text-left">
              <Link 
                href="/fr" 
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-white font-bold transition-colors group"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour à l&apos;accueil
              </Link>
            </div>

            <Shield className="w-20 h-20 mx-auto mb-6 text-emerald-400 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
              Conditions d&apos;Utilisation &amp; Politique de Confidentialité
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed text-center font-sans">
              Office Notarial - Oran - Nous nous engageons à la transparence, au secret professionnel et à la protection de vos données conformément à la législation algérienne.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          {/* Institutional & Deontological Legal Banner */}
          <div className="bg-emerald-900 text-emerald-100 border border-emerald-800/80 p-6 rounded-2xl mb-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-2.5 bg-emerald-900 text-emerald-300 rounded-xl flex-shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-800 text-emerald-200 text-xs px-2.5 py-0.5 rounded font-bold">
                    Avis Légal et Réglementaire Officiel
                  </span>
                  <span className="text-emerald-400 text-xs font-mono">Décret exécutif 08-243 • Loi 06-02</span>
                </div>
                <p className="text-white font-medium text-base sm:text-lg leading-relaxed">
                  Ce site a un caractère purement informatif. Les honoraires du notaire sont fixés exclusivement par la tarification officielle (<strong>Décret exécutif n° 08-243</strong>). Aucune publicité commerciale n&apos;est pratiquée.
                </p>
                <p className="text-emerald-300/90 text-sm leading-relaxed" dir="rtl">
                  « هذا الموقع ذو طابع إعلامي محض. أتعاب الموثق محددة حصراً بالتعريفة الرسمية المقننة (المرسوم التنفيذي 08-243). لا يمارس المكتب أي إشهار تجاري. »
                </p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl mb-12 flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Avis Réglementaire &amp; Secret Professionnel</h3>
              <p className="text-amber-800 leading-relaxed font-sans">
                Veuillez lire attentivement ce document avant d&apos;utiliser la plateforme administrative de prise de rendez-vous. L&apos;utilisation de cette plateforme constitue une acceptation formelle du statut institutionnel de l&apos;office notarial en tant qu&apos;officier public ministériel soumis aux règles déontologiques et au secret professionnel absolu.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6 md:p-12 space-y-16">
              
              {/* Section 1: Introduction */}
              <section>
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Préambule et Cadre Juridique</h2>
                </div>
                <div className="prose prose-emerald prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>
                    Ce document définit les règles organisationnelles et déontologiques régissant l&apos;utilisation du portail de l&apos;<strong>Office Public Notarial — Maître Lattab Mohamed (Notaire près le Tribunal de Fellaoucène, Cour d&apos;Oran)</strong>. Ce portail a pour vocation exclusive d&apos;éclairer les usagers sur les démarches juridiques et de faciliter la gestion administrative des rendez-vous.
                  </p>
                  <p>
                    L&apos;office notarial est placé sous la tutelle du Ministère de la Justice et sous la surveillance de la <strong>Chambre Nationale des Notaires</strong> ainsi que de la <strong>Chambre Régionale des Notaires (Région Ouest)</strong>, dans le respect scrupuleux de :
                  </p>
                  <ul className="space-y-2 text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 list-none">
                    <li>• <strong>La Loi n° 06-02</strong> du 20 février 2006, portant organisation de la profession de notaire.</li>
                    <li>• <strong>Le Décret exécutif n° 08-243</strong> du 3 août 2008, fixant la tarification officielle et réglementée des honoraires de notaire.</li>
                    <li>• <strong>L&apos;Article 14 de la Loi 06-02 et l&apos;Article 301 du Code pénal</strong>, instituant le secret professionnel absolu.</li>
                    <li>• <strong>L&apos;Article 22 de la Loi 06-02</strong>, interdisant formellement toute activité commerciale, spéculative ou publicitaire.</li>
                    <li>• <strong>La Loi n° 18-07</strong> (modifiée et complétée par la loi 25-11), relative à la protection des personnes physiques dans le traitement des données à caractère personnel.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Définitions Fondamentales</h3>
                  <ul className="space-y-4 list-none bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>&quot;L&apos;Office Public Notarial&quot;:</strong> L&apos;étude de l&apos;officier public délégataire de la puissance publique, habilité à authentifier les conventions et leur conférer force probante et exécutoire.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>&quot;Le Portail Électronique&quot;:</strong> L&apos;interface informatique d&apos;information juridique et d&apos;accueil administratif des usagers.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>&quot;Responsable du traitement&quot;:</strong> L&apos;Office Notarial à Oran, tenu par l&apos;obligation stricte du secret professionnel et la protection des données.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>&quot;La Demande de Rendez-vous&quot;:</strong> Une démarche purement préparatoire d&apos;organisation d&apos;accueil, ne générant aucun engagement contractuel ni financier avant comparution physique à l&apos;étude.</div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Dedicated Section: Tarification officielle et interdiction commerciale */}
              <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-200 pb-4">
                  <div className="p-3 bg-emerald-800 text-white rounded-xl">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Tarification Officielle Réglementée &amp; Interdiction de la Publicité</h2>
                    <p className="text-sm text-gray-500 mt-1">Application du Décret exécutif n° 08-243 et de l&apos;Article 22 de la Loi n° 06-02</p>
                  </div>
                </div>
                <div className="prose prose-emerald max-w-none text-gray-700 leading-relaxed space-y-4 font-sans">
                  <p>
                    <strong>1. Tarification exclusive et réglementée :</strong> En droit algérien, les honoraires du notaire ne sont ni négociables ni soumis aux lois du marché commercial. Ils sont fixés de manière impérative par le <strong>Décret exécutif n° 08-243</strong>. L&apos;office applique cette tarification d&apos;État avec une rigueur absolue, sans majoration, rabais ni discrimination.
                  </p>
                  <p>
                    <strong>2. Interdiction absolue de publicité :</strong> Conformément à <strong>l&apos;article 22 de la Loi n° 06-02</strong>, il est strictement interdit au notaire d&apos;exercer toute activité commerciale ou spéculative, ou de faire de la publicité personnelle. Ce site web a une vocation exclusivement civique et documentaire (renseigner sur les pièces requises et les lois en vigueur).
                  </p>
                  <p>
                    <strong>3. Nature du simulateur de prix de référence :</strong> Le calculateur présent sur le site est un outil technique d&apos;information publique basé sur les barèmes référentiels officiels de la Direction Générale des Impôts (DGI) pour l&apos;assiette fiscale, et ne comprend aucune tarification d&apos;honoraires commerciaux libres.
                  </p>
                </div>
              </section>

              {/* Section 2: Services & Appointments */}
              <section>
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Services de Réservation en Ligne</h2>
                </div>
                <div className="prose prose-emerald prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>
                    La réservation en ligne est une procédure <strong>organisationnelle et administrative</strong> visant à faciliter l&apos;accueil des clients. Elle ne produit aucun effet juridique en soi et ne constitue pas la rédaction d&apos;un acte de transfert ou de droit tant que la présence physique n&apos;a pas eu lieu et que l&apos;ensemble des conditions légales n&apos;ont pas été remplies.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                      <h4 className="font-bold text-emerald-900 mb-4 text-lg">Services Disponibles à la Réservation</h4>
                      <ul className="space-y-3 text-emerald-800 text-sm md:text-base">
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Actes de vente et d&apos;achat immobiliers</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Actes de location et bail d&apos;habitation ou commercial</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Procurations, délégations et mandats</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Contrats de mariage et actes de famille</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Constitution ou transfert de sociétés</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Hypothèques et garanties d&apos;assurance</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Déclarations publiques et légalisations</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Consultations juridiques générales</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Obligations de Présence</h4>
                      <ul className="space-y-4 text-gray-700 text-sm md:text-base">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                          <span>Être présent physiquement à l&apos;étude 10 minutes avant l&apos;heure fixée.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                          <span>Amener toutes les parties prenantes et témoins concernés par l&apos;acte.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                          <span>Présenter une pièce d&apos;identité nationale officielle, originale et en cours de validité.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                          <span>Fournir l&apos;ensemble des pièces justificatives, titres et documents originaux requis pour la transaction.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Annulation et Modification</h3>
                  <p>
                    Le service de réservation en ligne via la plateforme est <strong>entièrement gratuit</strong>. L&apos;utilisateur a le droit d&apos;annuler ou de modifier son rendez-vous en nous contactant par téléphone ou par e-mail au moins 24 heures avant l&apos;heure prévue.
                  </p>
                </div>
              </section>

              {/* Section 3: Privacy Policy & Professional Secrecy */}
              <section>
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Politique de Confidentialité, Secret Professionnel &amp; Données</h2>
                    <p className="text-sm text-gray-500 mt-1">Article 14 de la Loi 06-02, Article 301 du Code pénal et Loi 18-07</p>
                  </div>
                </div>
                <div className="prose prose-emerald prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                  
                  {/* Formal Professional Secrecy Pledge Box */}
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-2xl">
                    <h4 className="text-lg font-bold text-emerald-900 mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-emerald-700" />
                      Secret Professionnel Absolu &amp; Engagement Formel de Non-Divulgation
                    </h4>
                    <p className="text-emerald-900 text-sm md:text-base leading-relaxed m-0">
                      En application de <strong>l&apos;article 14 de la Loi n° 06-02</strong> portant organisation de la profession de notaire, le notaire ainsi que l&apos;ensemble des collaborateurs et employés de l&apos;office sont tenus au secret professionnel le plus absolu sur toutes les informations, faits et déclarations dont ils ont connaissance en raison de leurs fonctions. Toute violation du secret professionnel est sévèrement sanctionnée pénalement par <strong>l&apos;article 301 du Code pénal algérien</strong>. L&apos;office souscrit un engagement formel et irrévocable de non-divulgation, d&apos;intégrité et de confidentialité.
                    </p>
                  </div>

                  <p>
                    Nous appliquons avec rigueur les dispositions de la <strong>Loi n° 18-07</strong> (modifiée et complétée par la loi 25-11) relative à la protection des personnes physiques dans le traitement des données à caractère personnel. En vertu du principe de minimisation, seules les informations strictement nécessaires à la planification du calendrier de rendez-vous sont requises.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Données collectées et finalité administrative exclusive :</h3>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8">
                    <table className="w-full text-sm md:text-base text-left">
                      <thead className="bg-gray-50 text-gray-700">
                        <tr>
                          <th className="px-6 py-4 font-bold border-b border-gray-200">Type de données</th>
                          <th className="px-6 py-4 font-bold border-b border-gray-200">Finalité administrative exclusive</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="px-6 py-4 font-medium text-gray-900 font-sans">Données d&apos;identité</td>
                          <td className="px-6 py-4">Nom et prénom (identification administrative de l&apos;usager pour la gestion du registre d&apos;accueil).</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-gray-900 font-sans">Données de contact</td>
                          <td className="px-6 py-4">Numéro de téléphone et adresse e-mail (confirmation administrative du rendez-vous et coordination en cas d&apos;empêchement).</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-gray-900 font-sans">Données du service</td>
                          <td className="px-6 py-4">Catégorie de prestation notariée envisagée et date souhaitée (préparation de l&apos;inventaire des pièces légales requises).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Ce que nous ne collectons JAMAIS en ligne :</h3>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-2xl mb-8 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-red-800 m-0 leading-relaxed font-sans">
                        Pour préserver le secret professionnel et la sécurité des parties, il est formellement prohibé de transmettre via ce site tout titre de propriété, acte d&apos;état civil confidentiel, coordonnées bancaires, testament ou document sensible. Tout dépôt de pièces et examen au fond des dossiers s&apos;effectue physiquement et confidentiellement au sein de l&apos;office.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Hébergement et sécurité technique des données :</h3>
                  <p>
                    Le traitement technique des réservations repose sur une infrastructure sécurisée (Google Firebase) assurant le chiffrement des flux. En consentant à la prise de rendez-vous en ligne, vous autorisez ce traitement technique automatisé, strictement encadré et réservé au personnel assermenté ou soumis au secret professionnel de l&apos;office.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Engagement de Non-Divulgation &amp; Absence Totale de Prospection :</h3>
                  <p>
                    L&apos;office notarial garantit qu&apos;aucune donnée n&apos;est vendue, cédée, louée ou exploitée à des fins commerciales ou publicitaires. Vos coordonnées sont utilisées exclusivement pour vous confirmer votre date d&apos;accueil à l&apos;étude.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Durée de Conservation &amp; Destruction :</h3>
                  <p>
                    Les données de rendez-vous en ligne sont conservées uniquement pour le temps strictement requis par l&apos;organisation du calendrier d&apos;accueil. Après réalisation de l&apos;audience notariale ou expiration du délai, ces enregistrements temporaires sont effacés conformément aux obligations réglementaires.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. Droits de l&apos;Utilisateur (Personne concernée) :</h3>
                  <p>Conformément à la législation algérienne, vous disposez des droits suivants concernant vos données :</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>Droit d&apos;accès et d&apos;information:</strong> Vous avez le droit de savoir quelles données nous traitons vous concernant.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>Droit de rectification:</strong> Vous avez le droit de demander la modification de données inexactes ou incomplètes.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>Droit à l&apos;effacement:</strong> Vous avez le droit de demander la suppression de vos données de notre base de données de réservation.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>Droit de retrait:</strong> Retirer à tout moment votre consentement pour le traitement électronique de vos informations.</div>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">7. Cookies :</h3>
                  <p>Le site utilise des services d&apos;hébergement cloud à des fins purement techniques pour faciliter la soumission de la réservation. Aucun traceur n&apos;est utilisé à des fins publicitaires ou de ciblage marketing.</p>
                </div>
              </section>

              {/* Section 4: Contact & Official Info */}
              <section>
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                    <Info className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact et Informations Officielles</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Pour exercer vos droits d&apos;accès, de rectification ou de suppression de vos données, ou pour toute demande réglementaire ou administrative, vous pouvez nous joindre par nos canaux officiels :
                    </p>
                    <div className="space-y-5 bg-gray-50 p-6 rounded-2xl border border-gray-100 font-sans">
                      <div className="flex items-start gap-4 text-gray-700">
                        <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <a 
                          href={GOOGLE_MAPS_URL} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-emerald-600 transition-colors"
                        >
                          Cité 557 Logements, Immeuble D24, 1er Étage, N° 768, Coopérative El Aqid Lotfi, Oran, Algérie
                        </a>
                      </div>
                      <div className="flex items-start gap-4 text-gray-700">
                        <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                          <PhoneLink type="office" className="hover:text-emerald-600 transition-colors" />
                          <span className="text-xs font-normal text-gray-500 ml-2">(Office)</span>
                        </div>
                        <div>
                          <PhoneLink type="support" className="hover:text-emerald-600 transition-colors text-sm text-gray-500" />
                          <span className="text-xs font-normal ml-2">(Assistance hors horaires uniquement)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-gray-700">
                        <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <a href="mailto:maitrelattabmohamed@gmail.com" className="font-medium hover:text-emerald-600 transition-colors">maitrelattabmohamed@gmail.com</a>
                      </div>
                      <div className="flex items-center gap-4 text-gray-700">
                        <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span>Dimanche - Jeudi: {WORKING_HOURS.full}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 flex flex-col justify-center text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-900 mb-4">Consentement Explicite de Traitement</h4>
                    <p className="text-emerald-800 leading-relaxed font-sans text-sm md:text-base">
                      En utilisant ce site et en cochant la case d&apos;acceptation lors de la soumission d&apos;une demande de réservation, vous reconnaissez avoir pris connaissance, compris et accepté explicitement l&apos;ensemble des conditions d&apos;utilisation et de la politique de confidentialité ci-dessus, y compris le traitement et le stockage technique de vos données par le fournisseur cloud à des fins exclusives de gestion de votre rendez-vous.
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
          
          <div className="text-center mt-12 text-gray-500 text-sm">
            <p>Version: 1.2 | Dernière mise à jour : 12/04/2026</p>
            <p className="mt-2 font-medium">Tous droits réservés &copy; 2026 - Office Notarial - Oran</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacyPageFR;
