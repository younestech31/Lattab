import { cookies } from 'next/headers';
import { Language, translations } from '@/lib/i18n/translations';
import { ShieldCheck, Zap, Award, FileText, MapPin, Smartphone, CheckSquare } from 'lucide-react';

export default async function WhyChooseUs() {
  const lang = ((await cookies()).get('lang')?.value ?? 'ar') as Language;
  const content = translations[lang].whyChooseUs;

  // Mapping the icons based on original order
  const IconComponents = [ShieldCheck, Zap, Award, FileText, MapPin, Smartphone, CheckSquare];

  return (
    <section id="why-choose-us" className="scroll-mt-20 md:scroll-mt-24 py-12 bg-gradient-to-b from-emerald-50 to-white" dir={lang === 'fr' ? 'ltr' : 'rtl'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature, index) => {
            const Icon = IconComponents[index];
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg ml-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600" style={{ textAlign: lang === 'fr' ? 'left' : 'right' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
