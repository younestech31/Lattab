import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import UnifiedPageHeader from '@/components/ui/UnifiedPageHeader';
import PrecisionCoordinateAuditor from '@/components/forms/PrecisionCoordinateAuditor';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'مدقق ومختبر إحداثيات الاستمارات الرسمية بالميلمتر الدقيق | ديوان التوثيق وهران',
  description: 'أداة الضبط والتدقيق المليمتري الدقيق لإحداثيات تعبئة النماذج الرسمية للمديرية العامة للضرائب (ج17، ج31، ج08، ج51) في النسختين العربية والفرنسية.',
  alternates: {
    canonical: `${SITE_URL}/formulaires/auditeur`,
    languages: {
      'ar-DZ': `${SITE_URL}/formulaires/auditeur`,
      'fr-DZ': `${SITE_URL}/fr/formulaires/auditeur`,
      'x-default': `${SITE_URL}/formulaires/auditeur`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FormAuditorPage() {
  return (
    <div>
      <UnifiedPageHeader
        lang="ar"
        eyebrow="خدمة التدقيق والمعايرة الفنية"
        badgeText="دقة 0.00 مم"
        title="مدقق إحداثيات الاستمارات الرسمية"
        description="فحص ومعايرة الإحداثيات الملمترية لخانات ونصوص النماذج الجبائية الرسمية DGI (ج17، ج31، ج08، ج51) بالعربية والفرنسية مع توليد شبكات المعايرة الطباعية."
        breadcrumbs={[
          { name: 'الرئيسية', href: '/' },
          { name: 'الاستمارات الرسمية', href: '/formulaires' },
          { name: 'مدقق الإحداثيات بالميلمتر' },
        ]}
      />
      <main className="bg-gray-50 min-h-[70vh]">
        <PrecisionCoordinateAuditor />
      </main>
    </div>
  );
}
