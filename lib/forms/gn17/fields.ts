import { FormFieldCoord } from '../types';
import { GN17FormData } from './schema';
import { GN17ComputeResult } from './compute';
import { digitsOnly } from '../normalizeDigits';

/**
 * Coordinate mapping for official Algerian Série G N° 17 (2 pages A4).
 * Calibrated against public/forms/gn17.pdf.
 */
export const GN17_FIELD_COORDINATES: FormFieldCoord[] = [
  // الترويسة — فراغ «لولاية» وفراغ «لـ» في القباضة
  { id: 'wilaya', page: 1, x: 310, y: 738, size: 9.5, align: 'right', maxWidth: 160 },
  { id: 'recette', page: 1, x: 280, y: 724, size: 9.5, align: 'right', maxWidth: 180 },

  // القسم I — المتنازل
  { id: 'cedantNomPrenom', page: 1, x: 45, y: 530, size: 9, align: 'right', maxWidth: 455 },
  { id: 'cedantAdresse', page: 1, x: 45, y: 516, size: 9, align: 'right', maxWidth: 465 },
  { id: 'cedantCommune', page: 1, x: 370, y: 499, size: 8.5, align: 'right', maxWidth: 120 },
  { id: 'cedantWilaya', page: 1, x: 220, y: 499, size: 8.5, align: 'right', maxWidth: 110 },
  { id: 'cedantCodePostal', page: 1, x: 80, y: 499, size: 8.5, align: 'center', maxWidth: 60 },
  { id: 'cedantNin', page: 1, x: 45, y: 460, size: 9, align: 'right', maxWidth: 430 },

  // Acquéreurs (nom et adresse uniquement sur l'imprimé officiel)
  { id: 'buyer1NomPrenom', page: 1, x: 190, y: 419, size: 9, align: 'right', maxWidth: 300 },
  { id: 'buyer1Adresse', page: 1, x: 45, y: 405, size: 9, align: 'right', maxWidth: 470 },
  { id: 'buyer2NomPrenom', page: 1, x: 190, y: 380, size: 9, align: 'right', maxWidth: 300 },
  { id: 'buyer2Adresse', page: 1, x: 45, y: 366, size: 9, align: 'right', maxWidth: 470 },
  { id: 'buyer3NomPrenom', page: 1, x: 190, y: 341, size: 9, align: 'right', maxWidth: 300 },
  { id: 'buyer3Adresse', page: 1, x: 45, y: 327, size: 9, align: 'right', maxWidth: 470 },

  // Désignation du bien
  { id: 'natureBien', page: 1, x: 350, y: 246, size: 9, align: 'right', maxWidth: 120 },
  { id: 'consistanceGlobale', page: 1, x: 40, y: 246, size: 9, align: 'right', maxWidth: 165 },
  { id: 'natureDroitsReels', page: 1, x: 45, y: 231, size: 9, align: 'right', maxWidth: 420 },
  { id: 'situationBien', page: 1, x: 45, y: 216, size: 9, align: 'right', maxWidth: 420 },
  { id: 'commune', page: 1, x: 370, y: 198, size: 9, align: 'right', maxWidth: 90 },
  { id: 'wilayaBien', page: 1, x: 220, y: 198, size: 9, align: 'right', maxWidth: 90 },
  { id: 'codePostalBien', page: 1, x: 80, y: 198, size: 8.5, align: 'center', maxWidth: 60 },
  { id: 'articleImposition', page: 1, x: 45, y: 185, size: 9, align: 'right', maxWidth: 420 },
  { id: 'natureOperation', page: 1, x: 45, y: 174, size: 9, align: 'right', maxWidth: 440 },
  { id: 'originePropriete', page: 1, x: 45, y: 163, size: 9, align: 'right', maxWidth: 440 },
  { id: 'dateActeOrigine', page: 1, x: 330, y: 151, size: 9, align: 'right', maxWidth: 100 },
  { id: 'dateActeCession', page: 1, x: 330, y: 139, size: 9, align: 'right', maxWidth: 100 },
  { id: 'natureActeCession', page: 1, x: 45, y: 127, size: 9, align: 'right', maxWidth: 430 },

  // الصفحة 2 — جدول تصفية فائض القيمة (القسم III)
  { id: 'montantCession', page: 2, x: 40, y: 774, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'fraisCession', page: 2, x: 40, y: 760, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'fraisAutres', page: 2, x: 40, y: 747, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'valeurOrigine', page: 2, x: 40, y: 734, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'fraisAcquisition', page: 2, x: 40, y: 716, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'grossPlusValue', page: 2, x: 40, y: 697, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'abattementRate', page: 2, x: 148, y: 684, size: 9, align: 'left', maxWidth: 28 },
  { id: 'abattementAmount', page: 2, x: 40, y: 671, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'netImposablePlusValue', page: 2, x: 40, y: 658, size: 9, format: 'currency', align: 'left', maxWidth: 170 },

  // الجدول IV — تصفية الضريبة
  { id: 'baseImposable', page: 2, x: 40, y: 557, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'grossTax', page: 2, x: 40, y: 530, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'residenceAbattementAmount', page: 2, x: 40, y: 517, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'netTaxDue', page: 2, x: 40, y: 504, size: 9, format: 'currency', align: 'left', maxWidth: 170 },

  // المصادقة
  { id: 'faitA', page: 2, x: 445, y: 411, size: 9, align: 'right', maxWidth: 60 },
  { id: 'dateDeclaration', page: 2, x: 365, y: 411, size: 9, align: 'right', maxWidth: 65 },
];

