/**
 * Browser-only draft persistence for administrative forms (localStorage).
 * Strictly client-side, zero server transmission, no external dependencies.
 */

export interface FormDraft<T = unknown> {
  version: 1;
  savedAt: string; // ISO string
  data: T;
}

function getStorageKey(slug: string): string {
  return `lattab:form-draft:${slug}`;
}

/**
 * Loads a saved form draft from browser localStorage.
 * Returns null if running on server, not found, or corrupted. Never throws.
 */
export function loadDraft<T>(slug: string, parseData?: (value: unknown) => T | null): FormDraft<T> | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(getStorageKey(slug));
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<FormDraft<unknown>>;
    if (
      parsed &&
      typeof parsed === 'object' &&
      parsed.version === 1 &&
      parsed.data !== undefined &&
      typeof parsed.data === 'object' &&
      parsed.data !== null &&
      !Array.isArray(parsed.data)
    ) {
      const data = parseData ? parseData(parsed.data) : parsed.data as T;
      if (data === null) return null;
      const savedAt = typeof parsed.savedAt === 'string' && !Number.isNaN(Date.parse(parsed.savedAt))
        ? parsed.savedAt
        : new Date().toISOString();
      return { version: 1, savedAt, data };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Saves form draft to browser localStorage.
 * Silently catches quota or private browsing exceptions. Never throws.
 */
export function saveDraft<T>(slug: string, data: T): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const draft: FormDraft<T> = {
      version: 1,
      savedAt: new Date().toISOString(),
      data,
    };
    window.localStorage.setItem(getStorageKey(slug), JSON.stringify(draft));
    return true;
  } catch {
    // Graceful fallback for quota exceeded or storage disabled
    return false;
  }
}

/**
 * Clears saved draft for a given form slug. Never throws.
 */
export function clearDraft(slug: string): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.removeItem(getStorageKey(slug));
  } catch {
    // Ignore error
  }
}
