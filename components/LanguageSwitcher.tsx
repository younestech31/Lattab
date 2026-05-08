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
      className={`border border-current rounded-lg font-bold transition-colors ${
        isMobile ? 'px-2 py-1 text-sm' : 'px-3 py-1 text-sm ml-2'
      } ${
        headerActive ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
      }`}
    >
      {lang === 'ar' ? 'FR' : 'AR'}
    </button>
  );
}
