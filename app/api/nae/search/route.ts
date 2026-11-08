import { NextRequest, NextResponse } from "next/server";
import { getNAESearchIndex } from "@/lib/nae/data";
import { searchNAEProject } from "@/lib/nae/project-search";
import { getNAEStatusInfo } from "@/lib/nae/status";
import { SearchPayloadSchema } from "@/lib/nae/api-schema";

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

  const parsed = SearchPayloadSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const { q: query, lang } = parsed.data;
  const language = lang === "fr" ? "fr" : "ar";
  if (query.length < 2) {
    return NextResponse.json({ query, results: [] }, { headers: { "Cache-Control": "no-store" } });
  }

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
