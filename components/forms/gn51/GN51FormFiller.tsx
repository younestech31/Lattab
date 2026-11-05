'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLang } from '@/lib/i18n';
import { getFormBySlug } from '@/lib/forms/registry';
import { GN51FormData, initialGN51Values, gn51FormSchema } from '@/lib/forms/gn51/schema';
import { computeGN51 } from '@/lib/forms/gn51/compute';
import {
  GN51_FIELD_COORDINATES,
  GN51_FIELD_COORDINATES_FR,
  mapGN51ToFieldValues,
} from '@/lib/forms/gn51/fields';
import { fillOfficialPdf, downloadPdfBytes } from '@/lib/forms/fillOfficialPdf';
import { loadDraft, saveDraft, clearDraft } from '@/lib/forms/draftStorage';

import FormWizardShell from '@/components/forms/FormWizardShell';
import GN51Step1Parties from './GN51Step1Parties';
import GN51Step2Property from './GN51Step2Property';
import GN51Step3Financials from './GN51Step3Financials';
import GN51Step4Payment from './GN51Step4Payment';

function readGN51Draft() {
  return loadDraft<GN51FormData>('gn51', (value) => {
    const parsed = gn51FormSchema.partial().safeParse(value);
    return parsed.success ? { ...initialGN51Values, ...parsed.data } : null;
  });
}

