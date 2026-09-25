'use server';

export async function setLanguageCookie(_lang: 'ar' | 'fr') {
  // No-op: Language is strictly URL-based (/ vs /fr). No cookies are set.
}

