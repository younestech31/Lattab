import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseSemicolonCsv } from "../../lib/nae/csv";
import { NAE_SOURCE_HEADERS, naeActivitySchema, type NAEActivity } from "../../lib/nae/schema";
import { NAE_SECTORS } from "../../lib/nae/sectors";

const ROOT = process.cwd();
const args = process.argv.slice(2);
function argValue(name: string, fallback: string): string {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}
const inputPath = path.resolve(ROOT, argValue("--input", "data-source/cnrc-2026.csv"));
const outputDir = path.resolve(ROOT, argValue("--output", "data/nae"));
const reportPath = path.join(outputDir, "quality-report.md");
const manifestPath = path.join(outputDir, "manifest.json");
const sourceRevisionDate = argValue("--source-revision-date", "") || null;
const sourceAcquiredAt = argValue("--source-acquired-at", "") || null;
const officialPortalUpdatedAt = argValue("--official-portal-updated-at", "") || null;

type CsvRow = Record<string, string>;
type Issue = { row: number; code?: string; field: string; message: string };

function emptyToNull(value: string): string | null {
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
}

function markdownCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

async function main(): Promise<void> {
  const buffer = await readFile(inputPath);
  const sourceHash = createHash("sha256").update(buffer).digest("hex");
  const sourceText = new TextDecoder("utf-8", { fatal: true }).decode(buffer).replace(/^\uFEFF/, "");
  const matrix = parseSemicolonCsv(sourceText);
  if (matrix.length < 2) throw new Error("CSV has no activity rows.");

  const headers = matrix[0].map((header) => header.trim());
  const expected = [...NAE_SOURCE_HEADERS];
  if (headers.length !== expected.length || headers.some((header, i) => header !== expected[i])) {
    throw new Error(
      `Unexpected CSV header. Expected: ${expected.join(";")} — received: ${headers.join(";")}`,
    );
  }

  const fatalIssues: Issue[] = [];
  const warnings: Issue[] = [];
  const seenCodes = new Set<string>();
  const activities: NAEActivity[] = [];
  const rawStatusCounts = new Map<string, number>();
  const invalidLabels: Array<{ code: string; field: string }> = [];

  for (let index = 1; index < matrix.length; index += 1) {
    const cells = matrix[index];
    const sourceRow = index + 1;
    if (cells.length !== expected.length) {
      fatalIssues.push({ row: sourceRow, field: "row", message: `Expected ${expected.length} cells; received ${cells.length}` });
      continue;
    }

    const raw: CsvRow = Object.fromEntries(expected.map((header, i) => [header, cells[i].trim()]));
    const code = raw.code;
    if (seenCodes.has(code)) {
      fatalIssues.push({ row: sourceRow, code, field: "code", message: "Duplicate activity code" });
      continue;
    }
    seenCodes.add(code);

    const candidate = {
      ...raw,
      tutelle_fr: emptyToNull(raw.tutelle_fr),
      type_autorisation_fr: emptyToNull(raw.type_autorisation_fr),
      accessoires_fr: emptyToNull(raw.accessoires_fr),
      references_texte_fr: emptyToNull(raw.references_texte_fr),
    };
    const parsed = naeActivitySchema.safeParse(candidate);
    if (!parsed.success) {
      for (const error of parsed.error.issues) {
        fatalIssues.push({
          row: sourceRow,
          code,
          field: error.path.join(".") || "row",
          message: error.message,
        });
      }
      continue;
    }

    const activity = parsed.data;
    if (activity.sector_code !== activity.code.slice(0, 1)) {
      fatalIssues.push({ row: sourceRow, code, field: "sector_code", message: "Sector code does not match the first digit of activity code" });
    }
    if (activity.group_code !== activity.code.slice(0, 3)) {
      fatalIssues.push({ row: sourceRow, code, field: "group_code", message: "Group code does not match the first three digits of activity code" });
    }
    if (activity.subgroup_code !== activity.code.slice(0, 4)) {
      fatalIssues.push({ row: sourceRow, code, field: "subgroup_code", message: "Subgroup code does not match the first four digits of activity code" });
    }

    for (const field of ["label_ar", "label_fr", "label_en"] as const) {
      if (activity[field] === "#NOM?") {
        invalidLabels.push({ code, field });
        warnings.push({ row: sourceRow, code, field, message: "Source label is the literal #NOM?; no replacement was inferred" });
      }
    }
    rawStatusCounts.set(activity.status, (rawStatusCounts.get(activity.status) ?? 0) + 1);
    activities.push(activity);
  }

  if (fatalIssues.length) {
    const details = fatalIssues.slice(0, 30).map((issue) => `row ${issue.row} [${issue.code ?? "?"}] ${issue.field}: ${issue.message}`).join("\n");
    throw new Error(`Import validation failed with ${fatalIssues.length} fatal issue(s):\n${details}`);
  }

  const bySector = new Map<string, NAEActivity[]>();
  for (const activity of activities) {
    const list = bySector.get(activity.sector_code) ?? [];
    list.push(activity);
    bySector.set(activity.sector_code, list);
  }

  await mkdir(outputDir, { recursive: true });
  const expectedFiles = new Set<string>();
  for (const [sectorCode, sectorActivities] of bySector) {
    const fileName = `sector-${sectorCode}.json`;
    expectedFiles.add(fileName);
    const tempPath = path.join(outputDir, `.${fileName}.tmp`);
    await writeFile(tempPath, JSON.stringify(sectorActivities, null, 2) + "\n", "utf8");
    await rename(tempPath, path.join(outputDir, fileName));
  }

  for (const entry of await readdir(outputDir, { withFileTypes: true })) {
    if (entry.isFile() && /^sector-[1-7]\.json$/.test(entry.name) && !expectedFiles.has(entry.name)) {
      await rm(path.join(outputDir, entry.name));
    }
  }

  const fieldCoverage = Object.fromEntries(expected.map((field) => [
    field,
    activities.filter((activity) => {
      const value = activity[field as keyof NAEActivity];
      return value !== null && value !== "";
    }).length,
  ]));
  const sectorCounts = Object.fromEntries(
    [...bySector.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([code, list]) => [code, list.length]),
  );
  const manifest = {
    dataset: "Algerian Economic Activities Nomenclature (NAE)",
    source_file_name: path.basename(inputPath),
    source_sha256: sourceHash,
    source_encoding: "UTF-8 with optional BOM",
    source_delimiter: ";",
    source_revision_date: sourceRevisionDate,
    source_acquired_at: sourceAcquiredAt,
    source_publisher: "UpGrowth",
    source_reference_url: "https://www.upgrowth.dz/ar/datasets/cnrc-2026",
    source_license: "CC BY 4.0",
    source_attribution: "UpGrowth (2026), Nomenclature CNRC 2026, CC BY 4.0.",
    official_portal_url: "https://sidjilcom.cnrc.dz/ar/web/sidjilcom/نشاطات",
    official_portal_observed_updated_at: officialPortalUpdatedAt,
    status_mapping: {
      normal: { meaning: "free", label_ar: "حر", label_fr: "Libre" },
      green: { meaning: "regulated", label_ar: "نشاط منظم", label_fr: "Réglementée" },
      red: { meaning: "blocked", label_ar: "محظور", label_fr: "Bloquée" },
      basis: "UpGrowth dataset documentation describes the CNRC status field as free / regulated / blocked.",
      limitation: "A catalogue status does not, by itself, prove that no separate sector-specific title or other legal requirement applies.",
    },
    imported_at: new Date().toISOString(),
    record_count: activities.length,
    sector_counts: sectorCounts,
    field_coverage: fieldCoverage,
    invalid_source_labels: invalidLabels,
    raw_status_counts: Object.fromEntries([...rawStatusCounts.entries()].sort(([a], [b]) => a.localeCompare(b))),
    status_semantics: "Documented via UpGrowth dataset page: normal=free, green=regulated, red=blocked. This catalogue status is not a complete determination of all applicable legal permits.",
    taxonomy_names: {
      sectors: "official Arabic labels are maintained separately in lib/nae/sectors.ts",
      groups: "not supplied by this CSV; do not infer labels",
      subgroups: "not supplied by this CSV; do not infer labels",
    },
  };

  const report = [
    "# NAE import quality report",
    "",
    `- Source file: ${path.basename(inputPath)}`,
    `- SHA-256: ${sourceHash}`,
    "- Encoding: UTF-8 (BOM accepted)",
    "- Delimiter: semicolon",
    `- Imported records: ${activities.length}`,
    `- Fatal validation issues: ${fatalIssues.length}`,
    `- Warnings: ${warnings.length}`,
    "",
    "## Records by sector",
    "",
    "| Sector code | Records | Official Arabic label |",
    "|---:|---:|---|",
    ...Object.entries(sectorCounts).map(([code, count]) => `| ${code} | ${count} | ${markdownCell(NAE_SECTORS[code as keyof typeof NAE_SECTORS]?.label_ar ?? "غير موثق")} |`),
    "",
    "## Field coverage",
    "",
    "| Source field | Non-empty records |",
    "|---|---:|",
    ...Object.entries(fieldCoverage).map(([field, count]) => `| ${field} | ${count} |`),
    "",
    "## Status values and documented mapping",
    "",
    "| Raw CSV value | Meaning | Count |",
    "|---|---|---:|",
    `| normal | Free (حر) | ${rawStatusCounts.get("normal") ?? 0} |`,
    `| green | Regulated (نشاط منظم) | ${rawStatusCounts.get("green") ?? 0} |`,
    `| red | Blocked (محظور) | ${rawStatusCounts.get("red") ?? 0} |`,
    "",
    "Mapping is attributed to the UpGrowth dataset documentation. A catalogue status does not replace checking sector-specific rules.",
    "",
    "## Source-label warnings",
    "",
    ...(invalidLabels.length
      ? invalidLabels.map(({ code, field }) => `- ${code} — ${field}: #NOM? (kept as source value; not guessed)`)
      : ["- None"]),
    "",
    "## Interpretation safeguards",
    "",
    "- Empty regulatory fields mean only that this CSV export contains no value for that field.",
    "- The documented status mapping must retain the raw values and source attribution.",
    "- A status such as “free” is not a blanket legal guarantee and does not replace checking sector-specific rules.",
    "- Record the source revision date and official portal observation date when importing a new snapshot.",
    "- Group and subgroup names are not present in the CSV and are not generated from numeric codes.",
    "- The source revision and acquisition dates remain unknown unless supplied to the importer.",
    "",
  ].join("\n");

  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  await writeFile(reportPath, report, "utf8");
  console.log(`NAE import complete: ${activities.length} records; ${bySector.size} sector files.`);
  console.log(`Source SHA-256: ${sourceHash}`);
  console.log(`Warnings: ${warnings.length}; report: ${path.relative(ROOT, reportPath)}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
