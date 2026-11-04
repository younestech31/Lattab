import { PDFDocument, rgb, StandardFonts, PDFFont } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { FillPdfOptions } from './types';
import { shapeArabicForPdf, hasArabic } from './textShaper';

/**
 * Calculates font size and text scaling to ensure text strictly fits within maxWidth.
 * Prevents any text from overflowing onto other parts of the official form.
 */
function fitTextInBox(
  font: PDFFont,
  text: string,
  initialSize: number,
  maxWidth?: number
): { fontSize: number; textWidth: number; fittedText: string; fits: boolean } {
  let size = initialSize;
  let textWidth = font.widthOfTextAtSize(text, size);
  if (!maxWidth || maxWidth <= 0 || textWidth <= maxWidth) {
    return { fontSize: size, textWidth, fittedText: text, fits: true };
  }
  // Preserve every character. Reduce the font only to a legible 6pt minimum.
  while (textWidth > maxWidth && size > 6) {
    size = Math.max(6, size - 0.5);
    textWidth = font.widthOfTextAtSize(text, size);
  }
  return { fontSize: size, textWidth, fittedText: text, fits: textWidth <= maxWidth };
}

/**
 * Generic PDF filling engine for official Algerian administrative and tax templates.
 * Operates purely on client-side memory using pdf-lib. Never modifies template structure.
 */
