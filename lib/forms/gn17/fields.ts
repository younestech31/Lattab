import { FormFieldCoord } from '../types';
import { GN17FormData } from './schema';
import { GN17ComputeResult } from './compute';

/**
 * Coordinate mapping for official Algerian Série G N° 17 (2 pages A4).
 * Calibrated against public/forms/gn17.pdf.
 */
export const GN17_FIELD_COORDINATES: FormFieldCoord[] = [
  // الترويسة — فراغ «لولاية» وفراغ «قباضة الضرائب لـ» فقط
  { id: 'wilaya', page: 1, x: 400, y: 761, size: 8, align: 'right', maxWidth: 70 },
  { id: 'recette', page: 1, x: 390, y: 747, size: 8, align: 'right', maxWidth: 100 },

  // I المتنازل — سطر رسمي واحد لكل قيمة
  { id: 'cedantNomPrenom', page: 1, x: 50, y: 552, size: 9, align: 'right', maxWidth: 450 },
  { id: 'cedantAdresse', page: 1, x: 50, y: 538, size: 8, align: 'right', maxWidth: 450 },
  { id: 'cedantNif', page: 1, x: 48, y: 499, size: 9, align: 'left', maxWidth: 200 },

  // I المشتري: اسم ثم عنوان، بلا سطر تاريخ
  { id: 'buyer1NomPrenom', page: 1, x: 50, y: 441, size: 8, align: 'right', maxWidth: 450 },
  { id: 'buyer1Adresse', page: 1, x: 50, y: 428, size: 8, align: 'right', maxWidth: 450 },
  { id: 'buyer1Nif', page: 1, x: 50, y: 414, size: 8, align: 'left', maxWidth: 160 },
  { id: 'buyer2NomPrenom', page: 1, x: 50, y: 402, size: 8, align: 'right', maxWidth: 450 },
  { id: 'buyer2Adresse', page: 1, x: 50, y: 389, size: 8, align: 'right', maxWidth: 450 },

  // II داخل الإطار، فوق الملاحظات التي تبدأ تحت y≈115
  { id: 'natureBien', page: 1, x: 50, y: 268, size: 8, align: 'right', maxWidth: 430 },
  { id: 'cadastreRef', page: 1, x: 40, y: 254, size: 8, align: 'left', maxWidth: 220 },
  { id: 'situationBien', page: 1, x: 50, y: 239, size: 8, align: 'right', maxWidth: 430 },
  { id: 'commune', page: 1, x: 300, y: 225, size: 8, align: 'right', maxWidth: 120 },
  { id: 'originePropriete', page: 1, x: 50, y: 186, size: 8, align: 'right', maxWidth: 430 },
  { id: 'dateActeOrigine', page: 1, x: 40, y: 173, size: 8, align: 'left', maxWidth: 90 },
  { id: 'refPublicationOrigine', page: 1, x: 140, y: 173, size: 8, align: 'left', maxWidth: 160 },
  { id: 'dateActeCession', page: 1, x: 40, y: 161, size: 8, align: 'left', maxWidth: 90 },
  { id: 'natureActeCession', page: 1, x: 150, y: 151, size: 8, align: 'right', maxWidth: 280 },

  // الصفحة 2 — عمود القيمة يسار الصفحة (النقاط من x≈30 إلى 260)
  { id: 'montantCession', page: 2, x: 40, y: 794, size: 8, format: 'currency', align: 'left', maxWidth: 180 },
  { id: 'fraisCession', page: 2, x: 40, y: 781, size: 8, format: 'currency', align: 'left', maxWidth: 180 },
  { id: 'netSalePrice', page: 2, x: 40, y: 768, size: 8, format: 'currency', align: 'left', maxWidth: 180 },
  { id: 'valeurOrigine', page: 2, x: 40, y: 755, size: 8, format: 'currency', align: 'left', maxWidth: 180 },
  { id: 'fraisAcquisition', page: 2, x: 40, y: 737, size: 8, format: 'currency', align: 'left', maxWidth: 180 },
  { id: 'grossPlusValue', page: 2, x: 40, y: 718, size: 8, format: 'currency', align: 'left', maxWidth: 180 },
  { id: 'abattementRate', page: 2, x: 40, y: 705, size: 8, format: 'percent', align: 'left', maxWidth: 60 },
  { id: 'abattementAmount', page: 2, x: 40, y: 692, size: 8, format: 'currency', align: 'left', maxWidth: 180 },
  { id: 'netImposablePlusValue', page: 2, x: 40, y: 679, size: 8, format: 'currency', align: 'left', maxWidth: 180 },

  { id: 'baseImposable', page: 2, x: 40, y: 578, size: 8, format: 'currency', align: 'left', maxWidth: 180 },
  { id: 'grossTax', page: 2, x: 40, y: 552, size: 8, format: 'currency', align: 'left', maxWidth: 180 },
  { id: 'residenceAbattementAmount', page: 2, x: 40, y: 538, size: 8, format: 'currency', align: 'left', maxWidth: 180 },
  { id: 'netTaxDue', page: 2, x: 40, y: 525, size: 9, format: 'currency', align: 'left', maxWidth: 180 },

  // «بـ …… في ……» سطر الإمضاء. لا ترسم taxRate: النسبة 15% مطبوعة سلفًا
  { id: 'faitA', page: 2, x: 455, y: 431, size: 8, align: 'left', maxWidth: 55 },
  { id: 'dateDeclaration', page: 2, x: 355, y: 431, size: 8, align: 'left', maxWidth: 70 },
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
    recette: data.recette,

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
