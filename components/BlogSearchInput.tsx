'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export default function BlogSearchInput({ defaultValue = '' }: { defaultValue?: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      const params = new URLSearchParams();
      if (e.target.value) params.set('q', e.target.value);
      router.replace(`/blog${params.size ? `?${params}` : ''}`, { scroll: false });
    });
  };

  return (
    <div className="relative">
      <input
        type="search"
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder="ابحث في المقالات..."
        aria-label="البحث في المدونة"
        className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
        dir="rtl"
      />
      {isPending && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">...</span>}
    </div>
  );
}
