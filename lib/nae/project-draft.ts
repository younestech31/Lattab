export interface NAEProjectDraft {
  version: 1;
  description: string;
  codes: string[];
  primaryCode: string | null;
}

export const NAE_PROJECT_DRAFT_STORAGE_KEY = "lattab.nae.project.v1";
export const NAE_PROJECT_DESCRIPTION_MAX_LENGTH = 600;

const EMPTY_DRAFT: NAEProjectDraft = {
  version: 1,
  description: "",
  codes: [],
  primaryCode: null,
};

/** Parse and validate a locally stored project draft without trusting browser data. */
export function parseNAEProjectDraft(raw: string | null): NAEProjectDraft {
  if (!raw) return EMPTY_DRAFT;

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return EMPTY_DRAFT;

    const value = parsed as {
      version?: unknown;
      description?: unknown;
      codes?: unknown;
      primaryCode?: unknown;
    };
    if (value.version !== 1 || !Array.isArray(value.codes)) return EMPTY_DRAFT;

    const codes = [...new Set(value.codes.filter(
      (code): code is string => typeof code === "string" && /^\d{6}$/.test(code),
    ))];
    const primaryCode =
      typeof value.primaryCode === "string" && codes.includes(value.primaryCode)
        ? value.primaryCode
        : codes[0] ?? null;

    return {
      version: 1,
      description:
        typeof value.description === "string" ? value.description.slice(0, NAE_PROJECT_DESCRIPTION_MAX_LENGTH) : "",
      codes,
      primaryCode,
    };
  } catch {
    return EMPTY_DRAFT;
  }
}

/** Add a valid activity code while preserving the current primary activity and all selections. */
export function addNAEProjectCode(
  draft: NAEProjectDraft,
  code: string,
): NAEProjectDraft {
  if (!/^\d{6}$/.test(code)) return draft;

  const codes = draft.codes.includes(code) ? draft.codes : [...draft.codes, code];
  const primaryCode =
    draft.primaryCode && codes.includes(draft.primaryCode)
      ? draft.primaryCode
      : draft.codes[0] ?? code;

  return { ...draft, codes, primaryCode };
}
