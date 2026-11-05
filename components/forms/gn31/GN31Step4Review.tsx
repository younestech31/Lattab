'use client';

import { GN31FormData } from '@/lib/forms/gn31/schema';
import { GN31Summary } from '@/lib/forms/gn31/compute';
import FormDownloadPanel from '@/components/forms/shared/FormDownloadPanel';
import {
  Scale,
  CheckCircle2,
  AlertTriangle,
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

      <FormDownloadPanel
        formCode={isAr ? 'سلسلة ج رقم 31' : 'Série G N° 31'}
        officialTitle={isAr ? 'التصريح بالرسم العقاري' : 'Déclaration de la taxe foncière'}
        pages={4}
        isAr={isAr}
        isDownloading={isDownloading}
        onDownload={onDownload}
        description={isAr
          ? 'إنشاء نسخة PDF من الاستمارة الرسمية ذات الصفحات الأربع، لمراجعتها وطباعتها والتوقيع عليها قبل الإيداع لدى المصلحة المختصة.'
          : 'Génération du formulaire officiel de quatre pages en PDF, à vérifier, imprimer et signer avant son dépôt auprès du service compétent.'}
      />

    </div>
  );
}
