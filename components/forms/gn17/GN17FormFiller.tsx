'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLang } from '@/lib/i18n';
import { getFormBySlug } from '@/lib/forms/registry';
import { GN17FormData, initialGN17Values } from '@/lib/forms/gn17/schema';
import { computeGN17 } from '@/lib/forms/gn17/compute';
import { GN17_FIELD_COORDINATES, mapGN17ToFieldValues } from '@/lib/forms/gn17/fields';
import { fillOfficialPdf, downloadPdfBytes } from '@/lib/forms/fillOfficialPdf';

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
  const [data, setData] = useState<GN17FormData>(initialGN17Values);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const updateData = (fields: Partial<GN17FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  // Live Calculations
  const calcResult = useMemo(() => {
    return computeGN17({
      salePrice: data.montantCession,
      saleExpenses: data.fraisCession,
      acquisitionPrice: data.valeurOrigine,
      acquisitionExpenses: data.fraisAcquisition,
      useFlatExpenses: data.useFlatExpenses,
      acquisitionDate: data.dateActeOrigine,
      saleDate: data.dateActeCession,
      detentionYears: data.anneeDetention,
      isSolePrimaryResidence: data.isSolePrimaryResidence,
    });
  }, [
    data.montantCession,
    data.fraisCession,
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
      const fieldValues = mapGN17ToFieldValues(data, calcResult);
      const pdfBytes = await fillOfficialPdf({
        templateUrl: formDef.templatePath,
        fields: GN17_FIELD_COORDINATES,
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
      setDownloadError(
        isAr
          ? 'حدث خطأ أثناء إعداد ملف PDF. يرجى التأكد من اتصالك بالإنترنت والمحاولة مجدداً.'
          : 'Erreur lors de la génération du PDF. Veuillez vérifier votre connexion et réessayer.'
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
