"use client";

import { useState } from "react";

const STORAGE_KEY = "lattab.nae.compare.v1";

function readCodes(): string[] {
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(value)) return [];
    return [...new Set(value.filter((item): item is string => typeof item === "string" && /^[0-9]{6}$/.test(item)))].slice(0, 3);
  } catch {
    return [];
  }
}

export default function NAEActivityActions({ code, lang }: { code: string; lang: "ar" | "fr" }) {
  const [message, setMessage] = useState("");

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setMessage(lang === "ar" ? "تم نسخ الرمز." : "Code copié.");
    } catch {
      setMessage(lang === "ar"
        ? "تعذر النسخ تلقائياً؛ حدد الرمز وانسخه يدوياً."
        : "Copie automatique indisponible ; sélectionnez le code pour le copier.");
    }
  }

  function addToComparison() {
    const codes = readCodes();
    if (codes.includes(code)) {
      setMessage(lang === "ar" ? "النشاط موجود بالفعل في المقارنة." : "Cette activité figure déjà dans la comparaison.");
      window.location.assign(`/${lang === "fr" ? "fr/" : ""}nae?compare=${codes.join(",")}`);
      return;
    }
    if (codes.length >= 3) {
      setMessage(lang === "ar" ? "الحد الأقصى ثلاثة نشاطات. أزل نشاطاً أولاً من المقارنة." : "Trois activités au maximum. Retirez-en une avant d’en ajouter une autre.");
      return;
    }
    const next = [...codes, code];
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // The explicit URL still carries the selected codes.
    }
    window.location.assign(`/${lang === "fr" ? "fr/" : ""}nae?compare=${next.join(",")}`);
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <button type="button" onClick={copyCode} className="inline-flex min-h-9 items-center rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
        {lang === "ar" ? "نسخ الرمز" : "Copier le code"}
      </button>
      <button type="button" onClick={addToComparison} className="inline-flex min-h-9 items-center rounded-lg border border-emerald-800 px-3 py-2 text-xs font-semibold text-emerald-900 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
        {lang === "ar" ? "إضافة للمقارنة" : "Ajouter à la comparaison"}
      </button>
      <button type="button" onClick={() => window.print()} className="inline-flex min-h-9 items-center rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 print:hidden">
        {lang === "ar" ? "طباعة البطاقة" : "Imprimer la fiche"}
      </button>
      {message && <p role="status" aria-live="polite" className="w-full text-xs leading-5 text-gray-600">{message}</p>}
    </div>
  );
}
