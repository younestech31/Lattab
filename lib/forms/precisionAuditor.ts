import { PDFDocument, rgb, PDFFont, StandardFonts } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { FormFieldCoord, FormLocale } from './types';
import { shapeArabicForPdf, hasArabic } from './textShaper';
import { formatPdfDate } from './fillOfficialPdf';

export const PT_PER_MM = 72 / 25.4; // 2.8346456692913384
export const MM_PER_PT = 25.4 / 72; // 0.3527777777777778

export function ptToMm(pt: number): number {
  return Number(((pt * 25.4) / 72).toFixed(2));
}

export function mmToPt(mm: number): number {
  return Number(((mm * 72) / 25.4).toFixed(2));
}

export interface MetricBoundingBox {
  xMm: number;
  yBottomMm: number;
  yTopMm: number;
  widthMm: number;
  heightMm: number;
  marginRightMm: number;
  marginTopMm: number;
}

export interface DigitGridAudit {
  prefix: string;
  count: number;
  page: number;
  startMm: number;
  stepPitchMm: number;
  cellWidthMm: number;
  expectedStepPitchMm: number;
  maxCenterDeviationMm: number;
  isAligned: boolean;
  notes: string;
}

export interface AuditedField {
  id: string;
  page: number;
  xPt: number;
  yPt: number;
  maxWidthPt: number;
  sizePt: number;
  align: 'left' | 'right' | 'center';
  format?: 'text' | 'currency' | 'date' | 'integer' | 'percent';
  metric: MetricBoundingBox;
  isDigitBox: boolean;
  digitPrefix?: string;
  digitIndex?: number;
  isCheckbox: boolean;
  withinPageBounds: boolean;
  marginClearanceOk: boolean;
  collisions: string[];
}

export interface FormAuditReport {
  slug: string;
  title: string;
  lang: FormLocale;
  templateUrl: string;
  pageCount: number;
  pageDimensions: Array<{ widthPt: number; heightPt: number; widthMm: number; heightMm: number }>;
  totalFields: number;
  fieldsByPage: Record<number, number>;
  auditedFields: AuditedField[];
  digitGrids: DigitGridAudit[];
  collisionsCount: number;
  boundaryErrorsCount: number;
  stressTestPassed: boolean;
  stressTestErrors: string[];
  status: 'PERFECT' | 'WARNING' | 'ERROR';
  timestamp: string;
}

/**
 * Categorizes a field ID to detect its functional role on the official form.
 */
export function categorizeField(id: string): {
  isDigitBox: boolean;
  digitPrefix?: string;
  digitIndex?: number;
  isCheckbox: boolean;
  category: 'header' | 'parties' | 'property' | 'tax_table' | 'digit_box' | 'checkbox' | 'signature' | 'other';
} {
  const digitMatch = id.match(/^([a-zA-Z0-9_]+)_(\d+)$/);
  const isDigit = Boolean(digitMatch && ['nif', 'nin', 'nai', 'rc', 'article'].some((p) => digitMatch[1].toLowerCase().includes(p)));

  const isCheck =
    id.startsWith('check') ||
    id.startsWith('regime_') ||
    id.startsWith('decl_') ||
    id.startsWith('qualite_') ||
    id.startsWith('nature_') ||
    id.startsWith('dest_') ||
    id.startsWith('indiv_res_') ||
    id.startsWith('indiv_loue') ||
    id.startsWith('indiv_non_loue') ||
    id.startsWith('app_res_') ||
    id.startsWith('app_loue') ||
    id.startsWith('app_non_loue') ||
    id.startsWith('strike_') ||
    id.startsWith('pay_');

  let category: 'header' | 'parties' | 'property' | 'tax_table' | 'digit_box' | 'checkbox' | 'signature' | 'other' = 'other';
  if (isDigit) {
    category = 'digit_box';
  } else if (isCheck) {
    category = 'checkbox';
  } else if (['wilaya', 'recette', 'directionWilaya', 'service', 'commune', 'inspection', 'structure'].includes(id)) {
    category = 'header';
  } else if (['cedant', 'buyer', 'bailleur', 'preneur', 'nomPrenom', 'nomRaisonSociale', 'nomSociete'].some((k) => id.includes(k))) {
    category = 'parties';
  } else if (['bien', 'prop', 'natureBien', 'consistance', 'immeuble', 'terrain', 'coll_', 'indiv_', 'app_', 'pro_'].some((k) => id.includes(k))) {
    category = 'property';
  } else if (['montant', 'frais', 'tax', 'base', 'gross', 'loyer', 'abattement', 'valeur'].some((k) => id.includes(k))) {
    category = 'tax_table';
  } else if (['faitA', 'dateDeclaration'].some((k) => id.startsWith(k))) {
    category = 'signature';
  }

  return {
    isDigitBox: isDigit,
    digitPrefix: digitMatch ? digitMatch[1] : undefined,
    digitIndex: digitMatch ? Number(digitMatch[2]) : undefined,
    isCheckbox: isCheck,
    category,
  };
}

