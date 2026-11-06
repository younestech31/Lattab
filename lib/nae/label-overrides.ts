import labelOverridesJson from "../../data/nae/label-overrides.json";

export type NAELabelField = "label_ar" | "label_fr" | "label_en";

interface NAELabelOverrideValue {
  from: string;
  value: string;
  source_language: "ar" | "fr" | "en";
  source_url: string;
}

type NAELabelOverrideRecord = Partial<Record<NAELabelField, NAELabelOverrideValue>>;

interface NAELabelOverrideFile {
  version: number;
  verified_at: string;
  attribution: string;
  license: string;
  source_pages: Record<"ar" | "fr" | "en", string>;
  policy: string;
  overrides: Record<string, NAELabelOverrideRecord>;
}

const overrideFile = labelOverridesJson as NAELabelOverrideFile;

/**
 * Apply a sourced display correction only when the bundled source value is
 * still the exact placeholder recorded in the override file. This keeps the
 * original CSV/sector JSON untouched and allows a future corrected source
 * snapshot to supersede this overlay automatically.
 */
export function applyNAELabelOverrides<T extends {
  code: string;
  label_ar: string;
  label_fr: string;
  label_en: string;
}>(activity: T): T {
  const entry = overrideFile.overrides[activity.code];
  if (!entry) return activity;

  const result = { ...activity };
  for (const field of ["label_ar", "label_fr", "label_en"] as const) {
    const correction = entry[field];
    if (!correction || result[field] !== correction.from || !correction.value.trim()) continue;
    result[field] = correction.value;
  }
  return result;
}

export function getNAELabelOverrideFile(): NAELabelOverrideFile {
  return overrideFile;
}
