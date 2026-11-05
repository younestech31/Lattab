'use client';

import { GN8FormData } from '@/lib/forms/gn8/schema';
import { GN8Summary } from '@/lib/forms/gn8/compute';
import FormDownloadPanel from '@/components/forms/shared/FormDownloadPanel';
import {
  CheckCircle2,
  AlertTriangle,
  FileText,
  ShieldCheck,
} from 'lucide-react';

interface Props {
  data: GN8FormData;
  updateData: (fields: Partial<GN8FormData>) => void;
  summary: GN8Summary;
  isAr: boolean;
  onDownload: () => Promise<void>;
  isDownloading: boolean;
}

export default function GN8Step4Review({
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
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-md mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isAr ? summary.regimeName.ar : summary.regimeName.fr}</span>
            </span>
            <h3 className="text-lg font-bold text-gray-900">
              {data.nomRaisonSociale || (isAr ? 'لم يُحدد الاسم' : 'Nom non renseigné')}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              {data.adresseSiege || (isAr ? 'لم يُحدد العنوان' : 'Adresse non renseignée')}
            </p>
          </div>
          <div className="text-left bg-gray-50 p-3 rounded-xl border border-gray-100">
            <span className="block text-[11px] text-gray-500">
              {isAr ? 'بداية النشاط' : 'Début d\'activité'}
            </span>
            <span className="font-extrabold text-sm text-gray-900">
              {data.dateDebutActivite || (isAr ? 'غير محدد' : 'Non précisée')}
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-gray-50 p-3 rounded-xl">
            <span className="text-gray-500 block mb-1">{isAr ? 'صفة المكلف:' : 'Statut :'}</span>
            <span className="font-semibold text-gray-800 block">{isAr ? summary.taxpayerTypeName.ar : summary.taxpayerTypeName.fr}</span>
            <span className="text-[11px] text-gray-400 block mt-0.5">{data.formeJuridique}</span>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl">
            <span className="text-gray-500 block mb-1">{isAr ? 'النشاط الرئيسي:' : 'Activité :'}</span>
            <span className="font-semibold text-gray-800 block truncate" title={data.activitePrincipale}>
              {data.activitePrincipale || '—'}
            </span>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl">
            <span className="text-gray-500 block mb-1">{isAr ? 'المفتشية / المركز:' : 'Service fiscal :'}</span>
            <span className="font-semibold text-gray-800 block">
              {data.directionWilaya} — {data.service}
            </span>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl">
            <span className="text-gray-500 block mb-1">{isAr ? 'صفة المصرح:' : 'Qualité :'}</span>
            <span className="font-semibold text-gray-800 block">{isAr ? summary.qualiteName.ar : summary.qualiteName.fr}</span>
          </div>
        </div>

        {/* Missing fields warning if incomplete */}
        {!summary.isComplete && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-800 leading-relaxed">
              <span className="font-bold block mb-1">
                {isAr ? 'تنبيه: حقول أساسية لم تكتمل بعد' : 'Attention : Champs obligatoires incomplets'}
              </span>
              <ul className="list-disc list-inside space-y-0.5">
                {summary.missingFields.map((f, i) => (
                  <li key={i}>{isAr ? f.ar : f.fr}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* 2. Page 2 Document Checklist Box */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <FileText className="w-5 h-5 text-emerald-700" />
          <span>
            {isAr
              ? 'الوثائق الواجب إرفاقها طي هذا التصريح (الصفحة 2 من الاستمارة)'
              : 'Documents à joindre obligatoirement (Page 2 du formulaire)'}
          </span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          {isAr
            ? 'تتضمن الصفحة 2 من النموذج الرسمي قائمة الوثائق الثبوتية المطلوب إيداعها مع هذا التصريح حسب صفتك القانونية:'
            : 'La page 2 du formulaire officiel récapitule les pièces justificatives à joindre lors du dépôt :'}
        </p>

        <div className="space-y-2.5 pt-2">
          {summary.requiredDocuments.map((doc, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-800"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-relaxed font-medium">{isAr ? doc.ar : doc.fr}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Formal Certification Place & Date */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'الإقرار بصحة المعلومات ومكان التوقيع' : 'Attestation sur l\'honneur et signature'}</span>
        </div>

        <p className="text-xs text-gray-600">
          {isAr
            ? '«أُقرّ بصحة المعلومات الواردة في هذا التصريح» — يُوقع ويُختم الملف قبل إيداعه لدى مصلحة الضرائب.'
            : '« J\'atteste de l\'exactitude des informations portées sur cette déclaration ».'}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'حرر بـ (المكان)' : 'Fait à'}
            </label>
            <input
              type="text"
              value={data.faitA}
              onChange={(e) => updateData({ faitA: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'بتاريخ' : 'Le'}
            </label>
            <input
              type="date"
              value={data.dateDeclaration}
              onChange={(e) => updateData({ dateDeclaration: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            />
          </div>
        </div>
      </div>

      <FormDownloadPanel
        formCode={isAr ? 'سلسلة ج رقم 08' : 'Série G N° 08'}
        officialTitle={isAr ? 'التصريح بالوجود' : 'Déclaration d’existence'}
        pages={2}
        isAr={isAr}
        isDownloading={isDownloading}
        onDownload={onDownload}
        onPrintSummary={() => window.print()}
        printSummaryLabel={isAr ? 'طباعة ملخص البيانات' : 'Imprimer le récapitulatif'}
        description={isAr
          ? 'إنشاء التصريح الرسمي بالوجود في ملف PDF من صفحتين، مع إبقاء قائمة الوثائق الثبوتية ضمن النموذج.'
          : 'Génération de la déclaration officielle d’existence en PDF de deux pages, avec la liste des pièces justificatives du formulaire.'}
      />

    </div>
  );
}
