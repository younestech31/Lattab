import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL, GOOGLE_MAPS_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN51FormFiller from '@/components/forms/gn51/GN51FormFiller';
import { JsonLdScript } from '@/components/schema';

export const metadata: Metadata = {
  title: 'استمارة ج رقم 51 — التصريح بمداخيل إيجار العقارات (PDF رسمي)',
  description: 'تعبئة وطباعة استمارة سلسلة ج رقم 51 الرسمية للتصريح بمداخيل إيجار العقارات المبنية وغير المبنية (IRG/Location: 7% سكني، 15% تجاري) وفق المادتين 42 و104 من قانون الضرائب المباشرة الجزائري.',
  alternates: {
    canonical: `${SITE_URL}/formulaires/gn51`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/gn51`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/gn51`,
      'x-default': `${SITE_URL}/formulaires/gn51`,
    },
  },
  openGraph: {
    title: 'استمارة ج رقم 51 — التصريح بمداخيل إيجار العقارات | ديوان التوثيق وهران',
    description: 'تعبئة إلكترونية فورية للنموذج الرسمي الصادر عن المديرية العامة للضرائب DGI وتحميله بصيغة PDF معداً للإيداع لدى القباضة.',
    url: `${SITE_URL}/formulaires/gn51`,
    locale: 'ar_DZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'استمارة ج رقم 51 — التصريح بمداخيل إيجار العقارات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'استمارة ج رقم 51 — التصريح بمداخيل إيجار العقارات | ديوان التوثيق وهران',
    description: 'تعبئة إلكترونية فورية للنموذج الرسمي الصادر عن المديرية العامة للضرائب وتحميله بصيغة PDF معداً للإيداع لدى القباضة.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GN51Page() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    '@id': `${SITE_URL}/#notary-office`,
    'name': 'استمارة ج رقم 51 — التصريح بمداخيل إيجار العقارات',
    'url': `${SITE_URL}/formulaires/gn51`,
    'description': 'أداة تعبئة استمارة سلسلة ج رقم 51 الرسمية لحساب وتصفية الضريبة على الدخل الإجمالي (IRG) الناتجة عن إيجار العقارات وتوليد ملف PDF مطابق للنموذج الإداري.',
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
        'addressCountry': 'DZ',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 35.7277124,
        'longitude': -0.5931358,
      },
      'hasMap': GOOGLE_MAPS_URL,
      'areaServed': { '@type': 'AdministrativeArea', 'name': 'Oran' },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ما هو الأجل القانوني لإيداع التصريح ج رقم 51؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'يجب إيداع التصريح ج رقم 51 ودفع الضريبة المستحقة في أجل أقصاه اليوم العشرون (20) من الشهر الذي يلي تحصيل الإيجار لدى قباضة الضرائب التابع لها مكان تواجد العقار المؤجر.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ما هي النسب الضريبية المطبقة على إيجار العقارات؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'إذا كان المبلغ السنوي أقل من أو يساوي 1.800.000 دج: 7% للإيجار ذي الطابع السكني، 15% للإيجار التجاري أو المهني أو العقارات غير المبنية، و10% للأراضي الفلاحية. وإذا تجاوز 1.800.000 دج سنوياً، تطبق نسبة اقتطاع مؤقت قدرها 7% تخصم من التصريح السنوي الشامل للدخل.',
        },
      },
      {
        '@type': 'Question',
        'name': 'أين يودع هذا التصريح وكيف يتم التسديد؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'يودع التصريح لدى قباضة الضرائب المختصة إقليمياً مكان العقار، ويتم التسديد نقداً في صندوق القباضة أو بصك بنكي أو بريدي.',
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
        eyebrow="المديرية العامة للضرائب — سلسلة ج رقم 51"
        badgeText="يُكتتب قبل 20 من الشهر الموالي"
        title="التصريح بمداخيل إيجار العقارات (ج رقم 51)"
        description="استمارة رسمية تقوم مقام حافظة إشعار بالدفع لحساب وتصفية الضريبة على الدخل الإجمالي (IRG/Location) للإيجارات السكنية والتجارية، وتحميل النسخة الرسمية المؤهلة للإيداع."
        breadcrumbs={[
          { name: 'الرئيسية', href: '/' },
          { name: 'الاستمارات الرسمية', href: '/formulaires' },
          { name: 'استمارة ج 51' },
        ]}
      />
      <main className="bg-gray-50 min-h-[60vh] pb-16">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-16 text-center text-gray-500">
              جاري تجهيز استمارة ج رقم 51...
            </div>
          }
        >
          <GN51FormFiller />
        </Suspense>
      </main>
    </div>
  );
}
