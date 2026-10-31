import { FormFieldCoord } from '../types';
import { GN31FormData } from './schema';

/**
 * Coordinate mapping for official Algerian Tax Declaration Série G N° 31 (Taxe Foncière).
 * Template: public/forms/gn31.pdf (4 pages, A4: 595.32 x 841.92 pt, bottom-left origin).
 */
export const GN31_FIELD_COORDINATES: FormFieldCoord[] = [
  // ──────────────────────────────────────────
  // PAGE 1 — الترويسة الإدارية
  // ──────────────────────────────────────────
  { id: 'directionWilaya', page: 1, x: 250, y: 739, size: 9, align: 'right', maxWidth: 180 },
  { id: 'commune', page: 1, x: 250, y: 725, size: 9, align: 'right', maxWidth: 180 },
  { id: 'inspection', page: 1, x: 250, y: 711, size: 9, align: 'right', maxWidth: 180 },

  // نوع التصريح (خانات اختيار)
  { id: 'decl_first_year', page: 1, x: 442, y: 563, size: 10, align: 'center', maxWidth: 16 },
  { id: 'decl_change', page: 1, x: 442, y: 539, size: 10, align: 'center', maxWidth: 16 },

  // I. موقع الملكية
  { id: 'propWilaya', page: 1, x: 50, y: 483, size: 9, align: 'right', maxWidth: 450 },
  { id: 'propCommune', page: 1, x: 50, y: 471, size: 9, align: 'right', maxWidth: 450 },
  { id: 'propRue', page: 1, x: 50, y: 458, size: 9, align: 'right', maxWidth: 450 },
  { id: 'propDetails', page: 1, x: 50, y: 445, size: 9, align: 'right', maxWidth: 450 },

  // II. تعيين الشاغل — شخص طبيعي
  { id: 'nomPrenom', page: 1, x: 50, y: 405, size: 9, align: 'right', maxWidth: 280 },
  { id: 'dateLieuNaissance', page: 1, x: 50, y: 390, size: 9, align: 'right', maxWidth: 280 },
  { id: 'adresseResidence', page: 1, x: 50, y: 375, size: 9, align: 'right', maxWidth: 280 },
  { id: 'communeResidence', page: 1, x: 220, y: 361, size: 9, align: 'right', maxWidth: 90 },
  { id: 'wilayaResidence', page: 1, x: 140, y: 361, size: 9, align: 'right', maxWidth: 70 },
  { id: 'codePostal', page: 1, x: 50, y: 361, size: 9, align: 'right', maxWidth: 60 },
  { id: 'telephone', page: 1, x: 210, y: 346, size: 9, align: 'right', maxWidth: 100 },
  { id: 'email', page: 1, x: 50, y: 346, size: 8, align: 'left', maxWidth: 150 },

  // خانات صفة الشخص الطبيعي
  { id: 'qualite_prop_occupant', page: 1, x: 538, y: 388, size: 10, align: 'center', maxWidth: 16 },
  { id: 'qualite_usufruitier', page: 1, x: 538, y: 368, size: 10, align: 'center', maxWidth: 16 },

  // II. تعيين الشاغل — شخص معنوي
  { id: 'nomSociete', page: 1, x: 50, y: 325, size: 9, align: 'right', maxWidth: 280 },
  { id: 'siegeSocial', page: 1, x: 50, y: 306, size: 9, align: 'right', maxWidth: 280 },
  { id: 'telSociete', page: 1, x: 240, y: 287, size: 9, align: 'right', maxWidth: 80 },
  { id: 'faxSociete', page: 1, x: 150, y: 287, size: 9, align: 'right', maxWidth: 70 },
  { id: 'emailSociete', page: 1, x: 50, y: 287, size: 8, align: 'left', maxWidth: 90 },

  // خانات صفة الشخص المعنوي
  { id: 'qualite_societe_prop', page: 1, x: 538, y: 314, size: 10, align: 'center', maxWidth: 16 },
  { id: 'qualite_societe_concession', page: 1, x: 538, y: 295, size: 10, align: 'center', maxWidth: 16 },

  // III. معلومات تخص الملكية — أ. طبيعة الملكية (خانات اختيار)
  { id: 'nature_individuel', page: 1, x: 356, y: 242, size: 10, align: 'center', maxWidth: 16 },
  { id: 'nature_appartement', page: 1, x: 356, y: 228, size: 10, align: 'center', maxWidth: 16 },
  { id: 'nature_collectif', page: 1, x: 356, y: 215, size: 10, align: 'center', maxWidth: 16 },
  { id: 'nature_professionnel', page: 1, x: 356, y: 199, size: 10, align: 'center', maxWidth: 16 },
  { id: 'nature_terrain', page: 1, x: 356, y: 182, size: 10, align: 'center', maxWidth: 16 },

  // ب. تواريخ
  { id: 'dateAchat', page: 1, x: 50, y: 144, size: 9, align: 'right', maxWidth: 450 },
  { id: 'dateAchevement', page: 1, x: 50, y: 130, size: 9, align: 'right', maxWidth: 450 },
  { id: 'dateOccupationPartielle', page: 1, x: 50, y: 115, size: 9, align: 'right', maxWidth: 450 },
  { id: 'dateOccupationTotale', page: 1, x: 50, y: 101, size: 9, align: 'right', maxWidth: 450 },

  // ──────────────────────────────────────────
  // PAGE 2 — مواصفات ومساحات الملكية
  // ──────────────────────────────────────────
  // 1- سكن فردي
  { id: 'indiv_res_principale', page: 2, x: 513, y: 730, size: 10, align: 'center', maxWidth: 16 },
  { id: 'indiv_res_secondaire', page: 2, x: 513, y: 694, size: 10, align: 'center', maxWidth: 16 },
  { id: 'indiv_loue', page: 2, x: 370, y: 712, size: 10, align: 'center', maxWidth: 16 },
  { id: 'indiv_non_loue', page: 2, x: 370, y: 686, size: 10, align: 'center', maxWidth: 16 },
  { id: 'indiv_sup_totale', page: 2, x: 60, y: 644, size: 9, align: 'left', maxWidth: 180 },
  { id: 'indiv_sup_habitation', page: 2, x: 60, y: 625, size: 9, align: 'left', maxWidth: 180 },
  { id: 'indiv_sup_pro', page: 2, x: 60, y: 605, size: 9, align: 'left', maxWidth: 180 },
  { id: 'indiv_sup_dependances', page: 2, x: 60, y: 458, size: 9, align: 'left', maxWidth: 180 },
  { id: 'indiv_sup_non_batie', page: 2, x: 60, y: 438, size: 9, align: 'left', maxWidth: 180 },

  // 2- شقة في مبنى جماعي
  { id: 'app_res_principale', page: 2, x: 513, y: 355, size: 10, align: 'center', maxWidth: 16 },
  { id: 'app_res_secondaire', page: 2, x: 513, y: 318, size: 10, align: 'center', maxWidth: 16 },
  { id: 'app_loue', page: 2, x: 373, y: 337, size: 10, align: 'center', maxWidth: 16 },
  { id: 'app_non_loue', page: 2, x: 373, y: 312, size: 10, align: 'center', maxWidth: 16 },
  { id: 'app_sup_totale', page: 2, x: 60, y: 260, size: 9, align: 'left', maxWidth: 180 },
  { id: 'app_sup_habitation', page: 2, x: 60, y: 242, size: 9, align: 'left', maxWidth: 180 },
  { id: 'app_sup_pro', page: 2, x: 60, y: 227, size: 9, align: 'left', maxWidth: 180 },

  // 3- مبنى جماعي / شبه جماعي
  { id: 'coll_nb_etages', page: 2, x: 350, y: 125, size: 9, align: 'right', maxWidth: 120 },
  { id: 'coll_sup_habitation', page: 2, x: 60, y: 100, size: 9, align: 'left', maxWidth: 180 },
  { id: 'coll_sup_pro', page: 2, x: 60, y: 80, size: 9, align: 'left', maxWidth: 180 },

  // ──────────────────────────────────────────
  // PAGE 3 — محلات مهنية، ملكيات غير مبنية والتوقيع
  // ──────────────────────────────────────────
  { id: 'pro_sup_totale', page: 3, x: 60, y: 721, size: 9, align: 'left', maxWidth: 180 },
  { id: 'pro_sup_activite', page: 3, x: 60, y: 701, size: 9, align: 'left', maxWidth: 180 },

  // أراضي
  { id: 'terrain_agricole_irrigue', page: 3, x: 140, y: 588, size: 9, align: 'center', maxWidth: 100 },
  { id: 'terrain_agricole_non_irrigue', page: 3, x: 140, y: 572, size: 9, align: 'center', maxWidth: 100 },
  { id: 'terrain_constructible', page: 3, x: 140, y: 440, size: 9, align: 'center', maxWidth: 100 },

  // التصديق والتوقيع (الصفحة 3)
  { id: 'faitA', page: 3, x: 260, y: 148, size: 10, align: 'right', maxWidth: 80 },
  { id: 'dateDeclaration', page: 3, x: 140, y: 148, size: 10, align: 'right', maxWidth: 80 },

  // التصديق والتوقيع (الصفحة 4 - ملحق)
  { id: 'faitA_p4', page: 4, x: 260, y: 148, size: 10, align: 'right', maxWidth: 80 },
  { id: 'dateDeclaration_p4', page: 4, x: 140, y: 148, size: 10, align: 'right', maxWidth: 80 },
];

