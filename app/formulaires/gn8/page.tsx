import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
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
};

export default function GN8Page() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'استمارة ج رقم 08 — تصريح بالوجود',
    'url': `${SITE_URL}/formulaires/gn8`,
    'inLanguage': 'ar-DZ',
    'applicationCategory': 'TaxApplication',
    'operatingSystem': 'Web',
    'description': 'أداة تعبئة استمارة سلسلة ج رقم 08 الرسمية للتصريح بالوجود لدى مصلحة الضرائب وتوليد ملف PDF مطابق تماماً للنموذج الإداري لعام 2024.',
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
        'name': 'ما هو الأجل القانوني لاكتتاب التصريح بالوجود ج رقم 08؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'يجب اكتتاب هذا التصريح في أجل أقصاه ثلاثون (30) يوماً من تاريخ بداية النشاط الفعلي، وذلك لدى مصالح الضرائب التابع لها مكان ممارسة النشاط طبقاً للمادة 51 من قانون الرسوم على رقم الأعمال والمادة 183 من قانون الضرائب المباشرة والرسوم المماثلة.',
        },
      },
      {
        '@type': 'Question',
        'name': 'من هم الملزمون بتقديم التصريح بالوجود؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'يلتزم باكتتابه كل مكلف يشرع في نشاط تجاري، صناعي، حرفي، فلاحي، أو مهنة حرة، سواء كان شخصاً طبيعياً، شخصاً معنوياً (شركة تجارية أو مدنية)، أو حاملاً لبطاقة المقاول الذاتي.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ما هي الوثائق المطلوبة لإرفاقها مع الاستمارة ج 08؟',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'تتضمن الصفحة الثانية من الاستمارة قائمة الوثائق المرفقة حسب الحالة: نسخة من القانون الأساسي ونموذج إمضاء المسير للشركات، أو نسخة السجل التجاري/الاعتماد وعقد الإيجار/الملكية للمحل وشهادة ميلاد رقم 12 للمسير، أو نسخة من بطاقة المقاول الذاتي وشهادة NIF للمقاولين الذاتيين.',
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
