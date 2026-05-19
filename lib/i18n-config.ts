export const locales = ['ar', 'fr'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'ar';
export const localePrefix = 'as-needed'; // 'ar' at root, 'fr' at /fr/
