const Hero = () => {
  return (
    <div className="relative">
      <link rel="preload" href="/logo-optimized.png" as="image" fetchPriority="high" />
      <section
        id="home"
        className="
          relative flex items-center justify-center bg-emerald-900
          min-h-[100svh]
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
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">مرخص من وزارة العدل الجزائرية</span>
            </div>

            {/* Title — fluid font size with clamp */}
            <h1
              className="font-bold text-white leading-[1.2] tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, calc(6vw + 0.5rem), 4.5rem)' }}
            >
              مكتب الأستاذ لعطب محمد
              <span
                className="block text-amber-400 mt-1"
                style={{ fontSize: 'clamp(1.5rem, calc(5vw + 0.5rem), 3.75rem)' }}
              >
                موثق معتمد بوهران
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-white/85 max-w-xl mx-auto leading-relaxed px-1"
              style={{ fontSize: 'clamp(0.95rem, calc(2.5vw + 0.25rem), 1.25rem)' }}
            >
              ثقة 15 عامًا في التوثيق القانوني — نضمن لك معاملات آمنة وسريعة وفق أحدث الأنظمة القانونية الجزائرية
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm sm:max-w-md">
              <div className="bg-emerald-950/40 backdrop-blur-sm rounded-2xl px-4 py-3 sm:py-4 border border-emerald-800/50 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">15+</div>
                <div className="text-emerald-100 text-xs sm:text-sm font-medium mt-0.5">سنة خبرة</div>
              </div>
              <div className="bg-emerald-950/40 backdrop-blur-sm rounded-2xl px-4 py-3 sm:py-4 border border-emerald-800/50 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">5,000+</div>
                <div className="text-emerald-100 text-xs sm:text-sm font-medium mt-0.5">معاملة ناجحة</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none sm:justify-center">
              <a
                href="#booking-form"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30 touch-manipulation"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                احجز موعدك الآن
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all border border-white/30 touch-manipulation"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                اكتشف خدماتنا
              </a>
            </div>

          </div>
        </div>

        {/* Scroll indicator — hidden on very short screens */}
        <div className="absolute bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 animate-bounce will-change-transform hidden sm:block">
          <a href="#services" className="text-white/40 hover:text-white/80 transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
