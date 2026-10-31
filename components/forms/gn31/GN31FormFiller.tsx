'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLang } from '@/lib/i18n';
import { getFormBySlug } from '@/lib/forms/registry';
import { GN31FormData, initialGN31Values } from '@/lib/forms/gn31/schema';
import { computeGN31 } from '@/lib/forms/gn31/compute';
import { GN31_FIELD_COORDINATES, mapGN31ToFieldValues } from '@/lib/forms/gn31/fields';
import { fillOfficialPdf, downloadPdfBytes } from '@/lib/forms/fillOfficialPdf';

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
  const [data, setData] = useState<GN31FormData>(initialGN31Values);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const updateData = (fields: Partial<GN31FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
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
      const fieldValues = mapGN31ToFieldValues(data);
      const pdfBytes = await fillOfficialPdf({
        templateUrl: formDef.templatePath,
        fields: GN31_FIELD_COORDINATES,
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
