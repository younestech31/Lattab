'use client';

import { FileDown, FileText, Printer, ShieldCheck, Loader2 } from 'lucide-react';

interface FormDownloadPanelProps {
  formCode: string;
  officialTitle: string;
  pages: number;
  isAr: boolean;
  isDownloading: boolean;
  onDownload: () => void | Promise<void>;
  description: string;
  onPrintSummary?: () => void;
  printSummaryLabel?: string;
  disabled?: boolean;
  disabledReason?: string;
}

/**
 * Shared final document-generation panel for all official tax forms.
 * Form-specific summaries stay in their own step; only the download surface
 * is standardized so users experience one coherent forms platform.
 */
export default function FormDownloadPanel({
  formCode,
  officialTitle,
  pages,
  isAr,
  isDownloading,
  onDownload,
  description,
  onPrintSummary,
  printSummaryLabel,
  disabled = false,
  disabledReason,
}: FormDownloadPanelProps) {
  const langLabel = isAr ? 'العربية' : 'Français';

  return (
    <section
      aria-labelledby="form-download-title"
      aria-busy={isDownloading}
      dir={isAr ? 'rtl' : 'ltr'}
      className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-900">
              <FileText className="h-4 w-4" aria-hidden="true" />
              {formCode}
            </span>
            <span className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-semibold text-gray-700">
              PDF
            </span>
            <span className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-semibold text-gray-700">
              {pages} {isAr ? 'صفحات' : (pages === 1 ? 'page' : 'pages')}
            </span>
            <span className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-semibold text-gray-700">
              {langLabel}
            </span>
          </div>

          <div>
            <h3 id="form-download-title" className="text-lg font-extrabold leading-snug text-gray-900 sm:text-xl">
              {officialTitle}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
              {description}
            </p>
          </div>

          <div className="flex items-start gap-2 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3 text-xs leading-relaxed text-emerald-950">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
            <span>
              {isAr
                ? 'يُنشأ ملف PDF محلياً داخل متصفحك. راجع جميع البيانات في النسخة الناتجة قبل طباعتها أو إيداعها.'
                : 'Le PDF est généré localement dans votre navigateur. Vérifiez toutes les données du document avant impression ou dépôt.'}
            </span>
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:min-w-52">
          <button
            type="button"
            onClick={onDownload}
            disabled={isDownloading || disabled}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-55"
          >
            {isDownloading
              ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              : <FileDown className="h-4 w-4" aria-hidden="true" />}
            <span>
              {isDownloading
                ? (isAr ? 'جاري إنشاء ملف PDF...' : 'Génération du PDF...')
                : (isAr ? 'تحميل الاستمارة المعبأة' : 'Télécharger le formulaire rempli')}
            </span>
          </button>

          {onPrintSummary && (
            <button
              type="button"
              onClick={onPrintSummary}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              <Printer className="h-4 w-4" aria-hidden="true" />
              <span>{printSummaryLabel || (isAr ? 'طباعة الملخص' : 'Imprimer le récapitulatif')}</span>
            </button>
          )}

          {disabled && disabledReason && (
            <p role="status" className="text-xs leading-relaxed text-red-700">
              {disabledReason}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
