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
  ...sector1, ...sector2, ...sector3, ...sector4,
  ...sector5, ...sector6, ...sector7,
] as NAEActivity[];

test("resolveTutelleArabic resolves known French administrative authorities", () => {
  assert.equal(resolveTutelleArabic("DIRECTION DES IMPÔTS DE LA WILAYA"), "مديرية الضرائب للولاية");
  assert.equal(resolveTutelleArabic("ADMINISTRATION DES DOUANES"), "إدارة الجمارك");
  assert.equal(resolveTutelleArabic("GOUVERNEUR DE LA BANQUE CENTRALE"), "محافظ البنك المركزي");
  assert.equal(resolveTutelleArabic("ASSEMBLÉE POPULAIRE COMMUNALE"), "المجلس الشعبي البلدي");
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
  assert.equal(resolveTypeAutorisationArabic(null), null);
  assert.equal(resolveTypeAutorisationArabic(undefined), null);
  assert.equal(resolveTypeAutorisationArabic(""), null);
  assert.equal(resolveTypeAutorisationArabic("NON_EXISTENT_PERMIT"), null);
});

test("resolveAccessoiresArabic resolves exact, normalized, and fully translated segmented clauses", () => {
  assert.ok(resolveAccessoiresArabic("Installation, maintenance et service après-vente.")?.includes("التركيب"));
  assert.ok(resolveAccessoiresArabic("Maintenance et service aprés vente")?.includes("الصيانة"));
  const segmented = resolveAccessoiresArabic("Vente de tabac et allumettes; | Articles de correspondance;");
  assert.ok(segmented?.includes("التبغ"));
  assert.ok(segmented?.includes("المراسلة"));
  assert.equal(resolveAccessoiresArabic(null), null);
  assert.equal(resolveAccessoiresArabic(undefined), null);
  assert.equal(resolveAccessoiresArabic(""), null);
  assert.equal(resolveAccessoiresArabic("Clause complètement inconnue 99999"), null);
});

test("resolveContenueArabic requires the exact reviewed French source text", () => {
  const hotel = allActivities.find((item) => item.code === "601101");
  const propertyRental = allActivities.find((item) => item.code === "611001");
  const legalConsulting = allActivities.find((item) => item.code === "607004");
  assert.ok(hotel?.contenue_fr);
  assert.ok(propertyRental?.contenue_fr);
  assert.ok(legalConsulting?.contenue_fr);

  const hotelArabic = resolveContenueArabic("601101", hotel?.contenue_fr);
  assert.ok(hotelArabic?.includes("وحدات إيواء"));
  assert.ok(hotelArabic?.includes("نجوم"));
  assert.ok(resolveContenueArabic("611001", propertyRental?.contenue_fr)?.includes("تأجير الشقق والمنازل"));
  assert.ok(resolveContenueArabic("607004", legalConsulting?.contenue_fr)?.includes("الاستشارات القانونية والجبائية"));

  assert.equal(resolveContenueArabic("601101"), null);
  assert.equal(resolveContenueArabic("601101", "Unrelated French source"), null);
  assert.equal(resolveContenueArabic("101201", "Engraissement industriel de bovins et ovins (en écuries aménagées) et autres animaux de boucherie en vue de l'abattage ."), null);
  assert.equal(resolveContenueArabic("999999", "Unknown source"), null);
  assert.equal(resolveContenueArabic("999999", ""), null);
});

test("resolveReferencesBilingual preserves source text and resolves source-bound Arabic references", () => {
  const ref607004 = resolveReferencesBilingual("607004", null);
  assert.ok(ref607004.fr?.includes("conseil juridique"));
  assert.ok(ref607004.ar?.includes("المستشاؤ القانوني"));

  const source = "Décret exécutif n° 95-429 du 16/12/1995";
  const translated = resolveReferencesBilingual("101106", source);
  assert.equal(translated.fr, source);
  assert.ok(translated.ar?.includes("المرسوم التنفيذي رقم 95-429"));

  const changedSource = resolveReferencesBilingual("101106", "Décret exécutif n° 95-429 du 17/12/1995");
  assert.equal(changedSource.ar, null);

  const standardRef = resolveReferencesBilingual("101101", "Décret standard 2020");
  assert.equal(standardRef.fr, "Décret standard 2020");
  assert.equal(standardRef.ar, null);
});

test("resolveActivityBilingual enriches without mutating the original record", () => {
  const source = allActivities.find((item) => item.code === "601101");
  assert.ok(source);
  const rawActivity: NAEActivity = {
    ...source,
    tutelle_fr: "MINISTERE CHARGE DU TOURISME",
    type_autorisation_fr: "agrement",
  };
  const frozen = Object.freeze({ ...rawActivity });
  const resolved = resolveActivityBilingual(frozen);
  assert.equal(resolved.code, "601101");
  assert.equal(resolved.label_ar, source.label_ar);
  assert.equal(resolved.tutelle_ar, "الوزارة المكلفة بالسياحة");
  assert.equal(resolved.type_autorisation_ar, "اعتماد");
  assert.ok(resolved.contenue_ar?.includes("وحدات إيواء"));
  assert.equal(frozen.code, "601101");
});

test("all catalogue activities resolve safely and all tutelle values are mapped", () => {
  assert.equal(allActivities.length, 2136);
  let regulatedWithTutelle = 0;
  let resolvedTutelle = 0;
  for (const activity of allActivities) {
    const resolved = resolveActivityBilingual(activity);
    assert.equal(resolved.code, activity.code);
    assert.equal(resolved.label_ar, activity.label_ar);
    assert.equal(resolved.label_fr, activity.label_fr);
    if (activity.tutelle_fr?.trim()) {
      regulatedWithTutelle++;
      if (resolved.tutelle_ar) resolvedTutelle++;
    }
  }
  assert.ok(regulatedWithTutelle > 0);
  assert.equal(resolvedTutelle, regulatedWithTutelle);
});

test("every active Arabic content value has one existing exact French source record", () => {
  const translated = allActivities.filter((activity) => resolveActivityBilingual(activity).contenue_ar);
  assert.ok(translated.length > 18);
  const forest = allActivities.find((activity) => activity.code === "101103");
  assert.ok(forest?.contenue_fr);
  assert.ok(resolveContenueArabic("101103", forest.contenue_fr)?.includes("المنتجات الغابية"));
  assert.equal(resolveContenueArabic("101103", "Unrelated source text"), null);
  for (const activity of translated) {
    assert.ok(activity.contenue_fr?.trim());
    assert.ok(resolveContenueArabic(activity.code, activity.contenue_fr));
  }
});

test("all accessory descriptions with a populated French source resolve in Arabic", () => {
  const withSource = allActivities.filter((activity) => activity.accessoires_fr?.trim() && activity.accessoires_fr.trim() !== "#NOM?");
  const translated = withSource.filter((activity) => resolveActivityBilingual(activity).accessoires_ar);
  assert.equal(translated.length, withSource.length);
  assert.equal(withSource.length, 905);
});
