import assert from "node:assert/strict";
import test from "node:test";
import {
  resolveTutelleArabic,
  resolveTypeAutorisationArabic,
  resolveAccessoiresArabic,
  resolveReferencesBilingual,
  resolveContenueArabic,
  resolveActivityBilingual,
} from "../lib/nae/gap-resolver";
import sector1 from "../data/nae/sector-1.json";
import sector2 from "../data/nae/sector-2.json";
import sector3 from "../data/nae/sector-3.json";
import sector4 from "../data/nae/sector-4.json";
import sector5 from "../data/nae/sector-5.json";
import sector6 from "../data/nae/sector-6.json";
import sector7 from "../data/nae/sector-7.json";
import type { NAEActivity } from "../lib/nae/schema";

const allActivities = [
  ...sector1,
  ...sector2,
  ...sector3,
  ...sector4,
  ...sector5,
  ...sector6,
  ...sector7,
] as NAEActivity[];

test("resolveTutelleArabic resolves known French administrative authorities", () => {
  assert.equal(
    resolveTutelleArabic("DIRECTION DES IMPÔTS DE LA WILAYA"),
    "مديرية الضرائب للولاية",
  );
  assert.equal(
    resolveTutelleArabic("ADMINISTRATION DES DOUANES"),
    "إدارة الجمارك",
  );
  assert.equal(
    resolveTutelleArabic("GOUVERNEUR DE LA BANQUE CENTRALE"),
    "محافظ البنك المركزي",
  );
  assert.equal(
    resolveTutelleArabic("ASSEMBLÉE POPULAIRE COMMUNALE"),
    "المجلس الشعبي البلدي",
  );

  // Fallback behavior
  assert.equal(resolveTutelleArabic(null), null);
  assert.equal(resolveTutelleArabic(undefined), null);
  assert.equal(resolveTutelleArabic(""), null);
  assert.equal(resolveTutelleArabic("   "), null);
  assert.equal(resolveTutelleArabic("UNKNOWN_MINISTRY_12345"), null);
});

test("resolveTypeAutorisationArabic resolves known authorization types", () => {
  assert.equal(resolveTypeAutorisationArabic("autorisation"), "ترخيص");
  assert.equal(resolveTypeAutorisationArabic("agrement"), "اعتماد");
  assert.equal(resolveTypeAutorisationArabic("licence"), "ليسانس");
  assert.equal(resolveTypeAutorisationArabic("permis"), "رخصة");
  assert.equal(resolveTypeAutorisationArabic("concession"), "امتياز");
  assert.equal(resolveTypeAutorisationArabic("ATTESTATION"), "شهادة");

  // Fallback behavior
  assert.equal(resolveTypeAutorisationArabic(null), null);
  assert.equal(resolveTypeAutorisationArabic(undefined), null);
  assert.equal(resolveTypeAutorisationArabic(""), null);
  assert.equal(resolveTypeAutorisationArabic("NON_EXISTENT_PERMIT"), null);
});

test("resolveAccessoiresArabic resolves high-frequency accessories clauses with normalization and segmentation", () => {
  // Direct match
  assert.ok(resolveAccessoiresArabic("Installation, maintenance et service après-vente.")?.includes("التركيب"));
  // Normalization match (extra spaces, variant accents)
  assert.ok(resolveAccessoiresArabic("Maintenance et service aprés vente")?.includes("الصيانة"));
  // Segmented match
  const segmented = resolveAccessoiresArabic("Vente de tabac et allumettes; | Articles de correspondance;");
  assert.ok(segmented?.includes("التبغ"));
  assert.ok(segmented?.includes("المراسلة"));

  // Fallback behavior
  assert.equal(resolveAccessoiresArabic(null), null);
  assert.equal(resolveAccessoiresArabic(undefined), null);
  assert.equal(resolveAccessoiresArabic(""), null);
  assert.equal(resolveAccessoiresArabic("Clause complètement inconnue 99999"), null);
});

