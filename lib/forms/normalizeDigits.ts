/**
 * Normalize Arabic-Indic, Eastern Arabic-Indic and ASCII numerals before
 * filtering or distributing identifiers into official PDF boxes.
 */
export function normalizeDigits(value: string): string {
  return Array.from(value, (char) => {
    const code = char.codePointAt(0) ?? 0;
    if (code >= 0x0660 && code <= 0x0669) return String(code - 0x0660);
    if (code >= 0x06f0 && code <= 0x06f9) return String(code - 0x06f0);
    return char;
  }).join('');
}

export function digitsOnly(value: string): string {
  return normalizeDigits(value).replace(/[^0-9]/g, '');
}
