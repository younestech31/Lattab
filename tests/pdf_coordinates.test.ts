import { PDFDocument } from 'pdf-lib';
import { fillOfficialPdf, formatPdfDate } from '../lib/forms/fillOfficialPdf';
import { mapGN17ToFieldValues, GN17_FIELD_COORDINATES, GN17_FIELD_COORDINATES_FR } from '../lib/forms/gn17/fields';
import { computeGN17 } from '../lib/forms/gn17/compute';
import { GN17FormData, initialGN17Values } from '../lib/forms/gn17/schema';

import { mapGN31ToFieldValues, GN31_FIELD_COORDINATES, GN31_FIELD_COORDINATES_FR } from '../lib/forms/gn31/fields';
import { GN31FormData, initialGN31Values } from '../lib/forms/gn31/schema';

import { mapGN8ToFieldValues, GN8_FIELD_COORDINATES, GN8_FIELD_COORDINATES_FR } from '../lib/forms/gn8/fields';
import { GN8FormData, initialGN8Values } from '../lib/forms/gn8/schema';

import { mapGN51ToFieldValues, GN51_FIELD_COORDINATES, GN51_FIELD_COORDINATES_FR } from '../lib/forms/gn51/fields';
import { computeGN51 } from '../lib/forms/gn51/compute';
import { GN51FormData, initialGN51Values } from '../lib/forms/gn51/schema';
import { digitsOnly } from '../lib/forms/normalizeDigits';

interface TestResult {
  form: string;
  lang: string;
  pageCount: number;
  expectedPages: number;
  pageDimensions: { width: number; height: number }[];
  fieldsCount: number;
  pdfSizeBytes: number;
  success: boolean;
  errors: string[];
}

function assertDigitBoxCenters(
  label: string,
  fields: Array<{ id: string; x: number; maxWidth?: number }>,
  specs: Array<{ prefix: string; count: number; start: number; step: number; cellWidth: number }>
): void {
  for (const spec of specs) {
    for (let i = 0; i < spec.count; i++) {
      const field = fields.find((item) => item.id === `${spec.prefix}_${i}`);
      if (!field || field.maxWidth === undefined) {
        throw new Error(`${label}: missing digit box ${spec.prefix}_${i} or maxWidth.`);
      }
      const expectedCenter = spec.start + i * spec.step + spec.cellWidth / 2;
      const actualCenter = field.x + field.maxWidth / 2;
      if (Math.abs(actualCenter - expectedCenter) > 1.1) {
        throw new Error(`${label}: ${field.id} is misaligned (expected center ${expectedCenter.toFixed(2)}, got ${actualCenter.toFixed(2)}).`);
      }
    }
  }
}

function assertMappedValuesHaveCoordinates(
  label: string,
  values: Record<string, string | number | boolean>,
  fields: Array<{ id: string }>
): void {
  const ids = new Set(fields.map((field) => field.id));
  if (ids.size !== fields.length) {
    throw new Error(`${label}: coordinate list contains duplicate field IDs.`);
  }
  for (const [id, value] of Object.entries(values)) {
    if (value === '' || value === false || value === null || value === undefined) continue;
    if (!ids.has(id)) {
      throw new Error(`${label}: mapper produced "${id}" but no PDF coordinate exists for it.`);
    }
  }
}

