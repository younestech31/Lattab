import Link from 'next/link';
import { Language } from '@/lib/i18n/translations';
import { SITE_URL } from '@/lib/config';
import { JsonLdScript } from '@/components/schema';
import MapComponent from '@/components/MapComponent';
import PhoneLink from '@/components/ui/PhoneLink';

interface ContactPageViewProps {
  lang: Language;
}

export default function ContactPageView({ lang }: ContactPageViewProps) {
  const isAr = lang === 'ar';
  const pageUrl = isAr ? `${SITE_URL}/contact` : `${SITE_URL}/fr/contact`;
  const homeUrl = isAr ? '/' : '/fr';

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
        name: isAr ? 'اتصل بنا' : 'Contact',
        item: pageUrl,
      },
    ],
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${pageUrl}#contactpage`,
    url: pageUrl,
    name: isAr ? 'الاتصال وحجز موعد — ديوان التوثيق ببلدية وهران' : 'Contact et prise de rendez-vous — Office Notarial - Oran',
    description: isAr
      ? 'بيانات الاتصال بديوان التوثيق ببلدية وهران: العنوان بحي العقيد لطفي، أرقام الهاتف، البريد الإلكتروني، مواعيد العمل، والموقع على الخريطة.'
      : 'Coordonnées de l\'office notarial de Office Notarial - Oran à Oran : adresse à Akid Lotfi, téléphones, horaires et plan d\'accès.',
    mainEntity: {
      '@type': ['LegalService', 'Notary'],
      '@id': isAr ? `${SITE_URL}/#notary-office` : `${SITE_URL}/fr#notary-office`,
      name: brandTitle,
      alternateName: brandSubtitle,
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
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '08:30',
          closes: '12:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '13:30',
          closes: '16:00',
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar-DZ' : 'fr-DZ'}>
      <JsonLdScript schema={breadcrumbSchema} />
      <JsonLdScript schema={contactSchema} />

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
                {isAr ? 'اتصل بنا' : 'Contact'}
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {isAr ? 'الاتصال وحجز موعد — ديوان التوثيق ببلدية وهران' : 'Contact et rendez-vous — Office Notarial - Oran'}
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-3xl">
            {isAr
              ? 'مكتب التوثيق يستقبلكم لدراسة ملفاتكم وإنجاز كافة المعاملات القانونية والعقارية بحي العقيد لطفي بوهران.'
              : 'Notre étude vous accueille à Akid Lotfi pour étudier vos dossiers et accomplir vos actes juridiques et immobiliers.'}
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-2.5 h-7 bg-emerald-600 rounded-full" />
              {isAr ? 'بيانات الاتصال المباشر' : 'Coordonnées de l\'étude'}
            </h2>

            <div className="space-y-5 text-sm text-gray-600">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-0.5">{isAr ? 'العنوان' : 'Adresse'}</p>
                  <p className="leading-relaxed">
                    {isAr
                      ? 'حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي، وهران 31000'
                      : 'Cité 557 Logements, Immeuble D24, 1er Étage, Appt 768, Akid Lotfi, Oran 31000'}
                  </p>
                </div>
              </div>

              {/* Phone 1 & 2 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{isAr ? 'أرقام الهاتف' : 'Lignes téléphoniques'}</p>
                  <div className="space-y-1 font-mono" dir="ltr">
                    <div>
                      <PhoneLink type="office" className="text-emerald-700 font-bold hover:underline" />
                      <span className="text-gray-400 text-xs ms-2">({isAr ? 'خط المكتب الرئيسي' : 'Ligne directe'})</span>
                    </div>
                    <div>
                      <PhoneLink type="support" className="text-emerald-700 font-bold hover:underline" />
                      <span className="text-gray-400 text-xs ms-2">({isAr ? 'الأمانة والمتابعة' : 'Secrétariat'})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-0.5">{isAr ? 'البريد الإلكتروني' : 'Courriel'}</p>
                  <a href="mailto:maitrelattabmohamed@gmail.com" className="font-mono text-emerald-700 hover:underline">
                    maitrelattabmohamed@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-0.5">{isAr ? 'ساعات الاستقبال والعمل' : 'Horaires d\'ouverture'}</p>
                  <p>{isAr ? 'الأحد – الخميس: 08:30 إلى 12:00 ومن 13:30 إلى 16:00' : 'Dimanche – Jeudi : 08h30 à 12h00 et 13h30 à 16h00'}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{isAr ? 'الجمعة والسبت: عطلة أسبوعية' : 'Vendredi et Samedi : Fermé'}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="https://wa.me/213562296981"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-center text-sm transition flex items-center justify-center gap-2 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414zM12.004 0C5.374 0 0 5.373 0 12.001c0 2.112.547 4.178 1.588 6.003L.057 24l6.162-1.616a11.953 11.953 0 005.785 1.517c6.629 0 12.002-5.373 12.002-12.001C24.006 5.373 18.632 0 12.004 0zM12.004 21.902c-1.934 0-3.83-.518-5.482-1.499l-.393-.233-3.674.963.98-3.582-.255-.406a9.865 9.865 0 01-1.513-5.144c0-5.457 4.441-9.898 9.897-9.898 5.457 0 9.899 4.441 9.899 9.898 0 5.458-4.442 9.899-9.899 9.899z" />
                </svg>
                <span>{isAr ? 'مراسلة كتابية' : 'Messagerie'}</span>
              </a>
              <PhoneLink
                type="office"
                className="w-full bg-slate-100 hover:bg-slate-200 text-gray-800 font-bold py-3 px-4 rounded-xl text-center text-sm transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{isAr ? 'اتصال هاتفي مباشر' : 'Appel téléphonique'}</span>
              </PhoneLink>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-2.5 h-7 bg-emerald-600 rounded-full" />
              {isAr ? 'الموقع الجغرافي وخريطة الوصول' : 'Localisation géographique'}
            </h2>
            <div className="w-full h-80 rounded-xl overflow-hidden border border-gray-200 flex-grow mb-4">
              <MapComponent />
            </div>
            <a
              href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:underline text-sm font-semibold flex items-center justify-center gap-1.5"
            >
              <span>{isAr ? 'فتح في تطبيق خرائط Google' : 'Ouvrir dans Google Maps'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Institutional notice */}
        <section className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-sm text-emerald-950 leading-relaxed">
          <p className="font-bold mb-1">
            {isAr ? 'ملاحظة قانونية وتنظيمية' : 'Cadre légal et déontologique'}
          </p>
          <p className="text-emerald-800">
            {isAr
              ? 'مكتب التوثيق ضابط عمومي مفوض لتقديم الخدمات التوثيقية الرسمية طبقاً للقانون 06-02 المنظم لمهنة الموثق. المعاملات تتم حصرياً بمقر المكتب التوثيقي أو بموجب تنقل رسمي مأذون به قانوناً.'
              : 'L\'office notarial est une charge publique régie par la Loi n° 06-02. Les actes authentiques sont instrumentés au siège de l\'étude ou sur déplacement légalement autorisé.'}
          </p>
        </section>
      </div>
    </div>
  );
}
