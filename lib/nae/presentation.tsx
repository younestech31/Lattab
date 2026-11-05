import Link from "next/link";
import NAECompareButton from "@/components/nae/NAECompareButton";
import NAEActivityActions from "@/components/nae/NAEActivityActions";
import NAECompareRestore from "@/components/nae/NAECompareRestore";
import NAEPrintButton from "@/components/nae/NAEPrintButton";
import UnifiedPageHeader from "@/components/ui/UnifiedPageHeader";
import { getNAEActivities, getNAEActivityByCode, getNAESearchIndex } from "@/lib/nae/data";
import { buildNAETaxonomy, filterNAEByTaxonomy, searchNAE, type NAESearchLanguage } from "@/lib/nae/search";
import { NAE_SECTORS, type NAESectorCode } from "@/lib/nae/sectors";
import type { NAEActivity } from "@/lib/nae/schema";
import { normalizeNAECompareCodes } from "@/lib/nae/comparison";
import { getNAEActivityTitle, type NAEPageLanguage } from "./seo";

export type { NAEPageLanguage } from "./seo";

function first(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}
function isSectorCode(value: string): value is NAESectorCode {
  return Object.prototype.hasOwnProperty.call(NAE_SECTORS, value);
}
function usable(value: string | null | undefined): value is string {
  return Boolean(value?.trim()) && value?.trim() !== "#NOM?";
}
function localLabel(activity: NAEActivity, lang: NAEPageLanguage): string {
  const primary = lang === "ar" ? activity.label_ar : activity.label_fr;
  const alternate = lang === "ar" ? activity.label_fr : activity.label_ar;
  return usable(primary) ? primary : usable(alternate) ? alternate : activity.code;
}

