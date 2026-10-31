import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN31FormFiller from '@/components/forms/gn31/GN31FormFiller';
import { JsonLdScript } from '@/components/schema';

export const metadata: Metadata = {
  title: 'استمارة ج رقم 31 — تصريح الرسم العقاري (PDF رسمي)',
  description: 'تعبئة وطباعة استمارة سلسلة ج رقم 31 الرسمية للتصريح بالرسم العقاري على الملكيات المبنية وغير المبنية وفق المادة 261 مكرر من قانون الضرائب المباشرة الجزائري.',
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
};

export default function GN31Page() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'استمارة ج رقم 31 — تصريح الرسم العقاري',
    'url': `${SITE_URL}/formulaires/gn31`,
    'inLanguage': 'ar-DZ',
    'applicationCategory': 'TaxApplication',
    'operatingSystem': 'Web',
    'description': 'أداة تعبئة استمارة سلسلة ج رقم 31 الرسمية للتصريح بالرسم العقاري على الملكيات المبنية وغير المبنية وتوليد ملف PDF مطابق تماماً للنموذج الإداري المعتمد.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'DZD',
    },
    'provider': {
      '@type': ['LegalService', 'Notary'],
      'name': 'ديوان التوثيق — الأستاذ لعطب محمد',
      'url': SITE_URL,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ما هو أجل إيداع تصريح الرسم العقاري ج رقم 31؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'يجب إيداع التصريح ج رقم 31 خلال أجل شهرين من تاريخ إنجاز الملكية المبنية أو شغلها كلياً أو جزئياً، أو خلال شهرين بعد الإنجاز النهائي لأي تغيير في الهيكل أو التخصيص، وفقاً للمادة 261 مكرر من قانون الضرائب المباشرة والرسوم المماثلة.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ما هي أصناف الملكيات الخاضعة للتصريح ج 31؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'يشمل التصريح كافة الملكيات المبنية (السكنات الفردية، الشقق، المباني الجماعية، المحلات المهنية والتجارية) وكافة الملكيات غير المبنية (الأراضي الفلاحية المسقية واليابسة، والأراضي القابلة للتعمير والبناء).',
        },
      },
      {
        '@type': 'Question',
        'name': 'ما هي الطبيعة القانونية للملف الناتج وأين يُودع؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'المستند الناتج هو نسخة للمراجعة والتدقيق والتحضير المادي للملف؛ يتعين طباعته والتوقيع عليه وإيداعه مباشرة لدى مفتشية أو قباضة الضرائب التابع لها موقع العقار مصحوباً بالمؤيدات الثبوتية.',
        },
      },
    ],
  };

  return (
    <div>
      <JsonLdScript schema={webApplicationSchema} />
      <JsonLdScript schema={faqSchema} />
      <UnifiedPageHeader
        lang="ar"
        eyebrow="المديرية العامة للضرائب — سلسلة ج رقم 31"
        badgeText="إيداع سنوي / تغيير"
        title="تصريح الرسم العقاري على الملكيات المبنية وغير المبنية"
        description="استمارة رسمية مخصصة للاكتتاب والتصريح بالرسم العقاري طبقاً للمادتين 261 مكرر و 261 ق من قانون الضرائب المباشرة والرسوم المماثلة، مع توليد نسخة PDF رسمية مطابقة."
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