/**
 * Calculates metric bounding box and page boundary clearances for a single field.
 */
export function auditFormField(
  field: FormFieldCoord,
  pageDims: { widthPt: number; heightPt: number }
): AuditedField {
  const cat = categorizeField(field.id);
  const maxWidthPt = field.maxWidth ?? (cat.isCheckbox ? 14 : 100);
  const sizePt = field.size ?? 10;
  const heightPt = sizePt * 1.25;

  const xMm = ptToMm(field.x);
  const yBottomMm = ptToMm(field.y);
  const yTopMm = ptToMm(pageDims.heightPt - field.y);
  const widthMm = ptToMm(maxWidthPt);
  const heightMm = ptToMm(heightPt);

  const marginRightMm = ptToMm(pageDims.widthPt - (field.x + maxWidthPt));
  const marginTopMm = yTopMm - heightMm;

  const withinPageBounds =
    field.x >= 0 &&
    field.y >= 0 &&
    field.x + maxWidthPt <= pageDims.widthPt + 1.5 && // 1.5pt sub-pixel allowance
    field.y + heightPt <= pageDims.heightPt + 1.5;

  const marginClearanceOk = xMm >= 2.0 && marginRightMm >= 2.0 && yBottomMm >= 2.0 && yTopMm >= 2.0;

  return {
    id: field.id,
    page: field.page,
    xPt: field.x,
    yPt: field.y,
    maxWidthPt,
    sizePt,
    align: field.align ?? 'left',
    format: field.format,
    metric: {
      xMm,
      yBottomMm,
      yTopMm,
      widthMm,
      heightMm,
      marginRightMm,
      marginTopMm,
    },
    isDigitBox: cat.isDigitBox,
    digitPrefix: cat.digitPrefix,
    digitIndex: cat.digitIndex,
    isCheckbox: cat.isCheckbox,
    withinPageBounds,
    marginClearanceOk,
    collisions: [],
  };
}

/**
 * Analyzes digit grids to verify uniform pitch and millimeter center deviation.
 */
export function auditDigitGrids(fields: FormFieldCoord[]): DigitGridAudit[] {
  const groups = new Map<string, Array<{ id: string; index: number; field: FormFieldCoord }>>();

  for (const field of fields) {
    const cat = categorizeField(field.id);
    if (cat.isDigitBox && cat.digitPrefix && cat.digitIndex !== undefined) {
      const key = `${cat.digitPrefix}_p${field.page}`;
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push({ id: field.id, index: cat.digitIndex, field });
    }
  }

  const results: DigitGridAudit[] = [];

  for (const [key, items] of groups.entries()) {
    items.sort((a, b) => a.index - b.index);
    if (items.length < 2) continue;

    const count = items.length;
    const page = items[0].field.page;
    const prefix = key.split('_p')[0];

    const first = items[0].field;
    const last = items[count - 1].field;
    const empiricalStepPt = (last.x - first.x) / (count - 1);
    const empiricalStepMm = ptToMm(empiricalStepPt);
    const cellWidthPt = first.maxWidth ?? 10;
    const cellWidthMm = ptToMm(cellWidthPt);
    const startMm = ptToMm(first.x);

    let maxCenterDevMm = 0;
    for (let i = 0; i < count; i++) {
      const expectedCenterPt = first.x + i * empiricalStepPt + cellWidthPt / 2;
      const actualCenterPt = items[i].field.x + (items[i].field.maxWidth ?? cellWidthPt) / 2;
      const devMm = ptToMm(Math.abs(actualCenterPt - expectedCenterPt));
      if (devMm > maxCenterDevMm) {
        maxCenterDevMm = devMm;
      }
    }

    const isAligned = maxCenterDevMm <= 0.35; // within 0.35 mm (approx 1 pt)

    results.push({
      prefix,
      count,
      page,
      startMm,
      stepPitchMm: empiricalStepMm,
      cellWidthMm,
      expectedStepPitchMm: empiricalStepMm,
      maxCenterDeviationMm: maxCenterDevMm,
      isAligned,
      notes: isAligned
        ? `شبكة خانات منتظمة بدقة ${maxCenterDevMm.toFixed(2)} مم`
        : `انحراف في تباعد الخانات بمقدار ${maxCenterDevMm.toFixed(2)} مم`,
    });
  }

  return results;
}

