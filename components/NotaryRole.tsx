import { Language, translations } from '@/lib/i18n/translations';
import { Shield, Search, Archive, Scale, Receipt, BookOpen } from 'lucide-react';

interface NotaryRoleProps {
  lang: Language;
}

export default function NotaryRole({ lang }: NotaryRoleProps) {
  const content = translations[lang].notaryRole;

  // Mapping the icons based on new order
  const IconComponents = [Shield, Search, Archive, Scale, Receipt, BookOpen];

  return (
    <section id="notary-role" className="scroll-mt-20 md:scroll-mt-24 py-12 bg-slate-50" dir={lang === 'fr' ? 'ltr' : 'rtl'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* RTL-safe: uses logical properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature, index) => {
            const Icon = IconComponents[index] || BookOpen;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-amber-500"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-lg me-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-start">
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
