'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 bg-gray-50 rounded-2xl" dir="rtl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">حدث خطأ أثناء تحميل حاسبة الأسعار. يرجى المحاولة مجدداً.</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
      >
        إعادة المحاولة
      </button>
    </div>
  );
}
