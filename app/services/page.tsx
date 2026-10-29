import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Building2, Users, Scale, Heart, Lock, ArrowLeft, Calendar, FileText } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/data/servicesData';
import { SITE_URL } from '@/lib/config';
import WebPageSchema from '@/components/WebPageSchema';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';
import PhoneLink from '@/components/ui/PhoneLink';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'دليل المعاملات والخدمات التوثيقية المعتمدة بديوان التوثيق بوهران: العقود العقارية، تأسيس الشركات، الوكالات، قسمة التركات والرهون طبقاً للقانون الجزائري.';
  assertDescriptionLength(desc, 'services-ar');

  const pageUrl = `${SITE_URL}/services`;
  const frUrl = `${SITE_URL}/fr/services`;

  return {
    title: { absolute: 'دليل الخدمات التوثيقية — ديوان التوثيق وهران' },
    description: desc,
    alternates: {
      canonical: pageUrl,
      languages: {
        'ar-DZ': pageUrl,
        'fr-DZ': frUrl,
        'x-default': pageUrl,
      },
    },
    openGraph: {
      title: 'دليل الخدمات التوثيقية — ديوان التوثيق وهران',
      description: desc,
      url: pageUrl,
      siteName: 'ديوان التوثيق بوهران — الأستاذ لعطب محمد',
      locale: 'ar_DZ',
      alternateLocale: ['fr_DZ'],
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'دليل الخدمات التوثيقية ديوان التوثيق وهران',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'دليل الخدمات التوثيقية — ديوان التوثيق وهران',
      description: desc,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'vente-immobiliere': <Home className="w-7 h-7 text-emerald-600" />,
  'creation-societe': <Building2 className="w-7 h-7 text-emerald-600" />,
  'procuration': <Users className="w-7 h-7 text-emerald-600" />,
  'succession': <Scale className="w-7 h-7 text-emerald-600" />,
  'contrat-mariage': <Heart className="w-7 h-7 text-emerald-600" />,
  'hypotheque': <Lock className="w-7 h-7 text-emerald-600" />,
};

const SERVICE_BOOKING_PARAM_AR: Record<string, string> = {
  'vente-immobiliere': 'عقود البيع والشراء العقارية',
  'creation-societe': 'تأسيس الشركات والمؤسسات',
  'procuration': 'الوكالات والتفويضات',
  'succession': 'عقود الزواج والمستندات العائلية',
  'contrat-mariage': 'عقود الزواج والمستندات العائلية',
  'hypotheque': 'الرهن والتأمينات',
};

export default function ServicesPage() {
  const serviceList = Object.values(SERVICES_DATA);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'الخدمات التوثيقية بديوان التوثيق بوهران',
    description: 'قائمة المعاملات والخدمات القانونية والتوثيقية المعتمدة رسمياً',
    itemListElement: serviceList.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.ar.title,
      url: `${SITE_URL}/services/${service.slug}`,
      description: service.ar.subtitle,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl" lang="ar">
      <SchemaScriptLoader schemas={[itemListSchema]} />
      <WebPageSchema
        url={`${SITE_URL}/services`}
        name="دليل الخدمات التوثيقية — ديوان التوثيق وهران"
        description="دليل المعاملات والخدمات التوثيقية المعتمدة بديوان التوثيق بوهران طبقاً للتشريع الجزائري."
        breadcrumbs={[
          { name: 'الرئيسية', item: SITE_URL },
          { name: 'الخدمات التوثيقية', item: `${SITE_URL}/services` },
        ]}
      />

      <UnifiedPageHeader
        lang="ar"
        badgeText="الاختصاصات والمعاملات التوثيقية المعتمدة"
        badgeIcon={<Scale className="w-4 h-4" />}
        eyebrow="الديوان العمومي للتوثيق — الأستاذ لعطب محمد"
        title="دليل الخدمات والمعاملات التوثيقية"
        description="يقدم ديوان التوثيق المعتمد لدى محكمة فلاوسن بوهران كافة المعاملات والعقود الرسمية طبقاً لأحكام القانون 06-02 المنظم لمهنة الموثق في الجزائر، مع حماية مصالح الأطراف وضمان الأمن القانوني."
        backLink={{
          href: '/',
          label: 'العودة إلى الصفحة الرئيسية للمكتب',
        }}
        breadcrumbs={[
          { name: 'الرئيسية', href: '/' },
          { name: 'الخدمات التوثيقية' },
        ]}
      />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Cards Grid */}
          <section aria-label="قائمة الخدمات التوثيقية" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {serviceList.map((service) => {
              const bookingParam = SERVICE_BOOKING_PARAM_AR[service.slug] || service.ar.title;
              const bookingUrl = `/contact?service=${encodeURIComponent(bookingParam)}`;
              const detailsUrl = `/services/${service.slug}`;

              return (
                <article
                  key={service.slug}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 flex flex-col justify-between transition-all duration-200 group"
                >
                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center transition-colors shrink-0">
                        {SERVICE_ICONS[service.slug] || <FileText className="w-7 h-7 text-emerald-600" />}
                      </div>
                      {service.isPropertyRelated && (
                        <span className="bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-200">
                          عقاري / شهر عقاري
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                      <Link href={detailsUrl} className="hover:underline">
                        {service.ar.title}
                      </Link>
                    </h2>

                    {/* Short Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.ar.subtitle}
                    </p>

                    {/* Target Audience Highlight */}
                    {service.ar.targetAudience && service.ar.targetAudience.length > 0 && (
                      <div className="mb-4 text-xs text-gray-500 bg-gray-50 rounded-lg p-2.5 border border-gray-100">
                        <span className="font-semibold text-gray-700 block mb-1">المعنيون بالخدمة:</span>
                        <p className="line-clamp-2">{service.ar.targetAudience[0]}</p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2 mt-4">
                    <Link
                      href={detailsUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                      aria-label={`تفاصيل ${service.ar.title}`}
                    >
                      <span>تفاصيل والوثائق</span>
                      <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                    </Link>

                    <Link
                      href={bookingUrl}
                      className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors shadow-sm"
                      aria-label={`حجز موعد لخدمة ${service.ar.title}`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>حجز موعد</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Institutional Office Information */}
          <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-gray-800">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-start">
                <h2 className="text-xl font-bold text-gray-800">
                  البيانات الرسمية وأوقات الاستقبال
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  الديوان العمومي للتوثيق — الأستاذ لعطب محمد، موثق لدى محكمة فلاوسن بوهران. المقر: حي العقيد لطفي، وهران. أوقات الاستقبال: من الأحد إلى الخميس (08:30–12:00 و 13:30–16:00).
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl font-bold transition text-sm flex items-center gap-2 shadow-sm"
                >
                  معلومات الاتصال والمواعيد
                </Link>
                <PhoneLink
                  type="office"
                  className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-5 py-2.5 rounded-xl font-medium transition text-sm flex items-center gap-2"
                  icon={
                    <svg className="w-4 h-4 flex-shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
