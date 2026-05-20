import Link from 'next/link';
import { MessageCircle, Calendar } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils/whatsapp';

interface Props {
  serviceTag: string;
  bookingServiceValue: string;
  slug: string;
  lang: 'ar' | 'fr';
  category: string;
}

export default function ArticleConversionCTA({ serviceTag, bookingServiceValue, slug, lang, category }: Props) {
  const isRtl = lang === 'ar';
  const showCalculator = category === 'عقاري' || category === 'Immobilier';
  
  return (
    <div className={`rounded-3xl border border-emerald-100 p-8 md:p-12 ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}>
      <div className={`grid md:grid-cols-2 ${showCalculator ? 'lg:grid-cols-3' : ''} gap-8`}>
        {/* Booking */}
        <div className="bg-white p-6 rounded-2xl border border-emerald-50 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isRtl ? `هل تحتاج إلى موثق لـ ${serviceTag}؟` : `Besoin d'un notaire pour ${serviceTag}?`}
            </h3>
            <p className="text-gray-600 mb-6 font-medium">
              {isRtl ? "احجز موعداً مباشرة عبر الموقع — سريع ومجاني." : "Prenez rendez-vous directement — rapide et gratuit."}
            </p>
          </div>
          <Link 
            href={`/?service=${encodeURIComponent(bookingServiceValue)}#booking-form`}
            className="inline-flex items-center justify-center w-full py-3 px-6 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors gap-2"
            aria-label={isRtl ? `حجز موعد لخدمة ${bookingServiceValue}` : `Réserver un rendez-vous pour ${bookingServiceValue}`}
          >
            <Calendar className="w-5 h-5" />
            {isRtl ? "احجز موعداً الآن" : "Réserver maintenant"}
          </Link>
        </div>

        {/* WhatsApp */}
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isRtl ? "أو تواصل فوراً عبر واتساب" : "Ou contactez-nous via WhatsApp"}
            </h3>
            <p className="text-gray-600 mb-6 font-medium">
              {isRtl ? "نحن متاحون للرد على استفساراتك مباشرة." : "Nous sommes disponibles pour répondre à vos questions."}
            </p>
          </div>
          <a 
            href={buildWhatsAppUrl({ service: bookingServiceValue, source: (isRtl ? 'مقال: ' : 'Article: ') + slug })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-3 px-6 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors gap-2"
            aria-label={isRtl ? "تواصل عبر واتساب" : "Contactez via WhatsApp"}
          >
            <MessageCircle className="w-5 h-5" />
            {isRtl ? "تواصل عبر واتساب" : "WhatsApp"}
          </a>
        </div>

        {/* Conditional Calculator CTA */}
        {showCalculator && (
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">
                {isRtl ? "حاسبة الأسعار المرجعية للعقارات" : "Calculateur des Prix de Référence"}
              </h3>
              <p className="text-emerald-100 mb-6 font-medium text-sm leading-relaxed">
                {isRtl 
                  ? "احسب القيمة التقريبية لعقارك وفقاً للأسعار المرجعية لوزارة المالية لتفادي المراجعة الضريبية."
                  : "Estimez la valeur de votre bien selon le référentiel officiel pour éviter le redressement fiscal."}
              </p>
            </div>
            <Link 
              href="/calculateur-prix-referentiel"
              className="inline-flex items-center justify-center w-full py-3 px-6 bg-white text-emerald-700 rounded-xl font-bold hover:bg-emerald-50 transition-colors gap-2"
              aria-label={isRtl ? "احسب السعر المرجعي لعقارك" : "Calculer le prix de référence"}
            >
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 11h.01M12 14h.01M15 11h.01M12 7h.01M15 7h.01M15 14h.01M9 11h.01M12 17h.01M15 17h.01" />
              </svg>
              {isRtl ? "احسب السعر المرجعي لعقارك" : "Calculer le prix de référence"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
