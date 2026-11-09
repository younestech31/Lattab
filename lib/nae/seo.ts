import type { NAEActivity } from "./schema";

export type NAEPageLanguage = "ar" | "fr";

export function hasValidNAELabel(activity: NAEActivity, lang: NAEPageLanguage): boolean {
  const value = lang === "ar" ? activity.label_ar : activity.label_fr;
  return Boolean(value.trim()) && value.trim() !== "#NOM?";
}

/** Only pages with a usable localized title and substantive source content are indexable. */
export function isNAEActivityIndexable(activity: NAEActivity, lang: NAEPageLanguage): boolean {
  const arValid = hasValidNAELabel(activity, "ar");
  const frValid = hasValidNAELabel(activity, "fr");
  const contentValid = activity.contenue_fr.trim().length >= 60;
  return arValid && frValid && contentValid && hasValidNAELabel(activity, lang);
}

/** Never substitute a title in the other interface language. */
export function getNAEActivityTitle(activity: NAEActivity, lang: NAEPageLanguage): string {
  const preferred = lang === "ar" ? activity.label_ar : activity.label_fr;
  return preferred.trim() && preferred.trim() !== "#NOM?"
    ? preferred.trim()
    : activity.code;
}

export function getNAEPageDescription(activity: NAEActivity, lang: NAEPageLanguage): string {
  const title = getNAEActivityTitle(activity, lang);
  if (lang === "ar") {
    return `بطاقة مرجعية للنشاط الاقتصادي «${title}»، رمز NAE ${activity.code}. تتضمن التسمية والتصنيف ومحتوى النشاط والبيانات التنظيمية المتاحة في ملف المصدر.`;
  }
  const content = activity.contenue_fr.replace(/\s+/gu, " ").trim();
  const excerpt = content.length > 150 ? `${content.slice(0, 147).trimEnd()}…` : content;
  return excerpt
    ? `Code NAE ${activity.code} — ${title}. ${excerpt}`
    : `Fiche de référence de l’activité ${title}, code NAE ${activity.code}.`;
}
