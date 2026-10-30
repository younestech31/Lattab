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
 * Normalizes text for PDF generation.
 * With pdf-lib + @pdf-lib/fontkit, raw logical Arabic Unicode strings (e.g., "محمد لعطب", "وهران")
 * are automatically reshaped, connected, and ordered correctly by fontkit's OpenType layout engine.
 * No manual reshaping or bidi reversal is applied here to avoid double-processing.
 */
export function shapeArabicForPdf(text: string): string {
  if (!text || typeof text !== 'string') return '';
  return text.trim();
}
