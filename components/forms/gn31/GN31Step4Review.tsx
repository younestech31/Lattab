'use client';

import { GN31FormData } from '@/lib/forms/gn31/schema';
import { GN31Summary } from '@/lib/forms/gn31/compute';
import {
  FileDown,
  Printer,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Loader2,
} from 'lucide-react';

interface Props {
  data: GN31FormData;
  updateData: (fields: Partial<GN31FormData>) => void;
  summary: GN31Summary;
  isAr: boolean;
  onDownload: () => Promise<void>;
  isDownloading: boolean;
}

export default function GN31Step4Review({
  data,
  updateData,
  summary,
  isAr,
  onDownload,
  isDownloading,
}: Props) {
  return (
    <div className="space-y-8">
      {/* 1. Recapitulative Summary Box */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-md mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isAr ? summary.declarationTypeName.ar : summary.declarationTypeName.fr}</span>
            </span>
            <h3 className="text-lg font-bold text-gray-900">
              {isAr ? summary.propertyTypeName.ar : summary.propertyTypeName.fr}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              {data.propRue}، {data.propCommune}، ولاية {data.propWilaya}
            </p>
          </div>
          <div className="text-left bg-gray-50 p-3 rounded-xl border border-gray-100">
            <span className="block text-[11px] text-gray-500">
              {isAr ? 'المساحة المصرح بها' : 'Superficie déclarée'}
            </span>
            <span className="font-extrabold text-base text-gray-900">{summary.totalAreaDisplay}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-gray-50 p-3 rounded-xl">
            <span className="text-gray-500 block mb-1">{isAr ? 'المصرح / الشاغل:' : 'Déclarant :'}</span>
            <span className="font-semibold text-gray-800 block">{summary.occupantSummary}</span>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl">
            <span className="text-gray-500 block mb-1">{isAr ? 'الجهة الجبائية:' : 'Centre des impôts :'}</span>
            <span className="font-semibold text-gray-800 block">
              {data.directionWilaya} — {data.inspection}
            </span>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl">
            <span className="text-gray-500 block mb-1">{isAr ? 'الرقم الجبائي NIF:' : 'NIF :'}</span>
            <span className="font-semibold text-gray-800 block">
              {data.nif || (isAr ? 'غير محدد' : 'Non spécifié')}
            </span>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl">
            <span className="text-gray-500 block mb-1">{isAr ? 'تاريخ التملك / الشراء:' : 'Date d\'achat :'}</span>
            <span className="font-semibold text-gray-800 block">
              {data.dateAchat || (isAr ? 'غير محدد' : 'Non spécifié')}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Declaration & Signing parameters */}
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 space-y-4">
        <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
          <Scale className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'إقرار ومكان وتاريخ التوقيع' : 'Lieu, date et déclaration sur l\'honneur'}</span>
        </h4>
        <p className="text-xs text-emerald-900 leading-relaxed font-medium">
          {isAr
            ? '«أقر بصحة المعلومات والبيانات الواردة في هذا التصريح» — يُطبع هذا الإقرار أسفل الصفحة الثالثة والرابعة من الاستمارة الرسمية.'
            : '« J\'atteste de l\'exactitude des informations portées sur cette déclaration ».'}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'حرر بـ (المدينة / البلدية)' : 'Fait à (Commune / Ville)'}
            </label>
            <input
              type="text"
              value={data.faitA}
              onChange={(e) => updateData({ faitA: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'وهران' : 'Oran'}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'بتاريخ' : 'En date du'}
            </label>
            <input
              type="date"
              value={data.dateDeclaration}
              onChange={(e) => updateData({ dateDeclaration: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* 3. Official Institutional Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-950 space-y-2">
        <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-700" />
          <span>{isAr ? 'تنبيه قانوني وإجرائي ملزم' : 'Avertissement légal et administratif'}</span>
        </div>
        <p className="text-xs leading-relaxed text-amber-900">
          {isAr
            ? 'الملف للمراجعة والإيداع لدى مصلحة الضرائب المختصة؛ ليس بديلاً عن الإجراء الرسمي. يتم توليد الاستمارة بصيغة PDF مطابقة تماماً للمطبوع الصادر عن المديرية العامة للضرائب؛ ويتعين طباعته وتوقيعه وإيداعه مرفقاً بالوثائق الثبوتية لدى مفتشية أو قباضة الضرائب التابع لها موقع العقار.'
            : 'Ce document est destiné à la vérification et au dépôt auprès du centre des impôts compétent ; il ne se substitue pas à la procédure officielle. L\'imprimé généré doit être imprimé, signé et déposé accompagné des justificatifs requis.'}
        </p>
      </div>

      {/* 4. Download Action Banner */}
      <div className="bg-white border-2 border-emerald-600 rounded-2xl p-7 text-center space-y-4 shadow-sm">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto">
          <Printer className="w-7 h-7" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900">
            {isAr ? 'تحميل استمارة ج رقم 31 الرسمية (PDF)' : 'Télécharger le formulaire officiel Série G N° 31 (PDF)'}
          </h4>
          <p className="text-xs text-gray-600 max-w-lg mx-auto mt-1 leading-relaxed">
            {isAr
              ? 'تتم المعالجة وتعبئة الإحداثيات والخطوط محلياً وفورياً داخل متصفحك، وتحميل ملف PDF رسمي مكون من 4 صفحات كاملة وجاهزة للطباعة والتوقيع.'
              : 'Génération instantanée et locale du fichier PDF officiel de 4 pages, sans aucun transit de données personnelles sur nos serveurs.'}
          </p>
        </div>

        <button
          type="button"
          onClick={onDownload}
          disabled={isDownloading}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white font-bold text-base transition shadow-md shadow-emerald-700/20"
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{isAr ? 'جاري إعداد وتحميل استمارة ج 31...' : 'Génération du PDF en cours...'}</span>
            </>
          ) : (
            <>
              <FileDown className="w-5 h-5" />
              <span>{isAr ? 'تحميل الاستمارة الرسمية المعبأة (PDF)' : 'Télécharger le PDF officiel rempli'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
