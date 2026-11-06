"use client";

import { useState } from "react";

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

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={copyCode}
        className="inline-flex min-h-9 items-center rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
      >
        {lang === "ar" ? "نسخ الرمز" : "Copier le code"}
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex min-h-9 items-center rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 print:hidden"
      >
        {lang === "ar" ? "طباعة البطاقة" : "Imprimer la fiche"}
      </button>
      {message && <p role="status" aria-live="polite" className="w-full text-xs leading-5 text-gray-600">{message}</p>}
    </div>
  );
}
