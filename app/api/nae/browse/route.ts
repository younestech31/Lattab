import { NextRequest, NextResponse } from "next/server";
import { getNAEActivities, getNAEActivityByCode } from "@/lib/nae/data";
import { getNAEStatusInfo } from "@/lib/nae/status";
import { BrowsePayloadSchema } from "@/lib/nae/api-schema";
import { getComplementaryActivities } from "@/lib/nae/suggestions";
import { normalizeNAESearchText } from "@/lib/nae/search";
import { resolveActivityBilingual } from "@/lib/nae/gap-resolver";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 16384) {
    return NextResponse.json({ error: "Request body too large" }, { status: 413 });
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = BrowsePayloadSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { lang, sector, status, subgroup, complementaryTo, q, page, pageSize } = parsed.data;
  const language = lang === "fr" ? "fr" : "ar";

  // Handle Complementary Suggestions Mode
  if (complementaryTo) {
    const targetActivity = getNAEActivityByCode(complementaryTo);
    if (!targetActivity) {
      return NextResponse.json({ error: "Target activity code not found" }, { status: 404 });
    }

    const all = getNAEActivities();
    const suggestions = getComplementaryActivities(complementaryTo, all, [], 6);
    return NextResponse.json(
      {
        targetCode: complementaryTo,
        suggestions: suggestions.map((s) => {
          const resolved = resolveActivityBilingual(s.activity);
          return {
            code: resolved.code,
            label_ar: resolved.label_ar,
            label_fr: resolved.label_fr,
            status: resolved.status,
            statusInfo: getNAEStatusInfo(resolved.status, language),
            sector_code: resolved.sector_code,
            group_code: resolved.group_code,
            subgroup_code: resolved.subgroup_code,
            tutelle_fr: resolved.tutelle_fr,
            tutelle_ar: resolved.tutelle_ar,
            type_autorisation_fr: resolved.type_autorisation_fr,
            type_autorisation_ar: resolved.type_autorisation_ar,
            reason: language === "ar" ? s.reason_ar : s.reason_fr,
            matchType: s.matchType,
          };
        }),
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  // Handle Standard Directory Browsing & Filtering Mode
  const allActivities = getNAEActivities();
  let filtered = allActivities;

  if (sector && sector !== "all") {
    filtered = filtered.filter((act) => act.sector_code === sector);
  }

  if (status && status !== "all") {
    filtered = filtered.filter((act) => act.status === status);
  }

  if (subgroup) {
    filtered = filtered.filter((act) => act.subgroup_code === subgroup);
  }

  if (q && q.trim().length > 0) {
    const norm = normalizeNAESearchText(q);
    filtered = filtered.filter((act) => {
      const resolved = resolveActivityBilingual(act);
      if (act.code.includes(norm)) return true;
      const searchableFields = [
        act.label_ar,
        act.label_fr,
        resolved.tutelle_ar,
        resolved.tutelle_fr,
        resolved.type_autorisation_ar,
        resolved.type_autorisation_fr,
        resolved.contenue_ar,
        resolved.contenue_fr,
        resolved.accessoires_ar,
        resolved.accessoires_fr,
        resolved.references_texte_ar,
        resolved.references_texte_fr,
      ];
      return searchableFields.some(
        (value) => Boolean(value) && normalizeNAESearchText(value!).includes(norm),
      );
    });
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize) || 1;
  const validPage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (validPage - 1) * pageSize;
  const pageActivities = filtered.slice(startIndex, startIndex + pageSize);

  return NextResponse.json(
    {
      page: validPage,
      pageSize,
      total,
      totalPages,
      activities: pageActivities.map((act) => {
        const resolved = resolveActivityBilingual(act);
        return {
          code: resolved.code,
          label_ar: resolved.label_ar,
          label_fr: resolved.label_fr,
          status: resolved.status,
          statusInfo: getNAEStatusInfo(resolved.status, language),
          sector_code: resolved.sector_code,
          group_code: resolved.group_code,
          subgroup_code: resolved.subgroup_code,
          tutelle_fr: resolved.tutelle_fr,
          tutelle_ar: resolved.tutelle_ar,
          type_autorisation_fr: resolved.type_autorisation_fr,
          type_autorisation_ar: resolved.type_autorisation_ar,
          contenue_fr: resolved.contenue_fr,
          contenue_ar: resolved.contenue_ar,
          accessoires_fr: resolved.accessoires_fr,
          accessoires_ar: resolved.accessoires_ar,
        };
      }),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
