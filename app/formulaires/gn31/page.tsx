import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL, GOOGLE_MAPS_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN31FormFiller from '@/components/forms/gn31/GN31FormFiller';
import { JsonLdScript } from '@/components/schema';

export const metadata: Metadata = {
  title: 'استمارة ج رقم 31 — تصريح الرسم العقاري (PDF رسمي)',
  description: 'تعبئة وطباعة استمارة سلسلة ج رقم 31 الرسمية للتصريح بالرسم العقاري على الملكيات المبنية وغير المبنية وفق المادتين 261-ص و261-ق من قانون الضرائب المباشرة الجزائري.',
  alternates: {
    canonical: `${SITE_URL}/formulaires/gn31`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/gn31`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/gn31`,
      'x-default': `${SITE_URL}/formulaires/gn31`,
    },
  },
  openGraph: {
    title: 'استمارة ج رقم 31 — تصريح الرسم العقاري | ديوان التوثيق وهران',
    description: 'تعبئة إلكترونية فورية للنموذج الرسمي الصادر عن المديرية العامة للضرائب وتحميله بصيغة PDF معداً للإيداع لدى مصلحة الضرائب.',
    url: `${SITE_URL}/formulaires/gn31`,
    locale: 'ar_DZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'استمارة ج رقم 31 — تصريح الرسم العقاري',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'استمارة ج رقم 31 — تصريح الرسم العقاري | ديوان التوثيق وهران',
    description: 'تعبئة إلكترونية فورية للنموذج الرسمي الصادر عن المديرية العامة للضرائب وتحميله بصيغة PDF معداً للإيداع لدى مصلحة الضرائب.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GN31Page() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    '@id': `${SITE_URL}/#notary-office`,
    'name': 'استمارة ج رقم 31 — تصريح الرسم العقاري',
    'url': `${SITE_URL}/formulaires/gn31`,
    'description': 'أداة تعبئة استمارة سلسلة ج رقم 31 الرسمية للتصريح بالرسم العقاري على الملكيات المبنية وغير المبنية وتوليد ملف PDF مطابق تماماً للنموذج الإداري المعتمد.',
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
        eyebrow="المديرية العامة للضرائب — سلسلة ج رقم 31"
        badgeText="إيداع سنوي / تغيير"
        title="تصريح الرسم العقاري على الملكيات المبنية وغير المبنية"
        description="استمارة رسمية مخصصة للاكتتاب والتصريح بالرسم العقاري طبقاً للمادتين 261-ص و261-ق من قانون الضرائب المباشرة والرسوم المماثلة، مع توليد نسخة PDF رسمية مطابقة."
        breadcrumbs={[
          { name: 'الرئيسية', href: '/' },
          { name: 'الاستمارات الرسمية', href: '/formulaires' },
          { name: 'استمارة ج 31' },
        ]}
      />
      <main className="bg-gray-50 min-h-[60vh] pb-16">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-16 text-center text-gray-500">
              جاري تجهيز استمارة ج رقم 31...
            </div>
          }
        >
          <GN31FormFiller />
        </Suspense>
      </main>
    </div>
  );
}
