import { FormFieldCoord } from '../types';
import { GN31FormData } from './schema';
import { digitsOnly } from '../normalizeDigits';

/**
 * Coordinate mapping for official Algerian Tax Declaration Série G N° 31 (Taxe Foncière).
 * Template: public/forms/gn31.pdf (4 pages, A4: 595.32 x 841.92 pt, bottom-left origin).
 */
export const GN31_FIELD_COORDINATES: FormFieldCoord[] = [
  // ──────────────────────────────────────────
  // PAGE 1 — الترويسة الإدارية
  // ──────────────────────────────────────────
  { id: 'directionWilaya', page: 1, x: 250, y: 738, size: 9, align: 'right', maxWidth: 170 },
  { id: 'commune', page: 1, x: 250, y: 724, size: 9, align: 'right', maxWidth: 170 },
  { id: 'inspection', page: 1, x: 250, y: 710, size: 9, align: 'right', maxWidth: 170 },

  // نوع التصريح (خانات اختيار)
  { id: 'decl_first_year', page: 1, x: 446, y: 554, size: 9, align: 'center', maxWidth: 14 },
  { id: 'decl_change', page: 1, x: 446, y: 531, size: 9, align: 'center', maxWidth: 14 },

  // I. موقع الملكية
  { id: 'propWilaya', page: 1, x: 50, y: 482, size: 9, align: 'right', maxWidth: 450 },
  { id: 'propCommune', page: 1, x: 50, y: 470, size: 9, align: 'right', maxWidth: 450 },
  { id: 'propRue', page: 1, x: 50, y: 457, size: 9, align: 'right', maxWidth: 450 },
  { id: 'propDetails', page: 1, x: 50, y: 444, size: 9, align: 'right', maxWidth: 450 },

  // II. تعيين الشاغل — شخص طبيعي
  { id: 'nomPrenom', page: 1, x: 50, y: 403, size: 9, align: 'right', maxWidth: 260 },
  { id: 'dateLieuNaissance', page: 1, x: 50, y: 389, size: 9, align: 'right', maxWidth: 240 },
  { id: 'adresseResidence', page: 1, x: 50, y: 374, size: 9, align: 'right', maxWidth: 260 },
  { id: 'communeResidence', page: 1, x: 230, y: 360, size: 9, align: 'right', maxWidth: 90 },
  { id: 'wilayaResidence', page: 1, x: 140, y: 360, size: 9, align: 'right', maxWidth: 70 },
  { id: 'codePostal', page: 1, x: 50, y: 360, size: 8.5, align: 'center', maxWidth: 45 },
  { id: 'telephone', page: 1, x: 220, y: 345, size: 9, align: 'right', maxWidth: 100 },
  { id: 'email', page: 1, x: 50, y: 345, size: 8, align: 'left', maxWidth: 150 },

  // خانات صفة الشخص الطبيعي
  { id: 'qualite_prop_occupant', page: 1, x: 540, y: 378, size: 9, align: 'center', maxWidth: 14 },
  { id: 'qualite_usufruitier', page: 1, x: 540, y: 358, size: 9, align: 'center', maxWidth: 14 },

  // II. تعيين الشاغل — شخص معنوي
  { id: 'nomSociete', page: 1, x: 50, y: 324, size: 9, align: 'right', maxWidth: 280 },
  { id: 'siegeSocial', page: 1, x: 50, y: 305, size: 9, align: 'right', maxWidth: 280 },
  { id: 'telSociete', page: 1, x: 240, y: 286, size: 9, align: 'right', maxWidth: 80 },
  { id: 'faxSociete', page: 1, x: 150, y: 286, size: 9, align: 'right', maxWidth: 70 },
  { id: 'emailSociete', page: 1, x: 50, y: 286, size: 8, align: 'left', maxWidth: 90 },

  // خانات صفة الشخص المعنوي
  { id: 'qualite_societe_prop', page: 1, x: 540, y: 303, size: 9, align: 'center', maxWidth: 14 },
  { id: 'qualite_societe_concession', page: 1, x: 540, y: 284, size: 9, align: 'center', maxWidth: 14 },

  // III. معلومات تخص الملكية — أ. طبيعة الملكية (خانات اختيار)
  { id: 'nature_individuel', page: 1, x: 359, y: 236, size: 9, align: 'center', maxWidth: 14 },
  { id: 'nature_appartement', page: 1, x: 359, y: 223, size: 9, align: 'center', maxWidth: 14 },
  { id: 'nature_collectif', page: 1, x: 359, y: 210, size: 9, align: 'center', maxWidth: 14 },
  { id: 'nature_professionnel', page: 1, x: 359, y: 195, size: 9, align: 'center', maxWidth: 14 },
  { id: 'nature_terrain', page: 1, x: 359, y: 177, size: 9, align: 'center', maxWidth: 14 },

  // ب. تواريخ
  { id: 'dateAchat', page: 1, x: 50, y: 143, size: 9, align: 'right', maxWidth: 360 },
  { id: 'dateAchevement', page: 1, x: 50, y: 129, size: 9, align: 'right', maxWidth: 330 },
  { id: 'dateOccupationPartielle', page: 1, x: 50, y: 114, size: 9, align: 'right', maxWidth: 330 },
  { id: 'dateOccupationTotale', page: 1, x: 50, y: 99, size: 9, align: 'right', maxWidth: 330 },

  // ──────────────────────────────────────────
  // PAGE 2 — مواصفات ومساحات الملكية
  // ──────────────────────────────────────────
  // 1- سكن فردي
  { id: 'indiv_res_principale', page: 2, x: 513, y: 726, size: 9, align: 'center', maxWidth: 14 },
  { id: 'indiv_res_secondaire', page: 2, x: 513, y: 688, size: 9, align: 'center', maxWidth: 14 },
  { id: 'indiv_loue', page: 2, x: 360, y: 704, size: 9, align: 'center', maxWidth: 14 },
  { id: 'indiv_non_loue', page: 2, x: 360, y: 683, size: 9, align: 'center', maxWidth: 14 },
  { id: 'indiv_sup_totale', page: 2, x: 60, y: 644, size: 9, align: 'left', maxWidth: 180 },
  { id: 'indiv_sup_habitation', page: 2, x: 60, y: 625, size: 9, align: 'left', maxWidth: 180 },
  { id: 'indiv_sup_pro', page: 2, x: 60, y: 605, size: 9, align: 'left', maxWidth: 180 },
  { id: 'indiv_sup_dependances', page: 2, x: 60, y: 458, size: 9, align: 'left', maxWidth: 180 },
  { id: 'indiv_sup_non_batie', page: 2, x: 60, y: 438, size: 9, align: 'left', maxWidth: 180 },

  // 2- شقة في مبنى جماعي
  { id: 'app_res_principale', page: 2, x: 513, y: 351, size: 9, align: 'center', maxWidth: 14 },
  { id: 'app_res_secondaire', page: 2, x: 513, y: 313, size: 9, align: 'center', maxWidth: 14 },
  { id: 'app_loue', page: 2, x: 360, y: 324, size: 9, align: 'center', maxWidth: 14 },
  { id: 'app_non_loue', page: 2, x: 360, y: 304, size: 9, align: 'center', maxWidth: 14 },
  { id: 'app_sup_totale', page: 2, x: 60, y: 257, size: 9, align: 'left', maxWidth: 180 },
  { id: 'app_sup_habitation', page: 2, x: 60, y: 242, size: 9, align: 'left', maxWidth: 180 },
  { id: 'app_sup_pro', page: 2, x: 60, y: 227, size: 9, align: 'left', maxWidth: 180 },

  // 3- مبنى جماعي / شبه جماعي
  { id: 'coll_nb_etages', page: 2, x: 350, y: 121, size: 9, align: 'right', maxWidth: 80 },
  { id: 'coll_sup_habitation', page: 2, x: 60, y: 100, size: 9, align: 'left', maxWidth: 180 },
  { id: 'coll_sup_pro', page: 2, x: 60, y: 80, size: 9, align: 'left', maxWidth: 180 },

  // ──────────────────────────────────────────
  // PAGE 3 — محلات مهنية، ملكيات غير مبنية والتوقيع
  // ──────────────────────────────────────────
  { id: 'pro_sup_totale', page: 3, x: 60, y: 756, size: 9, align: 'left', maxWidth: 180 },
  { id: 'pro_sup_activite', page: 3, x: 60, y: 735, size: 9, align: 'left', maxWidth: 180 },

  // أراضي
  { id: 'terrain_agricole_irrigue', page: 3, x: 120, y: 571, size: 9, align: 'center', maxWidth: 90 },
  { id: 'terrain_agricole_non_irrigue', page: 3, x: 120, y: 555, size: 9, align: 'center', maxWidth: 90 },
  { id: 'terrain_constructible', page: 3, x: 120, y: 395, size: 9, align: 'center', maxWidth: 90 },

  // التصديق والتوقيع (الصفحة 3)
  { id: 'faitA', page: 3, x: 300, y: 112, size: 9, align: 'right', maxWidth: 70 },
  { id: 'dateDeclaration', page: 3, x: 215, y: 112, size: 9, align: 'left', maxWidth: 70 },

  // التصديق والتوقيع (الصفحة 4 - ملحق)
  { id: 'faitA_p4', page: 4, x: 300, y: 150, size: 9, align: 'right', maxWidth: 70 },
  { id: 'dateDeclaration_p4', page: 4, x: 220, y: 150, size: 9, align: 'left', maxWidth: 70 },
];

