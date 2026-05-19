'use client';
import { useLang } from '@/lib/i18n';

interface LanguageSwitcherProps {
  headerActive: boolean;
  isMobile?: boolean;
}

export default function LanguageSwitcher({ headerActive, isMobile = false }: LanguageSwitcherProps) {
  const { lang, toggleLang, isPending } = useLang();
  
  return (
    <button
      onClick={toggleLang}
      disabled={isPending}
      aria-busy={isPending}
      className={`border border-current rounded-lg font-bold transition-colors flex items-center justify-center gap-1 ${
        isMobile ? 'px-2 min-w-[3rem] py-1 text-sm' : 'px-3 py-1 text-sm ms-2'
      } ${
        headerActive ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
      } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label={lang === 'ar' ? 'تغيير اللغة' : 'Changer la langue'}
    >
      {isPending ? (
        <span className="animate-spin text-lg" aria-hidden="true">⟳</span>
      ) : (
        <>
          <span className={`text-xs flex-shrink-0 ${isMobile ? 'hidden' : 'inline-block'}`}>🌐</span>
          {isMobile ? (lang === 'ar' ? 'Ar' : 'Fr') : (lang === 'ar' ? 'العربية ▾' : 'Français ▾')}
        </>
      )}
    </button>
  );
}
