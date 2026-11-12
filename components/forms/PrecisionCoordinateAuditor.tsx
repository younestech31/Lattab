'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { FormLocale, FormFieldCoord } from '@/lib/forms/types';
import {
  ptToMm,
  auditFormField,
  auditDigitGrids,
  categorizeField,
  generateCalibrationOverlayPdf,
  getSampleStressData,
  DigitGridAudit,
} from '@/lib/forms/precisionAuditor';
import { fillOfficialPdf, downloadPdfBytes } from '@/lib/forms/fillOfficialPdf';

import { GN17_FIELD_COORDINATES, GN17_FIELD_COORDINATES_FR } from '@/lib/forms/gn17/fields';
import { GN31_FIELD_COORDINATES, GN31_FIELD_COORDINATES_FR } from '@/lib/forms/gn31/fields';
import { GN8_FIELD_COORDINATES, GN8_FIELD_COORDINATES_FR } from '@/lib/forms/gn8/fields';
import { GN51_FIELD_COORDINATES, GN51_FIELD_COORDINATES_FR } from '@/lib/forms/gn51/fields';

import {
  Ruler,
  CheckCircle2,
  FileDown,
  Sparkles,
  Layers,
  Search,
  Grid3X3,
  Check,
  ShieldCheck,
  Sliders,
  FileCheck,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';

interface FormDefinitionMeta {
  slug: 'gn17' | 'gn31' | 'gn8' | 'gn51';
  code: string;
  titleAr: string;
  titleFr: string;
  pages: number;
  templateAr: string;
  templateFr: string;
  fieldsAr: FormFieldCoord[];
  fieldsFr: FormFieldCoord[];
}

const FORM_META: FormDefinitionMeta[] = [
  {
    slug: 'gn17',
    code: 'سلسلة ج رقم 17',
    titleAr: 'التصريح بفائض القيمة العقارية (ج 17)',
    titleFr: 'Déclaration de Plus-Value Immobilière (G 17)',
    pages: 2,
    templateAr: '/forms/gn17.pdf',
    templateFr: '/forms/gn17_fr.pdf',
    fieldsAr: GN17_FIELD_COORDINATES,
    fieldsFr: GN17_FIELD_COORDINATES_FR,
  },
  {
    slug: 'gn31',
    code: 'سلسلة ج رقم 31',
    titleAr: 'تصريح الرسم العقاري (ج 31)',
    titleFr: 'Déclaration de la Taxe Foncière (G 31)',
    pages: 4,
    templateAr: '/forms/gn31.pdf',
    templateFr: '/forms/gn31_fr.pdf',
    fieldsAr: GN31_FIELD_COORDINATES,
    fieldsFr: GN31_FIELD_COORDINATES_FR,
  },
  {
    slug: 'gn8',
    code: 'سلسلة ج رقم 08',
    titleAr: 'تصريح بالوجود (ج 08)',
    titleFr: 'Déclaration d\'Existence (G 08)',
    pages: 2,
    templateAr: '/forms/gn8.pdf',
    templateFr: '/forms/gn8_fr.pdf',
    fieldsAr: GN8_FIELD_COORDINATES,
    fieldsFr: GN8_FIELD_COORDINATES_FR,
  },
  {
    slug: 'gn51',
    code: 'سلسلة ج رقم 51',
    titleAr: 'تصريح مداخيل إيجار العقارات (ج 51)',
    titleFr: 'Déclaration des Revenus de Location (G 51)',
    pages: 2,
    templateAr: '/forms/gn51.pdf',
    templateFr: '/forms/gn51_fr.pdf',
    fieldsAr: GN51_FIELD_COORDINATES,
    fieldsFr: GN51_FIELD_COORDINATES_FR,
  },
];

export default function PrecisionCoordinateAuditor() {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  // Selected parameters
  const [selectedSlug, setSelectedSlug] = useState<'gn17' | 'gn31' | 'gn8' | 'gn51'>('gn17');
  const [selectedLang, setSelectedLang] = useState<FormLocale>(isAr ? 'ar' : 'fr');
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [unit, setUnit] = useState<'mm' | 'pt'>('mm');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Loading states
  const [isGeneratingCalib, setIsGeneratingCalib] = useState<boolean>(false);
  const [isGeneratingFilled, setIsGeneratingFilled] = useState<boolean>(false);
  const [auditVerdict, setAuditVerdict] = useState<string | null>(null);

  // Active form metadata & fields
  const currentForm = useMemo(() => {
    return FORM_META.find((f) => f.slug === selectedSlug) || FORM_META[0];
  }, [selectedSlug]);

  const activeFields = useMemo(() => {
    return selectedLang === 'ar' ? currentForm.fieldsAr : currentForm.fieldsFr;
  }, [currentForm, selectedLang]);

  const activeTemplateUrl = useMemo(() => {
    return selectedLang === 'ar' ? currentForm.templateAr : currentForm.templateFr;
  }, [currentForm, selectedLang]);

  // Read the dimensions from the selected PDF itself. Never assume that every
  // official template is an identical A4 page.
  const [templatePageDimensions, setTemplatePageDimensions] = useState<
    Array<{ widthPt: number; heightPt: number }>
  >([]);
  const [templateLoadState, setTemplateLoadState] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    setTemplateLoadState('loading');
    setTemplatePageDimensions([]);

    const loadTemplateDimensions = async () => {
      try {
        const response = await fetch(activeTemplateUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const pdfBytes = await response.arrayBuffer();
        const pdf = await PDFDocument.load(pdfBytes);
        const dimensions = pdf.getPages().map((page) => ({
          widthPt: page.getWidth(),
          heightPt: page.getHeight(),
        }));

        if (!cancelled) {
          setTemplatePageDimensions(dimensions);
          setTemplateLoadState('ready');
        }
      } catch {
        if (!cancelled) {
          setTemplateLoadState('error');
        }
      }
    };

    void loadTemplateDimensions();
    return () => {
      cancelled = true;
    };
  }, [activeTemplateUrl]);

  // Bounds are checked against the actual dimensions of the selected PDF page.
  const auditedFields = useMemo(() => {
    if (templateLoadState !== 'ready') return [];
    return activeFields.map((field) => {
      const pageDimensions = templatePageDimensions[field.page - 1] ?? {
        widthPt: 0,
        heightPt: 0,
      };
      return auditFormField(field, pageDimensions);
    });
  }, [activeFields, templatePageDimensions, templateLoadState]);

  // Digit grids on active form
  const digitGrids: DigitGridAudit[] = useMemo(() => {
    return auditDigitGrids(activeFields);
  }, [activeFields]);

  // This value measures consistency among the stored coordinates only. It is
  // not the physical offset between those coordinates and the printed boxes.
  const maxGridRegularityDeviationMm = useMemo(
    () => digitGrids.reduce((max, grid) => Math.max(max, grid.maxCenterDeviationMm), 0),
    [digitGrids]
  );

  // Filtered fields
  const filteredFields = useMemo(() => {
    return auditedFields.filter((f) => {
      if (selectedPage !== 0 && f.page !== selectedPage) return false;
      const cat = categorizeField(f.id);
      if (categoryFilter !== 'all' && cat.category !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return f.id.toLowerCase().includes(q) || cat.category.toLowerCase().includes(q);
      }
      return true;
    });
  }, [auditedFields, selectedPage, categoryFilter, searchQuery]);

  // Handler: Generate Calibration PDF with millimeter overlay
  const handleDownloadCalibrationPdf = async () => {
    try {
      setIsGeneratingCalib(true);
      const res = await fetch(activeTemplateUrl);
      if (!res.ok) throw new Error('تعذر تحميل قالب PDF');
      const templateBytes = await res.arrayBuffer();

      let fontBytes: ArrayBuffer | undefined;
      try {
        const fontRes = await fetch('/fonts/Amiri-Regular.ttf');
        if (fontRes.ok) {
          fontBytes = await fontRes.arrayBuffer();
        }
      } catch {
        // Font fallback
      }

      const calibBytes = await generateCalibrationOverlayPdf({
        templateBytes,
        fields: activeFields,
        lang: selectedLang,
        formTitle: `${currentForm.code} [${selectedLang.toUpperCase()}]`,
        fontBytes,
      });

      downloadPdfBytes(calibBytes, `${currentForm.slug}-${selectedLang}-calibration-overlay.pdf`);
    } catch (err) {
      alert(`فشل إنشاء نموذج المعايرة: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsGeneratingCalib(false);
    }
  };

  // Handler: Generate sample filled PDF
  const handleDownloadFilledPdf = async () => {
    try {
      setIsGeneratingFilled(true);
      const sampleData = getSampleStressData(currentForm.slug, selectedLang);
      const filledBytes = await fillOfficialPdf({
        templateUrl: activeTemplateUrl,
        fields: activeFields,
        values: sampleData,
        expectedPages: currentForm.pages,
      });
      downloadPdfBytes(filledBytes, `${currentForm.slug}-${selectedLang}-sample-filled.pdf`);
    } catch (err) {
      alert(`فشل إنشاء النموذج المعبأ: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsGeneratingFilled(false);
    }
  };

  // Handler: Instant Client-side Verification Check
  const handleRunInstantAudit = () => {
    if (templateLoadState !== 'ready') {
      setAuditVerdict(
        isAr
          ? 'تعذر إتمام الفحص: لم يتم تحميل ملف PDF الأصلي وقراءة أبعاد صفحاته.'
          : 'Audit impossible : le PDF source n’a pas été chargé et ses dimensions ne sont pas disponibles.'
      );
      return;
    }

    const invalidFields = auditedFields.filter((field) => !field.withinPageBounds);
    const misalignedGrids = digitGrids.filter((grid) => !grid.isAligned);
    const pageCountMismatch = templatePageDimensions.length !== currentForm.pages;

    if (invalidFields.length === 0 && misalignedGrids.length === 0 && !pageCountMismatch) {
      setAuditVerdict(
        isAr
          ? `اجتاز ${activeFields.length} حقلاً فحص حدود صفحات PDF، واجتازت شبكات الأرقام فحص الانتظام الحسابي. هذا الفحص لا يقيس الإزاحة عن الخانات المطبوعة؛ لا تُعتمد الإحداثيات للطباعة النهائية قبل المقارنة البصرية واختبار الطباعة بالحجم الفعلي 100%.`
          : `${activeFields.length} champs respectent les limites du PDF et les grilles passent le contrôle mathématique de régularité. Ce résultat ne mesure pas l’écart avec les cases imprimées ; une comparaison visuelle et un essai à 100 % restent nécessaires avant validation.`
      );
    } else {
      setAuditVerdict(
        isAr
          ? `توجد نقاط تحتاج مراجعة: ${invalidFields.length} حقول خارج حدود صفحات PDF، ${misalignedGrids.length} شبكات غير منتظمة، ${pageCountMismatch ? 'وعدد صفحات القالب لا يطابق التعريف البرمجي' : 'وعدد الصفحات مطابق'}.`
          : `Points à corriger : ${invalidFields.length} champs hors page, ${misalignedGrids.length} grilles irrégulières, ${pageCountMismatch ? 'et le nombre de pages ne correspond pas à la définition' : 'nombre de pages conforme'}.`
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Breadcrumb / Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 mb-6">
        <div className="flex items-center gap-2">
          <Link
            href={isAr ? '/formulaires' : '/fr/formulaires'}
            className="hover:text-emerald-700 font-medium transition"
          >
            {isAr ? 'فهرس الاستمارات الرسمية' : 'Formulaires officiels'}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">
            {isAr ? 'مدقق الإحداثيات الملمترية' : 'Auditeur métrique'}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-lg text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'فحص هندسي أولي — المعايرة المرجعية قيد التحقق' : 'Contrôle géométrique — alignement de référence à vérifier'}</span>
        </div>
      </div>

      {/* Main Hero Card */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-8 mb-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold mb-4">
            <Ruler className="w-4 h-4" />
            <span>{isAr ? 'أداة الضبط والتدقيق الطباعي الرسمي' : 'Outil d\'Audit & Calibration Métrique DGI'}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">
            {isAr
              ? 'مدقق إحداثيات الاستمارات الرسمية بالميلمتر الدقيق'
              : 'Auditeur de Précision Métrique des Formulaires Fiscaux'}
          </h1>

          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-6">
            {isAr
              ? 'فحص هندسي لإحداثيات تعبئة الاستمارات الرسمية وقراءة أبعاد ملف PDF الفعلي. يختبر هذا الفحص حدود الصفحة وانتظام الشبكات المسجلة؛ أما إثبات التطابق مع الخانات المطبوعة فيتطلب مقارنة مرجعية واختبار طباعة بالحجم الفعلي.'
              : 'Contrôle géométrique des coordonnées et lecture des dimensions réelles du PDF. Le contrôle vérifie les limites de page et la régularité interne des grilles ; l’alignement sur les cases imprimées doit encore être confirmé par comparaison visuelle et impression à taille réelle.'}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadCalibrationPdf}
              disabled={isGeneratingCalib}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-sm transition shadow"
            >
              <FileDown className="w-4 h-4 text-emerald-700" />
              <span>
                {isGeneratingCalib
                  ? isAr
                    ? 'جارٍ توليد المعايرة...'
                    : 'Génération...'
                  : isAr
                  ? 'تحميل نموذج المعايرة الملمترية (PDF)'
                  : 'Télécharger gabarit de calibration (PDF)'}
              </span>
            </button>

            <button
              onClick={handleDownloadFilledPdf}
              disabled={isGeneratingFilled}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700/60 hover:bg-emerald-700 border border-emerald-400/30 text-white font-medium text-sm transition"
            >
              <FileCheck className="w-4 h-4" />
              <span>
                {isGeneratingFilled
                  ? isAr
                    ? 'جارٍ التعبئة...'
                    : 'Remplissage...'
                  : isAr
                  ? 'تحميل نموذج معبأ نموذجياً (PDF)'
                  : 'Télécharger spécimen rempli (PDF)'}
              </span>
            </button>

            <button
              onClick={handleRunInstantAudit}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-emerald-300 font-medium text-sm transition"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{isAr ? 'فحص آلي فوري' : 'Audit instantané'}</span>
            </button>
          </div>

          {auditVerdict && (
            <div className="mt-5 p-3.5 rounded-xl bg-emerald-800/50 border border-emerald-400/40 text-xs sm:text-sm text-emerald-100 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-300 flex-shrink-0" />
              <span>{auditVerdict}</span>
            </div>
          )}
        </div>
      </div>

      {/* Control Bar: Form Selection & Parameters */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Form Choice */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              {isAr ? 'اختر الاستمارة الرسمية' : 'Formulaire officiel'}
            </label>
            <select
              value={selectedSlug}
              onChange={(e) => {
                setSelectedSlug(e.target.value as 'gn17' | 'gn31' | 'gn8' | 'gn51');
                setSelectedPage(1);
              }}
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              {FORM_META.map((f) => (
                <option key={f.slug} value={f.slug}>
                  {isAr ? f.titleAr : f.titleFr}
                </option>
              ))}
            </select>
          </div>

          {/* Language Choice */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              {isAr ? 'لغة القالب المعتمد' : 'Langue du gabarit'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedLang('ar')}
                className={`py-2 text-xs font-bold rounded-xl border transition ${
                  selectedLang === 'ar'
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                العربية (AR)
              </button>
              <button
                type="button"
                onClick={() => setSelectedLang('fr')}
                className={`py-2 text-xs font-bold rounded-xl border transition ${
                  selectedLang === 'fr'
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                Français (FR)
              </button>
            </div>
          </div>

          {/* Page Choice */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              {isAr ? 'رقم الصفحة المعروضة' : 'Page à inspecter'}
            </label>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedPage(0)}
                className={`flex-1 py-2 text-xs font-bold rounded-xl border transition ${
                  selectedPage === 0
                    ? 'bg-slate-800 text-white border-slate-800'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {isAr ? 'الكل' : 'Toutes'}
              </button>
              {Array.from({ length: currentForm.pages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setSelectedPage(p)}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl border transition ${
                    selectedPage === p
                      ? 'bg-emerald-700 text-white border-emerald-700'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Metric / Point toggle */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              {isAr ? 'وحدة القياس المعروضة' : 'Unité de mesure'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setUnit('mm')}
                className={`py-2 text-xs font-bold rounded-xl border transition ${
                  unit === 'mm'
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                الميلمتر (mm)
              </button>
              <button
                type="button"
                onClick={() => setUnit('pt')}
                className={`py-2 text-xs font-bold rounded-xl border transition ${
                  unit === 'pt'
                    ? 'bg-slate-800 text-white border-slate-800 shadow-sm'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                النقاط (pt)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-1">
            <span className="text-xs font-medium">{isAr ? 'إجمالي الحقول' : 'Total champs'}</span>
            <Layers className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{activeFields.length}</div>
          <div className="text-[11px] text-gray-500 mt-1">
            {isAr ? `${currentForm.pages} صفحات A4 رسمية` : `${currentForm.pages} pages A4 DGI`}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-1">
            <span className="text-xs font-medium">{isAr ? 'شبكات الخانات' : 'Grilles de chiffres'}</span>
            <Grid3X3 className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-900">{digitGrids.length}</div>
          <div className="text-[11px] text-gray-500 mt-1">
            {digitGrids.length > 0 ? digitGrids.map((g) => g.prefix.toUpperCase()).join(' • ') : '—'}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-1">
            <span className="text-xs font-medium">{isAr ? 'أقصى انحراف' : 'Écart max'}</span>
            <Ruler className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-emerald-700">
            {digitGrids.length > 0 ? `${maxGridRegularityDeviationMm.toFixed(2)} مم` : '—'}
          </div>
          <div className="text-[11px] text-gray-600 font-medium mt-1">
            {isAr ? 'انتظام داخلي للإحداثيات المسجلة فقط' : 'Régularité interne des coordonnées uniquement'}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-1">
            <span className="text-xs font-medium">{isAr ? 'أبعاد الصفحة' : 'Dimensions A4'}</span>
            <ShieldCheck className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {templatePageDimensions[0]
              ? `${ptToMm(templatePageDimensions[0].widthPt).toFixed(2)} × ${ptToMm(templatePageDimensions[0].heightPt).toFixed(2)}`
              : '—'}
          </div>
          <div className="text-[11px] text-gray-500 mt-1">
            {templateLoadState === 'ready'
              ? isAr ? 'مم — مستخرجة من ملف PDF المختار' : 'mm — lues depuis le PDF sélectionné'
              : templateLoadState === 'loading'
              ? isAr ? 'جارٍ قراءة القالب...' : 'Lecture du PDF...'
              : isAr ? 'تعذر تحميل القالب' : 'PDF indisponible'}
          </div>
        </div>
      </div>

      {/* Digit Grid Inspection Card (if any) */}
      {digitGrids.length > 0 && (
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-2 font-bold text-purple-900 mb-3 text-base">
            <Grid3X3 className="w-5 h-5 text-purple-700" />
            <span>
              {isAr
                ? 'فحص شبكات الأرقام المفككة (NIF / NIN / NAI)'
                : 'Inspection des grilles de saisie segmentées (NIF / NIN / NAI)'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {digitGrids.map((grid) => (
              <div
                key={`${grid.prefix}_${grid.page}`}
                className="bg-white rounded-xl border border-purple-100 p-4 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extrabold text-sm text-purple-900 uppercase">
                    {grid.prefix} ({grid.count} خانات)
                  </span>
                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded border ${
                    grid.isAligned
                      ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                      : 'text-amber-800 bg-amber-50 border-amber-200'
                  }`}>
                    {grid.isAligned ? <Check className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                    <span>{grid.isAligned ? (isAr ? 'منتظمة حسابياً' : 'Régulière') : (isAr ? 'تحتاج مراجعة' : 'À vérifier')}</span>
                  </span>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>
                    {isAr ? 'عرض الخانة المربعة:' : 'Largeur case :'} <span className="font-bold">{grid.cellWidthMm} مم</span>
                  </div>
                  <div>
                    {isAr ? 'خطوة التباعد المسجلة:' : 'Pas enregistré :'} <span className="font-bold">{grid.stepPitchMm} مم</span>
                  </div>
                  <div>
                    {isAr ? 'موضع البداية المسجل من اليسار:' : 'Départ enregistré :'} <span className="font-bold">{grid.startMm} مم</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-gray-400 absolute start-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'ابحث عن معرف الحقل (مثل: nif, nom, commune...)' : 'Rechercher un champ...'}
            className="w-full ps-9 pe-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {[
            { id: 'all', labelAr: 'الكل', labelFr: 'Tous' },
            { id: 'digit_box', labelAr: 'خانات الأرقام', labelFr: 'Cases chiffres' },
            { id: 'parties', labelAr: 'الأطراف', labelFr: 'Parties' },
            { id: 'property', labelAr: 'العقار / النشاط', labelFr: 'Bien' },
            { id: 'tax_table', labelAr: 'جداول المبالغ', labelFr: 'Montants' },
            { id: 'checkbox', labelAr: 'خانات الاختيار', labelFr: 'Cocher' },
            { id: 'header', labelAr: 'الترويسة', labelFr: 'En-tête' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                categoryFilter === cat.id
                  ? 'bg-emerald-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelFr}
            </button>
          ))}
        </div>
      </div>

      {/* Precision Fields Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-start">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold">
              <tr>
                <th className="p-3 text-start">{isAr ? 'معرف الحقل' : 'Identifiant (ID)'}</th>
                <th className="p-3 text-center">{isAr ? 'الصفحة' : 'Page'}</th>
                <th className="p-3 text-start">
                  {unit === 'mm' ? (isAr ? 'الموضع X (من اليسار)' : 'X (mm gauche)') : 'X (pt)'}
                </th>
                <th className="p-3 text-start">
                  {unit === 'mm' ? (isAr ? 'الموضع Y (من الأسفل)' : 'Y (mm bas)') : 'Y (pt)'}
                </th>
                {unit === 'mm' && (
                  <th className="p-3 text-start">{isAr ? 'الموضع Y (من الأعلى)' : 'Y (mm haut)'}</th>
                )}
                <th className="p-3 text-start">
                  {unit === 'mm' ? (isAr ? 'العرض المخصص' : 'Largeur (mm)') : 'Largeur (pt)'}
                </th>
                <th className="p-3 text-center">{isAr ? 'حجم الخط' : 'Taille'}</th>
                <th className="p-3 text-center">{isAr ? 'المحاذاة' : 'Alignement'}</th>
                <th className="p-3 text-center">{isAr ? 'النوع' : 'Catégorie'}</th>
                <th className="p-3 text-center">{isAr ? 'حالة الضبط' : 'Précision'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800 font-mono">
              {filteredFields.map((field) => {
                const cat = categorizeField(field.id);
                return (
                  <tr key={`${field.id}_p${field.page}`} className="hover:bg-gray-50 transition">
                    <td className="p-3 font-semibold text-gray-900 font-sans flex items-center gap-1.5">
                      <span className="font-mono text-xs text-emerald-800">{field.id}</span>
                    </td>
                    <td className="p-3 text-center">{field.page}</td>
                    <td className="p-3 text-start">
                      {unit === 'mm' ? `${field.metric.xMm.toFixed(2)} مم` : `${field.xPt} pt`}
                    </td>
                    <td className="p-3 text-start">
                      {unit === 'mm' ? `${field.metric.yBottomMm.toFixed(2)} مم` : `${field.yPt} pt`}
                    </td>
                    {unit === 'mm' && (
                      <td className="p-3 text-start text-gray-500">
                        {`${field.metric.yTopMm.toFixed(2)} مم`}
                      </td>
                    )}
                    <td className="p-3 text-start">
                      {unit === 'mm' ? `${field.metric.widthMm.toFixed(2)} مم` : `${field.maxWidthPt} pt`}
                    </td>
                    <td className="p-3 text-center">{field.sizePt} pt</td>
                    <td className="p-3 text-center font-sans">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-gray-100 font-medium">
                        {field.align === 'right'
                          ? isAr
                            ? 'يمين'
                            : 'Droite'
                          : field.align === 'center'
                          ? isAr
                            ? 'وسط'
                            : 'Centre'
                          : isAr
                          ? 'يسار'
                          : 'Gauche'}
                      </span>
                    </td>
                    <td className="p-3 text-center font-sans">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          cat.isDigitBox
                            ? 'bg-purple-100 text-purple-800'
                            : cat.isCheckbox
                            ? 'bg-emerald-100 text-emerald-800'
                            : field.format === 'currency'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {cat.category}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                        field.withinPageBounds
                          ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                          : 'text-red-700 bg-red-50 border-red-200'
                      }`}>
                        {field.withinPageBounds ? <Check className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                        <span>{field.withinPageBounds ? (isAr ? 'داخل حدود PDF' : 'Dans le PDF') : (isAr ? 'خارج حدود PDF' : 'Hors PDF')}</span>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredFields.length === 0 && (
          <div className="p-8 text-center text-gray-500 text-sm">
            {templateLoadState === 'loading'
              ? isAr ? 'جارٍ تحميل القالب وقراءة أبعاد صفحاته...' : 'Chargement du PDF et lecture des dimensions...'
              : templateLoadState === 'error'
              ? isAr ? 'تعذر تحميل ملف PDF المحدد؛ لا يمكن إجراء فحص الحدود.' : 'Impossible de charger le PDF sélectionné.'
              : isAr ? 'لا توجد حقول مطابقة لخيارات البحث.' : 'Aucun champ ne correspond aux critères.'}
          </div>
        )}
      </div>

      {/* Explanatory Technical Notes */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs text-gray-600 space-y-2">
        <div className="flex items-center gap-2 font-bold text-gray-800 text-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>
            {isAr
              ? 'معيار الدقة المليمترية الطباعية (المادة 72 نقطة / البوصة = 25.4 مم)'
              : 'Standard Métrique de Précision DGI (72 pt / inch = 25.4 mm)'}
          </span>
        </div>
        <p className="leading-relaxed">
          {isAr
            ? 'يعتمد التحويل الحسابي على 1 pt = 0.352778 mm، وتُقرأ أبعاد كل صفحة من ملف PDF المختار. قيم X وY وعرض الحقل هي إحداثيات مسجلة في الشيفرة؛ وانتظام شبكة الأرقام يقارن الإحداثيات بعضها ببعض فقط. لا تمثل نتيجة 0.00 مم قياساً للإزاحة عن حدود الخانات المطبوعة. يجب اعتماد مرجع بصري من النموذج الأصلي ثم اختبار الطباعة بخيار الحجم الفعلي (100%) قبل المصادقة على أي حقل.'
            : 'La conversion est de 1 pt = 0,352778 mm et les dimensions de chaque page sont lues depuis le PDF sélectionné. Les valeurs X, Y et les largeurs sont des coordonnées enregistrées ; la régularité de grille compare uniquement ces coordonnées entre elles. Un résultat de 0,00 mm ne mesure pas l’écart avec les cases imprimées. Une référence visuelle tirée du formulaire source et un essai d’impression à 100 % sont obligatoires avant validation.'}
        </p>
      </div>
    </div>
  );
}
