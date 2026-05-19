'use client';
import { useLang } from '@/lib/i18n';

interface LanguageSwitcherProps {
  headerActive: boolean;
  isMobile?: boolean;
}

export default function LanguageSwitcher({ headerActive, isMobile = false }: LanguageSwitcherProps) {
  const { lang, toggleLang } = useLang();
  
  return (
    <button
      onClick={toggleLang}
      className={`border border-current rounded-lg font-bold transition-colors flex items-center justify-center gap-1 ${
        isMobile ? 'px-2 min-w-[2.5rem] py-1 text-sm' : 'px-3 py-1 text-sm ml-2'
      } ${
        headerActive ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
      }`}
      aria-label={lang === 'ar' ? 'تغيير اللغة' : 'Changer la langue'}
    >
      <span className={`text-xs flex-shrink-0 ${isMobile ? 'hidden' : 'inline-block'}`}>🌐</span>
      {isMobile ? (lang === 'ar' ? 'Ar' : 'Fr') : (lang === 'ar' ? 'العربية ▾' : 'Français ▾')}
    </button>
  );
}