// NIF in AR template: 20 individual boxes at y=684, from x=196.5 to 443.5 (box width ~12.35 pt)
for (let i = 0; i < 20; i++) {
  const boxCenter = 196.5 + i * 12.35 + 6.17;
  GN31_FIELD_COORDINATES.push({
    id: `nif_${i}`,
    page: 1,
    x: Math.round(boxCenter - 5),
    y: 684,
    size: 8.5,
    align: 'center',
    maxWidth: 10,
  });
}

// NAI in AR template: 11 individual boxes at y=668, from x=330.7 to 433.3 (box width ~9.33 pt)
for (let i = 0; i < 11; i++) {
  const boxCenter = 330.7 + i * 9.33 + 4.66;
  GN31_FIELD_COORDINATES.push({
    id: `nai_${i}`,
    page: 1,
    x: Math.round(boxCenter - 4),
    y: 668,
    size: 8,
    align: 'center',
    maxWidth: 8,
  });
}

// NIN in AR template: 18 individual boxes at y=651, from x=272.2 to 448.2 (box width ~9.77 pt)
for (let i = 0; i < 18; i++) {
  const boxCenter = 272.2 + i * 9.77 + 4.88;
  GN31_FIELD_COORDINATES.push({
    id: `nin_${i}`,
    page: 1,
    x: Math.round(boxCenter - 4),
    y: 651,
    size: 8.5,
    align: 'center',
    maxWidth: 8,
  });
}

