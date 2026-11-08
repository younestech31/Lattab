import { NextRequest, NextResponse } from "next/server";
import { getNAEActivities, getNAEActivityByCode } from "@/lib/nae/data";
import { analyzeNAEProject } from "@/lib/nae/project-analysis";
import { NAE_SECTORS } from "@/lib/nae/sectors";
import { getNAEStatusInfo } from "@/lib/nae/status";
import { AnalyzePayloadSchema } from "@/lib/nae/api-schema";
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
    activities: activities.map((activity) => {
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
        references_texte_fr: resolved.references_texte_fr,
        references_texte_ar: resolved.references_texte_ar,
        contenue_fr: resolved.contenue_fr,
        contenue_ar: resolved.contenue_ar,
        accessoires_fr: resolved.accessoires_fr,
        accessoires_ar: resolved.accessoires_ar,
      };
    }),
    analysis: {
      ...projectAnalysis,
      sectorLabels: projectAnalysis.sectors.map(
        (code) => NAE_SECTORS[code as keyof typeof NAE_SECTORS]?.[language === "ar" ? "label_ar" : "label_fr"] ?? code,
      ),
    },
  }, { headers: { "Cache-Control": "no-store" } });
}
