import { FormFieldCoord } from '../types';
import { GN8FormData } from './schema';
import { digitsOnly } from '../normalizeDigits';

/**
 * Coordinate mapping for official Algerian Série G N° 08 (Déclaration d'existence / تصريح بالوجود).
 * Template: public/forms/gn8.pdf (2 pages A4: 595.32 x 841.92 pt, bottom-left origin).
 * Page 1 contains all form declaration fields. Page 2 is the official document checklist.
 */
export const GN8_FIELD_COORDINATES: FormFieldCoord[] = [
  // ──────────────────────────────────────────
  // الترويسة الإدارية
  // ──────────────────────────────────────────
  { id: 'directionWilaya', page: 1, x: 380, y: 739, size: 9, align: 'right', maxWidth: 80 },
  { id: 'service', page: 1, x: 380, y: 725, size: 9, align: 'right', maxWidth: 140 },

  // ──────────────────────────────────────────
  // النظام الجبائي (خانات اختيار مربعة رسمية)
  // ──────────────────────────────────────────
  { id: 'regime_ibs', page: 1, x: 384, y: 679, size: 10, align: 'center', maxWidth: 12 },
  { id: 'regime_irg', page: 1, x: 231, y: 679, size: 10, align: 'center', maxWidth: 12 },
  { id: 'irg_categorie', page: 1, x: 250, y: 666, size: 8.5, align: 'right', maxWidth: 90 },
  { id: 'regime_ifu', page: 1, x: 45, y: 679, size: 10, align: 'center', maxWidth: 12 },

  // ──────────────────────────────────────────
  // معلومات المكلف بالضريبة
  // ──────────────────────────────────────────
  { id: 'nomRaisonSociale', page: 1, x: 40, y: 551, size: 9, align: 'right', maxWidth: 430 },
  { id: 'formeJuridique', page: 1, x: 40, y: 515, size: 9, align: 'right', maxWidth: 460 },
  { id: 'activitePrincipale', page: 1, x: 40, y: 497, size: 9, align: 'right', maxWidth: 450 },

  // النشاطات الثانوية وعناوينها
  { id: 'activiteSec1', page: 1, x: 40, y: 463, size: 8.5, align: 'right', maxWidth: 520 },
  { id: 'activiteSec1_adr', page: 1, x: 40, y: 447, size: 8.5, align: 'right', maxWidth: 520 },
  { id: 'activiteSec2', page: 1, x: 40, y: 431, size: 8.5, align: 'right', maxWidth: 520 },
  { id: 'activiteSec2_adr', page: 1, x: 40, y: 415, size: 8.5, align: 'right', maxWidth: 520 },
  { id: 'activiteSec3', page: 1, x: 40, y: 399, size: 8.5, align: 'right', maxWidth: 520 },

  // ──────────────────────────────────────────
  // العناوين والاتصال
  // ──────────────────────────────────────────
  { id: 'adresseSiege_line1', page: 1, x: 40, y: 365, size: 8.5, align: 'right', maxWidth: 340 },
  { id: 'adresseSiege_line2', page: 1, x: 40, y: 354, size: 8.5, align: 'right', maxWidth: 520 },

  { id: 'adresseEtablissementAlgerie_line1', page: 1, x: 40, y: 331, size: 8.5, align: 'right', maxWidth: 260 },
  { id: 'adresseEtablissementAlgerie_line2', page: 1, x: 40, y: 320, size: 8.5, align: 'right', maxWidth: 520 },

  { id: 'adresseResidence_line1', page: 1, x: 40, y: 287, size: 8.5, align: 'right', maxWidth: 250 },
  { id: 'adresseResidence_line2', page: 1, x: 40, y: 276, size: 8.5, align: 'right', maxWidth: 520 },

  { id: 'telephone', page: 1, x: 340, y: 265, size: 8.5, align: 'right', maxWidth: 140 },
  { id: 'email', page: 1, x: 40, y: 265, size: 8.5, align: 'left', maxWidth: 200 },
  { id: 'numeroRc', page: 1, x: 40, y: 251, size: 8.5, align: 'right', maxWidth: 420 },
  { id: 'numeroAgrement', page: 1, x: 40, y: 233, size: 8.5, align: 'right', maxWidth: 340 },

  // ──────────────────────────────────────────
  // صفة المصرح وتاريخ بداية النشاط
  // تشطيب الصفات غير المعنية وفق الحاشية (3) الرسمية
  // ──────────────────────────────────────────
  { id: 'strike_proprietaire', page: 1, x: 482, y: 221, size: 10, align: 'center', maxWidth: 26 },
  { id: 'strike_locataire', page: 1, x: 445, y: 221, size: 10, align: 'center', maxWidth: 30 },
  { id: 'strike_gerant_libre', page: 1, x: 410, y: 221, size: 10, align: 'center', maxWidth: 30 },
  { id: 'strike_gerant_salarie', page: 1, x: 375, y: 221, size: 10, align: 'center', maxWidth: 30 },

  { id: 'dateDebutActivite', page: 1, x: 180, y: 204, size: 9, align: 'right', maxWidth: 180 },

  // ──────────────────────────────────────────
  // الإقرار والتصديق
  // ──────────────────────────────────────────
  { id: 'faitA', page: 1, x: 170, y: 154, size: 8.5, align: 'right', maxWidth: 65 },
  { id: 'dateDeclaration', page: 1, x: 60, y: 154, size: 8.5, align: 'right', maxWidth: 75 },
];

