'use client';

import React from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { FormalFormDefinition } from '@/lib/forms/types';
import {
  Clock,
  ChevronRight,
  ChevronLeft,
  FileDown,
  Bug,
  Scale,
} from 'lucide-react';

interface FormWizardShellProps {
  form: FormalFormDefinition;
  currentStep: number;
  totalSteps: number;
  stepTitles: Array<{ title: string; subtitle?: string }>;
  onStepChange: (newStep: number) => void;
  onDownload: () => Promise<void>;
  isDownloading: boolean;
  calcSummary?: {
    salePrice: number;
    grossPlusValue: number;
    netTaxDue: number;
  };
  debug?: boolean;
  children: React.ReactNode;
}

export default function FormWizardShell({
  form,
  currentStep,
  totalSteps,
  stepTitles,
  onStepChange,
  onDownload,
  isDownloading,
  calcSummary,
  debug,
  children,
}: FormWizardShellProps) {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  const formatCurrency = (val: number) => Math.round(val).toLocaleString('fr-DZ') + ' دج';

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
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
          <span className="text-gray-900 font-semibold">{form.officialNumber}</span>
        </div>

        {debug && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-100 text-red-800 font-mono text-[11px] font-bold">
            <Bug className="w-3.5 h-3.5" />
            <span>DEBUG MODE (?debug=1)</span>
          </span>
        )}
      </div>

      {/* Statutory 30-Day Legal Warning Card */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-8 text-amber-950 shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <Clock className="w-5 h-5" />
        </div>
        <div className="text-xs sm:text-sm leading-relaxed space-y-1">
          <div className="font-bold text-amber-900 flex items-center gap-2">
            <span>
              {isAr
                ? 'تنبيه قانوني هام: الأجل الإلزامي للتصريح (30 يوماً)'
                : 'Délai légal impératif de déclaration : 30 jours'}
            </span>
            <span className="text-[11px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-semibold">
              {isAr ? 'المادة 80 مكرر' : 'Art. 80 bis'}
            </span>
          </div>
          <p className="text-amber-900/90">
            {isAr
              ? 'يجب إيداع هذا التصريح رسمياً مصحوباً بدفع مبلغ الضريبة المستحق لدى قباضة الضرائب التابع لها موقع العقار خلال أجل أقصاه ثلاثون (30) يوماً ابتداءً من تاريخ تحرير العقد التوثيقي، تفادياً للغرامات التأخيرية والزيادات الجبائية المنصوص عليها قانوناً.'
              : 'Cette déclaration doit être déposée auprès de la recette des impôts du lieu de situation de l\'immeuble dans un délai maximum de 30 jours à compter de la date de passation de l\'acte notarié, sous peine des pénalités prévues par le CIDTA.'}
          </p>
        </div>
      </div>

      {/* Stepper Progress Header */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 mb-8 shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2">
          {stepTitles.map((step, idx) => {
            const stepNum = idx + 1;
            const isActive = currentStep === stepNum;
            const isCompleted = currentStep > stepNum;

            return (
              <button
                key={stepNum}
                type="button"
                onClick={() => onStepChange(stepNum)}
                className={`text-start p-3 rounded-xl transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-emerald-50/80 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500'
                    : isCompleted
                    ? 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    : 'bg-white border-transparent text-gray-400 cursor-not-allowed opacity-75'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isActive
                        ? 'bg-emerald-700 text-white'
                        : isCompleted
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {isCompleted ? '✓' : stepNum}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    {isAr ? `الخطوة ${stepNum}` : `Étape ${stepNum}`}
                  </span>
                </div>
                <div className="font-bold text-xs sm:text-sm truncate">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Calculation Mini Bar */}
        {calcSummary && (
          <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-gray-500">
                {isAr ? 'سعر التنازل:' : 'Prix cession :'} <strong className="font-mono text-gray-900">{formatCurrency(calcSummary.salePrice)}</strong>
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">
                {isAr ? 'فائض القيمة الإجمالي:' : 'Plus-value :'} <strong className="font-mono text-amber-700">{formatCurrency(calcSummary.grossPlusValue)}</strong>
              </span>
            </div>

            <div className="text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">
              {isAr ? 'الضريبة المستحقة:' : 'IRG à payer :'} <span className="font-mono text-sm text-emerald-900 font-extrabold">{formatCurrency(calcSummary.netTaxDue)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Step Body */}
      <div className="mb-10">{children}</div>

      {/* Wizard Footer Controls */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => onStepChange(currentStep - 1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-sm transition cursor-pointer"
            >
              {isAr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              <span>{isAr ? 'الخطوة السابقة' : 'Précédent'}</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={() => onStepChange(currentStep + 1)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm transition shadow-sm cursor-pointer"
            >
              <span>{isAr ? 'المتابعة للخطوة التالية' : 'Suivant'}</span>
              {isAr ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          ) : (
            <button
              type="button"
              onClick={onDownload}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition shadow-md disabled:opacity-60 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>{isDownloading ? (isAr ? 'جاري التحميل...' : 'Génération...') : (isAr ? 'تحميل الاستمارة الرسمية' : 'Télécharger le formulaire')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Bottom Legal Tool Disclaimer */}
      <div className="mt-8 text-center text-xs text-gray-500 max-w-2xl mx-auto space-y-1">
        <p className="flex items-center justify-center gap-1.5 font-medium text-gray-600">
          <Scale className="w-3.5 h-3.5 text-emerald-700" />
          <span>
            {isAr
              ? 'أداة مساعدة إعلامية مطابقة للنموذج الرسمي الصادر عن وزارة المالية الجزائرية.'
              : 'Outil d\'assistance conforme au gabarit officiel du Ministère des Finances.'}
          </span>
        </p>
        <p>
          {isAr
            ? 'تتم المعالجة والتعبئة محلياً في متصفحك دون حفظ أي بيانات شخصية على أي خادم.'
            : 'Traitement localisé sans conservation de données privées sur serveur.'}
        </p>
      </div>
    </div>
  );
}
