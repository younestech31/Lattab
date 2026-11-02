'use client';

import { t, Language } from '@/lib/i18n/translations';

export default function Hero({ lang }: { lang: Language }) {
  const isAr = lang === 'ar';

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = 'services';
    }
  };

  return (
    <div className="relative" dir={isAr ? 'rtl' : 'ltr'}>
      <section
        id="home"
        className="
          scroll-mt-20
          relative flex items-center justify-center bg-emerald-900
          pt-20 pb-10 sm:pt-24 sm:pb-12
        "
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-emerald-900" />
          <div className="absolute inset-0 bg-pattern-plus" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-16 left-4 w-40 h-40 sm:w-64 sm:h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse motion-reduce:animate-none will-change-transform pointer-events-none" />
        <div className="absolute bottom-16 right-4 w-40 h-40 sm:w-64 sm:h-64 bg-emerald-700 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse motion-reduce:animate-none will-change-transform pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-3 md:gap-4">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <span className="font-medium">{t(lang, 'hero', 'badge')}</span>
            </div>

            {/* Eyebrow */}
            <p className="text-amber-200 font-semibold text-sm sm:text-base leading-snug">
              {t(lang, 'hero', 'eyebrow')}
            </p>

            {/* Title — single distinct H1. Fixed scale: do not grow with viewport width. */}
            <h1
              className="font-bold text-white leading-snug tracking-tight text-3xl sm:text-4xl"
            >
              {t(lang, 'hero', 'title')}
            </h1>

            {/* Subtitle / Description */}
            <p
              className="hero-description text-emerald-100 max-w-2xl mx-auto leading-relaxed px-1 text-base"
            >
              {t(lang, 'hero', 'description')}
            </p>

            {/* Single Action Link: Documents et démarches to #services */}
            <div className="flex justify-center w-full max-w-sm sm:max-w-none pt-1">
              <a
                href="#services"
                onClick={handleScrollToServices}
                aria-label={isAr ? 'الوثائق والإجراءات — الانتقال إلى الاختصاصات والمعاملات التوثيقية' : 'Documents et démarches — Voir les attributions de l\'office'}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white min-h-11 px-6 py-2.5 rounded-xl font-bold text-base transition-all border border-emerald-400/40 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900 shadow-lg cursor-pointer"
              >
                <span>{isAr ? 'الوثائق والإجراءات' : 'Documents et démarches'}</span>
                <svg className="w-5 h-5 shrink-0 text-white animate-bounce motion-reduce:animate-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
