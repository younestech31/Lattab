"use client";

import Link from "next/link";
import { Star, Check, Plus, Lightbulb, FileText, AlertTriangle, CheckCircle2, Ban } from "lucide-react";
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
  tutelle_ar?: string | null;
  type_autorisation_fr?: string | null;
  type_autorisation_ar?: string | null;
  contenue_fr?: string;
  accessoires_fr?: string | null;
  accessoires_ar?: string | null;
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
        added: "مضاف للمسودة",
        primary: "النشاط الرئيسي",
        makePrimary: "تعيين كرئيسي",
        details: "البطاقة التفصيلية",
        suggestions: "أنشطة مكملة",
        sector: "القطاع",
        regulatedBy: "الجهة الوصية",
        authType: "الترخيص",
        notAvailable: "غير مدرج بالمصدر",
        blockedNotice: "نشاط محظور أو معلق نظامياً",
        ariaAdd: `إضافة النشاط ${activity.code} إلى المسودة`,
        ariaRemove: `إلغاء اختيار النشاط ${activity.code}`,
        ariaPrimary: `تعيين النشاط ${activity.code} كنشاط رئيسي`,
        ariaSuggestions: `اقتراح أنشطة مكملة للنشاط ${activity.code}`,
        ariaDetails: `عرض البطاقة التفصيلية للنشاط ${activity.code}`,
      }
    : {
        add: "Ajouter au projet",
        added: "Ajoutée au projet",
        primary: "Activité principale",
        makePrimary: "Définir comme principale",
        details: "Fiche détaillée",
        suggestions: "Activités complémentaires",
        sector: "Secteur",
        regulatedBy: "Tutelle",
        authType: "Autorisation",
        notAvailable: "Non renseigné",
        blockedNotice: "Activité bloquée ou suspendue réglementairement",
        ariaAdd: `Ajouter l'activité ${activity.code} au projet`,
        ariaRemove: `Désélectionner l'activité ${activity.code}`,
        ariaPrimary: `Définir l'activité ${activity.code} comme activité principale`,
        ariaSuggestions: `Suggérer des activités complémentaires pour l'activité ${activity.code}`,
        ariaDetails: `Consulter la fiche détaillée de l'activité ${activity.code}`,
      };

  const primaryLabel = ar
    ? (usable(activity.label_ar) ? activity.label_ar : t.notAvailable)
    : (usable(activity.label_fr) ? activity.label_fr : t.notAvailable);

  const secondaryLabel = ar
    ? (usable(activity.label_fr) ? activity.label_fr : t.notAvailable)
    : (usable(activity.label_ar) ? activity.label_ar : t.notAvailable);

  const cardAriaLabel = ar
    ? `${activity.code} - ${usable(activity.label_ar) ? activity.label_ar : activity.code}`
    : `${activity.code} - ${usable(activity.label_fr) ? activity.label_fr : activity.code}`;

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-4 transition-all duration-200 sm:p-5 ${
        isSelected
          ? "border-emerald-600 bg-emerald-50/25 shadow-xs ring-1 ring-emerald-600/30"
          : isBlocked
            ? "border-rose-200 bg-rose-50/15 hover:border-rose-300"
            : "border-gray-200 hover:border-emerald-600/40 hover:shadow-xs"
      }`}
      aria-label={cardAriaLabel}
    >
      <div>
        {/* Top Header Row: Code + Sector + Status */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center rounded-lg border border-emerald-900/15 bg-emerald-50/90 px-2 py-0.5 font-mono text-xs font-bold tabular-nums text-emerald-950"
              dir="ltr"
            >
              {activity.code}
            </span>
            <span className="text-xs text-gray-600 font-medium">
              {ar ? `قطاع ${activity.sector_code}` : `Secteur ${activity.sector_code}`} · {sectorLabel}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {isPrimary && (
              <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-950 border border-amber-300">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-700" aria-hidden="true" />
                <span>{t.primary}</span>
              </span>
            )}
            <span
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${activity.statusInfo.className}`}
            >
              {activity.status === "red" ? (
                <Ban className="h-3 w-3 text-rose-700" aria-hidden="true" />
              ) : activity.status === "green" ? (
                <AlertTriangle className="h-3 w-3 text-amber-700" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="h-3 w-3 text-emerald-700" aria-hidden="true" />
              )}
              <span>
                {ar
                  ? activity.statusInfo.label
                  : activity.status === "red"
                    ? "Bloquée"
                    : activity.statusInfo.label}
              </span>
            </span>
          </div>
        </div>

        {/* Activity Titles: Language hierarchy respects current page lang */}
        <div className="mt-3">
          <h3
            dir={ar ? "rtl" : "ltr"}
            lang={ar ? "ar" : "fr"}
            className="text-base font-bold leading-snug text-gray-950 group-hover:text-emerald-950 transition-colors"
          >
            {primaryLabel}
          </h3>
          <p
            dir={ar ? "ltr" : "rtl"}
            lang={ar ? "fr" : "ar"}
            className="mt-1 text-xs leading-relaxed text-gray-600 line-clamp-2"
          >
            {secondaryLabel}
          </p>
        </div>

        {/* Regulatory snippet for green activities */}
        {isRegulated &&
          (activity.tutelle_fr ||
            activity.tutelle_ar ||
            activity.type_autorisation_fr ||
            activity.type_autorisation_ar) && (
          <div className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-2.5 text-xs leading-relaxed text-emerald-950">
            {(ar ? (activity.tutelle_ar || activity.tutelle_fr) : activity.tutelle_fr) && (
              <div>
                <strong className="font-semibold text-emerald-950">{t.regulatedBy}:</strong>{" "}
                <span>{ar ? (activity.tutelle_ar || activity.tutelle_fr) : activity.tutelle_fr}</span>
                {ar && activity.tutelle_ar && activity.tutelle_fr && activity.tutelle_ar !== activity.tutelle_fr && (
                  <span dir="ltr" className="block text-gray-500 font-mono text-xs mt-0.5">
                    {activity.tutelle_fr}
                  </span>
                )}
              </div>
            )}
            {(ar ? (activity.type_autorisation_ar || activity.type_autorisation_fr) : activity.type_autorisation_fr) && (
              <div className="mt-1">
                <strong className="font-semibold text-emerald-950">{t.authType}:</strong>{" "}
                <span>{ar ? (activity.type_autorisation_ar || activity.type_autorisation_fr) : activity.type_autorisation_fr}</span>
                {ar &&
                  activity.type_autorisation_ar &&
                  activity.type_autorisation_fr &&
                  activity.type_autorisation_ar !== activity.type_autorisation_fr && (
                    <span dir="ltr" className="block text-gray-500 font-mono text-xs mt-0.5">
                      {activity.type_autorisation_fr}
                    </span>
                  )}
              </div>
            )}
          </div>
        )}

        {/* Warning snippet for blocked activities */}
        {isBlocked && (
          <div className="mt-3 flex items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50/80 p-2 text-xs font-medium text-rose-950">
            <AlertTriangle className="h-4 w-4 shrink-0 text-rose-700" aria-hidden="true" />
            <span>{t.blockedNotice}</span>
          </div>
        )}
      </div>

      {/* Card Action Controls */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleSelect(activity.code)}
            disabled={isBlocked}
            aria-label={isSelected ? t.ariaRemove : t.ariaAdd}
            className={`inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl px-3.5 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
              isSelected
                ? "bg-emerald-800 text-white shadow-xs hover:bg-emerald-900"
                : isBlocked
                  ? "cursor-not-allowed bg-gray-100 text-gray-500"
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

          {isSelected && !isPrimary && onSetPrimary && (
            <button
              type="button"
              onClick={() => onSetPrimary(activity.code)}
              aria-label={t.ariaPrimary}
              className="inline-flex min-h-11 items-center rounded-xl border border-gray-200 bg-gray-50 px-3 text-xs font-semibold text-gray-800 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
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
              aria-label={t.ariaSuggestions}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 text-xs font-medium text-gray-800 hover:border-emerald-600/40 hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
              title={t.suggestions}
            >
              <Lightbulb className="h-3.5 w-3.5 text-amber-600" aria-hidden="true" />
              <span>{t.suggestions}</span>
            </button>
          )}

          <Link
            href={`/${ar ? "" : "fr/"}nae/${activity.code}`}
            aria-label={t.ariaDetails}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 text-xs font-medium text-gray-800 hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
          >
            <FileText className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
            <span>{t.details}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
