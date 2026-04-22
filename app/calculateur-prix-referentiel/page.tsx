import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, AlertCircle, FileText, TrendingDown, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PriceCalculator from '@/components/PriceCalculator';

export const metadata: Metadata = {
  title: 'حاسبة السعر المرجعي للعقار وهران 2026 | لعطب محمد موثق',
  description: 'احسب السعر المرجعي الرسمي لعقارك في وهران مجاناً. بيانات رسمية من وزارة المالية 2026. تجنب غرامات التقييم الإداري.',
  alternates: {
    canonical: '/calculateur-prix-referentiel',
  },
  openGraph: {
    url: 'https://lattab.vercel.app/calculateur-prix-referentiel',
    title: 'حاسبة السعر المرجعي للعقار وهران 2026 | لعطب محمد موثق',
    description: 'احسب السعر المرجعي الرسمي لعقارك في وهران مجاناً. بيانات رسمية من وزارة المالية 2026. تجنب غرامات التقييم الإداري.',
    siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'حاسبة السعر المرجعي للعقار وهران 2026',
      },
    ],
    locale: 'ar_DZ',
    type: 'website',
  },
};

const CalculatorPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="bg-gray-50" dir="rtl">
        {/* Hero Section */}
        <div className="bg-emerald-900 text-white pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-8 text-right">
              <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-white font-bold transition-colors group">
                <svg className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                العودة للرئيسية
              </Link>
            </div>
            
            <Calculator className="w-20 h-20 mx-auto mb-6 text-emerald-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center leading-tight">
              حاسبة السعر المرجعي للعقار (وهران 2026)
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto text-center leading-relaxed">
              الأداة الأولى مجاناً في الجزائر لحساب القيم المرجعية لبيع وإيجار العقارات بناءً على الجداول الرسمية المعتمدة لتجنب الضرائب الإضافية والتسويات الإدارية.
            </p>
          </div>
        </div>

        {/* The Calculator Component */}
        <div className="-mt-10 relative z-20">
          <PriceCalculator />
        </div>

        {/* SEO Supporting Articles / Guides */}
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">الدليل الشامل للسعر المرجعي العقاري 2026</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Guide 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">كيف تستخدم حاسبة السعر المرجعي للعقار 2026؟</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                تعتمد هذه الحاسبة على جداول أسعار رسمية من المديرية العامة للضرائب. ما عليك سوى تحديد منطقتك، فئة عقارك (شقة، أرض، فيلا)، مساحته بدقة، والمنطقة العمرانية ضمن البلدية.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                <li>حدد النشاط: بيع أم إيجار</li>
                <li>اختر المنطقة والعقار</li>
                <li>ستحصل على السعر الأدنى والأقصى المطلوب في العقد التوثيقي</li>
              </ul>
            </div>

            {/* Guide 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ماذا يحدث إذا صرّحت بسعر أقل من المرجعي؟</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                قانونياً، للموثق الحق في رفض تمرير عقد بيع إذا كان السعر المصرح به فيه غبن لخزينة الدولة. إذا مر العقد، ستقوم مصلحة الضرائب بإجراء <strong>&quot;تقويم ضريبي إداري&quot; (Redressement Fiscal)</strong>.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside">
                <li>غرامات تأخير قاسية جداً</li>
                <li>تغريم الطرفين ومراجعة الضريبة على الدخل</li>
                <li>إمكانية إلغاء الصفقة قانونياً</li>
              </ul>
            </div>

            {/* Guide 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الفرق بين السعر المرجعي والسعر السوقي</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>السعر المرجعي:</strong> هو السعر الإداري الذي تعتمده الدولة كحد أدنى لتجنب التهرب الضريبي.<br/><br/>
                <strong>السعر السوقي:</strong> هو السعر الحقيقي الذي تتفق عليه مع المشتري أو البائع وفق العرض والطلب.
              </p>
              <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                يجب دائماً أن يكون السعر المصرح به في العقد أكبر من أو يساوي السعر المرجعي المحسوب هنا!
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
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorPage;
