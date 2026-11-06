import { NextRequest, NextResponse } from "next/server";
import { getNAESearchIndex } from "@/lib/nae/data";
import { searchNAEProject } from "@/lib/nae/project-search";
import { getNAEStatusInfo } from "@/lib/nae/status";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  let body: unknown;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 }); }
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

  const input = body as { q?: unknown; lang?: unknown };
  const query = typeof input.q === "string" ? input.q.trim().slice(0, 180) : "";
  const language = input.lang === "fr" ? "fr" : "ar";
  if (query.length < 2) return NextResponse.json({ query, results: [] });

  const results = searchNAEProject(getNAESearchIndex(language), query, 20);
  return NextResponse.json({
    query,
    results: results.map(({ activity, score, matchedTerms, matchedFields, usedSynonym }) => ({
      code: activity.code,
      label_ar: activity.label_ar,
      label_fr: activity.label_fr,
      status: activity.status,
      statusInfo: getNAEStatusInfo(activity.status, language),
      sector_code: activity.sector_code,
      score,
      matchedTerms,
      matchedFields,
      usedSynonym,
    })),
  }, { headers: { "Cache-Control": "no-store" } });
}
