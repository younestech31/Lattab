"use client";

import { Search, X, RotateCcw, CheckCircle2, AlertTriangle, Ban } from "lucide-react";
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
  totalCatalogCount?: number;
  sectorCounts?: Record<string, number>;
  statusCounts?: {
    normal: number;
    green: number;
    red: number;
  };
  isLoading: boolean;
  onClearFilters: () => void;
}

export default function NAEFilterBar({
  lang,
  selectedSector,
  onSelectSector,
  selectedStatus,
  onSelectStatus,
  searchQuery,
  onSearchChange,
  totalFilteredCount,
  totalCatalogCount = 2136,
  sectorCounts = {},
  statusCounts = { normal: 1641, green: 350, red: 145 },
  isLoading,
  onClearFilters,
}: NAEFilterBarProps) {
  const ar = lang === "ar";

  const t = ar
    ? {
        searchPlaceholder: "ابحث بالرمز (مثال: 507202) أو بالاسم أو بمجال النشاط...",
        clearSearch: "مسح نص البحث",
        allSectors: "كافة القطاعات",
        allStatuses: "كافة الحالات",
        statusFree: "مصنّف حراً في المصدر",
        statusRegulated: "مصنّفاً منظماً في المصدر",
        statusBlocked: "مصنّفاً محظوراً في المصدر",
        showing: "عرض",
        of: "من إجمالي",
        activities: "نشاطاً",
        reset: "إعادة ضبط المرشحات",
        searching: "جارٍ التحديث...",
        sectorsLabel: "القطاعات الاقتصادية",
        statusLabel: "حالة النشاط وفق المصدر",
        filterBySector: "تصفية حسب القطاع:",
        filterByStatus: "تصفية حسب الحالة:",
      }
    : {
        searchPlaceholder: "Recherchez par code (ex. : 507202), désignation ou domaine...",
        clearSearch: "Effacer la recherche",
        allSectors: "Tous les secteurs",
        allStatuses: "Tous les statuts",
        statusFree: "Classée libre (source)",
        statusRegulated: "Classée réglementée (source)",
        statusBlocked: "Classée bloquée (source)",
        showing: "Affichage de",
        of: "sur un total de",
        activities: "activités",
        reset: "Réinitialiser",
        searching: "Actualisation...",
        sectorsLabel: "Secteurs d'activité",
        statusLabel: "Statut selon la source",
        filterBySector: "Filtrer par secteur :",
        filterByStatus: "Filtrer par statut :",
      };

  const hasActiveFilters = selectedSector !== "all" || selectedStatus !== "all" || searchQuery.trim().length > 0;

  return (
    <section
      className="space-y-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-xs sm:p-6"
      aria-label={t.sectorsLabel}
    >
      {/* Search Input Box */}
      <div className="relative">
        <label htmlFor="nae-directory-search" className="sr-only">
          {t.searchPlaceholder}
        </label>
        <div className="relative flex items-center">
          <div
            className={`pointer-events-none absolute flex items-center text-gray-500 ${
              ar ? "right-3.5" : "left-3.5"
            }`}
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </div>
          <input
            id="nae-directory-search"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            autoComplete="off"
            dir="auto"
            className={`min-h-11 w-full rounded-xl border border-gray-300 bg-gray-50/70 py-2.5 text-xs text-gray-950 placeholder:text-gray-500 focus-visible:border-emerald-600 focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-all sm:text-sm ${
              ar ? "pr-11 pl-11" : "pl-11 pr-11"
            }`}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className={`absolute flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                ar ? "left-1.5" : "right-1.5"
              }`}
              title={t.clearSearch}
              aria-label={t.clearSearch}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Sector Selection Tabs (Horizontal Scroll on Mobile) */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold text-gray-800">
            {t.sectorsLabel}
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              aria-label={t.reset}
              className="inline-flex min-h-8 items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-950 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 rounded-md px-2 py-1"
            >
              <RotateCcw className="h-3 w-3" aria-hidden="true" />
              <span>{t.reset}</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          <button
            type="button"
            onClick={() => onSelectSector("all")}
            aria-label={`${t.filterBySector} ${t.allSectors} (${totalCatalogCount})`}
            className={`inline-flex shrink-0 min-h-11 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
              selectedSector === "all"
                ? "bg-emerald-800 text-white shadow-xs hover:bg-emerald-900"
                : "border border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100"
            }`}
          >
            <span>{t.allSectors}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-mono tabular-nums ${
                selectedSector === "all" ? "bg-emerald-900 text-emerald-100" : "bg-gray-200 text-gray-800"
              }`}
            >
              {totalCatalogCount}
            </span>
          </button>

          {(Object.keys(NAE_SECTORS) as NAESectorCode[]).map((code) => {
            const sector = NAE_SECTORS[code];
            const isSelected = selectedSector === code;
            const count = sectorCounts[code] ?? 0;
            const label = ar ? sector.label_ar : sector.label_fr;

            return (
              <button
                key={code}
                type="button"
                onClick={() => onSelectSector(code)}
                aria-label={`${t.filterBySector} ${code}. ${label} (${count})`}
                className={`inline-flex shrink-0 min-h-11 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                  isSelected
                    ? "bg-emerald-800 text-white shadow-xs hover:bg-emerald-900"
                    : "border border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
              >
                <span>
                  {code}. {label}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-mono tabular-nums ${
                    isSelected ? "bg-emerald-900 text-emerald-100" : "bg-gray-200 text-gray-800"
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
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-gray-800 me-1">{t.statusLabel}:</span>

          <button
            type="button"
            onClick={() => onSelectStatus("all")}
            aria-label={`${t.filterByStatus} ${t.allStatuses}`}
            className={`min-h-11 rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
              selectedStatus === "all"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {t.allStatuses}
          </button>

          {/* Normal / Free Activity */}
          <button
            type="button"
            onClick={() => onSelectStatus("normal")}
            aria-label={`${t.filterByStatus} ${t.statusFree} (${statusCounts.normal})`}
            className={`inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
              selectedStatus === "normal"
                ? "bg-gray-800 text-white"
                : "border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
            <span>{t.statusFree}</span>
            <span className="font-mono tabular-nums font-normal text-gray-600">({statusCounts.normal})</span>
          </button>

          {/* Regulated Activity */}
          <button
            type="button"
            onClick={() => onSelectStatus("green")}
            aria-label={`${t.filterByStatus} ${t.statusRegulated} (${statusCounts.green})`}
            className={`inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
              selectedStatus === "green"
                ? "bg-emerald-800 text-white hover:bg-emerald-900"
                : "border border-emerald-300 bg-emerald-50 text-emerald-950 hover:bg-emerald-100"
            }`}
          >
            <AlertTriangle className="h-3.5 w-3.5 text-amber-700" aria-hidden="true" />
            <span>{t.statusRegulated}</span>
            <span className="font-mono tabular-nums font-normal opacity-90">({statusCounts.green})</span>
          </button>

          {/* Blocked Activity */}
          <button
            type="button"
            onClick={() => onSelectStatus("red")}
            aria-label={`${t.filterByStatus} ${t.statusBlocked} (${statusCounts.red})`}
            className={`inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
              selectedStatus === "red"
                ? "bg-rose-800 text-white"
                : "border border-rose-300 bg-rose-50 text-rose-950 hover:bg-rose-100"
            }`}
          >
            <Ban className="h-3.5 w-3.5 text-rose-700" aria-hidden="true" />
            <span>{t.statusBlocked}</span>
            <span className="font-mono tabular-nums font-normal opacity-90">({statusCounts.red})</span>
          </button>
        </div>

        {/* Counter and status feedback */}
        <div className="flex items-center gap-2 text-gray-700 font-medium text-xs">
          {isLoading ? (
            <span className="text-emerald-800 font-semibold animate-pulse">{t.searching}</span>
          ) : (
            <span>
              {t.showing}{" "}
              <strong className="font-mono font-bold tabular-nums text-gray-950">
                {totalFilteredCount}
              </strong>{" "}
              {t.of}{" "}
              <span className="font-mono tabular-nums font-bold text-gray-900">{totalCatalogCount}</span> {t.activities}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
