import Image from 'next/image';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'موثق معتمد',
      description: 'مرخص من وزارة العدل الجزائرية',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'خبرة 15+ سنة',
      description: 'سنوات من الخبرة في التوثيق',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: '+3000 عميل',
      description: 'قاعدة عملاء واسعة ومتنوعة',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'جودة عالية',
      description: 'دقة متناهية في كل المعاملات',
    },
  ];

  return (
    <section id="about" className="scroll-mt-20 md:scroll-mt-24 py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              عن المكتب
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              الموثق: الأستاذ لعطب محمد
              <span className="block text-emerald-600 text-2xl mt-2">موثق معتمد منذ 2008</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                موثق معتمد من وزارة العدل الجزائرية، حاصل على شهادة الماجستير في القانون الخاص من جامعة الجزائر. 
                يتمتع بخبرة تزيد عن 15 عاماً في مجال التوثيق والقانون، مع آلاف المعاملات الناجحة في مختلف المجالات القانونية.
              </p>
              <p>
                عضو في جمعية الموثقين الجزائريين، ومشارك في العديد من المؤتمرات القانونية المحلية والدولية. 
                يحرص على مواكبة أحدث التطورات القانونية والتشريعية لضمان تقديم خدمات توثيقية عالية الجودة.
              </p>
              <p>
                نؤمن بأهمية الشفافية والمصداقية في عملنا، ولذلك نحرص على شرح كل التفاصيل 
                لعملائنا والإجابة على جميع استفساراتهم بوضوح تام.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{feature.title}</h4>
                    <p className="text-gray-500 text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern-plus opacity-30" />
              <div className="relative z-10">
                {/* Professional Photo */}
                <div className="relative w-full h-80 mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                  alt="الأستاذ لعطب محمد"
                  fill
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Quote */}
              <blockquote className="text-center mb-8">
                <p className="text-lg md:text-xl leading-relaxed mb-4">
                  &quot;نلتزم بتقديم خدمات توثيقية متميزة تجمع بين الأصالة القانونية 
                  والحداثة في التعامل، مع الحفاظ على ثقة عملائنا الكريمة.&quot;
                </p>
                <footer className="text-emerald-200 font-medium">
                  - الموثق المعتمد
                </footer>
              </blockquote>

              {/* Certification Badges */}
              <div className="flex justify-center gap-4 flex-wrap">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">مرخص رسمياً</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm">معتمد من وزارة العدل</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-2xl -z-10 opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-200 rounded-2xl -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
