import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl" lang="ar">
      <main className="flex-grow flex items-center justify-center pt-32 pb-20">
        <div className="text-center p-8 max-w-lg mx-auto">
          <p className="text-6xl font-bold text-emerald-600 mb-4" aria-hidden="true">404</p>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">الصفحة غير موجودة</h1>
          <p className="text-sm font-semibold text-gray-500 mb-4">Page introuvable</p>
          <p className="text-gray-600 mb-2">ربما تم نقل هذه الصفحة أو حذفها.</p>
          <p className="text-xs text-gray-400 mb-8" dir="ltr">Cette page a été déplacée ou supprimée.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition text-sm">
              العودة للرئيسية / Accueil
            </Link>
            <Link href="/calculateur-prix-referentiel" className="border border-emerald-600 text-emerald-600 px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-50 transition text-sm">
              حاسبة الأسعار المرجعية
            </Link>
            <Link href="/blog" className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition text-sm">
              المدونة القانونية
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