test("resolveContenueArabic resolves activity content descriptions bilingually", () => {
  const content601101 = resolveContenueArabic("601101");
  assert.ok(content601101?.includes("وحدات إيواء"));
  assert.ok(content601101?.includes("نجوم"));

  const content611001 = resolveContenueArabic("611001");
  assert.ok(content611001?.includes("تأجير الشقق والمنازل"));

  const content607004 = resolveContenueArabic("607004");
  assert.ok(content607004?.includes("الاستشارات والدراسات القانونية"));

  // Fallback behavior for unmapped code
  assert.equal(resolveContenueArabic("999999"), null);
  assert.equal(resolveContenueArabic("999999", ""), null);
});

test("resolveReferencesBilingual handles code 607004 with preserved Arabic source and French fill", () => {
  const ref607004 = resolveReferencesBilingual("607004", null);
  assert.ok(ref607004.fr?.includes("conseil juridique"));
  assert.ok(ref607004.ar?.includes("المستشاؤ القانوني"));

  // Standard code with original French reference and no special override
  const standardRef = resolveReferencesBilingual("101101", "Décret standard 2020");
  assert.equal(standardRef.fr, "Décret standard 2020");
  assert.equal(standardRef.ar, null);
});

test("resolveActivityBilingual produces enriched record without mutating source record", () => {
  const rawActivity: NAEActivity = {
    code: "601101",
    label_ar: "فندق سياحي مع مطعم",
    label_fr: "Hôtel de tourisme avec restaurant",
    label_en: "Tourism hotel with restaurant",
    status: "green",
    sector_code: "6",
    group_code: "601",
    subgroup_code: "6011",
    tutelle_fr: "MINISTERE CHARGE DU TOURISME",
    type_autorisation_fr: "agrement",
    contenue_fr: "Etablissement qui offre en location des unités d’hébergement...",
    accessoires_fr: "Aménager des lieux et des espaces réservés aux fumeurs en dehors de l'établissement et les équiper des matériels nécessaires conformément aux dispositions réglementaires en vigueur (il est strictement interdit d'exposer et de vendre des produits tabagiques).",
    references_texte_fr: "Décret n° 00-00",
  };

  const frozen = Object.freeze({ ...rawActivity });
  const resolved = resolveActivityBilingual(frozen);

  assert.equal(resolved.code, "601101");
  assert.equal(resolved.label_ar, "فندق سياحي مع مطعم");
  assert.equal(resolved.tutelle_fr, "MINISTERE CHARGE DU TOURISME");
  assert.equal(resolved.tutelle_ar, "الوزارة المكلفة بالسياحة");
  assert.equal(resolved.type_autorisation_ar, "اعتماد");
  assert.ok(resolved.contenue_ar?.includes("وحدات إيواء"));
  assert.ok(resolved.accessoires_ar?.includes("للمدخنين"));

  // Original record retains its properties
  assert.equal(frozen.code, "601101");
});

test("all activities in catalog can be safely resolved bilingually without errors", () => {
  assert.equal(allActivities.length, 2136);

  let regulatedWithTutelleCount = 0;
  let resolvedTutelleArCount = 0;

  for (const act of allActivities) {
    const resolved = resolveActivityBilingual(act);
    assert.equal(resolved.code, act.code);
    assert.equal(resolved.label_ar, act.label_ar);
    assert.equal(resolved.label_fr, act.label_fr);

    if (act.tutelle_fr?.trim()) {
      regulatedWithTutelleCount++;
      if (resolved.tutelle_ar) {
        resolvedTutelleArCount++;
      }
    }
  }

  // Ensure our gap dictionary covers the French tutelle strings in the dataset
  assert.ok(regulatedWithTutelleCount > 0);
  assert.ok(resolvedTutelleArCount > 0);
  assert.equal(resolvedTutelleArCount, regulatedWithTutelleCount, "All valid tutelle_fr records must be mapped to Arabic");
});

test("activity 607004 has dual-language reference populated", () => {
  const act607004 = allActivities.find((a) => a.code === "607004");
  assert.ok(act607004, "Code 607004 must exist in data");
  const resolved = resolveActivityBilingual(act607004);
  assert.ok(resolved.references_texte_fr?.includes("conseil juridique"));
  assert.ok(resolved.references_texte_ar?.includes("المستشاؤ"));
});
