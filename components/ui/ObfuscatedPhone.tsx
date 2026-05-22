import { Language } from '@/lib/i18n/translations';

/**
 * Props for the ObfuscatedPhone component.
 */
export interface ObfuscatedPhoneProps {
  number: string;
  display: string;
  lang: Language;
  className?: string;
}

/**
 * Server Component that obfuscates a phone number against basic web scrapers.
 * Uses a reversed Unicode CSS override combined with segmented DOM output,
 * while maintaining perfect WCAG AA accessibility via an un-obfuscated tel: href
 * and screen-reader specific aria-label announcements.
 */
export default function ObfuscatedPhone({ number, display, lang, className = '' }: ObfuscatedPhoneProps) {
  // Visually reverse the display text
  const reversed = display.split('').reverse().join('');
  
  // Split the reversed text into chunks to further disrupt naive regex scanners
  const chunkSize = Math.max(3, Math.ceil(reversed.length / 4));
  const chunks: string[] = [];
  for (let i = 0; i < reversed.length; i += chunkSize) {
    chunks.push(reversed.slice(i, i + chunkSize));
  }

  const ariaLabel = lang === 'ar' ? `الهاتف: ${display}` : `Téléphone : ${display}`;

  return (
    <a
      href={`tel:${number}`}
      className={`hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors ${className}`}
      dir="ltr"
      aria-label={ariaLabel}
    >
      <span className="inline-flex [unicode-bidi:bidi-override] [direction:rtl]" aria-hidden="true">
        {chunks.map((chunk, index) => (
          <span key={index}>{chunk}</span>
        ))}
      </span>
    </a>
  );
}
