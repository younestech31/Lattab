import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WebPageSchema from '@/components/WebPageSchema';
import { Calendar, FileText, Scale, TrendingUp, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';

export const metadata: Metadata = {
  title: 'المدونة القانونية والعقارية | الأستاذ لعطب محمد - موثق',
  description: 'دليل شامل للقوانين العقارية والإجراءات التوثيقية في الجزائر. مقالات متخصصة من مكتب الموثق لعطب محمد بوهران.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'المدونة القانونية والعقارية | الأستاذ لعطب محمد - موثق',
    description: 'دليل شامل للقوانين العقارية والإجراءات التوثيقية في الجزائر. مقالات متخصصة من مكتب الموثق لعطب محمد بوهران.',
    url: 'https://lattab.vercel.app/blog',
    siteName: 'مكتب الأستاذ لعطب محمد - موثق بوهران',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'المدونة القانونية - موثق معتمد',
      },
    ],
    locale: 'ar_DZ',
    type: 'website',
  },
};

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

export default function BlogList() {
  return (
    <div className="min-h-screen bg-gray-50">
      <WebPageSchema
        url="https://lattab.vercel.app/blog"
        name="المدونة القانونية والعقارية | الأستاذ لعطب محمد - موثق"
        description="مقالات ونصوص قانونية، الأسعار المرجعية للعقار بوهران 2026، شروحات تأسيس الشركات وكل ما يخص المعاملات التوثيقية بالجزائر."
        breadcrumbs={[
          { name: "الرئيسية", item: "https://lattab.vercel.app/" },
          { name: "المدونة", item: "https://lattab.vercel.app/blog" }
        ]}
      />
      <Header />
      <main className="pt-32 pb-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">المدونة القانونية</h1>
            <p className="text-xl text-gray-600">
              دليلك الشامل للقوانين العقارية، الإجراءات التوثيقية، وأدلة تأسيس الشركات في الجزائر. 
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
