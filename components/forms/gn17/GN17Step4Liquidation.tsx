'use client';

import { GN17FormData } from '@/lib/forms/gn17/schema';
import { GN17ComputeResult } from '@/lib/forms/gn17/compute';
import { Percent, ShieldAlert, FileDown, CheckCircle, MapPin, Calendar, Loader2 } from 'lucide-react';

interface Props {
  data: GN17FormData;
  updateData: (fields: Partial<GN17FormData>) => void;
  calc: GN17ComputeResult;
  isAr: boolean;
  onDownload: () => Promise<void>;
  isDownloading: boolean;
}

export default function GN17Step4Liquidation({
  data,
  updateData,
  calc,
  isAr,
  onDownload,
  isDownloading,
}: Props) {
  const formatCurrency = (val: number) => Math.round(val).toLocaleString('fr-DZ') + ' دج';

  return (
    <div className="space-y-8">
      {/* 50% Special Abattement Option */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Percent className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              {isAr ? '1. خيار تخفيض 50% الخاص بالسكن الرئيسي' : '1. Abattement spécial de 50% (Logement collectif unique)'}
            </h3>
            <p className="text-xs text-gray-500">
              {isAr ? 'المادة 80 مكرر / قانون الضرائب المباشرة' : 'Art. 80 bis du CIDTA'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={data.isSolePrimaryResidence}
              onChange={(e) => updateData({ isSolePrimaryResidence: e.target.checked })}
              className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
            />
            <div className="text-sm">
              <span className="font-bold text-gray-900 block">
                {isAr
                  ? 'العقار المتنازل عنه عبارة عن سكن جماعي يشكل الملكية العقارية السكنية الوحيدة للمتنازل'
                  : 'Le bien cédé est un logement collectif constituant l\'unique propriété immobilière bâtie du cédant.'}
              </span>
              <span className="text-xs text-gray-600 block mt-1">
                {isAr
                  ? 'يمنح القانون تخفيضاً إضافياً بنسبة 50% من مبلغ الضريبة المحسوبة (ي = ط × 50%)'
                  : 'Ouvre droit à une réduction de 50% du montant de l\'IRG calculé.'}
              </span>
            </div>
          </label>

          {data.isSolePrimaryResidence && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {isAr
                  ? 'تنبيه إرشادي: الاستفادة من هذا التخفيض تخضع لتقدير وموافقة قباضة الضرائب المختصة إقليمياً بناءً على الوثائق الثبوتية المقدمة (شهادة السلبية وعدم امتلاك سكن آخر).'
                  : 'Avis : L\'application effective de cet abattement reste subordonnée à l\'agrément de la recette des impôts après vérification de l\'état négatif de propriété.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tax Liquidation Breakdown */}
      <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-md space-y-5">
        <div className="border-b border-emerald-800 pb-3">
          <h4 className="font-bold text-base text-emerald-100 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-amber-400" />
            <span>{isAr ? '2. تصفية الضريبة على الدخل الإجمالي (IRG/Plus-Value)' : '2. Liquidation finale de l\'impôt'}</span>
          </h4>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center py-1.5 border-b border-emerald-800/60">
            <span className="text-emerald-200">{isAr ? 'الأساس الخاضع للضريبة (ح):' : 'Base nette imposable :'}</span>
            <span className="font-mono font-bold text-white">{formatCurrency(calc.netImposablePlusValue)}</span>
          </div>

          <div className="flex justify-between items-center py-1.5 border-b border-emerald-800/60">
            <span className="text-emerald-200">{isAr ? 'معدل الضريبة النسبي القانوني:' : 'Taux légal de la taxe :'}</span>
            <span className="font-mono font-bold text-white">15 %</span>
          </div>

          <div className="flex justify-between items-center py-1.5 border-b border-emerald-800/60">
            <span className="text-emerald-200">{isAr ? 'مبلغ الضريبة الإجمالي (ط = ح × 15%):' : 'Montant brut de l\'impôt :'}</span>
            <span className="font-mono font-bold text-white">{formatCurrency(calc.grossTax)}</span>
          </div>

          {calc.isSolePrimaryResidence && (
            <div className="flex justify-between items-center py-1.5 border-b border-emerald-800/60 text-amber-300">
              <span>{isAr ? 'تخفيض 50% الخاص بالسكن الجماعي الوحيد (ي):' : 'Abattement spécial 50% (Logement unique) :'}</span>
              <span className="font-mono font-bold">-{formatCurrency(calc.residenceAbattementAmount)}</span>
            </div>
          )}

          <div className="flex justify-between items-center pt-2 text-base sm:text-lg font-bold">
            <span className="text-amber-300">{isAr ? 'المبلغ الصافي المستحق للقباضة (ك = ط - ي):' : 'Montant net à payer à la Recette :'}</span>
            <span className="font-mono text-xl sm:text-2xl text-amber-400 font-extrabold">
              {formatCurrency(calc.netTaxDue)}
            </span>
          </div>
        </div>
      </div>

      {/* Certification & Fait à */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="font-bold text-gray-900 text-sm">
          {isAr ? '3. بيانات تحرير التصريح والمصادقة' : '3. Déclaration et lieu de signature'}
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'حرر بـ (المدينة / البلدية)' : 'Fait à (Ville)'}
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-gray-400 absolute top-3 end-3 pointer-events-none" />
              <input
                type="text"
                value={data.faitA}
                onChange={(e) => updateData({ faitA: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                placeholder={isAr ? 'وهران' : 'Oran'}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'تاريخ التصريح' : 'Date'}
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-gray-400 absolute top-3 end-3 pointer-events-none" />
              <input
                type="date"
                value={data.dateDeclaration}
                onChange={(e) => updateData({ dateDeclaration: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100 leading-relaxed">
          {isAr
            ? 'تترك خانة «توقيع وبصمة المكلف بالضريبة» وخانات «مصلحة قباضة الضرائب» فارغة ليتم توقيعها وختمها يدوياً عند إيداع الاستمارة ورقياً لدى القباضة المختصة في مهلة 30 يوماً من تاريخ العقد التوثيقي.'
            : 'La case « Signature du contribuable » et le cadre réservé à la Recette des Impôts restent vierges pour signature et apposition manuelles du cachet lors du dépôt légal.'}
        </div>
      </div>

      {/* Download Action Box */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white rounded-2xl p-7 text-center space-y-4 shadow-lg">
        <h4 className="text-xl font-bold text-white">
          {isAr ? 'جاهز لتحميل الاستمارة الرسمية ج 17' : 'Votre formulaire Série G N° 17 est prêt'}
        </h4>
        <p className="text-emerald-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          {isAr
            ? 'سيتم توليد ملف PDF الأصلي الصادر عن المديرية العامة للضرائب (صفحتان كاملتان A4) مع كتابة كافة بيانات الأطراف والعقار والحسابات بدقة في الخانات المحددة رسمياً.'
            : 'Génération du PDF officiel DGI (2 pages A4) avec inscription directe de toutes vos données dans les cases réglementaires.'}
        </p>

        <button
          type="button"
          onClick={onDownload}
          disabled={isDownloading}
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base transition-all shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer"
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{isAr ? 'جاري تجهيز وتعبئة الاستمارة...' : 'Génération du PDF en cours...'}</span>
            </>
          ) : (
            <>
              <FileDown className="w-5 h-5" />
              <span>{isAr ? 'تحميل الاستمارة الرسمية مملوءة (PDF)' : 'Télécharger l\'imprimé officiel rempli (PDF)'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
