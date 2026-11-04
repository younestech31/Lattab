'use client';

import { GN51FormData } from '@/lib/forms/gn51/schema';
import { GN51ComputeResult } from '@/lib/forms/gn51/compute';
import { Calculator, TrendingUp } from 'lucide-react';

interface Props {
  data: GN51FormData;
  updateData: (fields: Partial<GN51FormData>) => void;
  calc: GN51ComputeResult;
  isAr: boolean;
}

export default function GN51Step3Financials({ data, updateData, calc, isAr }: Props) {
  const formatDa = (val: number) => {
    return (val || 0).toLocaleString(isAr ? 'ar-DZ' : 'fr-FR', {
      maximumFractionDigits: 0,
    }) + (isAr ? ' دج' : ' DA');
  };

  return (
    <div className="space-y-8">
      {/* Threshold Selector: ≤ 1.800.000 DA vs > 1.800.000 DA */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <TrendingUp className="w-5 h-5 text-emerald-700" />
          <span>
            {isAr ? 'النصاب السنوي لمبالغ الإيجار (1.800.000 دج)' : 'Seuil annuel des loyers (1.800.000 DA)'}
          </span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          {isAr
            ? 'تختلف طريقة الإخضاع وفق المبلغ الإجمالي السنوي للإيجارات: أقل من أو يساوي 1.800.000 دج يُخضع لنسب محددة حسب نوع العقار في الصفحة 1، وأكثر من 1.800.000 دج يُخضع لضريبة مؤقتة 7% في الصفحة 2.'
            : 'Le régime d\'imposition dépend du montant annuel brut : inférieur ou égal à 1.800.000 DA (taux par nature de bien en page 1) ou supérieur à 1.800.000 DA (imposition provisoire au taux unique de 7% en page 2).'}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              !data.isOverThreshold
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'أقل أو يساوي 1.800.000 دج / سنوياً' : 'Inférieur ou égal à 1.800.000 DA'}
              </span>
              <input
                type="radio"
                name="threshold"
                checked={!data.isOverThreshold}
                onChange={() => updateData({ isOverThreshold: false })}
                className="text-emerald-600 focus:ring-emerald-500"
              />
            </div>
            <span className="text-xs text-gray-500 mt-1">
              {isAr ? 'جدول الصفحة الأولى (7% أو 10% أو 15%)' : 'Tableau Page 1 (taux 7%, 10% ou 15%)'}
            </span>
          </label>

          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.isOverThreshold
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'يتجاوز 1.800.000 دج / سنوياً' : 'Supérieur à 1.800.000 DA'}
              </span>
              <input
                type="radio"
                name="threshold"
                checked={data.isOverThreshold}
                onChange={() => updateData({ isOverThreshold: true })}
                className="text-emerald-600 focus:ring-emerald-500"
              />
            </div>
            <span className="text-xs text-gray-500 mt-1">
              {isAr ? 'جدول الصفحة الثانية (اقتطاع مؤقت 7%)' : 'Tableau Page 2 (imposition provisoire 7%)'}
            </span>
          </label>
        </div>
      </div>

      {calc.thresholdMismatch && (
        <div role="alert" className="rounded-xl border border-red-300 bg-red-50 p-4 text-xs text-red-900">
          {isAr
            ? 'اختيار شريحة الضريبة لا يتوافق مع مجموع الإيجارات السنوي. صحّح المجموع أو اختيار الشريحة قبل تنزيل التصريح.'
            : 'Le seuil sélectionné ne correspond pas au montant annuel total des loyers. Corrigez le montant ou la tranche avant de télécharger.'}
        </div>
      )}

      {/* Case 1: ≤ 1.800.000 DA */}
      {!data.isOverThreshold ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
              <Calculator className="w-5 h-5 text-emerald-700" />
              <span>{isAr ? 'مبالغ الإيجارات الخام والضريبة المستحقة' : 'Montants des loyers bruts et IRG'}</span>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg">
              {isAr ? 'الصفحة 1 من النموذج' : 'Page 1 du formulaire'}
            </span>
          </div>

          <div className="space-y-4 divide-y divide-gray-100">
            {/* Loyer Habitation (7%) */}
            <div className="pt-3 grid sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-6">
                <label className="text-xs font-bold text-gray-800 block">
                  {isAr ? 'إيجار ذو طابع سكني' : 'Location à usage d\'habitation'}
                </label>
                <span className="text-[11px] text-gray-500">
                  {isAr ? 'معدل الضريبة: 7% على الإيجار الخام' : 'Taux officiel : 7% sur loyer brut'}
                </span>
              </div>
              <div className="sm:col-span-3">
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={data.loyerHabitation || ''}
                  onChange={(e) => updateData({ loyerHabitation: Number(e.target.value) || 0 })}
                  className="w-full text-sm px-3 py-2 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  placeholder="0 DA"
                />
              </div>
              <div className="sm:col-span-3 text-right sm:text-end text-sm font-bold text-emerald-900">
                {formatDa(calc.taxHabitation)}
              </div>
            </div>

            {/* Loyer Commercial/Professionnel (15%) */}
            <div className="pt-4 grid sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-6">
                <label className="text-xs font-bold text-gray-800 block">
                  {isAr ? 'إيجار تجاري أو مهني (غير مجهز أو للشركات)' : 'Location commerciale ou professionnelle'}
                </label>
                <span className="text-[11px] text-gray-500">
                  {isAr ? 'معدل الضريبة: 15% على الإيجار الخام' : 'Taux officiel : 15% (non munis de meubles/sociétés)'}
                </span>
              </div>
              <div className="sm:col-span-3">
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={data.loyerCommercial || ''}
                  onChange={(e) => updateData({ loyerCommercial: Number(e.target.value) || 0 })}
                  className="w-full text-sm px-3 py-2 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  placeholder="0 DA"
                />
              </div>
              <div className="sm:col-span-3 text-right sm:text-end text-sm font-bold text-emerald-900">
                {formatDa(calc.taxCommercial)}
              </div>
            </div>

            {/* Loyer Non Bâti non agricole (15%) */}
            <div className="pt-4 grid sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-6">
                <label className="text-xs font-bold text-gray-800 block">
                  {isAr ? 'أراضٍ غير مبنية ذات استعمال صناعي' : 'Terrains non bâtis à usage industriel'}
                </label>
                <span className="text-[11px] text-gray-500">
                  {isAr ? 'معدل الضريبة: 15% للأراضي ذات الاستعمال الصناعي' : 'Taux : 15% pour les terrains à usage industriel'}
                </span>
              </div>
              <div className="sm:col-span-3">
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={data.loyerNonBatiNonAgricole || ''}
                  onChange={(e) => updateData({ loyerNonBatiNonAgricole: Number(e.target.value) || 0 })}
                  className="w-full text-sm px-3 py-2 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  placeholder="0 DA"
                />
              </div>
              <div className="sm:col-span-3 text-right sm:text-end text-sm font-bold text-emerald-900">
                {formatDa(calc.taxNonBati)}
              </div>
            </div>

            {/* Loyer Agricole (10%) */}
            <div className="pt-4 grid sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-6">
                <label className="text-xs font-bold text-gray-800 block">
                  {isAr ? 'أراضي ذات استعمال فلاحي' : 'Terrains à usage agricole'}
                </label>
                <span className="text-[11px] text-gray-500">
                  {isAr ? 'معدل الضريبة: 10%' : 'Taux officiel : 10%'}
                </span>
              </div>
              <div className="sm:col-span-3">
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={data.loyerAgricole || ''}
                  onChange={(e) => updateData({ loyerAgricole: Number(e.target.value) || 0 })}
                  className="w-full text-sm px-3 py-2 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  placeholder="0 DA"
                />
              </div>
              <div className="sm:col-span-3 text-right sm:text-end text-sm font-bold text-emerald-900">
                {formatDa(calc.taxAgricole)}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Case 2: > 1.800.000 DA */
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
              <Calculator className="w-5 h-5 text-emerald-700" />
              <span>{isAr ? 'المداخيل التي تتجاوز 1.800.000 دج سنوياً' : 'Loyers excédant 1.800.000 DA'}</span>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg">
              {isAr ? 'الصفحة 2 من النموذج' : 'Page 2 du formulaire'}
            </span>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            {isAr
              ? 'تخضع مبالغ الإيجارات السنوية التي تتجاوز 1.800.000 دج لاقتطاع ضريبي مؤقت بمعدل 7% يخصم من الإخضاع النهائي للتصريح السنوي الشامل للدخل (سلسلة ج رقم 01).'
              : 'Les loyers annuels excédant 1.800.000 DA font l\'objet d\'une imposition provisoire de 7%, déductible de l\'IRG définitif lors de la souscription de la déclaration annuelle Série G N° 01.'}
          </p>

          <div className="pt-3 grid sm:grid-cols-12 gap-3 items-center">
            <div className="sm:col-span-6">
              <label className="text-xs font-bold text-gray-800 block">
                {isAr ? 'مبلغ الإيجار السنوي الإجمالي' : 'Montant annuel total des loyers bruts'}
              </label>
              <span className="text-[11px] text-gray-500">
                {isAr ? 'معدل الاقتطاع المؤقت: 7%' : 'Taux d\'imposition provisoire : 7%'}
              </span>
            </div>
            <div className="sm:col-span-3">
              <input
                type="number"
                min="0"
                step="5000"
                value={data.loyerExcedentaire || ''}
                onChange={(e) => updateData({ loyerExcedentaire: Number(e.target.value) || 0 })}
                className="w-full text-sm px-3 py-2 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                placeholder="Ex: 2400000"
              />
            </div>
            <div className="sm:col-span-3 text-right sm:text-end text-sm font-bold text-emerald-900">
              {formatDa(calc.taxExcedentaire)}
            </div>
          </div>
        </div>
      )}

      {/* Live Total Due Card */}
      <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold block">
            {isAr ? 'إجمالي الضريبة المستحقة للدفع (IRG/Location)' : 'Total IRG à payer (Location immobilière)'}
          </span>
          <span className="text-xs text-emerald-200 mt-0.5 block">
            {isAr
              ? `إجمالي مبالغ الإيجار المصرح بها: ${formatDa(calc.totalGrossLoyer)}`
              : `Total des loyers bruts déclarés : ${formatDa(calc.totalGrossLoyer)}`}
          </span>
        </div>
        <div className="text-3xl font-extrabold text-amber-300 tracking-tight">
          {formatDa(calc.totalTaxDue)}
        </div>
      </div>
    </div>
  );
}
