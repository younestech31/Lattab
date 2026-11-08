"use client";

import Link from "next/link";
import { NAE_SECTORS, type NAESectorCode } from "@/lib/nae/sectors";
import type { StatusInfo } from "./types";

export interface ActivityCardData {
  code: string;
  label_ar: string;
  label_fr: string;
  status: string;
  statusInfo: StatusInfo;
  sector_code: string;
  group_code?: string;
  subgroup_code?: string;
  tutelle_fr?: string | null;
  type_autorisation_fr?: string | null;
  contenue_fr?: string;
  accessoires_fr?: string | null;
}

interface NAEActivityCardProps {
  activity: ActivityCardData;
  lang: "ar" | "fr";
  isSelected: boolean;
  isPrimary: boolean;
  onToggleSelect: (code: string) => void;
  onSetPrimary?: (code: string) => void;
  onRequestSuggestions?: (code: string) => void;
}

function usable(text: string | null | undefined): boolean {
  return Boolean(text && text.trim().length > 0 && text.trim() !== "#NOM?");
}

export default function NAEActivityCard({
  activity,
  lang,
  isSelected,
  isPrimary,
  onToggleSelect,
  onSetPrimary,
  onRequestSuggestions,
}: NAEActivityCardProps) {
  const ar = lang === "ar";
  const sector = NAE_SECTORS[activity.sector_code as NAESectorCode];
  const sectorLabel = sector ? (ar ? sector.label_ar : sector.label_fr) : `${activity.sector_code}`;
  const isBlocked = activity.status === "red";
  const isRegulated = activity.status === "green";

  const t = ar
    ? {
        add: "إضافة للمسودة",
        added: "مضاف للمسودة ✓",
        primary: "النشاط الرئيسي",
        makePrimary: "تعيين كرئيسي",
        details: "البطاقة التفصيلية",
        suggestions: "أنشطة مكملة",
        sector: "القطاع",
        regulatedBy: "الجهة الوصية",
        authType: "الترخيص",
        notAvailable: "غير مدرج بالمصدر",
        blockedNotice: "نشاط محظور أو معلق نظامياً",
      }
    : {
        add: "Ajouter au projet",
        added: "Ajoutée au projet ✓",
        primary: "Activité principale",
        makePrimary: "Définir comme principale",
        details: "Fiche détaillée",
        suggestions: "Activités complémentaires",
        sector: "Secteur",
        regulatedBy: "Tutelle",
        authType: "Autorisation",
        notAvailable: "Non renseigné",
        blockedNotice: "Activité suspendue ou bloquée",
      };

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-xl border bg-white p-4 transition-all duration-200 sm:p-5 ${
        isSelected
          ? "border-emerald-600 bg-emerald-50/20 shadow-sm ring-1 ring-emerald-600/30"
          : isBlocked
            ? "border-rose-200 bg-rose-50/10 hover:border-rose-300"
            : "border-stone-200 hover:border-emerald-600/50 hover:shadow-sm"
      }`}
      aria-label={`${activity.code} - ${usable(activity.label_ar) ? activity.label_ar : activity.code}`}
    >
      <div>
        {/* Top Header Row: Code + Sector + Status */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center rounded-md border border-emerald-900/15 bg-emerald-50/90 px-2 py-0.5 font-mono text-xs font-bold tabular-nums text-emerald-950"
              dir="ltr"
            >
              {activity.code}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {ar ? `قطاع ${activity.sector_code}` : `Secteur ${activity.sector_code}`} · {sectorLabel}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {isPrimary && (
              <span className="inline-flex items-center rounded bg-amber-100 px-1.5 py-0.5 text-[11px] font-bold text-amber-900">
                ★ {t.primary}
              </span>
            )}
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${activity.statusInfo.className}`}
            >
              {activity.statusInfo.label}
            </span>
          </div>
        </div>

        {/* Activity Titles */}
        <div className="mt-3">
          <h3
            dir="rtl"
            lang="ar"
            className="text-base font-bold leading-snug text-stone-900 group-hover:text-emerald-950 transition-colors"
          >
            {usable(activity.label_ar) ? activity.label_ar : t.notAvailable}
          </h3>
          <p
            dir="ltr"
            lang="fr"
            className="mt-1 text-xs leading-relaxed text-stone-600 line-clamp-2"
          >
            {usable(activity.label_fr) ? activity.label_fr : t.notAvailable}
          </p>
        </div>

        {/* Regulatory snippet for green activities */}
        {isRegulated && (activity.tutelle_fr || activity.type_autorisation_fr) && (
          <div className="mt-3 rounded-lg border border-emerald-100 bg-emerald-50/60 p-2.5 text-xs leading-relaxed text-emerald-950">
            {activity.tutelle_fr && (
              <p>
                <strong className="font-semibold text-emerald-900">{t.regulatedBy}:</strong>{" "}
                <span dir="ltr">{activity.tutelle_fr}</span>
              </p>
            )}
            {activity.type_autorisation_fr && (
              <p className="mt-0.5">
                <strong className="font-semibold text-emerald-900">{t.authType}:</strong>{" "}
                <span dir="ltr">{activity.type_autorisation_fr}</span>
              </p>
            )}
          </div>
        )}

        {/* Warning snippet for blocked activities */}
        {isBlocked && (
          <div className="mt-3 rounded-lg border border-rose-200 bg-rose-50/80 p-2 text-xs font-medium text-rose-900">
            ⚠ {t.blockedNotice}
          </div>
        )}
      </div>

      {/* Card Action Controls */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-stone-100 pt-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleSelect(activity.code)}
            disabled={isBlocked}
            className={`inline-flex min-h-[38px] items-center justify-center rounded-lg px-3.5 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
              isSelected
                ? "bg-emerald-900 text-white shadow-xs hover:bg-emerald-800"
                : isBlocked
                  ? "cursor-not-allowed bg-stone-100 text-stone-400"
                  : "bg-emerald-700 text-white hover:bg-emerald-800 shadow-xs"
            }`}
          >
            {isSelected ? t.added : t.add}
          </button>

          {isSelected && !isPrimary && onSetPrimary && (
            <button
              type="button"
              onClick={() => onSetPrimary(activity.code)}
              className="inline-flex min-h-[38px] items-center rounded-lg border border-stone-200 bg-stone-50 px-2.5 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
              title={t.makePrimary}
            >
              {t.makePrimary}
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {onRequestSuggestions && !isBlocked && (
            <button
              type="button"
              onClick={() => onRequestSuggestions(activity.code)}
              className="inline-flex min-h-[38px] items-center rounded-lg border border-stone-200 bg-white px-2.5 text-xs font-medium text-stone-700 hover:border-emerald-600/40 hover:text-emerald-900 transition-colors"
              title={t.suggestions}
            >
              💡 {t.suggestions}
            </button>
          )}

          <Link
            href={`/${ar ? "" : "fr/"}nae/${activity.code}`}
            className="inline-flex min-h-[38px] items-center rounded-lg border border-stone-200 bg-white px-2.5 text-xs font-medium text-stone-700 hover:border-stone-400 hover:bg-stone-50 transition-colors"
          >
            {t.details}
          </Link>
        </div>
      </div>
    </article>
  );
}
