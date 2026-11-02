import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN17FormFiller from '@/components/forms/gn17/GN17FormFiller';
import { JsonLdScript } from '@/components/schema';

export const metadata: Metadata = {
  title: 'استمارة ج رقم 17 — التصريح بفائض القيمة العقارية (PDF رسمي)',
  description: 'تعبئة وطباعة استمارة سلسلة ج رقم 17 الرسمية للتصريح بفائض القيمة الناتج عن التنازل عن العقارات (الضريبة 15% وتخفيض المدة وسكن رئيسي) وفق المادة 80 مكرر من قانون الضرائب المباشرة الجزائري.',
  alternates: {
    canonical: `${SITE_URL}/formulaires/gn17`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/gn17`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/gn17`,
      'x-default': `${SITE_URL}/formulaires/gn17`,
    },
  },
  openGraph: {
    title: 'استمارة ج رقم 17 — التصريح بفائض القيمة العقارية | ديوان التوثيق وهران',
    description: 'تعبئة إلكترونية فورية للنموذج الرسمي الصادر عن المديرية العامة للضرائب وتحميله بصيغة PDF معداً للإيداع لدى القباضة.',
    url: `${SITE_URL}/formulaires/gn17`,
    locale: 'ar_DZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'استمارة ج رقم 17 — التصريح بفائض القيمة العقارية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'استمارة ج رقم 17 — التصريح بفائض القيمة العقارية | ديوان التوثيق وهران',
    description: 'تعبئة إلكترونية فورية للنموذج الرسمي الصادر عن المديرية العامة للضرائب وتحميله بصيغة PDF معداً للإيداع لدى القباضة.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GN17Page() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    '@id': `${SITE_URL}/#notary-office`,
    'name': 'استمارة ج رقم 17 — التصريح بفائض القيمة العقارية',
    'url': `${SITE_URL}/formulaires/gn17`,
    'description': 'أداة تعبئة استمارة سلسلة ج رقم 17 الرسمية لحساب وتصفية الضريبة على الدخل الإجمالي (IRG) بفائض القيمة العقارية وتوليد ملف PDF مطابق للنموذج الإداري.',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ما هو الأجل القانوني لإيداع التصريح ج رقم 17؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'يجب إيداع التصريح ج رقم 17 لدى قباضة الضرائب المختصة إقليمياً خلال أجل أقصاه ثلاثون (30) يوماً ابتداءً من تاريخ إبرام عقد التنازل، وفقاً للمادة 80 مكرر من قانون الضرائب المباشرة والرسوم المماثلة.',
        },
      },
      {
        '@type': 'Question',
        'name': 'كيف تُحسب الضريبة بنسبة 15% وما هي شروط التخفيض الزمني؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'تُحدد نسبة الضريبة بـ 15% على فائض القيمة الصافي. يستفيد المكلف من تخفيض سنوي بنسبة 5% عن كل سنة حيازة تتجاوز السنتين، بحيث يصل سقف التخفيض الأقصى إلى 50% بعد مرور 12 سنة من التملك، مع مراعاة الإعفاء القانوني الخاص بالسكن الرئيسي الوحيد.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ما هي الطبيعة القانونية للملف الناتج وأين يُودع؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'المستند الناتج هو نسخة رسمية مخصصة للمراجعة والتدقيق والتحضير المادي للملف؛ يتعين طباعته والتوقيع عليه وإيداعه مباشرة لدى قباضة الضرائب التابع لها موقع العقار المتنازل عنه مصحوباً بالمؤيدات الثبوتية.',
        },
      },
    ],
  };

  return (
    <div>
      <JsonLdScript schema={serviceSchema} />
      <JsonLdScript schema={faqSchema} />
      <UnifiedPageHeader
        lang="ar"
        eyebrow="المديرية العامة للضرائب — سلسلة ج رقم 17"
        badgeText="إلزامي خلال 30 يوماً"
        title="التصريح بفائض القيمة الناتج عن التنازل عن عقار"
        description="استمارة رسمية لتصفية الضريبة على الدخل الإجمالي (IRG/Plus-value) بنسبة 15% مع احتساب التخفيض الزمني وتخفيض السكن الرئيسي، وتحميل النسخة الرسمية المؤهلة للإيداع."
        breadcrumbs={[
          { name: 'الرئيسية', href: '/' },
          { name: 'الاستمارات الرسمية', href: '/formulaires' },
          { name: 'استمارة ج 17' },
        ]}
      />
      <main className="bg-gray-50 min-h-[60vh] pb-16">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-16 text-center text-gray-500">
              جاري تجهيز استمارة ج رقم 17...
            </div>
          }
        >
          <GN17FormFiller />
        </Suspense>
      </main>
    </div>
  );
}
