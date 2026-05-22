'use client';
import { faqs } from '@/lib/data/faq';

interface FAQAccordionProps { lang: 'ar' | 'fr'; }

export default function FAQAccordion({ lang }: FAQAccordionProps) {
  const isRtl = lang === 'ar';
  
  return (
    <div className="lg:col-span-2 space-y-4" dir={isRtl ? 'rtl' : 'ltr'}>
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 open:ring-2 open:ring-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500"
        >
          <summary
            dir={isRtl ? 'rtl' : 'ltr'}
            className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-800 outline-none focus-visible:outline-2 focus-visible:outline-emerald-500 rounded-2xl"
            aria-expanded="false"
            onClick={(e) => {
              const details = e.currentTarget.parentElement;
              if (details) {
                const isOpen = details.hasAttribute('open');
                e.currentTarget.setAttribute('aria-expanded', (!isOpen).toString());
              }
            }}
          >
            <span className="flex-1 text-start">{lang === 'ar' ? faq.questionAr : faq.questionFr}</span>
            {/* Directional chevron — points down when closed, up when open */}
            <svg
              className="w-5 h-5 text-emerald-600 transition-transform duration-200 group-open:rotate-180 shrink-0 ms-2"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-6 pb-6 text-gray-600 leading-relaxed text-start">
            {lang === 'ar' ? faq.answerAr : faq.answerFr}
          </div>
        </details>
      ))}
    </div>
  );
}
