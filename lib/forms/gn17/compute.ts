export interface GN17ComputeInput {
  salePrice: number; // أ: سعر التنازل
  saleExpenses: number; // ب: مصاريف ورسوم التنازل المؤداة من المتنازل
  otherExpenses?: number; // ج: مصاريف أخرى مثبتة قانوناً
  acquisitionPrice: number; // د: سعر أو قيمة التملك الأصلية
  acquisitionExpenses: number; // هـ: مصاريف التملك والصيانة
  acquisitionPriceUnknown?: boolean; // 40% of sale price when the original value cannot be determined
  acquisitionDate?: string; // تاريخ التملك (YYYY-MM-DD)
  saleDate?: string; // تاريخ التنازل (YYYY-MM-DD)
  detentionYears?: number; // عدد سنوات الحيازة (يدوياً أو محسوبة)
  isSolePrimaryResidence?: boolean; // تخفيض 50% لسكن جماعي يشكل الملكية الوحيدة / سكن رئيسي
}

export interface GN17ComputeResult {
  salePrice: number; // أ
  saleExpenses: number; // ب (المبلغ الفعلي المثبت)
  otherExpenses: number; // ج (المبلغ الفعلي المثبت)
  deductibleExpensesTotal: number; // مجموع الخصومات المسموح بها بعد تطبيق سقف 30%
  deductibleExpensesCap: number; // 30% من قيمة الاقتناء
  netSalePrice: number; // (أ - ب - ج) الأساس الصافي للتنازل
  acquisitionPrice: number; // د (القيمة الفعلية أو 40% جزافياً)
  acquisitionExpenses: number; // هـ بعد تطبيق سقف الخصم
  totalAcquisitionCost: number; // د
  grossPlusValue: number; // و = صافي سعر التنازل بعد الخصومات - د
  yearsHeld: number; // عدد سنوات الحيازة
  abattementRate: number; // نسبة التخفيض للـمدة (0% إلى 50%)
  abattementAmount: number; // ز = و × نسبة التخفيض
  netImposablePlusValue: number; // ح = و - ز
  taxRate: number; // 15%
  grossTax: number; // ط = ح × 15%
  isSolePrimaryResidence: boolean;
  residenceAbattementRate: number; // 50% or 0%
  residenceAbattementAmount: number; // ي = ط × 50%
  netTaxDue: number; // ك = ط - ي
}

/**
 * Calculates number of full years between acquisition and sale dates.
 */
export function calculateDetentionYears(acquisitionDate?: string, saleDate?: string): number {
  if (!acquisitionDate) return 0;
  const acq = new Date(acquisitionDate);
  const sale = saleDate ? new Date(saleDate) : new Date();
  if (isNaN(acq.getTime()) || isNaN(sale.getTime())) return 0;

  let years = sale.getFullYear() - acq.getFullYear();
  const m = sale.getMonth() - acq.getMonth();
  if (m < 0 || (m === 0 && sale.getDate() < acq.getDate())) {
    years--;
  }
  return Math.max(0, years);
}

/**
 * Computes official Algerian Capital Gain Tax (IRG Plus-Value Immobilière - G N° 17).
 * Rule: 5% per year starting from 3rd year of possession, capped at 50%.
 * Base Tax: 15%.
 * Special reduction: 50% on the sole primary residence in an individual or collective building.
 */
export function computeGN17(input: GN17ComputeInput): GN17ComputeResult {
  const salePrice = Math.max(0, Number(input.salePrice) || 0);
  const saleExpenses = Math.max(0, Number(input.saleExpenses) || 0);
  const requestedOtherExpenses = Math.max(0, Number(input.otherExpenses) || 0);
  const requestedAcquisitionExpenses = Math.max(0, Number(input.acquisitionExpenses) || 0);
  const acquisitionPriceUnknown = Boolean(input.acquisitionPriceUnknown);
  const acquisitionPrice = acquisitionPriceUnknown
    ? Math.round(salePrice * 0.40)
    : Math.max(0, Number(input.acquisitionPrice) || 0);

  // The DGI caps the combined deductible amount at 30% of acquisition value.
  // Keep real itemized expenses for the PDF, but use only the capped total
  // when calculating the taxable gain. The 40% forfait excludes extra costs.
  const requestedTotal = saleExpenses + requestedOtherExpenses + requestedAcquisitionExpenses;
  const deductibleExpensesCap = acquisitionPriceUnknown ? 0 : Math.round(acquisitionPrice * 0.30);
  const deductibleExpensesTotal = acquisitionPriceUnknown
    ? 0
    : Math.min(requestedTotal, deductibleExpensesCap);
  const netSalePrice = Math.max(0, salePrice - deductibleExpensesTotal);
  const totalAcquisitionCost = acquisitionPrice;
  const rawPlusValue = netSalePrice - totalAcquisitionCost;
  const grossPlusValue = Math.max(0, rawPlusValue);

  // Years of possession
  let yearsHeld = input.detentionYears !== undefined ? Math.max(0, input.detentionYears) : 0;
  if (!yearsHeld && input.acquisitionDate) {
    yearsHeld = calculateDetentionYears(input.acquisitionDate, input.saleDate);
  }

  // Taux d'abattement pour durée de détention:
  // "5% par an au-delà de la 2ème année (à partir de la 3ème année), dans la limite de 50%"
  // < 3 years: 0%
  // 3 years: 5%, 4 yrs: 10% ... 12+ yrs: 50%
  let abattementRate = 0;
  if (yearsHeld >= 3) {
    const eligibleYears = yearsHeld - 2; // e.g. 3 years -> 1 year of reduction = 5%
    abattementRate = Math.min(50, eligibleYears * 5);
  }

  // Montant abattement durée (ز)
  const abattementAmount = Math.round((grossPlusValue * abattementRate) / 100);

  // Plus-value nette imposable (ح)
  const netImposablePlusValue = Math.max(0, grossPlusValue - abattementAmount);

  // Taux légal 15%
  const taxRate = 15;
  const grossTax = Math.round((netImposablePlusValue * taxRate) / 100);

  // Abattement 50% pour logement collectif constituant l'unique propriété
  const isSolePrimaryResidence = Boolean(input.isSolePrimaryResidence);
  const residenceAbattementRate = isSolePrimaryResidence ? 50 : 0;
  const residenceAbattementAmount = isSolePrimaryResidence ? Math.round(grossTax * 0.5) : 0;

  // Montant net dû (ك)
  const netTaxDue = Math.max(0, grossTax - residenceAbattementAmount);

  return {
    salePrice,
    saleExpenses: acquisitionPriceUnknown ? 0 : saleExpenses,
    otherExpenses: acquisitionPriceUnknown ? 0 : requestedOtherExpenses,
    deductibleExpensesTotal,
    deductibleExpensesCap,
    netSalePrice,
    acquisitionPrice,
    acquisitionExpenses: acquisitionPriceUnknown ? 0 : requestedAcquisitionExpenses,
    totalAcquisitionCost,
    grossPlusValue,
    yearsHeld,
    abattementRate,
    abattementAmount,
    netImposablePlusValue,
    taxRate,
    grossTax,
    isSolePrimaryResidence,
    residenceAbattementRate,
    residenceAbattementAmount,
    netTaxDue,
  };
}
