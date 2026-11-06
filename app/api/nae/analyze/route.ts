import { NextRequest, NextResponse } from "next/server";
import { getNAEActivities, getNAEActivityByCode } from "@/lib/nae/data";
import { analyzeNAEProject } from "@/lib/nae/project-analysis";
import { NAE_SECTORS } from "@/lib/nae/sectors";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  let body: unknown;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 }); }
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

  const input = body as { codes?: unknown; description?: unknown; primaryCode?: unknown; lang?: unknown };
  const catalogSize = getNAEActivities().length;
  if (!Array.isArray(input.codes) || input.codes.length > catalogSize ||
      input.codes.some((code) => typeof code !== "string" || !/^\d{6}$/.test(code))) {
    return NextResponse.json({ error: `Expected up to ${catalogSize} six-digit activity codes` }, { status: 400 });
  }

  const codes = [...new Set(input.codes as string[])];
  const primaryCode = typeof input.primaryCode === "string" && codes.includes(input.primaryCode) ? input.primaryCode : codes[0] ?? null;
  const description = typeof input.description === "string" ? input.description.slice(0, 180) : "";
  const activities = codes.map(getNAEActivityByCode).filter((activity) => activity !== undefined);
  if (activities.length !== codes.length) return NextResponse.json({ error: "One or more activity codes were not found" }, { status: 404 });

  const projectAnalysis = analyzeNAEProject(activities, description, primaryCode);
  const language = input.lang === "fr" ? "fr" : "ar";
  return NextResponse.json({
    activities: activities.map((activity) => ({
      code: activity.code,
      label_ar: activity.label_ar,
      label_fr: activity.label_fr,
      status: activity.status,
      sector_code: activity.sector_code,
      group_code: activity.group_code,
      subgroup_code: activity.subgroup_code,
    })),
    analysis: { ...projectAnalysis, sectorLabels: projectAnalysis.sectors.map((code) => NAE_SECTORS[code as keyof typeof NAE_SECTORS]?.[language === "ar" ? "label_ar" : "label_fr"] ?? code) },
  }, { headers: { "Cache-Control": "no-store" } });
}
