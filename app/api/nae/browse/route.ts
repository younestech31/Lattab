import { NextRequest, NextResponse } from "next/server";
import { getNAEActivities, getNAEActivityByCode } from "@/lib/nae/data";
import { getNAEStatusInfo } from "@/lib/nae/status";
import { BrowsePayloadSchema } from "@/lib/nae/api-schema";
import { getComplementaryActivities } from "@/lib/nae/suggestions";
import { normalizeNAESearchText } from "@/lib/nae/search";

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
        suggestions: suggestions.map((s) => ({
          code: s.activity.code,
          label_ar: s.activity.label_ar,
          label_fr: s.activity.label_fr,
          status: s.activity.status,
          statusInfo: getNAEStatusInfo(s.activity.status, language),
          sector_code: s.activity.sector_code,
          group_code: s.activity.group_code,
          subgroup_code: s.activity.subgroup_code,
          reason: language === "ar" ? s.reason_ar : s.reason_fr,
          matchType: s.matchType,
        })),
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
      if (act.code.includes(norm)) return true;
      if (normalizeNAESearchText(act.label_ar).includes(norm)) return true;
      if (normalizeNAESearchText(act.label_fr).includes(norm)) return true;
      return false;
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
      activities: pageActivities.map((act) => ({
        code: act.code,
        label_ar: act.label_ar,
        label_fr: act.label_fr,
        status: act.status,
        statusInfo: getNAEStatusInfo(act.status, language),
        sector_code: act.sector_code,
        group_code: act.group_code,
        subgroup_code: act.subgroup_code,
        tutelle_fr: act.tutelle_fr ?? null,
        type_autorisation_fr: act.type_autorisation_fr ?? null,
        contenue_fr: act.contenue_fr,
        accessoires_fr: act.accessoires_fr ?? null,
      })),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