// NIF: 20 individual boxes at y=755, dividers from x=46 to x=284 (box width ~11.9 pt)
for (let i = 0; i < 20; i++) {
  const boxCenter = 46 + i * 11.9 + 5.95;
  GN8_FIELD_COORDINATES.push({
    id: `nif_${i}`,
    page: 1,
    x: Math.round(boxCenter),
    y: 755,
    size: 8.5,
    align: 'center',
    maxWidth: 10,
  });
}

// NAI: 11 individual boxes at y=739, dividers from x=159 to x=284 (box width ~11.36 pt)
for (let i = 0; i < 11; i++) {
  const boxCenter = 159 + i * 11.36 + 5.68;
  GN8_FIELD_COORDINATES.push({
    id: `nai_${i}`,
    page: 1,
    x: Math.round(boxCenter),
    y: 739,
    size: 8.5,
    align: 'center',
    maxWidth: 10,
  });
}

// NIN: 18 individual boxes at y=531, dividers from x=285 to x=483 (box width ~11.0 pt)
for (let i = 0; i < 18; i++) {
  const boxCenter = 285.3 + i * 11.0 + 5.5;
  GN8_FIELD_COORDINATES.push({
    id: `nin_${i}`,
    page: 1,
    x: Math.round(boxCenter),
    y: 531,
    size: 8.5,
    align: 'center',
    maxWidth: 10,
  });
}

/**
 * Coordinate mapping for official Algerian Série G N° 08 in French.
 * Template: public/forms/gn8_fr.pdf (2 pages A4: 595.2 x 841.92 pt, bottom-left origin).
 */
