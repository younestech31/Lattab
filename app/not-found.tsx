import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'الصفحة غير موجودة | مكتب الأستاذ لعطب محمد - موثق',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-32 pb-20">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold text-emerald-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">الصفحة غير موجودة</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">ربما تم نقل هذه الصفحة أو حذفها.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition">
              العودة للرئيسية
            </Link>
            <Link href="/calculateur-prix-referentiel" className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition">
              حاسبة الأسعار
            </Link>
            <Link href="/blog" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition">
              المدونة القانونية
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