async function runTestSuite(): Promise<TestResult[]> {
  if (
    formatPdfDate('2026-11-05') !== '05/11/2026' ||
    formatPdfDate('2000-02-29') !== '29/02/2000' ||
    formatPdfDate('2026-02-30') !== '2026-02-30' ||
    formatPdfDate('05/11/2026') !== '05/11/2026'
  ) {
    throw new Error('PDF date formatting must convert valid ISO dates and preserve invalid/already formatted values.');
  }

  const normalizedDigitSample = digitsOnly('٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹');
  if (normalizedDigitSample !== '01234567890123456789') {
    throw new Error(`Arabic/Persian digit normalization failed: ${normalizedDigitSample}`);
  }

  // Digit fields use x as the left edge of the draw box. Check their centers
  // against the official template's digit-cell centers in both languages.
  assertDigitBoxCenters('GN08 AR', GN8_FIELD_COORDINATES, [
    { prefix: 'nif', count: 20, start: 46, step: 11.9, cellWidth: 11.9 },
    { prefix: 'nai', count: 11, start: 159, step: 11.36, cellWidth: 11.36 },
    { prefix: 'nin', count: 18, start: 285.3, step: 11, cellWidth: 11 },
  ]);
  assertDigitBoxCenters('GN08 FR', GN8_FIELD_COORDINATES_FR, [
    { prefix: 'nif', count: 20, start: 356, step: 10, cellWidth: 10 },
    { prefix: 'nai', count: 11, start: 355, step: 9.5, cellWidth: 9.5 },
    { prefix: 'nin', count: 18, start: 220, step: 13, cellWidth: 13 },
  ]);
  assertDigitBoxCenters('GN31 AR', GN31_FIELD_COORDINATES, [
    { prefix: 'nif', count: 20, start: 196.5, step: 12.35, cellWidth: 12.35 },
    { prefix: 'nai', count: 11, start: 330.7, step: 9.33, cellWidth: 9.33 },
    { prefix: 'nin', count: 18, start: 272.2, step: 9.77, cellWidth: 9.77 },
  ]);
  assertDigitBoxCenters('GN31 FR', GN31_FIELD_COORDINATES_FR, [
    { prefix: 'nif', count: 20, start: 247, step: 9.85, cellWidth: 9.85 },
    { prefix: 'nai', count: 11, start: 246, step: 9.7, cellWidth: 9.7 },
    { prefix: 'nin', count: 18, start: 258, step: 9.7, cellWidth: 9.7 },
  ]);

  const gn17NoSellerAddressDefaults = mapGN17ToFieldValues({
    ...initialGN17Values,
    cedantCommune: '',
    cedantWilaya: '',
    cedantCodePostal: '',
    commune: '',
  }, computeGN17({
    salePrice: 0,
    saleExpenses: 0,
    otherExpenses: 0,
    acquisitionPrice: 0,
    acquisitionExpenses: 0,
  }), 'ar');
  if (
    gn17NoSellerAddressDefaults.cedantCommune !== '' ||
    gn17NoSellerAddressDefaults.cedantWilaya !== '' ||
    gn17NoSellerAddressDefaults.cedantCodePostal !== '' ||
    gn17NoSellerAddressDefaults.commune !== ''
  ) {
    throw new Error('GN17 mapper must not invent the seller commune, wilaya, postal code, or property commune.');
  }

  const gn17ThreeBuyers = mapGN17ToFieldValues({
    ...initialGN17Values,
    buyer1NomPrenom: 'Buyer One',
    buyer1Adresse: 'Address One',
    buyer2NomPrenom: 'Buyer Two',
    buyer2Adresse: 'Address Two',
    buyer3NomPrenom: 'Buyer Three',
    buyer3Adresse: 'Address Three',
    natureBien: 'Appartement',
    consistanceGlobale: '100 m² bâtis',
    natureDroitsReels: 'Pleine propriété',
    situationBien: 'Rue 1',
    natureOperation: 'onerous',
  }, computeGN17({
    salePrice: 0,
    saleExpenses: 0,
    otherExpenses: 0,
    acquisitionPrice: 0,
    acquisitionExpenses: 0,
  }), 'fr');
  if (
    gn17ThreeBuyers.buyer3NomPrenom !== 'Buyer Three' ||
    gn17ThreeBuyers.buyer3Adresse !== 'Address Three' ||
    gn17ThreeBuyers.consistanceGlobale !== '100 m² bâtis' ||
    gn17ThreeBuyers.natureOperation !== 'Cession à titre onéreux'
  ) {
    throw new Error('GN17 mapper must preserve all three buyers and map the official property fields separately.');
  }

  const gn17CoordinateIds = new Set([
    ...GN17_FIELD_COORDINATES.map((field) => field.id),
    ...GN17_FIELD_COORDINATES_FR.map((field) => field.id),
  ]);
  for (const id of ['inspection', 'buyer1Nif', 'buyer2Nif', 'cadastreRef', 'refPublicationOrigine']) {
    if (gn17CoordinateIds.has(id)) {
      throw new Error(`GN17 coordinate map still includes non-official field: ${id}`);
    }
  }
  for (const id of ['buyer3NomPrenom', 'buyer3Adresse', 'consistanceGlobale', 'articleImposition', 'codePostalBien']) {
    if (!gn17CoordinateIds.has(id)) {
      throw new Error(`GN17 coordinate map is missing official field: ${id}`);
    }
  }

  const gn31Unspecified = mapGN31ToFieldValues({
    ...initialGN31Values,
    occupantType: 'unspecified',
    natureBien: 'individuel',
    faitA: '',
  }, 'ar');
  if (
    gn31Unspecified.nomSociete ||
    gn31Unspecified.siegeSocial ||
    gn31Unspecified.qualite_societe_prop ||
    gn31Unspecified.qualite_societe_concession ||
    gn31Unspecified.indiv_loue ||
    gn31Unspecified.indiv_non_loue ||
    gn31Unspecified.faitA !== ''
  ) {
    throw new Error('GN31 mapper must not invent an occupant type, rental status, or signing city.');
  }

  const gn31ExplicitNonRented = mapGN31ToFieldValues({
    ...initialGN31Values,
    occupantType: 'physique',
    natureBien: 'individuel',
    isLoueSelected: true,
    isLoue: false,
  }, 'ar');
  if (gn31ExplicitNonRented.indiv_non_loue !== 'X' || gn31ExplicitNonRented.indiv_loue) {
    throw new Error('GN31 mapper did not preserve the explicit non-rented selection.');
  }

  const gn31ExplicitRented = mapGN31ToFieldValues({
    ...initialGN31Values,
    occupantType: 'physique',
    natureBien: 'appartement',
    isLoueSelected: true,
    isLoue: true,
  }, 'ar');
  if (gn31ExplicitRented.app_loue !== 'X' || gn31ExplicitRented.app_non_loue) {
    throw new Error('GN31 mapper did not preserve the explicit rented selection.');
  }

  const gn8UnspecifiedQuality = mapGN8ToFieldValues(initialGN8Values, 'ar');
  if (
    gn8UnspecifiedQuality.strike_proprietaire ||
    gn8UnspecifiedQuality.strike_locataire ||
    gn8UnspecifiedQuality.strike_gerant_libre ||
    gn8UnspecifiedQuality.strike_gerant_salarie
  ) {
    throw new Error('GN08 mapper must not strike every declarant capacity when none was selected.');
  }

  const gn51UnderThreshold = computeGN51({
    ...initialGN51Values,
    isOverThreshold: false,
    loyerHabitation: 900000,
    loyerCommercial: 900000,
  });
  if (
    gn51UnderThreshold.thresholdMismatch ||
    gn51UnderThreshold.totalGrossLoyer !== 1800000 ||
    gn51UnderThreshold.totalTaxDue !== 198000
  ) {
    throw new Error('GN51 threshold boundary at exactly 1,800,000 DA must use category rates (7% + 15%).');
  }

  const gn51OverThreshold = computeGN51({
    ...initialGN51Values,
    isOverThreshold: true,
    loyerExcedentaire: 2400000,
  });
  if (
    gn51OverThreshold.thresholdMismatch ||
    gn51OverThreshold.totalTaxDue !== 168000 ||
    gn51OverThreshold.taxExcedentaire !== 168000
  ) {
    throw new Error('GN51 amount above 1,800,000 DA must use the provisional 7% calculation.');
  }

  const results: TestResult[] = [];

  // ──────────────────────────────────────────
  // 1. GN17 ARABIC
  // ──────────────────────────────────────────
  try {
    const gn17DataAr: GN17FormData = {
      ...initialGN17Values,
      wilaya: 'وهران',
      recette: 'العقيد لطفي',
      cedantNomPrenom: 'بن أحمد عبد القادر بن محمد بن عبد الله الشريف الحسني',
      cedantAdresse: 'حي 557 مسكن عمارة د24 رقم 768 حي العقيد لطفي بلدية بئر الجير ولاية وهران',
      cedantNin: '198531010012345678',
      cedantNif: '099931010012345',
      cedantCommune: 'وهران',
      cedantWilaya: 'وهران',
      cedantCodePostal: '31000',
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
      natureOperation: 'onerous',
      originePropriete: 'اقتناء بموجب عقد بيع موثق',
      dateActeOrigine: '2018-04-15',
      dateActeCession: '2026-11-02',
      natureActeCession: 'عقد بيع رسمي توثيقي',
      faitA: 'وهران',
      dateDeclaration: '04/11/2026',
    };
    const gn17CalcAr = computeGN17({
      salePrice: 18500000,
      saleExpenses: 250000,
      otherExpenses: 150000,
      acquisitionPrice: 12000000,
      acquisitionExpenses: 600000,
      isSolePrimaryResidence: true,
      detentionYears: 8,
    });
    const gn17ValuesAr = mapGN17ToFieldValues(gn17DataAr, gn17CalcAr, 'ar');
    assertMappedValuesHaveCoordinates('GN17 AR', gn17ValuesAr, GN17_FIELD_COORDINATES);
    const pdfBytes = await fillOfficialPdf({
      templateUrl: '/forms/gn17.pdf',
      expectedPages: 2,
      fields: GN17_FIELD_COORDINATES,
      values: gn17ValuesAr,
    });
    const doc = await PDFDocument.load(pdfBytes);
    const pageCount = doc.getPageCount();
    const dims = doc.getPages().map((p) => p.getSize());

    results.push({
      form: 'GN17',
      lang: 'Arabic',
      pageCount,
      expectedPages: 2,
      pageDimensions: dims,
      fieldsCount: GN17_FIELD_COORDINATES.length,
      pdfSizeBytes: pdfBytes.length,
      success: pageCount === 2 && pdfBytes.length > 10000,
      errors: pageCount !== 2 ? [`Expected 2 pages but got ${pageCount}`] : [],
    });
  } catch (err) {
    results.push({
      form: 'GN17',
      lang: 'Arabic',
      pageCount: 0,
      expectedPages: 2,
      pageDimensions: [],
      fieldsCount: GN17_FIELD_COORDINATES.length,
      pdfSizeBytes: 0,
      success: false,
      errors: [err instanceof Error ? err.message : String(err)],
    });
  }

  // ──────────────────────────────────────────
  // 2. GN17 FRENCH
  // ──────────────────────────────────────────
  try {
    const gn17DataFr: GN17FormData = {
      ...initialGN17Values,
      wilaya: 'Oran',
      recette: 'Akid Lotfi',
      cedantNomPrenom: 'BENAHMED Abdelkader ben Mohamed ben Abdallah Cherif',
      cedantAdresse: 'Cité 557 Logements, Imm. D24, Appt 768, Quartier Akid Lotfi, Bir El Djir, Oran',
      cedantNin: '198531010012345678',
      cedantNif: '099931010012345',
      cedantCommune: 'Oran',
      cedantWilaya: 'Oran',
      cedantCodePostal: '31000',
      buyer1NomPrenom: 'MANSOURI Fatima Zohra bent Larbi',
      buyer1Adresse: 'Cité Les Pins, Villa N° 12, Bir El Djir, Oran',
      buyer2NomPrenom: 'MANSOURI Mohamed El Amine ben Larbi',
      buyer2Adresse: '45 Rue de la Paix, Quartier Emir Abdelkader, Oran',
      buyer3NomPrenom: 'MANSOURI Amine',
      buyer3Adresse: 'Oran',
      natureBien: 'Appartement à usage d’habitation',
      consistanceGlobale: 'Surface totale 125 m², bâtie 110 m², trois niveaux',
      natureDroitsReels: 'Pleine propriété',
      situationBien: 'Cité Akid Lotfi, Imm D24, Appt 768',
      commune: 'Oran',
      wilayaBien: 'Oran',
      codePostalBien: '31000',
      articleImposition: '31/0456/078',
      natureOperation: 'onerous',
      originePropriete: 'Acquisition par acte authentique de vente',
      dateActeOrigine: '2018-04-15',
      dateActeCession: '2026-11-02',
      natureActeCession: 'Acte notarié de vente immobilière',
      faitA: 'Oran',
      dateDeclaration: '04/11/2026',
    };
    const gn17CalcFr = computeGN17({
      salePrice: 18500000,
      saleExpenses: 250000,
      otherExpenses: 150000,
      acquisitionPrice: 12000000,
      acquisitionExpenses: 600000,
      isSolePrimaryResidence: true,
      detentionYears: 8,
    });
    const gn17ValuesFr = mapGN17ToFieldValues(gn17DataFr, gn17CalcFr, 'fr');
    assertMappedValuesHaveCoordinates('GN17 FR', gn17ValuesFr, GN17_FIELD_COORDINATES_FR);
    const pdfBytes = await fillOfficialPdf({
      templateUrl: '/forms/gn17_fr.pdf',
      expectedPages: 2,
      fields: GN17_FIELD_COORDINATES_FR,
      values: gn17ValuesFr,
    });
    const doc = await PDFDocument.load(pdfBytes);
    const pageCount = doc.getPageCount();
    const dims = doc.getPages().map((p) => p.getSize());

    results.push({
      form: 'GN17',
      lang: 'French',
      pageCount,
      expectedPages: 2,
      pageDimensions: dims,
      fieldsCount: GN17_FIELD_COORDINATES_FR.length,
      pdfSizeBytes: pdfBytes.length,
      success: pageCount === 2 && pdfBytes.length > 10000,
      errors: pageCount !== 2 ? [`Expected 2 pages but got ${pageCount}`] : [],
    });
  } catch (err) {
    results.push({
      form: 'GN17',
      lang: 'French',
      pageCount: 0,
      expectedPages: 2,
      pageDimensions: [],
      fieldsCount: GN17_FIELD_COORDINATES_FR.length,
      pdfSizeBytes: 0,
      success: false,
      errors: [err instanceof Error ? err.message : String(err)],
    });
  }

  // ──────────────────────────────────────────
  // 3. GN31 ARABIC
  // ──────────────────────────────────────────
  try {
    const gn31DataAr: GN31FormData = {
      ...initialGN31Values,
      directionWilaya: 'مديرية الضرائب لولاية وهران',
      commune: 'وهران',
      inspection: 'مفتشية الضرائب وهران وسط',
      nif: '09993101001234500000',
      nai: '31010012345',
      nin: '198531010012345678',
      declarationType: 'first_year',
      propWilaya: 'ولاية وهران',
      propCommune: 'بلدية بئر الجير',
      propRue: 'شارع الأمير عبد القادر رقم 24 حي الياسمين',
      propDetails: 'عمارة زهرة الياسمين الطابق 2 الشقة رقم 05',
      occupantType: 'physique',
      nomPrenom: 'لعطب عبد الرحمن بن محمد بن الحاج',
      dateLieuNaissance: '12/03/1982 بوهران',
      adresseResidence: 'حي العقيد لطفي عمارة D24 وهران',
      communeResidence: 'وهران',
      wilayaResidence: 'وهران',
      codePostal: '31000',
      telephone: '0550123456',
      email: 'abdelrahman.lattab@gmail.com',
      qualitePhysique: 'proprietaire',
      nomSociete: '',
      siegeSocial: '',
      telSociete: '',
      faxSociete: '',
      emailSociete: '',
      qualiteMorale: 'proprietaire',
      natureBien: 'appartement',
      usageResidence: 'principale',
      isLoue: false,
      dateAchat: '10/06/2021',
      dateAchevement: '15/01/2021',
      dateOccupationPartielle: '01/07/2021',
      dateOccupationTotale: '01/09/2021',
      superficieTotale: 125,
      superficieHabitation: 110,
      superficieProfessionnelle: 0,
      superficieDependances: 15,
      superficieNonBatie: 0,
      nbEtages: 0,
      surfaceAgricoleIrriguee: 0,
      surfaceAgricoleNonIrriguee: 0,
      surfaceTerrainConstructible: 0,
      faitA: 'وهران',
      dateDeclaration: '04/11/2026',
    };
    const gn31ValuesAr = mapGN31ToFieldValues(gn31DataAr, 'ar');
    assertMappedValuesHaveCoordinates('GN31 AR', gn31ValuesAr, GN31_FIELD_COORDINATES);
    const pdfBytes = await fillOfficialPdf({
      templateUrl: '/forms/gn31.pdf',
      expectedPages: 4,
      fields: GN31_FIELD_COORDINATES,
      values: gn31ValuesAr,
    });
    const doc = await PDFDocument.load(pdfBytes);
    const pageCount = doc.getPageCount();
    const dims = doc.getPages().map((p) => p.getSize());

    results.push({
      form: 'GN31',
      lang: 'Arabic',
      pageCount,
      expectedPages: 4,
      pageDimensions: dims,
      fieldsCount: GN31_FIELD_COORDINATES.length,
      pdfSizeBytes: pdfBytes.length,
      success: pageCount === 4 && pdfBytes.length > 10000,
      errors: pageCount !== 4 ? [`Expected 4 pages but got ${pageCount}`] : [],
    });
  } catch (err) {
    results.push({
      form: 'GN31',
      lang: 'Arabic',
      pageCount: 0,
      expectedPages: 4,
      pageDimensions: [],
      fieldsCount: GN31_FIELD_COORDINATES.length,
      pdfSizeBytes: 0,
      success: false,
      errors: [err instanceof Error ? err.message : String(err)],
    });
  }

  // ──────────────────────────────────────────
  // 4. GN31 FRENCH
  // ──────────────────────────────────────────
  try {
    const gn31DataFr: GN31FormData = {
      ...initialGN31Values,
      directionWilaya: 'DIW de Oran',
      commune: 'Oran',
      inspection: 'Inspection Oran Centre',
      nif: '09993101001234500000',
      nai: '31010012345',
      nin: '198531010012345678',
      declarationType: 'first_year',
      propWilaya: 'Wilaya d Oran',
      propCommune: 'Bir El Djir',
      propRue: '24 Rue Emir Abdelkader, Cité El Yasmine',
      propDetails: 'Résidence El Yasmine, 2ème étage, Appt N° 05',
      occupantType: 'physique',
      nomPrenom: 'LATTAB Abdelrahmane ben Mohamed',
      dateLieuNaissance: '12/03/1982 à Oran',
      adresseResidence: 'Cité Akid Lotfi, Imm D24, Oran',
      communeResidence: 'Oran',
      wilayaResidence: 'Oran',
      codePostal: '31000',
      telephone: '0550123456',
      email: 'abdelrahman.lattab@gmail.com',
      qualitePhysique: 'proprietaire',
      nomSociete: '',
      siegeSocial: '',
      telSociete: '',
      faxSociete: '',
      emailSociete: '',
      qualiteMorale: 'proprietaire',
      natureBien: 'appartement',
      usageResidence: 'principale',
      isLoue: false,
      dateAchat: '10/06/2021',
      dateAchevement: '15/01/2021',
      dateOccupationPartielle: '01/07/2021',
      dateOccupationTotale: '01/09/2021',
      superficieTotale: 125,
      superficieHabitation: 110,
      superficieProfessionnelle: 0,
      superficieDependances: 15,
      superficieNonBatie: 0,
      nbEtages: 0,
      surfaceAgricoleIrriguee: 0,
      surfaceAgricoleNonIrriguee: 0,
      surfaceTerrainConstructible: 0,
      faitA: 'Oran',
      dateDeclaration: '04/11/2026',
    };
    const gn31ValuesFr = mapGN31ToFieldValues(gn31DataFr, 'fr');
    assertMappedValuesHaveCoordinates('GN31 FR', gn31ValuesFr, GN31_FIELD_COORDINATES_FR);
    const pdfBytes = await fillOfficialPdf({
      templateUrl: '/forms/gn31_fr.pdf',
      expectedPages: 4,
      fields: GN31_FIELD_COORDINATES_FR,
      values: gn31ValuesFr,
    });
    const doc = await PDFDocument.load(pdfBytes);
    const pageCount = doc.getPageCount();
    const dims = doc.getPages().map((p) => p.getSize());

    results.push({
      form: 'GN31',
      lang: 'French',
      pageCount,
      expectedPages: 4,
      pageDimensions: dims,
      fieldsCount: GN31_FIELD_COORDINATES_FR.length,
      pdfSizeBytes: pdfBytes.length,
      success: pageCount === 4 && pdfBytes.length > 10000,
      errors: pageCount !== 4 ? [`Expected 4 pages but got ${pageCount}`] : [],
    });
  } catch (err) {
    results.push({
      form: 'GN31',
      lang: 'French',
      pageCount: 0,
      expectedPages: 4,
      pageDimensions: [],
      fieldsCount: GN31_FIELD_COORDINATES_FR.length,
      pdfSizeBytes: 0,
      success: false,
      errors: [err instanceof Error ? err.message : String(err)],
    });
  }

  // ──────────────────────────────────────────
  // 5. GN08 ARABIC
  // ──────────────────────────────────────────
  try {
    const gn8DataAr: GN8FormData = {
      ...initialGN8Values,
      directionWilaya: 'مديرية الضرائب لولاية وهران',
      service: 'مفتشية الضرائب وهران شرق',
      nif: '09993101001234500000',
      nai: '31010012345',
      nin: '198031010012345678',
      regime: 'irg',
      irgCategorie: 'مهن غير تجارية',
      nomRaisonSociale: 'شركة النور للاستشارات القانونية والتوثيق ش.ذ.م.م',
      formeJuridique: 'شركة ذات مسؤولية محدودة (SARL)',
      activitePrincipale: 'خدمات استشارية وقانونية وإدارية معتمدة',
      activiteSec1: 'ترجمة رسمية وتدقيق وثائق وعقود',
      activiteSec1_adr: 'شارع جيش التحرير الوطني رقم 10 وهران',
      activiteSec2: '',
      activiteSec2_adr: '',
      activiteSec3: '',
      adresseSiege: 'حي 557 مسكن عمارة D24 رقم 768 العقيد لطفي وهران',
      adresseEtablissementAlgerie: 'حي العقيد لطفي وهران',
      adresseResidence: 'نهج الصومام رقم 18 وهران',
      telephone: '041400000',
      email: 'contact@el-nour-oran.dz',
      numeroRc: '31/00-1234567B26',
      numeroAgrement: 'AGR-2026-31-0098',
      qualiteDeclarant: 'proprietaire',
      dateDebutActivite: '01/10/2026',
      faitA: 'وهران',
      dateDeclaration: '04/11/2026',
    };
    const gn8ValuesAr = mapGN8ToFieldValues(gn8DataAr, 'ar');
    assertMappedValuesHaveCoordinates('GN08 AR', gn8ValuesAr, GN8_FIELD_COORDINATES);
    const pdfBytes = await fillOfficialPdf({
      templateUrl: '/forms/gn8.pdf',
      expectedPages: 2,
      fields: GN8_FIELD_COORDINATES,
      values: gn8ValuesAr,
    });
    const doc = await PDFDocument.load(pdfBytes);
    const pageCount = doc.getPageCount();
    const dims = doc.getPages().map((p) => p.getSize());

    results.push({
      form: 'GN08',
      lang: 'Arabic',
      pageCount,
      expectedPages: 2,
      pageDimensions: dims,
      fieldsCount: GN8_FIELD_COORDINATES.length,
      pdfSizeBytes: pdfBytes.length,
      success: pageCount === 2 && pdfBytes.length > 10000,
      errors: pageCount !== 2 ? [`Expected 2 pages but got ${pageCount}`] : [],
    });
  } catch (err) {
    results.push({
      form: 'GN08',
      lang: 'Arabic',
      pageCount: 0,
      expectedPages: 2,
      pageDimensions: [],
      fieldsCount: GN8_FIELD_COORDINATES.length,
      pdfSizeBytes: 0,
      success: false,
      errors: [err instanceof Error ? err.message : String(err)],
    });
  }

  // ──────────────────────────────────────────
  // 6. GN08 FRENCH
  // ──────────────────────────────────────────
  try {
    const gn8DataFr: GN8FormData = {
      ...initialGN8Values,
      directionWilaya: 'DIW de Oran',
      service: 'Inspection Oran Est',
      nif: '09993101001234500000',
      nai: '31010012345',
      nin: '198031010012345678',
      regime: 'irg',
      irgCategorie: 'BNC',
      nomRaisonSociale: 'SARL EL NOUR CONSEIL JURIDIQUE ET ADMINISTRATIF',
      formeJuridique: 'Société à Responsabilité Limitée (SARL)',
      activitePrincipale: 'Conseil juridique et assistance administrative',
      activiteSec1: 'Traduction officielle et vérification de conformité',
      activiteSec1_adr: '10 Boulevard ALN, Oran',
      activiteSec2: '',
      activiteSec2_adr: '',
      activiteSec3: '',
      adresseSiege: 'Cité 557 Logements, Imm D24, Appt 768, Akid Lotfi, Oran',
      adresseEtablissementAlgerie: 'Akid Lotfi, Oran',
      adresseResidence: '18 Rue de la Soummam, Oran',
      telephone: '041400000',
      email: 'contact@el-nour-oran.dz',
      numeroRc: '31/00-1234567B26',
      numeroAgrement: 'AGR-2026-31-0098',
      qualiteDeclarant: 'proprietaire',
      dateDebutActivite: '01/10/2026',
      faitA: 'Oran',
      dateDeclaration: '04/11/2026',
    };
    const gn8ValuesFr = mapGN8ToFieldValues(gn8DataFr, 'fr');
    assertMappedValuesHaveCoordinates('GN08 FR', gn8ValuesFr, GN8_FIELD_COORDINATES_FR);
    const pdfBytes = await fillOfficialPdf({
      templateUrl: '/forms/gn8_fr.pdf',
      expectedPages: 2,
      fields: GN8_FIELD_COORDINATES_FR,
      values: gn8ValuesFr,
    });
    const doc = await PDFDocument.load(pdfBytes);
    const pageCount = doc.getPageCount();
    const dims = doc.getPages().map((p) => p.getSize());

    results.push({
      form: 'GN08',
      lang: 'French',
      pageCount,
      expectedPages: 2,
      pageDimensions: dims,
      fieldsCount: GN8_FIELD_COORDINATES_FR.length,
      pdfSizeBytes: pdfBytes.length,
      success: pageCount === 2 && pdfBytes.length > 10000,
      errors: pageCount !== 2 ? [`Expected 2 pages but got ${pageCount}`] : [],
    });
  } catch (err) {
    results.push({
      form: 'GN08',
      lang: 'French',
      pageCount: 0,
      expectedPages: 2,
      pageDimensions: [],
      fieldsCount: GN8_FIELD_COORDINATES_FR.length,
      pdfSizeBytes: 0,
      success: false,
      errors: [err instanceof Error ? err.message : String(err)],
    });
  }

  // ──────────────────────────────────────────
  // 7. GN51 ARABIC
  // ──────────────────────────────────────────
  try {
    const gn51DataAr: GN51FormData = {
      ...initialGN51Values,
      wilaya: 'مديرية الضرائب لولاية وهران',
      structure: 'قباضة الضرائب العقيد لطفي',
      bailleurNom: 'الأستاذ لعطب محمد بن الحاج عبد القادر',
      bailleurAdresse: 'حي 557 مسكن عمارة D24 رقم 768 العقيد لطفي وهران',
      bailleurCommune: 'وهران',
      bailleurWilaya: 'وهران',
      bailleurCodePostal: '31000',
      bailleurNif: '099831010098765',
      bailleurNin: '197531010055443322',
      preneurNom: 'بن عيسى مصطفى بن الطيب الشريف',
      preneurAdresse: 'شارع العربي بن مهيدي رقم 15 بلدية وهران',
      preneurCommune: 'وهران',
      preneurWilaya: 'وهران',
      preneurCodePostal: '31000',
      preneurNif: '198231010044556',
      preneurNin: '198231010011223344',
      natureBien: 'محل تجاري مهيأ بواجهتين رئيسيتين',
      lieuSituation: 'شارع فلسطين رقم 12 حي الأمير عبد القادر',
      communeBien: 'وهران',
      wilayaBien: 'وهران',
      codePostalBien: '31000',
      articleImposition: 'Art. 3101/2026/89',
      destination: 'commercial',
      dateDebutContrat: '01/01/2026',
      dateFinContrat: '31/12/2028',
      periodicite: 'إيجار شهري يدفع مقدماً كل بداية شهر',
      loyerHabitation: 0,
      loyerCommercial: 900000,
      loyerNonBatiNonAgricole: 0,
      loyerAgricole: 0,
      faitA: 'وهران',
      dateDeclaration: '04/11/2026',
      modePaiement: 'cheque_bancaire',
      chequeBanqueNum: 'CHQ-87654321',
      chequeBanqueDate: '02/11/2026',
      chequeBanqueAgence: 'بنك الفلاحة والتنمية الريفية وكالة وهران 310',
      chequePostalNum: '',
      chequePostalDate: '',
    };
    const gn51CalcAr = computeGN51(gn51DataAr);
    const gn51ValuesAr = mapGN51ToFieldValues(gn51DataAr, gn51CalcAr, 'ar');
    assertMappedValuesHaveCoordinates('GN51 AR', gn51ValuesAr, GN51_FIELD_COORDINATES);
    const pdfBytes = await fillOfficialPdf({
      templateUrl: '/forms/gn51.pdf',
      expectedPages: 2,
      fields: GN51_FIELD_COORDINATES,
      values: gn51ValuesAr,
    });
    const doc = await PDFDocument.load(pdfBytes);
    const pageCount = doc.getPageCount();
    const dims = doc.getPages().map((p) => p.getSize());

    results.push({
      form: 'GN51',
      lang: 'Arabic',
      pageCount,
      expectedPages: 2,
      pageDimensions: dims,
      fieldsCount: GN51_FIELD_COORDINATES.length,
      pdfSizeBytes: pdfBytes.length,
      success: pageCount === 2 && pdfBytes.length > 10000,
      errors: pageCount !== 2 ? [`Expected 2 pages but got ${pageCount}`] : [],
    });
  } catch (err) {
    results.push({
      form: 'GN51',
      lang: 'Arabic',
      pageCount: 0,
      expectedPages: 2,
      pageDimensions: [],
      fieldsCount: GN51_FIELD_COORDINATES.length,
      pdfSizeBytes: 0,
      success: false,
      errors: [err instanceof Error ? err.message : String(err)],
    });
  }

  // ──────────────────────────────────────────
  // 8. GN51 FRENCH
  // ──────────────────────────────────────────
  try {
    const gn51DataFr: GN51FormData = {
      ...initialGN51Values,
      wilaya: 'DIW de Oran',
      structure: 'Recette Akid Lotfi',
      bailleurNom: 'Maître LATTAB Mohamed ben El Hadj Abdelkader',
      bailleurAdresse: 'Cité 557 Logements, Imm D24, Appt 768, Akid Lotfi, Oran',
      bailleurCommune: 'Oran',
      bailleurWilaya: 'Oran',
      bailleurCodePostal: '31000',
      bailleurNif: '099831010098765',
      bailleurNin: '197531010055443322',
      preneurNom: 'BENISSA Mustapha ben Tayeb Cherif',
      preneurAdresse: '15 Rue Larbi Ben M hidi, Oran',
      preneurCommune: 'Oran',
      preneurWilaya: 'Oran',
      preneurCodePostal: '31000',
      preneurNif: '198231010044556',
      preneurNin: '198231010011223344',
      natureBien: 'Local commercial aménagé avec 2 façades vitrées',
      lieuSituation: '12 Rue de la Paix, Quartier Emir Abdelkader, Oran',
      communeBien: 'Oran',
      wilayaBien: 'Oran',
      codePostalBien: '31000',
      articleImposition: 'Art. 3101/2026/89',
      destination: 'commercial',
      dateDebutContrat: '01/01/2026',
      dateFinContrat: '31/12/2028',
      periodicite: 'Loyer mensuel payable d avance au 1er du mois',
      loyerHabitation: 0,
      loyerCommercial: 900000,
      loyerNonBatiNonAgricole: 0,
      loyerAgricole: 0,
      faitA: 'Oran',
      dateDeclaration: '04/11/2026',
      modePaiement: 'cheque_bancaire',
      chequeBanqueNum: 'CHQ-87654321',
      chequeBanqueDate: '02/11/2026',
      chequeBanqueAgence: 'BADR Agence Oran 310',
      chequePostalNum: '',
      chequePostalDate: '',
    };
    const gn51CalcFr = computeGN51(gn51DataFr);
    const gn51ValuesFr = mapGN51ToFieldValues(gn51DataFr, gn51CalcFr, 'fr');
    assertMappedValuesHaveCoordinates('GN51 FR', gn51ValuesFr, GN51_FIELD_COORDINATES_FR);
    const pdfBytes = await fillOfficialPdf({
      templateUrl: '/forms/gn51_fr.pdf',
      expectedPages: 2,
      fields: GN51_FIELD_COORDINATES_FR,
      values: gn51ValuesFr,
    });
    const doc = await PDFDocument.load(pdfBytes);
    const pageCount = doc.getPageCount();
    const dims = doc.getPages().map((p) => p.getSize());

    results.push({
      form: 'GN51',
      lang: 'French',
      pageCount,
      expectedPages: 2,
      pageDimensions: dims,
      fieldsCount: GN51_FIELD_COORDINATES_FR.length,
      pdfSizeBytes: pdfBytes.length,
      success: pageCount === 2 && pdfBytes.length > 10000,
      errors: pageCount !== 2 ? [`Expected 2 pages but got ${pageCount}`] : [],
    });
  } catch (err) {
    results.push({
      form: 'GN51',
      lang: 'French',
      pageCount: 0,
      expectedPages: 2,
      pageDimensions: [],
      fieldsCount: GN51_FIELD_COORDINATES_FR.length,
      pdfSizeBytes: 0,
      success: false,
      errors: [err instanceof Error ? err.message : String(err)],
    });
  }

  return results;
}

async function main() {
  console.log('Running Algerian Tax Form PDF Coordinate Test Suite...');
  const results = await runTestSuite();

  console.log('\n============================================================');
  console.log('RESULTS SUMMARY:');
  console.log('============================================================');

  let allPassed = true;
  for (const r of results) {
    const status = r.success ? '✓ PASSED' : '✗ FAILED';
    if (!r.success) allPassed = false;
    console.log(`[${status}] ${r.form} ${r.lang.padEnd(8)}: ${r.pageCount}/${r.expectedPages} pages, ${r.fieldsCount} fields, ${r.pdfSizeBytes} bytes`);
    if (r.errors.length > 0) {
      for (const e of r.errors) {
        console.log(`    Error: ${e}`);
      }
    }
  }

  console.log('============================================================');
  if (allPassed) {
    console.log('All 8 official Algerian tax form PDF variants PASSED successfully!');
    process.exit(0);
  } else {
    console.error('Some form variants failed validation.');
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Test suite runner crashed:', err);
  process.exit(1);
});
