"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

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

  const copyLabel = lang === "ar" ? `نسخ رمز النشاط ${code}` : `Copier le code d'activité ${code}`;

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={copyCode}
        aria-label={copyLabel}
        className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-gray-300 px-3.5 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
      >
        <Copy className="h-4 w-4 text-gray-600" aria-hidden="true" />
        <span>{lang === "ar" ? "نسخ الرمز" : "Copier le code"}</span>
      </button>
      {message && <p role="status" aria-live="polite" className="w-full text-xs leading-5 text-gray-700">{message}</p>}
    </div>
  );
}
