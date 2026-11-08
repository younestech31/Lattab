"use client";

import { NAE_SECTORS, type NAESectorCode } from "@/lib/nae/sectors";

interface NAEFilterBarProps {
  lang: "ar" | "fr";
  selectedSector: string;
  onSelectSector: (sector: string) => void;
  selectedStatus: string;
  onSelectStatus: (status: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalFilteredCount: number;
  totalCatalogCount: number;
  isLoading: boolean;
  onClearFilters: () => void;
}

const SECTOR_COUNTS: Record<string, number> = {
  "1": 452,
  "2": 81,
  "3": 185,
  "4": 278,
  "5": 365,
  "6": 754,
  "7": 21,
};

export default function NAEFilterBar({
  lang,
  selectedSector,
  onSelectSector,
  selectedStatus,
  onSelectStatus,
  searchQuery,
  onSearchChange,
  totalFilteredCount,
  totalCatalogCount,
  isLoading,
  onClearFilters,
}: NAEFilterBarProps) {
  const ar = lang === "ar";

  const t = ar
    ? {
        searchPlaceholder: "ابحث بالرمز (مثال: 507202) أو بالاسم أو بمجال النشاط...",
        allSectors: "كافة القطاعات",
        allStatuses: "كافة الحالات",
        statusFree: "نشاط حر",
        statusRegulated: "نشاط منظم",
        statusBlocked: "نشاط محظور",
        showing: "عرض",
        of: "من إجمالي",
        activities: "نشاطاً",
        reset: "إعادة ضبط المرشحات",
        searching: "جارٍ التحديث...",
        sectorsLabel: "القطاعات الاقتصادية",
        statusLabel: "الحالة القانونية",
      }
    : {
        searchPlaceholder: "Recherchez par code (ex. : 507202), désignation ou domaine...",
        allSectors: "Tous les secteurs",
        allStatuses: "Tous les statuts",
        statusFree: "Activité libre",
        statusRegulated: "Activité réglementée",
        statusBlocked: "Activité suspendue",
        showing: "Affichage de",
        of: "sur un total de",
        activities: "activités",
        reset: "Réinitialiser",
        searching: "Actualisation...",
        sectorsLabel: "Secteurs d'activité",
        statusLabel: "Statut réglementaire",
      };

  const hasActiveFilters = selectedSector !== "all" || selectedStatus !== "all" || searchQuery.trim().length > 0;

  return (
    <section
      className="space-y-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-xs sm:p-6"
      aria-label={t.sectorsLabel}
    >
      {/* Search Input Box */}
      <div className="relative">
        <label htmlFor="nae-directory-search" className="sr-only">
          {t.searchPlaceholder}
        </label>
        <div className="relative flex items-center">
          <input
            id="nae-directory-search"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            autoComplete="off"
            dir="auto"
            className="min-h-[46px] w-full rounded-xl border border-stone-300 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus-visible:border-emerald-700 focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/20 transition-all sm:text-base"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className={`absolute flex h-7 w-7 items-center justify-center rounded-full text-stone-400 hover:bg-stone-200 hover:text-stone-700 ${
                ar ? "left-3" : "right-3"
              }`}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Sector Selection Tabs (Horizontal Scroll on Mobile) */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
            {t.sectorsLabel}
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="text-xs font-semibold text-emerald-800 hover:underline"
            >
              {t.reset}
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          <button
            type="button"
            onClick={() => onSelectSector("all")}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              selectedSector === "all"
                ? "bg-emerald-900 text-white shadow-xs"
                : "border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
            }`}
          >
            <span>{t.allSectors}</span>
            <span
              className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono tabular-nums ${
                selectedSector === "all" ? "bg-emerald-800 text-emerald-100" : "bg-stone-200 text-stone-600"
              }`}
            >
              {totalCatalogCount}
            </span>
          </button>

          {(Object.keys(NAE_SECTORS) as NAESectorCode[]).map((code) => {
            const sector = NAE_SECTORS[code];
            const isSelected = selectedSector === code;
            const count = SECTOR_COUNTS[code] ?? 0;
            const label = ar ? sector.label_ar : sector.label_fr;

            return (
              <button
                key={code}
                type="button"
                onClick={() => onSelectSector(code)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  isSelected
                    ? "bg-emerald-900 text-white shadow-xs"
                    : "border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <span>
                  {code}. {label}
                </span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono tabular-nums ${
                    isSelected ? "bg-emerald-800 text-emerald-100" : "bg-stone-200 text-stone-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Status Filter & Metrics Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-3 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-semibold text-stone-600 me-2">{t.statusLabel}:</span>

          <button
            type="button"
            onClick={() => onSelectStatus("all")}
            className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
              selectedStatus === "all"
                ? "bg-stone-900 text-white"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            {t.allStatuses}
          </button>

          <button
            type="button"
            onClick={() => onSelectStatus("normal")}
            className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
              selectedStatus === "normal"
                ? "bg-stone-800 text-white"
                : "border border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
            }`}
          >
            {t.statusFree} (1,641)
          </button>

          <button
            type="button"
            onClick={() => onSelectStatus("green")}
            className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
              selectedStatus === "green"
                ? "bg-emerald-700 text-white"
                : "border border-emerald-200 bg-emerald-50 text-emerald-900 hover:bg-emerald-100"
            }`}
          >
            {t.statusRegulated} (350)
          </button>

          <button
            type="button"
            onClick={() => onSelectStatus("red")}
            className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
              selectedStatus === "red"
                ? "bg-rose-700 text-white"
                : "border border-rose-200 bg-rose-50 text-rose-900 hover:bg-rose-100"
            }`}
          >
            {t.statusBlocked} (145)
          </button>
        </div>

        {/* Counter and status feedback */}
        <div className="flex items-center gap-2 text-stone-500 font-medium">
          {isLoading ? (
            <span className="text-emerald-700 animate-pulse">{t.searching}</span>
          ) : (
            <span>
              {t.showing}{" "}
              <strong className="font-mono font-bold tabular-nums text-stone-900">
                {totalFilteredCount}
              </strong>{" "}
              {t.of}{" "}
              <span className="font-mono tabular-nums">{totalCatalogCount}</span> {t.activities}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
