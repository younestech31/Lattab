"use client";

export default function NAEPrintButton({ lang }: { lang: "ar" | "fr" }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-10 items-center justify-center rounded-lg bg-emerald-800 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 print:hidden"
    >
      {lang === "ar" ? "طباعة ورقة المقارنة" : "Imprimer la comparaison"}
    </button>
  );
}