/**
 * Coordinate mapping for official Algerian Série G N° 31 in French.
 * Template: public/forms/gn31_fr.pdf (4 pages, A4: 595.32 x 841.92 pt, bottom-left origin).
 */
export const GN31_FIELD_COORDINATES_FR: FormFieldCoord[] = [
  // PAGE 1 — En-tête administratif
  { id: 'directionWilaya', page: 1, x: 105, y: 737, size: 9, align: 'left', maxWidth: 170 },
  { id: 'commune', page: 1, x: 125, y: 724, size: 9, align: 'left', maxWidth: 150 },
  { id: 'inspection', page: 1, x: 185, y: 710, size: 9, align: 'left', maxWidth: 95 },

  // Type de déclaration
  { id: 'decl_first_year', page: 1, x: 92, y: 553, size: 10, align: 'center', maxWidth: 16 },
  { id: 'decl_change', page: 1, x: 92, y: 534, size: 10, align: 'center', maxWidth: 16 },

  // I. Situation du bien
  { id: 'propWilaya', page: 1, x: 85, y: 481, size: 9, align: 'left', maxWidth: 470 },
  { id: 'propCommune', page: 1, x: 95, y: 468, size: 9, align: 'left', maxWidth: 460 },
  { id: 'propRue', page: 1, x: 75, y: 455, size: 9, align: 'left', maxWidth: 480 },
  { id: 'propDetails', page: 1, x: 135, y: 441, size: 9, align: 'left', maxWidth: 420 },

  // II. Désignation de l'occupant — Personne physique
  { id: 'nomPrenom', page: 1, x: 270, y: 398, size: 9, align: 'left', maxWidth: 280 },
  { id: 'dateLieuNaissance', page: 1, x: 305, y: 385, size: 9, align: 'left', maxWidth: 250 },
  { id: 'adresseResidence', page: 1, x: 285, y: 372, size: 9, align: 'left', maxWidth: 270 },
  { id: 'communeResidence', page: 1, x: 240, y: 359, size: 9, align: 'left', maxWidth: 80 },
  { id: 'wilayaResidence', page: 1, x: 365, y: 359, size: 9, align: 'left', maxWidth: 55 },
  { id: 'codePostal', page: 1, x: 505, y: 359, size: 8.5, align: 'left', maxWidth: 55 },
  { id: 'telephone', page: 1, x: 245, y: 345, size: 9, align: 'left', maxWidth: 110 },
  { id: 'email', page: 1, x: 435, y: 345, size: 8, align: 'left', maxWidth: 120 },

  { id: 'qualite_prop_occupant', page: 1, x: 161, y: 373, size: 10, align: 'center', maxWidth: 16 },
  { id: 'qualite_usufruitier', page: 1, x: 161, y: 353, size: 10, align: 'center', maxWidth: 16 },

  // II. Désignation de l'occupant — Personne morale
  { id: 'nomSociete', page: 1, x: 260, y: 313, size: 9, align: 'left', maxWidth: 290 },
  { id: 'siegeSocial', page: 1, x: 300, y: 294, size: 9, align: 'left', maxWidth: 250 },
  { id: 'telSociete', page: 1, x: 240, y: 275, size: 9, align: 'left', maxWidth: 80 },
  { id: 'faxSociete', page: 1, x: 355, y: 275, size: 9, align: 'left', maxWidth: 70 },
  { id: 'emailSociete', page: 1, x: 465, y: 275, size: 8, align: 'left', maxWidth: 85 },

  { id: 'qualite_societe_prop', page: 1, x: 161, y: 294, size: 10, align: 'center', maxWidth: 16 },
  { id: 'qualite_societe_concession', page: 1, x: 161, y: 275, size: 10, align: 'center', maxWidth: 16 },

  // III. Renseignements concernant le bien — A. Nature
  { id: 'nature_individuel', page: 1, x: 324, y: 213, size: 10, align: 'center', maxWidth: 16 },
  { id: 'nature_appartement', page: 1, x: 324, y: 199, size: 10, align: 'center', maxWidth: 16 },
  { id: 'nature_collectif', page: 1, x: 324, y: 186, size: 10, align: 'center', maxWidth: 16 },
  { id: 'nature_professionnel', page: 1, x: 324, y: 174, size: 10, align: 'center', maxWidth: 16 },
  { id: 'nature_terrain', page: 1, x: 324, y: 161, size: 10, align: 'center', maxWidth: 16 },

  // B. Dates
  { id: 'dateAchat', page: 1, x: 135, y: 121, size: 9, align: 'left', maxWidth: 420 },
  { id: 'dateAchevement', page: 1, x: 245, y: 108, size: 9, align: 'left', maxWidth: 310 },
  { id: 'dateOccupationPartielle', page: 1, x: 275, y: 96, size: 9, align: 'left', maxWidth: 270 },
  { id: 'dateOccupationTotale', page: 1, x: 245, y: 82, size: 9, align: 'left', maxWidth: 310 },

  // PAGE 2 — Consistance & Superficies
  // 1- Maison individuelle
  { id: 'indiv_res_principale', page: 2, x: 62, y: 730, size: 10, align: 'center', maxWidth: 16 },
  { id: 'indiv_res_secondaire', page: 2, x: 62, y: 708, size: 10, align: 'center', maxWidth: 16 },
  { id: 'indiv_loue', page: 2, x: 220, y: 712, size: 10, align: 'center', maxWidth: 16 },
  { id: 'indiv_non_loue', page: 2, x: 220, y: 698, size: 10, align: 'center', maxWidth: 16 },
  { id: 'indiv_sup_totale', page: 2, x: 300, y: 644, size: 9, align: 'left', maxWidth: 200 },
  { id: 'indiv_sup_habitation', page: 2, x: 300, y: 625, size: 9, align: 'left', maxWidth: 200 },
  { id: 'indiv_sup_pro', page: 2, x: 300, y: 605, size: 9, align: 'left', maxWidth: 200 },
  { id: 'indiv_sup_dependances', page: 2, x: 300, y: 458, size: 9, align: 'left', maxWidth: 200 },
  { id: 'indiv_sup_non_batie', page: 2, x: 300, y: 438, size: 9, align: 'left', maxWidth: 200 },

  // 2- Appartement
  { id: 'app_res_principale', page: 2, x: 62, y: 387, size: 10, align: 'center', maxWidth: 16 },
  { id: 'app_res_secondaire', page: 2, x: 62, y: 365, size: 10, align: 'center', maxWidth: 16 },
  { id: 'app_loue', page: 2, x: 220, y: 368, size: 10, align: 'center', maxWidth: 16 },
  { id: 'app_non_loue', page: 2, x: 220, y: 354, size: 10, align: 'center', maxWidth: 16 },
  { id: 'app_sup_totale', page: 2, x: 300, y: 327, size: 9, align: 'left', maxWidth: 200 },
  { id: 'app_sup_habitation', page: 2, x: 300, y: 295, size: 9, align: 'left', maxWidth: 200 },
  { id: 'app_sup_pro', page: 2, x: 300, y: 271, size: 9, align: 'left', maxWidth: 200 },

  // 3- Immeuble collectif
  { id: 'coll_nb_etages', page: 2, x: 160, y: 154, size: 9, align: 'left', maxWidth: 100 },
  { id: 'coll_sup_habitation', page: 2, x: 300, y: 130, size: 9, align: 'left', maxWidth: 200 },
  { id: 'coll_sup_pro', page: 2, x: 300, y: 109, size: 9, align: 'left', maxWidth: 200 },

  // PAGE 3 — Locaux professionnels & terrains
  { id: 'pro_sup_totale', page: 3, x: 300, y: 760, size: 9, align: 'left', maxWidth: 200 },
  { id: 'pro_sup_activite', page: 3, x: 300, y: 742, size: 9, align: 'left', maxWidth: 200 },
  { id: 'terrain_agricole_irrigue', page: 3, x: 420, y: 567, size: 9, align: 'left', maxWidth: 100 },
  { id: 'terrain_agricole_non_irrigue', page: 3, x: 420, y: 551, size: 9, align: 'left', maxWidth: 100 },

  // Certification Page 3
  { id: 'faitA', page: 3, x: 235, y: 132, size: 9, align: 'left', maxWidth: 80 },
  { id: 'dateDeclaration', page: 3, x: 350, y: 132, size: 9, align: 'left', maxWidth: 80 },

  // PAGE 4 — Annexe (changement)
  { id: 'annexe_dateChangement', page: 4, x: 290, y: 715, size: 9, align: 'left', maxWidth: 200 },
  { id: 'faitA_p4', page: 4, x: 240, y: 123, size: 9, align: 'left', maxWidth: 80 },
  { id: 'dateDeclaration_p4', page: 4, x: 355, y: 123, size: 9, align: 'left', maxWidth: 80 },
];