// 15 individual NIF digit boxes for Arabic GN17 (Page 1: x=287.8 to 467.0, y=473, width=11.95pt)
for (let i = 0; i < 15; i++) {
  const boxCenter = 287.8 + i * 11.95 + 5.97;
  GN17_FIELD_COORDINATES.push({
    id: `nif_${i}`,
    page: 1,
    x: Math.round(boxCenter - 5),
    y: 473,
    size: 8.5,
    align: 'center',
    maxWidth: 10,
  });
}

/**
 * Coordinate mapping for official French template Série G N° 17 (2 pages A4).
 * Calibrated against public/forms/gn17_fr.pdf.
 */
export const GN17_FIELD_COORDINATES_FR: FormFieldCoord[] = [
  // En-tête (Header)
  { id: 'wilaya', page: 1, x: 100, y: 740, size: 9.5, align: 'left', maxWidth: 180 },
  { id: 'recette', page: 1, x: 110, y: 727, size: 9.5, align: 'left', maxWidth: 170 },

  // I - Renseignements concernant le cédant
  { id: 'cedantNomPrenom', page: 1, x: 108, y: 506, size: 9, align: 'left', maxWidth: 460 },
  { id: 'cedantAdresse', page: 1, x: 90, y: 492, size: 9, align: 'left', maxWidth: 475 },
  { id: 'cedantCommune', page: 1, x: 90, y: 475, size: 8.5, align: 'left', maxWidth: 100 },
  { id: 'cedantWilaya', page: 1, x: 245, y: 475, size: 8.5, align: 'left', maxWidth: 100 },
  { id: 'cedantCodePostal', page: 1, x: 450, y: 475, size: 8.5, align: 'left', maxWidth: 60 },
  { id: 'cedantNin', page: 1, x: 230, y: 440, size: 9, align: 'left', maxWidth: 335 },

  // Acquéreurs (nom et adresse uniquement)
  { id: 'buyer1NomPrenom', page: 1, x: 200, y: 403, size: 9, align: 'left', maxWidth: 360 },
  { id: 'buyer1Adresse', page: 1, x: 90, y: 389, size: 9, align: 'left', maxWidth: 475 },
  { id: 'buyer2NomPrenom', page: 1, x: 200, y: 361, size: 9, align: 'left', maxWidth: 360 },
  { id: 'buyer2Adresse', page: 1, x: 90, y: 348, size: 9, align: 'left', maxWidth: 475 },
  { id: 'buyer3NomPrenom', page: 1, x: 200, y: 319, size: 9, align: 'left', maxWidth: 360 },
  { id: 'buyer3Adresse', page: 1, x: 90, y: 306, size: 9, align: 'left', maxWidth: 475 },

  // Désignation du bien
  { id: 'natureBien', page: 1, x: 152, y: 236, size: 9, align: 'left', maxWidth: 95 },
  { id: 'consistanceGlobale', page: 1, x: 448, y: 236, size: 8.5, align: 'left', maxWidth: 120 },
  { id: 'natureDroitsReels', page: 1, x: 185, y: 222, size: 9, align: 'left', maxWidth: 380 },
  { id: 'situationBien', page: 1, x: 215, y: 208, size: 9, align: 'left', maxWidth: 350 },
  { id: 'commune', page: 1, x: 90, y: 191, size: 9, align: 'left', maxWidth: 100 },
  { id: 'wilayaBien', page: 1, x: 245, y: 191, size: 9, align: 'left', maxWidth: 110 },
  { id: 'codePostalBien', page: 1, x: 450, y: 191, size: 8.5, align: 'left', maxWidth: 60 },
  { id: 'articleImposition', page: 1, x: 235, y: 178, size: 8.5, align: 'left', maxWidth: 330 },
  { id: 'natureOperation', page: 1, x: 195, y: 166, size: 9, align: 'left', maxWidth: 370 },
  { id: 'originePropriete', page: 1, x: 165, y: 154, size: 9, align: 'left', maxWidth: 400 },
  { id: 'dateActeOrigine', page: 1, x: 195, y: 142, size: 9, align: 'left', maxWidth: 370 },
  { id: 'dateActeCession', page: 1, x: 185, y: 130, size: 9, align: 'left', maxWidth: 380 },
  { id: 'natureActeCession', page: 1, x: 140, y: 119, size: 9, align: 'left', maxWidth: 425 },

  // III - Éléments à déclarer
  { id: 'montantCession', page: 2, x: 375, y: 776, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'fraisCession', page: 2, x: 375, y: 763, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'fraisAutres', page: 2, x: 375, y: 750, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'valeurOrigine', page: 2, x: 375, y: 737, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'fraisAcquisition', page: 2, x: 375, y: 713, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'grossPlusValue', page: 2, x: 375, y: 690, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'abattementRate', page: 2, x: 458, y: 677, size: 9, align: 'left', maxWidth: 28 },
  { id: 'abattementAmount', page: 2, x: 375, y: 664, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'netImposablePlusValue', page: 2, x: 375, y: 651, size: 9, format: 'currency', align: 'left', maxWidth: 195 },

  // IV - Montant de l'impôt à payer
  { id: 'baseImposable', page: 2, x: 338, y: 544, size: 9, format: 'currency', align: 'left', maxWidth: 220 },
  { id: 'check15', page: 2, x: 418, y: 531, size: 9, align: 'center' },
  { id: 'checkExonere', page: 2, x: 552, y: 531, size: 9, align: 'center' },
  { id: 'grossTax', page: 2, x: 338, y: 518, size: 9, format: 'currency', align: 'left', maxWidth: 220 },
  { id: 'residenceAbattementAmount', page: 2, x: 338, y: 504, size: 9, format: 'currency', align: 'left', maxWidth: 220 },
  { id: 'netTaxDue', page: 2, x: 338, y: 491, size: 9, format: 'currency', align: 'left', maxWidth: 220 },

  // Déclaration et signature
  { id: 'faitA', page: 2, x: 84, y: 400, size: 9, align: 'left', maxWidth: 70 },
  { id: 'dateDeclaration', page: 2, x: 180, y: 400, size: 9, align: 'left', maxWidth: 80 },
];