/**
 * Checks for collisions between bounding boxes on the same page.
 * Whitelists known multi-line stacked sections (like address lines).
 */
export function detectCollisions(auditedFields: AuditedField[]): void {
  const byPage = new Map<number, AuditedField[]>();
  for (const f of auditedFields) {
    if (!byPage.has(f.page)) byPage.set(f.page, []);
    byPage.get(f.page)!.push(f);
  }

  for (const [, fieldsOnPage] of byPage.entries()) {
    for (let i = 0; i < fieldsOnPage.length; i++) {
      for (let j = i + 1; j < fieldsOnPage.length; j++) {
        const a = fieldsOnPage[i];
        const b = fieldsOnPage[j];

        // Skip digit boxes with each other (they sit side by side)
        if (a.isDigitBox && b.isDigitBox && a.digitPrefix === b.digitPrefix) continue;

        // Bounding box collision test (with 1pt margin of safety)
        const aRight = a.xPt + a.maxWidthPt;
        const aTop = a.yPt + a.sizePt * 1.25;
        const bRight = b.xPt + b.maxWidthPt;
        const bTop = b.yPt + b.sizePt * 1.25;

        const xOverlap = a.xPt < bRight - 2 && aRight > b.xPt + 2;
        const yOverlap = a.yPt < bTop - 1 && aTop > b.yPt + 1;

        if (xOverlap && yOverlap) {
          a.collisions.push(b.id);
          b.collisions.push(a.id);
        }
      }
    }
  }
}

/**
 * Generates sample realistic stress data for any of the 4 forms in Arabic or French.
 */
