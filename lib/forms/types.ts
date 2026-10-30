export type FormLocale = 'ar' | 'fr';

export type FormCategory = 'impots' | 'foncier' | 'commercial' | 'autre';

export interface FormLocalizedText {
  ar: string;
  fr: string;
}

export interface FormFieldCoord {
  id: string;
  page: 1 | 2 | number;
  x: number; // pt from left
  y: number; // pt from bottom
  size?: number; // font size, default ~10
  color?: { r: number; g: number; b: number };
  align?: 'left' | 'right' | 'center';
  maxWidth?: number;
  format?: 'text' | 'currency' | 'date' | 'integer' | 'percent';
}

export interface FormalFormDefinition {
  slug: string;
  templatePath: string; // e.g. '/forms/gn17.pdf'
  title: FormLocalizedText;
  shortDescription: FormLocalizedText;
  officialNumber: string; // e.g. 'سلسلة ج رقم 17 / Série G N° 17'
  legalRef: FormLocalizedText;
  category: FormCategory;
  pages: number;
  enabled: boolean;
  badge?: FormLocalizedText;
}

export interface FillPdfOptions {
  templateUrl: string;
  fields: FormFieldCoord[];
  values: Record<string, string | number | boolean | undefined | null>;
  fontUrl?: string;
  debug?: boolean;
}
