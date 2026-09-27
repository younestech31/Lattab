import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/lib/i18n/translations';
import { SITE_URL } from '@/lib/config';
import { JsonLdScript } from '@/components/schema';
import PhoneLink from '@/components/ui/PhoneLink';

interface AboutViewProps {
  lang: Language;
}

export default function AboutView({ lang }: AboutViewProps) {
  const isAr = lang === 'ar';
  const pageUrl = isAr ? `${SITE_URL}/a-propos` : `${SITE_URL}/fr/a-propos`;
  const homeUrl = isAr ? '/' : '/fr';
  const contactUrl = isAr ? '/contact' : '/fr/contact';

  const brandTitle = isAr ? 'ديوان التوثيق ببلدية وهران' : 'Office Notarial - Oran';
  const brandSubtitle = isAr ? 'الديوان العمومي للتوثيق' : 'Office notarial Office Notarial - Oran';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isAr ? 'الرئيسية' : 'Accueil',
        item: homeUrl === '/' ? SITE_URL : `${SITE_URL}/fr`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isAr ? 'عن المكتب' : 'À propos',
        item: pageUrl,
      },
    ],
  };

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${pageUrl}#aboutpage`,
    url: pageUrl,
    name: isAr ? 'عن ديوان التوثيق ببلدية وهران' : 'À propos de l\'office notarial de Office Notarial - Oran',
    description: isAr
      ? 'نبذة تعريفية عن ديوان التوثيق - وهران، موثق معتمد لدى محكمة فلاوسن بوهران، المؤهلات العلمية، المسار المهني، ومبادئ العمل التوثيقي.'
      : 'Présentation de Office Notarial - Oran, notaire agréé près le Tribunal de Flaussen à Oran : formation universitaire, parcours et déontologie.',
    mainEntity: {
      '@type': ['LegalService', 'Notary'],
      '@id': isAr ? `${SITE_URL}/#notary-office` : `${SITE_URL}/fr#notary-office`,
      name: brandTitle,
      alternateName: brandSubtitle,
      image: `${SITE_URL}/logo.webp`,
      telephone: '+213562296981',
      email: 'maitrelattabmohamed@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: isAr
          ? 'حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي'
          : 'Cité 557 Logements, Immeuble D24, 1er Étage, Appt 768, Akid Lotfi',
        addressLocality: isAr ? 'وهران' : 'Oran',
        addressRegion: isAr ? 'وهران' : 'Oran',
        postalCode: '31000',
        addressCountry: 'DZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.7277124,
        longitude: -0.5931358,
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar-DZ' : 'fr-DZ'}>
      <JsonLdScript schema={breadcrumbSchema} />
      <JsonLdScript schema={aboutSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 text-white pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-emerald-200">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href={homeUrl} className="hover:text-white transition-colors underline-offset-4 hover:underline">
                  {isAr ? 'الرئيسية' : 'Accueil'}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">
                {isAr ? 'عن المكتب' : 'À propos'}
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {isAr ? 'عن المكتب — ديوان التوثيق ببلدية وهران' : 'À propos de l\'office — Office Notarial - Oran'}
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-3xl">
            {isAr
              ? 'ضابط عمومي مفوض من الدولة الجزائرية لتوثيق العقود وتثبيت المعاملات القانونية بمهنية وحياد تام.'
              : 'Officier public investi d\'une délégation de puissance publique, garant de la sécurité juridique de vos contrats à Oran.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Credentials Card */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-emerald-50 border-4 border-emerald-100 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
            <Image
              src="/logo.webp"
              alt={brandTitle}
              width={160}
              height={160}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="space-y-4 text-center md:text-start flex-grow">
            <div>
              <p className="text-emerald-700 font-bold text-sm tracking-wide uppercase">
                {isAr ? 'المعلومات المهنية والرسمية' : 'Qualifications et statut officiel'}
              </p>
              <h2 className="text-2xl font-black text-gray-900">
                {brandTitle}
              </h2>
              <p className="text-gray-500 text-sm">
                {brandSubtitle}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100/50">
                <p className="font-bold text-emerald-950">{isAr ? 'الصفة القانونية' : 'Statut légal'}</p>
                <p className="text-emerald-800">{isAr ? 'ديوان عمومي للتوثيق تحت إشراف وزارة العدل' : 'Office public notarial sous tutelle du Ministère de la Justice'}</p>
              </div>
              <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100/50">
                <p className="font-bold text-emerald-950">{isAr ? 'القانون المنظم' : 'Cadre réglementaire'}</p>
                <p className="text-emerald-800">{isAr ? 'القانون رقم 06-02 المنظم لمهنة الموثق' : 'Loi n° 06-02 portant organisation du notariat'}</p>
              </div>
              <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100/50">
                <p className="font-bold text-emerald-950">{isAr ? 'الاختصاص الإقليمي' : 'Compétence territoriale'}</p>
                <p className="text-emerald-800">{isAr ? 'مجلس قضاء وهران والمحاكم التابعة له' : 'Cour d\'Oran et ses tribunaux rattachés'}</p>
              </div>
              <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100/50">
                <p className="font-bold text-emerald-950">{isAr ? 'طبيعة الخدمة' : 'Nature de la fonction'}</p>
                <p className="text-emerald-800">{isAr ? 'تقديم الخدمات والتحريرات التوثيقية الرسمية' : 'Authentification et rédaction des actes officiels'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Notary Role & Mission */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <span className="w-2.5 h-7 bg-emerald-600 rounded-full" />
            {isAr ? 'رسالة المكتب ومبادئ المهنة التوثيقية' : 'Mission, valeurs et cadre déontologique'}
          </h2>
          <div className="space-y-4 text-gray-600 text-base leading-relaxed">
            <p>
              {isAr
                ? 'يخضع الموثق في الجزائر لأحكام القانون رقم 06-02 المتضمن تنظيم مهنة الموثق، ويُعتبر ضابطاً عمومياً مفوضاً يتولى تحرير العقود التي يشترط فيها القانون الصبغة الرسمية أو تلك التي يرغب الأطراف في إعطائها هذه الصبغة.'
                : 'En Algérie, le notaire exerce son ministère sous le régime de la Loi n° 06-02 portant organisation de la profession notariale. Investi de l\'autorité publique, il confère l\'authenticité aux conventions et garantit la régularité juridique des engagements patrimoniaux.'}
            </p>
            <p>
              {isAr
                ? 'يلتزم ديوان التوثيق - وهران بمبادئ السر المهني المطلق، والحياد الإيجابي بين كافة الأطراف، والحرص الصارم على مطابقة المعاملات للنصوص التشريعية والتنظيمية السارية، ولا سيما في مجالات العقود العقارية، تأسيس وتعديل الشركات التجارية، وتسوية التركات العائلية المعقدة.'
                : 'L\'office notarial de Office Notarial - Oran observe scrupuleusement le secret professionnel, l\'impartialité la plus stricte et le devoir de conseil éclairé, notamment pour la sécurisation des acquisitions immobilières, la structuration des entreprises et la transmission successorale.'}
            </p>
          </div>
        </section>

        {/* Contact & Location NAP */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <span className="w-2.5 h-7 bg-emerald-600 rounded-full" />
            {isAr ? 'بيانات الاتصال وموقع المكتب' : 'Coordonnées et accès à l\'étude'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900">{isAr ? 'العنوان' : 'Adresse'}</p>
                  <p>
                    {isAr
                      ? 'حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي، وهران 31000'
                      : 'Cité 557 Logements, Immeuble D24, 1er Étage, Appt 768, Akid Lotfi, Oran 31000'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900">{isAr ? 'أرقام الهاتف' : 'Téléphones'}</p>
                  <div className="space-y-1 font-mono" dir="ltr">
                    <div>
                      <PhoneLink type="office" className="text-emerald-700 hover:underline" />
                      <span className="text-gray-400 text-xs ms-2">({isAr ? 'المكتب' : 'Bureau'})</span>
                    </div>
                    <div>
                      <PhoneLink type="support" className="text-emerald-700 hover:underline" />
                      <span className="text-gray-400 text-xs ms-2">({isAr ? 'المتابعة' : 'Secrétariat'})</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900">{isAr ? 'البريد الإلكتروني' : 'Courriel'}</p>
                  <a href="mailto:maitrelattabmohamed@gmail.com" className="font-mono text-emerald-700 hover:underline">
                    maitrelattabmohamed@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900">{isAr ? 'أوقات العمل' : 'Horaires d\'ouverture'}</p>
                  <p>{isAr ? 'الأحد إلى الخميس: 08:30 – 12:00 ومن 13:30 – 16:00' : 'Dimanche au Jeudi : 08h30 – 12h00 et 13h30 – 16h00'}</p>
                  <p className="text-xs text-gray-400">{isAr ? 'الجمعة والسبت: مغلق' : 'Vendredi et Samedi : Fermé'}</p>
                </div>
              </div>
            </div>

            {/* Map link button & directions */}
            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-emerald-950 mb-2">{isAr ? 'الوصول إلى المكتب' : 'Accès à l\'étude'}</h3>
                <p className="text-sm text-emerald-800 leading-relaxed mb-4">
                  {isAr
                    ? 'يقع المكتب بحي العقيد لطفي بوهران، على مقربة من المحاور الرئيسية، ويتوفر على مواقف سيارات قريبة وولوج ميسر.'
                    : 'Située dans le quartier d\'Akid Lotfi à Oran, l\'étude est aisément accessible depuis les grands axes avec facilités de stationnement à proximité.'}
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-center text-sm transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>{isAr ? 'فتح الموقع على خرائط Google' : 'Itinéraire sur Google Maps'}</span>
                </a>
                <Link
                  href={contactUrl}
                  className="w-full bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold py-3 px-4 rounded-xl text-center text-sm transition block"
                >
                  {isAr ? 'صفحة التواصل وحجز موعد' : 'Formulaire de contact et rendez-vous'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
