import { FormFieldCoord } from '../types';
import { GN51FormData } from './schema';
import { GN51ComputeResult } from './compute';

/**
 * Coordinate mapping for official Algerian Série G N° 51 (Arabic).
 * Template: public/forms/gn51.pdf (2 pages A4: 595.32 x 841.92 pt, bottom-left origin).
 */
export const GN51_FIELD_COORDINATES: FormFieldCoord[] = [
  // ──────────────────────────────────────────
  // PAGE 1 — الترويسة الإدارية
  // ──────────────────────────────────────────
  { id: 'wilaya', page: 1, x: 250, y: 737, size: 9, align: 'right', maxWidth: 140 },
  { id: 'structure', page: 1, x: 220, y: 722, size: 9, align: 'right', maxWidth: 170 },

  // ──────────────────────────────────────────
  // I — المؤجر (Bailleur)
  // ──────────────────────────────────────────
  { id: 'bailleurNom', page: 1, x: 45, y: 551, size: 9, align: 'right', maxWidth: 390 },
  { id: 'bailleurAdresse', page: 1, x: 45, y: 537, size: 9, align: 'right', maxWidth: 430 },
  { id: 'bailleurCommune', page: 1, x: 310, y: 522, size: 9, align: 'right', maxWidth: 110 },
  { id: 'bailleurWilaya', page: 1, x: 150, y: 522, size: 9, align: 'right', maxWidth: 90 },
  { id: 'bailleurCodePostal', page: 1, x: 48, y: 522, size: 9, align: 'left', maxWidth: 60 },
  { id: 'bailleurNif', page: 1, x: 138, y: 508, size: 8.5, align: 'left', maxWidth: 235 },
  { id: 'bailleurNin', page: 1, x: 162, y: 494, size: 8.5, align: 'left', maxWidth: 210 },

  // ──────────────────────────────────────────
  // I — المستأجر (Preneur)
  // ──────────────────────────────────────────
  { id: 'preneurNom', page: 1, x: 45, y: 457, size: 9, align: 'right', maxWidth: 390 },
  { id: 'preneurAdresse', page: 1, x: 45, y: 444, size: 9, align: 'right', maxWidth: 430 },
  { id: 'preneurCommune', page: 1, x: 310, y: 430, size: 9, align: 'right', maxWidth: 110 },
  { id: 'preneurWilaya', page: 1, x: 150, y: 430, size: 9, align: 'right', maxWidth: 90 },
  { id: 'preneurCodePostal', page: 1, x: 48, y: 430, size: 9, align: 'left', maxWidth: 60 },
  { id: 'preneurNif', page: 1, x: 138, y: 416, size: 8.5, align: 'left', maxWidth: 235 },
  { id: 'preneurNin', page: 1, x: 162, y: 402, size: 8.5, align: 'left', maxWidth: 210 },

  // ──────────────────────────────────────────
  // II — العقار المستأجر (Bien loué)
  // ──────────────────────────────────────────
  { id: 'natureBien', page: 1, x: 45, y: 357, size: 9, align: 'right', maxWidth: 350 },
  { id: 'lieuSituation', page: 1, x: 45, y: 344, size: 9, align: 'right', maxWidth: 370 },
  { id: 'communeBien', page: 1, x: 310, y: 329, size: 9, align: 'right', maxWidth: 110 },
  { id: 'wilayaBien', page: 1, x: 150, y: 329, size: 9, align: 'right', maxWidth: 90 },
  { id: 'codePostalBien', page: 1, x: 48, y: 329, size: 9, align: 'left', maxWidth: 60 },
  { id: 'articleImposition', page: 1, x: 45, y: 316, size: 9, align: 'right', maxWidth: 330 },

  // استعمال العقار (خانات اختيار)
  { id: 'dest_habitation', page: 1, x: 342, y: 304, size: 10, align: 'center', maxWidth: 14 },
  { id: 'dest_commercial', page: 1, x: 202, y: 304, size: 10, align: 'center', maxWidth: 14 },
  { id: 'dest_agricole', page: 1, x: 72, y: 304, size: 10, align: 'center', maxWidth: 14 },

  { id: 'dateDebutContrat', page: 1, x: 300, y: 284, size: 9, align: 'right', maxWidth: 130 },
  { id: 'dateFinContrat', page: 1, x: 120, y: 284, size: 9, align: 'right', maxWidth: 140 },
  { id: 'periodicite', page: 1, x: 45, y: 271, size: 9, align: 'right', maxWidth: 345 },

  // ──────────────────────────────────────────
  // III — جدول مبالغ الإيجار ≤ 1.800.000 دج
  // ──────────────────────────────────────────
  { id: 'loyerHabitation', page: 1, x: 160, y: 176, size: 9, format: 'currency', align: 'left', maxWidth: 115 },
  { id: 'taxHabitation', page: 1, x: 34, y: 176, size: 9, format: 'currency', align: 'left', maxWidth: 72 },

  { id: 'loyerCommercial', page: 1, x: 160, y: 152, size: 9, format: 'currency', align: 'left', maxWidth: 115 },
  { id: 'taxCommercial', page: 1, x: 34, y: 152, size: 9, format: 'currency', align: 'left', maxWidth: 72 },

  { id: 'loyerNonBati', page: 1, x: 160, y: 123, size: 9, format: 'currency', align: 'left', maxWidth: 115 },
  { id: 'taxNonBati', page: 1, x: 34, y: 123, size: 9, format: 'currency', align: 'left', maxWidth: 72 },

  { id: 'loyerAgricole', page: 1, x: 160, y: 109, size: 9, format: 'currency', align: 'left', maxWidth: 115 },
  { id: 'taxAgricole', page: 1, x: 34, y: 109, size: 9, format: 'currency', align: 'left', maxWidth: 72 },

  { id: 'totalTaxDue_p1', page: 1, x: 34, y: 96, size: 9, format: 'currency', align: 'left', maxWidth: 72 },

  // ──────────────────────────────────────────
  // PAGE 2 — جدول الإيجارات > 1.800.000 دج والإقرار
  // ──────────────────────────────────────────
  { id: 'loyerExcedentaire', page: 2, x: 160, y: 757, size: 9, format: 'currency', align: 'left', maxWidth: 115 },
  { id: 'taxExcedentaire', page: 2, x: 34, y: 757, size: 9, format: 'currency', align: 'left', maxWidth: 72 },

  // الإقرار
  { id: 'faitA', page: 2, x: 420, y: 606, size: 9, align: 'right', maxWidth: 75 },
  { id: 'dateDeclaration', page: 2, x: 300, y: 606, size: 9, align: 'left', maxWidth: 95 },

  // طرق التسديد
  { id: 'chequeBanqueNum', page: 2, x: 380, y: 373, size: 8.5, align: 'left', maxWidth: 90 },
  { id: 'chequeBanqueDate', page: 2, x: 270, y: 373, size: 8.5, align: 'left', maxWidth: 70 },
  { id: 'chequeBanqueAgence', page: 2, x: 50, y: 373, size: 8.5, align: 'right', maxWidth: 150 },

  { id: 'chequePostalNum', page: 2, x: 350, y: 352, size: 8.5, align: 'left', maxWidth: 120 },
  { id: 'chequePostalDate', page: 2, x: 200, y: 352, size: 8.5, align: 'left', maxWidth: 80 },

  { id: 'pay_numeraire', page: 2, x: 527, y: 330, size: 10, align: 'center', maxWidth: 14 },
];

