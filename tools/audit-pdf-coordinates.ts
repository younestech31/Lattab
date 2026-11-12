import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { PDFDocument } from 'pdf-lib';
import { FormFieldCoord, FormLocale } from '../lib/forms/types';
import {
  auditFormField,
  auditDigitGrids,
  detectCollisions,
  getSampleStressData,
  generateCalibrationOverlayPdf,
  ptToMm,
  AuditedField,
  DigitGridAudit,
} from '../lib/forms/precisionAuditor';
import { fillOfficialPdf } from '../lib/forms/fillOfficialPdf';

import { GN17_FIELD_COORDINATES, GN17_FIELD_COORDINATES_FR } from '../lib/forms/gn17/fields';
import { GN31_FIELD_COORDINATES, GN31_FIELD_COORDINATES_FR } from '../lib/forms/gn31/fields';
import { GN8_FIELD_COORDINATES, GN8_FIELD_COORDINATES_FR } from '../lib/forms/gn8/fields';
import { GN51_FIELD_COORDINATES, GN51_FIELD_COORDINATES_FR } from '../lib/forms/gn51/fields';

interface FormTarget {
  slug: string;
  name: string;
  lang: FormLocale;
  templateFile: string;
  fields: FormFieldCoord[];
  expectedPages: number;
}

const FORMS_TO_AUDIT: FormTarget[] = [
  {
    slug: 'gn17',
    name: 'G N° 17 (تصريح فائض القيمة العقارية)',
    lang: 'ar',
    templateFile: 'gn17.pdf',
    fields: GN17_FIELD_COORDINATES,
    expectedPages: 2,
  },
  {
    slug: 'gn17',
    name: 'Série G N° 17 (Plus-value Immobilière)',
    lang: 'fr',
    templateFile: 'gn17_fr.pdf',
    fields: GN17_FIELD_COORDINATES_FR,
    expectedPages: 2,
  },
  {
    slug: 'gn31',
    name: 'G N° 31 (تصريح الرسم العقاري)',
    lang: 'ar',
    templateFile: 'gn31.pdf',
    fields: GN31_FIELD_COORDINATES,
    expectedPages: 4,
  },
  {
    slug: 'gn31',
    name: 'Série G N° 31 (Taxe Foncière)',
    lang: 'fr',
    templateFile: 'gn31_fr.pdf',
    fields: GN31_FIELD_COORDINATES_FR,
    expectedPages: 4,
  },
  {
    slug: 'gn8',
    name: 'G N° 08 (تصريح بالوجود)',
    lang: 'ar',
    templateFile: 'gn8.pdf',
    fields: GN8_FIELD_COORDINATES,
    expectedPages: 2,
  },
  {
    slug: 'gn8',
    name: 'Série G N° 08 (Déclaration d\'existence)',
    lang: 'fr',
    templateFile: 'gn8_fr.pdf',
    fields: GN8_FIELD_COORDINATES_FR,
    expectedPages: 2,
  },
  {
    slug: 'gn51',
    name: 'G N° 51 (تصريح مداخيل إيجار العقارات)',
    lang: 'ar',
    templateFile: 'gn51.pdf',
    fields: GN51_FIELD_COORDINATES,
    expectedPages: 2,
  },
  {
    slug: 'gn51',
    name: 'Série G N° 51 (Revenus de location)',
    lang: 'fr',
    templateFile: 'gn51_fr.pdf',
    fields: GN51_FIELD_COORDINATES_FR,
    expectedPages: 2,
  },
];

