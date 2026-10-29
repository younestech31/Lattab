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
    <section id="notary-role" className="scroll-mt-20 md:scroll-mt-24 py-12 bg-white" dir={lang === 'fr' ? 'ltr' : 'rtl'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* RTL-safe: uses logical properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature, index) => {
            const Icon = IconComponents[index];
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl me-4 shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
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
