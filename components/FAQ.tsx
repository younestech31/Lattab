import { cookies } from 'next/headers';
import { faqs } from '@/lib/data/faq';
import { t, Language } from '@/lib/i18n/translations';

export default async function FAQ() {
  const lang = ((await cookies()).get('lang')?.value ?? 'ar') as Language;
  
  return (
    <section id="faq" className="scroll-mt-20 md:scroll-mt-24 py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Info */}
          <div className="lg:col-span-1">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t(lang, 'faq', 'badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t(lang, 'faq', 'title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t(lang, 'faq', 'description')}
            </p>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4">{t(lang, 'faq', 'contact_title')}</h3>
              <p className="text-emerald-100 mb-6 text-sm">
                {t(lang, 'faq', 'contact_description')}
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+213562296981"
                  className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span dir="ltr">+213 562 29 69 81</span>
                </a>
                <a
                  href="mailto:maitrelattabmohamed@gmail.com"
                  className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>maitrelattabmohamed@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="lg:col-span-2 space-y-4" dir={lang === 'fr' ? 'ltr' : 'rtl'}>
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 open:ring-2 open:ring-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-800 outline-none">
                  {lang === 'ar' ? faq.questionAr : faq.questionFr}
                  <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {lang === 'ar' ? faq.answerAr : faq.answerFr}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
