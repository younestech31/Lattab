"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { analyzeNAEProject, getNAEProjectRegulatoryStatus } from "@/lib/nae/project-analysis";
import {
  NAE_PROJECT_CHANGE_EVENT,
  readNAEProjectDraft,
  saveNAEProjectDraft,
  type NAEProjectDraft,
} from "./project-storage";

const STATUS_LABELS = {
  ar: { free: "حر حسب المصدر", regulated: "منظم حسب المصدر", prohibited: "محظور حسب المصدر", unknown: "غير محدد" },
  fr: { free: "Libre selon la source", regulated: "Réglementée selon la source", prohibited: "Interdite selon la source", unknown: "Non renseigné" },
} as const;

export default function NAEProjectWorkspace({
  lang,
  description,
}: {
  lang: "ar" | "fr";
  description: string;
}) {
  const ar = lang === "ar";
  const [draft, setDraft] = useState<NAEProjectDraft>({
    version: 1,
    description,
    primaryCode: null,
    activities: [],
    updatedAt: "",
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readNAEProjectDraft();
    const initial = {
      ...stored,
      description: description || stored.description,
    };
    setDraft(initial);
    setReady(true);
    if (description && description !== stored.description) {
      saveNAEProjectDraft({ ...initial, updatedAt: new Date().toISOString() });
    }
    const sync = () => setDraft(readNAEProjectDraft());
    window.addEventListener(NAE_PROJECT_CHANGE_EVENT, sync);
    return () => window.removeEventListener(NAE_PROJECT_CHANGE_EVENT, sync);
  }, [description]);

  const analysis = useMemo(
    () => analyzeNAEProject(draft.activities, draft.description),
    [draft.activities, draft.description],
  );

  function update(next: NAEProjectDraft) {
    const normalized = { ...next, updatedAt: new Date().toISOString() };
    setDraft(normalized);
    saveNAEProjectDraft(normalized);
  }

  function removeActivity(code: string) {
    const activities = draft.activities.filter((item) => item.code !== code);
    const primaryCode = draft.primaryCode === code ? activities[0]?.code ?? null : draft.primaryCode;
    update({ ...draft, activities, primaryCode });
  }

  function setPrimary(code: string) {
    update({ ...draft, primaryCode: code });
  }

  function clearProject() {
    update({ version: 1, description: draft.description, primaryCode: null, activities: [], updatedAt: "" });
  }

  const t = ar ? {
    title: "قائمة نشاطات المشروع",
    subtitle: "اجمع النشاطات التي تصف الأعمال التي تنوي ممارستها، ثم راجعها قبل التسجيل.",
    empty: "لم تضف أي نشاط بعد. ابحث عن النشاطات في الأعلى وأضف المناسب منها إلى قائمتك.",
    count: "نشاط",
    primary: "النشاط الرئيسي",
    makePrimary: "تعيين كنشاط رئيسي",
    remove: "إزالة",
    analysis: "مراجعة أولية للاختيارات",
    sameGroup: "النشاطات المختارة تنتمي إلى المجموعة نفسها؛ هذا تقارب تصنيفي وليس موافقة على الجمع.",
    sameSubgroup: "النشاطات المختارة تنتمي إلى المجموعة الفرعية نفسها؛ هذا لا يثبت وحده جواز جمعها.",
    sectors: "القطاعات الموجودة في القائمة",
    print: "طباعة ورقة التحضير",
    clear: "مسح القائمة",
    privacy: "تُحفظ القائمة على هذا الجهاز فقط في المتصفح، ولا تُرسل إلى المكتب.",
    sourceDate: "حالة المصدر وفق لقطة البيانات المؤرخة 01 أكتوبر 2026؛ تحقق من وضع الرمز الحالي لدى CNRC.",
    noLegalApproval: "هذه مراجعة استرشادية آلية وليست موافقة من CNRC ولا تأكيداً لجواز جمع النشاطات.",
  } : {
    title: "Activités du projet",
    subtitle: "Regroupez les activités correspondant aux opérations envisagées et examinez-les avant l’inscription.",
    empty: "Aucune activité ajoutée. Recherchez ci-dessus et ajoutez les activités pertinentes à votre liste.",
    count: "activité(s)",
    primary: "Activité principale",
    makePrimary: "Définir comme activité principale",
    remove: "Retirer",
    analysis: "Pré-examen de la sélection",
    sameGroup: "Les activités appartiennent au même groupe ; cette proximité de classification ne vaut pas autorisation de cumul.",
    sameSubgroup: "Les activités appartiennent au même sous-groupe ; cela ne prouve pas à lui seul que leur cumul est admis.",
    sectors: "Secteurs présents dans la liste",
    print: "Imprimer la fiche préparatoire",
    clear: "Effacer la liste",
    privacy: "La liste est conservée localement sur cet appareil et n’est pas transmise à l’office.",
    sourceDate: "Statut de source selon l’instantané du 1er octobre 2026 ; vérifiez l’état actuel auprès du CNRC.",
    noLegalApproval: "Cet examen est indicatif. Il ne constitue ni une approbation du CNRC ni une confirmation de cumul autorisé.",
  };

  if (!ready) return null;

  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
      data-nae-project-sheet aria-labelledby="nae-project-title">
      <style>{`@media print { body:has([data-nae-project-sheet]) * { visibility:hidden!important; } [data-nae-project-sheet], [data-nae-project-sheet] * { visibility:visible!important; } [data-nae-project-sheet] { position:absolute!important; inset:0!important; width:100%!important; margin:0!important; border:0!important; box-shadow:none!important; } [data-nae-project-sheet] .print-hidden { display:none!important; } }`}</style>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 id="nae-project-title" className="text-lg font-bold text-gray-900">{t.title}</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">{t.subtitle}</p>
        </div>
        <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
          {draft.activities.length} {t.count}
        </span>
      </div>

      {draft.activities.length === 0 ? (
        <p className="mt-4 rounded-xl bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-600">{t.empty}</p>
      ) : (
        <>
          <ol className="mt-4 divide-y divide-gray-100 border-y border-gray-100">
            {draft.activities.map((activity) => {
              const isPrimary = draft.primaryCode === activity.code;
              const status = getNAEProjectRegulatoryStatus(activity.status);
              return (
                <li key={activity.code} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-900" dir="ltr">{activity.code}</span>
                      {isPrimary && <span className="text-xs font-semibold text-gray-700">{t.primary}</span>}
                      <span className="text-xs text-gray-500">{STATUS_LABELS[lang][status]}</span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900">{ar ? (activity.label_ar || activity.label_fr) : (activity.label_fr || activity.label_ar)}</p>
                    <p className="mt-1 text-xs text-gray-500">{t.sectors}: {activity.sector_code}</p>
                  </div>
                  <div className="print-hidden flex shrink-0 flex-wrap items-center gap-2">
                    <Link href={`${ar ? "" : "/fr"}/nae/${activity.code}`} className="text-xs font-semibold text-emerald-800 underline underline-offset-4">{ar ? "التفاصيل" : "Détails"}</Link>
                    {!isPrimary && <button type="button" onClick={() => setPrimary(activity.code)} className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">{t.makePrimary}</button>}
                    <button type="button" onClick={() => removeActivity(activity.code)} className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">{t.remove}</button>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-5">
            <h3 className="text-base font-bold text-gray-900">{t.analysis}</h3>
            {analysis.findings.length > 0 ? (
              <ul className="mt-3 space-y-3">
                {analysis.findings.map((finding) => (
                  <li key={finding.id} className="border-s-2 border-gray-300 ps-3">
                    <p className="text-sm font-semibold text-gray-900">{ar ? finding.title_ar : finding.title_fr}</p>
                    <p className="mt-1 text-sm leading-6 text-gray-700">{ar ? finding.message_ar : finding.message_fr}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-gray-600">{ar ? "لم تظهر مؤشرات عامة إضافية ضمن القواعد المدمجة." : "Aucun autre indicateur général n’a été détecté par les règles intégrées."}</p>
            )}
            {analysis.sectors.length > 0 && <p className="mt-3 text-xs text-gray-500">{t.sectors}: {analysis.sectors.join("، ")}</p>}
          </div>
        </>
      )}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 print-hidden">
        <p className="max-w-2xl text-xs leading-5 text-gray-500">{t.privacy}<br />{t.sourceDate}<br />{t.noLegalApproval}</p>
        <div className="flex flex-wrap gap-2">
          {draft.activities.length > 0 && <button type="button" onClick={() => window.print()} className="rounded-lg bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900">{t.print}</button>}
          {draft.activities.length > 0 && <button type="button" onClick={clearProject} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">{t.clear}</button>}
        </div>
      </div>
    </section>
  );
}
