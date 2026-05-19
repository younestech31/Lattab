import Link from 'next/link';
import { MessageCircle, Calendar } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils/whatsapp';

interface Props {
  serviceTag: string;
  bookingServiceValue: string;
  slug: string;
  lang: 'ar' | 'fr';
}

export default function ArticleConversionCTA({ serviceTag, bookingServiceValue, slug, lang }: Props) {
  const isRtl = lang === 'ar';
  
  return (
    <div className={`rounded-3xl border border-emerald-100 p-8 md:p-12 ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Booking */}
        <div className="bg-white p-6 rounded-2xl border border-emerald-50 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {isRtl ? `هل تحتاج إلى موثق لـ ${serviceTag}؟` : `Besoin d'un notaire pour ${serviceTag}?`}
          </h3>
          <p className="text-gray-600 mb-6 font-medium">
            {isRtl ? "احجز موعداً مباشرة عبر الموقع — سريع ومجاني." : "Prenez rendez-vous directement — rapide et gratuit."}
          </p>
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
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {isRtl ? "أو تواصل فوراً عبر واتساب" : "Ou contactez-nous via WhatsApp"}
          </h3>
          <p className="text-gray-600 mb-6 font-medium">
            {isRtl ? "نحن متاحون للرد على استفساراتك مباشرة." : "Nous sommes disponibles pour répondre à vos questions."}
          </p>
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
      </div>
    </div>
  );
}
