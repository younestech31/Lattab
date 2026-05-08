'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Calendar, FileText, Scale, TrendingUp, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

export default function BlogSearchList() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const categories = ['الكل', 'عقاري', 'شركات', 'جبائي'];

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

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-12">لا توجد نتائج لـ &quot;{query}&quot;</p>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 transition-all">
          {filtered.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    {iconMap[post.icon] || <FileText className="w-6 h-6" />}
                  </div>
                  <span className="text-sm font-bold px-4 py-2 bg-gray-50 text-gray-600 rounded-full border border-gray-100">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="text-sm font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">{post.readTime}</div>
                  </div>
                  <span className="text-emerald-600 font-bold group-hover:translate-x-[-8px] transition-transform flex items-center gap-1">
                    <ArrowLeft className="w-5 h-5"/>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