export function NAEExplorerPage({
  lang,
  params,
}: {
  lang: NAEPageLanguage;
  params: { q?: string | string[]; sector?: string | string[]; group?: string | string[]; subgroup?: string | string[]; compare?: string | string[]; page?: string | string[] };
}) {
  const ar = lang === "ar";
  const action = ar ? "/nae" : "/fr/nae";
  const q = first(params.q).trim();
  const compareParamPresent = params.compare !== undefined;
  const compareCodes = normalizeNAECompareCodes(params.compare, (code) => Boolean(getNAEActivityByCode(code)));
  const comparedActivities = compareCodes.map(getNAEActivityByCode).filter((a): a is NAEActivity => Boolean(a));

  const taxonomy = buildNAETaxonomy(getNAEActivities());
  const rawSector = first(params.sector);
  const sector = isSectorCode(rawSector) ? rawSector : undefined;
  const sectorNode = taxonomy.find((item) => item.code === sector);
  const groups = sectorNode?.groups ?? [];
  const rawGroup = first(params.group);
  const group = groups.some((item) => item.code === rawGroup) ? rawGroup : undefined;
  const subgroups = groups.find((item) => item.code === group)?.subgroups ?? [];
  const rawSubgroup = first(params.subgroup);
  const subgroup = subgroups.some((item) => item.code === rawSubgroup) ? rawSubgroup : undefined;

  const filters = {
    ...(sector ? { sectorCode: sector } : {}),
    ...(group ? { groupCode: group } : {}),
    ...(subgroup ? { subgroupCode: subgroup } : {}),
  };
  const hasFilters = Boolean(sector || group || subgroup);
  const resultItems = q
    ? searchNAE(getNAESearchIndex(lang as NAESearchLanguage), q, { ...filters, language: lang }).map(({ activity }) => ({ activity }))
    : hasFilters
      ? filterNAEByTaxonomy(getNAEActivities(), filters).map((activity) => ({ activity }))
      : [];

  const pageSize = 30;
  const requestedPage = Number.parseInt(first(params.page), 10);
  const totalPages = Math.max(1, Math.ceil(resultItems.length / pageSize));
  const currentPage = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? Math.min(requestedPage, totalPages) : 1;
  const shown = resultItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const baseParams = new URLSearchParams();
  if (q) baseParams.set("q", q);
  if (sector) baseParams.set("sector", sector);
  if (group) baseParams.set("group", group);
  if (subgroup) baseParams.set("subgroup", subgroup);
  const baseHref = baseParams.size ? action + "?" + baseParams.toString() : action;
  const paginationHref = (page: number) => {
    const next = new URLSearchParams(baseParams);
    if (compareParamPresent && compareCodes.length) next.set("compare", compareCodes.join(","));
    next.set("page", String(page));
    return action + "?" + next.toString();
  };

  const t = ar ? {
    title: "دليل النشاطات الاقتصادية", description: "ابحث برمز النشاط أو اسمه، أو تصفّح حسب القطاع.",
    search: "ابحث عن نشاط أو رمز", placeholder: "مثال: 611001 أو تأجير العقارات", submit: "بحث",
    filters: "تصفية حسب التصنيف", sector: "القطاع", allSectors: "جميع القطاعات",
    group: "المجموعة", allGroups: "جميع المجموعات", subgroup: "المجموعة الفرعية",
    allSubgroups: "جميع المجموعات الفرعية", apply: "تطبيق", reset: "مسح",
    sectors: "تصفّح القطاعات", results: "نتائج البحث", result: "نتيجة",
    open: "عرض البطاقة", empty: "لم نعثر على نتائج. جرّب كلمة أخرى أو تحقق من الرمز.",
    previous: "السابق", next: "التالي", selected: "المقارنة", clearCompare: "مسح المقارنة",
    compareHint: "اختر نشاطين أو ثلاثة لعرض الفروق بينها.", compareRows: "بيان المقارنة",
    content: "محتوى النشاط", accessories: "الأنشطة الإضافية", tutelle: "الجهة الوصية",
    authorization: "نوع الترخيص", references: "المراجع النصية",
    sourceNote: "مرجع استرشادي غير رسمي. تحقّق من المعلومات التنظيمية لدى المركز الوطني للسجل التجاري والجهة المختصة.",
    sourceLink: "بوابة Sidjilcom", home: "الرئيسية", current: "دليل النشاطات",
    noValue: "غير متوفر في ملف البيانات",
    compareDisclaimer: "تعرض المقارنة الاختلافات بين البيانات المتاحة فقط. غياب قيمة في الملف لا يعني عدم وجود شرط قانوني.",
  } : {
    title: "Nomenclature des activités économiques", description: "Recherchez par code ou libellé, ou parcourez les secteurs.",
    search: "Rechercher une activité ou un code", placeholder: "Ex. : 611001 ou location immobilière", submit: "Rechercher",
    filters: "Filtrer par classification", sector: "Secteur", allSectors: "Tous les secteurs",
    group: "Groupe", allGroups: "Tous les groupes", subgroup: "Sous-groupe",
    allSubgroups: "Tous les sous-groupes", apply: "Appliquer", reset: "Effacer",
    sectors: "Parcourir les secteurs", results: "Résultats", result: "résultat(s)",
    open: "Voir la fiche", empty: "Aucun résultat. Essayez un autre terme ou vérifiez le code.",
    previous: "Précédent", next: "Suivant", selected: "Comparaison", clearCompare: "Effacer",
    compareHint: "Sélectionnez deux ou trois activités pour les comparer.", compareRows: "Élément comparé",
    content: "Contenu de l’activité", accessories: "Activités accessoires", tutelle: "Tutelle",
    authorization: "Type d’autorisation", references: "Références textuelles",
    sourceNote: "Référence indicative non officielle. Vérifiez les informations réglementaires auprès du CNRC et de l’autorité compétente.",
    sourceLink: "Portail Sidjilcom", home: "Accueil", current: "Nomenclature",
    noValue: "Non renseigné dans le fichier",
    compareDisclaimer: "La comparaison porte uniquement sur les données disponibles. Une valeur absente ne signifie pas l’absence d’une exigence légale.",
  };

  const comparisonRows = [
    { key: "label_ar", label: ar ? "التسمية العربية" : "Libellé arabe", value: (a: NAEActivity) => usable(a.label_ar) ? a.label_ar : t.noValue, dir: "rtl" as const },
    { key: "label_fr", label: ar ? "التسمية الفرنسية" : "Libellé français", value: (a: NAEActivity) => usable(a.label_fr) ? a.label_fr : t.noValue, dir: "ltr" as const },
    { key: "sector", label: t.sector, value: (a: NAEActivity) => a.sector_code + " — " + (NAE_SECTORS[a.sector_code as NAESectorCode]?.label_ar ?? ""), dir: "auto" as const },
    { key: "group", label: t.group, value: (a: NAEActivity) => a.group_code, dir: "ltr" as const },
    { key: "subgroup", label: t.subgroup, value: (a: NAEActivity) => a.subgroup_code, dir: "ltr" as const },
    { key: "content", label: t.content, value: (a: NAEActivity) => a.contenue_fr || t.noValue, dir: "ltr" as const },
    { key: "accessories", label: t.accessories, value: (a: NAEActivity) => a.accessoires_fr || t.noValue, dir: "ltr" as const },
    { key: "tutelle", label: t.tutelle, value: (a: NAEActivity) => a.tutelle_fr || t.noValue, dir: "ltr" as const },
    { key: "authorization", label: t.authorization, value: (a: NAEActivity) => a.type_autorisation_fr || t.noValue, dir: "ltr" as const },
    { key: "references", label: t.references, value: (a: NAEActivity) => a.references_texte_fr || t.noValue, dir: "ltr" as const },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50" dir={ar ? "rtl" : "ltr"} lang={lang}>
      <UnifiedPageHeader lang={lang} title={t.title} description={t.description}
        breadcrumbs={[{ name: t.home, href: ar ? "/" : "/fr" }, { name: t.current }]} />
      <main className="py-8 md:py-10">
        <div className="container mx-auto max-w-6xl px-4">
          <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6" aria-label={t.search}>
            <form action={action} method="get" className="space-y-4">
              {compareParamPresent && compareCodes.length > 0 && <input type="hidden" name="compare" value={compareCodes.join(",")} />}
              <div className="flex flex-col gap-2 sm:flex-row">
                <label htmlFor="nae-query" className="sr-only">{t.search}</label>
                <input id="nae-query" name="q" type="search" defaultValue={q} placeholder={t.placeholder} autoComplete="off"
                  className="min-h-12 min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/20" />
                <button type="submit" className="min-h-12 rounded-xl bg-emerald-800 px-8 font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2">{t.submit}</button>
              </div>
              <details className="border-t border-gray-100 pt-3" open={hasFilters}>
                <summary className="cursor-pointer text-sm font-semibold text-gray-700 marker:text-emerald-800">
                  {t.filters}
                  {(sector || group || subgroup) && <span className="ms-2 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-900">{[sector, group, subgroup].filter(Boolean).length}</span>}
                </summary>
                <div className="grid gap-3 pt-4 sm:grid-cols-3">
                  <label className="block text-sm font-medium text-gray-700"><span className="mb-1.5 block">{t.sector}</span>
                    <select name="sector" defaultValue={sector ?? ""} className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-gray-800">
                      <option value="">{t.allSectors}</option>{taxonomy.map((item) => <option key={item.code} value={item.code}>{item.code} — {item.label_ar}</option>)}
                    </select>
                  </label>
                  <label className="block text-sm font-medium text-gray-700"><span className="mb-1.5 block">{t.group}</span>
                    <select name="group" defaultValue={group ?? ""} className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-gray-800">
                      <option value="">{t.allGroups}</option>{groups.map((item) => <option key={item.code} value={item.code}>{item.code}</option>)}
                    </select>
                  </label>
                  <label className="block text-sm font-medium text-gray-700"><span className="mb-1.5 block">{t.subgroup}</span>
                    <select name="subgroup" defaultValue={subgroup ?? ""} className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-gray-800">
                      <option value="">{t.allSubgroups}</option>{subgroups.map((item) => <option key={item.code} value={item.code}>{item.code}</option>)}
                    </select>
                  </label>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button type="submit" className="rounded-lg bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900">{t.apply}</button>
                  <Link href={action} className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100">{t.reset}</Link>
                </div>
              </details>
            </form>
          </section>

          {hasCriteria ? (
            <section className="mt-8" aria-live="polite" aria-labelledby="nae-results-title">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h2 id="nae-results-title" className="text-lg font-bold text-gray-900">{t.results}</h2>
                <span className="text-sm text-gray-500">{resultItems.length} {t.result}</span>
              </div>
              {shown.length ? (
                <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                  {shown.map(({ activity }) => {
                    const sectorLabel = NAE_SECTORS[activity.sector_code as NAESectorCode]?.label_ar ?? "";
                    const otherLabel = lang === "ar" ? activity.label_fr : activity.label_ar;
                    return (
                      <article key={activity.code} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-sm font-bold text-emerald-800" dir="ltr">{activity.code}</span>
                            <span className="text-xs text-gray-400">{activity.group_code} / {activity.subgroup_code}</span>
                          </div>
                          <h3 className="mt-1 text-base font-semibold leading-7 text-gray-900">{localLabel(activity, lang)}</h3>
                          {usable(otherLabel) && otherLabel !== localLabel(activity, lang) && <p className="mt-0.5 text-sm text-gray-500">{otherLabel}</p>}
                          <p className="mt-1 text-xs text-gray-500">{sectorLabel}</p>
                        </div>
                        <div className="flex shrink-0 flex-wrap items-center gap-2">
                          <Link href={action + "/" + activity.code} className="inline-flex min-h-10 items-center rounded-lg bg-emerald-800 px-4 text-sm font-semibold text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2">{t.open}</Link>
                          <NAECompareButton code={activity.code} selectedCodes={compareCodes} baseHref={baseHref} lang={lang} />
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center text-sm text-gray-600">{t.empty}</div>
              )}
              {totalPages > 1 && (
                <nav aria-label={ar ? "صفحات النتائج" : "Pagination"} className="mt-5 flex items-center justify-center gap-4">
                  {currentPage > 1 && <Link href={paginationHref(currentPage - 1)} rel="prev" className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700">{t.previous}</Link>}
                  <span className="text-sm text-gray-500">{currentPage} / {totalPages}</span>
                  {currentPage < totalPages && <Link href={paginationHref(currentPage + 1)} rel="next" className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700">{t.next}</Link>}
                </nav>
              )}
            </section>
          ) : (
            <section className="mt-8" aria-labelledby="nae-sectors-title">
              <div className="mb-3 flex items-center justify-between">
                <h2 id="nae-sectors-title" className="text-lg font-bold text-gray-900">{t.sectors}</h2>
                <span className="text-xs text-gray-500">{getNAEActivities().length.toLocaleString(ar ? "ar-DZ" : "fr-FR")} {ar ? "نشاطاً" : "activités"}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {taxonomy.map((item) => (
                  <Link key={item.code} href={action + "?sector=" + item.code}
                    className="group flex min-h-24 items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-sm">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 font-mono text-base font-bold text-emerald-900">{item.code}</span>
                      <span className="font-semibold leading-6 text-gray-800 group-hover:text-emerald-900">{item.label_ar}</span>
                    </div>
                    <span className="shrink-0 text-xs text-gray-500">{item.count.toLocaleString(ar ? "ar-DZ" : "fr-FR")}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <NAECompareRestore selectedCodes={compareCodes} compareParamPresent={compareParamPresent} />

          {comparedActivities.length > 0 && (
            <section data-nae-compare-print className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6" aria-labelledby="nae-compare-title">
              <style>{"@media print { body:has([data-nae-compare-print]) * { visibility:hidden!important; } [data-nae-compare-print], [data-nae-compare-print] * { visibility:visible!important; } [data-nae-compare-print] { position:absolute!important; inset:0!important; width:100%!important; margin:0!important; border:0!important; box-shadow:none!important; } }"}</style>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div><h2 id="nae-compare-title" className="text-lg font-bold text-gray-900">{t.selected}</h2><p className="mt-1 text-xs text-gray-500">{comparedActivities.length} / 3</p></div>
                <div className="flex items-center gap-2 print:hidden">
                  {comparedActivities.length >= 2 && <NAEPrintButton lang={lang} />}
                  <Link href={baseHref} className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700">{t.clearCompare}</Link>
                </div>
              </div>
              {comparedActivities.length < 2 ? <p className="text-sm text-gray-600">{t.compareHint}</p> : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-sm">
                    <thead><tr>
                      <th className="w-36 border-b border-gray-200 p-3 text-start text-xs font-semibold text-gray-500">{t.compareRows}</th>
                      {comparedActivities.map((activity) => <th key={activity.code} className="border-b border-gray-200 p-3 text-start align-top">
                        <span className="block font-mono text-xs font-bold text-emerald-800" dir="ltr">{activity.code}</span>
                        <span className="mt-1 block font-semibold leading-6 text-gray-900">{getNAEActivityTitle(activity, lang)}</span>
                        <span className="mt-2 block print:hidden"><NAECompareButton code={activity.code} selectedCodes={compareCodes} baseHref={baseHref} lang={lang} /></span>
                      </th>)}
                    </tr></thead>
                    <tbody>
                      {comparisonRows.filter((row) => new Set(comparedActivities.map(row.value)).size > 1).map((row) => <tr key={row.key} className="border-b border-gray-100 align-top">
                        <th scope="row" className="bg-gray-50 p-3 text-start font-semibold text-gray-700">{row.label}</th>
                        {comparedActivities.map((activity) => <td key={activity.code} dir={row.dir} className="whitespace-pre-line break-words p-3 leading-6 text-gray-800">{row.value(activity)}</td>)}
                      </tr>)}
                    </tbody>
                  </table>
                  <p className="mt-3 text-xs leading-5 text-gray-500">{t.compareDisclaimer}</p>
                </div>
              )}
            </section>
          )}

          <footer className="mt-8 flex flex-col gap-2 border-t border-gray-200 pt-4 text-xs leading-5 text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{t.sourceNote}</p>
            <a href={ar ? "https://sidjilcom.cnrc.dz/ar/web/sidjilcom/نشاطات" : "https://sidjilcom.cnrc.dz/fr/web/sidjilcom/nomenclature-de-vos-activites"}
              target="_blank" rel="noopener noreferrer" className="shrink-0 font-semibold text-emerald-800 underline underline-offset-4">{t.sourceLink}</a>
          </footer>
        </div>
      </main>
    </div>
  );
}

export function NAEActivityDetailPage({ lang, activity }: { lang: NAEPageLanguage; activity: NAEActivity }) {
  const ar = lang === "ar";
  const action = ar ? "/nae" : "/fr/nae";
  const title = getNAEActivityTitle(activity, lang);
  const preferred = ar ? activity.label_ar : activity.label_fr;
  const hasPreferred = usable(preferred);
  const sector = NAE_SECTORS[activity.sector_code as NAESectorCode];
  const related = getNAEActivities()
    .filter((item) => item.code !== activity.code && item.subgroup_code === activity.subgroup_code)
    .slice(0, 5);
  const regulatoryFields = [
    { key: "tutelle", label: ar ? "الجهة الوصية" : "Tutelle", value: activity.tutelle_fr },
    { key: "authorization", label: ar ? "نوع الترخيص" : "Type d’autorisation", value: activity.type_autorisation_fr },
    { key: "references", label: ar ? "المراجع النصية" : "Références textuelles", value: activity.references_texte_fr },
  ].filter((field): field is { key: string; label: string; value: string } => Boolean(field.value?.trim()));

  const t = ar ? {
    home: "الرئيسية", explorer: "دليل النشاطات", classification: "التصنيف",
    sector: "القطاع", group: "المجموعة", subgroup: "المجموعة الفرعية",
    content: "محتوى النشاط", accessories: "الأنشطة الإضافية", regulatory: "معلومات تنظيمية",
    related: "أنشطة ضمن المجموعة الفرعية نفسها", noContent: "لا يتوفر وصف لهذا النشاط في ملف البيانات.",
    missingLabel: "التسمية العربية غير متاحة في المصدر؛ عُرضت التسمية الفرنسية.",
    disclaimer: "مرجع استرشادي غير رسمي؛ لا يثبت وحده شروط الترخيص أو إمكانية جمع الأنشطة. تحقّق لدى المركز الوطني للسجل التجاري والجهة المختصة.",
    openSource: "Sidjilcom",
  } : {
    home: "Accueil", explorer: "Nomenclature", classification: "Classification",
    sector: "Secteur", group: "Groupe", subgroup: "Sous-groupe",
    content: "Contenu de l’activité", accessories: "Activités accessoires", regulatory: "Informations réglementaires",
    related: "Activités du même sous-groupe", noContent: "Aucune description disponible dans le fichier.",
    missingLabel: "Le libellé français est absent de la source ; le libellé arabe est affiché.",
    disclaimer: "Référence indicative non officielle ; elle ne prouve pas les conditions d’autorisation ni la possibilité de cumul. Vérifiez auprès du CNRC et de l’autorité compétente.",
    openSource: "Sidjilcom",
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={ar ? "rtl" : "ltr"} lang={lang}>
      <UnifiedPageHeader lang={lang} badgeText={ar ? "بطاقة النشاط" : "Fiche activité"} title={title}
        description={activity.code}
        breadcrumbs={[{ name: t.home, href: ar ? "/" : "/fr" }, { name: t.explorer, href: action }, { name: activity.code }]} />
      <main className="py-8 md:py-10">
        <div data-nae-detail-print className="container mx-auto max-w-5xl space-y-5 px-4">
          <style>{"@media print { body:has([data-nae-detail-print]) * { visibility:hidden!important; } [data-nae-detail-print], [data-nae-detail-print] * { visibility:visible!important; } [data-nae-detail-print] { position:absolute!important; inset:0!important; width:100%!important; margin:0!important; border:0!important; box-shadow:none!important; } }"}</style>
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-gray-500">{ar ? "رمز النشاط" : "Code activité"}</p>
                <p className="mt-1 font-mono text-2xl font-bold tracking-wide text-emerald-900" dir="ltr">{activity.code}</p>
                <NAEActivityActions code={activity.code} lang={lang} />
              </div>
              <Link href={action} className="print:hidden inline-flex min-h-10 items-center rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                {ar ? "العودة إلى الدليل" : "Retour à la nomenclature"}
              </Link>
            </div>
            <div className="mt-6 border-t border-gray-100 pt-5">
              <h2 className="text-sm font-bold text-gray-700">{t.classification}</h2>
              <dl className="mt-3 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-gray-50 p-3"><dt className="text-xs text-gray-500">{t.sector}</dt><dd className="mt-1 font-semibold text-gray-900">{activity.sector_code} — {sector?.label_ar ?? ""}</dd></div>
                <div className="rounded-xl bg-gray-50 p-3"><dt className="text-xs text-gray-500">{t.group}</dt><dd className="mt-1 font-mono font-semibold text-gray-900" dir="ltr">{activity.group_code}</dd></div>
                <div className="rounded-xl bg-gray-50 p-3"><dt className="text-xs text-gray-500">{t.subgroup}</dt><dd className="mt-1 font-mono font-semibold text-gray-900" dir="ltr">{activity.subgroup_code}</dd></div>
              </dl>
            </div>
          </section>

          {!hasPreferred && <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">{t.missingLabel}</p>}

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="text-lg font-bold text-gray-900">{t.content}</h2>
            <p dir="ltr" lang="fr" className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-800">{activity.contenue_fr || t.noContent}</p>
            {activity.accessoires_fr && <div className="mt-5 border-t border-gray-100 pt-4">
              <h3 className="text-sm font-bold text-gray-700">{t.accessories}</h3>
              <p dir="ltr" lang="fr" className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-800">{activity.accessoires_fr}</p>
            </div>}
          </section>

          {regulatoryFields.length > 0 && <details className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <summary className="cursor-pointer font-semibold text-gray-900">{t.regulatory}<span className="ms-2 text-xs font-normal text-gray-500">{regulatoryFields.length}</span></summary>
            <dl className="mt-4 space-y-4 border-t border-gray-100 pt-4">
              {regulatoryFields.map((field) => <div key={field.key}>
                <dt className="text-sm font-semibold text-gray-700">{field.label}</dt>
                <dd dir="ltr" lang="fr" className="mt-1 whitespace-pre-line text-sm leading-7 text-gray-800">{field.value}</dd>
              </div>)}
            </dl>
            <p className="mt-4 text-xs leading-5 text-gray-500">{ar ? "الحقول غير المتوفرة في نسخة البيانات لا تعني عدم وجود شرط تنظيمي." : "Un champ absent du fichier ne signifie pas l’absence d’une exigence réglementaire."}</p>
          </details>}

          {related.length > 0 && <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-base font-bold text-gray-900">{t.related}</h2>
            <ul className="mt-3 divide-y divide-gray-100">
              {related.map((item) => <li key={item.code} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div className="min-w-0"><p className="font-mono text-xs font-bold text-emerald-800" dir="ltr">{item.code}</p><p className="mt-1 text-sm font-semibold text-gray-800">{localLabel(item, lang)}</p></div>
                <Link href={action + "/" + item.code} className="text-sm font-semibold text-emerald-800 underline underline-offset-4">{ar ? "عرض" : "Voir"}</Link>
              </li>)}
            </ul>
          </section>}

          <footer className="flex flex-col gap-2 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-950 sm:flex-row sm:items-center sm:justify-between print:hidden">
            <p>{t.disclaimer}</p>
            <a href={ar ? "https://sidjilcom.cnrc.dz/ar/web/sidjilcom/نشاطات" : "https://sidjilcom.cnrc.dz/fr/web/sidjilcom/nomenclature-de-vos-activites"}
              target="_blank" rel="noopener noreferrer" className="shrink-0 font-semibold underline underline-offset-4">{t.openSource}</a>
          </footer>
        </div>
      </main>
    </div>
  );
}
