"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import {
  BookOpen,
  Briefcase,
  Printer,
  Trash2,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Lightbulb,
  FileText,
  RotateCcw,
  Ban,
} from "lucide-react";
import {
  NAE_PROJECT_DRAFT_STORAGE_KEY,
  parseNAEProjectDraft,
  type NAEProjectDraft,
} from "@/lib/nae/project-draft";
import NAEActivityCard from "./NAEActivityCard";
import NAEFilterBar from "./NAEFilterBar";
import NAEComplementaryModal from "./NAEComplementaryModal";
import type { ActivityItem, AnalysisResponseData, Finding } from "./types";

export interface NAEProjectWorkspaceProps {
  lang: "ar" | "fr";
  sourceRevisionDate: string;
  initialActivities?: ActivityItem[];
  catalogCounts?: {
    total: number;
    sectors: Record<string, number>;
    statusCounts: {
      normal: number;
      green: number;
      red: number;
    };
  };
}

function usableOfficialLabel(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.trim() !== "#NOM?";
}

function severityClass(value: Finding["severity"]) {
  return value === "critical"
    ? "border-rose-200 bg-rose-50 text-rose-950"
    : value === "warning"
      ? "border-amber-200 bg-amber-50 text-amber-950"
      : "border-gray-200 bg-gray-50 text-gray-800";
}

