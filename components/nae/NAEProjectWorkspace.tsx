"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Lang = "ar" | "fr";
type StatusInfo = { label: string; className: string };
type Hit = {
  code: string;
  label_ar: string;
  label_fr: string;
  status: string;
  statusInfo: StatusInfo;
  matchedFields: string[];
  usedSynonym: boolean;
};
type ProjectActivity = {
  code: string;
  label_ar: string;
  label_fr: string;
  status: string;
  statusInfo: StatusInfo;
};
type Finding = {
  id: string;
  severity: "info" | "warning" | "critical";
  title_ar: string;
  title_fr: string;
  detail_ar: string;
  detail_fr: string;
  article?: string;
  sourceUrl?: string;
};
type ResponseData = {
  activities: ProjectActivity[];
  analysis: {
    selectedCount: number;
    sectors: string[];
    sectorLabels?: string[];
    primaryCode: string | null;
    findings: Finding[];
  };
};
type Draft = { version: 1; description: string; codes: string[]; primaryCode: string | null };

const KEY = "lattab.nae.project.v1";

function usableLabel(value: string | null | undefined): value is string {
  return Boolean(value?.trim()) && value.trim() !== "#NOM?";
}
function fieldName(field: string, ar: boolean) {
  const names: Record<string, [string, string]> = {
    code: ["الرمز", "code"],
    label_ar: ["التسمية العربية", "libellé arabe"],
    label_fr: ["التسمية الفرنسية", "libellé français"],
    contenue_fr: ["محتوى النشاط", "contenu"],
    accessoires_fr: ["الأنشطة الإضافية", "activités accessoires"],
  };
  return names[field]?.[ar ? 0 : 1] ?? field;
}
function severityClass(value: Finding["severity"]) {
  return value === "critical"
    ? "border-rose-200 bg-rose-50"
    : value === "warning"
      ? "border-amber-200 bg-amber-50"
      : "border-gray-200 bg-gray-50";
}

