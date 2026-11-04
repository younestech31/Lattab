import { GN51FormData } from './schema';

export interface GN51ComputeResult {
  isOverThreshold: boolean;
  loyerHabitation: number;
  taxHabitation: number;
  loyerCommercial: number;
  taxCommercial: number;
  loyerNonBati: number;
  taxNonBati: number;
  loyerAgricole: number;
  taxAgricole: number;
  totalGrossLoyer: number;
  totalTaxDue: number;
  taxExcedentaire: number;
  annualGrossLoyer: number;
  thresholdMismatch: boolean;
}

export function computeGN51(data: GN51FormData): GN51ComputeResult {
  const isOver = Boolean(data.isOverThreshold);

  const loyerHabitation = Math.max(0, Number(data.loyerHabitation) || 0);
  const taxHabitation = Math.round(loyerHabitation * 0.07);

  const loyerCommercial = Math.max(0, Number(data.loyerCommercial) || 0);
  const taxCommercial = Math.round(loyerCommercial * 0.15);

  const loyerNonBati = Math.max(0, Number(data.loyerNonBatiNonAgricole) || 0);
  const taxNonBati = Math.round(loyerNonBati * 0.15);

  const loyerAgricole = Math.max(0, Number(data.loyerAgricole) || 0);
  const taxAgricole = Math.round(loyerAgricole * 0.10);

  const loyerExcedentaire = Math.max(0, Number(data.loyerExcedentaire) || 0);
  const taxExcedentaire = Math.round(loyerExcedentaire * 0.07);

  const totalGrossUnder = loyerHabitation + loyerCommercial + loyerNonBati + loyerAgricole;
  const totalTaxUnder = taxHabitation + taxCommercial + taxNonBati + taxAgricole;
  const annualGrossLoyer = isOver ? loyerExcedentaire : totalGrossUnder;
  const thresholdMismatch = isOver
    ? loyerExcedentaire <= 1_800_000
    : totalGrossUnder > 1_800_000;

  const totalGrossLoyer = annualGrossLoyer;
  const totalTaxDue = isOver ? taxExcedentaire : totalTaxUnder;

  return {
    isOverThreshold: isOver,
    loyerHabitation,
    taxHabitation,
    loyerCommercial,
    taxCommercial,
    loyerNonBati,
    taxNonBati,
    loyerAgricole,
    taxAgricole,
    totalGrossLoyer,
    totalTaxDue,
    taxExcedentaire,
    annualGrossLoyer,
    thresholdMismatch,
  };
}
