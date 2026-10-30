import createBidi from 'bidi-js';
// @ts-expect-error arabic-persian-reshaper has untyped CommonJS exports
import { ArabicShaper } from 'arabic-persian-reshaper';

const bidi = createBidi();

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
 * Mental test / Verification:
 * Input: "وهران" or "محمد" or "محمد لعطب"
 * 1) ArabicShaper.convertArabic() reshapes individual Unicode characters into connected Presentation Forms-B glyphs.
 * 2) bidi.getEmbeddingLevels() + bidi.getReorderedString() visually reorders the characters so that when
 *    pdf-lib renders them left-to-right on the PDF canvas, the text displays connected right-to-left.
 */
export function shapeArabicForPdf(text: string): string {
  if (!text || typeof text !== 'string') return '';
  if (!hasArabic(text)) {
    return text;
  }

  try {
    // 1. Reshape Arabic glyphs to Unicode Presentation Forms-B (connected contextual forms)
    const reshaped = ArabicShaper?.convertArabic ? ArabicShaper.convertArabic(text) : text;

    // 2. Compute Bidirectional embedding levels and reorder string for LTR PDF rendering
    const embeddingLevels = bidi.getEmbeddingLevels(reshaped, 'rtl');
    const visualOrderString = bidi.getReorderedString(reshaped, embeddingLevels);

    return visualOrderString;
  } catch (err) {
    console.warn('shapeArabicForPdf error:', err);
    return text;
  }
}