export default function NAEProjectWorkspace({
  lang,
  sourceRevisionDate,
}: {
  lang: Lang;
  sourceRevisionDate: string;
}) {
  const ar = lang === "ar";
  const [description, setDescription] = useState("");
  const [codes, setCodes] = useState<string[]>([]);
  const [primary, setPrimary] = useState<string | null>(null);
  const [results, setResults] = useState<Hit[]>([]);
  const [searchedQuery, setSearchedQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [data, setData] = useState<ResponseData | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState("");
  const [ready, setReady] = useState(false);

  const t = ar
    ? {
        title: "إعداد نشاطات المشروع",
        intro: "اكتب وصفاً بسيطاً لما ستقوم به المؤسسة. ابحث بالرمز أو التسمية أو محتوى النشاط، ثم أضف النشاطات المناسبة إلى قائمتك.",
        placeholder: "مثال: بيع الحواسيب وملحقاتها وصيانة الأجهزة وتركيب الشبكات",
        results: "نتائج البحث",
        noResults: "لا توجد نتائج مطابقة. جرّب كلمة أخرى أو أدخل رمز النشاط.",
        searching: "جارٍ البحث…",
        evidence: "سبب المطابقة",
        synonym: "تطابق عبر مرادف",
        add: "إضافة",
        added: "مضاف",
        project: "نشاطات المشروع",
        empty: "ابدأ بالبحث عن النشاطات التي ستزاولها المؤسسة.",
        primary: "النشاط الرئيسي",
        additional: "نشاط إضافي",
        makePrimary: "تعيينه رئيسياً",
        remove: "إزالة",
        clear: "مسح القائمة",
        findings: "ملاحظات",
        noFindings: "لا توجد ملاحظات إضافية وفق القواعد الحالية.",
        print: "طباعة ورقة التحضير",
        source: "مصدر البيانات",
        sourceNote: "مسودة محلية محفوظة في هذا المتصفح.",
        printTitle: "ورقة تحضير نشاطات المؤسسة",
        company: "اسم الشركة أو المؤسسة",
        date: "التاريخ",
        code: "الرمز",
        arabic: "التسمية الرسمية بالعربية",
        french: "التسمية الرسمية بالفرنسية",
        role: "الصفة",
        mainRole: "رئيسي",
        additionalRole: "إضافي",
        notAvailable: "غير متاح في المصدر",
        dataNote: "ورقة تحضيرية مرجعية؛ تُراجع التسميات والحالة لدى CNRC والجهات المختصة قبل اعتماد ملف التسجيل.",
        sourceFootnote: "المصدر: UpGrowth — NAE 2026، رخصة CC BY 4.0.",
        error: "تعذر إكمال الطلب. أعد المحاولة.",
      }
    : {
        title: "Préparer les activités du projet",
        intro: "Décrivez simplement les opérations prévues. Recherchez par code, libellé ou contenu, puis ajoutez les activités retenues à votre liste.",
        placeholder: "Ex. : vente d’ordinateurs et accessoires, maintenance et installation de réseaux",
        results: "Résultats",
        noResults: "Aucun résultat correspondant. Essayez un autre terme ou saisissez le code.",
        searching: "Recherche…",
        evidence: "Correspondance",
        synonym: "Correspondance par synonyme",
        add: "Ajouter",
        added: "Ajoutée",
        project: "Activités du projet",
        empty: "Commencez par rechercher les activités que l’entreprise exercera.",
        primary: "Activité principale",
        additional: "Activité additionnelle",
        makePrimary: "Définir comme principale",
        remove: "Retirer",
        clear: "Vider la liste",
        findings: "Points à vérifier",
        noFindings: "Aucun point supplémentaire selon les règles actuelles.",
        print: "Imprimer la fiche préparatoire",
        source: "Source des données",
        sourceNote: "Brouillon conservé localement dans ce navigateur.",
        printTitle: "Fiche préparatoire des activités de l’entreprise",
        company: "Dénomination de l’entreprise",
        date: "Date",
        code: "Code",
        arabic: "Libellé officiel arabe",
        french: "Libellé officiel français",
        role: "Rôle",
        mainRole: "Principale",
        additionalRole: "Additionnelle",
        notAvailable: "Non renseigné dans la source",
        dataNote: "Fiche préparatoire indicative ; vérifiez les libellés et la situation auprès du CNRC et des autorités compétentes avant le dépôt.",
        sourceFootnote: "Source : UpGrowth — NAE 2026, licence CC BY 4.0.",
        error: "La requête a échoué. Veuillez réessayer.",
      };

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(KEY) ?? "null") as Partial<Draft> | null;
      if (saved?.version === 1 && Array.isArray(saved.codes)) {
        const next = [...new Set(saved.codes.filter((value): value is string =>
          typeof value === "string" && /^\d{6}$/.test(value)
        ))];
        setCodes(next);
        setPrimary(
          typeof saved.primaryCode === "string" && next.includes(saved.primaryCode)
            ? saved.primaryCode
            : next[0] ?? null,
        );
        setDescription(typeof saved.description === "string" ? saved.description.slice(0, 180) : "");
      }
    } catch {
      // Ignore an invalid local draft.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      const draft: Draft = {
        version: 1,
        description,
        codes,
        primaryCode: primary && codes.includes(primary) ? primary : codes[0] ?? null,
      };
      window.localStorage.setItem(KEY, JSON.stringify(draft));
    } catch {
      setSearchError(ar ? "تعذر حفظ المسودة محلياً." : "Impossible d’enregistrer le brouillon localement.");
    }
  }, [ar, codes, description, primary, ready]);

  // One integrated search: query updates immediately as the user types.
  useEffect(() => {
    if (!ready) return;
    const query = description.trim();
    if (query.length < 2) {
      setResults([]);
      setSearchedQuery(query);
      setSearching(false);
      setSearchError("");
      return;
    }

    const controller = new AbortController();
    let active = true;
    const timer = window.setTimeout(async () => {
      setSearching(true);
      setSearchError("");
      try {
        const response = await fetch("/api/nae/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q: query, lang }),
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("search");
        const payload = (await response.json()) as { results?: Hit[] };
        if (active) {
          setResults(Array.isArray(payload.results) ? payload.results : []);
          setSearchedQuery(query);
        }
      } catch (error) {
        if (active && !(error instanceof DOMException && error.name === "AbortError")) {
          setResults([]);
          setSearchedQuery(query);
          setSearchError(t.error);
        }
      } finally {
        if (active) setSearching(false);
      }
    }, 180);

    return () => {
      active = false;
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [description, lang, ready, t.error]);

  // Re-run the preliminary checks automatically whenever the description or list changes.
  useEffect(() => {
    if (!ready) return;
    if (!codes.length) {
      setData(null);
      setAnalyzing(false);
      setAnalysisError("");
      return;
    }

    const controller = new AbortController();
    let active = true;
    const timer = window.setTimeout(async () => {
      setAnalyzing(true);
      setAnalysisError("");
      try {
        const response = await fetch("/api/nae/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ codes, description, primaryCode: primary, lang }),
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("analysis");
        const payload = (await response.json()) as ResponseData;
        if (active) setData(payload);
      } catch (error) {
        if (active && !(error instanceof DOMException && error.name === "AbortError")) {
          setAnalysisError(t.error);
        }
      } finally {
        if (active) setAnalyzing(false);
      }
    }, 180);

    return () => {
      active = false;
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [codes, description, lang, primary, ready, t.error]);

  const activityByCode = useMemo(
    () => new Map((data?.activities ?? []).map((item) => [item.code, item])),
    [data],
  );
  const query = description.trim();
  const visibleResults = searchedQuery === query && query.length >= 2 ? results : [];

  function add(code: string) {
    setCodes((current) => current.includes(code) ? current : [...current, code]);
    setPrimary((current) => current ?? code);
  }
  function remove(code: string) {
    setCodes((current) => current.filter((item) => item !== code));
    setPrimary((current) => current === code ? codes.find((item) => item !== code) ?? null : current);
  }
  function clear() {
    setCodes([]);
    setPrimary(null);
  }

  const printReady = Boolean(data && data.activities.length === codes.length && !analyzing);

  return (
    <section
      data-nae-project-workspace
      className="mb-8 rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm sm:p-6"
      aria-labelledby="nae-project-title"
    >
      <style>{`
        @page { size: A4; margin: 14mm; }
        @media print {
          body:has([data-nae-print-sheet]) * { visibility: hidden !important; }
          [data-nae-print-sheet], [data-nae-print-sheet] * { visibility: visible !important; }
          [data-nae-print-sheet] {
            display: block !important;
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
            color: #111 !important;
            border: 0 !important;
            box-shadow: none !important;
          }
          [data-nae-print-sheet] table { width: 100%; border-collapse: collapse; }
          [data-nae-print-sheet] th, [data-nae-print-sheet] td {
            border: 1px solid #777 !important;
            padding: 8px !important;
            vertical-align: top;
          }
        }
      `}</style>

      <div className="max-w-3xl">
        <h2 id="nae-project-title" className="text-xl font-bold text-gray-950">{t.title}</h2>
        <p className="mt-2 text-sm leading-7 text-gray-600">{t.intro}</p>
      </div>

      <div className="mt-5">
        <label htmlFor="nae-project-description" className="sr-only">{t.placeholder}</label>
        <input
          id="nae-project-description"
          type="search"
          value={description}
          onChange={(event) => setDescription(event.target.value.slice(0, 180))}
          placeholder={t.placeholder}
          maxLength={180}
          autoComplete="off"
          dir="auto"
          aria-controls="nae-project-search-results"
          className="min-h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/20"
        />
        <p className="mt-2 min-h-5 text-xs text-gray-500" aria-live="polite">
          {searching ? t.searching : query.length < 2 ? "" : ""}
        </p>
      </div>

      {searchError && <p role="alert" className="mt-2 text-sm text-rose-800">{searchError}</p>}

      {visibleResults.length > 0 && (
        <div id="nae-project-search-results" className="mt-4" aria-live="polite">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="font-bold text-gray-900">{t.results}</h3>
            <span className="text-xs text-gray-500">{visibleResults.length}</span>
          </div>
          <div className="divide-y divide-gray-100 rounded-xl border border-gray-200">
            {visibleResults.map((hit) => {
              const exists = codes.includes(hit.code);
              return (
                <article key={hit.code} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-sm font-bold text-emerald-900" dir="ltr">{hit.code}</span>
                      <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${hit.statusInfo.className}`}>
                        {hit.statusInfo.label}
                      </span>
                    </div>
                    <p dir="rtl" lang="ar" className="mt-2 text-sm font-semibold leading-7 text-gray-900">
                      {usableLabel(hit.label_ar) ? hit.label_ar : t.notAvailable}
                    </p>
                    <p dir="ltr" lang="fr" className="mt-0.5 text-sm leading-6 text-gray-700">
                      {usableLabel(hit.label_fr) ? hit.label_fr : (ar ? t.notAvailable : t.notAvailable)}
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      {t.evidence}: {hit.matchedFields.map((field) => fieldName(field, ar)).join(ar ? "، " : ", ")}
                      {hit.usedSynonym ? ` · ${t.synonym}` : ""}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Link
                      href={`/${ar ? "" : "fr/"}nae/${hit.code}`}
                      className="inline-flex min-h-9 items-center rounded-lg border border-gray-300 px-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      {ar ? "البطاقة" : "Fiche"}
                    </Link>
                    <button
                      type="button"
                      onClick={() => add(hit.code)}
                      disabled={exists}
                      className="inline-flex min-h-9 items-center rounded-lg bg-emerald-800 px-3 text-sm font-semibold text-white hover:bg-emerald-900 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-700"
                    >
                      {exists ? t.added : t.add}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {query.length >= 2 && searchedQuery === query && !searching && visibleResults.length === 0 && !searchError && (
        <p className="mt-4 rounded-lg border border-dashed border-gray-300 px-4 py-5 text-center text-sm text-gray-600">
          {t.noResults}
        </p>
      )}

      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-bold text-gray-900">
            {t.project} <span className="font-normal text-gray-500">({codes.length})</span>
          </h3>
          {codes.length > 0 && (
            <button type="button" onClick={clear} className="text-sm font-semibold text-gray-600 underline underline-offset-4">
              {t.clear}
            </button>
          )}
        </div>

        {codes.length === 0 ? (
          <p className="mt-4 rounded-lg bg-gray-50 px-4 py-5 text-sm leading-6 text-gray-600">{t.empty}</p>
        ) : (
          <div className="mt-4 divide-y divide-gray-100 rounded-xl border border-gray-200">
            {codes.map((code) => {
              const item = activityByCode.get(code);
              return (
                <div key={code} className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-900" dir="ltr">{code}</span>
                      {item && (
                        <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${item.statusInfo.className}`}>
                          {item.statusInfo.label}
                        </span>
                      )}
                      {primary === code && <span className="text-xs font-semibold text-emerald-800">{t.primary}</span>}
                    </div>
                    <p dir="rtl" lang="ar" className="mt-1 text-sm font-semibold leading-6 text-gray-900">
                      {item ? (usableLabel(item.label_ar) ? item.label_ar : t.notAvailable) : code}
                    </p>
                    <p dir="ltr" lang="fr" className="text-sm leading-6 text-gray-700">
                      {item ? (usableLabel(item.label_fr) ? item.label_fr : t.notAvailable) : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {primary !== code && (
                      <button type="button" onClick={() => setPrimary(code)} className="text-xs font-semibold text-emerald-800 underline underline-offset-4">
                        {t.makePrimary}
                      </button>
                    )}
                    <button type="button" onClick={() => remove(code)} className="text-xs font-semibold text-gray-500 underline underline-offset-4">
                      {t.remove}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {analysisError && <p role="alert" className="mt-3 text-sm text-rose-800">{analysisError}</p>}
        {data && (
          <section className="mt-5 border-t border-gray-200 pt-4" aria-live="polite">
            <div className="mb-3 flex items-center gap-2">
              <h3 className="font-bold text-gray-900">{t.findings}</h3>
              {analyzing && <span className="text-xs text-gray-500">{t.searching}</span>}
            </div>
            {data.analysis.findings.length > 0 ? (
              <div className="space-y-3">
                {data.analysis.findings.map((finding) => (
                  <article key={finding.id} className={`rounded-xl border p-4 ${severityClass(finding.severity)}`}>
                    <h4 className="font-semibold text-gray-900">{ar ? finding.title_ar : finding.title_fr}</h4>
                    <p className="mt-1 text-sm leading-7 text-gray-800">{ar ? finding.detail_ar : finding.detail_fr}</p>
                    {finding.article && <p className="mt-2 text-xs font-semibold text-gray-600">{finding.article}</p>}
                    {finding.sourceUrl && (
                      <a href={finding.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs font-semibold text-emerald-800 underline underline-offset-4">
                        {ar ? "النص القانوني" : "Texte juridique"}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-600">{t.noFindings}</p>
            )}
          </section>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            disabled={!printReady}
            className="min-h-10 rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t.print}
          </button>
          {analyzing && <span className="text-xs text-gray-500">{ar ? "يتم تحديث المراجعة تلقائياً…" : "Mise à jour automatique…"}</span>}
        </div>
      </div>

      {data && (
        <div data-nae-print-sheet className="hidden">
          <header className="mb-6 border-b-2 border-gray-800 pb-4 text-center">
            <h1 className="text-2xl font-bold">{t.printTitle}</h1>
            <p className="mt-1 text-sm">{ar ? "ورقة عمل أولية لإعداد القانون الأساسي" : "Document de travail préalable à la rédaction des statuts"}</p>
          </header>
          <div className="mb-6 grid grid-cols-2 gap-6 text-sm">
            <p>{t.company} : __________________________________________</p>
            <p>{t.date} : ____ / ____ / ______</p>
          </div>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th>{t.code}</th>
                <th dir="rtl">{t.arabic}</th>
                <th dir="ltr">{t.french}</th>
                <th>{t.role}</th>
              </tr>
            </thead>
            <tbody>
              {data.activities.map((item) => (
                <tr key={item.code}>
                  <td dir="ltr" className="font-mono">{item.code}</td>
                  <td dir="rtl" lang="ar">{usableLabel(item.label_ar) ? item.label_ar : t.notAvailable}</td>
                  <td dir="ltr" lang="fr">{usableLabel(item.label_fr) ? item.label_fr : t.notAvailable}</td>
                  <td>{item.code === data.analysis.primaryCode ? t.mainRole : t.additionalRole}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer className="mt-6 border-t pt-3 text-xs leading-5">
            <p>{t.dataNote}</p>
            <p className="mt-1">{t.sourceFootnote} {sourceRevisionDate}. https://www.upgrowth.dz/ar/datasets/cnrc-2026</p>
          </footer>
        </div>
      )}

      <footer className="mt-6 border-t border-gray-100 pt-4 text-xs leading-6 text-gray-500">
        <p>
          {t.source}:{" "}
          <a href="https://www.upgrowth.dz/ar/datasets/cnrc-2026" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
            UpGrowth — NAE 2026
          </a>{" "}
          (CC BY 4.0), {sourceRevisionDate}.
        </p>
        <p>{t.sourceNote}</p>
      </footer>
    </section>
  );
}
