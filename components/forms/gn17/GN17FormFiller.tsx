'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLang } from '@/lib/i18n';
import { getFormBySlug } from '@/lib/forms/registry';
import { GN17FormData, initialGN17Values } from '@/lib/forms/gn17/schema';
import { computeGN17 } from '@/lib/forms/gn17/compute';
import { GN17_FIELD_COORDINATES, GN17_FIELD_COORDINATES_FR, mapGN17ToFieldValues } from '@/lib/forms/gn17/fields';
import { fillOfficialPdf, downloadPdfBytes } from '@/lib/forms/fillOfficialPdf';
import { loadDraft, saveDraft, clearDraft } from '@/lib/forms/draftStorage';

import FormWizardShell from '@/components/forms/FormWizardShell';
import GN17Step1Parties from './GN17Step1Parties';
import GN17Step2Property from './GN17Step2Property';
import GN17Step3Financials from './GN17Step3Financials';
import GN17Step4Liquidation from './GN17Step4Liquidation';

export default function GN17FormFiller() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const searchParams = useSearchParams();
  const isDebug = searchParams.get('debug') === '1';

  const formDef = getFormBySlug('gn17');
  const [data, setData] = useState<GN17FormData>(() => {
    const draft = loadDraft<GN17FormData>('gn17');
    return draft?.data ?? initialGN17Values;
  });
  const [savedAt, setSavedAt] = useState<string | null>(() => {
    const draft = loadDraft<GN17FormData>('gn17');
    return draft?.savedAt ?? null;
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const isMountedRef = useRef(false);
  const skipNextSaveRef = useRef(false);

  // Client-side hydration sync for localStorage draft
  useEffect(() => {
    const draft = loadDraft<GN17FormData>('gn17');
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
      saveDraft('gn17', data);
      setSavedAt(new Date().toISOString());
    }, 500);
    return () => clearTimeout(timer);
  }, [data]);

  const updateData = (fields: Partial<GN17FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const handleClearDraft = () => {
    clearDraft('gn17');
    skipNextSaveRef.current = true;
    setData(initialGN17Values);
    setSavedAt(null);
  };

  // Live Calculations
  const calcResult = useMemo(() => {
    return computeGN17({
      salePrice: data.montantCession,
      saleExpenses: data.fraisCession,
      otherExpenses: data.fraisAutres,
      acquisitionPrice: data.valeurOrigine,
      acquisitionExpenses: data.fraisAcquisition,
      acquisitionPriceUnknown: data.acquisitionPriceUnknown,
      acquisitionDate: data.dateActeOrigine,
      saleDate: data.dateActeCession,
      detentionYears: data.anneeDetention,
      isSolePrimaryResidence: data.isSolePrimaryResidence,
    });
  }, [
    data.montantCession,
    data.fraisCession,
    data.fraisAutres,
    data.valeurOrigine,
    data.fraisAcquisition,
    data.useFlatExpenses,
    data.dateActeOrigine,
    data.dateActeCession,
    data.anneeDetention,
    data.isSolePrimaryResidence,
  ]);

  const stepTitles = [
    {
      title: isAr ? 'أطراف العملية' : 'Parties',
      subtitle: isAr ? 'المتنازل والمشتري' : 'Cédant et cessionnaires',
    },
    {
      title: isAr ? 'تعيين العقار' : 'Désignation',
      subtitle: isAr ? 'الموقع وأصل الملكية' : 'Origine et cadastre',
    },
    {
      title: isAr ? 'المبالغ وفائض القيمة' : 'Montants',
      subtitle: isAr ? 'أسعار وحساب الفائض' : 'Prix et abattements',
    },
    {
      title: isAr ? 'تصفية الضريبة' : 'Liquidation',
      subtitle: isAr ? 'الضريبة والتحميل' : 'IRG et téléchargement',
    },
  ];

  const handleDownload = async () => {
    if (!formDef) return;
    setIsDownloading(true);
    setDownloadError(null);

    try {
      const isFr = lang === 'fr';
      const templateUrl = isFr && formDef.templatePathFr ? formDef.templatePathFr : formDef.templatePath;
      const fieldCoords = isFr ? GN17_FIELD_COORDINATES_FR : GN17_FIELD_COORDINATES;
      const fieldValues = mapGN17ToFieldValues(data, calcResult, lang as 'ar' | 'fr');

      const pdfBytes = await fillOfficialPdf({
        templateUrl,
        expectedPages: formDef.pages,
        fields: fieldCoords,
        values: fieldValues,
        debug: isDebug,
      });

      const dateStr = new Date().toISOString().split('T')[0];
      const fileName = isAr
        ? `استمارة_ج17_فائض_القيمة_${dateStr}.pdf`
        : `Formulaire_G17_Plus_Value_${dateStr}.pdf`;

      downloadPdfBytes(pdfBytes, fileName);
    } catch (err: unknown) {
      console.error('PDF generation error:', err);
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

      {/* Minimal Draft Status Banner */}
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
                  ? 'تُحفظ على جهازك في هذا المتصفح فقط.'
                  : 'Enregistré sur votre appareil dans ce navigateur uniquement.'}
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
        calcSummary={{
          salePrice: calcResult.salePrice,
          grossPlusValue: calcResult.grossPlusValue,
          netTaxDue: calcResult.netTaxDue,
        }}
      >
        {currentStep === 1 && (
          <GN17Step1Parties data={data} updateData={updateData} isAr={isAr} />
        )}

        {currentStep === 2 && (
          <GN17Step2Property data={data} updateData={updateData} isAr={isAr} />
        )}

        {currentStep === 3 && (
          <GN17Step3Financials data={data} updateData={updateData} calc={calcResult} isAr={isAr} />
        )}

        {currentStep === 4 && (
          <GN17Step4Liquidation
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
