import { PDFDocument, rgb, StandardFonts, PDFFont } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { FillPdfOptions } from './types';
import { shapeArabicForPdf, hasArabic } from './textShaper';

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
  pdfDoc.registerFontkit(fontkit);

  // 3. Load & embed required Arabic custom font (Amiri-Regular)
  let customFont: PDFFont;
  try {
    const fontRes = await fetch(fontUrl);
    if (!fontRes.ok) {
      throw new Error(`فشل جلب الخط العربي (HTTP ${fontRes.status})`);
    }
    const fontBytes = await fontRes.arrayBuffer();
    customFont = await pdfDoc.embedFont(fontBytes);
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    throw new Error(`فشل تحميل أو تضمين الخط العربي الرسمي (${fontUrl}): ${errMsg}`);
  }

  // Standard fallback font for ASCII / numbers / debug
  const standardFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pageCount = pdfDoc.getPageCount();

  // 4. Fill fields onto coordinates
  for (const field of fields) {
    const pageIndex = field.page - 1;
    if (pageIndex < 0 || pageIndex >= pageCount) {
      console.warn(`Field ${field.id} has invalid page ${field.page}. Max pages is ${pageCount}.`);
      continue;
    }

    const page = pdfDoc.getPage(pageIndex);
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
      formattedText = Math.round(rawValue).toLocaleString('fr-DZ') + ' دج';
    } else if (field.format === 'percent' && typeof rawValue === 'number') {
      formattedText = `${rawValue} %`;
    }

    const isArabic = hasArabic(formattedText);
    const activeFont = isArabic ? customFont : (customFont || standardFont);
    const fontSize = field.size || 10;
    const fontColor = field.color
      ? rgb(field.color.r, field.color.g, field.color.b)
      : rgb(0.05, 0.15, 0.35); // dark navy/slate for formal print

    const printableText = isArabic ? shapeArabicForPdf(formattedText) : formattedText;

    // Handle text alignment
    let drawX = field.x;
    if (field.align === 'right' || (isArabic && field.align !== 'left')) {
      try {
        const textWidth = activeFont.widthOfTextAtSize(printableText, fontSize);
        if (field.maxWidth && field.maxWidth > textWidth) {
          drawX = field.x + (field.maxWidth - textWidth);
        }
      } catch {
        // Fallback to direct x
      }
    } else if (field.align === 'center') {
      try {
        const textWidth = activeFont.widthOfTextAtSize(printableText, fontSize);
        drawX = field.x - textWidth / 2;
      } catch {
        // Fallback to direct x
      }
    }

    try {
      page.drawText(printableText, {
        x: drawX,
        y: field.y,
        size: fontSize,
        font: activeFont,
        color: fontColor,
      });
    } catch (err) {
      if (isArabic) {
        throw new Error(`خطأ في كتابة النص العربي للحقل ${field.id}: ${err instanceof Error ? err.message : String(err)}`);
      }
      // Non-Arabic fallback
      try {
        page.drawText(String(rawValue), {
          x: drawX,
          y: field.y,
          size: fontSize,
          font: standardFont,
          color: fontColor,
        });
      } catch {
        // Ignore non-fatal drawing error on standard fallback
      }
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
