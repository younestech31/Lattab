'use client';

import { useRouter } from 'next/navigation';
import { useTransition, useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { useDebounce } from '@/lib/hooks/useDebounce';

/**
 * Props for the BlogSearchInput component.
 */
export interface BlogSearchInputProps {
  defaultValue?: string;
  resultsCount?: number;
}

/**
 * Controlled input component with 350ms debounced searching, language-aware alignments,
 * loading spinner transitions, and WCAG AA aria-live announcement regions.
 */
export default function BlogSearchInput({ defaultValue = '', resultsCount }: BlogSearchInputProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { lang } = useLang();

  const [searchTerm, setSearchTerm] = useState(defaultValue);
  const debouncedSearchTerm = useDebounce(searchTerm, 350);

  // Synchronize when parent's defaultValue updates
  useEffect(() => {
    setSearchTerm(defaultValue);
  }, [defaultValue]);

  // Execute search when debounced term changes
  useEffect(() => {
    if (debouncedSearchTerm === defaultValue) return;

    startTransition(() => {
      const params = new URLSearchParams();
      if (debouncedSearchTerm) {
        params.set('q', debouncedSearchTerm);
      }
      const targetPath = lang === 'fr' ? '/fr/blog' : '/blog';
      router.replace(`${targetPath}${params.size ? `?${params.toString()}` : ''}`, { scroll: false });
    });
  }, [debouncedSearchTerm, defaultValue, lang, router]);

  const isAr = lang === 'ar';
  const placeholder = isAr ? 'ابحث في المقالات...' : 'Rechercher dans les articles...';
  const ariaLabel = isAr ? 'البحث في المدونة' : 'Rechercher dans le blog';

  return (
    <form action={isAr ? '/blog' : '/fr/blog'} method="GET" className="relative group" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        name="q"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-busy={isPending}
        className={`w-full px-6 py-4 rounded-2xl border-2 border-gray-100 bg-white focus:border-emerald-500 focus:ring-0 focus:outline-none transition-all shadow-sm group-hover:shadow-md ${
          isAr ? 'pr-14 pl-12 text-right' : 'pl-14 pr-12 text-left'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      />
      <div className={`absolute top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors ${
        isAr ? 'right-5' : 'left-5'
      }`}>
        <Search size={22} />
      </div>
      {isPending && (
        <div className={`absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-5' : 'right-5'}`}>
          <div className="w-5 h-5 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        </div>
      )}
      
      {/* Screen Reader Result Announcements */}
      <div className="sr-only" aria-live="polite">
        {resultsCount !== undefined && (
          isAr
            ? `تم العثور على ${resultsCount} نتيجة بحث لـ ${searchTerm || 'جميع المقالات'}`
            : `${resultsCount} résultats trouvés pour ${searchTerm || 'tous les articles'}`
        )}
      </div>
    </form>
  );
}
