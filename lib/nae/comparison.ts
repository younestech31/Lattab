export function normalizeNAECompareCodes(
  value: string | string[] | undefined,
  isKnownCode: (code: string) => boolean,
): string[] {
  const raw = Array.isArray(value) ? value[0] ?? "" : value ?? "";
  return [...new Set(raw.split(",").filter((code) => /^[0-9]{6}$/.test(code)))]
    .filter(isKnownCode)
    .slice(0, 3);
}