export default function NAEProjectWorkspace({
  lang,
  sourceRevisionDate,
  initialActivities,
  catalogCounts,
}: NAEProjectWorkspaceProps) {
  const ar = lang === "ar";

  // Catalog Browsing & Filter State
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const pageSize = 24;

  const totalCatalog = catalogCounts?.total ?? 2136;
  const sectorCounts = catalogCounts?.sectors ?? {};
  const statusCounts = catalogCounts?.statusCounts ?? { normal: 1641, green: 350, red: 145 };

  const [catalogActivities, setCatalogActivities] = useState<ActivityItem[]>(initialActivities ?? []);
  const [totalFilteredCount, setTotalFilteredCount] = useState<number>(totalCatalog);
  const [totalPages, setTotalPages] = useState<number>(Math.max(1, Math.ceil(totalCatalog / pageSize)));
  const [loadingCatalog, setLoadingCatalog] = useState<boolean>(!initialActivities);
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
  const closeComplementaryModal = useCallback(() => setComplementaryTargetCode(null), []);

  // Localization strings
  const t = ar
    ? {
        title: "مدونة الأنشطة الاقتصادية",
        intro: "استعراض مدونة النشاطات الاقتصادية (NAE)، وفحص أولي للمؤشرات التنظيمية وموانع الجمع، وإعداد ورقة عمل تحضيرية لملف التأسيس.",
        tablistAria: "أقسام مدونة الأنشطة الاقتصادية",
        tabDirectory: "استعراض المدونة",
        tabProject: "مسودة الأنشطة المقترحة",
        selectedBadge: "نشاط مختار",
        unavailableArabicLabel: "التسمية العربية غير مدرجة في المصدر",
        unavailableFrenchLabel: "التسمية الفرنسية غير مدرجة في المصدر",
        projectDescriptionLabel: "وصف موجز لمشروع المؤسسة",
        projectDescriptionPlaceholder: "مثال: بيع معدات الإعلام الآلي مع تركيبها وصيانتها وتكوين المستخدمين...",
        projectDescriptionHelp: "يُستخدم الوصف لاستخراج إشارات أولية إلى عمليات قد تكون تكميلية وفق المادة 2. لا يحدد وحده الرموز المناسبة ولا يثبت قانونية الجمع.",
        reviewProject: "مراجعة مسودة الأنشطة",
        backToDirectory: "العودة لاستعراض المدونة",
        clearAll: "تفريغ سلة الأنشطة والمسودة",
        printSheet: "طباعة ورقة عمل تحضيرية",
        primaryActivity: "النشاط الرئيسي",
        additionalActivity: "نشاط إضافي",
        setPrimary: "تعيين كرئيسي",
        remove: "حذف",
        emptyProject: "لم تختر أي نشاط بعد. استعرض المدونة وأضف الأنشطة التي تريد دراستها إلى المسودة.",
        legalStatus: "مؤشرات الوضع التنظيمي وموانع الجمع",
        compatibleSuccess: "لم تظهر مؤشرات تعارض ضمن الفحوص الأولية المحدودة؛ هذا لا يؤكد قانونياً جواز جمع الأنشطة.",
        checkingIndicators: "جارٍ مراجعة المؤشرات...",
        openSuggestions: "اقتراح أنشطة مكملة",
        prevPage: "الصفحة السابقة",
        nextPage: "الصفحة التالية",
        pageOf: "صفحة",
        of: "من",
        errorCatalog: "تعذر تحميل الأنشطة حالياً. يرجى إعادة المحاولة.",
        printDocTitle: "ورقة عمل لتعيين نشاطات مقترحة",
        printDocSubtitle: "ورقة عمل معلوماتية استرشادية لا تغني عن تحرير العقد التأسيسي ولا عن مراجعة المركز الوطني للسجل التجاري.",
        printOffice: "الديوان العمومي للتوثيق — الأستاذ لعطب محمد (موثق بوهران)",
        printCompany: "التسمية المقترحة للشركة",
        printDate: "تاريخ إعداد المسودة",
        printAddress: "المقر الاجتماعي المقترح",
        printNotaryNotes: "ملاحظات ديوان التوثيق:",
        sourceOfficialNotice: `مصدر نسخة البيانات: UpGrowth — Nomenclature CNRC 2026 (CC BY 4.0)، بتاريخ ${sourceRevisionDate}. للتحقق من الوضع الحالي يُرجع إلى Sidjilcom / CNRC.`,
        sourceDisclaimer: "البيانات لقطة مرجعية منشورة من UpGrowth وليست سجلاً حياً ولا قراراً من CNRC أو رأياً قانونياً من الموثق.",
        sourceLicenseLine: "ترخيص البيانات المرجعية: CC BY 4.0 UpGrowth.",
        legalNoticeFooter: "ورقة عمل معلوماتية استرشادية لا تغني عن تحرير العقد ولا عن المركز الوطني للسجل التجاري.",
        loadingSr: "جارٍ تحميل مدونة الأنشطة الاقتصادية...",
      }
    : {
        title: "Nomenclature des activités économiques",
        intro: "Consultation des activités économiques officielles (NAE), examen indicatif préliminaire des incompatibilités et établissement d'une fiche de travail préparatoire pour la constitution.",
        tablistAria: "Modes d'affichage de la nomenclature",
        tabDirectory: "Exploration de la nomenclature",
        tabProject: "Projet d'activités préparatoire",
        selectedBadge: "activité(s) sélectionnée(s)",
        unavailableArabicLabel: "Libellé arabe non renseigné dans la source",
        unavailableFrenchLabel: "Libellé français non renseigné dans la source",
        projectDescriptionLabel: "Brève description du projet",
        projectDescriptionPlaceholder: "Ex. : vente de matériel informatique, installation, maintenance et formation...",
        projectDescriptionHelp: "Cette description sert uniquement à relever des opérations potentiellement accessoires au sens de l’article 2. Elle ne détermine pas les codes à retenir et ne valide pas la compatibilité juridique.",
        reviewProject: "Examiner la sélection",
        backToDirectory: "Retour à la nomenclature",
        clearAll: "Vider la sélection de l'ensemble des activités",
        printSheet: "Imprimer la fiche de travail préparatoire",
        primaryActivity: "Activité principale",
        additionalActivity: "Activité additionnelle",
        setPrimary: "Définir comme principale",
        remove: "Retirer",
        emptyProject: "Aucune activité sélectionnée pour le moment. Parcourez la nomenclature pour préparer votre sélection.",
        legalStatus: "Indicateurs de cumul et observations",
        compatibleSuccess: "Aucun empêchement apparent relevé dans cette version des données.",
        checkingIndicators: "Examen des indicateurs en cours...",
        openSuggestions: "Suggérer des activités complémentaires",
        prevPage: "Page précédente",
        nextPage: "Page suivante",
        pageOf: "Page",
        of: "sur",
        errorCatalog: "Impossible de charger les activités. Veuillez réessayer.",
        printDocTitle: "Fiche de travail pour la désignation des activités proposées",
        printDocSubtitle: "Document de travail informatif ne remplaçant ni la rédaction des statuts ni les vérifications auprès du Centre National du Registre du Commerce.",
        printOffice: "Office public de notariat — Maître Lattab Mohamed (Notaire à Oran)",
        printCompany: "Dénomination sociale projetée",
        printDate: "Date d'établissement",
        printAddress: "Siège social projeté",
        printNotaryNotes: "Observations de l'office notarial :",
        sourceOfficialNotice: `Source de l’instantané : UpGrowth — Nomenclature CNRC 2026 (CC BY 4.0), datée du ${sourceRevisionDate}. Vérification actuelle : Sidjilcom / CNRC.`,
        sourceDisclaimer: "Instantané de référence publié par UpGrowth ; il ne constitue ni un registre en temps réel, ni une décision du CNRC, ni un avis juridique du notaire.",
        sourceLicenseLine: "Données de référence sous licence CC BY 4.0 UpGrowth.",
        legalNoticeFooter: "Document préparatoire informatif ne remplaçant ni les statuts ni les vérifications du CNRC.",
        loadingSr: "Chargement de la nomenclature des activités économiques...",
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
  const fetchCatalog = useCallback(async (signal: AbortSignal) => {
    setLoadingCatalog(true);
    setCatalogError("");

    try {
      const trimmedQuery = searchQuery.trim();

      // If user provided a specific search phrase, use /api/nae/search for semantic synonym ranking
      if (trimmedQuery.length >= 2 && selectedSector === "all" && selectedStatus === "all") {
        const response = await fetch("/api/nae/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q: trimmedQuery, lang, page, pageSize }),
          signal,
        });
        if (!response.ok) throw new Error("search failed");
        const payload = await response.json() as {
          results?: ActivityItem[];
          total?: number;
          totalPages?: number;
        };
        if (signal.aborted) return;
        const results = Array.isArray(payload.results) ? payload.results : [];
        const total = typeof payload.total === "number" ? payload.total : results.length;
        setCatalogActivities(results);
        setTotalFilteredCount(total);
        setTotalPages(typeof payload.totalPages === "number" ? payload.totalPages : Math.max(1, Math.ceil(total / pageSize)));
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
          signal,
        });
        if (!response.ok) throw new Error("browse failed");
        const payload = await response.json() as {
          activities?: ActivityItem[];
          total?: number;
          totalPages?: number;
        };
        if (signal.aborted) return;
        setCatalogActivities(Array.isArray(payload.activities) ? payload.activities : []);
        setTotalFilteredCount(typeof payload.total === "number" ? payload.total : 0);
        setTotalPages(typeof payload.totalPages === "number" ? payload.totalPages : 1);
      }
    } catch {
      if (!signal.aborted) setCatalogError(t.errorCatalog);
    } finally {
      if (!signal.aborted) setLoadingCatalog(false);
    }
  }, [lang, page, pageSize, searchQuery, selectedSector, selectedStatus, t.errorCatalog]);

  // Debounce and cancel stale catalog requests so slower responses cannot replace newer filters.
  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      void fetchCatalog(controller.signal);
    }, 180);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
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

  // 4. Compatibility Analysis on Selected Codes
  useEffect(() => {
    if (!ready || codes.length === 0) {
      setAnalysisData(null);
      setAnalyzing(false);
      setAnalysisError("");
      return;
    }

    const controller = new AbortController();
    let active = true;
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
        if (active) setAnalysisData(payload);
      })
      .catch((err) => {
        if (active && !(err instanceof DOMException && err.name === "AbortError")) {
          setAnalysisError(ar ? "تعذر إتمام فحص المؤشرات." : "Échec de l'examen des indicateurs.");
        }
      })
      .finally(() => {
        if (active) setAnalyzing(false);
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [ar, codes, description, lang, primary, ready]);

  // Basket Handlers
  const toggleSelect = (code: string) => {
    if (codes.includes(code)) {
      const next = codes.filter((item) => item !== code);
      setCodes(next);
      if (primary === code) setPrimary(next[0] ?? null);
      return;
    }

    setCodes([...codes, code]);
    if (!primary) setPrimary(code);
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
    <div
      className="space-y-6"
      data-nae-workspace
      aria-busy={!ready || (loadingCatalog && catalogActivities.length === 0)}
    >
      {!ready && <span className="sr-only">{t.loadingSr}</span>}

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

      {/* Main View Switcher Tabs (role="tablist" pattern with full keyboard & screen reader accessibility) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-3">
        <div
          role="tablist"
          aria-label={t.tablistAria}
          aria-orientation="horizontal"
          className="flex items-center gap-2"
          onKeyDown={(event) => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
            const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
            const currentIndex = tabs.indexOf(event.target as HTMLButtonElement);
            if (currentIndex < 0 || tabs.length < 2) return;
            event.preventDefault();
            const nextIndex = event.key === "Home"
              ? 0
              : event.key === "End"
                ? tabs.length - 1
                : (currentIndex + (ar ? (event.key === "ArrowLeft" ? 1 : -1) : (event.key === "ArrowRight" ? 1 : -1)) + tabs.length) % tabs.length;
            const nextTab = tabs[nextIndex];
            nextTab?.focus();
            setViewMode(nextTab?.id === "nae-tab-project" ? "project_review" : "directory");
          }}
        >
          <button
            type="button"
            role="tab"
            id="nae-tab-directory"
            aria-selected={viewMode === "directory"}
            aria-controls="nae-panel-directory"
            tabIndex={viewMode === "directory" ? 0 : -1}
            onClick={() => setViewMode("directory")}
            className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
              viewMode === "directory"
                ? "bg-emerald-800 text-white shadow-xs hover:bg-emerald-900"
                : "border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
            }`}
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>{t.tabDirectory}</span>
          </button>

          <button
            type="button"
            role="tab"
            id="nae-tab-project"
            aria-selected={viewMode === "project_review"}
            aria-controls="nae-panel-project"
            tabIndex={viewMode === "project_review" ? 0 : -1}
            onClick={() => setViewMode("project_review")}
            className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
              viewMode === "project_review"
                ? "bg-emerald-800 text-white shadow-xs hover:bg-emerald-900"
                : "border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
            }`}
          >
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            <span>{t.tabProject}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-mono font-bold tabular-nums ${
                codes.length > 0
                  ? compatibilityStatus === "critical"
                    ? "bg-rose-600 text-white"
                    : compatibilityStatus === "warning"
                      ? "bg-amber-500 text-white"
                      : "bg-emerald-700 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {codes.length}
            </span>
          </button>
        </div>


      </div>

      {/* VIEW MODE 1: DIRECTORY BROWSING & LIVE FILTERING (tabpanel) */}
      {viewMode === "directory" && (
        <div
          role="tabpanel"
          id="nae-panel-directory"
          aria-labelledby="nae-tab-directory"
          tabIndex={0}
          className="space-y-6 focus:outline-none"
        >
          {/* Filter Bar with server-provided manifest counts */}
          <NAEFilterBar
            lang={lang}
            selectedSector={selectedSector}
            onSelectSector={handleSectorChange}
            selectedStatus={selectedStatus}
            onSelectStatus={handleStatusChange}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            totalFilteredCount={totalFilteredCount}
            totalCatalogCount={totalCatalog}
            sectorCounts={sectorCounts}
            statusCounts={statusCounts}
            isLoading={loadingCatalog}
            onClearFilters={handleClearFilters}
          />

          {/* IN-FLOW DRAFT BASKET CARD */}
          {codes.length > 0 && (
            <section
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-emerald-50/50 p-4 shadow-xs sm:p-5"
              aria-label={t.tabProject}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-800 font-mono text-xs sm:text-sm font-bold text-white tabular-nums">
                  {codes.length}
                </span>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-950">
                    {codes.length} {t.selectedBadge}
                  </p>
                  <p className="text-xs text-gray-700 mt-0.5">
                    {analyzing
                      ? t.checkingIndicators
                      : compatibilityStatus === "critical"
                        ? ar
                          ? "تنبيه: مؤشرات لموانع جمع محتملة تحتاج مراجعة"
                          : "Attention : indicateurs d'incompatibilité à examiner"
                        : compatibilityStatus === "warning"
                          ? ar
                            ? "ملاحظة: شروط تنظيمية أو تراخيص مسبقة مطلوبة"
                            : "Note : conditions réglementaires ou autorisations requises"
                          : t.compatibleSuccess}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode("project_review")}
                  aria-label={t.reviewProject}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-xl bg-emerald-800 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors shadow-xs"
                >
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  <span>{t.reviewProject}</span>
                </button>

                <button
                  type="button"
                  onClick={clearBasket}
                  aria-label={t.clearAll}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-800 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 transition-colors"
                  title={t.clearAll}
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </section>
          )}

          {/* Catalog Activities Grid */}
          {catalogError ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-center text-xs sm:text-sm text-rose-950 font-medium">
              {catalogError}
            </div>
          ) : loadingCatalog ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-44 animate-pulse rounded-2xl border border-gray-200 bg-gray-100/60 p-5"
                />
              ))}
            </div>
          ) : catalogActivities.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
              <p className="text-sm font-semibold text-gray-800">
                {ar ? "لا توجد نشاطات مطابقة للبحث أو المرشحات المحددة." : "Aucune activité ne correspond à vos filtres."}
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                aria-label={ar ? "إعادة ضبط جميع المرشحات" : "Réinitialiser tous les filtres"}
                className="mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-xl bg-emerald-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                <span>{ar ? "إعادة ضبط جميع المرشحات" : "Réinitialiser tous les filtres"}</span>
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
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-4">
              <div className="text-xs text-gray-600 font-medium">
                {t.pageOf}{" "}
                <strong className="font-mono tabular-nums text-gray-950 font-bold">{page}</strong> {t.of}{" "}
                <span className="font-mono tabular-nums font-bold text-gray-900">{totalPages}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1 || loadingCatalog}
                  aria-label={t.prevPage}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-4 text-xs font-semibold text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 transition-colors"
                >
                  {ar ? (
                    <>
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      <span>{t.prevPage}</span>
                    </>
                  ) : (
                    <>
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                      <span>{t.prevPage}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages || loadingCatalog}
                  aria-label={t.nextPage}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-4 text-xs font-semibold text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 transition-colors"
                >
                  {ar ? (
                    <>
                      <span>{t.nextPage}</span>
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <span>{t.nextPage}</span>
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW MODE 2: PROJECT WORKSPACE & INDICATOR REVIEW (tabpanel) */}
      {viewMode === "project_review" && (
        <div
          role="tabpanel"
          id="nae-panel-project"
          aria-labelledby="nae-tab-project"
          tabIndex={0}
          className="space-y-6 focus:outline-none"
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-lg font-bold text-gray-950 sm:text-xl">{t.tabProject}</h2>
                <p className="mt-1 text-xs text-gray-600">
                  {codes.length} {t.selectedBadge}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode("directory")}
                  aria-label={t.backToDirectory}
                  className="inline-flex min-h-11 items-center rounded-xl border border-gray-300 bg-white px-4 text-xs font-semibold text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
                >
                  {t.backToDirectory}
                </button>
                {codes.length > 0 && (
                  <button
                    type="button"
                    onClick={clearBasket}
                    aria-label={t.clearAll}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-3.5 text-xs font-semibold text-rose-800 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                    <span>{t.clearAll}</span>
                  </button>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="nae-project-description" className="mb-2 block text-xs font-bold text-gray-800">
                {t.projectDescriptionLabel}
              </label>
              <textarea
                id="nae-project-description"
                value={description}
                onChange={(event) => setDescription(event.target.value.slice(0, 180))}
                maxLength={180}
                rows={3}
                dir={ar ? "rtl" : "ltr"}
                placeholder={t.projectDescriptionPlaceholder}
                className="w-full rounded-xl border border-gray-300 bg-white p-3 text-sm leading-6 text-gray-950 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                aria-describedby="nae-project-description-help"
              />
              <div className="mt-1 flex flex-wrap items-start justify-between gap-2 text-xs text-gray-600">
                <p id="nae-project-description-help" className="max-w-3xl leading-5">{t.projectDescriptionHelp}</p>
                <span className="shrink-0 font-mono tabular-nums" dir="ltr">{description.length}/180</span>
              </div>
            </div>

            {/* Selected Activities List */}
            {codes.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-sm font-semibold text-gray-700">{t.emptyProject}</p>
                <button
                  type="button"
                  onClick={() => setViewMode("directory")}
                  aria-label={t.backToDirectory}
                  className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-emerald-800 px-5 text-xs font-bold text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
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

                  const ariaPrimaryBtn = ar ? `تعيين النشاط ${code} كنشاط رئيسي` : `Définir l'activité ${code} comme principale`;
                  const ariaSuggestionsBtn = ar ? `اقتراح أنشطة مكملة للنشاط ${code}` : `Suggérer des activités complémentaires pour l'activité ${code}`;
                  const ariaRemoveBtn = ar ? `حذف النشاط ${code} من المسودة` : `Retirer l'activité ${code} du projet`;

                  return (
                    <div
                      key={code}
                      className={`flex flex-col justify-between gap-3 rounded-2xl border p-4 transition-colors sm:flex-row sm:items-center ${
                        isItemPrimary
                          ? "border-amber-300 bg-amber-50/30"
                          : "border-gray-200 bg-gray-50/60"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className="inline-flex items-center rounded-lg border border-emerald-900/15 bg-emerald-50 px-2 py-0.5 font-mono text-xs font-bold tabular-nums text-emerald-950"
                            dir="ltr"
                          >
                            {code}
                          </span>
                          {isItemPrimary && (
                            <span className="rounded-md bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-950 border border-amber-300">
                              {t.primaryActivity}
                            </span>
                          )}
                          {item && (
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
                              <span>{ar ? item.statusInfo.label : (item.status === "red" ? "Bloquée" : item.statusInfo.label)}</span>
                            </span>
                          )}
                        </div>

                        <p dir={ar ? "rtl" : "ltr"} lang={ar ? "ar" : "fr"} className="mt-1.5 text-sm font-bold text-gray-950">
                          {item
                            ? (ar
                              ? (usableOfficialLabel(item.label_ar) ? item.label_ar : t.unavailableArabicLabel)
                              : (usableOfficialLabel(item.label_fr) ? item.label_fr : t.unavailableFrenchLabel))
                            : code}
                        </p>
                        <p dir={ar ? "ltr" : "rtl"} lang={ar ? "fr" : "ar"} className="text-xs text-gray-700">
                          {item
                            ? (ar
                              ? (usableOfficialLabel(item.label_fr) ? item.label_fr : t.unavailableFrenchLabel)
                              : (usableOfficialLabel(item.label_ar) ? item.label_ar : t.unavailableArabicLabel))
                            : ""}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {!isItemPrimary && (
                          <button
                            type="button"
                            onClick={() => handleSetPrimary(code)}
                            aria-label={ariaPrimaryBtn}
                            className="inline-flex min-h-11 items-center rounded-xl border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-800 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
                          >
                            {t.setPrimary}
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => setComplementaryTargetCode(code)}
                          aria-label={ariaSuggestionsBtn}
                          className="inline-flex min-h-11 items-center gap-1 rounded-xl border border-gray-200 bg-white px-3 text-xs font-medium text-gray-800 hover:text-emerald-950 hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
                          title={t.openSuggestions}
                        >
                          <Lightbulb className="h-4 w-4 text-amber-600" aria-hidden="true" />
                          <span className="hidden sm:inline">{t.openSuggestions}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleSelect(code)}
                          aria-label={ariaRemoveBtn}
                          className="inline-flex min-h-11 items-center rounded-xl border border-gray-200 bg-white px-3 text-xs font-semibold text-rose-800 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 transition-colors"
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

          {/* Indicators and Observations Section */}
          {codes.length > 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs sm:p-7">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-gray-800" aria-hidden="true" />
                  <h3 className="text-base font-bold text-gray-950 sm:text-lg">
                    {t.legalStatus}
                  </h3>
                </div>
                {analyzing && (
                  <span className="text-xs font-semibold text-emerald-800 animate-pulse">
                    {t.checkingIndicators}
                  </span>
                )}
              </div>

              {analysisError ? (
                <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-950 font-medium">
                  {analysisError}
                </div>
              ) : analyzing ? (
                <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-xs font-medium text-gray-700">
                  {t.checkingIndicators}
                </div>
              ) : analysisData?.analysis.findings && analysisData.analysis.findings.length > 0 ? (
                <div className="mt-4 space-y-3">
                  {analysisData.analysis.findings.map((finding) => (
                    <article
                      key={finding.id}
                      className={`rounded-xl border p-4 ${severityClass(finding.severity)}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {finding.severity === "critical" ? (
                            <AlertCircle className="h-4 w-4 text-rose-700 shrink-0" aria-hidden="true" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-amber-700 shrink-0" aria-hidden="true" />
                          )}
                          <h4 className="font-bold text-xs sm:text-sm">
                            {ar ? finding.title_ar : finding.title_fr}
                          </h4>
                        </div>
                        {finding.severity === "critical" && (
                          <span className="rounded-md bg-rose-200/90 px-2 py-0.5 text-xs font-bold text-rose-950">
                            {ar ? "تنبيه" : "Attention"}
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed">
                        {ar ? finding.detail_ar : finding.detail_fr}
                      </p>
                      {finding.article && (
                        <p className="mt-2 font-mono text-xs opacity-90">
                          § {finding.article}
                        </p>
                      )}
                      {finding.sourceUrl && (
                        <a
                          href={finding.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block text-xs font-semibold underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                        >
                          {ar ? "المرجع في الجريدة الرسمية" : "Consulter le texte officiel"}
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs font-medium text-emerald-950">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" aria-hidden="true" />
                  <span>{t.compatibleSuccess}</span>
                </div>
              )}

              {/* Action row */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={() => window.print()}
                  aria-label={t.printSheet}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-emerald-800 px-5 text-xs font-bold text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors shadow-xs"
                >
                  <Printer className="h-4 w-4" aria-hidden="true" />
                  <span>{t.printSheet}</span>
                </button>

                <p className="text-xs text-gray-600 max-w-md leading-relaxed">
                  {t.printDocSubtitle}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* COMPLEMENTARY ACTIVITIES MODAL */}
      <NAEComplementaryModal
        targetCode={complementaryTargetCode}
        targetActivity={targetActivityItem}
        lang={lang}
        selectedCodes={codes}
        onToggleSelect={toggleSelect}
        onClose={closeComplementaryModal}
      />

      {/* PRINT-ONLY WORKING WORKSHEET */}
      <div data-nae-print-sheet className="hidden">
        <header className="border-b-2 border-gray-800 pb-4 text-center">
          <p className="text-sm font-bold tracking-wide text-gray-800">{t.printOffice}</p>
          <h1 className="mt-1 text-2xl font-bold text-gray-950">{t.printDocTitle}</h1>
          <p className="mt-1 text-xs text-gray-700 max-w-2xl mx-auto">
            {t.printDocSubtitle}
          </p>
          <p className="mt-1 text-xs text-gray-600">
            {t.sourceOfficialNotice}
          </p>
        </header>

        <div className="my-5 grid grid-cols-2 gap-4 text-xs border border-gray-300 p-3 rounded">
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
              <strong>{ar ? "الشكل القانوني المقترح" : "Forme juridique proposée"}:</strong>{" "}
              {ar
                ? "[ ] ش.ذ.م.م (SARL)   [ ] ش.ذ.ش.و (EURL)   [ ] ش.مساهمة (SPA)   [ ] شخص طبيعي (Personne physique)"
                : "[ ] SARL   [ ] EURL   [ ] SPA   [ ] Personne physique"}
            </p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style={{ width: "15%" }}>{ar ? "رمز النشاط" : "Code"}</th>
              <th style={{ width: "35%" }} dir="rtl">{ar ? "التسمية (بالعربية)" : "Libellé (Arabe)"}</th>
              <th style={{ width: "35%" }} dir="ltr">{ar ? "التسمية (بالفرنسية)" : "Libellé (Français)"}</th>
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
                  <td dir="rtl">{item ? (usableOfficialLabel(item.label_ar) ? item.label_ar : t.unavailableArabicLabel) : "-"}</td>
                  <td dir="ltr">{item ? (usableOfficialLabel(item.label_fr) ? item.label_fr : t.unavailableFrenchLabel) : "-"}</td>
                  <td>
                    {isMain
                      ? ar
                        ? "النشاط الرئيسي"
                        : "Principal"
                      : ar
                        ? "نشاط تابع"
                        : "Secondaire"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Informative observations box in print */}
        <div className="mt-5 border border-gray-300 p-3 text-xs">
          <h3 className="font-bold">{t.printNotaryNotes}</h3>
          {analysisData?.analysis.findings && analysisData.analysis.findings.length > 0 ? (
            <ul className="mt-1 list-disc list-inside space-y-1">
              {analysisData.analysis.findings.map((f) => (
                <li key={f.id}>
                  <strong>{ar ? f.title_ar : f.title_fr}:</strong>{" "}
                  {ar ? f.detail_ar : f.detail_fr}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-gray-700">{t.sourceDisclaimer}</p>
          )}
          <div className="mt-6 border-t border-dashed border-gray-300 pt-2 text-xs text-gray-600">
            {t.sourceDisclaimer}
          </div>
        </div>

        <footer className="mt-6 border-t border-gray-300 pt-3 text-xs text-gray-600 leading-normal">
          <div className="flex justify-between items-center text-xs">
            <p>{ar ? "توقيع صاحب المبادرة بالطلب:" : "Signature du demandeur :"}</p>
            <p className="min-w-[200px] border-b border-gray-400 pb-1 text-transparent">.</p>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            {t.sourceLicenseLine}
          </p>
        </footer>
      </div>
    </div>
  );
}
