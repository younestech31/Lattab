import Link from "next/link";
import { Info, CheckCircle2, AlertTriangle, Ban, BookOpen } from "lucide-react";
import NAEActivityActions from "@/components/nae/NAEActivityActions";
import NAEProjectWorkspace from "@/components/nae/NAEProjectWorkspace";
import NAEAddToProjectButton from "@/components/nae/NAEAddToProjectButton";
import { getNAEStatusInfo } from "@/lib/nae/status";
import UnifiedPageHeader from "@/components/ui/UnifiedPageHeader";
import { getNAEActivities, getNAEDatasetManifest, getNAECatalogCounts } from "@/lib/nae/data";
import { resolveActivityBilingual } from "@/lib/nae/gap-resolver";
import { NAE_SECTORS, type NAESectorCode } from "@/lib/nae/sectors";
import type { NAEActivity } from "@/lib/nae/schema";
import type { ActivityItem } from "@/components/nae/types";
import { getNAEActivityTitle, type NAEPageLanguage } from "./seo";
import { getNAELocalizedField } from "./display";

export type { NAEPageLanguage } from "./seo";

function usable(value: string | null | undefined): value is string {
  return Boolean(value?.trim()) && value?.trim() !== "#NOM?";
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
  const manifest = getNAEDatasetManifest();
  const catalogCounts = getNAECatalogCounts();
  const initialActivities: ActivityItem[] = getNAEActivities().slice(0, 24).map((activity) => {
    const resolved = resolveActivityBilingual(activity);
    const status = getNAEStatusInfo(resolved.status, lang);
    return {
      code: resolved.code,
      label_ar: resolved.label_ar,
      label_fr: resolved.label_fr,
      status: resolved.status,
      statusInfo: { label: status.label, className: status.className },
      sector_code: resolved.sector_code,
      group_code: resolved.group_code,
      subgroup_code: resolved.subgroup_code,
      tutelle_fr: resolved.tutelle_fr,
      tutelle_ar: resolved.tutelle_ar,
      type_autorisation_fr: resolved.type_autorisation_fr,
      type_autorisation_ar: resolved.type_autorisation_ar,
      contenue_fr: resolved.contenue_fr,
      contenue_ar: resolved.contenue_ar,
      accessoires_fr: resolved.accessoires_fr,
      accessoires_ar: resolved.accessoires_ar,
    };
  });
  const sourceRevisionDate = manifest.source_revision_date ?? (ar ? "غير محدد" : "non précisée");
  const copy = ar
    ? {
        eyebrow: "الديوان العمومي للتوثيق — وهران",
        badgeText: "دليل معلوماتي — تصنيف النشاطات الاقتصادية",
        title: "مدونة الأنشطة الاقتصادية",
        description: "استعراض معلوماتي لمدونة النشاطات الاقتصادية (NAE/CNRC)، مع فحص أولي للمؤشرات التنظيمية وتجهيز ورقة عمل تحضيرية لملف التأسيس.",
        home: "الرئيسية",
        current: "مدونة الأنشطة الاقتصادية",
        noticeTitle: "تنبيه إعلامي واستشهادي",
        noticeText: `تعتمد هذه الأداة على نسخة مرجعية من مدونة الأنشطة الاقتصادية نشرها UpGrowth ضمن بيانات NAE 2026، بتاريخ ${sourceRevisionDate} وبرخصة CC BY 4.0. هذه لقطة بيانات مؤرخة وليست اتصالاً مباشراً بقاعدة CNRC ولا سجلاً حياً؛ بوابة Sidjilcom هي المرجع الإداري للتحقق من الرمز ووضع النشاط وشروط تسجيله.`,
        sourceNote: `مصدر نسخة البيانات المعروضة: UpGrowth — Nomenclature CNRC 2026 (CC BY 4.0)، بتاريخ ${sourceRevisionDate}. المرجع الرسمي للتحقق الإداري: Sidjilcom / CNRC.`,
        sourceLicense: "بيانات المرجع منشورة من UpGrowth برخصة CC BY 4.0.",
        sourceLink: "بوابة Sidjilcom الرسمية",
      }
    : {
        eyebrow: "Office public de notariat — Maître Lattab Mohamed, Oran",
        badgeText: "Référence informative — Nomenclature des activités économiques",
        title: "Nomenclature des activités économiques",
        description: "Répertoire informatif pour consulter la nomenclature des activités économiques (NAE), examiner les règles de cumul et préparer la fiche de constitution.",
        home: "Accueil",
        current: "Nomenclature des activités économiques",
        noticeTitle: "Avertissement informatif",
        noticeText: `Cet outil repose sur un instantané de la nomenclature NAE 2026 publié par UpGrowth, daté du ${sourceRevisionDate} et diffusé sous licence CC BY 4.0. Il ne s’agit ni d’une connexion directe à la base du CNRC ni d’un registre en temps réel ; Sidjilcom reste la référence administrative pour vérifier les codes, leur statut et les conditions d’inscription.`,
        sourceNote: `Source de l’instantané présenté : UpGrowth — Nomenclature CNRC 2026 (CC BY 4.0), datée du ${sourceRevisionDate}. Référence de vérification officielle : Sidjilcom / CNRC.`,
        sourceLicense: "Données de référence publiées par UpGrowth sous licence CC BY 4.0.",
        sourceLink: "Portail officiel Sidjilcom",
      };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir={ar ? "rtl" : "ltr"} lang={lang}>
      <UnifiedPageHeader
        lang={lang}
        eyebrow={copy.eyebrow}
        badgeText={copy.badgeText}
        badgeIcon={<BookOpen className="h-4 w-4" />}
        title={copy.title}
        description={copy.description}
        breadcrumbs={[{ name: copy.home, href: ar ? "/" : "/fr" }, { name: copy.current }]}
      />
      <main className="flex-grow py-8 md:py-10">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Amber Informational Notice citing CNRC/Sidjilcom and revision date */}
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 sm:p-5 text-amber-950 shadow-2xs">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs sm:text-sm leading-relaxed space-y-1">
                <p className="font-bold text-amber-900">
                  {copy.noticeTitle}
                </p>
                <p className="text-amber-800">
                  {copy.noticeText}
                </p>
              </div>
            </div>
          </div>

          <NAEProjectWorkspace
            lang={lang}
            sourceRevisionDate={sourceRevisionDate}
            initialActivities={initialActivities}
            catalogCounts={catalogCounts}
          />

          <footer className="mt-8 flex flex-col gap-2 border-t border-gray-200 pt-4 text-xs leading-5 text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-gray-800">{copy.sourceNote}</p>
              <p className="mt-0.5 text-gray-400">{copy.sourceLicense}</p>
            </div>
            <a
              href={ar ? "https://sidjilcom.cnrc.dz/ar/web/sidjilcom/نشاطات" : "https://sidjilcom.cnrc.dz/fr/web/sidjilcom/nomenclature-de-vos-activites"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ar ? "فتح بوابة Sidjilcom الرسمية في نافذة جديدة" : "Ouvrir le portail officiel Sidjilcom dans une nouvelle fenêtre"}
              className="shrink-0 font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
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
  const resolved = resolveActivityBilingual(activity);
  const contentDisplay = getNAELocalizedField(resolved.contenue_fr, resolved.contenue_ar, lang);
  const accessoriesDisplay = getNAELocalizedField(
    resolved.accessoires_fr,
    resolved.accessoires_ar,
    lang,
  );

  interface RegulatoryField {
    key: string;
    label: string;
    primaryValue: string | null;
    sourceFrench: string | null;
  }

  const regulatoryFields: RegulatoryField[] = [];
  const tutelleDisplay = getNAELocalizedField(resolved.tutelle_fr, resolved.tutelle_ar, lang);
  if (tutelleDisplay.value || tutelleDisplay.sourceFrench) {
    regulatoryFields.push({
      key: "tutelle",
      label: ar ? "الجهة الوصية" : "Tutelle",
      primaryValue: tutelleDisplay.value,
      sourceFrench: tutelleDisplay.sourceFrench,
    });
  }

  const authorizationDisplay = getNAELocalizedField(
    resolved.type_autorisation_fr,
    resolved.type_autorisation_ar,
    lang,
  );
  if (authorizationDisplay.value || authorizationDisplay.sourceFrench) {
    regulatoryFields.push({
      key: "authorization",
      label: ar ? "نوع الترخيص / الاعتماد" : "Type d’autorisation",
      primaryValue: authorizationDisplay.value,
      sourceFrench: authorizationDisplay.sourceFrench,
    });
  }

  const referencesDisplay = getNAELocalizedField(
    resolved.references_texte_fr,
    resolved.references_texte_ar,
    lang,
  );
  if (referencesDisplay.value || referencesDisplay.sourceFrench) {
    regulatoryFields.push({
      key: "references",
      label: ar ? "المراجع القانونية والنصية" : "Références textuelles",
      primaryValue: referencesDisplay.value,
      sourceFrench: referencesDisplay.sourceFrench,
    });
  }

  const t = ar ? {
    home: "الرئيسية",
    explorer: "مدونة الأنشطة الاقتصادية",
    classification: "التصنيف",
    sector: "القطاع",
    group: "المجموعة",
    subgroup: "المجموعة الفرعية",
    content: "محتوى النشاط",
    accessories: "الأنشطة الإضافية",
    regulatory: "الضوابط والمعلومات التنظيمية",
    related: "أنشطة أخرى قريبة في التصنيف",
    officialTitle: "التسمية الرسمية للنشاط",
    arabicLabelUnavailable: "التسمية العربية غير متاحة في المصدر",
    frenchLabelUnavailable: "التسمية الفرنسية غير متاحة في المصدر",
    contentTranslationUnavailable: "لا تتوفر ترجمة عربية لهذا الوصف في نسخة البيانات الحالية.",
    accessoriesTranslationUnavailable: "لا تتوفر ترجمة عربية لهذا الحقل في نسخة البيانات الحالية.",
    fieldTranslationUnavailable: "لا تتوفر ترجمة عربية لهذا الحقل في نسخة البيانات الحالية.",
    showFrenchSource: "عرض النص الأصلي بالفرنسية للمطابقة",
    noContent: "لا يتوفر وصف لهذا النشاط في ملف البيانات.",
    missingLabel: "التسمية العربية غير متاحة في المصدر؛ عُرضت التسمية الفرنسية.",
    disclaimer: "مرجع استرشادي غير رسمي؛ لا يثبت وحده شروط الترخيص أو إمكانية جمع الأنشطة. يرجى التحقق لدى المركز الوطني للسجل التجاري والجهة المختصة.",
    sourceOfficial: "مصدر النسخة المرجعية: UpGrowth (CC BY 4.0)؛ للتحقق من الوضع الحالي راجع بوابة Sidjilcom / CNRC.",
    licenseLine: "ترخيص البيانات المرجعية: CC BY 4.0 UpGrowth.",
    openSource: "بوابة Sidjilcom الرسمية",
  } : {
    home: "Accueil",
    explorer: "Nomenclature des activités économiques",
    classification: "Classification",
    sector: "Secteur",
    group: "Groupe",
    subgroup: "Sous-groupe",
    content: "Contenu de l’activité",
    accessories: "Activités accessoires",
    regulatory: "Informations réglementaires",
    related: "Autres activités proches dans la classification",
    officialTitle: "Désignation officielle de l’activité",
    arabicLabelUnavailable: "Libellé arabe non disponible dans la source",
    frenchLabelUnavailable: "Libellé français non disponible dans la source",
    contentTranslationUnavailable: "La traduction arabe de cette description n’est pas disponible dans cette version.",
    accessoriesTranslationUnavailable: "La traduction arabe de ce champ n’est pas disponible dans cette version.",
    fieldTranslationUnavailable: "La traduction arabe de ce champ n’est pas disponible dans cette version.",
    showFrenchSource: "Consulter le texte source en français",
    noContent: "Aucune description disponible dans le fichier.",
    missingLabel: "Le libellé français est absent de la source ; le libellé arabe est affiché.",
    disclaimer: "Référence indicative non officielle ; elle ne prouve pas les conditions d’autorisation ni la possibilité de cumul. Vérifiez auprès du CNRC et de l’autorité compétente.",
    sourceOfficial: "Source de l’instantané : UpGrowth (CC BY 4.0) ; vérifiez la situation actuelle sur Sidjilcom / CNRC.",
    licenseLine: "Données de référence sous licence CC BY 4.0 UpGrowth.",
    openSource: "Portail officiel Sidjilcom",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir={ar ? "rtl" : "ltr"} lang={lang}>
      <UnifiedPageHeader
        lang={lang}
        eyebrow={ar ? "الديوان العمومي للتوثيق — وهران" : "Office public de notariat — Maître Lattab Mohamed, Oran"}
        badgeText={ar ? "بطاقة النشاط — مدونة الأنشطة الاقتصادية" : "Fiche activité — Nomenclature des activités économiques"}
        title={title}
        description={activity.code}
        breadcrumbs={[{ name: t.home, href: ar ? "/" : "/fr" }, { name: t.explorer, href: action }, { name: activity.code }]}
      />
      <main className="flex-grow py-8 md:py-10">
        <div className="container mx-auto max-w-5xl space-y-5 px-4">
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-gray-600">{ar ? "رمز النشاط" : "Code activité"}</p>
                <p className="mt-1 font-mono text-2xl font-bold tracking-wide text-emerald-950" dir="ltr">{activity.code}</p>
                <span className={`mt-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${statusInfo.className}`}>
                  {activity.status === "red" ? (
                    <Ban className="h-3.5 w-3.5 text-rose-700" aria-hidden="true" />
                  ) : activity.status === "green" ? (
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-700" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                  )}
                  <span>{statusInfo.label}</span>
                </span>
                <p className="mt-2 max-w-xl text-xs leading-6 text-gray-700">{statusInfo.explanation}</p>
                <NAEActivityActions code={activity.code} lang={lang} />
                <NAEAddToProjectButton code={activity.code} lang={lang} />
              </div>
              <Link
                href={action}
                aria-label={ar ? "العودة إلى مدونة الأنشطة الاقتصادية" : "Retour à la nomenclature des activités économiques"}
                className="print:hidden inline-flex min-h-11 items-center rounded-xl border border-gray-300 px-4 text-xs sm:text-sm font-semibold text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors"
              >
                {ar ? "العودة إلى دليل النشاطات" : "Retour à la nomenclature"}
              </Link>
            </div>
            <div className="mt-5 border-t border-gray-100 pt-5">
              <h2 className="text-xs sm:text-sm font-bold text-gray-800">{t.officialTitle}</h2>
              <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-3">
                  <dt className="text-xs font-semibold text-gray-600">العربية</dt>
                  <dd dir="rtl" lang="ar" className="mt-1 text-xs sm:text-sm font-semibold leading-6 text-gray-950">
                    {usable(activity.label_ar) ? activity.label_ar : t.arabicLabelUnavailable}
                  </dd>
                </div>
                <div className="rounded-xl bg-gray-50 p-3">
                  <dt className="text-xs font-semibold text-gray-600">Français</dt>
                  <dd dir="ltr" lang="fr" className="mt-1 text-xs sm:text-sm font-semibold leading-6 text-gray-950">
                    {usable(activity.label_fr) ? activity.label_fr : t.frenchLabelUnavailable}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-6 border-t border-gray-100 pt-5">
              <h2 className="text-xs sm:text-sm font-bold text-gray-800">{t.classification}</h2>
              <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-3">
                  <dt className="text-xs text-gray-600 font-medium">{t.sector}</dt>
                  <dd className="mt-1 font-semibold text-xs sm:text-sm text-gray-950">
                    {activity.sector_code} — {sector ? (ar ? sector.label_ar : sector.label_fr) : ""}
                  </dd>
                </div>
                <div className="rounded-xl bg-gray-50 p-3">
                  <dt className="text-xs text-gray-600 font-medium">{ar ? "حالة النشاط في المصدر" : "Statut dans la source"}</dt>
                  <dd className="mt-1">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${statusInfo.className}`}>
                      {activity.status === "red" ? (
                        <Ban className="h-3 w-3 text-rose-700" aria-hidden="true" />
                      ) : activity.status === "green" ? (
                        <AlertTriangle className="h-3 w-3 text-amber-700" aria-hidden="true" />
                      ) : (
                        <CheckCircle2 className="h-3 w-3 text-emerald-700" aria-hidden="true" />
                      )}
                      <span>{statusInfo.label}</span>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          {!hasPreferred && <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs sm:text-sm text-amber-950">{t.missingLabel}</p>}

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs sm:p-7">
            <h2 className="text-base sm:text-lg font-bold text-gray-950">{t.content}</h2>
            <div className="mt-3 space-y-3">
              {contentDisplay.value ? (
                <>
                  {ar && (
                    <p className="text-xs leading-5 text-gray-600">
                      ترجمة عربية استرشادية عن الوصف الفرنسي الوارد في نسخة البيانات؛ يُرجع إلى النص الفرنسي الأصلي عند المطابقة.
                    </p>
                  )}
                  <p dir={ar ? "rtl" : "ltr"} lang={lang} className="whitespace-pre-line text-xs sm:text-sm leading-7 text-gray-900">
                    {contentDisplay.value}
                  </p>
                </>
              ) : ar && contentDisplay.sourceFrench ? (
                <p dir="rtl" lang="ar" role="note" className="text-xs sm:text-sm leading-6 text-amber-900">
                  {t.contentTranslationUnavailable}
                </p>
              ) : (
                <p dir={ar ? "rtl" : "ltr"} lang={lang} className="text-xs sm:text-sm leading-6 text-gray-700">
                  {t.noContent}
                </p>
              )}
              {ar && contentDisplay.sourceFrench && (
                <details className="group rounded-xl border border-gray-100 bg-gray-50/70 p-3">
                  <summary className="cursor-pointer text-xs font-semibold text-emerald-800 hover:text-emerald-950 select-none">
                    {t.showFrenchSource}
                  </summary>
                  <p dir="ltr" lang="fr" className="mt-2 whitespace-pre-line font-mono text-xs text-gray-700 leading-relaxed">
                    {contentDisplay.sourceFrench}
                  </p>
                </details>
              )}
            </div>

            {(accessoriesDisplay.value || accessoriesDisplay.sourceFrench) && (
              <div className="mt-5 border-t border-gray-100 pt-4">
                <h3 className="text-xs sm:text-sm font-bold text-gray-800">{t.accessories}</h3>
                <div className="mt-2 space-y-2">
                  {accessoriesDisplay.value ? (
                    <p dir={ar ? "rtl" : "ltr"} lang={lang} className="whitespace-pre-line text-xs sm:text-sm leading-7 text-gray-900 font-medium">
                      {accessoriesDisplay.value}
                    </p>
                  ) : ar && accessoriesDisplay.sourceFrench ? (
                    <p dir="rtl" lang="ar" role="note" className="text-xs leading-6 text-amber-900">
                      {t.accessoriesTranslationUnavailable}
                    </p>
                  ) : null}
                  {ar && accessoriesDisplay.sourceFrench && (
                    <details className="group rounded-xl border border-gray-100 bg-gray-50/70 p-2.5">
                      <summary className="cursor-pointer text-xs font-semibold text-emerald-800 hover:text-emerald-950 select-none">
                        {t.showFrenchSource}
                      </summary>
                      <p dir="ltr" lang="fr" className="mt-1.5 whitespace-pre-line font-mono text-xs text-gray-600 leading-relaxed">
                        {accessoriesDisplay.sourceFrench}
                      </p>
                    </details>
                  )}
                </div>
              </div>
            )}
          </section>

          {regulatoryFields.length > 0 && (
            <details className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs sm:p-6" open>
              <summary className="cursor-pointer font-semibold text-xs sm:text-sm text-gray-900">
                {t.regulatory}
                <span className="ms-2 text-xs font-normal text-gray-600">({regulatoryFields.length})</span>
              </summary>
              <dl className="mt-4 space-y-4 border-t border-gray-100 pt-4">
                {regulatoryFields.map((field) => (
                  <div key={field.key}>
                    <dt className="text-xs sm:text-sm font-semibold text-gray-800">{field.label}</dt>
                    {field.primaryValue ? (
                      <dd dir={ar ? "rtl" : "ltr"} lang={lang} className="mt-1 whitespace-pre-line text-xs sm:text-sm leading-7 text-gray-900 font-medium">
                        {field.primaryValue}
                      </dd>
                    ) : (
                      <p dir="rtl" lang="ar" className="mt-1 text-xs leading-6 text-amber-900">
                        {t.fieldTranslationUnavailable}
                      </p>
                    )}
                    {ar && field.sourceFrench && (
                      <details className="mt-1 rounded-lg border border-gray-100 bg-gray-50/70 p-2">
                        <summary className="cursor-pointer text-xs font-semibold text-emerald-800 underline underline-offset-2">
                          {t.showFrenchSource}
                        </summary>
                        <p dir="ltr" lang="fr" className="mt-1 whitespace-pre-line text-xs leading-6 text-gray-700">
                          {field.sourceFrench}
                        </p>
                      </details>
                    )}
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-5 text-gray-600">
                {ar
                  ? "الحقول غير المتوفرة في نسخة البيانات لا تعني عدم وجود شرط تنظيمي."
                  : "Un champ absent du fichier ne signifie pas l’absence d’une exigence réglementaire."}
              </p>
            </details>
          )}

          {related.length > 0 && <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs sm:p-6">
            <h2 className="text-sm sm:text-base font-bold text-gray-950">{t.related}</h2>
            <ul className="mt-3 divide-y divide-gray-100">
              {related.map((item) => (
                <li key={item.code} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <p className="font-mono text-xs font-bold text-emerald-800" dir="ltr">{item.code}</p>
                    <p dir="rtl" lang="ar" className="mt-1 text-xs sm:text-sm font-semibold text-gray-900">
                      {usable(item.label_ar) ? item.label_ar : t.arabicLabelUnavailable}
                    </p>
                    <p dir="ltr" lang="fr" className="text-xs text-gray-700">
                      {usable(item.label_fr) ? item.label_fr : t.frenchLabelUnavailable}
                    </p>
                  </div>
                  <Link
                    href={action + "/" + item.code}
                    aria-label={ar ? `عرض بطاقة النشاط ${item.code}` : `Consulter la fiche de l'activité ${item.code}`}
                    className="inline-flex min-h-11 items-center text-xs sm:text-sm font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
                  >
                    {ar ? "عرض البطاقة" : "Consulter"}
                  </Link>
                </li>
              ))}
            </ul>
          </section>}

          <footer className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-4 text-xs leading-5 text-gray-600 sm:flex-row sm:items-center sm:justify-between print:hidden">
            <div>
              <p className="font-medium text-gray-800">{t.disclaimer}</p>
              <p className="mt-0.5 text-gray-400">{t.licenseLine}</p>
            </div>
            <a
              href={ar ? "https://sidjilcom.cnrc.dz/ar/web/sidjilcom/نشاطات" : "https://sidjilcom.cnrc.dz/fr/web/sidjilcom/nomenclature-de-vos-activites"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ar ? "فتح بوابة Sidjilcom في نافذة جديدة" : "Ouvrir le portail Sidjilcom dans une nouvelle fenêtre"}
              className="shrink-0 font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
            >
              {t.openSource}
            </a>
          </footer>
        </div>
      </main>
    </div>
  );
}
