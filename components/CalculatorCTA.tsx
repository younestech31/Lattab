import Link from 'next/link';
import { Calculator } from 'lucide-react';
import { DirectionalArrow } from '@/components/ui/DirectionalArrow';
import { Language } from '@/lib/i18n/translations';

interface CalculatorCTAProps { lang?: Language; }

const CalculatorCTA = ({ lang = 'ar' }: CalculatorCTAProps) => {
  const isAr = lang === 'ar';

  return (
    <section className="py-12 bg-emerald-900 border-y border-emerald-800" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-emerald-800/50 rounded-2xl p-6 md:p-8 border border-emerald-700/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className={`flex-1 text-center ${isAr ? 'md:text-right' : 'md:text-left'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {isAr ? 'حاسبة السعر المرجعي للعقار' : 'Calculateur des prix de référence immobilier'}
              <span className="block text-emerald-400 mt-1">2026</span>
            </h2>
            <p className="text-emerald-50 text-sm md:text-base leading-relaxed mb-6">
              {isAr ? 'أداة إعلامية للتعرف على الأسعار المرجعية لوزارة المالية لولاية وهران.' : 'Outil d\'information sur les prix de référence officiels du Ministère des Finances pour la wilaya d\'Oran.'}
            </p>
            
            <div className={`flex justify-center ${isAr ? 'md:justify-start' : 'md:justify-start'}`}>
              <Link 
                href="/calculateur-prix-referentiel"
                aria-label={isAr ? 'الانتقال إلى حاسبة السعر المرجعي للعقار' : 'Accéder au calculateur des prix de référence'}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 group"
              >
                <Calculator className="w-5 h-5" />
                {isAr ? 'الانتقال إلى الحاسبة' : 'Accéder au calculateur'}
                <DirectionalArrow lang={lang} className="w-4 h-4 transition-transform group-hover:-translate-x-1" rtlClassName="group-hover:-translate-x-1" ltrClassName="group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorCTA;
