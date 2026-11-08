"use client";

import { useEffect, useState } from "react";
import type { ActivityItem, StatusInfo } from "./types";

interface SuggestionItem {
  code: string;
  label_ar: string;
  label_fr: string;
  status: string;
  statusInfo: StatusInfo;
  sector_code: string;
  group_code?: string;
  subgroup_code?: string;
  reason: string;
  matchType: string;
}

interface NAEComplementaryModalProps {
  targetCode: string | null;
  targetActivity?: ActivityItem | null;
  lang: "ar" | "fr";
  selectedCodes: string[];
  onToggleSelect: (code: string) => void;
  onClose: () => void;
}

export default function NAEComplementaryModal({
  targetCode,
  targetActivity,
  lang,
  selectedCodes,
  onToggleSelect,
  onClose,
}: NAEComplementaryModalProps) {
  const ar = lang === "ar";
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const t = ar
    ? {
        modalTitle: "الأنشطة الاقتصادية المكملة المقترحة",
        modalDesc: "أنشطة متوافقة ومترابطة تجارياً أو مهنياً يُنصح بدمجها ضمن موضوع الشركة أو السجل التجاري.",
        baseActivity: "النشاط المرجعي المختار",
        noSuggestions: "لا توجد أنشطة مكملة مباشرة مسجلة لهذا الرمز.",
        add: "إضافة للمشروع",
        added: "مضاف للمشروع ✓",
        close: "إغلاق",
        loading: "جارٍ جلب التوصيات القانونية والتجارية...",
      }
    : {
        modalTitle: "Activités complémentaires recommandées",
        modalDesc: "Activités compatibles et liées sur le plan commercial ou réglementaire, recommandées pour votre objet social.",
        baseActivity: "Activité de référence",
        noSuggestions: "Aucune activité complémentaire directe trouvée.",
        add: "Ajouter au projet",
        added: "Ajoutée au projet ✓",
        close: "Fermer",
        loading: "Chargement des recommandations...",
      };

  useEffect(() => {
    if (!targetCode) return;

    let active = true;
    setLoading(true);
    setError("");

    fetch("/api/nae/browse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ complementaryTo: targetCode, lang }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then((data: { suggestions?: SuggestionItem[] }) => {
        if (active) {
          setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);
        }
      })
      .catch(() => {
        if (active) setError(ar ? "تعذر جلب الاقتراحات حالياً." : "Impossible de charger les suggestions.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [ar, lang, targetCode]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!targetCode) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="complementary-modal-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-stone-200 bg-white p-5 shadow-xl sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <h2 id="complementary-modal-title" className="text-lg font-bold text-stone-900 sm:text-xl">
              💡 {t.modalTitle}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">{t.modalDesc}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-400 hover:bg-stone-100 hover:text-stone-700"
            title={t.close}
          >
            ✕
          </button>
        </div>

        {/* Target Base Activity Bar */}
        {targetActivity && (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 text-xs">
            <span className="font-semibold text-emerald-950">{t.baseActivity}:</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-mono font-bold text-emerald-900" dir="ltr">
                {targetActivity.code}
              </span>
              <span className="font-bold text-stone-900">
                {ar ? targetActivity.label_ar : targetActivity.label_fr}
              </span>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="mt-5">
          {loading ? (
            <div className="py-8 text-center text-sm font-medium text-emerald-800 animate-pulse">
              {t.loading}
            </div>
          ) : error ? (
            <div className="rounded-lg bg-rose-50 p-4 text-center text-sm text-rose-800">{error}</div>
          ) : suggestions.length === 0 ? (
            <div className="rounded-lg bg-stone-50 p-6 text-center text-sm text-stone-600">
              {t.noSuggestions}
            </div>
          ) : (
            <div className="space-y-3">
              {suggestions.map((item) => {
                const isSelected = selectedCodes.includes(item.code);
                return (
                  <div
                    key={item.code}
                    className="flex flex-col justify-between gap-3 rounded-xl border border-stone-200 bg-stone-50/40 p-4 transition-colors hover:border-emerald-300 sm:flex-row sm:items-center"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-950" dir="ltr">
                          {item.code}
                        </span>
                        <span
                          className={`rounded-full border px-2 py-0.2 text-[10px] font-semibold ${item.statusInfo.className}`}
                        >
                          {item.statusInfo.label}
                        </span>
                        <span className="rounded bg-stone-200/70 px-1.5 py-0.2 text-[10px] text-stone-600 font-medium">
                          {item.reason}
                        </span>
                      </div>
                      <p dir="rtl" lang="ar" className="mt-1.5 text-sm font-bold text-stone-900">
                        {item.label_ar}
                      </p>
                      <p dir="ltr" lang="fr" className="text-xs text-stone-600">
                        {item.label_fr}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onToggleSelect(item.code)}
                      className={`inline-flex min-h-[36px] shrink-0 items-center justify-center rounded-lg px-3.5 text-xs font-bold transition-colors ${
                        isSelected
                          ? "bg-emerald-900 text-white"
                          : "bg-emerald-700 text-white hover:bg-emerald-800"
                      }`}
                    >
                      {isSelected ? t.added : t.add}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end border-t border-stone-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[38px] items-center rounded-lg border border-stone-300 bg-white px-4 text-xs font-semibold text-stone-700 hover:bg-stone-50"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
