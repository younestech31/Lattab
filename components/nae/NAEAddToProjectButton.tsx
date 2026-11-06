"use client";

import { useState } from "react";
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

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={add}
        className="inline-flex min-h-9 items-center rounded-lg border border-emerald-800 px-3 py-2 text-xs font-semibold text-emerald-900 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
      >
        {lang === "ar" ? "إضافة إلى قائمة المشروع" : "Ajouter au projet"}
      </button>
      {message && (
        <p role="status" aria-live="polite" className="mt-2 text-xs leading-5 text-gray-600">
          {message}{" "}
          <a
            href={lang === "ar" ? "/nae" : "/fr/nae"}
            className="font-semibold text-emerald-800 underline underline-offset-4"
          >
            {lang === "ar" ? "فتح قائمة المشروع" : "Ouvrir le projet"}
          </a>
        </p>
      )}
    </div>
  );
}
