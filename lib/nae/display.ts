export type NAEDisplayLanguage = "ar" | "fr";

export interface NAELocalizedField {
  value: string | null;
  sourceFrench: string | null;
  isTranslated: boolean;
}

function usable(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.trim() !== "#NOM?";
}

/**
 * Selects the primary value for the active interface language.
 * French source text is never used as an Arabic primary value; it remains
 * available separately for a collapsed source-text disclosure.
 */
export function getNAELocalizedField(
  sourceFrench: string | null | undefined,
  translationArabic: string | null | undefined,
  language: NAEDisplayLanguage,
): NAELocalizedField {
  const french = usable(sourceFrench) ? sourceFrench.trim() : null;
  const arabic = usable(translationArabic) ? translationArabic.trim() : null;

  if (language === "fr") {
    return { value: french, sourceFrench: null, isTranslated: false };
  }

  return {
    value: arabic,
    sourceFrench: french,
    isTranslated: arabic !== null,
  };
}