export default function GN51FormFiller() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const searchParams = useSearchParams();
  const isDebug = searchParams.get('debug') === '1';

  const formDef = getFormBySlug('gn51');
  const [data, setData] = useState<GN51FormData>(initialGN51Values);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const isMountedRef = useRef(false);
  const skipNextSaveRef = useRef(false);

  // Load and validate the saved draft only after hydration to keep server and
  // first client render identical and avoid rendering unvalidated stored data.
  useEffect(() => {
    const draft = readGN51Draft();
    if (draft?.data) {
      setData(draft.data);
      setSavedAt(draft.savedAt);
    }
  }, []);

  // Debounced auto-save to browser localStorage (500ms)
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    if (skipNextSaveRef.current) {
      skipNextSaveRef.current = false;
      return;
    }
    const timer = setTimeout(() => {
      const saved = saveDraft('gn51', data);
      setSavedAt(saved ? new Date().toISOString() : null);
    }, 500);
    return () => clearTimeout(timer);
  }, [data]);

  const updateData = (fields: Partial<GN51FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const handleClearDraft = () => {
    clearDraft('gn51');
    skipNextSaveRef.current = true;
    setData(initialGN51Values);
    setSavedAt(null);
  };

  // Live tax calculations
  const calcResult = useMemo(() => computeGN51(data), [data]);

  const stepTitles = [
    {
      title: isAr ? 'أطراف الإيجار' : 'Parties',
      subtitle: isAr ? 'المؤجر والمستأجر' : 'Bailleur & Preneur',
    },
    {
      title: isAr ? 'العقار المؤجر' : 'Bien loué',
      subtitle: isAr ? 'الموقع ومدة العقد' : 'Affectation & contrat',
    },
    {
      title: isAr ? 'المبالغ والضريبة' : 'Loyers & IRG',
      subtitle: isAr ? 'حساب الضريبة المستحقة' : 'Liquidation de l\'IRG',
    },
    {
      title: isAr ? 'التسديد والتحميل' : 'Paiement & Dépôt',
      subtitle: isAr ? 'طريقة الدفع وملف PDF' : 'Règlement & PDF officiel',
    },
  ];

  const handleDownload = async () => {
    if (!formDef) return;
    if (calcResult.thresholdMismatch) {
      setDownloadError(isAr
        ? 'تعذر إنشاء ج51: يجب أن يتوافق مجموع الإيجارات السنوي مع شريحة 1.800.000 دج.'
        : 'Impossible de générer G51 : le total annuel doit correspondre au seuil de 1.800.000 DA.');
      return;
    }
    setIsDownloading(true);
    setDownloadError(null);

    try {
      const isFr = lang === 'fr';
      const templateUrl = isFr && formDef.templatePathFr ? formDef.templatePathFr : formDef.templatePath;
      const fieldCoords = isFr ? GN51_FIELD_COORDINATES_FR : GN51_FIELD_COORDINATES;
      const fieldValues = mapGN51ToFieldValues(data, calcResult, lang as 'ar' | 'fr');

      const pdfBytes = await fillOfficialPdf({
        templateUrl,
        expectedPages: formDef.pages,
        fields: fieldCoords,
        values: fieldValues,
        debug: isDebug,
      });

      const dateStr = new Date().toISOString().split('T')[0];
      const fileName = isAr
        ? `استمارة_ج51_إيجار_عقارات_${dateStr}.pdf`
        : `Formulaire_G51_Location_Immobiliere_${dateStr}.pdf`;

      downloadPdfBytes(pdfBytes, fileName);
    } catch (err: unknown) {
      console.error('GN51 PDF generation error:', err);
      const msg = err instanceof Error ? err.message : String(err);
      setDownloadError(
        msg ||
          (isAr
            ? 'حدث خطأ أثناء إعداد ملف PDF. يرجى التأكد من اتصالك بالإنترنت والمحاولة مجدداً.'
            : 'Erreur lors de la génération du PDF. Veuillez vérifier votre connexion et réessayer.')
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const formatSavedTime = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return isNaN(d.getTime())
        ? ''
        : d.toLocaleTimeString(isAr ? 'ar-DZ' : 'fr-DZ', { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  if (!formDef) {
    return (
      <div className="container mx-auto px-4 py-16 text-center text-gray-600">
        Formulaire non trouvé.
      </div>
    );
  }

  return (
    <div>
      {downloadError && (
        <div className="container mx-auto px-4 max-w-5xl mb-4">
          <div className="bg-red-50 border border-red-200 text-red-800 text-sm p-4 rounded-xl">
            {downloadError}
          </div>
        </div>
      )}

      {/* Draft Status Banner */}
      {savedAt && (
        <div className="container mx-auto px-4 max-w-5xl mb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600 bg-emerald-50/70 border border-emerald-200/80 px-3.5 py-2 rounded-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span className="font-medium text-emerald-900">
                {isAr
                  ? `مسودة محفوظة على هذا الجهاز (${formatSavedTime(savedAt)})`
                  : `Brouillon enregistré sur cet appareil (${formatSavedTime(savedAt)})`}
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-500">
                {isAr
                  ? 'تُحفظ على جهازك في هذا المتصفح فقط وبدون تخزين على الخادم.'
                  : 'Enregistré sur votre appareil dans ce navigateur uniquement, sans envoi au serveur.'}
              </span>
            </div>
            <button
              type="button"
              onClick={handleClearDraft}
              className="text-gray-500 hover:text-red-600 underline transition text-xs font-medium cursor-pointer"
            >
              {isAr ? 'مسح المسودة وإعادة التعيين' : 'Effacer le brouillon et réinitialiser'}
            </button>
          </div>
        </div>
      )}

      <FormWizardShell
        form={formDef}
        currentStep={currentStep}
        totalSteps={4}
        stepTitles={stepTitles}
        onStepChange={(s) => {
          window.scrollTo({ top: 120, behavior: 'smooth' });
          setCurrentStep(s);
        }}
        onDownload={handleDownload}
        isDownloading={isDownloading}
        debug={isDebug}
      >
        {currentStep === 1 && (
          <GN51Step1Parties data={data} updateData={updateData} isAr={isAr} />
        )}

        {currentStep === 2 && (
          <GN51Step2Property data={data} updateData={updateData} isAr={isAr} />
        )}

        {currentStep === 3 && (
          <GN51Step3Financials data={data} updateData={updateData} calc={calcResult} isAr={isAr} />
        )}

        {currentStep === 4 && (
          <GN51Step4Payment
            data={data}
            updateData={updateData}
            calc={calcResult}
            isAr={isAr}
            onDownload={handleDownload}
            isDownloading={isDownloading}
          />
        )}
      </FormWizardShell>
    </div>
  );
}
