'use client';
import Link from 'next/link';

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  if (process.env.NODE_ENV !== 'production') console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center" dir="rtl">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">حدث خطأ أثناء تحميل المقال</h1>
      <p className="text-gray-500 mb-6">Une erreur s&apos;est produite lors du chargement de l&apos;article.</p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          إعادة المحاولة
        </button>
        <Link
          href="/blog"
          className="border border-emerald-600 text-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-50 transition-colors"
        >
          العودة للمدونة
        </Link>
      </div>
    </div>
  );
}
