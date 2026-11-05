"use client";

type Props = {
  code: string;
  selectedCodes: string[];
  baseHref: string;
  lang: "ar" | "fr";
};

const STORAGE_KEY = "lattab.nae.compare.v1";

export default function NAECompareButton({ code, selectedCodes, baseHref, lang }: Props) {
  const selected = selectedCodes.includes(code);
  const full = selectedCodes.length >= 3 && !selected;

  function toggleSelection() {
    if (full) return;
    const next = selected
      ? selectedCodes.filter((item) => item !== code)
      : [...selectedCodes, code];

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // The URL remains a usable fallback when local storage is unavailable.
    }

    const url = new URL(baseHref, window.location.origin);
    url.searchParams.set("compare", next.join(","));
    window.location.assign(`${url.pathname}${url.search}`);
  }

  const label = selected
    ? (lang === "ar" ? "إزالة من المقارنة" : "Retirer")
    : full
      ? (lang === "ar" ? "اكتمل الحد الأقصى (3)" : "Limite atteinte (3)")
      : (lang === "ar" ? "إضافة للمقارنة" : "Comparer");

  return (
    <button
      type="button"
      onClick={toggleSelection}
      disabled={full}
      aria-pressed={selected}
      className="inline-flex min-h-10 items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-emerald-700 hover:bg-emerald-50 hover:text-emerald-900 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
    >
      {label}
    </button>
  );
}
