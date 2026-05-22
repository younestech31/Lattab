import { t, Language } from '@/lib/i18n/translations';

export default function Hero({ lang }: { lang: Language }) {

  return (
    <div className="relative" dir={lang === 'fr' ? 'ltr' : 'rtl'}>
      <section
        id="home"
        className="
          scroll-mt-20 md:scroll-mt-24
          relative flex items-center justify-center bg-emerald-900
          min-h-[100svh] overflow-hidden
          pt-[calc(4rem+env(safe-area-inset-top,0px))]
          pb-[calc(5rem+env(safe-area-inset-bottom,0px))]
          md:min-h-screen md:pt-24 md:pb-16
        "
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-emerald-900" />
          <div className="absolute inset-0 bg-pattern-plus" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/60 to-transparent" />
        </div>

        {/* Decorative blobs — smaller on mobile */}
        <div className="absolute top-16 left-4 w-40 h-40 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse motion-reduce:animate-none will-change-transform" />
        <div className="absolute bottom-16 right-4 w-40 h-40 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse motion-reduce:animate-none will-change-transform" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5 md:gap-7">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <span className="font-medium">{t(lang, 'hero', 'badge')}</span>
            </div>

            {/* Title — fluid font size with clamp */}
            <h1
              className="font-bold text-white leading-[1.2] tracking-tight text-[clamp(1.75rem,calc(6vw+0.5rem),4.5rem)]"
            >
              {t(lang, 'hero', 'title')}
              <span
                className="block text-amber-400 mt-1 text-[clamp(1.5rem,calc(5vw+0.5rem),3.75rem)]"
              >
                {t(lang, 'hero', 'subtitle')}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero-description text-white/85 max-w-xl mx-auto leading-relaxed px-1 text-[clamp(0.95rem,calc(2.5vw+0.25rem),1.25rem)]"
            >
              {t(lang, 'hero', 'description')}
            </p>

            {/* Stats removed: prohibited advertising */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none sm:justify-center">
              <a
                href="#booking-form"
                aria-label={t(lang, 'hero', 'cta_book')}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30 touch-manipulation"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t(lang, 'hero', 'cta_book')}
              </a>
              <a
                href="#services"
                aria-label={t(lang, 'hero', 'cta_services')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all border border-white/30 touch-manipulation"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {t(lang, 'hero', 'cta_services')}
              </a>
            </div>

          </div>
        </div>

        {/* Scroll indicator — hidden on very short screens */}
        <div className="absolute bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none will-change-transform hidden sm:block">
          <a href="#services" className="text-white/40 hover:text-white/80 transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        {/* Sentinel pour StickyMobileCTA */}
        <div id="cta-sentinel" className="absolute bottom-0 w-full h-px pointer-events-none" />
      </section>
    </div>
  );
};
