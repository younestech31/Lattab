"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb, X, Check, Plus, AlertTriangle, CheckCircle2, Ban } from "lucide-react";
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

function usableOfficialLabel(value: string | null | undefined): value is string {
  return Boolean(value?.trim()) && value?.trim() !== "#NOM?";
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
  const dialogRef = useRef<HTMLDivElement>(null);

  const t = ar
    ? {
        modalTitle: "اقتراحات لأنشطة ذات صلة",
        modalDesc: "اقتراحات استكشافية بحسب التقارب في التصنيف أو الارتباط العملي المحتمل.",
        disclaimer: "هذه الاقتراحات لا تثبت جواز جمع الأنشطة ولا تعني أن النشاط مغطى قانوناً بالنشاط الرئيسي. تحقّق من CNRC والجهة المختصة والنصوص السارية قبل اعتماد أي رمز.",
        baseActivity: "النشاط المرجعي المختار",
        noSuggestions: "لا توجد اقتراحات ذات صلة مباشرة لهذا الرمز.",
        add: "إضافة للمشروع",
        added: "إزالة من المشروع",
        close: "إغلاق النافذة",
        loading: "جارٍ تحميل الاقتراحات...",
        unavailableArabicLabel: "التسمية العربية غير مدرجة في المصدر",
        unavailableFrenchLabel: "التسمية الفرنسية غير مدرجة في المصدر",
      }
    : {
        modalTitle: "Suggestions d’activités liées",
        modalDesc: "Suggestions exploratoires fondées sur la proximité de nomenclature ou un lien opérationnel possible.",
        disclaimer: "Ces suggestions ne démontrent ni la possibilité de cumul ni la couverture juridique par l’activité principale. Vérifiez auprès du CNRC, de l’autorité compétente et dans les textes en vigueur avant de retenir un code.",
        baseActivity: "Activité de référence",
        noSuggestions: "Aucune suggestion directement liée à ce code.",
        add: "Ajouter au projet",
        added: "Retirer du projet",
        close: "Fermer la boîte de dialogue",
        loading: "Chargement des suggestions...",
        unavailableArabicLabel: "Libellé arabe non renseigné",
        unavailableFrenchLabel: "Libellé français non renseigné",
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
    if (!targetCode) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousBodyOverflow = document.body.style.overflow;
    const focusableSelector = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "textarea:not([disabled])",
      "select:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(", ");

    const getFocusable = () =>
      Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector))
        .filter((element) => element.getAttribute("aria-hidden") !== "true");

    getFocusable()[0]?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    function keepFocusInside(event: FocusEvent) {
      if (event.target instanceof Node && !dialog!.contains(event.target)) {
        getFocusable()[0]?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", keepFocusInside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", keepFocusInside);
      document.body.style.overflow = previousBodyOverflow;
      previouslyFocused?.focus();
    };
  }, [targetCode, onClose]);

  if (!targetCode) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="complementary-modal-title"
    >
      <div
        ref={dialogRef}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:p-7"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
              <Lightbulb className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="complementary-modal-title" className="text-lg font-bold text-gray-950 sm:text-xl">
                {t.modalTitle}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">{t.modalDesc}</p>
              <p className="mt-2 text-xs leading-relaxed text-amber-900">{t.disclaimer}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            title={t.close}
            aria-label={t.close}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Target Base Activity Bar */}
        {targetActivity && (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 text-xs">
            <span className="font-semibold text-emerald-950">{t.baseActivity}:</span>
            <div className="mt-1 flex items-start gap-2">
              <span className="font-mono font-bold text-emerald-900" dir="ltr">
                {targetActivity.code}
              </span>
              <div className="min-w-0 space-y-0.5">
                <p dir="rtl" lang="ar" className="font-bold text-gray-950">
                  {usableOfficialLabel(targetActivity.label_ar)
                    ? targetActivity.label_ar
                    : t.unavailableArabicLabel}
                </p>
                <p dir="ltr" lang="fr" className="text-xs text-gray-700">
                  {usableOfficialLabel(targetActivity.label_fr)
                    ? targetActivity.label_fr
                    : t.unavailableFrenchLabel}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="mt-5">
          {loading ? (
            <div className="py-8 text-center text-xs sm:text-sm font-medium text-emerald-800 animate-pulse">
              {t.loading}
            </div>
          ) : error ? (
            <div className="rounded-xl bg-rose-50 p-4 text-center text-xs sm:text-sm text-rose-950 border border-rose-200">{error}</div>
          ) : suggestions.length === 0 ? (
            <div className="rounded-xl bg-gray-50 p-6 text-center text-xs sm:text-sm text-gray-700 border border-gray-200">
              {t.noSuggestions}
            </div>
          ) : (
            <div className="space-y-3">
              {suggestions.map((item) => {
                const isSelected = selectedCodes.includes(item.code);
                const ariaItemToggle = isSelected
                  ? (ar ? `إلغاء اختيار النشاط ${item.code}` : `Désélectionner l'activité ${item.code}`)
                  : (ar ? `إضافة النشاط ${item.code} إلى المسودة` : `Ajouter l'activité ${item.code} au projet`);

                return (
                  <div
                    key={item.code}
                    className="flex flex-col justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50/60 p-4 transition-colors hover:border-emerald-300 sm:flex-row sm:items-center"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-950" dir="ltr">
                          {item.code}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${item.statusInfo.className}`}
                        >
                          {item.status === "red" ? (
                            <Ban className="h-3 w-3 text-rose-700" aria-hidden="true" />
                          ) : item.status === "green" ? (
                            <AlertTriangle className="h-3 w-3 text-amber-700" aria-hidden="true" />
                          ) : (
                            <CheckCircle2 className="h-3 w-3 text-emerald-700" aria-hidden="true" />
                          )}
                          <span>
                            {ar ? item.statusInfo.label : (item.status === "red" ? "Bloquée" : item.statusInfo.label)}
                          </span>
                        </span>
                        <span className="rounded-md bg-gray-200/90 px-2 py-0.5 text-xs text-gray-800 font-medium">
                          {item.reason}
                        </span>
                      </div>
                      <p dir="rtl" lang="ar" className="mt-1.5 text-sm font-bold text-gray-950">
                        {usableOfficialLabel(item.label_ar) ? item.label_ar : t.unavailableArabicLabel}
                      </p>
                      <p dir="ltr" lang="fr" className="text-xs text-gray-700">
                        {usableOfficialLabel(item.label_fr) ? item.label_fr : t.unavailableFrenchLabel}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onToggleSelect(item.code)}
                      aria-label={ariaItemToggle}
                      className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl px-4 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                        isSelected
                          ? "bg-emerald-800 text-white hover:bg-emerald-900"
                          : "bg-emerald-800 text-white hover:bg-emerald-900 shadow-xs"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{t.added}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{t.add}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end border-t border-gray-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="inline-flex min-h-11 items-center rounded-xl border border-gray-300 bg-white px-5 text-xs font-semibold text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