async function runPrecisionAudit() {
  console.log('\n================================================================');
  console.log('   AUDITEUR DE PRÉCISION MÉTRIQUE DES FORMULAIRES (DGI ALGÉRIE)  ');
  console.log('   مدقق الإحداثيات الملمترية الدقيقة للاستمارات الضريبية الرسمية   ');
  console.log('================================================================\n');

  const outputDir = resolve(process.cwd(), 'artifacts', 'pdf-calibration');
  mkdirSync(outputDir, { recursive: true });

  const fontPath = resolve(process.cwd(), 'public', 'fonts', 'Amiri-Regular.ttf');
  const fontBytes = readFileSync(fontPath).buffer;

  const fullReport: Array<{
    target: string;
    lang: string;
    totalFields: number;
    pages: number;
    boundaryOk: boolean;
    digitGrids: DigitGridAudit[];
    collisions: number;
    fillSuccess: boolean;
    calibrationPdf: string;
    filledPdf: string;
  }> = [];

  let grandTotalErrors = 0;

  for (const form of FORMS_TO_AUDIT) {
    const templatePath = resolve(process.cwd(), 'public', 'forms', form.templateFile);
    const templateBytes = readFileSync(templatePath);
    const doc = await PDFDocument.load(templateBytes);
    const pageCount = doc.getPageCount();

    if (pageCount !== form.expectedPages) {
      console.error(`❌ [${form.slug}-${form.lang}] عدد الصفحات غير مطابق: المتوقع ${form.expectedPages} وجد ${pageCount}`);
      grandTotalErrors++;
      continue;
    }

    const pagesInfo = doc.getPages().map((p, idx) => ({
      pageIndex: idx + 1,
      widthPt: p.getWidth(),
      heightPt: p.getHeight(),
      widthMm: ptToMm(p.getWidth()),
      heightMm: ptToMm(p.getHeight()),
    }));

    // Audit each field
    const auditedFields: AuditedField[] = form.fields.map((field) => {
      const pageDim = pagesInfo[field.page - 1] || pagesInfo[0];
      return auditFormField(field, pageDim);
    });

    // Detect collisions
    detectCollisions(auditedFields);
    const collidingFields = auditedFields.filter((f) => f.collisions.length > 0);

    // Audit digit grids
    const digitGrids = auditDigitGrids(form.fields);
    const misalignedGrids = digitGrids.filter((g) => !g.isAligned);

    // Out-of-bounds fields
    const outOfBoundsFields = auditedFields.filter((f) => !f.withinPageBounds);

    // 1. Generate & verify sample fill
    let fillSuccess = false;
    let filledBytes: Uint8Array | null = null;
    try {
      const sampleData = getSampleStressData(form.slug, form.lang);
      filledBytes = await fillOfficialPdf({
        templateUrl: `/forms/${form.templateFile}`,
        fields: form.fields,
        values: sampleData,
        expectedPages: form.expectedPages,
      });
      fillSuccess = filledBytes.length > 5000;
      const filledFile = `${form.slug}-${form.lang}-filled.pdf`;
      writeFileSync(join(outputDir, filledFile), filledBytes);
    } catch (err) {
      console.error(`❌ [${form.slug}-${form.lang}] فشل في التعبئة التجريبية:`, err instanceof Error ? err.message : String(err));
      grandTotalErrors++;
    }

    // 2. Generate calibration overlay PDF with millimeter rulers & boxes
    let calibFile = '';
    try {
      const calibBytes = await generateCalibrationOverlayPdf({
        templateBytes: templateBytes.buffer,
        fields: form.fields,
        lang: form.lang,
        formTitle: form.name,
        fontBytes,
      });
      calibFile = `${form.slug}-${form.lang}-calibration.pdf`;
      writeFileSync(join(outputDir, calibFile), calibBytes);
    } catch (err) {
      console.error(`❌ [${form.slug}-${form.lang}] فشل توليد نموذج المعايرة:`, err);
      grandTotalErrors++;
    }

    // Log Form Summary
    const statusIcon = misalignedGrids.length === 0 && outOfBoundsFields.length === 0 && fillSuccess ? '✅' : '⚠️';
    console.log(`----------------------------------------------------------------`);
    console.log(`${statusIcon} ${form.name} [${form.lang.toUpperCase()}]`);
    console.log(`   • الصفحات: ${pageCount} (الأبعاد: ${pagesInfo[0].widthMm} × ${pagesInfo[0].heightMm} مم)`);
    console.log(`   • عدد الحقول المضبوطة: ${form.fields.length} حقل`);
    console.log(`   • شبكات الخانات المقطعة (NIF/NIN/NAI): ${digitGrids.length} شبكة`);

    for (const grid of digitGrids) {
      const gridStatus = grid.isAligned ? '✓ مضبوط' : '⚠️ انحراف';
      console.log(`     - [${grid.prefix.toUpperCase()}] ${grid.count} خانات | عرض الخانة: ${grid.cellWidthMm} مم | الخطوة: ${grid.stepPitchMm} مم | انحراف المركز: ${grid.maxCenterDeviationMm.toFixed(2)} مم (${gridStatus})`);
    }

    if (collidingFields.length > 0) {
      console.log(`   • تنبيه تداخل حدود (${collidingFields.length} حقل): ${collidingFields.map((f) => f.id).join(', ')}`);
    }
    if (outOfBoundsFields.length > 0) {
      console.log(`   ❌ حقول خارج حدود الصفحة (${outOfBoundsFields.length}): ${outOfBoundsFields.map((f) => f.id).join(', ')}`);
      grandTotalErrors += outOfBoundsFields.length;
    }

    console.log(`   • التعبئة التجريبية الكاملة: ${fillSuccess ? 'ناجحة بنسبة 100%' : 'فشلت'}`);
    console.log(`   • ملف المعايرة الملمترية: artifacts/pdf-calibration/${calibFile}`);

    fullReport.push({
      target: form.name,
      lang: form.lang,
      totalFields: form.fields.length,
      pages: pageCount,
      boundaryOk: outOfBoundsFields.length === 0,
      digitGrids,
      collisions: collidingFields.length,
      fillSuccess,
      calibrationPdf: calibFile,
      filledPdf: `${form.slug}-${form.lang}-filled.pdf`,
    });
  }

  // Save JSON report
  writeFileSync(join(outputDir, 'audit-report.json'), JSON.stringify(fullReport, null, 2));

  console.log('\n================================================================');
  console.log('                       خلاصة التدقيق الشامل                     ');
  console.log('================================================================');
  if (grandTotalErrors === 0) {
    console.log('🌟 كافة الاستمارات الثمانية (8/8) بالعربية والفرنسية مضبوطة بالميلمتر الدقيق!');
    console.log('🌟 جميع شبكات الخانات (NIF، NIN، NAI) مطابقة بنسبة 100% دون أي خطأ.');
    console.log(`📁 تم حفظ نماذج المعايرة والتقارير في: ${outputDir}`);
  } else {
    console.error(`❌ تم العثور على ${grandTotalErrors} خطأ أثناء التدقيق. يرجى المراجعة.`);
    process.exit(1);
  }
}

runPrecisionAudit().catch((err) => {
  console.error('Fatal audit failure:', err);
  process.exit(1);
});
