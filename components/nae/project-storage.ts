import type { NAEProjectActivity } from "@/lib/nae/project-analysis";

export const NAE_PROJECT_STORAGE_KEY = "lattab.nae.project.v1";
export const NAE_PROJECT_CHANGE_EVENT = "lattab:nae-project-change";

export interface NAEProjectDraft {
  version: 1;
  description: string;
  primaryCode: string | null;
  activities: NAEProjectActivity[];
  updatedAt: string;
}

const EMPTY_DRAFT: NAEProjectDraft = {
  version: 1,
  description: "",
  primaryCode: null,
  activities: [],
  updatedAt: "",
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readActivity(value: unknown): NAEProjectActivity | null {
  if (!isObject(value)) return null;
  const code = value.code;
  const sector = value.sector_code;
  const group = value.group_code;
  const subgroup = value.subgroup_code;
  if (
    typeof code !== "string" || !/^\d{6}$/u.test(code) ||
    typeof sector !== "string" || !/^[1-7]$/u.test(sector) ||
    typeof group !== "string" || typeof subgroup !== "string"
  ) return null;

  const stringValue = (key: string) =>
    typeof value[key] === "string" ? value[key] as string : "";
  const nullableValue = (key: string) =>
    typeof value[key] === "string" ? value[key] as string : null;

  return {
    code,
    label_ar: stringValue("label_ar"),
    label_fr: stringValue("label_fr"),
    status: stringValue("status"),
    sector_code: sector,
    group_code: group,
    subgroup_code: subgroup,
    tutelle_fr: nullableValue("tutelle_fr"),
    type_autorisation_fr: nullableValue("type_autorisation_fr"),
    references_texte_fr: nullableValue("references_texte_fr"),
  };
}

export function readNAEProjectDraft(): NAEProjectDraft {
  if (typeof window === "undefined") return EMPTY_DRAFT;
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(NAE_PROJECT_STORAGE_KEY) ?? "null");
    if (!isObject(parsed) || parsed.version !== 1 || !Array.isArray(parsed.activities)) {
      return EMPTY_DRAFT;
    }
    const activities = parsed.activities
      .map(readActivity)
      .filter((item): item is NAEProjectActivity => item !== null);
    const codes = new Set<string>();
    const uniqueActivities = activities.filter((item) => {
      if (codes.has(item.code)) return false;
      codes.add(item.code);
      return true;
    });
    const primary = typeof parsed.primaryCode === "string" &&
      uniqueActivities.some((item) => item.code === parsed.primaryCode)
      ? parsed.primaryCode
      : uniqueActivities[0]?.code ?? null;

    return {
      version: 1,
      description: typeof parsed.description === "string" ? parsed.description : "",
      primaryCode: primary,
      activities: uniqueActivities,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return EMPTY_DRAFT;
  }
}

export function saveNAEProjectDraft(draft: NAEProjectDraft): boolean {
  if (typeof window === "undefined") return false;
  try {
    window.localStorage.setItem(NAE_PROJECT_STORAGE_KEY, JSON.stringify(draft));
    window.dispatchEvent(new Event(NAE_PROJECT_CHANGE_EVENT));
    return true;
  } catch {
    return false;
  }
}
