'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLang } from '@/lib/i18n';
import { getFormBySlug } from '@/lib/forms/registry';
import { GN31FormData, initialGN31Values } from '@/lib/forms/gn31/schema';
import { computeGN31 } from '@/lib/forms/gn31/compute';
import { GN31_FIELD_COORDINATES, GN31_FIELD_COORDINATES_FR, mapGN31ToFieldValues } from '@/lib/forms/gn31/fields';
import { fillOfficialPdf, downloadPdfBytes } from '@/lib/forms/fillOfficialPdf';
import { loadDraft, saveDraft, clearDraft } from '@/lib/forms/draftStorage';

import FormWizardShell from '@/components/forms/FormWizardShell';
import GN31Step1Admin from './GN31Step1Admin';
import GN31Step2Occupant from './GN31Step2Occupant';
import GN31Step3Property from './GN31Step3Property';
import GN31Step4Review from './GN31Step4Review';

export default function GN31FormFiller() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const searchParams = useSearchParams();
  const isDebug = searchParams.get('debug') === '1';

  const formDef = getFormBySlug('gn31');
  const [data, setData] = useState<GN31FormData>(() => {
    const draft = loadDraft<GN31FormData>('gn31');
    return draft?.data ?? initialGN31Values;
  });
  const [savedAt, setSavedAt] = useState<string | null>(() => {
    const draft = loadDraft<GN31FormData>('gn31');
    return draft?.savedAt ?? null;
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const isMountedRef = useRef(false);
  const skipNextSaveRef = useRef(false);

  // Client-side hydration sync for localStorage draft
  useEffect(() => {
    const draft = loadDraft<GN31FormData>('gn31');
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
      saveDraft('gn31', data);
      setSavedAt(new Date().toISOString());
    }, 500);
    return () => clearTimeout(timer);
  }, [data]);

  const updateData = (fields: Partial<GN31FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const handleClearDraft = () => {
    clearDraft('gn31');
    skipNextSaveRef.current = true;
    setData(initialGN31Values);
    setSavedAt(null);
  };

  const summary = useMemo(() => computeGN31(data), [data]);

  const stepTitles = [
    {
      title: isAr ? 'التوجيه والنوع' : 'Rattachement',
      subtitle: isAr ? 'الجهة الإدارية والأرقام' : 'Centre des impôts & NIF',
    },
    {
      title: isAr ? 'هوية الشاغل' : 'Déclarant',
      subtitle: isAr ? 'المالك أو الشاغل' : 'Propriétaire ou occupant',
    },
    {
      title: isAr ? 'مواصفات الملكية' : 'Propriété',
      subtitle: isAr ? 'الموقع والمساحات' : 'Affectation & surfaces',
    },
    {
      title: isAr ? 'المراجعة والتحميل' : 'Téléchargement',
      subtitle: isAr ? 'الإقرار وملف PDF' : 'Attestation et PDF officiel',
    },
  ];

  const handleDownload = async () => {
    if (!formDef) return;
    setIsDownloading(true);
    setDownloadError(null);

    try {
      const isFr = lang === 'fr';
      const templateUrl = isFr && formDef.templatePathFr ? formDef.templatePathFr : formDef.templatePath;
      const fieldCoords = isFr ? GN31_FIELD_COORDINATES_FR : GN31_FIELD_COORDINATES;
      const fieldValues = mapGN31ToFieldValues(data, lang as 'ar' | 'fr');

      const pdfBytes = await fillOfficialPdf({
        templateUrl,
        fields: fieldCoords,
        values: fieldValues,
        debug: isDebug,
      });

      const dateStr = new Date().toISOString().split('T')[0];
      const fileName = isAr
        ? `استمارة_ج31_الرسم_العقاري_${dateStr}.pdf`
        : `Formulaire_G31_Taxe_Fonciere_${dateStr}.pdf`;

      downloadPdfBytes(pdfBytes, fileName);
    } catch (err: unknown) {
      console.error('GN31 PDF generation error:', err);
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
      >
        {currentStep === 1 && (
          <GN31Step1Admin data={data} updateData={updateData} isAr={isAr} />
        )}
        {currentStep === 2 && (
          <GN31Step2Occupant data={data} updateData={updateData} isAr={isAr} />
        )}
        {currentStep === 3 && (
          <GN31Step3Property data={data} updateData={updateData} isAr={isAr} />
        )}
        {currentStep === 4 && (
          <GN31Step4Review
            data={data}
            updateData={updateData}
            summary={summary}
            isAr={isAr}
            onDownload={handleDownload}
            isDownloading={isDownloading}
          />
        )}
      </FormWizardShell>
    </div>
  );
}
