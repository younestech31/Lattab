"use client";

import { useEffect } from "react";

const STORAGE_KEY = "lattab.nae.compare.v1";

function parseStoredCodes(value: string | null): string[] {
  if (!value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return [...new Set(parsed.filter((item): item is string => typeof item === "string" && /^[0-9]{6}$/.test(item)))].slice(0, 3);
  } catch {
    return [];
  }
}

export default function NAECompareRestore({
  selectedCodes,
  compareParamPresent,
}: {
  selectedCodes: string[];
  compareParamPresent: boolean;
}) {
  const serializedCodes = selectedCodes.join(",");

  useEffect(() => {
    try {
      if (compareParamPresent) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedCodes));
        return;
      }

      const storedCodes = parseStoredCodes(window.localStorage.getItem(STORAGE_KEY));
      if (!storedCodes.length) return;

      const url = new URL(window.location.href);
      url.searchParams.set("compare", storedCodes.join(","));
      window.location.replace(`${url.pathname}${url.search}`);
    } catch {
      // Comparison remains available through the explicit URL state.
    }
  }, [compareParamPresent, serializedCodes]);

  return null;
}
