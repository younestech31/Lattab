import { ArrowLeft } from 'lucide-react';

interface DirectionalArrowProps {
  lang: 'ar' | 'fr';
  className?: string;
  /** CSS classes applied when the language is RTL (Arabic) */
  rtlClassName?: string;
  /** CSS classes applied when the language is LTR (French) */
  ltrClassName?: string;
}

/**
 * An arrow icon that automatically points in the correct reading direction.
 * In RTL (Arabic), it points left (←) — the natural "forward" direction.
 * In LTR (French), it points right (→) by mirroring the ArrowLeft icon.
 *
 * This is an aria-hidden decorative icon. Never use it as the sole indicator
 * of direction for screen reader users — always pair with descriptive text.
 */
export function DirectionalArrow({ lang, className = 'w-5 h-5', rtlClassName = '', ltrClassName = '' }: DirectionalArrowProps) {
  const isRtl = lang === 'ar';
  return (
    <ArrowLeft
      className={`${className} ${isRtl ? rtlClassName : `scale-x-[-1] ${ltrClassName}`} transition-transform`}
      aria-hidden="true"
    />
  );
}
