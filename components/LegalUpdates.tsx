import Link from 'next/link';
import { Calendar, FileText, Scale, TrendingUp } from 'lucide-react';
import { DirectionalArrow } from '@/components/ui/DirectionalArrow';
import { Language, translations } from '@/lib/i18n/translations';
import { blogPosts, frBlogPosts } from '@/lib/data/blog';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

interface LegalUpdatesProps {
  lang: Language;
}

export default function LegalUpdates({ lang }: LegalUpdatesProps) {
  const content = translations[lang].legalUpdates;
  const posts = lang === 'fr' ? frBlogPosts : blogPosts;
  const latestPosts = posts.slice(0, 2);

  return (
    <section id="legal-updates" className="scroll-mt-20 md:scroll-mt-24 py-16 bg-white relative" dir={lang === 'fr' ? 'ltr' : 'rtl'}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12" style={{ textAlign: lang === 'fr' ? 'left' : 'right' }}>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {content.description}
            </p>
          </div>
          <Link 
            href={lang === 'fr' ? '/fr/blog' : '/blog'} 
            className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group"
          >
            {content.cta}
            <DirectionalArrow lang={lang} className="w-5 h-5" rtlClassName="group-hover:-translate-x-2" ltrClassName="group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {latestPosts.map((post) => (
            <Link 
              key={post.id}
              href={lang === 'fr' ? `/fr/blog/${post.slug}` : `/blog/${post.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    {iconMap[post.icon] || <FileText className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full border border-gray-100">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm flex-grow">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-50 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{post.date}</span>
                  </div>
                  <div className="font-medium bg-emerald-100 text-emerald-600 px-2 py-1 rounded-md">{post.readTime}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            href={lang === 'fr' ? '/fr/blog' : '/blog'} 
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 font-bold rounded-xl transition-colors shadow-sm"
          >
            {content.cta_mobile}
            <DirectionalArrow lang={lang} className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
