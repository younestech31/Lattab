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
              {isAr ? 'حاسبة السعر المرجعي للعقار ' : 'Calculateur des prix de référence immobilier '}
              <span className="block text-amber-300 mt-1">2025–2026</span>
            </h2>
            <p className="text-emerald-200 text-sm md:text-base leading-relaxed mb-6">
              {isAr
                ? 'أداة معلوماتية للاطلاع على نطاقات القيم المرجعية للعقار الواردة في مرجع المديرية العامة للضرائب، وفق البيانات المتاحة في الأداة.'
                : 'Outil d\'information présentant les fourchettes de valeurs immobilières du référentiel de la Direction Générale des Impôts, selon les données disponibles dans l\'outil.'}
            </p>
            
            <div className={`flex justify-center ${isAr ? 'md:justify-start' : 'md:justify-start'}`}>
              <Link 
                href={isAr ? '/calculateur-prix-referentiel' : '/fr/calculateur-prix-referentiel'}
                aria-label={isAr ? 'الانتقال إلى حاسبة السعر المرجعي للعقار' : 'Accéder au calculateur des prix de référence'}
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl min-h-11 transition-all shadow-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
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