/**
 * Coordinate mapping for official Algerian Série G N° 51 (French).
 * Template: public/forms/gn51_fr.pdf (2 pages A4: 595.32 x 841.92 pt, bottom-left origin).
 */
export const GN51_FIELD_COORDINATES_FR: FormFieldCoord[] = [
  // ──────────────────────────────────────────
  // PAGE 1 — En-tête administratif
  // ──────────────────────────────────────────
  { id: 'wilaya', page: 1, x: 85, y: 738, size: 9, align: 'left', maxWidth: 100 },
  { id: 'structure', page: 1, x: 90, y: 725, size: 9, align: 'left', maxWidth: 100 },

  // ──────────────────────────────────────────
  // I — Bailleur
  // ──────────────────────────────────────────
  { id: 'bailleurNom', page: 1, x: 190, y: 544, size: 9, align: 'left', maxWidth: 360 },
  { id: 'bailleurAdresse', page: 1, x: 110, y: 531, size: 9, align: 'left', maxWidth: 440 },
  { id: 'bailleurCommune', page: 1, x: 95, y: 517, size: 9, align: 'left', maxWidth: 120 },
  { id: 'bailleurWilaya', page: 1, x: 270, y: 517, size: 9, align: 'left', maxWidth: 100 },
  { id: 'bailleurCodePostal', page: 1, x: 449, y: 517, size: 9, align: 'left', maxWidth: 60 },
  { id: 'bailleurNif', page: 1, x: 227, y: 504, size: 8.5, align: 'left', maxWidth: 220 },
  { id: 'bailleurNin', page: 1, x: 227, y: 491, size: 8.5, align: 'left', maxWidth: 200 },

  // ──────────────────────────────────────────
  // I — Preneur
  // ──────────────────────────────────────────
  { id: 'preneurNom', page: 1, x: 190, y: 454, size: 9, align: 'left', maxWidth: 360 },
  { id: 'preneurAdresse', page: 1, x: 110, y: 442, size: 9, align: 'left', maxWidth: 440 },
  { id: 'preneurCommune', page: 1, x: 95, y: 428, size: 9, align: 'left', maxWidth: 120 },
  { id: 'preneurWilaya', page: 1, x: 270, y: 428, size: 9, align: 'left', maxWidth: 100 },
  { id: 'preneurCodePostal', page: 1, x: 449, y: 428, size: 9, align: 'left', maxWidth: 60 },
  { id: 'preneurNif', page: 1, x: 227, y: 415, size: 8.5, align: 'left', maxWidth: 220 },
  { id: 'preneurNin', page: 1, x: 227, y: 402, size: 8.5, align: 'left', maxWidth: 200 },

  // ──────────────────────────────────────────
  // II — Bien loué
  // ──────────────────────────────────────────
  { id: 'natureBien', page: 1, x: 150, y: 357, size: 9, align: 'left', maxWidth: 400 },
  { id: 'lieuSituation', page: 1, x: 175, y: 344, size: 9, align: 'left', maxWidth: 380 },
  { id: 'communeBien', page: 1, x: 95, y: 329, size: 9, align: 'left', maxWidth: 110 },
  { id: 'wilayaBien', page: 1, x: 265, y: 329, size: 9, align: 'left', maxWidth: 100 },
  { id: 'codePostalBien', page: 1, x: 496, y: 329, size: 9, align: 'left', maxWidth: 60 },
  { id: 'articleImposition', page: 1, x: 230, y: 317, size: 9, align: 'left', maxWidth: 320 },

  // Destination (cases à cocher)
  { id: 'dest_habitation', page: 1, x: 235, y: 305, size: 10, align: 'center', maxWidth: 14 },
  { id: 'dest_commercial', page: 1, x: 440, y: 305, size: 10, align: 'center', maxWidth: 14 },
  { id: 'dest_agricole', page: 1, x: 555, y: 305, size: 10, align: 'center', maxWidth: 14 },

  { id: 'dateDebutContrat', page: 1, x: 155, y: 294, size: 9, align: 'left', maxWidth: 90 },
  { id: 'dateFinContrat', page: 1, x: 280, y: 294, size: 9, align: 'left', maxWidth: 90 },
  { id: 'periodicite', page: 1, x: 225, y: 282, size: 9, align: 'left', maxWidth: 330 },

  // ──────────────────────────────────────────
  // III — Tableau loyers ≤ 1.800.000 DA
  // ──────────────────────────────────────────
  { id: 'loyerHabitation', page: 1, x: 351, y: 185, size: 9, format: 'currency', align: 'left', maxWidth: 110 },
  { id: 'taxHabitation', page: 1, x: 503, y: 184, size: 9, format: 'currency', align: 'left', maxWidth: 80 },

  { id: 'loyerCommercial', page: 1, x: 351, y: 160, size: 9, format: 'currency', align: 'left', maxWidth: 110 },
  { id: 'taxCommercial', page: 1, x: 503, y: 160, size: 9, format: 'currency', align: 'left', maxWidth: 80 },

  { id: 'loyerNonBati', page: 1, x: 351, y: 118, size: 9, format: 'currency', align: 'left', maxWidth: 110 },
  { id: 'taxNonBati', page: 1, x: 503, y: 122, size: 9, format: 'currency', align: 'left', maxWidth: 80 },

  { id: 'loyerAgricole', page: 1, x: 351, y: 100, size: 9, format: 'currency', align: 'left', maxWidth: 110 },
  { id: 'taxAgricole', page: 1, x: 502, y: 99, size: 9, format: 'currency', align: 'left', maxWidth: 80 },

  { id: 'totalTaxDue_p1', page: 1, x: 502, y: 84, size: 9, format: 'currency', align: 'left', maxWidth: 80 },

  // ──────────────────────────────────────────
  // PAGE 2 — Tableau loyers > 1.800.000 DA & Paiement
  // ──────────────────────────────────────────
  { id: 'loyerExcedentaire', page: 2, x: 351, y: 752, size: 9, format: 'currency', align: 'left', maxWidth: 110 },
  { id: 'taxExcedentaire', page: 2, x: 507, y: 752, size: 9, format: 'currency', align: 'left', maxWidth: 80 },

  // Attestation
  { id: 'faitA', page: 2, x: 85, y: 548, size: 9, align: 'left', maxWidth: 80 },
  { id: 'dateDeclaration', page: 2, x: 210, y: 548, size: 9, align: 'left', maxWidth: 80 },

  // Mode de paiement
  { id: 'chequeBanqueNum', page: 2, x: 200, y: 349, size: 8.5, align: 'left', maxWidth: 80 },
  { id: 'chequeBanqueDate', page: 2, x: 315, y: 349, size: 8.5, align: 'left', maxWidth: 65 },
  { id: 'chequeBanqueAgence', page: 2, x: 440, y: 349, size: 8.5, align: 'left', maxWidth: 120 },

  { id: 'chequePostalNum', page: 2, x: 190, y: 329, size: 8.5, align: 'left', maxWidth: 110 },
  { id: 'chequePostalDate', page: 2, x: 340, y: 329, size: 8.5, align: 'left', maxWidth: 80 },

  { id: 'pay_numeraire', page: 2, x: 48, y: 309, size: 10, align: 'center', maxWidth: 14 },
];