// Dynamically generate individual digit box coordinates for NIF, NAI, NIN on Page 1
// NIF: 20 boxes between x=198 and x=444 at y=693
for (let i = 0; i < 20; i++) {
  const boxX = 198 + i * 12.33;
  GN31_FIELD_COORDINATES.push({
    id: `nif_${i}`,
    page: 1,
    x: Math.round(boxX + 2),
    y: 691,
    size: 9,
    align: 'center',
    maxWidth: 10,
  });
}

// NAI: 11 boxes between x=332 and x=432 at y=676
for (let i = 0; i < 11; i++) {
  const boxX = 332 + i * 9.1;
  GN31_FIELD_COORDINATES.push({
    id: `nai_${i}`,
    page: 1,
    x: Math.round(boxX + 1.5),
    y: 674,
    size: 8,
    align: 'center',
    maxWidth: 8,
  });
}

// NIN: 18 boxes between x=273 and x=448 at y=660
for (let i = 0; i < 18; i++) {
  const boxX = 273 + i * 9.7;
  GN31_FIELD_COORDINATES.push({
    id: `nin_${i}`,
    page: 1,
    x: Math.round(boxX + 1.5),
    y: 657,
    size: 8.5,
    align: 'center',
    maxWidth: 8,
  });
}

/**
 * Maps GN31 form state into key-value pairs consumed by fillOfficialPdf.
 */
