'use client';
import { useLang } from '@/lib/i18n';

interface LanguageSwitcherProps {
  headerActive: boolean;
  isMobile?: boolean;
}

export default function LanguageSwitcher({ headerActive, isMobile: _isMobile = false }: LanguageSwitcherProps) {
  const { lang, toggleLang, isPending } = useLang();
  
  // Decide target alternative language to display
  const targetLangText = lang === 'ar' ? 'FR' : 'AR';
  
  return (
    <button
      onClick={toggleLang}
      disabled={isPending}
      aria-busy={isPending}
      className={`w-8 h-8 md:w-9 md:h-9 flex items-center justify-center font-mono text-xs md:text-sm font-bold tracking-wider border rounded-none transition-all duration-300 pointer-events-auto leading-none ${
        headerActive 
          ? 'border-gray-900 text-gray-900 bg-white hover:bg-gray-900 hover:text-white' 
          : 'border-white text-white bg-transparent hover:bg-white hover:text-emerald-900'
      } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label={lang === 'ar' ? 'Changer de langue vers le français' : 'تغيير اللغة إلى العربية'}
    >
      {isPending ? (
        <span className="animate-spin text-xs" aria-hidden="true">⟳</span>
      ) : (
        <span>{targetLangText}</span>
      )}
    </button>
  );
}