export function getSampleStressData(slug: string, lang: FormLocale): Record<string, string | number | boolean> {
  const isAr = lang === 'ar';
  if (slug === 'gn17') {
    return isAr
      ? {
          wilaya: 'وهران',
          recette: 'العقيد لطفي',
          cedantNomPrenom: 'بن أحمد عبد القادر بن محمد بن عبد الله الشريف الحسني',
          cedantAdresse: 'حي 557 مسكن عمارة د24 رقم 768 حي العقيد لطفي بلدية بئر الجير ولاية وهران',
          cedantCommune: 'بئر الجير',
          cedantWilaya: 'وهران',
          cedantCodePostal: '31011',
          cedantNin: '198531010012345678',
          buyer1NomPrenom: 'منصوري فاطمة الزهراء بنت العربي',
          buyer1Adresse: 'حي الصنوبر فيلا رقم 12 بلدية بئر الجير ولاية وهران',
          buyer2NomPrenom: 'منصوري محمد الأمين بن العربي',
          buyer2Adresse: 'شارع فلسطين رقم 45 حي الأمير عبد القادر وهران',
          buyer3NomPrenom: 'منصوري أمين',
          buyer3Adresse: 'بلدية وهران',
          natureBien: 'شقة ذات طابع سكني',
          consistanceGlobale: 'مساحة إجمالية 125 م²، مبنية 110 م²، ثلاثة طوابق',
          natureDroitsReels: 'ملكية تامة',
          situationBien: 'حي العقيد لطفي، عمارة D24، الشقة 768',
          commune: 'وهران',
          wilayaBien: 'وهران',
          codePostalBien: '31000',
          articleImposition: '31/0456/078',
          natureOperation: 'Cession à titre onéreux',
          originePropriete: 'اقتناء بموجب عقد بيع موثق',
          dateActeOrigine: '15/04/2018',
          dateActeCession: '02/11/2026',
          natureActeCession: 'عقد بيع رسمي توثيقي',
          montantCession: 18500000,
          fraisCession: 250000,
          fraisAutres: 150000,
          valeurOrigine: 12000000,
          fraisAcquisition: 600000,
          grossPlusValue: 5500000,
          abattementRate: '15%',
          abattementAmount: 825000,
          netImposablePlusValue: 4675000,
          baseImposable: 4675000,
          grossTax: 701250,
          residenceAbattementAmount: 701250,
          netTaxDue: 0,
          faitA: 'وهران',
          dateDeclaration: '04/11/2026',
          ...Object.fromEntries(Array.from({ length: 15 }, (_, i) => [`nif_${i}`, String(i % 10)])),
        }
      : {
          wilaya: 'Oran',
          recette: 'Akid Lotfi',
          cedantNomPrenom: 'BENAHMED Abdelkader ben Mohamed ben Abdallah Cherif',
          cedantAdresse: 'Cité 557 Logements, Imm. D24, Appt 768, Quartier Akid Lotfi, Bir El Djir, Oran',
          cedantCommune: 'Bir El Djir',
          cedantWilaya: 'Oran',
          cedantCodePostal: '31011',
          cedantNin: '198531010012345678',
          buyer1NomPrenom: 'MANSOURI Fatima Zohra bent Larbi',
          buyer1Adresse: 'Cité Les Pins, Villa N° 12, Bir El Djir, Oran',
          buyer2NomPrenom: 'MANSOURI Mohamed El Amine',
          buyer2Adresse: '45 Rue de Palestine, Quartier Emir Abdelkader, Oran',
          buyer3NomPrenom: 'MANSOURI Amine',
          buyer3Adresse: 'Commune d\'Oran',
          natureBien: 'Appartement',
          consistanceGlobale: '125 m² (4 pièces bâties)',
          natureDroitsReels: 'Pleine propriété',
          situationBien: 'Quartier Akid Lotfi, Imm. D24, Appt 768',
          commune: 'Oran',
          wilayaBien: 'Oran',
          codePostalBien: '31000',
          articleImposition: '31/0456/078',
          natureOperation: 'Cession à titre onéreux',
          originePropriete: 'Acquisition par acte notarié',
          dateActeOrigine: '15/04/2018',
          dateActeCession: '02/11/2026',
          natureActeCession: 'Acte notarié de vente',
          montantCession: 18500000,
          fraisCession: 250000,
          fraisAutres: 150000,
          valeurOrigine: 12000000,
          fraisAcquisition: 600000,
          grossPlusValue: 5500000,
          abattementRate: '15%',
          abattementAmount: 825000,
          netImposablePlusValue: 4675000,
          baseImposable: 4675000,
          check15: true,
          checkExonere: false,
          grossTax: 701250,
          residenceAbattementAmount: 701250,
          netTaxDue: 0,
          faitA: 'Oran',
          dateDeclaration: '04/11/2026',
          ...Object.fromEntries(Array.from({ length: 15 }, (_, i) => [`nif_${i}`, String(i % 10)])),
        };
  }

  if (slug === 'gn31') {
    return isAr
      ? {
          directionWilaya: 'المديرية الولائية للضرائب بوهران',
          commune: 'وهران',
          inspection: 'مفتشية الضرائب العقيد لطفي',
          decl_first_year: true,
          decl_change: false,
          propWilaya: 'وهران',
          propCommune: 'بئر الجير',
          propRue: 'شارع الأمير عبد القادر رقم 42',
          propDetails: 'عمارة سكنية ذات 4 طوابق',
          nomPrenom: 'بلقاسم مراد بن يوسف',
          dateLieuNaissance: '14/08/1978 بوهران',
          adresseResidence: 'حي الياسمين 2 عمارة 15 رقم 4 وهران',
          communeResidence: 'بئر الجير',
          wilayaResidence: 'وهران',
          codePostal: '31011',
          telephone: '0550123456',
          email: 'mourad.belkacem@email.dz',
          qualite_prop_occupant: true,
          nature_individuel: true,
          dateAchat: '20/01/2022',
          dateAchevement: '15/10/2023',
          dateOccupationTotale: '01/11/2023',
          indiv_res_principale: true,
          indiv_non_loue: true,
          indiv_sup_totale: '240 م²',
          indiv_sup_habitation: '180 م²',
          indiv_sup_pro: '0 م²',
          indiv_sup_dependances: '35 م²',
          indiv_sup_non_batie: '60 م²',
          faitA: 'وهران',
          dateDeclaration: '04/11/2026',
          ...Object.fromEntries(Array.from({ length: 20 }, (_, i) => [`nif_${i}`, String(i % 10)])),
          ...Object.fromEntries(Array.from({ length: 11 }, (_, i) => [`nai_${i}`, String(i % 10)])),
          ...Object.fromEntries(Array.from({ length: 18 }, (_, i) => [`nin_${i}`, String(i % 10)])),
        }
      : {
          directionWilaya: 'Direction des Impôts de la Wilaya d\'Oran',
          commune: 'Oran',
          inspection: 'Inspection Akid Lotfi',
          decl_first_year: true,
          decl_change: false,
          propWilaya: 'Oran',
          propCommune: 'Bir El Djir',
          propRue: '42 Boulevard Emir Abdelkader',
          propDetails: 'Immeuble d\'habitation R+4',
          nomPrenom: 'BELKACEM Mourad ben Youcef',
          dateLieuNaissance: '14/08/1978 à Oran',
          adresseResidence: 'Cité Yasmine 2, Imm. 15, N° 4, Oran',
          communeResidence: 'Bir El Djir',
          wilayaResidence: 'Oran',
          codePostal: '31011',
          telephone: '0550123456',
          email: 'mourad.belkacem@email.dz',
          qualite_prop_occupant: true,
          nature_individuel: true,
          dateAchat: '20/01/2022',
          dateAchevement: '15/10/2023',
          dateOccupationTotale: '01/11/2023',
          indiv_res_principale: true,
          indiv_non_loue: true,
          indiv_sup_totale: '240 m²',
          indiv_sup_habitation: '180 m²',
          indiv_sup_pro: '0 m²',
          indiv_sup_dependances: '35 m²',
          indiv_sup_non_batie: '60 m²',
          faitA: 'Oran',
          dateDeclaration: '04/11/2026',
          ...Object.fromEntries(Array.from({ length: 20 }, (_, i) => [`nif_${i}`, String(i % 10)])),
          ...Object.fromEntries(Array.from({ length: 11 }, (_, i) => [`nai_${i}`, String(i % 10)])),
          ...Object.fromEntries(Array.from({ length: 18 }, (_, i) => [`nin_${i}`, String(i % 10)])),
        };
  }

  if (slug === 'gn8') {
    return isAr
      ? {
          directionWilaya: 'وهران',
          service: 'مفتشية الضرائب بئر الجير',
          regime_irg: true,
          irg_categorie: 'مهن حرة',
          nomRaisonSociale: 'مكتب الأستاذ لطاب محمد للتوثيق',
          formeJuridique: 'شخص طبيعي — مهنة توثيقية حرة',
          activitePrincipale: 'مكتب عمومي للتوثيق — محررات وعقود رسمية',
          adresseSiege_line1: 'حي العقيد لطفي عمارة د24 وهران',
          telephone: '041424344',
          email: 'contact@notaire-lattab.dz',
          numeroRc: '31/00-1234567A26',
          numeroAgrement: 'قرار وزاري رقم 452/2012',
          strike_locataire: '---',
          strike_gerant_libre: '---',
          strike_gerant_salarie: '---',
          dateDebutActivite: '01/01/2024',
          faitA: 'وهران',
          dateDeclaration: '04/11/2026',
          ...Object.fromEntries(Array.from({ length: 20 }, (_, i) => [`nif_${i}`, String(i % 10)])),
          ...Object.fromEntries(Array.from({ length: 11 }, (_, i) => [`nai_${i}`, String(i % 10)])),
          ...Object.fromEntries(Array.from({ length: 18 }, (_, i) => [`nin_${i}`, String(i % 10)])),
        }
      : {
          directionWilaya: 'Oran',
          service: 'Inspection Bir El Djir',
          regime_irg: true,
          irg_categorie: 'BNC',
          nomRaisonSociale: 'Office Notarial Maître LATTAB Mohamed',
          formeJuridique: 'Profession libérale — Notaire',
          activitePrincipale: 'Office public notarial — Actes authentiques',
          adresseSiege_line1: 'Quartier Akid Lotfi, Imm. D24, Oran',
          telephone: '041424344',
          email: 'contact@notaire-lattab.dz',
          numeroRc: '31/00-1234567A26',
          numeroAgrement: 'Arrêté ministériel N° 452/2012',
          strike_locataire: '---',
          strike_gerant_libre: '---',
          strike_gerant_salarie: '---',
          dateDebutActivite: '01/01/2024',
          faitA: 'Oran',
          dateDeclaration: '04/11/2026',
          ...Object.fromEntries(Array.from({ length: 20 }, (_, i) => [`nif_${i}`, String(i % 10)])),
          ...Object.fromEntries(Array.from({ length: 11 }, (_, i) => [`nai_${i}`, String(i % 10)])),
          ...Object.fromEntries(Array.from({ length: 18 }, (_, i) => [`nin_${i}`, String(i % 10)])),
        };
  }

  // GN51
  return isAr
    ? {
        wilaya: 'وهران',
        structure: 'قباضة الضرائب العقيد لطفي',
        bailleurNom: 'بن عيسى أحمد بن خالد',
        bailleurAdresse: 'حي الصنوبر رقم 14 وهران',
        bailleurCommune: 'وهران',
        bailleurWilaya: 'وهران',
        bailleurCodePostal: '31000',
        bailleurNif: '099831010045678',
        bailleurNin: '197531010045678912',
        preneurNom: 'شركة الإخوة للتجارة والخدمات ش.ذ.م.م',
        preneurAdresse: 'شارع فلسطين رقم 88 وهران',
        preneurCommune: 'وهران',
        preneurWilaya: 'وهران',
        preneurCodePostal: '31000',
        preneurNif: '001531010078945',
        preneurNin: '198231010098765432',
        natureBien: 'محل تجاري',
        lieuSituation: 'شارع جيش التحرير الوطني رقم 102',
        communeBien: 'وهران',
        wilayaBien: 'وهران',
        codePostalBien: '31000',
        articleImposition: '31/0789/101',
        dest_commercial: true,
        dateDebutContrat: '01/01/2026',
        dateFinContrat: '31/12/2028',
        periodicite: 'فصلية (كل 3 أشهر)',
        loyerCommercial: 450000,
        taxCommercial: 67500,
        totalTaxDue_p1: 67500,
        faitA: 'وهران',
        dateDeclaration: '04/11/2026',
        pay_numeraire: true,
      }
    : {
        wilaya: 'Oran',
        structure: 'Recette des Impôts Akid Lotfi',
        bailleurNom: 'BENISSA Ahmed ben Khaled',
        bailleurAdresse: '14 Cité Les Pins, Oran',
        bailleurCommune: 'Oran',
        bailleurWilaya: 'Oran',
        bailleurCodePostal: '31000',
        bailleurNif: '099831010045678',
        bailleurNin: '197531010045678912',
        preneurNom: 'SARL EL IKHWA COMMERCE ET SERVICES',
        preneurAdresse: '88 Rue de Palestine, Oran',
        preneurCommune: 'Oran',
        preneurWilaya: 'Oran',
        preneurCodePostal: '31000',
        preneurNif: '001531010078945',
        preneurNin: '198231010098765432',
        natureBien: 'Local commercial',
        lieuSituation: '102 Boulevard de l\'ALN',
        communeBien: 'Oran',
        wilayaBien: 'Oran',
        codePostalBien: '31000',
        articleImposition: '31/0789/101',
        dest_commercial: true,
        dateDebutContrat: '01/01/2026',
        dateFinContrat: '31/12/2028',
        periodicite: 'Trimestrielle',
        loyerCommercial: 450000,
        taxCommercial: 67500,
        totalTaxDue_p1: 67500,
        faitA: 'Oran',
        dateDeclaration: '04/11/2026',
        pay_numeraire: true,
      };
}

