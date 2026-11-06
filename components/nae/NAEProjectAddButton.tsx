"use client";

import { useEffect, useState } from "react";
import { requiresVerificationBeforeProjectSelection, type NAEProjectActivity } from "@/lib/nae/project-analysis";
import {
  NAE_PROJECT_CHANGE_EVENT,
  readNAEProjectDraft,
  saveNAEProjectDraft,
} from "./project-storage";

export default function NAEProjectAddButton({
  activity,
  lang,
}: {
  activity: NAEProjectActivity;
  lang: "ar" | "fr";
}) {
  const ar = lang === "ar";
  const requiresVerification = requiresVerificationBeforeProjectSelection(activity);
  const [added, setAdded] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const sync = () => setAdded(readNAEProjectDraft().activities.some((item) => item.code === activity.code));
    sync();
    window.addEventListener(NAE_PROJECT_CHANGE_EVENT, sync);
    return () => window.removeEventListener(NAE_PROJECT_CHANGE_EVENT, sync);
  }, [activity.code]);

  function addToProject() {
    const draft = readNAEProjectDraft();
    if (draft.activities.some((item) => item.code === activity.code)) {
      setAdded(true);
      setMessage(ar ? "هذا النشاط موجود في قائمة المشروع." : "Cette activité figure déjà dans le projet.");
      return;
    }
    const next = {
      ...draft,
      primaryCode: draft.primaryCode ?? activity.code,
      activities: [...draft.activities, activity],
      updatedAt: new Date().toISOString(),
    };
    const saved = saveNAEProjectDraft(next);
    setAdded(saved);
    setMessage(saved
      ? (ar ? "أُضيف النشاط إلى قائمة المشروع." : "Activité ajoutée au projet.")
      : (ar ? "تعذر الحفظ محلياً. تحقق من إعدادات المتصفح." : "Enregistrement local impossible. Vérifiez les paramètres du navigateur."));
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button type="button" onClick={addToProject} disabled={added || requiresVerification}
        className="inline-flex min-h-10 items-center rounded-lg border border-emerald-800 px-4 text-sm font-semibold text-emerald-900 hover:bg-emerald-50 disabled:cursor-default disabled:border-gray-300 disabled:text-gray-500 disabled:hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2">
        {requiresVerification
          ? (ar ? "تحقق من الرمز قبل الإضافة" : "Vérifier le code avant l’ajout")
          : added
            ? (ar ? "مضاف إلى المشروع" : "Ajoutée au projet")
            : (ar ? "إضافة إلى المشروع" : "Ajouter au projet")}
      </button>
      {requiresVerification && <span className="text-xs leading-5 text-amber-800">{ar ? "ورد تقرير متابعة عن سحب الرمز؛ لا تضفه إلى مشروع جديد قبل التحقق من حالته لدى CNRC." : "Un signalement de retrait a été publié ; vérifiez le statut auprès du CNRC avant d’ajouter ce code à un nouveau projet."}</span>}
      {message && <span role="status" className="text-xs text-gray-600">{message}</span>}
    </div>
  );
}
