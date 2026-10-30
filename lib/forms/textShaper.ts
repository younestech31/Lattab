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

/**
 * Shapes Arabic text (Presentation Forms-B) and reverses it for RTL drawing in PDF coordinate space.
 * Numbers and Latin tokens are preserved in their natural LTR reading order.
 */
export function shapeArabicForPdf(text: string): string {
  if (!text || typeof text !== 'string') return '';
  if (!hasArabic(text)) {
    return text;
  }

  try {
    // Convert to connected Arabic glyph forms (Initial, Medial, Final, Isolated)
    const shaped = ArabicShaper?.convertArabic ? ArabicShaper.convertArabic(text) : text;
    
    // Split into segments of Arabic vs Non-Arabic (numbers, latin, punctuation)
    // to reverse the overall line for RTL while keeping numbers and latin LTR.
    const tokens: Array<{ text: string; isRtl: boolean }> = [];
    const regex = /([\u0600-\u06FF\uFB50-\uFDFF\uFE70-\uFEFF\s]+)|([^\u0600-\u06FF\uFB50-\uFDFF\uFE70-\uFEFF\s]+)/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(shaped)) !== null) {
      if (match[1]) {
        tokens.push({ text: match[1], isRtl: true });
      } else if (match[2]) {
        tokens.push({ text: match[2], isRtl: false });
      }
    }

    // Reverse tokens overall (so Arabic flows right-to-left)
    // Within an Arabic token, reverse characters because pdf-lib draws left-to-right
    const reversed = tokens
      .reverse()
      .map((t) => (t.isRtl ? t.text.split('').reverse().join('') : t.text))
      .join('');

    return reversed;
  } catch (err) {
    console.warn('shapeArabicForPdf error:', err);
    return text;
  }
}