/**
 * Draws a millimeter calibration overlay on a PDF template.
 * Includes perimeter millimeter rulers, colored bounding boxes, crosshair anchors,
 * millimeter dimension tags, and sample rendered text.
 */
export async function generateCalibrationOverlayPdf(options: {
  templateBytes: ArrayBuffer | Uint8Array;
  fields: FormFieldCoord[];
  lang: FormLocale;
  formTitle: string;
  fontBytes?: ArrayBuffer;
}): Promise<Uint8Array> {
  const { templateBytes, fields, lang, fontBytes } = options;
  const isAr = lang === 'ar';

  const pdfDoc = await PDFDocument.load(templateBytes);
  pdfDoc.registerFontkit(fontkit);

  let customFont: PDFFont | null = null;
  if (fontBytes) {
    try {
      customFont = await pdfDoc.embedFont(fontBytes);
      const fontEmbedder = (customFont as unknown as { embedder?: { font?: { layout?: (text: string) => unknown; glyphForCodePoint?: (codePoint: number) => { advanceWidth: number } | null } } }).embedder;
      const fkFont = fontEmbedder?.font;
      if (fkFont && typeof fkFont.glyphForCodePoint === 'function') {
        fkFont.layout = (text: string) => {
          const glyphs = Array.from(text).map((ch) => fkFont.glyphForCodePoint!(ch.codePointAt(0) || 0));
          return {
            glyphs,
            positions: glyphs.map((g: { advanceWidth: number } | null) => ({
              xAdvance: g ? g.advanceWidth : 0,
              yAdvance: 0,
              xOffset: 0,
              yOffset: 0,
            })),
          };
        };
      }
    } catch {
      customFont = null;
    }
  }

  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const pageCount = pdfDoc.getPageCount();

  // Draw on each page
  for (let pIdx = 0; pIdx < pageCount; pIdx++) {
    const page = pdfDoc.getPage(pIdx);
    const pageWidth = page.getWidth();
    const pageHeight = page.getHeight();
    const pageNumber = pIdx + 1;

    const widthMm = ptToMm(pageWidth);
    const heightMm = ptToMm(pageHeight);

    // ──────────────────────────────────────────
    // 1. Millimeter Precision Rulers on page borders
    // ──────────────────────────────────────────
    // Top border ruler
    for (let mm = 0; mm <= widthMm; mm++) {
      const x = mmToPt(mm);
      let tickLength = 2.5;
      if (mm % 10 === 0) {
        tickLength = 7.0;
        page.drawLine({
          start: { x, y: pageHeight },
          end: { x, y: pageHeight - tickLength },
          thickness: 0.6,
          color: rgb(0.2, 0.4, 0.8),
        });
        if (mm > 0 && mm < widthMm) {
          page.drawText(String(mm), {
            x: x - 4,
            y: pageHeight - 12,
            size: 5,
            font: helvetica,
            color: rgb(0.1, 0.3, 0.7),
          });
        }
      } else if (mm % 5 === 0) {
        tickLength = 4.5;
        page.drawLine({
          start: { x, y: pageHeight },
          end: { x, y: pageHeight - tickLength },
          thickness: 0.4,
          color: rgb(0.3, 0.5, 0.8),
        });
      } else if (mm % 2 === 0) {
        page.drawLine({
          start: { x, y: pageHeight },
          end: { x, y: pageHeight - tickLength },
          thickness: 0.25,
          color: rgb(0.5, 0.6, 0.8),
        });
      }
    }

    // Left border ruler (starts 0 at top to match physical notarial ruler)
    for (let mm = 0; mm <= heightMm; mm++) {
      const yFromTop = mmToPt(mm);
      const y = pageHeight - yFromTop;
      let tickLength = 2.5;
      if (mm % 10 === 0) {
        tickLength = 7.0;
        page.drawLine({
          start: { x: 0, y },
          end: { x: tickLength, y },
          thickness: 0.6,
          color: rgb(0.2, 0.4, 0.8),
        });
        if (mm > 0 && mm < heightMm) {
          page.drawText(String(mm), {
            x: tickLength + 1.5,
            y: y - 2,
            size: 5,
            font: helvetica,
            color: rgb(0.1, 0.3, 0.7),
          });
        }
      } else if (mm % 5 === 0) {
        tickLength = 4.5;
        page.drawLine({
          start: { x: 0, y },
          end: { x: tickLength, y },
          thickness: 0.4,
          color: rgb(0.3, 0.5, 0.8),
        });
      } else if (mm % 2 === 0) {
        page.drawLine({
          start: { x: 0, y },
          end: { x: tickLength, y },
          thickness: 0.25,
          color: rgb(0.5, 0.6, 0.8),
        });
      }
    }

    // ──────────────────────────────────────────
    // 2. Field Bounding Boxes, Anchors & Tags
    // ──────────────────────────────────────────
    const pageFields = fields.filter((f) => f.page === pageNumber);

    for (const field of pageFields) {
      const cat = categorizeField(field.id);
      const maxWidth = field.maxWidth ?? (cat.isCheckbox ? 14 : 90);
      const size = field.size ?? 10;
      const boxHeight = size * 1.25;

      const xMm = ptToMm(field.x);
      const yTopMm = ptToMm(pageHeight - field.y);
      const widthMm = ptToMm(maxWidth);

      // Color coding by role:
      // Digit cells: purple (0.6, 0.2, 0.8)
      // Checkboxes: emerald green (0.05, 0.65, 0.35)
      // Currency / Numbers: amber/orange (0.85, 0.45, 0.05)
      // Headers / Parties / Property: dark cyan (0.1, 0.45, 0.7)
      let boxColor = rgb(0.1, 0.45, 0.7);
      if (cat.isDigitBox) {
        boxColor = rgb(0.65, 0.15, 0.85);
      } else if (cat.isCheckbox) {
        boxColor = rgb(0.05, 0.65, 0.35);
      } else if (field.format === 'currency' || cat.category === 'tax_table') {
        boxColor = rgb(0.85, 0.45, 0.05);
      }

      // Draw bounding box
      page.drawRectangle({
        x: field.x,
        y: field.y - (cat.isCheckbox ? 2 : 1),
        width: maxWidth,
        height: cat.isCheckbox ? 12 : boxHeight,
        borderColor: boxColor,
        borderWidth: 0.75,
        opacity: 0.85,
      });

      // Draw precision crosshair (+) at field.x, field.y
      const chSize = 3;
      page.drawLine({
        start: { x: field.x - chSize, y: field.y },
        end: { x: field.x + chSize, y: field.y },
        thickness: 0.5,
        color: boxColor,
      });
      page.drawLine({
        start: { x: field.x, y: field.y - chSize },
        end: { x: field.x, y: field.y + chSize },
        thickness: 0.5,
        color: boxColor,
      });

      // Draw box center crosshair
      const centerX = field.x + maxWidth / 2;
      page.drawLine({
        start: { x: centerX - 2, y: field.y },
        end: { x: centerX + 2, y: field.y },
        thickness: 0.5,
        color: boxColor,
      });

      // Draw tiny label badge above the box (skip if digit box to avoid clutter)
      if (!cat.isDigitBox || cat.digitIndex === 0) {
        const tagText = cat.isDigitBox
          ? `[${cat.digitPrefix}] X:${xMm.toFixed(1)}mm W:${widthMm.toFixed(1)}mm`
          : `[${field.id}] ${xMm.toFixed(1)}x${yTopMm.toFixed(1)}mm`;

        page.drawText(tagText, {
          x: field.x,
          y: field.y + boxHeight + 0.5,
          size: 5.5,
          font: helveticaBold,
          color: boxColor,
        });
      }
    }
  }

  return await pdfDoc.save();
}
