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
      note: 'ملاحظة: الموثق يملك صلاحية طلب أي وثيقة إضافية لضمان صحة العقد وقانونيته.',
      footer: 'العنوان: حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي، وهران | هاتف: +213 562 29 69 81',
      downloadBtn: 'تحميل PDF / طباعة',
      preparedDocs: `تم تجهيز ${checkedCount} من ${total} وثائق`,
    },
    fr: {
      brand: 'Cabinet de Me Lattab Mohamed - Notaire Agréé à Oran',
      title: `Liste des documents requis : ${contractType}`,
      date: 'Généré le',
      note: 'Note : Le notaire a le pouvoir de demander tout document supplémentaire pour garantir la validité de l\'acte.',
      footer: 'Cité 557 Logements, Bâtiment D24, 1er Étage, N° 768, Akid Lotfi, Oran | Tél : +213 562 29 69 81',
      downloadBtn: 'Télécharger PDF / Imprimer',
      preparedDocs: `${checkedCount} sur ${total} documents préparés`,
    }
  }[lang] || {
    brand: 'مكتب الأستاذ لعطب محمد - موثق معتمد بوهران',
    title: `قائمة الوثائق المطلوبة: ${contractType}`,
    date: 'مستخرج بتاريخ',
    note: 'ملاحظة: الموثق يملك صلاحية طلب أي وثيقة إضافية لضمان صحة العقد وقانونيته.',
    footer: 'العنوان: حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768، العقيد لطفي، وهران | هاتف: +213 562 29 69 81',
    downloadBtn: 'تحميل PDF / طباعة',
    preparedDocs: `تم تجهيز ${checkedCount} من ${total} وثائق`,
  };

  const handlePrint = () => {
    window.print();
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

      {/* PDF Export Button (Print) */}
      <button 
        onClick={handlePrint}
        className="mt-4 w-full sm:w-auto border border-emerald-600 text-emerald-600 text-sm px-4 py-2 rounded-lg font-bold hover:bg-emerald-50 transition-all cursor-pointer flex items-center justify-center gap-2 print:hidden"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        {t.downloadBtn}
      </button>
    </div>
  );
};