// NIF in FR template: 20 boxes at y=692 (from x=247 to 444, width ~9.85pt)
for (let i = 0; i < 20; i++) {
  const boxCenter = 247 + i * 9.85 + 4.9;
  GN31_FIELD_COORDINATES_FR.push({
    id: `nif_${i}`,
    page: 1,
    x: Math.round(boxCenter - 4.5),
    y: 692,
    size: 9,
    align: 'center',
    maxWidth: 9,
  });
}

// NAI in FR template: 11 boxes at y=672 (from x=246 to 353, width ~9.7pt)
for (let i = 0; i < 11; i++) {
  const boxCenter = 246 + i * 9.7 + 4.85;
  GN31_FIELD_COORDINATES_FR.push({
    id: `nai_${i}`,
    page: 1,
    x: Math.round(boxCenter - 4),
    y: 672,
    size: 8.5,
    align: 'center',
    maxWidth: 8,
  });
}

// NIN in FR template: 18 boxes at y=653 (from x=258 to 433, width ~9.7pt)
for (let i = 0; i < 18; i++) {
  const boxCenter = 258 + i * 9.7 + 4.85;
  GN31_FIELD_COORDINATES_FR.push({
    id: `nin_${i}`,
    page: 1,
    x: Math.round(boxCenter - 4),
    y: 653,
    size: 8.5,
    align: 'center',
    maxWidth: 8,
  });
}

