"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import {
  NAE_PROJECT_DRAFT_STORAGE_KEY,
  parseNAEProjectDraft,
  type NAEProjectDraft,
} from "@/lib/nae/project-draft";
import NAEActivityCard from "./NAEActivityCard";
import NAEFilterBar from "./NAEFilterBar";
import NAEComplementaryModal from "./NAEComplementaryModal";
import type { ActivityItem, AnalysisResponseData, Finding } from "./types";

interface NAEProjectWorkspaceProps {
  lang: "ar" | "fr";
  sourceRevisionDate: string;
}

function severityClass(value: Finding["severity"]) {
  return value === "critical"
    ? "border-rose-200 bg-rose-50 text-rose-900"
    : value === "warning"
      ? "border-amber-200 bg-amber-50 text-amber-900"
      : "border-stone-200 bg-stone-50 text-stone-800";
}

export default function NAEProjectWorkspace({
  lang,
  sourceRevisionDate,
}: NAEProjectWorkspaceProps) {
  const ar = lang === "ar";

  // Catalog Browsing & Filter State
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const pageSize = 24;

  const [catalogActivities, setCatalogActivities] = useState<ActivityItem[]>([]);
  const [totalFilteredCount, setTotalFilteredCount] = useState<number>(2136);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loadingCatalog, setLoadingCatalog] = useState<boolean>(true);
  const [catalogError, setCatalogError] = useState<string>("");

  // Project Selections & Draft State
  const [codes, setCodes] = useState<string[]>([]);
  const [primary, setPrimary] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");
  const [ready, setReady] = useState<boolean>(false);

  // Legal Compatibility Analysis State
  const [analysisData, setAnalysisData] = useState<AnalysisResponseData | null>(null);
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [analysisError, setAnalysisError] = useState<string>("");

  // UI Modals & Active Views
  const [viewMode, setViewMode] = useState<"directory" | "project_review">("directory");
  const [complementaryTargetCode, setComplementaryTargetCode] = useState<string | null>(null);

  // Localization strings
  const t = ar
    ? {
        title: "دليل النشاطات الاقتصادية الجزائرية (NAE)",
        intro: "استعرض كافة الأنشطة الاقتصادية المعتمدة رسمياً، تحقّق فورياً من التوافق القانوني للنشاطات، واستخرج ورقة العمل التأسيسية للموثق والسجل التجاري.",
        tabDirectory: "دليل الأنشطة والاستعراض",
        tabProject: "مشروع المؤسسة وسلة الأنشطة",
        selectedBadge: "نشاط مختار",
        reviewProject: "مراجعة توافق المشروع",
        backToDirectory: "العودة لتصفح الأنشطة",
        clearAll: "تفريغ المسودة",
        printSheet: "طباعة ورقة التحضير الرسمية",
        primaryActivity: "النشاط الرئيسي",
        additionalActivity: "نشاط إضافي",
        setPrimary: "تعيين كرئيسي",
        remove: "حذف",
        emptyProject: "لم تختر أي نشاط بعد. تصفح الدليل وأضف الأنشطة التي ترغب في ممارستها.",
        legalStatus: "نتيجة فحص التوافق القانوني",
        compatibleSuccess: "الأنشطة المختارة متوافقة ومصرح بجمعها نظامياً.",
        openSuggestions: "اقتراح أنشطة مكملة للمشروع",
        prevPage: "السابق",
        nextPage: "التالي",
        pageOf: "صفحة",
        of: "من",
        errorCatalog: "تعذر تحميل الأنشطة حالياً. يرجى إعادة المحاولة.",
        printDocTitle: "ورقة تعيين نشاطات المؤسسة وتحضير القانون الأساسي",
        printOffice: "الديوان العمومي للتوثيق — الأستاذ لعطب محمد (موثق معتمد)",
        printCompany: "تسمية الشركة المقترحة",
        printDate: "تاريخ الإعداد",
        printAddress: "المقر الاجتماعي",
        printNotaryNotes: "ملاحظات وتوجيهات الموثق",
        sourceAttribution: "بيانات مستخرجة وفق مدونة النشاطات الاقتصادية (CNRC/NAE 2026)، ترخيص CC BY 4.0 UpGrowth.",
      }
    : {
        title: "Nomenclature des Activités Économiques (NAE)",
        intro: "Explorez l'ensemble des activités économiques officielles, vérifiez la compatibilité réglementaire de votre sélection et générez votre fiche préparatoire pour le notaire et le CNRC.",
        tabDirectory: "Exploration de la nomenclature",
        tabProject: "Dossier de constitution et sélection",
        selectedBadge: "activité(s) sélectionnée(s)",
        reviewProject: "Examiner la compatibilité",
        backToDirectory: "Retour à l'exploration",
        clearAll: "Vider la sélection",
        printSheet: "Imprimer la fiche officielle",
        primaryActivity: "Activité principale",
        additionalActivity: "Activité additionnelle",
        setPrimary: "Définir comme principale",
        remove: "Retirer",
        emptyProject: "Aucune activité sélectionnée pour le moment. Explorez le catalogue pour composer votre projet.",
        legalStatus: "Examen de conformité et compatibilité",
        compatibleSuccess: "Les activités sélectionnées sont compatibles et conformes aux règles de cumul.",
        openSuggestions: "Suggérer des activités complémentaires",
        prevPage: "Précédent",
        nextPage: "Suivant",
        pageOf: "Page",
        of: "sur",
        errorCatalog: "Impossible de charger les activités. Veuillez réessayer.",
        printDocTitle: "Fiche Préparatoire des Activités et Statuts de Société",
        printOffice: "Office Notarial — Maître Lattab Mohamed (Notaire agréé)",
        printCompany: "Dénomination sociale prévue",
        printDate: "Date d'établissement",
        printAddress: "Siège social",
        printNotaryNotes: "Observations du notaire",
        sourceAttribution: "Données issues de la Nomenclature des Activités Économiques (CNRC/NAE 2026), licence CC BY 4.0 UpGrowth.",
      };

  // 1. Initial Local Storage Restoration
  useEffect(() => {
    try {
      const saved = parseNAEProjectDraft(window.localStorage.getItem(NAE_PROJECT_DRAFT_STORAGE_KEY));
      setCodes(saved.codes);
      setPrimary(saved.primaryCode);
      setDescription(saved.description);
    } catch {
      // Ignore invalid localStorage draft
    }
    setReady(true);
  }, []);

  // 2. Local Storage Sync
  useEffect(() => {
    if (!ready) return;
    try {
      const draft: NAEProjectDraft = {
        version: 1,
        description,
        codes,
        primaryCode: primary && codes.includes(primary) ? primary : codes[0] ?? null,
      };
      window.localStorage.setItem(NAE_PROJECT_DRAFT_STORAGE_KEY, JSON.stringify(draft));
    } catch {
      // Ignore persistence quota issues
    }
  }, [codes, description, primary, ready]);

  // 3. Catalog Fetching and Instant Search
  const fetchCatalog = useCallback(async () => {
    setLoadingCatalog(true);
    setCatalogError("");

    try {
      const trimmedQuery = searchQuery.trim();

      // If user provided a specific search phrase, use /api/nae/search for semantic synonym ranking
      if (trimmedQuery.length >= 2 && selectedSector === "all" && selectedStatus === "all") {
        const response = await fetch("/api/nae/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q: trimmedQuery, lang }),
        });
        if (!response.ok) throw new Error("search failed");
        const payload = await response.json();
        const results: ActivityItem[] = Array.isArray(payload.results) ? payload.results : [];
        setCatalogActivities(results);
        setTotalFilteredCount(results.length);
        setTotalPages(1);
      } else {
        // Standard Directory Browsing with sector, status, keyword, and pagination
        const response = await fetch("/api/nae/browse", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lang,
            sector: selectedSector,
            status: selectedStatus,
            q: trimmedQuery,
            page,
            pageSize,
          }),
        });
        if (!response.ok) throw new Error("browse failed");
        const payload = await response.json();
        setCatalogActivities(Array.isArray(payload.activities) ? payload.activities : []);
        setTotalFilteredCount(payload.total ?? 0);
        setTotalPages(payload.totalPages ?? 1);
      }
    } catch {
      setCatalogError(t.errorCatalog);
    } finally {
      setLoadingCatalog(false);
    }
  }, [lang, page, pageSize, searchQuery, selectedSector, selectedStatus, t.errorCatalog]);

  // Debounce catalog fetching on search or filter change
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCatalog();
    }, 180);
    return () => clearTimeout(timer);
  }, [fetchCatalog]);

  // Reset page to 1 when filters change
  const handleSectorChange = (sector: string) => {
    setSelectedSector(sector);
    setPage(1);
  };
  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    setPage(1);
  };
  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setPage(1);
  };
  const handleClearFilters = () => {
    setSelectedSector("all");
    setSelectedStatus("all");
    setSearchQuery("");
    setPage(1);
  };

  // 4. Legal Compatibility Analysis on Selected Codes
  useEffect(() => {
    if (!ready || codes.length === 0) {
      setAnalysisData(null);
      setAnalyzing(false);
      setAnalysisError("");
      return;
    }

    const controller = new AbortController();
    setAnalyzing(true);
    setAnalysisError("");

    fetch("/api/nae/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ codes, description, primaryCode: primary, lang }),
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Analysis failed");
        return res.json();
      })
      .then((payload: AnalysisResponseData) => {
        setAnalysisData(payload);
      })
      .catch((err) => {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          setAnalysisError(ar ? "تعذر إتمام فحص التوافق." : "Échec de l'analyse.");
        }
      })
      .finally(() => {
        setAnalyzing(false);
      });

    return () => controller.abort();
  }, [ar, codes, description, lang, primary, ready]);

  // Basket Handlers
  const toggleSelect = (code: string) => {
    setCodes((prev) => {
      if (prev.includes(code)) {
        const next = prev.filter((c) => c !== code);
        if (primary === code) setPrimary(next[0] ?? null);
        return next;
      } else {
        const next = [...prev, code];
        if (!primary) setPrimary(code);
        return next;
      }
    });
  };

  const handleSetPrimary = (code: string) => {
    if (codes.includes(code)) setPrimary(code);
  };

  const clearBasket = () => {
    setCodes([]);
    setPrimary(null);
    setAnalysisData(null);
  };

  // Complementary modal target
  const targetActivityItem = useMemo(() => {
    if (!complementaryTargetCode) return null;
    return (
      catalogActivities.find((a) => a.code === complementaryTargetCode) ??
      analysisData?.activities.find((a) => a.code === complementaryTargetCode) ??
      null
    );
  }, [catalogActivities, complementaryTargetCode, analysisData]);

  // Compatibility Severity Summary
  const compatibilityStatus = useMemo(() => {
    if (!analysisData || codes.length === 0) return null;
    const findings = analysisData.analysis.findings;
    const hasCritical = findings.some((f) => f.severity === "critical");
    const hasWarning = findings.some((f) => f.severity === "warning");
    if (hasCritical) return "critical";
    if (hasWarning) return "warning";
    return "ok";
  }, [analysisData, codes.length]);

  return (
    <div className="space-y-6" data-nae-workspace>
      {/* Print Stylesheet */}
      <style>{`
        @page { size: A4 portrait; margin: 12mm; }
        @media print {
          body * { visibility: hidden !important; }
          [data-nae-print-sheet], [data-nae-print-sheet] * { visibility: visible !important; }
          [data-nae-print-sheet] {
            display: block !important;
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            background: #fff !important;
            color: #111 !important;
            padding: 10px !important;
          }
          [data-nae-print-sheet] table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          [data-nae-print-sheet] th, [data-nae-print-sheet] td {
            border: 1px solid #444 !important;
            padding: 6px 10px !important;
            font-size: 11pt !important;
            vertical-align: top;
          }
          [data-nae-print-sheet] th { background-color: #f3f4f6 !important; }
        }
      `}</style>

      {/* Main View Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode("directory")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
              viewMode === "directory"
                ? "bg-emerald-900 text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
            }`}
          >
            <span>📖 {t.tabDirectory}</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode("project_review")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
              viewMode === "project_review"
                ? "bg-emerald-900 text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
            }`}
          >
            <span>💼 {t.tabProject}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-mono font-bold tabular-nums ${
                codes.length > 0
                  ? compatibilityStatus === "critical"
                    ? "bg-rose-600 text-white"
                    : compatibilityStatus === "warning"
                      ? "bg-amber-500 text-white"
                      : "bg-emerald-600 text-white"
                  : "bg-stone-200 text-stone-700"
              }`}
            >
              {codes.length}
            </span>
          </button>
        </div>

        {/* Quick action: Print if activities exist */}
        {codes.length > 0 && (
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3.5 py-2 text-xs font-bold text-stone-800 hover:bg-stone-50 transition-colors shadow-2xs"
          >
            🖨️ {t.printSheet}
          </button>
        )}
      </div>

      {/* VIEW MODE 1: DIRECTORY BROWSING & LIVE FILTERING */}
      {viewMode === "directory" && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <NAEFilterBar
            lang={lang}
            selectedSector={selectedSector}
            onSelectSector={handleSectorChange}
            selectedStatus={selectedStatus}
            onSelectStatus={handleStatusChange}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            totalFilteredCount={totalFilteredCount}
            totalCatalogCount={2136}
            isLoading={loadingCatalog}
            onClearFilters={handleClearFilters}
          />

          {/* Catalog Activities Grid */}
          {catalogError ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-center text-rose-800">
              {catalogError}
            </div>
          ) : loadingCatalog ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-44 animate-pulse rounded-xl border border-stone-200 bg-stone-100/60 p-5"
                />
              ))}
            </div>
          ) : catalogActivities.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center">
              <p className="text-base font-semibold text-stone-700">
                {ar ? "لا توجد نشاطات مطابقة للبحث أو المرشحات المحددة." : "Aucune activité ne correspond à vos filtres."}
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="mt-4 inline-flex items-center rounded-lg bg-emerald-800 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-900 transition-colors"
              >
                {ar ? "إعادة ضبط جميع المرشحات" : "Réinitialiser tous les filtres"}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {catalogActivities.map((activity) => (
                <NAEActivityCard
                  key={activity.code}
                  activity={activity}
                  lang={lang}
                  isSelected={codes.includes(activity.code)}
                  isPrimary={primary === activity.code}
                  onToggleSelect={toggleSelect}
                  onSetPrimary={handleSetPrimary}
                  onRequestSuggestions={(code) => setComplementaryTargetCode(code)}
                />
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 pt-4">
              <div className="text-xs text-stone-500 font-medium">
                {t.pageOf}{" "}
                <strong className="font-mono tabular-nums text-stone-900">{page}</strong> {t.of}{" "}
                <span className="font-mono tabular-nums">{totalPages}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1 || loadingCatalog}
                  className="inline-flex min-h-[36px] items-center rounded-lg border border-stone-300 bg-white px-3.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {ar ? "← " + t.prevPage : "← " + t.prevPage}
                </button>

                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages || loadingCatalog}
                  className="inline-flex min-h-[36px] items-center rounded-lg border border-stone-300 bg-white px-3.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {ar ? t.nextPage + " →" : t.nextPage + " →"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW MODE 2: PROJECT WORKSPACE & LEGAL COMPATIBILITY CHECKER */}
      {viewMode === "project_review" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4">
              <div>
                <h2 className="text-lg font-bold text-stone-900 sm:text-xl">{t.tabProject}</h2>
                <p className="mt-1 text-xs text-stone-500">
                  {codes.length} {t.selectedBadge}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode("directory")}
                  className="inline-flex items-center rounded-lg border border-stone-300 bg-white px-3.5 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                >
                  {t.backToDirectory}
                </button>
                {codes.length > 0 && (
                  <button
                    type="button"
                    onClick={clearBasket}
                    className="inline-flex items-center rounded-lg border border-rose-200 bg-rose-50 px-3.5 py-2 text-xs font-semibold text-rose-800 hover:bg-rose-100"
                  >
                    {t.clearAll}
                  </button>
                )}
              </div>
            </div>

            {/* Selected Activities List */}
            {codes.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-sm font-semibold text-stone-600">{t.emptyProject}</p>
                <button
                  type="button"
                  onClick={() => setViewMode("directory")}
                  className="mt-4 inline-flex items-center rounded-lg bg-emerald-800 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-900"
                >
                  {t.backToDirectory}
                </button>
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                {codes.map((code) => {
                  const item =
                    analysisData?.activities.find((a) => a.code === code) ??
                    catalogActivities.find((a) => a.code === code);
                  const isItemPrimary = primary === code;

                  return (
                    <div
                      key={code}
                      className={`flex flex-col justify-between gap-3 rounded-xl border p-4 transition-colors sm:flex-row sm:items-center ${
                        isItemPrimary
                          ? "border-amber-300 bg-amber-50/20"
                          : "border-stone-200 bg-stone-50/50"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className="inline-flex items-center rounded-md border border-emerald-900/15 bg-emerald-50 px-2 py-0.5 font-mono text-xs font-bold tabular-nums text-emerald-950"
                            dir="ltr"
                          >
                            {code}
                          </span>
                          {isItemPrimary && (
                            <span className="rounded bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-900">
                              ★ {t.primaryActivity}
                            </span>
                          )}
                          {item && (
                            <span
                              className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${item.statusInfo.className}`}
                            >
                              {item.statusInfo.label}
                            </span>
                          )}
                        </div>

                        <p dir="rtl" lang="ar" className="mt-1.5 text-sm font-bold text-stone-900">
                          {item ? item.label_ar : code}
                        </p>
                        <p dir="ltr" lang="fr" className="text-xs text-stone-600">
                          {item?.label_fr}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {!isItemPrimary && (
                          <button
                            type="button"
                            onClick={() => handleSetPrimary(code)}
                            className="rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-100"
                          >
                            {t.setPrimary}
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => setComplementaryTargetCode(code)}
                          className="rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-xs font-medium text-stone-700 hover:text-emerald-900"
                        >
                          💡
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleSelect(code)}
                          className="rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-50"
                        >
                          {t.remove}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Legal Compatibility Analysis Section */}
          {codes.length > 0 && (
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs sm:p-7">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h3 className="text-base font-bold text-stone-900 sm:text-lg">
                  ⚖️ {t.legalStatus}
                </h3>
                {analyzing && (
                  <span className="text-xs font-medium text-emerald-800 animate-pulse">
                    {ar ? "جارٍ التحقق القانوني..." : "Vérification en cours..."}
                  </span>
                )}
              </div>

              {analysisError ? (
                <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-900">
                  {analysisError}
                </div>
              ) : analysisData?.analysis.findings && analysisData.analysis.findings.length > 0 ? (
                <div className="mt-4 space-y-3">
                  {analysisData.analysis.findings.map((finding) => (
                    <article
                      key={finding.id}
                      className={`rounded-xl border p-4 ${severityClass(finding.severity)}`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm">
                          {ar ? finding.title_ar : finding.title_fr}
                        </h4>
                        {finding.severity === "critical" && (
                          <span className="rounded bg-rose-200 px-2 py-0.5 text-[10px] font-bold text-rose-900 uppercase">
                            {ar ? "تنبيه هام" : "Avertissement critique"}
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed">
                        {ar ? finding.detail_ar : finding.detail_fr}
                      </p>
                      {finding.article && (
                        <p className="mt-2 font-mono text-[11px] opacity-80">
                          § {finding.article}
                        </p>
                      )}
                      {finding.sourceUrl && (
                        <a
                          href={finding.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block text-xs font-semibold underline underline-offset-4"
                        >
                          {ar ? "المرجع في الجريدة الرسمية" : "Consulter le texte officiel"}
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs font-medium text-emerald-900">
                  ✓ {t.compatibleSuccess}
                </div>
              )}

              {/* Action row */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-4">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex min-h-[40px] items-center rounded-lg bg-emerald-900 px-5 text-xs font-bold text-white hover:bg-emerald-800 transition-colors shadow-xs"
                >
                  🖨️ {t.printSheet}
                </button>

                <p className="text-xs text-stone-500">
                  {ar ? "مرجع تحضيري رسمي معتمد لدى ديوان التوثيق." : "Document préparatoire conforme aux exigences notariales."}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating Bottom Basket Bar (When browsing directory and has items) */}
      {viewMode === "directory" && codes.length > 0 && (
        <div className="fixed bottom-4 inset-x-4 z-40 mx-auto max-w-4xl transition-all">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-stone-800 bg-stone-900/95 p-3.5 text-white shadow-xl backdrop-blur-md sm:p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 font-mono text-sm font-bold text-stone-950 tabular-nums">
                {codes.length}
              </span>
              <div>
                <p className="text-xs font-bold text-white sm:text-sm">
                  {codes.length} {t.selectedBadge}
                </p>
                <p className="text-[11px] text-stone-400">
                  {compatibilityStatus === "critical"
                    ? ar
                      ? "⚠️ تنبيه: تعارض قانوني يحتاج للمراجعة"
                      : "⚠️ Avertissement de cumul"
                    : compatibilityStatus === "warning"
                      ? ar
                        ? "ℹ️ استثناء مشروط / تراخيص مطلوبة"
                        : "ℹ️ Cumul conditionnel"
                      : ar
                        ? "✓ الأنشطة متوافقة"
                        : "✓ Sélection compatible"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode("project_review")}
                className="inline-flex min-h-[36px] items-center rounded-lg bg-emerald-600 px-4 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-xs"
              >
                {t.reviewProject}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="hidden sm:inline-flex min-h-[36px] items-center rounded-lg border border-stone-700 bg-stone-800 px-3 text-xs font-medium text-stone-200 hover:bg-stone-700"
              >
                🖨️
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COMPLEMENTARY ACTIVITIES MODAL */}
      <NAEComplementaryModal
        targetCode={complementaryTargetCode}
        targetActivity={targetActivityItem}
        lang={lang}
        selectedCodes={codes}
        onToggleSelect={toggleSelect}
        onClose={() => setComplementaryTargetCode(null)}
      />

      {/* PRINT-ONLY OFFICIAL PREPARATION SHEET */}
      <div data-nae-print-sheet className="hidden">
        <header className="border-b-2 border-stone-800 pb-4 text-center">
          <p className="text-sm font-bold tracking-wide text-stone-700">{t.printOffice}</p>
          <h1 className="mt-1 text-2xl font-bold text-stone-950">{t.printDocTitle}</h1>
          <p className="mt-1 text-xs text-stone-600">
            {ar ? "وثيقة عمل أولية لإعداد العقد التأسيسي والقانون الأساسي للشركة" : "Document préparatoire préalable aux statuts et à l'immatriculation"}
          </p>
        </header>

        <div className="my-5 grid grid-cols-2 gap-4 text-xs border border-stone-300 p-3 rounded">
          <div>
            <p>
              <strong>{t.printCompany}:</strong> ___________________________________________
            </p>
            <p className="mt-2">
              <strong>{t.printAddress}:</strong> ___________________________________________
            </p>
          </div>
          <div>
            <p>
              <strong>{t.printDate}:</strong> ____ / ____ / ________
            </p>
            <p className="mt-2">
              <strong>{ar ? "الشكل القانوني المقترح" : "Forme juridique"}:</strong> [ ] SARL [ ] EURL [ ] SPA [ ] Personne physique
            </p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style={{ width: "15%" }}>{ar ? "رمز النشاط" : "Code"}</th>
              <th style={{ width: "35%" }} dir="rtl">{ar ? "التسمية الرسمية (بالعربية)" : "Libellé officiel (Arabe)"}</th>
              <th style={{ width: "35%" }} dir="ltr">{ar ? "التسمية الرسمية (بالفرنسية)" : "Libellé officiel (Français)"}</th>
              <th style={{ width: "15%" }}>{ar ? "الصفة" : "Statut"}</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((code) => {
              const item =
                analysisData?.activities.find((a) => a.code === code) ??
                catalogActivities.find((a) => a.code === code);
              const isMain = primary === code;
              return (
                <tr key={code}>
                  <td dir="ltr" className="font-mono font-bold">
                    {code}
                  </td>
                  <td dir="rtl">{item ? item.label_ar : code}</td>
                  <td dir="ltr">{item ? item.label_fr : "-"}</td>
                  <td>
                    {isMain
                      ? ar
                        ? "النشاط الرئيسي ★"
                        : "Principal ★"
                      : ar
                        ? "نشاط تابع"
                        : "Secondaire"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Legal findings in print */}
        {analysisData?.analysis.findings && analysisData.analysis.findings.length > 0 && (
          <div className="mt-5 border border-stone-300 p-3 text-xs">
            <h3 className="font-bold">{t.printNotaryNotes}:</h3>
            <ul className="mt-1 list-disc list-inside space-y-1">
              {analysisData.analysis.findings.map((f) => (
                <li key={f.id}>
                  <strong>{ar ? f.title_ar : f.title_fr}:</strong>{" "}
                  {ar ? f.detail_ar : f.detail_fr}
                </li>
              ))}
            </ul>
          </div>
        )}

        <footer className="mt-8 border-t border-stone-300 pt-3 text-[10px] text-stone-500 leading-normal">
          <p>{t.sourceAttribution} — {sourceRevisionDate}.</p>
          <div className="mt-6 flex justify-between items-center text-xs">
            <p>{ar ? "توقيع وصاحب الطلب:" : "Signature du demandeur :"}</p>
            <p>{ar ? "تأشيرة وختم الديوان العمومي للتوثيق:" : "Visa et cachet de l'office notarial :"}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
