import { NextRequest, NextResponse } from "next/server";
import { getNAESearchIndex } from "@/lib/nae/data";
import { searchNAEProject } from "@/lib/nae/project-search";
import { getNAEStatusInfo } from "@/lib/nae/status";
import { SearchPayloadSchema } from "@/lib/nae/api-schema";
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
    results: results.map(({ activity, score, matchedTerms, matchedFields, usedSynonym }) => {
      const resolved = resolveActivityBilingual(activity);
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
        score,
        matchedTerms,
        matchedFields,
        usedSynonym,
      };
    }),
  }, { headers: { "Cache-Control": "no-store" } });
}
