"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import {
  addNAEProjectCode,
  NAE_PROJECT_DRAFT_STORAGE_KEY,
  parseNAEProjectDraft,
} from "@/lib/nae/project-draft";

export default function NAEAddToProjectButton({ code, lang }: { code: string; lang: "ar" | "fr" }) {
  const [message, setMessage] = useState("");

  function add() {
    try {
      const current = parseNAEProjectDraft(
        window.localStorage.getItem(NAE_PROJECT_DRAFT_STORAGE_KEY),
      );
      const next = addNAEProjectCode(current, code);
      window.localStorage.setItem(NAE_PROJECT_DRAFT_STORAGE_KEY, JSON.stringify(next));
      setMessage(
        lang === "ar"
          ? "أُضيف النشاط إلى قائمة المشروع المحفوظة على هذا الجهاز."
          : "Activité ajoutée à la liste du projet sur cet appareil.",
      );
    } catch {
      setMessage(
        lang === "ar"
          ? "تعذر الحفظ محلياً في المتصفح."
          : "Impossible d’enregistrer localement dans le navigateur.",
      );
    }
  }

  const btnAriaLabel = lang === "ar" ? `إضافة النشاط ${code} إلى قائمة المشروع` : `Ajouter l'activité ${code} au projet`;

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={add}
        aria-label={btnAriaLabel}
        className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-emerald-800 bg-emerald-50/50 px-3.5 py-2 text-xs font-semibold text-emerald-950 hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
      >
        <Plus className="h-4 w-4 text-emerald-800" aria-hidden="true" />
        <span>{lang === "ar" ? "إضافة إلى قائمة المشروع" : "Ajouter au projet"}</span>
      </button>
      {message && (
        <p role="status" aria-live="polite" className="mt-2 text-xs leading-5 text-gray-700">
          {message}{" "}
          <a
            href={lang === "ar" ? "/nae" : "/fr/nae"}
            className="font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
          >
            {lang === "ar" ? "فتح قائمة المشروع" : "Ouvrir le projet"}
          </a>
        </p>
      )}
    </div>
  );
}
