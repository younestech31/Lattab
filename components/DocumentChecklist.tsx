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
  const progress = (checkedCount / total) * 100;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4 printable-section" dir="rtl">
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

      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          .printable-section, .printable-section * { visibility: visible; }
          .printable-section { position: absolute; left: 0; top: 0; width: 100%; padding: 20px; }
          .print:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
};