export const GN8_FIELD_COORDINATES_FR: FormFieldCoord[] = [
  // En-tête administratif
  { id: 'directionWilaya', page: 1, x: 80, y: 738, size: 9, align: 'left', maxWidth: 95 },
  { id: 'service', page: 1, x: 88, y: 725, size: 9, align: 'left', maxWidth: 95 },

  // Régime fiscal (cases à cocher)
  { id: 'regime_ibs', page: 1, x: 49, y: 682, size: 10, align: 'center', maxWidth: 12 },
  { id: 'regime_irg', page: 1, x: 248, y: 682, size: 10, align: 'center', maxWidth: 12 },
  { id: 'irg_categorie', page: 1, x: 375, y: 671, size: 8.5, align: 'left', maxWidth: 55 },
  { id: 'regime_ifu', page: 1, x: 427, y: 682, size: 10, align: 'center', maxWidth: 12 },

  // Renseignements contribuable
  { id: 'nomRaisonSociale', page: 1, x: 185, y: 547, size: 9, align: 'left', maxWidth: 375 },
  { id: 'formeJuridique', page: 1, x: 135, y: 516, size: 9, align: 'left', maxWidth: 425 },
  { id: 'activitePrincipale', page: 1, x: 130, y: 497, size: 9, align: 'left', maxWidth: 430 },

  // Activités secondaires
  { id: 'activiteSec1', page: 1, x: 38, y: 461, size: 8.5, align: 'left', maxWidth: 520 },
  { id: 'activiteSec1_adr', page: 1, x: 38, y: 445, size: 8.5, align: 'left', maxWidth: 520 },
  { id: 'activiteSec2', page: 1, x: 38, y: 428, size: 8.5, align: 'left', maxWidth: 520 },
  { id: 'activiteSec2_adr', page: 1, x: 38, y: 412, size: 8.5, align: 'left', maxWidth: 520 },
  { id: 'activiteSec3', page: 1, x: 38, y: 394, size: 8.5, align: 'left', maxWidth: 520 },

  // Adresses et coordonnées
  { id: 'adresseSiege_line1', page: 1, x: 38, y: 350, size: 8.5, align: 'left', maxWidth: 520 },
  { id: 'adresseSiege_line2', page: 1, x: 38, y: 335, size: 8.5, align: 'left', maxWidth: 520 },

  { id: 'adresseEtablissementAlgerie_line1', page: 1, x: 38, y: 296, size: 8.5, align: 'left', maxWidth: 520 },
  { id: 'adresseEtablissementAlgerie_line2', page: 1, x: 38, y: 280, size: 8.5, align: 'left', maxWidth: 520 },

  { id: 'adresseResidence_line1', page: 1, x: 38, y: 250, size: 8.5, align: 'left', maxWidth: 520 },
  { id: 'adresseResidence_line2', page: 1, x: 38, y: 234, size: 8.5, align: 'left', maxWidth: 520 },

  { id: 'telephone', page: 1, x: 108, y: 216, size: 8.5, align: 'left', maxWidth: 180 },
  { id: 'email', page: 1, x: 395, y: 216, size: 8.5, align: 'left', maxWidth: 165 },
  { id: 'numeroRc', page: 1, x: 200, y: 201, size: 8.5, align: 'left', maxWidth: 360 },
  { id: 'numeroAgrement', page: 1, x: 405, y: 183, size: 8.5, align: 'left', maxWidth: 155 },

  // Qualité du déclarant (mentions inutiles rayées)
  { id: 'strike_proprietaire', page: 1, x: 185, y: 169, size: 10, align: 'center', maxWidth: 55 },
  { id: 'strike_locataire', page: 1, x: 250, y: 169, size: 10, align: 'center', maxWidth: 45 },
  { id: 'strike_gerant_libre', page: 1, x: 315, y: 169, size: 10, align: 'center', maxWidth: 55 },
  { id: 'strike_gerant_salarie', page: 1, x: 370, y: 169, size: 10, align: 'center', maxWidth: 40 },

  { id: 'dateDebutActivite', page: 1, x: 290, y: 153, size: 9, align: 'left', maxWidth: 260 },

  // Fait à ..., le ...
  { id: 'faitA', page: 1, x: 365, y: 99, size: 8.5, align: 'left', maxWidth: 80 },
  { id: 'dateDeclaration', page: 1, x: 480, y: 99, size: 8.5, align: 'left', maxWidth: 80 },
];

// NIF in FR template: 20 boxes at y=757, from x=356 to 556 (~10pt each)
for (let i = 0; i < 20; i++) {
  const boxCenter = 356 + i * 10.0 + 5.0;
  GN8_FIELD_COORDINATES_FR.push({
    id: `nif_${i}`,
    page: 1,
    x: Math.round(boxCenter),
    y: 757,
    size: 8.5,
    align: 'center',
    maxWidth: 9,
  });
}

// NAI in FR template: 11 boxes at y=739, from x=355 to 460 (~9.5pt each)
for (let i = 0; i < 11; i++) {
  const boxCenter = 355 + i * 9.5 + 4.75;
  GN8_FIELD_COORDINATES_FR.push({
    id: `nai_${i}`,
    page: 1,
    x: Math.round(boxCenter),
    y: 739,
    size: 8.5,
    align: 'center',
    maxWidth: 9,
  });
}

