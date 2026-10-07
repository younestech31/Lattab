import Link from 'next/link';
import { Calculator, Phone, MapPin } from 'lucide-react';
import PhoneLink from '@/components/ui/PhoneLink';

interface Props {
  serviceTag: string;
  bookingServiceValue: string;
  slug: string;
  lang: 'ar' | 'fr';
  category: string;
}

export default function ArticleActionLinks({ serviceTag, bookingServiceValue, lang, category }: Props) {
  const isRtl = lang === 'ar';
  const showCalculator = category === 'عقاري' || category === 'Immobilier';
  const contactUrl = isRtl ? `/contact?service=${encodeURIComponent(bookingServiceValue)}` : `/fr/contact?service=${encodeURIComponent(bookingServiceValue)}`;
  const calcUrl = isRtl ? '/calculateur-prix-referentiel' : '/fr/calculateur-prix-referentiel';
  
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-slate-700" />
          {isRtl ? 'بيانات الاستقبال والتنظيم الإداري بالديوان' : 'Informations administratives et réception'}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {isRtl
            ? `الديوان العمومي للتوثيق ببلدية وهران يستقبل المواطنين والمعنيين بمعاملات (${serviceTag}) لتنظيم الإجراءات وإيداع الوثائق المطلوبة طبقاً للقانون 06-02 المنظم للمهنة.`
            : `L'Office Public Notarial à Oran accueille les usagers pour les formalités relatives à (${serviceTag}) et le dépôt des pièces selon la législation notariale.`}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href={contactUrl}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-900 transition-colors text-sm"
          >
            {isRtl ? 'طلب موعد إداري' : 'Demande de rendez-vous administratif'}
          </Link>

          <PhoneLink
            type="office"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-800 border border-slate-300 rounded-xl font-medium hover:bg-slate-100 transition-colors text-sm"
            icon={<Phone className="w-4 h-4 text-slate-600" />}
          />

          {showCalculator && (
            <Link
              href={calcUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 text-white rounded-xl font-medium hover:bg-emerald-800 transition-colors text-sm"
            >
              <Calculator className="w-4 h-4" />
              {isRtl ? 'حاسبة السعر المرجعي العقاري' : 'Calculateur officiel des prix de référence'}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
