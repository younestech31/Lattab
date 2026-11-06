import Link from "next/link";
import NAEActivityActions from "@/components/nae/NAEActivityActions";
import NAEProjectWorkspace from "@/components/nae/NAEProjectWorkspace";
import NAEAddToProjectButton from "@/components/nae/NAEAddToProjectButton";
import { getNAEStatusInfo } from "@/lib/nae/status";
import UnifiedPageHeader from "@/components/ui/UnifiedPageHeader";
import { getNAEActivities, getNAEDatasetManifest } from "@/lib/nae/data";
import { NAE_SECTORS, type NAESectorCode } from "@/lib/nae/sectors";
import type { NAEActivity } from "@/lib/nae/schema";
import { getNAEActivityTitle, type NAEPageLanguage } from "./seo";

export type { NAEPageLanguage } from "./seo";

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
  params: {
    q?: string | string[];
    sector?: string | string[];
    group?: string | string[];
    subgroup?: string | string[];
    compare?: string | string[];
    page?: string | string[];
  };
}) {
  void params;
  const ar = lang === "ar";
  const sourceRevisionDate = getNAEDatasetManifest().source_revision_date ?? (ar ? "غير محدد" : "non précisée");
  const copy = ar
    ? {
        title: "دليل النشاطات الاقتصادية الجزائرية",
        description: "أداة معلوماتية للبحث عن النشاطات وتجميعها ومراجعتها عند إعداد مشروع مؤسسة.",
        home: "الرئيسية",
        current: "إعداد نشاطات المشروع",
        sourceNote: "للاطلاع على المدونة الرسمية وتفاصيلها، راجع بوابة Sidjilcom.",
        sourceLink: "بوابة Sidjilcom",
      }
    : {
        title: "Nomenclature des activités économiques",
        description: "Outil d’information pour rechercher, réunir et examiner les activités lors de la préparation d’un projet d’entreprise.",
        home: "Accueil",
        current: "Préparation des activités du projet",
        sourceNote: "Consultez le portail Sidjilcom pour la nomenclature officielle et ses détails.",
        sourceLink: "Portail Sidjilcom",
      };

  return (
    <div className="min-h-screen bg-gray-50" dir={ar ? "rtl" : "ltr"} lang={lang}>
      <UnifiedPageHeader
        lang={lang}
        title={copy.title}
        description={copy.description}
        breadcrumbs={[{ name: copy.home, href: ar ? "/" : "/fr" }, { name: copy.current }]}
      />
      <main className="py-8 md:py-10">
        <div className="container mx-auto max-w-6xl px-4">
          <NAEProjectWorkspace lang={lang} sourceRevisionDate={sourceRevisionDate} />
          <footer className="mt-6 flex flex-col gap-2 border-t border-gray-200 pt-4 text-xs leading-5 text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{copy.sourceNote}</p>
            <a
              href={ar ? "https://sidjilcom.cnrc.dz/ar/web/sidjilcom/نشاطات" : "https://sidjilcom.cnrc.dz/fr/web/sidjilcom/nomenclature-de-vos-activites"}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-semibold text-emerald-800 underline underline-offset-4"
            >
              {copy.sourceLink}
            </a>
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
  const statusInfo = getNAEStatusInfo(activity.status, lang);
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
    content: "محتوى النشاط", accessories: "الأنشطة الإضافية", regulatory: "المعلومات التنظيمية المتاحة (بالفرنسية)",
    related: "أنشطة أخرى قريبة في التصنيف", noContent: "لا يتوفر وصف لهذا النشاط في ملف البيانات.",
    missingLabel: "التسمية العربية غير متاحة في المصدر؛ عُرضت التسمية الفرنسية.",
    disclaimer: "مرجع استرشادي غير رسمي؛ لا يثبت وحده شروط الترخيص أو إمكانية جمع الأنشطة. تحقّق لدى المركز الوطني للسجل التجاري والجهة المختصة.",
    openSource: "Sidjilcom",
  } : {
    home: "Accueil", explorer: "Nomenclature", classification: "Classification",
    sector: "Secteur", group: "Groupe", subgroup: "Sous-groupe",
    content: "Contenu de l’activité", accessories: "Activités accessoires", regulatory: "Informations réglementaires",
    related: "Autres activités proches dans la classification", noContent: "Aucune description disponible dans le fichier.",
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
                <span className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusInfo.className}`}>{statusInfo.label}</span>
                <p className="mt-2 max-w-xl text-xs leading-6 text-gray-600">{statusInfo.explanation}</p>
                <NAEActivityActions code={activity.code} lang={lang} />
                <NAEAddToProjectButton code={activity.code} lang={lang} />
              </div>
              <Link href={action} className="print:hidden inline-flex min-h-10 items-center rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                {ar ? "العودة إلى الدليل" : "Retour à la nomenclature"}
              </Link>
            </div>
            <div className="mt-6 border-t border-gray-100 pt-5">
              <h2 className="text-sm font-bold text-gray-700">{t.classification}</h2>
              <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-3"><dt className="text-xs text-gray-500">{t.sector}</dt><dd className="mt-1 font-semibold text-gray-900">{activity.sector_code} — {sector ? (ar ? sector.label_ar : sector.label_fr) : ""}</dd></div>
                <div className="rounded-xl bg-gray-50 p-3"><dt className="text-xs text-gray-500">{ar ? "حالة النشاط في المصدر" : "Statut dans la source"}</dt><dd className="mt-1"><span className={`inline-flex rounded-full border px-2 py-1 text-xs font-semibold ${statusInfo.className}`}>{statusInfo.label}</span></dd></div>
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
