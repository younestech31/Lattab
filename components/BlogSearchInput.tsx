'use client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Search } from 'lucide-react';

export default function BlogSearchInput({ defaultValue = '' }: { defaultValue?: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    startTransition(() => {
      const params = new URLSearchParams();
      if (value) params.set('q', value);
      router.replace(`/blog${params.size ? `?${params}` : ''}`, { scroll: false });
    });
  };

  return (
    <form action="/blog" method="GET" className="relative group">
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        onChange={handleInputChange}
        placeholder="ابحث في المقالات (قوانين، عقارات، شركات)..."
        aria-label="البحث في المدونة"
        className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-gray-100 bg-white focus:border-emerald-500 focus:ring-0 focus:outline-none text-right transition-all shadow-sm group-hover:shadow-md"
        dir="rtl"
      />
      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors">
        <Search size={22} />
      </div>
      {isPending && (
        <div className="absolute left-5 top-1/2 -translate-y-1/2">
          <div className="w-5 h-5 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        </div>
      )}
    </form>
  );
}
