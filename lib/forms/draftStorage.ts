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
export function loadDraft<T>(slug: string): FormDraft<T> | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(getStorageKey(slug));
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<FormDraft<T>>;
    if (parsed && typeof parsed === 'object' && parsed.version === 1 && parsed.data !== undefined) {
      return {
        version: 1,
        savedAt: typeof parsed.savedAt === 'string' ? parsed.savedAt : new Date().toISOString(),
        data: parsed.data as T,
      };
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
export function saveDraft<T>(slug: string, data: T): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const draft: FormDraft<T> = {
      version: 1,
      savedAt: new Date().toISOString(),
      data,
    };
    window.localStorage.setItem(getStorageKey(slug), JSON.stringify(draft));
  } catch {
    // Graceful fallback for quota exceeded or storage disabled
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