/**
 * Maps GN51 form data into key-value pairs consumed by fillOfficialPdf.
 */
export function mapGN51ToFieldValues(
  data: GN51FormData,
  calc: GN51ComputeResult,
  lang: 'ar' | 'fr' = 'ar'
): Record<string, string | number | boolean> {
  const isFr = lang === 'fr';
  const cleanWilaya = data.wilaya
    .replace(/^(مديرية الضرائب لولاية|DIW de)\s*/iu, '')
    .trim();

  const values: Record<string, string | number | boolean> = {
    wilaya: cleanWilaya,
    structure: data.structure.trim(),

    // Bailleur
    bailleurNom: data.bailleurNom.trim(),
    bailleurAdresse: data.bailleurAdresse.trim(),
    bailleurCommune: data.bailleurCommune.trim(),
    bailleurWilaya: data.bailleurWilaya.trim(),
    bailleurCodePostal: data.bailleurCodePostal.trim(),
    bailleurNif: data.bailleurNif.trim(),
    bailleurNin: data.bailleurNin.trim(),

    // Preneur
    preneurNom: data.preneurNom.trim(),
    preneurAdresse: data.preneurAdresse.trim(),
    preneurCommune: data.preneurCommune.trim(),
    preneurWilaya: data.preneurWilaya.trim(),
    preneurCodePostal: data.preneurCodePostal.trim(),
    preneurNif: data.preneurNif.trim(),
    preneurNin: data.preneurNin.trim(),

    // Bien loué
    natureBien: data.natureBien.trim(),
    lieuSituation: data.lieuSituation.trim(),
    communeBien: data.communeBien.trim(),
    wilayaBien: data.wilayaBien.trim(),
    codePostalBien: data.codePostalBien.trim(),
    articleImposition: data.articleImposition.trim(),

    // Destination checkboxes
    dest_habitation: data.destination === 'habitation' ? 'X' : '',
    dest_commercial: data.destination === 'commercial' ? 'X' : '',
    dest_agricole: data.destination === 'agricole' ? 'X' : '',

    dateDebutContrat: data.dateDebutContrat.trim(),
    dateFinContrat: data.dateFinContrat.trim(),
    periodicite: data.periodicite.trim(),

    // Signature
    faitA: data.faitA.trim(),
    dateDeclaration: (data.dateDeclaration || '').trim(),

    // Paiement
    chequeBanqueNum: data.modePaiement === 'cheque_bancaire' ? data.chequeBanqueNum.trim() : '',
    chequeBanqueDate: data.modePaiement === 'cheque_bancaire' ? data.chequeBanqueDate.trim() : '',
    chequeBanqueAgence: data.modePaiement === 'cheque_bancaire' ? data.chequeBanqueAgence.trim() : '',

    chequePostalNum: data.modePaiement === 'cheque_postal' ? data.chequePostalNum.trim() : '',
    chequePostalDate: data.modePaiement === 'cheque_postal' ? data.chequePostalDate.trim() : '',

    pay_numeraire: data.modePaiement === 'numeraire' ? 'X' : '',
  };

  // Tax values based on threshold
  if (!calc.isOverThreshold) {
    if (calc.loyerHabitation > 0) {
      values.loyerHabitation = calc.loyerHabitation;
      values.taxHabitation = calc.taxHabitation;
    }
    if (calc.loyerCommercial > 0) {
      values.loyerCommercial = calc.loyerCommercial;
      values.taxCommercial = calc.taxCommercial;
    }
    if (calc.loyerNonBati > 0) {
      values.loyerNonBati = calc.loyerNonBati;
      values.taxNonBati = calc.taxNonBati;
    }
    if (calc.loyerAgricole > 0) {
      values.loyerAgricole = calc.loyerAgricole;
      values.taxAgricole = calc.taxAgricole;
    }
    if (calc.totalTaxDue > 0) {
      values.totalTaxDue_p1 = calc.totalTaxDue;
    }
  } else {
    if (calc.totalGrossLoyer > 0) {
      values.loyerExcedentaire = calc.totalGrossLoyer;
      values.taxExcedentaire = calc.taxExcedentaire;
    }
  }

  return values;
}