export async function fillOfficialPdf(options: FillPdfOptions): Promise<Uint8Array> {
  const { templateUrl, fields, values, fontUrl = '/fonts/Amiri-Regular.ttf', debug = false } = options;

  // 1. Fetch official PDF template
  const templateRes = await fetch(templateUrl);
  if (!templateRes.ok) {
    throw new Error(`تعذر تحميل نموذج PDF الرسمي من ${templateUrl} (HTTP ${templateRes.status})`);
  }
  const templateBytes = await templateRes.arrayBuffer();

  // 2. Load PDF document into pdf-lib
  const pdfDoc = await PDFDocument.load(templateBytes);
  if (options.expectedPages !== undefined && pdfDoc.getPageCount() !== options.expectedPages) {
    throw new Error(`عدد صفحات النموذج غير مطابق: المتوقع ${options.expectedPages}، والملف يحتوي على ${pdfDoc.getPageCount()} صفحة.`);
  }
  pdfDoc.registerFontkit(fontkit);

  // Load Amiri only when at least one value contains Arabic.
  const requiresArabicFont = Object.values(values).some(
    (value) => value !== undefined && value !== null && value !== '' && hasArabic(String(value))
  );
  let customFont: PDFFont | null = null;
  if (requiresArabicFont) {
    try {
      let fontRes = await fetch(fontUrl);
      if (!fontRes.ok) {
        const altUrl = fontUrl.toLowerCase();
        if (altUrl !== fontUrl) fontRes = await fetch(altUrl);
      }
      if (!fontRes.ok) throw new Error(`فشل جلب الخط العربي (HTTP ${fontRes.status})`);
      const fontBytes = await fontRes.arrayBuffer();
      customFont = await pdfDoc.embedFont(fontBytes);
      const fontEmbedder = (customFont as unknown as { embedder?: { font?: { layout?: (text: string) => unknown; glyphForCodePoint?: (codePoint: number) => { advanceWidth: number } | null } } }).embedder;
      const fkFont = fontEmbedder?.font;
      if (fkFont && typeof fkFont.glyphForCodePoint === 'function') {
        fkFont.layout = (text: string) => {
          const glyphs = Array.from(text).map((ch) => fkFont.glyphForCodePoint!(ch.codePointAt(0) || 0));
          return {
            glyphs,
            positions: glyphs.map((g: { advanceWidth: number } | null) => ({
              xAdvance: g ? g.advanceWidth : 0,
              yAdvance: 0,
              xOffset: 0,
              yOffset: 0,
            })),
          };
        };
      }
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      throw new Error(`فشل تحميل أو تضمين الخط العربي الرسمي (${fontUrl}): ${errMsg}`);
    }
  }
  const standardFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pageCount = pdfDoc.getPageCount();

  // 4. Validate and fill every configured coordinate.
  for (const field of fields) {
    const pageIndex = field.page - 1;
    if (!Number.isInteger(pageIndex) || pageIndex < 0 || pageIndex >= pageCount) {
      throw new Error(`حقل PDF "${field.id}" يشير إلى صفحة غير موجودة (${field.page} من ${pageCount}).`);
    }
    const page = pdfDoc.getPage(pageIndex);
    const pageWidth = page.getWidth();
    const pageHeight = page.getHeight();
    if (!Number.isFinite(field.x) || !Number.isFinite(field.y) || field.x < 0 || field.y < 0 || field.x >= pageWidth || field.y >= pageHeight) {
      throw new Error(`إحداثيات حقل PDF "${field.id}" تقع خارج حدود الصفحة ${field.page}.`);
    }
    const rawValue = values[field.id];

    // Debug overlay if requested
    if (debug) {
      page.drawCircle({
        x: field.x,
        y: field.y,
        size: 3,
        color: rgb(0.9, 0.2, 0.2),
      });
      page.drawText(field.id, {
        x: field.x + 4,
        y: field.y + 2,
        size: 7,
        font: standardFont,
        color: rgb(0.8, 0.1, 0.1),
      });
    }

    if (rawValue === undefined || rawValue === null || rawValue === '') {
      continue;
    }

    // Handle Checkbox
    if (typeof rawValue === 'boolean') {
      if (rawValue) {
        page.drawText('X', {
          x: field.x,
          y: field.y,
          size: field.size || 12,
          font: standardFont,
          color: field.color ? rgb(field.color.r, field.color.g, field.color.b) : rgb(0.05, 0.15, 0.35),
        });
      }
      continue;
    }

    // Format text representation
    let formattedText = String(rawValue);
    if (field.format === 'currency' && typeof rawValue === 'number') {
      // Clean numeric formatting for official tax columns without appending mixed text or non-WinAnsi spaces
      formattedText = Math.round(rawValue).toLocaleString('fr-DZ').replace(/[\u202F\u00A0]/g, ' ');
    } else if (field.format === 'percent' && typeof rawValue === 'number') {
      formattedText = `${rawValue} %`;
    }

    if (field.format === 'date') {
      const isoDate = formattedText.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (isoDate) formattedText = `${isoDate[3]}/${isoDate[2]}/${isoDate[1]}`;
    }
    const isArabic = hasArabic(formattedText);
    if (isArabic && !customFont) throw new Error(`تعذر تجهيز الخط العربي للحقل "${field.id}".`);
    const activeFont = isArabic ? customFont! : standardFont;
    const initialFontSize = field.size || 10;
    const fontColor = field.color
      ? rgb(field.color.r, field.color.g, field.color.b)
      : rgb(0.05, 0.15, 0.35); // dark navy/slate for formal print

    const rawTextToDraw = shapeArabicForPdf(formattedText);

    // Fit text within box bounds
    const { fontSize, textWidth, fittedText, fits } = fitTextInBox(
      activeFont,
      rawTextToDraw,
      initialFontSize,
      field.maxWidth
    );
    if (!fits) throw new Error(`النص في الحقل "${field.id}" أطول من المساحة المتاحة. لم يتم اقتطاعه؛ اختصره أو راجع مساحة الخانة.`);

    // Handle text alignment
    let drawX = field.x;
    if (field.align === 'right' || (isArabic && field.align !== 'left')) {
      if (field.maxWidth && field.maxWidth > 0) {
        drawX = field.x + field.maxWidth - textWidth;
      }
    } else if (field.align === 'center') {
      if (field.maxWidth && field.maxWidth > 0) {
        drawX = field.x + (field.maxWidth - textWidth) / 2;
      } else {
        drawX = field.x - textWidth / 2;
      }
    }

    try {
      page.drawText(fittedText, {
        x: drawX,
        y: field.y,
        size: fontSize,
        font: activeFont,
        color: fontColor,
      });
    } catch (err) {
      throw new Error(`تعذر رسم النص في حقل PDF "${field.id}": ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  // 5. Serialize filled PDF
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

/**
 * Triggers an immediate browser download of the filled PDF
 */
export function downloadPdfBytes(bytes: Uint8Array, fileName: string): void {
  const blob = new Blob([bytes as BlobPart], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}
