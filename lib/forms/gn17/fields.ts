import { FormFieldCoord } from '../types';
import { GN17FormData } from './schema';
import { GN17ComputeResult } from './compute';

/**
 * Coordinate mapping for official Algerian Série G N° 17 (2 pages A4).
 * Calibrated against public/forms/gn17.pdf.
 */
export const GN17_FIELD_COORDINATES: FormFieldCoord[] = [
  // الترويسة — فراغ «لولاية» وفراغ «لـ» في القباضة
  { id: 'wilaya', page: 1, x: 300, y: 738, size: 10, align: 'right', maxWidth: 140 },
  { id: 'recette', page: 1, x: 280, y: 724, size: 10, align: 'right', maxWidth: 160 },

  // القسم I — المتنازل
  { id: 'cedantNomPrenom', page: 1, x: 45, y: 530, size: 9, align: 'right', maxWidth: 465 },
  { id: 'cedantAdresse', page: 1, x: 45, y: 516, size: 9, align: 'right', maxWidth: 465 },
  { id: 'cedantNif', page: 1, x: 160, y: 473, size: 9, align: 'left', maxWidth: 180 },

  // القسم I — المشتري 1
  { id: 'buyer1NomPrenom', page: 1, x: 45, y: 419, size: 9, align: 'right', maxWidth: 465 },
  { id: 'buyer1Adresse', page: 1, x: 45, y: 405, size: 9, align: 'right', maxWidth: 465 },
  { id: 'buyer1Nif', page: 1, x: 45, y: 393, size: 9, align: 'left', maxWidth: 140 },

  // القسم I — المشتري 2 (إن وجد)
  { id: 'buyer2NomPrenom', page: 1, x: 45, y: 380, size: 9, align: 'right', maxWidth: 465 },
  { id: 'buyer2Adresse', page: 1, x: 45, y: 367, size: 9, align: 'right', maxWidth: 465 },

  // القسم II — تعيين العقار
  { id: 'natureBien', page: 1, x: 45, y: 246, size: 9, align: 'right', maxWidth: 420 },
  { id: 'cadastreRef', page: 1, x: 40, y: 231, size: 9, align: 'left', maxWidth: 240 },
  { id: 'situationBien', page: 1, x: 45, y: 216, size: 9, align: 'right', maxWidth: 420 },
  { id: 'commune', page: 1, x: 300, y: 199, size: 9, align: 'right', maxWidth: 110 },
  { id: 'originePropriete', page: 1, x: 45, y: 163, size: 9, align: 'right', maxWidth: 420 },
  { id: 'dateActeOrigine', page: 1, x: 360, y: 151, size: 9, align: 'left', maxWidth: 80 },
  { id: 'refPublicationOrigine', page: 1, x: 40, y: 151, size: 9, align: 'left', maxWidth: 200 },
  { id: 'dateActeCession', page: 1, x: 40, y: 140, size: 9, align: 'left', maxWidth: 80 },
  { id: 'natureActeCession', page: 1, x: 140, y: 128, size: 9, align: 'right', maxWidth: 270 },

  // الصفحة 2 — جدول تصفية فائض القيمة
  { id: 'montantCession', page: 2, x: 40, y: 774, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'fraisCession', page: 2, x: 40, y: 760, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'netSalePrice', page: 2, x: 40, y: 747, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'valeurOrigine', page: 2, x: 40, y: 734, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'fraisAcquisition', page: 2, x: 40, y: 716, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'grossPlusValue', page: 2, x: 40, y: 697, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'abattementRate', page: 2, x: 40, y: 684, size: 9, format: 'percent', align: 'left', maxWidth: 50 },
  { id: 'abattementAmount', page: 2, x: 40, y: 671, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'netImposablePlusValue', page: 2, x: 40, y: 658, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'baseImposable', page: 2, x: 40, y: 557, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'grossTax', page: 2, x: 40, y: 530, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'residenceAbattementAmount', page: 2, x: 40, y: 518, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'netTaxDue', page: 2, x: 40, y: 504, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  { id: 'faitA', page: 2, x: 445, y: 411, size: 9, align: 'right', maxWidth: 55 },
  { id: 'dateDeclaration', page: 2, x: 360, y: 411, size: 9, align: 'left', maxWidth: 65 },
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
