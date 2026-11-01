import { FormFieldCoord } from '../types';
import { GN8FormData } from './schema';

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
  { id: 'service', page: 1, x: 380, y: 726, size: 9, align: 'right', maxWidth: 140 },

  // ──────────────────────────────────────────
  // النظام الجبائي (خانات اختيار مربعة رسمية)
  // ──────────────────────────────────────────
  { id: 'regime_ibs', page: 1, x: 389, y: 676, size: 10, align: 'center', maxWidth: 12 },
  { id: 'regime_irg', page: 1, x: 231, y: 676, size: 10, align: 'center', maxWidth: 12 },
  { id: 'irg_categorie', page: 1, x: 265, y: 670, size: 8.5, align: 'right', maxWidth: 75 },
  { id: 'regime_ifu', page: 1, x: 44, y: 675, size: 10, align: 'center', maxWidth: 12 },

  // ──────────────────────────────────────────
  // معلومات المكلف بالضريبة
  // ──────────────────────────────────────────
  { id: 'nomRaisonSociale', page: 1, x: 40, y: 551, size: 9, align: 'right', maxWidth: 410 },
  { id: 'formeJuridique', page: 1, x: 40, y: 515, size: 9, align: 'right', maxWidth: 460 },
  { id: 'activitePrincipale', page: 1, x: 40, y: 497, size: 9, align: 'right', maxWidth: 455 },

  // النشاطات الثانوية وعناوينها
  { id: 'activiteSec1', page: 1, x: 40, y: 463, size: 8.5, align: 'right', maxWidth: 520 },
  { id: 'activiteSec1_adr', page: 1, x: 40, y: 447, size: 8.5, align: 'right', maxWidth: 520 },
  { id: 'activiteSec2', page: 1, x: 40, y: 431, size: 8.5, align: 'right', maxWidth: 520 },
  { id: 'activiteSec2_adr', page: 1, x: 40, y: 415, size: 8.5, align: 'right', maxWidth: 520 },
  { id: 'activiteSec3', page: 1, x: 40, y: 399, size: 8.5, align: 'right', maxWidth: 520 },

  // ──────────────────────────────────────────
  // العناوين والاتصال
  // ──────────────────────────────────────────
  { id: 'adresseSiege_line1', page: 1, x: 40, y: 365, size: 8.5, align: 'right', maxWidth: 365 },
  { id: 'adresseSiege_line2', page: 1, x: 40, y: 355, size: 8.5, align: 'right', maxWidth: 520 },

  { id: 'adresseEtablissementAlgerie_line1', page: 1, x: 40, y: 331, size: 8.5, align: 'right', maxWidth: 310 },
  { id: 'adresseEtablissementAlgerie_line2', page: 1, x: 40, y: 321, size: 8.5, align: 'right', maxWidth: 520 },

  { id: 'adresseResidence_line1', page: 1, x: 40, y: 287, size: 8.5, align: 'right', maxWidth: 260 },
  { id: 'adresseResidence_line2', page: 1, x: 40, y: 277, size: 8.5, align: 'right', maxWidth: 520 },

  { id: 'telephone', page: 1, x: 340, y: 265, size: 8.5, align: 'right', maxWidth: 170 },
  { id: 'email', page: 1, x: 40, y: 265, size: 8.5, align: 'left', maxWidth: 210 },
  { id: 'numeroRc', page: 1, x: 40, y: 251, size: 8.5, align: 'right', maxWidth: 460 },
  { id: 'numeroAgrement', page: 1, x: 40, y: 232, size: 8.5, align: 'right', maxWidth: 350 },

  // ──────────────────────────────────────────
  // صفة المصرح وتاريخ بداية النشاط
  // تشطيب الصفات غير المعنية وفق الحاشية (3) الرسمية
  // ──────────────────────────────────────────
  { id: 'strike_proprietaire', page: 1, x: 486, y: 220, size: 10, align: 'center', maxWidth: 32 },
  { id: 'strike_locataire', page: 1, x: 450, y: 220, size: 10, align: 'center', maxWidth: 36 },
  { id: 'strike_gerant_libre', page: 1, x: 409, y: 220, size: 10, align: 'center', maxWidth: 40 },
  { id: 'strike_gerant_salarie', page: 1, x: 366, y: 220, size: 10, align: 'center', maxWidth: 44 },

  { id: 'dateDebutActivite', page: 1, x: 180, y: 204, size: 9, align: 'right', maxWidth: 180 },

  // ──────────────────────────────────────────
  // الإقرار والتصديق
  // ──────────────────────────────────────────
  { id: 'faitA', page: 1, x: 165, y: 154, size: 8.5, align: 'right', maxWidth: 65 },
  { id: 'dateDeclaration', page: 1, x: 55, y: 154, size: 8.5, align: 'right', maxWidth: 80 },
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

// NIN: 18 individual boxes at y=531, dividers from x=285 to x=492 (box width ~11.5 pt)
for (let i = 0; i < 18; i++) {
  const boxCenter = 285 + i * 11.5 + 5.75;
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
export function mapGN8ToFieldValues(data: GN8FormData): Record<string, string | number | boolean> {
  const values: Record<string, string | number | boolean> = {
    // Header
    directionWilaya: data.directionWilaya.replace(/^مديرية الضرائب لولاية\s*/u, '').trim(),
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
    faitA: (data.faitA || 'وهران').trim(),
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
  // "شطب المعلومات غير الضرورية"
  const strikeText = '───────';
  values.strike_proprietaire = data.qualiteDeclarant !== 'proprietaire' ? strikeText : '';
  values.strike_locataire = data.qualiteDeclarant !== 'locataire' ? strikeText : '';
  values.strike_gerant_libre = data.qualiteDeclarant !== 'gerant_libre' ? strikeText : '';
  values.strike_gerant_salarie = data.qualiteDeclarant !== 'gerant_salarie' ? strikeText : '';

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

  return values;
}
