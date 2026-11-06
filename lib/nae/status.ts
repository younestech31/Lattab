export type NAEStatusCode = "free" | "regulated" | "blocked" | "unknown";
export type NAEStatusLanguage = "ar" | "fr";
export interface NAEStatusInfo { code: NAEStatusCode; label: string; explanation: string; className: string }

const STATUS_MAP: Record<string, NAEStatusCode> = {
  normal: "free",
  green: "regulated",
  red: "blocked",
};

const LABELS: Record<NAEStatusCode, Record<NAEStatusLanguage, Omit<NAEStatusInfo, "code">>> = {
  free: {
    ar: {
      label: "حر",
      explanation: "تصنف نسخة المصدر هذا النشاط بأنه حر. لا يعفي ذلك من الشروط العامة أو المتطلبات القطاعية الأخرى إن وجدت.",
      className: "border-emerald-200 bg-emerald-50 text-emerald-900",
    },
    fr: {
      label: "Libre",
      explanation: "La source classe cette activité comme libre. Cela ne dispense pas des conditions générales ni d’autres exigences sectorielles éventuellement applicables.",
      className: "border-emerald-200 bg-emerald-50 text-emerald-900",
    },
  },
  regulated: {
    ar: {
      label: "منظم",
      explanation: "تصنف نسخة المصدر هذا النشاط بأنه منظم. راجع الجهة المختصة والنص الخاص وطبيعة الإجراء وتوقيت الحصول عليه.",
      className: "border-amber-200 bg-amber-50 text-amber-950",
    },
    fr: {
      label: "Réglementée",
      explanation: "La source classe cette activité comme réglementée. Vérifiez l’autorité compétente, le texte spécial, la nature de l’autorisation et le moment requis.",
      className: "border-amber-200 bg-amber-50 text-amber-950",
    },
  },
  blocked: {
    ar: {
      label: "محظور",
      explanation: "تصنف نسخة المصدر هذا النشاط بأنه محظور. تحقق من أحدث وضع لدى CNRC والنصوص السارية قبل اعتماده.",
      className: "border-rose-200 bg-rose-50 text-rose-950",
    },
    fr: {
      label: "Bloquée",
      explanation: "La source classe cette activité comme bloquée. Vérifiez sa situation actuelle auprès du CNRC et dans les textes en vigueur avant de la retenir.",
      className: "border-rose-200 bg-rose-50 text-rose-950",
    },
  },
  unknown: {
    ar: {
      label: "غير معروف",
      explanation: "قيمة الحالة في المصدر غير معروفة لهذا المحرك؛ يلزم التحقق منها.",
      className: "border-gray-200 bg-gray-50 text-gray-800",
    },
    fr: {
      label: "Inconnu",
      explanation: "La valeur du statut n’est pas reconnue par ce moteur ; une vérification est nécessaire.",
      className: "border-gray-200 bg-gray-50 text-gray-800",
    },
  },
};

/** Mapping published by the UpGrowth NAE 2026 dataset page; the raw source value is retained. */
export function getNAEStatusCode(raw: string | null | undefined): NAEStatusCode {
  return raw ? STATUS_MAP[raw.trim().toLowerCase()] ?? "unknown" : "unknown";
}

export function getNAEStatusInfo(raw: string | null | undefined, lang: NAEStatusLanguage = "ar"): NAEStatusInfo {
  const code = getNAEStatusCode(raw);
  return { code, ...LABELS[code][lang] };
}