// NIN in FR template: 18 boxes at y=528, from x=220 to 455 (~13pt each)
for (let i = 0; i < 18; i++) {
  const boxCenter = 220 + i * 13.0 + 6.5;
  GN8_FIELD_COORDINATES_FR.push({
    id: `nin_${i}`,
    page: 1,
    x: Math.round(boxCenter),
    y: 528,
    size: 8.5,
    align: 'center',
    maxWidth: 11,
  });
}

/**
 * Splits text into 2 lines if it exceeds maxLength, cutting at spaces.
 */
function splitTwoLines(text: string, maxLength: number): [string, string] {
  if (!text) return ['', ''];
  if (text.length <= maxLength) return [text, ''];

  const spaceIndex = text.lastIndexOf(' ', maxLength);
  if (spaceIndex > 0) {
    return [text.slice(0, spaceIndex).trim(), text.slice(spaceIndex).trim()];
  }
  return [text.slice(0, maxLength).trim(), text.slice(maxLength).trim()];
}

/**
 * Maps GN8 form state into key-value pairs consumed by fillOfficialPdf.
 */
export function mapGN8ToFieldValues(
  data: GN8FormData,
  lang: 'ar' | 'fr' = 'ar'
): Record<string, string | number | boolean> {
  
  const cleanWilaya = data.directionWilaya
    .replace(/^(مديرية الضرائب لولاية|DIW de)\s*/iu, '')
    .trim();

  const values: Record<string, string | number | boolean> = {
    // Header
    directionWilaya: cleanWilaya,
    service: data.service.trim(),

    // Tax regime checkboxes
    regime_ibs: data.regime === 'ibs' ? 'X' : '',
    regime_irg: data.regime === 'irg' ? 'X' : '',
    irg_categorie: data.regime === 'irg' ? (data.irgCategorie || '').trim() : '',
    regime_ifu: data.regime === 'ifu' ? 'X' : '',

    // Taxpayer identity
    nomRaisonSociale: data.nomRaisonSociale.trim(),
    formeJuridique: data.formeJuridique.trim(),
    activitePrincipale: data.activitePrincipale.trim(),

    // Secondary activities
    activiteSec1: data.activiteSec1.trim(),
    activiteSec1_adr: data.activiteSec1_adr.trim(),
    activiteSec2: data.activiteSec2.trim(),
    activiteSec2_adr: data.activiteSec2_adr.trim(),
    activiteSec3: data.activiteSec3.trim(),

    // Contacts
    telephone: data.telephone.trim(),
    email: data.email.trim(),
    numeroRc: data.numeroRc.trim(),
    numeroAgrement: data.numeroAgrement.trim(),

    // Start date
    dateDebutActivite: data.dateDebutActivite.trim(),

    // Signature
    faitA: data.faitA.trim(),
    dateDeclaration: (data.dateDeclaration || '').trim(),
  };

  // Addresses split
  const [siege1, siege2] = splitTwoLines(data.adresseSiege, 55);
  values.adresseSiege_line1 = siege1;
  values.adresseSiege_line2 = siege2;

  const [etab1, etab2] = splitTwoLines(data.adresseEtablissementAlgerie, 50);
  values.adresseEtablissementAlgerie_line1 = etab1;
  values.adresseEtablissementAlgerie_line2 = etab2;

  const [res1, res2] = splitTwoLines(data.adresseResidence, 45);
  values.adresseResidence_line1 = res1;
  values.adresseResidence_line2 = res2;

  // Strikethrough of unselected declarant capacities per Footnote (3):
  // "شطب المعلومات غير الضرورية" / "Rayer les mentions inutiles"
  const strikeText = '-------';
  values.strike_proprietaire = data.qualiteDeclarant !== 'proprietaire' ? strikeText : '';
  values.strike_locataire = data.qualiteDeclarant !== 'locataire' ? strikeText : '';
  values.strike_gerant_libre = data.qualiteDeclarant !== 'gerant_libre' ? strikeText : '';
  values.strike_gerant_salarie = data.qualiteDeclarant !== 'gerant_salarie' ? strikeText : '';

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

  return values;
}