// 15 individual NIF digit boxes for French GN17 (Page 1: x=240.0 to 426.0, y=453, width=12.4pt)
for (let i = 0; i < 15; i++) {
  const boxCenter = 240.0 + i * 12.4 + 6.2;
  GN17_FIELD_COORDINATES_FR.push({
    id: `nif_${i}`,
    page: 1,
    x: Math.round(boxCenter - 5),
    y: 453,
    size: 8.5,
    align: 'center',
    maxWidth: 10,
  });
}

/**
 * Transforms form state + calculation results into a flat key-value dictionary
 * matching GN17_FIELD_COORDINATES or GN17_FIELD_COORDINATES_FR.
 */
export function mapGN17ToFieldValues(
  data: GN17FormData,
  calc: GN17ComputeResult,
  lang: 'ar' | 'fr' = 'ar'
): Record<string, string | number | boolean> {
  const isFr = lang === 'fr';
  const values: Record<string, string | number | boolean> = {
    wilaya: data.wilaya,
    recette: data.recette.trim(),

    cedantNomPrenom: data.cedantNomPrenom,
    cedantAdresse: data.cedantAdresse,
    cedantCommune: data.cedantCommune,
    cedantWilaya: data.cedantWilaya,
    cedantCodePostal: digitsOnly(data.cedantCodePostal),
    cedantNin: digitsOnly(data.cedantNin),

    buyer1NomPrenom: data.buyer1NomPrenom,
    buyer1Adresse: data.buyer1Adresse,
    buyer2NomPrenom: data.buyer2NomPrenom,
    buyer2Adresse: data.buyer2Adresse,
    buyer3NomPrenom: data.buyer3NomPrenom,
    buyer3Adresse: data.buyer3Adresse,

    natureBien: data.natureBien,
    consistanceGlobale: data.consistanceGlobale,
    natureDroitsReels: data.natureDroitsReels,
    situationBien: data.situationBien,
    commune: data.commune,
    wilayaBien: data.wilayaBien,
    codePostalBien: digitsOnly(data.codePostalBien),
    articleImposition: data.articleImposition,
    natureOperation: data.natureOperation === 'onerous'
      ? (isFr ? 'Cession à titre onéreux' : 'تنازل بمقابل مادي')
      : data.natureOperation === 'donation'
        ? (isFr ? 'Donation' : 'هبة')
        : '',
    originePropriete: data.originePropriete,
    dateActeOrigine: data.dateActeOrigine,
    dateActeCession: data.dateActeCession,
    natureActeCession: data.natureActeCession,

    montantCession: calc.salePrice,
    fraisCession: calc.saleExpenses,
    fraisAutres: calc.otherExpenses,
    valeurOrigine: calc.acquisitionPrice,
    fraisAcquisition: calc.acquisitionExpenses,
    grossPlusValue: calc.grossPlusValue,
    abattementRate: calc.abattementRate,
    abattementAmount: calc.abattementAmount,
    netImposablePlusValue: calc.netImposablePlusValue,

    baseImposable: calc.netImposablePlusValue,
    // The Arabic official template prints the fixed 15% rate in the form itself.
    // Only the French template has a selectable "15% / Exonéré" checkbox row.
    ...(isFr ? {
      check15: calc.taxRate === 15,
      checkExonere: calc.taxRate === 0,
    } : {}),
    grossTax: calc.grossTax,
    residenceAbattementAmount: calc.isSolePrimaryResidence ? calc.residenceAbattementAmount : 0,
    netTaxDue: calc.netTaxDue,

    faitA: data.faitA,
    dateDeclaration: data.dateDeclaration,
  };

  const cleanNif = digitsOnly(data.cedantNif || '');
  for (let i = 0; i < 15; i++) {
    values[`nif_${i}`] = cleanNif[i] || '';
  }
  return values;
}
