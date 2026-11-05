import React, { Suspense } from 'react';
import { Metadata } from 'next';
export const revalidate = 86400;
import Link from 'next/link';
import { Calculator, AlertCircle, TrendingDown, Info } from 'lucide-react';
import WebPageSchema from '@/components/WebPageSchema';
import { SchemaScriptLoader } from '@/components/SchemaScriptLoader';
import { SITE_URL } from '@/lib/config';
import PriceCalculator from '@/components/PriceCalculator';
import CalculatorSkeleton from '@/components/CalculatorSkeleton';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import { assertDescriptionLength } from '@/lib/utils/metaValidation';

export async function generateMetadata(): Promise<Metadata> {
  const desc = 'حاسبة استرشادية لنطاقات القيمة السوقية للعقار في الجزائر، اعتماداً على مرجع المديرية العامة للضرائب للفترة 2025–2026 والبيانات المتاحة في الأداة.';
  assertDescriptionLength(desc, 'calculateur-prix-referentiel');

  return {
    title: { absolute: 'حاسبة مرجع أسعار العقار 2025–2026 — الجزائر' },
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
      title: 'حاسبة مرجع أسعار العقار 2025–2026 — الجزائر',
      description: desc,
      url: `${SITE_URL}/calculateur-prix-referentiel`,
      siteName: 'ديوان التوثيق ببلدية وهران',
      type: 'website',
      images: [{ 
        url: `${SITE_URL}/calculateur-prix-referentiel/opengraph-image`, 
        width: 1200, 
        height: 630, 
        alt: 'حاسبة مرجع أسعار العقار 2025–2026 — الجزائر' 
      }],
      locale: 'ar_DZ',
      alternateLocale: ['fr_DZ'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'حاسبة مرجع أسعار العقار 2025–2026 — الجزائر',
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
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${SITE_URL}/calculateur-prix-referentiel#application`,
    name: 'حاسبة مرجع أسعار العقار 2025–2026 — الجزائر',
    url: `${SITE_URL}/calculateur-prix-referentiel`,
    description: 'أداة معلوماتية تعرض نطاقات القيمة السوقية الواردة في مرجع المديرية العامة للضرائب للفترة 2025–2026، بحسب البيانات المدرجة فيها.',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    provider: { '@id': `${SITE_URL}/#notary-office` },
  };

  return (
    <div className="min-h-screen bg-white">
      <SchemaScriptLoader schemas={[webApplicationSchema]} />
      <WebPageSchema
        url={`${SITE_URL}/calculateur-prix-referentiel`}
        name="حاسبة مرجع أسعار العقار 2025–2026"
        description="نطاقات القيمة السوقية للعقار الواردة في مرجع المديرية العامة للضرائب للفترة 2025–2026، وفق البيانات المتاحة في الأداة."
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
          title="حاسبة مرجع أسعار العقار 2025–2026"
          description="أداة معلوماتية استرشادية تعرض نطاقات القيم الواردة في مرجع المديرية العامة للضرائب للفترة 2025–2026 وفق البيانات المتاحة فيها."
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
            دليل قراءة مرجع أسعار العقار 2025–2026
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                كيف تستخدم حاسبة مرجع أسعار العقار 2025–2026؟
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                تعرض الأداة نطاقات القيمة السوقية المنشورة في مرجع المديرية العامة للضرائب للفترة 2025–2026، وفق البيانات المتاحة لكل منطقة ونوع عقار. اختر الولاية والبلدية أو المنطقة، ثم طبيعة العقار وصنفه والمنطقة العمرانية والمساحة.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                <li>حدد النشاط: بيع أم إيجار</li>
                <li>اختر المنطقة والعقار</li>
                <li>تظهر حدود النطاق المنشور في المرجع، ولا تمثل سعراً ملزماً أو تقييماً فردياً نهائياً للعقار</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                كيف تُقرأ حدود النطاق الواردة في المرجع؟
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                يتضمن مرجع المديرية العامة للضرائب نطاقات للقيم السوقية للعقارات. وقد تدخل القيمة السوقية في تحديد الوعاء الجبائي بحسب طبيعة العملية والنصوص السارية. لا يجوز اعتبار الحد الأدنى في الجدول حداً قانونياً عاماً واجب التطبيق آلياً على كل عقد؛ كما لا تكفي نتيجة هذه الأداة وحدها لتحديد المعالجة الجبائية.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                <li>تختلف المعالجة الجبائية بحسب طبيعة العملية والنصوص المطبقة.</li>
                <li>يرجع تحديد الوعاء والحقوق المستحقة إلى الإدارة الجبائية المختصة.</li>
                <li>ينبغي الرجوع إلى المرجع الرسمي المحيّن والوثائق الخاصة بالعقار.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                النطاق المرجعي والقيمة الفعلية للعقار
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>النطاق المرجعي:</strong> حدود دنيا وعليا للقيم السوقية تعرضها جداول المديرية العامة للضرائب خلال فترة محددة.
                <br />
                <br />
                <strong>القيمة الفعلية:</strong> تتعلق بخصائص العقار وموقعه وحالته ووثائقه وظروف العملية، ولا يمكن لهذه الأداة أن تحل محل تقييم فردي أو تحقق إداري.
              </p>
              <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                النتيجة استرشادية فقط؛ ولا تقرر وحدها صحة الثمن المصرح به أو الرسوم والضرائب المستحقة أو أتعاب الموثق.
              </p>
            </div>
          </div>

          <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <h3 className="mb-3 text-lg font-bold text-gray-900">المصدر الرسمي وحدود البيانات</h3>
            <p className="mb-3 text-sm leading-7 text-gray-700">
              المرجع المنشور من المديرية العامة للضرائب للفترة 2025–2026 يعرض نطاقات للقيم السوقية حسب المناطق والولايات والبلديات وأنواع العقارات. يرجى الرجوع إلى النسخة الرسمية عند الاستعمال والتحقق من أي تحديث لاحق.
            </p>
            <p className="mb-4 text-sm leading-7 text-gray-700">
              ملاحظة إدارية: قاعدة الأداة تعرض البيانات المدرجة لديها ولا تنشئ جداول مستقلة للولايات المستحدثة. وقد صدر القانون رقم 26-06 المؤرخ في 4 أبريل 2026 بالتقسيم الإقليمي الجديد إلى 69 ولاية، مع انتقال تدريجي للصلاحيات خلال سنة 2026؛ لذلك لا تعتبر قائمة الاختيار بديلاً عن التحقق لدى الإدارة الجبائية المختصة من التسمية والاختصاص المعمول بهما.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.mfdgi.gov.dz/services-pro-ar/autres-services-numeriques-ar/referentiel-des-prix-de-limmobilier-ar" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-xl bg-emerald-800 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
                مرجع أسعار العقار — المديرية العامة للضرائب
              </a>
              <a href="https://www.joradp.dz/FTP/jo-francais/2026/F2026025.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-bold text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
                القانون رقم 26-06 — الجريدة الرسمية
              </a>
              <Link href="/contact" className="inline-flex min-h-11 items-center rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-bold text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
                معلومات الاتصال بالمكتب
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
