import Link from 'next/link';
import { Metadata } from 'next';
import { Home, Briefcase, Calculator, BookOpen } from 'lucide-react';
import PhoneLink from '@/components/ui/PhoneLink';

export const metadata: Metadata = {
  title: 'الصفحة غير موجودة (404) — ديوان التوثيق بوهران',
  description: 'الصفحة المطلوبة غير موجودة أو تم نقلها. تفضل بتصفح أقسام الموقع الرسمية أو الاتصال بمكتب الموثق.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl" lang="ar">
      <div className="flex-grow flex items-center justify-center pt-28 pb-16 px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 max-w-2xl w-full text-center">
          {/* Status Badge */}
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
            <span className="text-3xl font-black font-mono">404</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            عذراً، الصفحة المطلوبة غير موجودة
          </h1>
          <p className="text-sm font-medium text-emerald-700 mb-4" dir="ltr" lang="fr">
            Page introuvable — Office Notarial d’Oran
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
            ربما تم نقل الصفحة أو كتابة الرابط بشكل غير صحيح. يمكنك التوجه إلى أحد الأقسام الرسمية التالية للوصول إلى الخدمة أو المعاملة المطلوبة:
          </p>

          {/* Alternative Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-start">
            <Link
              href="/"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-800 group-hover:text-emerald-700">الصفحة الرئيسية</p>
                <p className="text-xs text-gray-500">Accueil de l’office</p>
              </div>
            </Link>

            <Link
              href="/services"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-800 group-hover:text-emerald-700">دليل الخدمات التوثيقية</p>
                <p className="text-xs text-gray-500">Services & actes notariés</p>
              </div>
            </Link>

            <Link
              href="/calculateur-prix-referentiel"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-800 group-hover:text-emerald-700">حاسبة السعر المرجعي</p>
                <p className="text-xs text-gray-500">Prix référentiel 2026</p>
              </div>
            </Link>

            <Link
              href="/blog"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-800 group-hover:text-emerald-700">المدونة والمقالات القانونية</p>
                <p className="text-xs text-gray-500">Articles & guides légaux</p>
              </div>
            </Link>
          </div>

          {/* Direct Assistance CTA */}
          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-5 rounded-xl transition text-center text-sm shadow-sm"
            >
              حجز موعد إداري / Prendre RDV
            </Link>
            <div className="flex items-center gap-2">
              <span>المساعدة عبر الهاتف:</span>
              <PhoneLink type="office" className="text-emerald-700 font-bold hover:underline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
