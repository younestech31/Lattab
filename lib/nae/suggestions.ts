import type { NAEActivity } from "./schema";

export interface NAEComplementarySuggestion {
  activity: NAEActivity;
  reason_ar: string;
  reason_fr: string;
  matchType: "subgroup" | "cross_sector_service" | "commercial_chain";
}

/**
 * Common cross-sector complementary pairings in Algerian commerce:
 * E.g., retail of computing equipment (5072) -> IT maintenance and repair services (6132).
 * Retail of automobiles (5011) -> vehicle maintenance/repair (6021).
 * Production of goods (1) -> Wholesale distribution (3).
 */
const COMPLEMENTARY_SUBGROUP_MAP: Record<string, { targetSubgroup: string; ar: string; fr: string }[]> = {
  // IT & Electronics: Retail (5072) <-> Repair & Network Services (6132)
  "5072": [
    { targetSubgroup: "6132", ar: "خدمات صيانة وتركيب شبكات الإعلام الآلي", fr: "Services de maintenance et installation réseaux" },
    { targetSubgroup: "5071", ar: "تجهيزات مكتبية وتأثيث مرتبط", fr: "Équipements et mobilier de bureau associés" },
  ],
  "6132": [
    { targetSubgroup: "5072", ar: "تجارة عتاد الإعلام الآلي وملحقاته", fr: "Vente de matériel informatique et accessoires" },
  ],
  // Automobile: Sale (5011, 5012) <-> Maintenance & mechanical repair (6021, 6022)
  "5011": [
    { targetSubgroup: "6021", ar: "خدمات صيانة وإصلاح المركبات الميكانيكية", fr: "Entretien et réparation mécanique des véhicules" },
    { targetSubgroup: "5012", ar: "تجارة قطع غيار ولواحق المركبات", fr: "Commerce de pièces détachées et accessoires auto" },
  ],
  "6021": [
    { targetSubgroup: "5012", ar: "توفير قطع الغيار ولوازم التصليح", fr: "Fourniture de pièces de rechange et accessoires" },
  ],
  // Household Appliances: Retail (5061) <-> Repair (6131)
  "5061": [
    { targetSubgroup: "6131", ar: "خدمات تصليح وصيانة الأجهزة الكهرومنزلية", fr: "Réparation et maintenance des appareils électroménagers" },
  ],
  "6131": [
    { targetSubgroup: "5061", ar: "تجارة الأجهزة الكهرومنزلية بالتجزئة", fr: "Vente au détail d'appareils électroménagers" },
  ],
};

/**
 * Recommends complementary activities for a given primary code or list of codes.
 * Ensures strict exclusion of blocked activities (status: "red") and already selected codes.
 */
export function getComplementaryActivities(
  targetCode: string,
  allActivities: readonly NAEActivity[],
  existingCodes: string[] = [],
  limit = 6,
): NAEComplementarySuggestion[] {
  const primary = allActivities.find((act) => act.code === targetCode);
  if (!primary) return [];
  const existingSet = new Set(existingCodes);
  existingSet.add(targetCode);

  const results: NAEComplementarySuggestion[] = [];
  const addedCodes = new Set<string>();

  // 1. Same Subgroup activities (natural siblings in the nomenclature hierarchy)
  const siblings = allActivities.filter(
    (act) =>
      act.subgroup_code === primary.subgroup_code &&
      act.code !== primary.code &&
      ["normal", "green"].includes(act.status.trim().toLowerCase()) &&
      !existingSet.has(act.code),
  );

  for (const act of siblings.slice(0, 4)) {
    results.push({
      activity: act,
      reason_ar: `نشاط من نفس المجموعة الفرعية في التصنيف (${primary.subgroup_code})`,
      reason_fr: `Activité du même sous-groupe de nomenclature (${primary.subgroup_code})`,
      matchType: "subgroup",
    });
    addedCodes.add(act.code);
  }

  // 2. Cross-Sector complementary services (e.g., Retail + Technical Support/Repair)
  const crossSectorRules = COMPLEMENTARY_SUBGROUP_MAP[primary.subgroup_code] ?? [];
  for (const rule of crossSectorRules) {
    const candidates = allActivities.filter(
      (act) =>
        act.subgroup_code === rule.targetSubgroup &&
        ["normal", "green"].includes(act.status.trim().toLowerCase()) &&
        !existingSet.has(act.code) &&
        !addedCodes.has(act.code),
    );

    for (const act of candidates.slice(0, 2)) {
      results.push({
        activity: act,
        reason_ar: rule.ar,
        reason_fr: rule.fr,
        matchType: "cross_sector_service",
      });
      addedCodes.add(act.code);
      if (results.length >= limit) break;
    }
    if (results.length >= limit) break;
  }

  // 3. Same group fallback if suggestions are still sparse
  if (results.length < 3) {
    const groupSiblings = allActivities.filter(
      (act) =>
        act.group_code === primary.group_code &&
        act.subgroup_code !== primary.subgroup_code &&
        ["normal", "green"].includes(act.status.trim().toLowerCase()) &&
        !existingSet.has(act.code) &&
        !addedCodes.has(act.code),
    );

    for (const act of groupSiblings.slice(0, limit - results.length)) {
      results.push({
        activity: act,
        reason_ar: `نشاط ذو صلة ضمن نفس المجموعة العامة (${primary.group_code})`,
        reason_fr: `Activité associée du même groupe (${primary.group_code})`,
        matchType: "commercial_chain",
      });
      addedCodes.add(act.code);
    }
  }

  return results.slice(0, limit);
}
