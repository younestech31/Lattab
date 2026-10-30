import { FormFieldCoord } from '../types';
import { GN17FormData } from './schema';
import { GN17ComputeResult } from './compute';

/**
 * Coordinate mapping for official Algerian Série G N° 17 (2 pages A4).
 * Calibrated against public/forms/gn17.pdf.
 */
export const GN17_FIELD_COORDINATES: FormFieldCoord[] = [
  // فراغ «لولاية» وفراغ «لـ» في القباضة. ليس على «وزارة المالية»
  { id: 'wilaya', page: 1, x: 410, y: 736, size: 10, align: 'right', maxWidth: 80 },
  { id: 'recette', page: 1, x: 395, y: 722, size: 10, align: 'right', maxWidth: 95 },

  // القسم I — المتنازل
  { id: 'cedantNomPrenom', page: 1, x: 45, y: 529, size: 10, align: 'right', maxWidth: 465 },
  { id: 'cedantAdresse', page: 1, x: 45, y: 515, size: 10, align: 'right', maxWidth: 465 },
  { id: 'cedantNif', page: 1, x: 160, y: 471, size: 9, align: 'left', maxWidth: 180 },

  // القسم I — مشترٍ: اسم ثم عنوان
  { id: 'buyer1NomPrenom', page: 1, x: 45, y: 418, size: 10, align: 'right', maxWidth: 465 },
  { id: 'buyer1Adresse', page: 1, x: 45, y: 404, size: 10, align: 'right', maxWidth: 465 },
  { id: 'buyer1Nif', page: 1, x: 45, y: 392, size: 9, align: 'left', maxWidth: 140 },
  { id: 'buyer2NomPrenom', page: 1, x: 45, y: 379, size: 10, align: 'right', maxWidth: 465 },
  { id: 'buyer2Adresse', page: 1, x: 45, y: 366, size: 10, align: 'right', maxWidth: 465 },

  // القسم II — داخل الإطار وفوق الملاحظات
  { id: 'natureBien', page: 1, x: 220, y: 245, size: 10, align: 'right', maxWidth: 270 },
  { id: 'cadastreRef', page: 1, x: 40, y: 231, size: 9, align: 'left', maxWidth: 200 },
  { id: 'situationBien', page: 1, x: 45, y: 215, size: 10, align: 'right', maxWidth: 420 },
  { id: 'commune', page: 1, x: 300, y: 197, size: 10, align: 'right', maxWidth: 110 },
  { id: 'originePropriete', page: 1, x: 45, y: 162, size: 10, align: 'right', maxWidth: 420 },
  { id: 'dateActeOrigine', page: 1, x: 40, y: 150, size: 9, align: 'left', maxWidth: 80 },
  { id: 'refPublicationOrigine', page: 1, x: 130, y: 150, size: 9, align: 'left', maxWidth: 150 },
  { id: 'dateActeCession', page: 1, x: 40, y: 139, size: 9, align: 'left', maxWidth: 80 },
  { id: 'natureActeCession', page: 1, x: 140, y: 127, size: 10, align: 'right', maxWidth: 270 },

  // الصفحة 2 — عمود «القيمة ب دج» من اليسار. لا ترسم taxRate (15% مطبوعة)
  { id: 'montantCession', page: 2, x: 40, y: 770, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'fraisCession', page: 2, x: 40, y: 757, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'netSalePrice', page: 2, x: 40, y: 744, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'valeurOrigine', page: 2, x: 40, y: 730, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'fraisAcquisition', page: 2, x: 40, y: 712, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'grossPlusValue', page: 2, x: 40, y: 694, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'abattementRate', page: 2, x: 40, y: 681, size: 9, format: 'percent', align: 'left', maxWidth: 50 },
  { id: 'abattementAmount', page: 2, x: 40, y: 668, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'netImposablePlusValue', page: 2, x: 40, y: 655, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'baseImposable', page: 2, x: 40, y: 553, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'grossTax', page: 2, x: 40, y: 527, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'residenceAbattementAmount', page: 2, x: 40, y: 514, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'netTaxDue', page: 2, x: 40, y: 501, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'faitA', page: 2, x: 455, y: 407, size: 9, align: 'left', maxWidth: 50 },
  { id: 'dateDeclaration', page: 2, x: 355, y: 407, size: 9, align: 'left', maxWidth: 70 },
];

/**
 * Transforms form state + calculation results into a flat key-value dictionary
 * matching GN17_FIELD_COORDINATES.
 */
export function mapGN17ToFieldValues(
  data: GN17FormData,
  calc: GN17ComputeResult
): Record<string, string | number | boolean> {
  return {
    wilaya: data.wilaya,
    inspection: '',
    recette: data.recette.replace(/^قباضة الضرائب\s*/u, '').trim(),

    // Cédant
    cedantNomPrenom: data.cedantNomPrenom,
    cedantDateLieu: '',
    cedantFiliation: '',
    cedantAdresse: data.cedantAdresse,
    cedantNif: data.cedantNif || '',
    cedantProfession: '',

    // Buyer 1
    buyer1NomPrenom: data.buyer1NomPrenom,
    buyer1DateLieu: '',
    buyer1Adresse: data.buyer1Adresse || '',
    buyer1Nif: data.buyer1Nif || '',

    // Buyer 2
    buyer2NomPrenom: data.buyer2NomPrenom || '',
    buyer2DateLieu: '',
    buyer2Adresse: data.buyer2Adresse || '',

    // Property
    natureBien: data.natureBien,
    situationBien: data.situationBien,
    cadastreRef: data.cadastreRef || '',
    commune: data.commune || 'وهران',
    originePropriete: data.originePropriete || '',
    dateActeOrigine: data.dateActeOrigine || '',
    refPublicationOrigine: data.refPublicationOrigine || '',
    dateAchevement: '',
    natureActeCession: data.natureActeCession,
    dateActeCession: data.dateActeCession || '',

    // Financials
    montantCession: calc.salePrice,
    fraisCession: calc.saleExpenses,
    netSalePrice: calc.netSalePrice,
    valeurOrigine: calc.acquisitionPrice,
    fraisAcquisition: calc.acquisitionExpenses,
    grossPlusValue: calc.grossPlusValue,
    abattementRate: calc.abattementRate,
    abattementAmount: calc.abattementAmount,
    netImposablePlusValue: calc.netImposablePlusValue,

    // Tax
    baseImposable: calc.netImposablePlusValue,
    taxRate: calc.taxRate,
    grossTax: calc.grossTax,
    residenceAbattementAmount: calc.residenceAbattementAmount,
    netTaxDue: calc.netTaxDue,

    // Fait à
    faitA: data.faitA,
    dateDeclaration: data.dateDeclaration,
  };
}
