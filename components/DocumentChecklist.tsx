'use client';

import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';
import { officeTelDigits } from '@/lib/contact/channels';

interface DocumentChecklistProps {
  documents: string[];
  contractType: string;
}

export const DocumentChecklist = ({ documents, contractType }: DocumentChecklistProps) => {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const keyPrefix = `procedures_checklist_v1_${contractType.replace(/\s+/g, '_')}`;

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(keyPrefix);
      if (saved) setCheckedState(JSON.parse(saved));
    } catch (e) {
      console.error('Failed to load checklist', e);
    }
  }, [keyPrefix]);

  const toggleDocument = (index: number) => {
    const key = `${index}`;
    const newState = { ...checkedState, [key]: !checkedState[key] };
    setCheckedState(newState);
    try {
      localStorage.setItem(keyPrefix, JSON.stringify(newState));
    } catch (e) {
      console.error('Failed to save checklist', e);
    }
  };

  if (!mounted) return null;

  const checkedCount = Object.values(checkedState).filter(Boolean).length;
  const total = documents.length;
  const progress = total > 0 ? (checkedCount / total) * 100 : 0;

  const t = {
    ar: {
      title: `قائمة إرشادية بالوثائق المطلوبة: ${contractType}`,
      downloadBtn: 'تحميل PDF',
      preparedDocs: `تم تجهيز ${checkedCount} من ${total} وثائق`,
      generating: 'جاري توليد ملف PDF...',
    },
    fr: {
      title: `Liste indicative des pièces : ${contractType}`,
      downloadBtn: 'Télécharger le PDF',
      preparedDocs: `${checkedCount} sur ${total} documents préparés`,
      generating: 'Génération du PDF...',
    }
  }[lang] || {
    title: `قائمة إرشادية بالوثائق المطلوبة: ${contractType}`,
    downloadBtn: 'تحميل PDF',
    preparedDocs: `تم تجهيز ${checkedCount} من ${total} وثائق`,
    generating: 'جاري توليد ملف PDF...',
  };

  const handleExportPDF = async () => {
    setIsGenerating(true);
    try {
      const { PDFDocument, rgb } = await import('pdf-lib');
      const fontkit = (await import('@pdf-lib/fontkit')).default;
      const { shapeArabicForPdf } = await import('@/lib/forms/textShaper');

      const pdfDoc = await PDFDocument.create();
      pdfDoc.registerFontkit(fontkit);

      const fontRes = await fetch('/fonts/Amiri-Regular.ttf');
      if (!fontRes.ok) throw new Error('Failed to load Amiri font');
      const fontBytes = await fontRes.arrayBuffer();
      const customFont = await pdfDoc.embedFont(fontBytes);

      // Fix layout engine for Arabic presentation forms
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

      const A4_WIDTH = 595.27;
      const A4_HEIGHT = 841.89;
      const margin = 50; // ~18mm margin
      const usableWidth = A4_WIDTH - (margin * 2);

      let page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
      let y = A4_HEIGHT - margin;

      const drawHeader = (isContinuation = false) => {
        const headerText = isAr 
          ? (isContinuation ? 'ديوان التوثيق — الأستاذ لعطب محمد — وهران (تتمة)' : 'ديوان التوثيق — الأستاذ لعطب محمد — وهران')
          : (isContinuation ? 'Office notarial — Maître Lattab Mohamed — Oran (Suite)' : 'Office notarial — Maître Lattab Mohamed — Oran');
        const formattedHeader = isAr ? shapeArabicForPdf(headerText) : headerText;
        page.drawText(formattedHeader, {
          x: isAr ? A4_WIDTH - margin - customFont.widthOfTextAtSize(formattedHeader, 11) : margin,
          y,
          size: 11,
          font: customFont,
          color: rgb(0.02, 0.59, 0.41), // emerald
        });
        y -= 12;
        page.drawLine({
          start: { x: margin, y },
          end: { x: A4_WIDTH - margin, y },
          thickness: 1,
          color: rgb(0.80, 0.84, 0.88),
        });
        y -= 25;
      };

      /**
       * Footer order (user request): full address → phone → website
       * Drawn RTL for Arabic so reading order is correct from the right.
       */
      const drawFooter = () => {
        const tel = `+${officeTelDigits()}`;
        const site = 'https://lattab.vercel.app';
        const footerSize = 8;
        const footerY = margin / 2;
        const sep = '  |  ';

        if (isAr) {
          const addressLogical = 'العنوان: حي 557 مسكن، العقيد لطفي، وهران';
          const addressShaped = shapeArabicForPdf(addressLogical);

          let cursorX = A4_WIDTH - margin;

          const drawRtlSegment = (text: string) => {
            const w = customFont.widthOfTextAtSize(text, footerSize);
            cursorX -= w;
            page.drawText(text, {
              x: cursorX,
              y: footerY,
              size: footerSize,
              font: customFont,
              color: rgb(0.40, 0.45, 0.52),
            });
          };

          // Draw from right to left: address → phone → site
          drawRtlSegment(addressShaped);
          drawRtlSegment(sep);
          drawRtlSegment(shapeArabicForPdf('هاتف: ') + tel);
          drawRtlSegment(sep);
          drawRtlSegment(site);
        } else {
          // LTR: address → phone → website
          const footerText = `Cité 557 Logements, Akid Lotfi, Oran | Tél : ${tel} | ${site}`;
          page.drawText(footerText, {
            x: (A4_WIDTH - customFont.widthOfTextAtSize(footerText, footerSize)) / 2,
            y: footerY,
            size: footerSize,
            font: customFont,
            color: rgb(0.40, 0.45, 0.52),
          });
        }
      };

      drawHeader();

      // Title
      const titleText = isAr 
        ? `قائمة إرشادية بالوثائق المطلوبة — ${contractType}` 
        : `Liste indicative des pièces — ${contractType}`;
      const formattedTitle = isAr ? shapeArabicForPdf(titleText) : titleText;
      page.drawText(formattedTitle, {
        x: isAr ? A4_WIDTH - margin - customFont.widthOfTextAtSize(formattedTitle, 13) : margin,
        y,
        size: 13,
        font: customFont,
        color: rgb(0.07, 0.09, 0.15),
      });
      y -= 18;

      // Date & Progress
      const dateStr = new Date().toLocaleDateString(isAr ? 'ar-DZ' : 'fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
      const metaText = isAr 
        ? `التاريخ: ${dateStr}  |  الحالة: تم تجهيز ${checkedCount} من ${total} وثائق` 
        : `Date : ${dateStr}  |  Statut : ${checkedCount} sur ${total} documents préparés`;
      const formattedMeta = isAr ? shapeArabicForPdf(metaText) : metaText;
      page.drawText(formattedMeta, {
        x: isAr ? A4_WIDTH - margin - customFont.widthOfTextAtSize(formattedMeta, 10) : margin,
        y,
        size: 10,
        font: customFont,
        color: rgb(0.35, 0.39, 0.45),
      });
      y -= 25;

      // Helper for wrapping text
      const wrapLines = (text: string, fontSize: number, maxW: number) => {
        const words = text.split(' ');
        const lines: string[] = [];
        let currentLine = '';
        for (const word of words) {
          const test = currentLine ? `${currentLine} ${word}` : word;
          const shapedTest = isAr ? shapeArabicForPdf(test) : test;
          if (customFont.widthOfTextAtSize(shapedTest, fontSize) > maxW && currentLine) {
            lines.push(currentLine);
            currentLine = word;
          } else {
            currentLine = test;
          }
        }
        if (currentLine) lines.push(currentLine);
        return lines;
      };

      // Draw items
      for (let idx = 0; idx < documents.length; idx++) {
        const doc = documents[idx];
        const isChecked = !!checkedState[idx];
        const itemText = `${idx + 1}. ${doc}`;
        const lines = wrapLines(itemText, 10, usableWidth - 30);

        const itemHeight = lines.length * 15 + 8;
        if (y - itemHeight < margin + 80) {
          drawFooter();
          page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
          y = A4_HEIGHT - margin;
          drawHeader(true);
        }

        // Checkbox box
        const boxSize = 11;
        const boxX = isAr ? A4_WIDTH - margin - boxSize : margin;
        const boxY = y - 1;

        page.drawRectangle({
          x: boxX,
          y: boxY,
          width: boxSize,
          height: boxSize,
          borderColor: rgb(0.02, 0.59, 0.41),
          borderWidth: 1,
          color: isChecked ? rgb(0.02, 0.59, 0.41) : rgb(1, 1, 1),
        });

        if (isChecked) {
          page.drawLine({
            start: { x: boxX + 2, y: boxY + 6 },
            end: { x: boxX + 4, y: boxY + 3 },
            thickness: 1.5,
            color: rgb(1, 1, 1),
          });
          page.drawLine({
            start: { x: boxX + 4, y: boxY + 3 },
            end: { x: boxX + 9, y: boxY + 8 },
            thickness: 1.5,
            color: rgb(1, 1, 1),
          });
        }

        const textX = isAr ? boxX - 10 : boxX + boxSize + 10;

        for (const line of lines) {
          const shapedLine = isAr ? shapeArabicForPdf(line) : line;
          page.drawText(shapedLine, {
            x: isAr ? textX - customFont.widthOfTextAtSize(shapedLine, 10) : textX,
            y,
            size: 10,
            font: customFont,
            color: isChecked ? rgb(0.6, 0.64, 0.7) : rgb(0.1, 0.12, 0.16),
          });
          y -= 15;
        }
        y -= 4;
      }

      // Legal Note section
      y -= 10;
      const noteText = isAr 
        ? 'ملاحظة: هذه قائمة إرشادية غير حصرية. قد تُطلب وثائق إضافية بحسب طبيعة العقد ووضعية الأطراف والعقار، ووفقاً للقانون 06-02 والنصوص السارية.' 
        : 'Note : Liste indicative et non exhaustive. Des pièces complémentaires peuvent être demandées selon la nature de l’acte et la situation des parties ou du bien, conformément à la loi 06-02 et aux textes en vigueur.';
      
      const noteLines = wrapLines(noteText, 8.5, usableWidth - 20);
      const noteHeight = noteLines.length * 13 + 24;

      if (y - noteHeight < margin + 20) {
        drawFooter();
        page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
        y = A4_HEIGHT - margin;
        drawHeader(true);
      }

      // Draw light background box for note
      page.drawRectangle({
        x: margin,
        y: y - noteHeight + 10,
        width: usableWidth,
        height: noteHeight,
        color: rgb(0.95, 0.98, 0.96),
        borderColor: rgb(0.73, 0.93, 0.81),
        borderWidth: 1,
      });

      y -= 5;
      for (const line of noteLines) {
        const shapedNoteLine = isAr ? shapeArabicForPdf(line) : line;
        page.drawText(shapedNoteLine, {
          x: isAr ? A4_WIDTH - margin - 10 - customFont.widthOfTextAtSize(shapedNoteLine, 8.5) : margin + 10,
          y,
          size: 8.5,
          font: customFont,
          color: rgb(0.20, 0.40, 0.30),
        });
        y -= 13;
      }

      drawFooter();

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const safeContractName = contractType.replace(/\s+/g, '_');
      const fileDateStr = new Date().toISOString().split('T')[0];
      link.download = isAr 
        ? `قائمة_وثائق_${safeContractName}_${fileDateStr}.pdf` 
        : `Liste_pieces_${safeContractName}_${fileDateStr}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4" dir={isAr ? 'rtl' : 'ltr'}>
      {/* On-Screen Progress Bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-500 font-bold">
            <span>{t.preparedDocs}</span>
            <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={checkedCount}
            aria-valuemin={0}
            aria-valuemax={total}
          />
        </div>
      </div>

      {/* Checklist items */}
      <ul className="space-y-2.5">
        {documents.map((doc, idx) => {
          const isChecked = !!checkedState[idx];
          return (
            <li key={idx}>
              <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg group w-full">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleDocument(idx)}
                  className="sr-only"
                  aria-label={isAr ? `تحديد وثيقة ${doc}` : `Sélectionner le document ${doc}`}
                />
                
                <div className={`relative flex items-center justify-center w-6 h-6 rounded border transition-all shrink-0 ${
                  isChecked 
                    ? 'bg-emerald-600 border-emerald-600 text-white' 
                    : 'border-gray-300 bg-white text-transparent group-hover:border-emerald-500'
                }`}>
                  {isChecked && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                
                <span className={`text-sm select-none transition-colors ${isChecked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {doc}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {/* PDF Export Button */}
      <button 
        onClick={handleExportPDF}
        disabled={isGenerating}
        className={`mt-4 w-full sm:w-auto border text-sm px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
          isGenerating 
            ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed' 
            : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
        }`}
      >
        {isGenerating ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {t.generating}
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            {t.downloadBtn}
          </>
        )}
      </button>
    </div>
  );
};
