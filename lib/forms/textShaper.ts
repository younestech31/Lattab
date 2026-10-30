// @ts-expect-error arabic-persian-reshaper has untyped CommonJS exports
import { ArabicShaper } from 'arabic-persian-reshaper';

/**
 * Checks if a character is within the basic Arabic Unicode block
 */
export function isArabicChar(ch: string): boolean {
  if (!ch) return false;
  const code = ch.charCodeAt(0);
  return (
    (code >= 0x0600 && code <= 0x06ff) ||
    (code >= 0x0750 && code <= 0x077f) ||
    (code >= 0x08a0 && code <= 0x08ff) ||
    (code >= 0xfb50 && code <= 0xfdff) ||
    (code >= 0xfe70 && code <= 0xfeff)
  );
}

export function hasArabic(text: string): boolean {
  return /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
}

function shapeToken(token: string): string {
  const shaped = ArabicShaper.convertArabic(token); // connected Presentation Forms-B, logical order
  return Array.from(shaped).reverse().join('');     // visual LTR order for pdf-lib
}

/**
 * Converts Arabic text to connected Presentation Forms-B and performs a single
 * visual reversal so that pdf-lib draws connected Arabic text in the correct LTR sequence.
 * Non-Arabic tokens (numbers, Latin, punctuation) are preserved as-is.
 */
export function shapeArabicForPdf(text: string): string {
  if (!text || typeof text !== 'string') return '';
  if (!hasArabic(text)) return text.trim();

  try {
    const tokens: Array<{ text: string; isArabic: boolean }> = [];
    const regex = /([\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\s]+)|([^\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\s]+)/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match[1]) {
        tokens.push({ text: match[1], isArabic: true });
      } else if (match[2]) {
        tokens.push({ text: match[2], isArabic: false });
      }
    }

    const result = tokens
      .reverse()
      .map((t) => (t.isArabic ? shapeToken(t.text) : t.text))
      .join('');

    return result;
  } catch (err) {
    console.warn('shapeArabicForPdf error:', err);
    return text.trim();
  }
}
