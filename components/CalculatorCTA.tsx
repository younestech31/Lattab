import Link from 'next/link';
import { Calculator, ArrowLeft } from 'lucide-react';

const CalculatorCTA = () => {
  return (
    <section className="py-12 bg-emerald-900 border-y border-emerald-800" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-emerald-800/50 rounded-2xl p-6 md:p-8 border border-emerald-700/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              حاسبة السعر المرجعي للعقار
              <span className="block text-emerald-400 mt-1">وهران 2026</span>
            </h2>
            <p className="text-emerald-50 text-sm md:text-base leading-relaxed mb-6">
              تجنب غرامات التقويم الضريبي. احسب الحد الأدنى للتصريح الرسمي بأسعار البيع والإيجار لولاية وهران بضغطة زر واحدة.
            </p>
            
            <div className="flex justify-center md:justify-start">
              <Link 
                href="/calculateur-prix-referentiel"
                aria-label="الانتقال إلى حاسبة السعر المرجعي للعقار"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 group"
              >
                <Calculator className="w-5 h-5" />
                ابدأ الحساب الآن مجاناً
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorCTA;
