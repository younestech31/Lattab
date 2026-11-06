import observations from "../../data/nae/source-observations.json";

export interface NAEActivitySourceNote {
  kind: "withdrawal_report" | "authority_change_report" | "content_change_report";
  message_ar: string;
  message_fr: string;
}

/** Secondary monitoring flags; never rewrite or replace source activity rows. */
export function getNAEActivitySourceNote(code: string): NAEActivitySourceNote | null {
  const monitoring = observations.monitoring_observations[0];
  if (!monitoring) return null;

  const withdrawal = monitoring.reported_withdrawals.find((item) => item.code === code);
  if (withdrawal) {
    return {
      kind: "withdrawal_report",
      message_ar: "تنبيه حداثة: رصد مصدر متابعة ثانوي تقريراً عن سحب هذا الرمز بتاريخ 29 أكتوبر 2026. لم يُستبدل سجل النسخة القديمة؛ تحقّق من CNRC قبل اعتماده.",
      message_fr: "Alerte de mise à jour : une source secondaire a signalé le retrait de ce code le 29 octobre 2026. L’ancienne fiche est conservée ; vérifiez auprès du CNRC avant de le retenir.",
    };
  }

  const authorityChange = monitoring.reported_supervisory_authority_changes.find((item) => item.code === code);
  if (authorityChange) {
    return {
      kind: "authority_change_report",
      message_ar: "تنبيه حداثة: ورد تقرير عن تغيير الجهة الوصية لهذا النشاط بعد نسخة 1 أكتوبر 2026. بيانات الجهة الوصية المعروضة قديمة وتحتاج إلى تحقق رسمي.",
      message_fr: "Alerte de mise à jour : un changement de tutelle a été signalé après l’instantané du 1er octobre 2026. La tutelle affichée peut être obsolète et doit être vérifiée officiellement.",
    };
  }

  const changedContent = monitoring.reported_content_changes.known_examples.includes(code);
  if (changedContent) {
    return {
      kind: "content_change_report",
      message_ar: "تنبيه حداثة: أُبلغ عن تعديل محتوى هذا النشاط أو عملياته الملحقة بعد نسخة 1 أكتوبر 2026. راجع السجل الحالي في Sidjilcom قبل الاعتماد على الوصف القديم.",
      message_fr: "Alerte de mise à jour : une modification du contenu ou des opérations accessoires a été signalée après l’instantané du 1er octobre 2026. Consultez la fiche actuelle sur Sidjilcom.",
    };
  }
  return null;
}
