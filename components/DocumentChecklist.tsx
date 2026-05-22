'use client';

import React, { useState, useEffect } from 'react';

interface DocumentChecklistProps {
  documents: string[];
  contractType: string;
}

export const DocumentChecklist = ({ documents, contractType }: DocumentChecklistProps) => {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  const keyPrefix = `procedures_checklist_v1_${contractType.replace(/\s+/g, '_')}`;

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(keyPrefix);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          setCheckedState(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load checklist', e);
    }
  }, [keyPrefix]);

  const toggleDocument = (index: number) => {
    const key = `${index}`;
    setCheckedState(prev => {
      const newState = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem(keyPrefix, JSON.stringify(newState));
      } catch (e) {
        console.error('Failed to save checklist', e);
      }
      return newState;
    });
  };

  if (!mounted) return null;

  const total = documents && documents.length > 0 ? documents.length : 0;
  const checkedCount = Object.values(checkedState).filter(Boolean).length;
  const progress = total > 0 ? (checkedCount / total) * 100 : 0;

  const handlePrint = () => {
    const printContent = `
      <html dir="rtl" lang="ar">
        <head>
          <title>الوثائق المطلوبة - ${contractType}</title>
          <style>
            body { 
              font-family: 'Cairo', Arial, sans-serif; 
              padding: 40px;
              color: #111827;
              line-height: 1.6;
            }
            .header {
              border-bottom: 2px solid #059669;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .brand {
              font-size: 14px;
              color: #6b7280;
              margin-bottom: 5px;
            }
            h1 {
              color: #059669;
              font-size: 24px;
              margin: 0;
            }
            ul {
              list-style-type: none;
              padding: 0;
            }
            li {
              padding: 12px 0;
              border-bottom: 1px solid #f3f4f6;
              font-size: 16px;
              display: flex;
              align-items: center;
              gap: 12px;
            }
            .checkbox {
              width: 20px;
              height: 20px;
              border: 2px solid #d1d5db;
              border-radius: 4px;
              display: inline-block;
            }
            .checked .checkbox {
              background-color: #059669;
              border-color: #059669;
              position: relative;
            }
            .checked .checkbox::after {
              content: '';
              position: absolute;
              left: 6px;
              top: 2px;
              width: 5px;
              height: 10px;
              border: solid white;
              border-width: 0 2px 2px 0;
              transform: rotate(45deg);
            }
            .checked-text {
              text-decoration: line-through;
              color: #9ca3af;
            }
            @media print {
              body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="brand">مكتب الأستاذ لعطب محمد - موثق معتمد بوهران</div>
            <h1>الوثائق المطلوبة: ${contractType}</h1>
          </div>
          <ul>
            ${documents.map((doc, idx) => `
              <li class="${checkedState[idx] ? 'checked' : ''}">
                <span class="checkbox"></span>
                <span class="${checkedState[idx] ? 'checked-text' : ''}">${doc}</span>
              </li>
            `).join('')}
          </ul>
          <script>
            window.onload = () => {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    iframe.contentDocument?.open();
    iframe.contentDocument?.write(printContent);
    iframe.contentDocument?.close();
    
    // Cleanup iframe after a delay to allow print dialog to finish
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 5000);
  };

  return (
    <div className="space-y-4" dir="rtl">
      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-500 font-bold">
            <span>تم تجهيز {checkedCount} من {total} وثائق</span>
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

      {/* Checklist */}
      <ul className="space-y-3 print-only-list">
        {documents.map((doc, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg group w-full">
              <input
                type="checkbox"
                checked={!!checkedState[idx]}
                onChange={() => toggleDocument(idx)}
                className="w-6 h-6 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                aria-label={`تحديد وثيقة ${doc}`}
              />
              <span className={`text-sm ${checkedState[idx] ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                {doc}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {/* PDF Export Button (Print) */}
      <button 
        onClick={handlePrint}
        className="mt-4 border border-emerald-600 text-emerald-600 text-sm px-4 py-2 rounded-lg font-bold hover:bg-emerald-50 transition-all print:hidden"
      >
        تحميل PDF / طباعة
      </button>
    </div>
  );
};
