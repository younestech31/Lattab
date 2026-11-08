import { NextRequest, NextResponse } from "next/server";
import { getNAEActivities, getNAEActivityByCode } from "@/lib/nae/data";
import { analyzeNAEProject } from "@/lib/nae/project-analysis";
import { NAE_SECTORS } from "@/lib/nae/sectors";
import { getNAEStatusInfo } from "@/lib/nae/status";
import { AnalyzePayloadSchema } from "@/lib/nae/api-schema";

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

  const parsed = AnalyzePayloadSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const input = parsed.data;
  const codes = [...new Set(input.codes)];
  const catalogSize = getNAEActivities().length;
  if (codes.length > catalogSize) {
    return NextResponse.json({ error: `Expected up to ${catalogSize} unique activity codes` }, { status: 400 });
  }

  const primaryCode = input.primaryCode && codes.includes(input.primaryCode) ? input.primaryCode : codes[0] ?? null;
  const activities = codes.map(getNAEActivityByCode).filter((activity) => activity !== undefined);
  if (activities.length !== codes.length) {
    return NextResponse.json({ error: "One or more activity codes were not found" }, { status: 404 });
  }

  const projectAnalysis = analyzeNAEProject(activities, input.description, primaryCode);
  const language = input.lang === "fr" ? "fr" : "ar";
  return NextResponse.json({
    activities: activities.map((activity) => ({
      code: activity.code,
      label_ar: activity.label_ar,
      label_fr: activity.label_fr,
      status: activity.status,
      statusInfo: getNAEStatusInfo(activity.status, language),
      sector_code: activity.sector_code,
      group_code: activity.group_code,
      subgroup_code: activity.subgroup_code,
      tutelle_fr: activity.tutelle_fr ?? null,
      type_autorisation_fr: activity.type_autorisation_fr ?? null,
      references_texte_fr: activity.references_texte_fr ?? null,
    })),
    analysis: { ...projectAnalysis, sectorLabels: projectAnalysis.sectors.map((code) => NAE_SECTORS[code as keyof typeof NAE_SECTORS]?.[language === "ar" ? "label_ar" : "label_fr"] ?? code) },
  }, { headers: { "Cache-Control": "no-store" } });
}
