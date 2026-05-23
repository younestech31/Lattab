'use client';

import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';

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
      brand: 'مكتب الأستاذ لعطب محمد - موثق معتمد بوهران',
      title: `قائمة الوثائق المطلوبة: ${contractType}`,
      date: 'مستخرج بتاريخ',
      note: 'ملاحظة قانونية هامة: للموثق سلطة تقديرية مطلقة وصلاحية كاملة لطلب أي وثيقة إضافية بموجب الأحكام التشريعية والتنظيمية في الجمهورية الجزائرية، وذلك لضمان الموثوقية القانونية وحماية مصالح الأطراف.',
      footer: 'العنوان: حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي، وهران | هاتف: +213 562 29 69 81',
      downloadBtn: 'تحميل PDF / طباعة',
      preparedDocs: `تم تجهيز ${checkedCount} من ${total} وثائق`,
    },
    fr: {
      brand: 'Cabinet de Me Lattab Mohamed - Notaire Agréé à Oran',
      title: `Liste des documents requis : ${contractType}`,
      date: 'Généré le',
      note: 'Note légale importante : Le notaire jouit d\'une compétence d\'appréciation exclusive pour exiger tout document légal complémentaire requis pour assurer la parfaite sécurité des conventions signées en son étude.',
      footer: 'Cité 557 Logements, Bâtiment D24, 1er Étage, N° 768, Akid Lotfi, Oran | Tél : +213 562 29 69 81',
      downloadBtn: 'Télécharger PDF / Imprimer',
      preparedDocs: `${checkedCount} sur ${total} documents préparés`,
    }
  }[lang] || {
    brand: 'مكتب الأستاذ لعطب محمد - موثق معتمد بوهران',
    title: `قائمة الوثائق المطلوبة: ${contractType}`,
    date: 'مستخرج بتاريخ',
    note: 'ملاحظة قانونية هامة: للموثق سلطة تقديرية مطلقة وصلاحية كاملة لطلب أي وثيقة إضافية بموجب الأحكام التشريعية والتنظيمية في الجمهورية الجزائرية، وذلك لضمان الموثوقية القانونية وحماية مصالح الأطراف.',
    footer: 'العنوان: حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي، وهران | هاتف: +213 562 29 69 81',
    downloadBtn: 'تحميل PDF / طباعة',
    preparedDocs: `تم تجهيز ${checkedCount} من ${total} وثائق`,
  };

  const handleExportPDF = async () => {
    setIsGenerating(true);
    try {
      // 1. Dynamic import of jsPDF to prevent Next.js SSR build crashes
      const { jsPDF } = await import('jspdf');

      // 2. Create high-resolution white A4 canvas in memory
      const canvas = document.createElement('canvas');
      canvas.width = 1240;
      canvas.height = 1754; // A4 Form Factor ratio
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not request Canvas2D execution model context');

      // Clear layout with pure white
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 3. Draw dual official emerald & gold border frame (compliant with Notarial institutional styling)
      ctx.strokeStyle = '#059669'; // Emerald notary green
      ctx.lineWidth = 6;
      ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

      ctx.strokeStyle = '#d97706'; // Notary public gold/amber accent
      ctx.lineWidth = 2;
      ctx.strokeRect(41, 41, canvas.width - 82, canvas.height - 82);

      // Setup typography fallback families for beautiful browser native rendering
      const titleFont = isAr 
        ? 'bold 30px "Cairo", "IBM Plex Sans Arabic", "Noto Naskh Arabic", Arial, sans-serif'
        : 'bold 26px "Georgia", "Times New Roman", serif';
      const bodyFont = isAr
        ? '500 21px "Cairo", "IBM Plex Sans Arabic", "Noto Sans Arabic", Arial, sans-serif'
        : '19px "Helvetica Neue", Helvetica, Arial, sans-serif';
      const headingFont = isAr
        ? 'bold 23px "Cairo", "IBM Plex Sans Arabic", "Noto Sans Arabic", Arial, sans-serif'
        : 'bold 20px "Georgia", "Times New Roman", serif';
      const smallFont = isAr
        ? '15px "Cairo", "IBM Plex Sans Arabic", sans-serif'
        : '14px Arial, sans-serif';

      // 4. Draw Official Header layout
      if (isAr) {
        ctx.fillStyle = '#111827';
        ctx.textAlign = 'right';
        ctx.direction = 'rtl';

        ctx.font = 'bold 26px "Noto Naskh Arabic", "Cairo", "IBM Plex Sans Arabic", Arial, sans-serif';
        ctx.fillText('الجمهورية الجزائرية الديمقراطية الشعبية', canvas.width - 90, 105);

        ctx.font = '21px "Cairo", "IBM Plex Sans Arabic", sans-serif';
        ctx.fillText('وزارة العدل', canvas.width - 90, 150);

        ctx.font = 'bold 23px "Cairo", "IBM Plex Sans Arabic", sans-serif';
        ctx.fillStyle = '#0f766e'; // Professional Notary Teal
        ctx.fillText('مكتب الأستاذ لعطب محمد - موثق معتمد', canvas.width - 90, 195);

        ctx.font = '19px "Cairo", "IBM Plex Sans Arabic", sans-serif';
        ctx.fillStyle = '#4b5563';
        ctx.fillText('حي العقيد لطفي، وهران - محلف لدى المجلس القضائي', canvas.width - 90, 235);
      } else {
        ctx.fillStyle = '#111827';
        ctx.textAlign = 'left';
        ctx.direction = 'ltr';

        ctx.font = 'bold 20px "Georgia", serif';
        ctx.fillText('RÉPUBLIQUE ALGÉRIENNE DÉMOCRATIQUE ET POPULAIRE', 90, 105);

        ctx.font = '18px "Georgia", serif';
        ctx.fillText('MINISTÈRE DE LA JUSTICE', 90, 140);

        ctx.font = 'bold 22px "Georgia", serif';
        ctx.fillStyle = '#0f766e'; // Professional Notary Teal
        ctx.fillText('ÉTUDE DE ME LATTAB MOHAMED', 90, 175);

        ctx.font = '16px "Georgia", serif';
        ctx.fillStyle = '#4b5563';
        ctx.fillText('Notaire Public Agréé près la Cour d\'Oran', 90, 210);
      }

      // Draw elegant decorative circular stamp seal opposite to text flow
      const sealX = isAr ? 210 : canvas.width - 210;
      const sealY = 168;

      ctx.strokeStyle = '#059669';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 70, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#059669';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 63, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#059669';
      ctx.font = isAr ? 'bold 12px "Cairo", sans-serif' : 'bold 11px Arial, sans-serif';
      ctx.textAlign = 'center';

      if (isAr) {
        ctx.fillText('الأستاذ لعطب محمد', sealX, sealY - 15);
        ctx.fillText('موثق معتمد لدى المحاكم', sealX, sealY + 10);
        ctx.fillText('ولاية وهران', sealX, sealY + 35);
      } else {
        ctx.fillText('Me LATTAB MOHAMED', sealX, sealY - 15);
        ctx.fillText('NOTAIRE PUBLIC AGRÉÉ', sealX, sealY + 10);
        ctx.fillText('ORAN, ALGÉRIE', sealX, sealY + 32);
      }

      // Horizontal separator rule
      ctx.strokeStyle = '#059669';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(80, 285);
      ctx.lineTo(canvas.width - 80, 285);
      ctx.stroke();

      // Centered Title Box
      const pX = 80;
      const pY = 325;
      const pW = canvas.width - 160;
      const pH = 110;
      ctx.fillStyle = '#f0fdf4'; // Soft light green
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(pX, pY, pW, pH, 12);
      } else {
        ctx.rect(pX, pY, pW, pH);
      }
      ctx.fill();
      ctx.strokeStyle = '#bbf7d0';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Title Text inside box
      ctx.textAlign = 'center';
      ctx.fillStyle = '#065f46'; // Emerald deep forest
      ctx.font = titleFont;
      const titleString = isAr 
        ? `قائمة المستندات والوثائق لـ: ${contractType}`
        : `Liste des pièces requises pour : ${contractType}`;
      ctx.fillText(titleString, canvas.width / 2, pY + 68);

      // Metadata section
      const metaY = 490;
      ctx.fillStyle = '#374151'; // Charcoal
      ctx.font = headingFont;

      const dateTextValue = new Date().toLocaleDateString(isAr ? 'ar-DZ' : 'fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const generatedDateLine = isAr ? `تاريخ استخراج الوثيقة: ${dateTextValue}` : `Document édité le : ${dateTextValue}`;
      const statusLine = isAr 
        ? `الحالة الحالية: تم تجهيز ${checkedCount} من إجمالي ${total} وثائق مطلوبة`
        : `Statut : ${checkedCount} sur ${total} documents préparés`;

      if (isAr) {
        ctx.textAlign = 'right';
        ctx.direction = 'rtl';
        ctx.fillText(generatedDateLine, canvas.width - 90, metaY);
        ctx.fillText(statusLine, canvas.width - 90, metaY + 45);
      } else {
        ctx.textAlign = 'left';
        ctx.direction = 'ltr';
        ctx.fillText(generatedDateLine, 90, metaY);
        ctx.fillText(statusLine, 90, metaY + 45);
      }

      // Draw matching progress bar on Canvas sheet
      const barX = 90;
      const barY = metaY + 80;
      const barW = canvas.width - 180;
      const barH = 14;

      // Track
      ctx.fillStyle = '#f3f4f6';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(barX, barY, barW, barH, 7);
      } else {
        ctx.rect(barX, barY, barW, barH);
      }
      ctx.fill();

      // Progress color fill
      const progressWidth = (checkedCount / total) * barW;
      if (progressWidth > 0) {
        ctx.fillStyle = '#059669';
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(barX, barY, progressWidth, barH, 7);
        } else {
          ctx.rect(barX, barY, progressWidth, barH);
        }
        ctx.fill();
      }

      // Divider line before documents start
      let startListY = metaY + 160;
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(90, startListY - 25);
      ctx.lineTo(canvas.width - 90, startListY - 25);
      ctx.stroke();

      // Wrapped string writing logic
      const drawWrappedItemText = (text: string, x: number, y: number, maxLength: number, isChecked: boolean) => {
        ctx.font = bodyFont;
        const words = text.split(' ');
        let currentLine = '';
        const wrappedLines = [];

        for (let i = 0; i < words.length; i++) {
          const testLine = currentLine + words[i] + ' ';
          const measure = ctx.measureText(testLine);
          if (measure.width > maxLength && i > 0) {
            wrappedLines.push(currentLine.trim());
            currentLine = words[i] + ' ';
          } else {
            currentLine = testLine;
          }
        }
        wrappedLines.push(currentLine.trim());

        let lineY = y + 5;
        wrappedLines.forEach((lineText) => {
          ctx.fillStyle = isChecked ? '#9ca3af' : '#1f2937';
          if (isAr) {
            ctx.textAlign = 'right';
            ctx.direction = 'rtl';
            ctx.fillText(lineText, x, lineY);
            
            if (isChecked) {
              const textWidth = ctx.measureText(lineText).width;
              ctx.strokeStyle = '#9ca3af';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(x, lineY - 8);
              ctx.lineTo(x - textWidth, lineY - 8);
              ctx.stroke();
            }
          } else {
            ctx.textAlign = 'left';
            ctx.direction = 'ltr';
            ctx.fillText(lineText, x, lineY);

            if (isChecked) {
              const textWidth = ctx.measureText(lineText).width;
              ctx.strokeStyle = '#9ca3af';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(x, lineY - 7);
              ctx.lineTo(x + textWidth, lineY - 7);
              ctx.stroke();
            }
          }
          lineY += 32; // Multi-line line spacing
        });

        return lineY - y;
      };

      // Draw each document checkbox item
      documents.forEach((doc, idx) => {
        const isChecked = !!checkedState[idx];
        const boxSize = 28;
        const boxX = isAr ? canvas.width - (90 + boxSize) : 90;
        const boxY = startListY - 16;

        // Draw checkbox card shape
        ctx.strokeStyle = isChecked ? '#059669' : '#cbd5e1';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(boxX, boxY, boxSize, boxSize, 6);
        } else {
          ctx.rect(boxX, boxY, boxSize, boxSize);
        }
        ctx.stroke();

        if (isChecked) {
          ctx.fillStyle = '#059669';
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(boxX, boxY, boxSize, boxSize, 6);
          } else {
            ctx.rect(boxX, boxY, boxSize, boxSize);
          }
          ctx.fill();

          // Standard vector white checkmark
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(boxX + 6, boxY + boxSize / 2);
          ctx.lineTo(boxX + boxSize / 2 - 1, boxY + boxSize - 8);
          ctx.lineTo(boxX + boxSize - 6, boxY + 7);
          ctx.stroke();
        }

        // Draw paragraph text
        const textX = isAr ? canvas.width - (110 + boxSize + 15) : 90 + boxSize + 20;
        const maxWidth = canvas.width - 240;
        const spacingConsumed = drawWrappedItemText(doc, textX, startListY - 15, maxWidth, isChecked);

        startListY += Math.max(65, spacingConsumed + 20);
      });

      // Bottom Institutional Disclaimer Box
      const lawY = Math.max(canvas.height - 350, startListY + 40);

      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(90, lawY - 15);
      ctx.lineTo(canvas.width - 90, lawY - 15);
      ctx.stroke();

      ctx.font = 'italic 18px "Cairo", sans-serif';
      ctx.fillStyle = '#6b7280';
      
      if (isAr) {
        ctx.textAlign = 'right';
        ctx.direction = 'rtl';
        ctx.fillText('تذكير قانوني هام لإنجاز العقود:', canvas.width - 90, lawY + 20);
        
        ctx.font = '16px "Cairo", sans-serif';
        ctx.fillText('للموثق بمقتضى القانون 06-02 المنظم للمهنة سلطة تقديرية مطلقة لمراجعة الوثائق وطلب أي مستند إضافي', canvas.width - 90, lawY + 50);
        ctx.fillText('يراه لازماً وضرورياً لضمان الصحة المطلقة للعقد المبرم وتأمين المعاملة القانونية وصيانة حقوق جميع الأطراف.', canvas.width - 90, lawY + 80);
      } else {
        ctx.textAlign = 'left';
        ctx.direction = 'ltr';
        ctx.fillText('Rappel légal d\'importance pour l\'édition des actes :', 90, lawY + 20);

        ctx.font = '15px Arial, sans-serif';
        ctx.fillText('Conformément à la Loi 06-02 portant Code du Notariat, le notaire exerce une autorité d\'interprétation', 90, lawY + 50);
        ctx.fillText('légale souveraine pour réclamer tout document complémentaire garantissant la régularité absolue de l\'acte.', 90, lawY + 75);
      }

      // Elegant official address band footer
      const footerY = canvas.height - 110;

      ctx.fillStyle = '#f9fafb';
      ctx.fillRect(48, canvas.height - 130, canvas.width - 96, 80);

      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;
      ctx.strokeRect(48, canvas.height - 130, canvas.width - 96, 80);

      ctx.font = smallFont;
      ctx.fillStyle = '#4b5563';
      ctx.textAlign = 'center';

      ctx.fillText(t.footer, canvas.width / 2, footerY - 5);
      ctx.fillText(
        isAr 
          ? 'المكتب الرسمي للتوثيق الأستاذ لعطب محمد بوهران | مستند إعلامي مصمم إلكترونياً https://lattab.vercel.app' 
          : 'Étude Notariale de Me Lattab Mohamed Oran | Fiche d\'information numérique https://lattab.vercel.app', 
        canvas.width / 2, 
        footerY + 25
      );

      // Convert to high resolution JPG format
      const imageURI = canvas.toDataURL('image/jpeg', 0.96);

      // Generate the PDF as A4 size
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Render image to cover the entire layout page perfectly
      pdf.addImage(imageURI, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

      // Trigger automatic local browser file transfer download
      const documentFileName = `Notaire_Lattab_Documents_${contractType.replace(/\s+/g, '_')}.pdf`;
      pdf.save(documentFileName);
    } catch (err) {
      console.error('High fidelity canvas PDF generation encountered a warning, falling back to window.print()', err);
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="printable-checklist-container space-y-4" dir={isAr ? 'rtl' : 'ltr'}>
      {/* ⚠️ Law 06-02 Compliance — Clean institutional document printing, no self-praise or marketing */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page {
            margin: 15mm 20mm !important;
            size: auto;
          }
          
          html, body {
            background-color: #ffffff !important;
            color: #111827 !important;
            font-family: Arial, sans-serif !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Hide everything on the page including other Accordion items and general sections */
          body * {
            visibility: hidden !important;
            box-shadow: none !important;
          }

          /* Force show only this checklist and its descendants */
          .printable-checklist-container,
          .printable-checklist-container * {
            visibility: visible !important;
          }

          /* Elevate the container to occupy full printable area cleanly */
          .printable-checklist-container {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
            background: white !important;
            direction: ${isAr ? 'rtl' : 'ltr'} !important;
            text-align: ${isAr ? 'right' : 'left'} !important;
          }

          .print-title {
            font-size: 18pt !important;
            font-weight: bold !important;
            color: #059669 !important;
          }

          .print-subtitle {
            font-size: 10pt !important;
            color: #4b5563 !important;
          }

          .print-item {
            font-size: 11pt !important;
            color: #111827 !important;
            padding: 8px 0 !important;
            border-bottom: 1px solid #e5e7eb !important;
            display: flex !important;
            align-items: center !important;
            gap: 12px !important;
            page-break-inside: avoid !important;
          }

          /* Print hidden classes overrides */
          .print\\:hidden, 
          button, 
          header, 
          footer, 
          nav, 
          aside, 
          .no-print,
          [role="progressbar"] {
            display: none !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
            visibility: hidden !important;
          }

          /* Beautiful custom checkboxes for printing output */
          .print-checkbox-box {
            width: 18px !important;
            height: 18px !important;
            border: 2px solid #059669 !important;
            border-radius: 4px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }

          .print-checkbox-checked {
            background-color: #059669 !important;
          }

          .print-checkbox-check-icon {
            color: #ffffff !important;
            width: 10px !important;
            height: 10px !important;
          }

          .print-header {
            display: block !important;
            border-bottom: 2px solid #059669 !important;
            padding-bottom: 12px !important;
            margin-bottom: 20px !important;
          }

          .print-footer {
            display: block !important;
            border-top: 1px solid #e5e7eb !important;
            padding-top: 12px !important;
            margin-top: 30px !important;
            text-align: center !important;
            font-size: 8pt !important;
            color: #4b5563 !important;
          }
        }
      `}} />

      {/* Print-Only Header */}
      <div className="hidden print-header" dir={isAr ? 'rtl' : 'ltr'}>
        <div className="print-subtitle font-medium">{t.brand}</div>
        <h1 className="print-title mt-1 font-bold">{t.title}</h1>
        <div className="text-xs text-gray-500 mt-1">
          {t.date}: {new Date().toLocaleDateString(isAr ? 'ar-DZ' : 'fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>

      {/* On-Screen Progress Bar */}
      <div className="space-y-1 print:hidden">
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

      {/* Checklist (Visible on-screen and fully custom styled on pdf/print) */}
      <ul className="space-y-2.5">
        {documents.map((doc, idx) => {
          const isChecked = !!checkedState[idx];
          return (
            <li key={idx} className="print-item">
              <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg group w-full print:p-0 print:hover:bg-transparent">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleDocument(idx)}
                  className="sr-only"
                  aria-label={isAr ? `تحديد وثيقة ${doc}` : `Sélectionner le document ${doc}`}
                />
                
                {/* Custom modern checkbox box */}
                <div className={`print-checkbox-box relative flex items-center justify-center w-6 h-6 rounded border transition-all shrink-0 ${
                  isChecked 
                    ? 'bg-emerald-600 border-emerald-600 text-white print-checkbox-checked' 
                    : 'border-gray-300 bg-white text-transparent group-hover:border-emerald-500'
                }`}>
                  {isChecked && (
                    <svg className="w-4 h-4 print-checkbox-check-icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                
                <span className={`text-sm select-none transition-colors ${isChecked ? 'line-through text-gray-400 print:text-gray-400' : 'text-gray-700'}`}>
                  {doc}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {/* Print-Only Note */}
      <p className="hidden print:block text-[10px] text-gray-500 italic mt-6 border-t border-gray-100 pt-4" dir={isAr ? 'rtl' : 'ltr'}>
        {t.note}
      </p>

      {/* Print-Only Footer */}
      <footer className="hidden print-footer" dir={isAr ? 'rtl' : 'ltr'}>
        <p className="font-medium">{t.footer}</p>
        <p className="text-[10px] text-gray-400 mt-1">
          {isAr ? 'مستخرج إلكترونياً من الموقع الرسمي لمكتب الموثق - https://lattab.vercel.app' : 'Généré électroniquement depuis le site officiel - https://lattab.vercel.app'}
        </p>
      </footer>

      {/* PDF Export Button (PDF generation) */}
      <button 
        onClick={handleExportPDF}
        disabled={isGenerating}
        className={`mt-4 w-full sm:w-auto border text-sm px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center justify-center gap-2 print:hidden ${
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
            {isAr ? 'جاري توليد تحميل الـ PDF...' : 'Génération du PDF...'}
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
