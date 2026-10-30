import { FormFieldCoord } from '../types';
import { GN17FormData } from './schema';
import { GN17ComputeResult } from './compute';

/**
 * Coordinate mapping for official Algerian Série G N° 17 (2 pages A4).
 * Calibrated against public/forms/gn17.pdf.
 */
export const GN17_FIELD_COORDINATES: FormFieldCoord[] = [
  // ================= PAGE 1 =================
  // Routing headers (مديرية الضرائب / المفتشية / القباضة)
  { id: 'wilaya', page: 1, x: 280, y: 700, size: 9, align: 'right', maxWidth: 220 },
  { id: 'inspection', page: 1, x: 280, y: 678, size: 9, align: 'right', maxWidth: 220 },
  { id: 'recette', page: 1, x: 280, y: 656, size: 9, align: 'right', maxWidth: 220 },

  // I. Cédant (المتنازل)
  { id: 'cedantNomPrenom', page: 1, x: 120, y: 552, size: 10, align: 'right', maxWidth: 350 },
  { id: 'cedantDateLieu', page: 1, x: 120, y: 536, size: 9, align: 'right', maxWidth: 350 },
  { id: 'cedantFiliation', page: 1, x: 120, y: 520, size: 9, align: 'right', maxWidth: 350 },
  { id: 'cedantAdresse', page: 1, x: 120, y: 504, size: 9, align: 'right', maxWidth: 350 },
  { id: 'cedantNif', page: 1, x: 120, y: 488, size: 9, align: 'right', maxWidth: 350 },
  { id: 'cedantProfession', page: 1, x: 120, y: 472, size: 9, align: 'right', maxWidth: 350 },

  // Cessionnaires (المتنازل لهم)
  // Buyer 1
  { id: 'buyer1NomPrenom', page: 1, x: 120, y: 418, size: 9, align: 'right', maxWidth: 350 },
  { id: 'buyer1DateLieu', page: 1, x: 120, y: 402, size: 9, align: 'right', maxWidth: 350 },
  { id: 'buyer1Adresse', page: 1, x: 120, y: 386, size: 9, align: 'right', maxWidth: 350 },
  { id: 'buyer1Nif', page: 1, x: 120, y: 370, size: 9, align: 'right', maxWidth: 350 },

  // Buyer 2 (if present)
  { id: 'buyer2NomPrenom', page: 1, x: 120, y: 330, size: 9, align: 'right', maxWidth: 350 },
  { id: 'buyer2DateLieu', page: 1, x: 120, y: 314, size: 9, align: 'right', maxWidth: 350 },
  { id: 'buyer2Adresse', page: 1, x: 120, y: 298, size: 9, align: 'right', maxWidth: 350 },

  // II. Désignation du bien (تعيين العقار)
  { id: 'natureBien', page: 1, x: 120, y: 258, size: 9, align: 'right', maxWidth: 320 },
  { id: 'situationBien', page: 1, x: 120, y: 242, size: 9, align: 'right', maxWidth: 360 },
  { id: 'cadastreRef', page: 1, x: 120, y: 226, size: 9, align: 'right', maxWidth: 220 },
  { id: 'commune', page: 1, x: 380, y: 226, size: 9, align: 'right', maxWidth: 120 },
  { id: 'originePropriete', page: 1, x: 120, y: 200, size: 9, align: 'right', maxWidth: 380 },
  { id: 'dateActeOrigine', page: 1, x: 320, y: 184, size: 9, align: 'right', maxWidth: 140 },
  { id: 'refPublicationOrigine', page: 1, x: 120, y: 184, size: 9, align: 'right', maxWidth: 160 },
  { id: 'dateAchevement', page: 1, x: 120, y: 168, size: 9, align: 'right', maxWidth: 340 },
  { id: 'natureActeCession', page: 1, x: 320, y: 152, size: 9, align: 'right', maxWidth: 160 },
  { id: 'dateActeCession', page: 1, x: 120, y: 152, size: 9, align: 'right', maxWidth: 160 },

  // ================= PAGE 2 =================
  // III. Montants et plus-value (المبالغ وفائض القيمة)
  { id: 'montantCession', page: 2, x: 80, y: 773, size: 9, format: 'currency', align: 'left' },
  { id: 'fraisCession', page: 2, x: 80, y: 760, size: 9, format: 'currency', align: 'left' },
  { id: 'netSalePrice', page: 2, x: 80, y: 747, size: 9, format: 'currency', align: 'left' },
  { id: 'valeurOrigine', page: 2, x: 80, y: 734, size: 9, format: 'currency', align: 'left' },
  { id: 'fraisAcquisition', page: 2, x: 80, y: 721, size: 9, format: 'currency', align: 'left' },
  { id: 'grossPlusValue', page: 2, x: 80, y: 697, size: 9, format: 'currency', align: 'left' },
  { id: 'abattementRate', page: 2, x: 130, y: 684, size: 9, format: 'percent', align: 'left' },
  { id: 'abattementAmount', page: 2, x: 80, y: 671, size: 9, format: 'currency', align: 'left' },
  { id: 'netImposablePlusValue', page: 2, x: 80, y: 658, size: 9, format: 'currency', align: 'left' },

  // IV. Liquidation de l'impôt (تصفية الضريبة)
  { id: 'baseImposable', page: 2, x: 80, y: 557, size: 9, format: 'currency', align: 'left' },
  { id: 'taxRate', page: 2, x: 130, y: 544, size: 9, format: 'percent', align: 'left' },
  { id: 'grossTax', page: 2, x: 80, y: 530, size: 9, format: 'currency', align: 'left' },
  { id: 'residenceAbattementAmount', page: 2, x: 80, y: 517, size: 9, format: 'currency', align: 'left' },
  { id: 'netTaxDue', page: 2, x: 80, y: 504, size: 10, format: 'currency', align: 'left' },

  // Certification / Fait à
  { id: 'faitA', page: 2, x: 380, y: 411, size: 9, align: 'right', maxWidth: 120 },
  { id: 'dateDeclaration', page: 2, x: 220, y: 411, size: 9, align: 'right', maxWidth: 120 },
];