/**
 * Maps GN31 form state into key-value pairs consumed by fillOfficialPdf.
 */
export function mapGN31ToFieldValues(
  data: GN31FormData,
  lang: 'ar' | 'fr' = 'ar'
): Record<string, string | number | boolean> {
  const cleanWilaya = data.directionWilaya
    .replace(/^(مديرية الضرائب لولاية|DIW de)\s*/iu, '')
    .trim();

  const values: Record<string, string | number | boolean> = {
    // Header
    directionWilaya: cleanWilaya,
    commune: data.commune,
    inspection: data.inspection,

    // Declaration Type Checkbox
    decl_first_year: data.declarationType === 'first_year' ? 'X' : '',
    decl_change: data.declarationType === 'change' ? 'X' : '',

    // Section I
    propWilaya: data.propWilaya,
    propCommune: data.propCommune,
    propRue: data.propRue,
    propDetails: data.propDetails || '',

    // Dates
    dateAchat: data.dateAchat || '',
    dateAchevement: data.dateAchevement || '',
    dateOccupationPartielle: data.dateOccupationPartielle || '',
    dateOccupationTotale: data.dateOccupationTotale || '',

    // Signature
    faitA: (data.faitA || '').trim(),
    dateDeclaration: (data.dateDeclaration || '').trim(),
    faitA_p4: data.declarationType === 'change' ? (data.faitA || '').trim() : '',
    dateDeclaration_p4: data.declarationType === 'change' ? (data.dateDeclaration || '').trim() : '',
  };

  // NIF digits (up to 20)
  const cleanNif = digitsOnly(data.nif || '');
  for (let i = 0; i < 20; i++) {
    values[`nif_${i}`] = cleanNif[i] || '';
  }

  // NAI digits (up to 11)
  const cleanNai = digitsOnly(data.nai || '');
  for (let i = 0; i < 11; i++) {
    values[`nai_${i}`] = cleanNai[i] || '';
  }

  // NIN digits (up to 18)
  const cleanNin = digitsOnly(data.nin || '');
  for (let i = 0; i < 18; i++) {
    values[`nin_${i}`] = cleanNin[i] || '';
  }

  // Section II Occupant
  if (data.occupantType === 'physique') {
    values.nomPrenom = data.nomPrenom;
    values.dateLieuNaissance = data.dateLieuNaissance;
    values.adresseResidence = data.adresseResidence;
    values.communeResidence = data.communeResidence;
    values.wilayaResidence = data.wilayaResidence;
    values.codePostal = data.codePostal;
    values.telephone = data.telephone;
    values.email = data.email;

    values.qualite_prop_occupant = data.qualitePhysique === 'proprietaire' ? 'X' : '';
    values.qualite_usufruitier = data.qualitePhysique === 'usufruitier' ? 'X' : '';
  } else if (data.occupantType === 'morale') {
    values.nomSociete = data.nomSociete;
    values.siegeSocial = data.siegeSocial;
    values.telSociete = data.telSociete;
    values.faxSociete = data.faxSociete;
    values.emailSociete = data.emailSociete;

    values.qualite_societe_prop = data.qualiteMorale === 'proprietaire' ? 'X' : '';
    values.qualite_societe_concession = data.qualiteMorale === 'concessionnaire' ? 'X' : '';
  }
  // When occupantType is unspecified, leave both identity blocks and their
  // checkboxes empty rather than interpreting "unspecified" as a company.

  // Section III Nature
  values.nature_individuel = data.natureBien === 'individuel' ? 'X' : '';
  values.nature_appartement = data.natureBien === 'appartement' ? 'X' : '';
  values.nature_collectif = data.natureBien === 'collectif' ? 'X' : '';
  values.nature_professionnel = data.natureBien === 'professionnel' ? 'X' : '';
  values.nature_terrain = data.natureBien === 'terrain' ? 'X' : '';

  // Page 2 & 3 areas depending on property nature
  if (data.natureBien === 'individuel') {
    values.indiv_res_principale = data.usageResidence === 'principale' ? 'X' : '';
    values.indiv_res_secondaire = data.usageResidence === 'secondaire' ? 'X' : '';
    values.indiv_loue = data.isLoueSelected && data.isLoue ? 'X' : '';
    values.indiv_non_loue = data.isLoueSelected && !data.isLoue ? 'X' : '';

    if (data.superficieTotale > 0) values.indiv_sup_totale = `${data.superficieTotale}`;
    if (data.superficieHabitation > 0) values.indiv_sup_habitation = `${data.superficieHabitation}`;
    if (data.superficieProfessionnelle > 0) values.indiv_sup_pro = `${data.superficieProfessionnelle}`;
    if (data.superficieDependances > 0) values.indiv_sup_dependances = `${data.superficieDependances}`;
    if (data.superficieNonBatie > 0) values.indiv_sup_non_batie = `${data.superficieNonBatie}`;
  } else if (data.natureBien === 'appartement') {
    values.app_res_principale = data.usageResidence === 'principale' ? 'X' : '';
    values.app_res_secondaire = data.usageResidence === 'secondaire' ? 'X' : '';
    values.app_loue = data.isLoueSelected && data.isLoue ? 'X' : '';
    values.app_non_loue = data.isLoueSelected && !data.isLoue ? 'X' : '';

    if (data.superficieTotale > 0) values.app_sup_totale = `${data.superficieTotale}`;
    if (data.superficieHabitation > 0) values.app_sup_habitation = `${data.superficieHabitation}`;
    if (data.superficieProfessionnelle > 0) values.app_sup_pro = `${data.superficieProfessionnelle}`;
  } else if (data.natureBien === 'collectif') {
    if (data.nbEtages > 0) values.coll_nb_etages = `${data.nbEtages}`;
    if (data.superficieHabitation > 0) values.coll_sup_habitation = `${data.superficieHabitation}`;
    if (data.superficieProfessionnelle > 0) values.coll_sup_pro = `${data.superficieProfessionnelle}`;
  } else if (data.natureBien === 'professionnel') {
    if (data.superficieTotale > 0) values.pro_sup_totale = `${data.superficieTotale}`;
    if (data.superficieProfessionnelle > 0) values.pro_sup_activite = `${data.superficieProfessionnelle}`;
  } else if (data.natureBien === 'terrain') {
    if (data.surfaceAgricoleIrriguee > 0) values.terrain_agricole_irrigue = `${data.surfaceAgricoleIrriguee}`;
    if (data.surfaceAgricoleNonIrriguee > 0) values.terrain_agricole_non_irrigue = `${data.surfaceAgricoleNonIrriguee}`;
    if (data.surfaceTerrainConstructible > 0) values.terrain_constructible = `${data.surfaceTerrainConstructible}`;
  }

  return values;
}
