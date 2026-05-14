'use client';
import { useState } from 'react';
import { blogPosts } from '@/lib/data/blog';
import BlogPostGrid from '@/components/BlogPostGrid';

export default function BlogSearchList() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const categories = ['الكل', 'عقاري', 'شركات', 'جبائي', 'قانوني'];

  const filtered = blogPosts.filter(p => {
    const matchesQuery = query.trim() ?
        (p.title.includes(query) ||
         p.description?.includes(query) ||
         (p as any).tags?.some((t: string) => t.includes(query))) : true;
    
    const matchesCategory = selectedCategory === 'الكل' || p.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-600 hover:bg-emerald-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        type="search"
        placeholder="ابحث في المدونة..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full max-w-md mx-auto block px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none mb-10 text-right"
      />

      <div aria-live="polite">
        <BlogPostGrid posts={filtered} emptyMessage={`لا توجد نتائج لـ "${query}"`} />
      </div>
    </>
  );
}
