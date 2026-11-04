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
  const legalNotice = {
    gn17: {
      title: isAr ? 'أجل التصريح ج17: 30 يوماً' : 'Délai de la déclaration G17 : 30 jours',
      reference: isAr ? 'المادة 80 من قانون الضرائب المباشرة' : 'Article 80 du CIDTA',
      body: isAr
        ? 'يجب اكتتاب تصريح ج17 وتسديد الضريبة المستحقة في أجل لا يتجاوز ثلاثين (30) يوماً ابتداءً من تاريخ عملية البيع.'
        : 'La déclaration G17 et le paiement de l’impôt dû doivent intervenir dans un délai maximal de trente (30) jours à compter de la date de la vente.',
    },
    gn31: {
      title: isAr ? 'أجل التصريح ج31' : 'Délai de la déclaration G31',
      reference: isAr ? 'المادتان 261-ر و261-س من قانون الضرائب المباشرة' : 'Articles 261-r et 261-s du CIDTA',
      body: isAr
        ? 'يكتتب التصريح خلال السنة الأولى من تطبيق الرسم العقاري، أو خلال شهرين من الإتمام النهائي للبناء الجديد أو تغيير قوام العقار أو تخصيصه، وكذلك في حالة الإشغال الجزئي لملكية قيد البناء.'
        : 'La déclaration est souscrite la première année d’application de la taxe, ou dans les deux mois suivant l’achèvement d’une construction nouvelle, un changement de consistance ou d’affectation, ainsi qu’en cas d’occupation partielle d’une propriété en cours de construction.',
    },
    gn8: {
      title: isAr ? 'أجل التصريح ج08: 30 يوماً' : 'Délai de la déclaration G08 : 30 jours',
      reference: isAr ? 'المادة 51 من قانون الرسوم على رقم الأعمال والمادة 183 من CIDTA' : 'Article 51 du CTCA et article 183 du CIDTA',
      body: isAr
        ? 'يكتتب تصريح الوجود خلال ثلاثين (30) يوماً من تاريخ بداية النشاط لدى المصلحة الجبائية المختصة بمكان ممارسة النشاط.'
        : 'La déclaration d’existence est souscrite dans les trente (30) jours suivant le début de l’activité auprès du service fiscal compétent du lieu d’exercice.',
    },
    gn51: {
      title: isAr ? 'أجل التصريح ج51: اليوم العشرون' : 'Délai de la déclaration G51 : le 20',
      reference: isAr ? 'المادة 42-1 من قانون الضرائب المباشرة' : 'Article 42-1 du CIDTA',
      body: isAr
        ? 'يتم التصريح والدفع في أجل أقصاه اليوم العشرون (20) من الشهر أو الفصل أو السداسي أو السنة الموالية لتحصيل الإيجار، بحسب دورية التحصيل.'
        : 'La déclaration et le paiement doivent intervenir au plus tard le 20 du mois, trimestre, semestre ou année suivant l’encaissement du loyer, selon la périodicité applicable.',
    },
  }[form.slug] || {
    title: isAr ? 'تنبيه إجرائي' : 'Information procédurale',
    reference: form.officialNumber,
    body: isAr ? 'يرجى التحقق من الآجال لدى المصلحة الجبائية المختصة.' : 'Veuillez vérifier le délai auprès du service fiscal compétent.',
  };

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

      {/* Form-specific statutory deadline notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-8 text-amber-950 shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-800 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <Clock className="w-5 h-5" />
        </div>
        <div className="text-xs sm:text-sm leading-relaxed space-y-1">
          <div className="font-bold text-amber-900 flex flex-wrap items-center gap-2">
            <span>{legalNotice.title}</span>
            <span className="text-[11px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-semibold">
              {legalNotice.reference}
            </span>
          </div>
          <p className="text-amber-900/90">{legalNotice.body}</p>
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
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white font-bold text-sm transition shadow-md disabled:opacity-60 cursor-pointer min-h-11 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
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
