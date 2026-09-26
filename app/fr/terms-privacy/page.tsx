import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, FileText, Scale, Lock, Phone, MapPin, Mail, Clock, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { WORKING_HOURS, SITE_URL } from '@/lib/config';

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
              Office Notarial de Office Notarial - Oran - Nous nous engageons à la transparence, au secret professionnel et à la protection de vos données conformément à la législation algérienne.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          {/* Important Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl mb-12 flex flex-col sm:flex-row items-start gap-4 shadow-sm">
            <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Avis Important</h3>
              <p className="text-amber-800 leading-relaxed">
                Veuillez lire attentivement ce document avant d&apos;utiliser la plateforme ou de prendre rendez-vous. En utilisant nos services, vous reconnaissez avoir lu, compris et accepté l&apos;ensemble des conditions énoncées ci-dessous, et vous consentez expressément au traitement de vos données dans le cadre du service notarial.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Préambule et Cadre Général</h2>
                </div>
                <div className="prose prose-emerald prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>
                    Ce document constitue un accord contraignant entre l&apos;utilisateur et le site de l&apos;<strong>Office Notarial de Office Notarial - Oran</strong>, une plateforme électronique conçue de manière à faciliter et organiser la prise de rendez-vous et la présentation de services notariaux agréés en République Algérienne Démocratique et Populaire.
                  </p>
                  <p>
                    L&apos;office est soumis au contrôle et à la supervision de la <strong>Chambre Nationale des Notaires</strong> et respecte toutes les dispositions légales en vigueur, notamment la Loi n° 06-02 relative à la profession de notaire, et la Loi n° 18-07 relative à la protection des personnes physiques dans le traitement des données à caractère personnel (modifiée et complétée par la loi 25-11).
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Définitions de Base</h3>
                  <ul className="space-y-4 list-none bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>&quot;La Plateforme&quot;:</strong> Le site web de l&apos;Office Notarial de Office Notarial - Oran, dédié au service de prise de rendez-vous.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>&quot;Responsable du traitement&quot;:</strong> L&apos;Office Notarial de Office Notarial - Oran, qui détermine les finalités et les moyens du traitement de vos données.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>&quot;L&apos;Utilisateur&quot; (Personne concernée):</strong> Toute personne physique majeure ou personne morale légalement représentée, qui accède à la plateforme et utilise ses services.</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <div><strong>&quot;La Réservation&quot;:</strong> La demande de rendez-vous en ligne effectuée auprès de l&apos;office à une date et heure précises.</div>
                    </li>
                  </ul>
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

              {/* Section 3: Privacy Policy */}
              <section>
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Politique de Confidentialité &amp; Protection des Données</h2>
                </div>
                <div className="prose prose-emerald prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>
                    Nous nous engageons pleinement à protéger votre vie privée et à respecter le secret professionnel conformément à la Loi n° 18-07 relative à la protection des personnes physiques dans le traitement des données à caractère personnel (modifiée et complétée par la loi 25-11). Nous ne collectons que les données strictement nécessaires (principe de minimisation) pour fournir le service et faciliter nos échanges avec vous.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Données collectées et finalités :</h3>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8">
                    <table className="w-full text-sm md:text-base text-left">
                      <thead className="bg-gray-50 text-gray-700">
                        <tr>
                          <th className="px-6 py-4 font-bold border-b border-gray-200">Type de données</th>
                          <th className="px-6 py-4 font-bold border-b border-gray-200">Finalité de la collecte</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="px-6 py-4 font-medium text-gray-900 font-sans">Données d&apos;identité</td>
                          <td className="px-6 py-4">Nom complet (pour identifier la personne effectuant la réservation et préparer le dossier initial).</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-gray-900 font-sans">Données de contact</td>
                          <td className="px-6 py-4">Numéro de téléphone et adresse e-mail (pour confirmer la réservation et vous contacter en cas d&apos;urgence ou de modification).</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-gray-900 font-sans">Données du service</td>
                          <td className="px-6 py-4">Type de prestation demandée, date choisie, et nom de l&apos;entreprise si applicable (pour organiser la séance et de préparer l&apos;avant-projet).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Ce que nous ne collectons JAMAIS en ligne :</h3>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-2xl mb-8 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-red-800 m-0 leading-relaxed font-sans">
                        Nous ne demandons jamais la saisie du contenu d&apos;actes personnels ou commerciaux sensibles, de coordonnées bancaires ou de données hautement confidentielles (santé, génétiques, etc.) via notre site web. Ces informations doivent être transmises exclusivement en personne et de manière confidentielle au sein de l&apos;office.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Hébergement et transfert de données (Important) :</h3>
                  <p>
                    Pour garantir la rapidité, la stabilité et la sécurité du service de réservation en ligne, notre plateforme utilise un fournisseur de services cloud de confiance mondiale (Google Firebase). En acceptant cette politique de confidentialité, vous consentez expressément au transfert et au stockage de vos données de réservation sur des serveurs cloud qui peuvent être situés en dehors du territoire national, et ce exclusivement aux fins du traitement technique de votre réservation.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Sécurité et Confidentialité des Données :</h3>
                  <p>
                    Vos données de réservation sont exploitées exclusivement pour l&apos;organisation des rendez-vous et la communication avec vous. Nous garantissons que vos données ne seront ni vendues ni partagées avec des tiers à des fins publicitaires. L&apos;accès est restreint au personnel de l&apos;office soumis au secret professionnel absolu. La plateforme fait l&apos;objet de mesures de sécurité physiques et logicielles pour préserver l&apos;intégrité des renseignements conformément à la loi (notamment l&apos;article 38 de la loi 18-07).
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Durée de Conservation des Données :</h3>
                  <p>
                    Les données de réservation en ligne sont conservées uniquement pendant la période requise pour l&apos;accomplissement du rendez-vous et l&apos;organisation du calendrier de l&apos;office, avant d&apos;être archivées ou supprimées conformément aux obligations régissantes de la profession notariale.
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
                          href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-emerald-600 transition-colors"
                        >
                          Cité 557 Logements, Immeuble D24, 1er Étage, N° 768, Coopérative El Aqid Lotfi, Oran, Algérie
                        </a>
                      </div>
                      <div className="flex items-start gap-4 text-gray-700">
                        <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                        <div className="font-medium flex flex-col space-y-1">
                          <a href="tel:+213562296981" className="hover:text-emerald-600 transition-colors">
                            +213 562 29 69 81 <span className="text-xs font-normal text-gray-500 ml-2">(Office)</span>
                          </a>
                          <a href="tel:+213558440001" className="hover:text-emerald-600 transition-colors text-sm text-gray-500">
                            +213 558 44 00 01 <span className="text-xs font-normal ml-2">(Assistance hors horaires uniquement)</span>
                          </a>
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
            <p className="mt-2 font-medium">Tous droits réservés &copy; 2026 - Office Notarial de Office Notarial - Oran</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacyPageFR;
