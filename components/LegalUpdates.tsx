import Link from 'next/link';
import { Calendar, ArrowLeft, FileText, Scale, TrendingUp } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

const LegalUpdates = () => {
  const latestPosts = blogPosts.slice(0, 4);

  return (
    <section id="legal-updates" className="scroll-mt-20 md:scroll-mt-24 py-16 bg-white relative" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              المدونة القانونية والعقارية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              أحدث المقالات المرجعية، الشروحات القانونية، وأهم المستجدات حول العقارات وتأسيس الشركات في الجزائر.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group"
          >
            تصفح جميع المقالات
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {latestPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    {iconMap[post.icon] || <FileText className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full border border-gray-100">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight">
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
                  <div className="font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">{post.readTime}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 font-bold rounded-xl transition-colors"
          >
            عرض جميع المقالات
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalUpdates;
