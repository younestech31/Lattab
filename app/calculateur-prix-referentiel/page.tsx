import React, { Suspense } from 'react';
import { Metadata } from 'next';
export const revalidate = 86400;
import Link from 'next/link';
import { Calculator, AlertCircle, TrendingDown, Info } from 'lucide-react';
import WebPageSchema from '@/components/WebPageSchema';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';
import { SITE_URL, GOOGLE_MAPS_URL } from '@/lib/config';
import PriceCalculator from '@/components/PriceCalculator';
import CalculatorSkeleton from '@/components/CalculatorSkeleton';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'حاسبة السعر المرجعي الرسمي للعقار بالجزائر 2026 (58 ولاية). تقدير فوري لقيمة العقارات التجارية والسكنية بناءً على جداول وزارة المالية والضرائب.';
  assertDescriptionLength(desc, 'calculateur-prix-referentiel');

  return {
    title: { absolute: 'حاسبة السعر المرجعي العقاري 2026 — الجزائر' },
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/calculateur-prix-referentiel`,
      languages: {
        'ar-DZ': `${SITE_URL}/calculateur-prix-referentiel`,
        'fr-DZ': `${SITE_URL}/fr/calculateur-prix-referentiel`,
        'x-default': `${SITE_URL}/calculateur-prix-referentiel`,
      },
    },
    openGraph: {
      title: 'حاسبة السعر المرجعي العقاري 2026 — الجزائر',
      description: desc,
      url: `${SITE_URL}/calculateur-prix-referentiel`,
      siteName: 'ديوان التوثيق ببلدية وهران',
      type: 'website',
      images: [{ 
        url: `${SITE_URL}/calculateur-prix-referentiel/opengraph-image`, 
        width: 1200, 
        height: 630, 
        alt: 'حاسبة السعر المرجعي العقاري 2026 — الجزائر' 
      }],
      locale: 'ar_DZ',
      alternateLocale: ['fr_DZ'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'حاسبة السعر المرجعي العقاري 2026 — الجزائر',
      description: desc,
      images: [`${SITE_URL}/calculateur-prix-referentiel/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CalculatorPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    '@id': `${SITE_URL}/#notary-office`,
    name: 'حاسبة السعر المرجعي العقاري 2026 — الجزائر',
    url: `${SITE_URL}/calculateur-prix-referentiel`,
    description:
      'حاسبة السعر المرجعي العقاري — أداة إعلامية استرشادية بناءً على الجداول الرسمية المعتمدة من المديرية العامة للضرائب ووزارة المالية.',
    provider: {
      '@type': 'GovernmentService',
      '@id': `${SITE_URL}/#notary-office`,
      name: 'ديوان التوثيق ببلدية وهران',
      legalName: 'ديوان التوثيق ببلدية وهران',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي',
        addressLocality: 'وهران',
        addressRegion: 'وهران',
        postalCode: '31000',
        addressCountry: 'DZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.7277124,
        longitude: -0.5931358,
      },
      hasMap: GOOGLE_MAPS_URL,
      areaServed: { '@type': 'AdministrativeArea', name: 'Oran' },
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
    <div className="min-h-screen bg-white">
      <SchemaScriptLoader schemas={[serviceSchema]} />
      <WebPageSchema
        url={`${SITE_URL}/calculateur-prix-referentiel`}
        name="حاسبة السعر المرجعي للعقار 2026"
        description="السعر المرجعي الرسمي للعقار في الجزائر 2026 (58 ولاية). بيانات رسمية من وزارة المالية والمديرية العامة للضرائب."
        breadcrumbs={[
          { name: 'الرئيسية', item: `${SITE_URL}/` },
          { name: 'حاسبة السعر المرجعي', item: `${SITE_URL}/calculateur-prix-referentiel` },
        ]}
      />
      <div className="bg-gray-50 pb-16" dir="rtl" lang="ar">
        <UnifiedPageHeader
          lang="ar"
          badgeText="الخدمات والأدوات الرقمية الاسترشادية"
          badgeIcon={<Calculator className="w-4 h-4" />}
          eyebrow="الديوان العمومي للتوثيق"
          title="حاسبة السعر المرجعي للعقار 2026"
          description="حاسبة السعر المرجعي العقاري — أداة إعلامية استرشادية بناءً على الجداول الرسمية المعتمدة من المديرية العامة للضرائب ووزارة المالية."
          breadcrumbs={[
            { name: 'الرئيسية', href: '/' },
            { name: 'حاسبة السعر المرجعي' },
          ]}
        />

        <div className="relative z-20">
          <Suspense fallback={<CalculatorSkeleton />}>
            <PriceCalculator
              lang="ar"
              initialData={null}
              initialCommunes={[]}
              initialRegionId=""
            />
          </Suspense>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            الدليل الشامل للسعر المرجعي العقاري 2026
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                كيف تستخدم حاسبة السعر المرجعي للعقار 2026؟
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                تعتمد هذه الحاسبة على جداول أسعار رسمية من المديرية العامة للضرائب. ما
                عليك سوى تحديد منطقتك، فئة عقارك (شقة، أرض، فيلا)، مساحته بدقة، والمنطقة
                العمرانية ضمن البلدية.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                <li>حدد النشاط: بيع أم إيجار</li>
                <li>اختر المنطقة والعقار</li>
                <li>ستحصل على السعر الأدنى والأقصى المطلوب في العقد التوثيقي</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ماذا يحدث إذا صرّحت بسعر أقل من المرجعي؟
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                قانونياً، للموثق الحق في رفض تمرير عقد بيع إذا كان السعر المصرح به فيه
                غبن لخزينة الدولة. إذا مر العقد، ستقوم مصلحة الضرائب بإجراء تقويم ضريبي
                إداري (Redressement Fiscal).
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                <li>غرامات تأخير قاسية جداً</li>
                <li>تغريم الطرفين ومراجعة الضريبة على الدخل</li>
                <li>إمكانية إلغاء الصفقة قانونياً</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                الفرق بين السعر المرجعي والسعر السوقي
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>السعر المرجعي:</strong> هو السعر الإداري الذي تعتمده الدولة كحد
                أدنى لتجنب التهرب الضريبي.
                <br />
                <br />
                <strong>السعر السوقي:</strong> هو السعر الحقيقي الذي تتفق عليه مع المشتري
                أو البائع وفق العرض والطلب.
              </p>
              <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                يجب دائماً أن يكون السعر المصرح به في العقد أكبر من أو يساوي السعر المرجعي
                المحسوب هنا!
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-flex py-4 px-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-lg transition-colors shadow-lg shadow-emerald-600/30"
            >
              هل تحتاج لاستشارة حول سعر عقارك؟ تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
