'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLang } from '@/lib/i18n';
import { getFormBySlug } from '@/lib/forms/registry';
import { GN8FormData, initialGN8Values, gn8FormSchema } from '@/lib/forms/gn8/schema';
import { computeGN8 } from '@/lib/forms/gn8/compute';
import { GN8_FIELD_COORDINATES, GN8_FIELD_COORDINATES_FR, mapGN8ToFieldValues } from '@/lib/forms/gn8/fields';
import { fillOfficialPdf, downloadPdfBytes } from '@/lib/forms/fillOfficialPdf';
import { loadDraft, saveDraft, clearDraft } from '@/lib/forms/draftStorage';

import FormWizardShell from '@/components/forms/FormWizardShell';
import GN8Step1Admin from './GN8Step1Admin';
import GN8Step2Identity from './GN8Step2Identity';
import GN8Step3Location from './GN8Step3Location';
import GN8Step4Review from './GN8Step4Review';

function readGN8Draft() {
  return loadDraft<GN8FormData>('gn8', (value) => {
    const parsed = gn8FormSchema.partial().safeParse(value);
    return parsed.success ? { ...initialGN8Values, ...parsed.data } : null;
  });
}

export default function GN8FormFiller() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const searchParams = useSearchParams();
  const isDebug = searchParams.get('debug') === '1';

  const formDef = getFormBySlug('gn8');
  const [data, setData] = useState<GN8FormData>(initialGN8Values);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const isMountedRef = useRef(false);
  const skipNextSaveRef = useRef(false);

  // Load and validate the saved draft only after hydration to keep server and
  // first client render identical and avoid rendering unvalidated stored data.
  useEffect(() => {
    const draft = readGN8Draft();
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
      const saved = saveDraft('gn8', data);
      setSavedAt(saved ? new Date().toISOString() : null);
    }, 500);
    return () => clearTimeout(timer);
  }, [data]);

  const updateData = (fields: Partial<GN8FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const handleClearDraft = () => {
    clearDraft('gn8');
    skipNextSaveRef.current = true;
    setData(initialGN8Values);
    setSavedAt(null);
  };

  const summary = useMemo(() => computeGN8(data), [data]);

  const stepTitles = [
    {
      title: isAr ? 'التوجيه والنظام' : 'Rattachement & Régime',
      subtitle: isAr ? 'الجهة الجبائية ونظام الضريبة' : 'Centre des impôts & IFU/IRG/IBS',
    },
    {
      title: isAr ? 'هوية المكلف' : 'Contribuable & Activités',
      subtitle: isAr ? 'الشكل القانوني والنشاط' : 'Identité & nature d\'activité',
    },
    {
      title: isAr ? 'المقرات والصفة' : 'Implantation & Statut',
      subtitle: isAr ? 'العناوين وتاريخ البداية' : 'Adresses & début d\'activité',
    },
    {
      title: isAr ? 'المراجعة والإيداع' : 'Récapitulatif & Dépôt',
      subtitle: isAr ? 'قائمة الوثائق وملف PDF' : 'Pièces à joindre & PDF officiel',
    },
  ];

  const handleDownload = async () => {
    if (!formDef) return;
    setIsDownloading(true);
    setDownloadError(null);

    try {
      const isFr = lang === 'fr';
      const templateUrl = isFr && formDef.templatePathFr ? formDef.templatePathFr : formDef.templatePath;
      const fieldCoords = isFr ? GN8_FIELD_COORDINATES_FR : GN8_FIELD_COORDINATES;
      const fieldValues = mapGN8ToFieldValues(data, lang as 'ar' | 'fr');

      const pdfBytes = await fillOfficialPdf({
        templateUrl,
        expectedPages: formDef.pages,
        fields: fieldCoords,
        values: fieldValues,
        debug: isDebug,
      });

      const dateStr = new Date().toISOString().split('T')[0];
      const fileName = isAr
        ? `استمارة_ج08_تصريح_بالوجود_${dateStr}.pdf`
        : `Formulaire_G08_Declaration_Existence_${dateStr}.pdf`;

      downloadPdfBytes(pdfBytes, fileName);
    } catch (err: unknown) {
      console.error('GN8 PDF generation error:', err);
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
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
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
        onStepChange={(step) => setCurrentStep(step)}
        onDownload={handleDownload}
        isDownloading={isDownloading}
        debug={isDebug}
      >
        {currentStep === 1 && (
          <GN8Step1Admin data={data} updateData={updateData} isAr={isAr} />
        )}
        {currentStep === 2 && (
          <GN8Step2Identity data={data} updateData={updateData} isAr={isAr} />
        )}
        {currentStep === 3 && (
          <GN8Step3Location data={data} updateData={updateData} isAr={isAr} />
        )}
        {currentStep === 4 && (
          <GN8Step4Review
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
