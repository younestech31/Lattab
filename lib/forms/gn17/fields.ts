import { FormFieldCoord } from '../types';
import { GN17FormData } from './schema';
import { digitsOnly } from '../normalizeDigits';
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
  { id: 'cedantNomPrenom', page: 1, x: 45, y: 530, size: 9, align: 'right', maxWidth: 475 },
  { id: 'cedantAdresse', page: 1, x: 45, y: 516, size: 9, align: 'right', maxWidth: 475 },
  { id: 'cedantNin', page: 1, x: 45, y: 460, size: 9, align: 'right', maxWidth: 440 },
  { id: 'cedantNif', page: 1, x: 160, y: 473, size: 9, align: 'left', maxWidth: 120 },

  // القسم I — المشتري 1 (الاسم يبدأ بعد النقطتين دون تداخل، ورقم التعريف الوطني على نفس السطر يساراً)
  { id: 'buyer1NomPrenom', page: 1, x: 190, y: 419, size: 9, align: 'right', maxWidth: 270 },
  { id: 'buyer1Nif', page: 1, x: 45, y: 419, size: 8.5, align: 'left', maxWidth: 140 },
  { id: 'buyer1Adresse', page: 1, x: 45, y: 405, size: 9, align: 'right', maxWidth: 470 },

  // القسم I — المشتري 2 (إن وجد)
  { id: 'buyer2NomPrenom', page: 1, x: 190, y: 380, size: 9, align: 'right', maxWidth: 270 },
  { id: 'buyer2Nif', page: 1, x: 45, y: 380, size: 8.5, align: 'left', maxWidth: 140 },
  { id: 'buyer2Adresse', page: 1, x: 45, y: 367, size: 9, align: 'right', maxWidth: 470 },

  // القسم II — تعيين العقار
  { id: 'natureBien', page: 1, x: 45, y: 246, size: 9, align: 'right', maxWidth: 420 },
  { id: 'cadastreRef', page: 1, x: 40, y: 231, size: 9, align: 'left', maxWidth: 240 },
  { id: 'situationBien', page: 1, x: 45, y: 216, size: 9, align: 'right', maxWidth: 420 },
  { id: 'commune', page: 1, x: 300, y: 199, size: 9, align: 'right', maxWidth: 110 },
  { id: 'originePropriete', page: 1, x: 45, y: 163, size: 9, align: 'right', maxWidth: 420 },
  { id: 'dateActeOrigine', page: 1, x: 360, y: 151, size: 9, align: 'left', maxWidth: 80, format: 'date' },
  { id: 'refPublicationOrigine', page: 1, x: 40, y: 151, size: 9, align: 'left', maxWidth: 200 },
  { id: 'dateActeCession', page: 1, x: 40, y: 140, size: 9, align: 'left', maxWidth: 80, format: 'date' },
  { id: 'natureActeCession', page: 1, x: 140, y: 128, size: 9, align: 'right', maxWidth: 270 },

  // الصفحة 2 — جدول تصفية فائض القيمة (القسم III)
  // أ: سعر التنازل
  { id: 'montantCession', page: 2, x: 40, y: 774, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  // ب: مبلغ الحقوق والرسوم المدفوعة
  { id: 'fraisCession', page: 2, x: 40, y: 760, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  // ج: مصاريف أخرى مثبتة قانوناً (بدلاً من حشر سعر البيع الصافي الخاطئ هنا)
  { id: 'fraisAutres', page: 2, x: 40, y: 747, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  // د: سعر الاقتناء أو قيمة إنشائه
  { id: 'valeurOrigine', page: 2, x: 40, y: 734, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  // هـ: مصاريف الاقتناء والصيانة
  { id: 'fraisAcquisition', page: 2, x: 40, y: 716, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  // و: فائض القيمة الناتج = ((أ - ب - ج) - (د + هـ))
  { id: 'grossPlusValue', page: 2, x: 40, y: 697, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  // نسبة التخفيض (توضع على النقاط .... بعد % المطبوعة)
  { id: 'abattementRate', page: 2, x: 148, y: 684, size: 9, align: 'left', maxWidth: 30 },
  // ز: مبلغ التخفيض = (و × نسبة)
  { id: 'abattementAmount', page: 2, x: 40, y: 671, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  // ح: فائض القيمة الخاضع للضريبة = (و - ز)
  { id: 'netImposablePlusValue', page: 2, x: 40, y: 658, size: 9, format: 'currency', align: 'left', maxWidth: 170 },

  // الجدول IV — تصفية الضريبة
  // فائض القيمة الخاضع للضريبة
  { id: 'baseImposable', page: 2, x: 40, y: 557, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  // ط: مبلغ الضريبة (15%)
  { id: 'grossTax', page: 2, x: 40, y: 530, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  // ي: التخفيض الضريبي 50% الخاص بالسكن الوحيد
  { id: 'residenceAbattementAmount', page: 2, x: 40, y: 518, size: 9, format: 'currency', align: 'left', maxWidth: 170 },
  // ك: المبلغ المستحق (ط - ي)
  { id: 'netTaxDue', page: 2, x: 40, y: 504, size: 9, format: 'currency', align: 'left', maxWidth: 170 },

  // المصادقة
  { id: 'faitA', page: 2, x: 445, y: 411, size: 9, align: 'right', maxWidth: 55 },
  { id: 'dateDeclaration', page: 2, x: 360, y: 411, size: 9, align: 'left', maxWidth: 65 },
];

/**
 * Coordinate mapping for official French template Série G N° 17 (2 pages A4).
 * Calibrated against public/forms/gn17_fr.pdf.
 */
export const GN17_FIELD_COORDINATES_FR: FormFieldCoord[] = [
  // En-tête (Header)
  { id: 'wilaya', page: 1, x: 98, y: 741.0, size: 9.5, align: 'left', maxWidth: 180 },
  { id: 'recette', page: 1, x: 112, y: 727.5, size: 9.5, align: 'left', maxWidth: 170 },

  // I - Renseignements concernant le cédant
  { id: 'cedantNomPrenom', page: 1, x: 108, y: 507.5, size: 9, align: 'left', maxWidth: 460 },
  { id: 'cedantAdresse', page: 1, x: 88, y: 494.0, size: 9, align: 'left', maxWidth: 480 },
  { id: 'cedantNif', page: 1, x: 230, y: 454.0, size: 8.5, align: 'left', maxWidth: 335 },
  { id: 'cedantNin', page: 1, x: 220, y: 441.5, size: 9, align: 'left', maxWidth: 350 },

  // I - Désignation de ou des acquéreur(s)
  { id: 'buyer1NomPrenom', page: 1, x: 200, y: 404.0, size: 9, align: 'left', maxWidth: 240 },
  { id: 'buyer1Nif', page: 1, x: 445, y: 404.0, size: 8.5, align: 'left', maxWidth: 125 },
  { id: 'buyer1Adresse', page: 1, x: 88, y: 390.5, size: 9, align: 'left', maxWidth: 480 },

  { id: 'buyer2NomPrenom', page: 1, x: 200, y: 363.0, size: 9, align: 'left', maxWidth: 240 },
  { id: 'buyer2Nif', page: 1, x: 445, y: 363.0, size: 8.5, align: 'left', maxWidth: 125 },
  { id: 'buyer2Adresse', page: 1, x: 88, y: 349.5, size: 9, align: 'left', maxWidth: 480 },

  // II - Désignation du bien ou des droits réels cédés
  { id: 'natureBien', page: 1, x: 138, y: 237.0, size: 9, align: 'left', maxWidth: 90 },
  { id: 'cadastreRef', page: 1, x: 426, y: 237.0, size: 8.5, align: 'left', maxWidth: 140 },
  { id: 'natureDroitsReels', page: 1, x: 175, y: 223.5, size: 9, align: 'left', maxWidth: 390 },
  { id: 'situationBien', page: 1, x: 200, y: 209.5, size: 9, align: 'left', maxWidth: 365 },
  { id: 'commune', page: 1, x: 90, y: 192.0, size: 9, align: 'left', maxWidth: 105 },
  { id: 'wilayaBien', page: 1, x: 245, y: 192.0, size: 9, align: 'left', maxWidth: 180 },
  { id: 'articleImposition', page: 1, x: 215, y: 179.5, size: 9, align: 'left', maxWidth: 350 },
  { id: 'natureActeCession', page: 1, x: 185, y: 167.5, size: 9, align: 'left', maxWidth: 380 },
  { id: 'originePropriete', page: 1, x: 155, y: 156.0, size: 9, align: 'left', maxWidth: 410 },
  { id: 'dateActeOrigine', page: 1, x: 190, y: 144.0, size: 9, align: 'left', maxWidth: 90, format: 'date' },
  { id: 'refPublicationOrigine', page: 1, x: 290, y: 144.0, size: 8.5, align: 'left', maxWidth: 275 },
  { id: 'dateActeCession', page: 1, x: 170, y: 132.5, size: 9, align: 'left', maxWidth: 120, format: 'date' },
  { id: 'natureActe', page: 1, x: 125, y: 121.0, size: 9, align: 'left', maxWidth: 440 },

  // III - Éléments à déclarer
  { id: 'montantCession', page: 2, x: 375, y: 778.0, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'fraisCession', page: 2, x: 375, y: 765.0, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'fraisAutres', page: 2, x: 375, y: 752.0, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'valeurOrigine', page: 2, x: 375, y: 739.0, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'fraisAcquisition', page: 2, x: 375, y: 715.0, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'grossPlusValue', page: 2, x: 375, y: 691.5, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'abattementRate', page: 2, x: 458, y: 678.5, size: 9, align: 'left', maxWidth: 28 },
  { id: 'abattementAmount', page: 2, x: 375, y: 665.5, size: 9, format: 'currency', align: 'left', maxWidth: 195 },
  { id: 'netImposablePlusValue', page: 2, x: 375, y: 652.5, size: 9, format: 'currency', align: 'left', maxWidth: 195 },

  // IV - Montant de l'impôt à payer
  { id: 'baseImposable', page: 2, x: 338, y: 546.0, size: 9, format: 'currency', align: 'left', maxWidth: 220 },
  { id: 'check15', page: 2, x: 418, y: 529.5, size: 9, align: 'center' },
  { id: 'checkExonere', page: 2, x: 552, y: 529.5, size: 9, align: 'center' },
  { id: 'grossTax', page: 2, x: 338, y: 519.5, size: 9, format: 'currency', align: 'left', maxWidth: 220 },
  { id: 'residenceAbattementAmount', page: 2, x: 338, y: 506.0, size: 9, format: 'currency', align: 'left', maxWidth: 220 },
  { id: 'netTaxDue', page: 2, x: 338, y: 492.5, size: 9, format: 'currency', align: 'left', maxWidth: 220 },

  // Déclaration et signature
  { id: 'faitA', page: 2, x: 84, y: 401.5, size: 9, align: 'left', maxWidth: 70 },
  { id: 'dateDeclaration', page: 2, x: 180, y: 401.5, size: 9, align: 'left', maxWidth: 80 },
];

/**
 * Transforms form state + calculation results into a flat key-value dictionary
 * matching GN17_FIELD_COORDINATES or GN17_FIELD_COORDINATES_FR.
 */
export function mapGN17ToFieldValues(
  data: GN17FormData,
  calc: GN17ComputeResult,
  lang: 'ar' | 'fr' = 'ar'
): Record<string, string | number | boolean> {
  

  return {
    wilaya: data.wilaya,
    wilayaBien: '',
    inspection: '',
    recette: data.recette.replace(/^(قباضة الضرائب|Recette des Impôts)\s*/ui, '').trim(),

    // Cédant
    cedantNomPrenom: data.cedantNomPrenom,
    cedantDateLieu: '',
    cedantFiliation: '',
    cedantAdresse: data.cedantAdresse,
    cedantNin: digitsOnly(data.cedantNin || ''),
    cedantNif: digitsOnly(data.cedantNif || ''),
    cedantProfession: '',

    // Buyer 1
    buyer1NomPrenom: data.buyer1NomPrenom,
    buyer1DateLieu: '',
    buyer1Adresse: data.buyer1Adresse || '',
    buyer1Nif: digitsOnly(data.buyer1Nif || ''),

    // Buyer 2
    buyer2NomPrenom: data.buyer2NomPrenom || '',
    buyer2DateLieu: '',
    buyer2Adresse: data.buyer2Adresse || '',
    buyer2Nif: digitsOnly(data.buyer2Nif || ''),

    // Property
    natureBien: data.natureBien,
    situationBien: data.situationBien,
    cadastreRef: data.cadastreRef || '',
    // Never infer a commune, right type, or tax article from unrelated fields.
    commune: data.commune || '',
    natureDroitsReels: '',
    articleImposition: '',
    originePropriete: data.originePropriete || '',
    dateActeOrigine: data.dateActeOrigine || '',
    refPublicationOrigine: data.refPublicationOrigine || '',
    dateAchevement: '',
    natureActeCession: data.natureActeCession,
    dateActeCession: data.dateActeCession || '',
    natureActe: data.natureActeCession,

    // Financials (Table III)
    montantCession: calc.salePrice,
    fraisCession: calc.saleExpenses,
    fraisAutres: calc.otherExpenses > 0 ? calc.otherExpenses : 0,
    valeurOrigine: calc.acquisitionPrice,
    fraisAcquisition: calc.acquisitionExpenses,
    grossPlusValue: calc.grossPlusValue,
    abattementRate: calc.abattementRate,
    abattementAmount: calc.abattementAmount,
    netImposablePlusValue: calc.netImposablePlusValue,

    // Tax Liquidation (Table IV)
    baseImposable: calc.netImposablePlusValue,
    taxRate: calc.taxRate,
    check15: calc.taxRate === 15,
    checkExonere: calc.taxRate === 0,
    grossTax: calc.grossTax,
    residenceAbattementAmount: calc.isSolePrimaryResidence ? calc.residenceAbattementAmount : 0,
    netTaxDue: calc.netTaxDue,

    // Fait à
    faitA: data.faitA,
    dateDeclaration: data.dateDeclaration,
  };
}
