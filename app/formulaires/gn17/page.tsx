import { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import GN17FormFiller from '@/components/forms/gn17/GN17FormFiller';

export const metadata: Metadata = {
  title: 'استمارة ج رقم 17 — التصريح بفائض القيمة العقارية (PDF رسمي)',
  description: 'تعبئة وطباعة استمارة سلسلة ج رقم 17 الرسمية للتصريح بفائض القيمة الناتج عن التنازل عن العقارات (الضريبة 15% وتخفيض المدة وسكن رئيسي) وفق المادة 80 مكرر من قانون الضرائب المباشرة الجزائري.',
  alternates: {
    canonical: `${SITE_URL}/formulaires/gn17`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/gn17`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/gn17`,
    },
  },
  openGraph: {
    title: 'استمارة ج رقم 17 — التصريح بفائض القيمة العقارية | ديوان التوثيق وهران',
    description: 'تعبئة إلكترونية فورية للنموذج الرسمي الصادر عن المديرية العامة للضرائب وتحميله بصيغة PDF معداً للإيداع لدى القباضة.',
    url: `${SITE_URL}/formulaires/gn17`,
    locale: 'ar_DZ',
    type: 'website',
  },
};

export default function GN17Page() {
  return (
    <div>
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
