import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL, GOOGLE_MAPS_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN8FormFiller from '@/components/forms/gn8/GN8FormFiller';
import { JsonLdScript } from '@/components/schema';

export const metadata: Metadata = {
  title: 'استمارة ج رقم 08 — تصريح بالوجود (PDF رسمي 2024)',
  description: 'تعبئة وطباعة استمارة سلسلة ج رقم 08 الرسمية للتصريح بالوجود لدى مصالح الضرائب خلال 30 يوماً من بداية النشاط وفق المادة 51 من قانون الرسوم على رقم الأعمال والمادة 183 من CIDTA.',
  alternates: {
    canonical: `${SITE_URL}/formulaires/gn8`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/gn8`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/gn8`,
      'x-default': `${SITE_URL}/formulaires/gn8`,
    },
  },
  openGraph: {
    title: 'استمارة ج رقم 08 — تصريح بالوجود | ديوان التوثيق وهران',
    description: 'تعبئة إلكترونية فورية للنموذج الرسمي المعتمد من المديرية العامة للضرائب وتحميله بصيغة PDF معداً للإيداع مع قائمة الوثائق المرفقة.',
    url: `${SITE_URL}/formulaires/gn8`,
    locale: 'ar_DZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'استمارة ج رقم 08 — تصريح بالوجود',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'استمارة ج رقم 08 — تصريح بالوجود | ديوان التوثيق وهران',
    description: 'تعبئة إلكترونية فورية للنموذج الرسمي المعتمد من المديرية العامة للضرائب وتحميله بصيغة PDF معداً للإيداع مع قائمة الوثائق المرفقة.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GN8Page() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    '@id': `${SITE_URL}/#notary-office`,
    'name': 'استمارة ج رقم 08 — تصريح بالوجود',
    'url': `${SITE_URL}/formulaires/gn8`,
    'description': 'أداة تعبئة استمارة سلسلة ج رقم 08 الرسمية للتصريح بالوجود لدى مصلحة الضرائب وتوليد ملف PDF مطابق تماماً للنموذج الإداري لعام 2024.',
    'provider': {
      '@type': 'GovernmentService',
      '@id': `${SITE_URL}/#notary-office`,
      'name': 'ديوان التوثيق ببلدية وهران',
      'legalName': 'ديوان التوثيق ببلدية وهران',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي',
        'addressLocality': 'وهران',
        'addressRegion': 'وهران',
        'postalCode': '31000',
        'addressCountry': 'DZ'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 35.7277124,
        'longitude': -0.5931358
      },
      'hasMap': GOOGLE_MAPS_URL,
      'areaServed': { '@type': 'AdministrativeArea', 'name': 'Oran' },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          'opens': '08:30',
          'closes': '12:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          'opens': '13:30',
          'closes': '16:00'
        }
      ]
    }
  };

  return (
    <div>
      <JsonLdScript schema={serviceSchema} />
      <UnifiedPageHeader
        lang="ar"
        eyebrow="المديرية العامة للضرائب — سلسلة ج رقم 08"
        badgeText="إلزامي خلال 30 يوماً"
        title="تصريح بالوجود لممارسة النشاط (سلسلة ج رقم 08)"
        description="استمارة رسمية إلزامية للتصريح ببدء ممارسة النشاط التجاري أو المهني لدى مصالح الضرائب التابع لها مقر النشاط وفقاً للمادة 51 من قانون CTCA والمادة 183 من CIDTA."
        breadcrumbs={[
          { name: 'الرئيسية', href: '/' },
          { name: 'الاستمارات الرسمية', href: '/formulaires' },
          { name: 'استمارة ج 08' },
        ]}
      />
      <main className="bg-gray-50 min-h-[60vh] pb-16">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-16 text-center text-gray-500">
              جاري تجهيز استمارة ج رقم 08...
            </div>
          }
        >
          <GN8FormFiller />
        </Suspense>
      </main>
    </div>
  );
}