/**
 * Transforms form state + calculation results into a flat key-value dictionary
 * matching GN17_FIELD_COORDINATES.
 */
export function mapGN17ToFieldValues(
  data: GN17FormData,
  calc: GN17ComputeResult
): Record<string, string | number | boolean> {
  const cedantDateLieu = [
    data.cedantDateNaissance ? `في ${data.cedantDateNaissance}` : '',
    data.cedantLieuNaissance ? `بـ ${data.cedantLieuNaissance}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return {
    wilaya: data.wilaya,
    inspection: data.inspection,
    recette: data.recette,

    // Cédant
    cedantNomPrenom: data.cedantNomPrenom,
    cedantDateLieu,
    cedantFiliation: data.cedantFiliation || '',
    cedantAdresse: data.cedantAdresse,
    cedantNif: data.cedantNif || '',
    cedantProfession: data.cedantProfession || '',

    // Buyer 1
    buyer1NomPrenom: data.buyer1NomPrenom,
    buyer1DateLieu: data.buyer1DateLieu || '',
    buyer1Adresse: data.buyer1Adresse || '',
    buyer1Nif: data.buyer1Nif || '',

    // Buyer 2
    buyer2NomPrenom: data.buyer2NomPrenom || '',
    buyer2DateLieu: data.buyer2DateLieu || '',
    buyer2Adresse: data.buyer2Adresse || '',

    // Property
    natureBien: data.natureBien,
    situationBien: data.situationBien,
    cadastreRef: data.cadastreRef || '',
    commune: data.commune || 'وهران',
    originePropriete: data.originePropriete || '',
    dateActeOrigine: data.dateActeOrigine || '',
    refPublicationOrigine: data.refPublicationOrigine || '',
    dateAchevement: data.dateAchevement || '',
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