export function mapGN31ToFieldValues(data: GN31FormData): Record<string, string | number | boolean> {
  const values: Record<string, string | number | boolean> = {
    // Header
    directionWilaya: data.directionWilaya.replace(/^مديرية الضرائب لولاية\s*/u, '').trim(),
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
    faitA: data.faitA || 'وهران',
    dateDeclaration: data.dateDeclaration || '',
    faitA_p4: data.declarationType === 'change' ? data.faitA : '',
    dateDeclaration_p4: data.declarationType === 'change' ? data.dateDeclaration : '',
  };

  // NIF digits (up to 20)
  const cleanNif = (data.nif || '').replace(/\D/g, '');
  for (let i = 0; i < 20; i++) {
    values[`nif_${i}`] = cleanNif[i] || '';
  }

  // NAI digits (up to 11)
  const cleanNai = (data.nai || '').replace(/\D/g, '');
  for (let i = 0; i < 11; i++) {
    values[`nai_${i}`] = cleanNai[i] || '';
  }

  // NIN digits (up to 18)
  const cleanNin = (data.nin || '').replace(/\D/g, '');
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
  } else {
    values.nomSociete = data.nomSociete;
    values.siegeSocial = data.siegeSocial;
    values.telSociete = data.telSociete;
    values.faxSociete = data.faxSociete;
    values.emailSociete = data.emailSociete;

    values.qualite_societe_prop = data.qualiteMorale === 'proprietaire' ? 'X' : '';
    values.qualite_societe_concession = data.qualiteMorale === 'concessionnaire' ? 'X' : '';
  }

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
    values.indiv_loue = data.isLoue ? 'X' : '';
    values.indiv_non_loue = !data.isLoue ? 'X' : '';

    if (data.superficieTotale > 0) values.indiv_sup_totale = `${data.superficieTotale}`;
    if (data.superficieHabitation > 0) values.indiv_sup_habitation = `${data.superficieHabitation}`;
    if (data.superficieProfessionnelle > 0) values.indiv_sup_pro = `${data.superficieProfessionnelle}`;
    if (data.superficieDependances > 0) values.indiv_sup_dependances = `${data.superficieDependances}`;
    if (data.superficieNonBatie > 0) values.indiv_sup_non_batie = `${data.superficieNonBatie}`;
  } else if (data.natureBien === 'appartement') {
    values.app_res_principale = data.usageResidence === 'principale' ? 'X' : '';
    values.app_res_secondaire = data.usageResidence === 'secondaire' ? 'X' : '';
    values.app_loue = data.isLoue ? 'X' : '';
    values.app_non_loue = !data.isLoue ? 'X' : '';

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
