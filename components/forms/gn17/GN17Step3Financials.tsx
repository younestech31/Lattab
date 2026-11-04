'use client';

import { GN17FormData } from '@/lib/forms/gn17/schema';
import { GN17ComputeResult } from '@/lib/forms/gn17/compute';
import { DollarSign, Clock, CheckCircle2 } from 'lucide-react';

interface Props {
  data: GN17FormData;
  updateData: (fields: Partial<GN17FormData>) => void;
  calc: GN17ComputeResult;
  isAr: boolean;
}

export default function GN17Step3Financials({ data, updateData, calc, isAr }: Props) {
  const formatCurrency = (val: number) => Math.round(val).toLocaleString('fr-DZ') + ' دج';

  return (
    <div className="space-y-8">
      {/* Financial Inputs */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <DollarSign className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              {isAr ? '1. المبالغ ومصاريف التنازل والتملك' : '1. Montants de cession, d\'acquisition et frais'}
            </h3>
            <p className="text-xs text-gray-500">
              {isAr ? 'القيم المالية المصرح بها وفق العقد وسندات الإثبات' : 'Éléments financiers servant à dégager la plus-value brute'}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Sale Price */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">
              {isAr ? 'أ) سعر التنازل المتفق عليه (دج) *' : 'A) Prix de cession stipulé (DZD) *'}
            </label>
            <input
              type="number"
              min="0"
              step="1000"
              required
              value={data.montantCession || ''}
              onChange={(e) => updateData({ montantCession: Number(e.target.value) || 0 })}
              className="w-full px-3.5 py-2.5 text-sm font-semibold border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              placeholder="18000000"
            />
            <span className="text-[11px] text-gray-500 mt-1 block">
              {formatCurrency(data.montantCession || 0)}
            </span>
          </div>

          {/* Sale Expenses (ب) */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'ب) مبلغ الحقوق والرسوم المدفوعة (دج)' : 'B) Droits et taxes acquittés (DZD)'}
            </label>
            <input
              type="number"
              min="0"
              step="1000"
              value={data.fraisCession || ''}
              disabled={data.acquisitionPriceUnknown}
              onChange={(e) => updateData({ fraisCession: Number(e.target.value) || 0 })}
              className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              placeholder="0"
            />
            <span className="text-[11px] text-gray-500 mt-1 block">
              {isAr ? 'رسوم التوثيق أو الإشهار العقاري المؤداة قانوناً من البائع' : 'Droits d\'enregistrement et publicité foncière'}
            </span>
          </div>

          {/* Other Expenses (ج) */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'ج) مصاريف أخرى مثبتة قانوناً (دج)' : 'C) Autres frais légalement justifiés (DZD)'}
            </label>
            <input
              type="number"
              min="0"
              step="1000"
              value={data.fraisAutres || ''}
              disabled={data.acquisitionPriceUnknown}
              onChange={(e) => updateData({ fraisAutres: Number(e.target.value) || 0 })}
              className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              placeholder="0"
            />
            <span className="text-[11px] text-gray-500 mt-1 block">
              {isAr ? 'أتعاب خبير أو مصاريف قضائية مثبتة قانوناً (تترك 0 إن لم توجد)' : 'Frais d\'expertise ou judiciaires justifiés (laisser 0 si néant)'}
            </span>
          </div>

          {/* Acquisition Price (د) */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">
              {isAr ? 'د) سعر أو قيمة التملك الأصلية (دج) *' : 'D) Prix d\'acquisition ou valeur d\'origine (DZD) *'}
            </label>
            <input
              type="number"
              min="0"
              step="1000"
              required
              value={data.valeurOrigine || ''}
              disabled={data.acquisitionPriceUnknown}
              onChange={(e) => updateData({ valeurOrigine: Number(e.target.value) || 0 })}
              className="w-full px-3.5 py-2.5 text-sm font-semibold border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100 disabled:text-gray-500"
              placeholder="12000000"
            />
            <span className="text-[11px] text-gray-500 mt-1 block">
              {formatCurrency(data.valeurOrigine || 0)}
            </span>
          </div>

          {/* Acquisition Expenses */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-gray-700">
                {isAr ? 'هـ) مصاريف التملك والصيانة والتحسين (دج)' : 'E) Frais d\'acquisition et impenses (DZD)'}
              </label>
              <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                <input
                  type="checkbox"
                  checked={data.acquisitionPriceUnknown}
                  onChange={(e) => updateData({ acquisitionPriceUnknown: e.target.checked })}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>{isAr ? 'تعذر تحديد قيمة الاقتناء (40% من سعر البيع)' : 'Prix d’acquisition indéterminable (forfait 40% du prix de vente)'}</span>
              </label>
            </div>
            <input
              type="number"
              min="0"
              step="1000"
              value={data.fraisAcquisition || ''}
              disabled={data.acquisitionPriceUnknown}
              onChange={(e) => updateData({ fraisAcquisition: Number(e.target.value) || 0 })}
              className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100 disabled:text-gray-500"
              placeholder="360000"
            />
            <span className="text-[11px] text-gray-500 mt-1 block">
              {data.acquisitionPriceUnknown
                ? (isAr ? 'تعتمد قيمة اقتناء جزافية قدرها 40% من سعر البيع؛ لا تخصم أي مصاريف إضافية.' : 'La valeur d’acquisition est évaluée forfaitairement à 40% du prix de vente ; aucun frais supplémentaire n’est déduit.')
                : (isAr ? `تُطبع المصاريف المثبتة بقيمتها الفعلية، ويُحتسب الخصم الإجمالي في حدود 30% من قيمة الاقتناء (السقف: ${formatCurrency(calc.deductibleExpensesCap)}).` : `Les frais justifiés sont affichés à leur valeur réelle ; la déduction calculée est plafonnée à 30% de la valeur d’acquisition (plafond : ${formatCurrency(calc.deductibleExpensesCap)}).`)}
            </span>
          </div>
        </div>
      </div>

      {/* Possession Duration & Legal Abattement */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              {isAr ? '2. مدة الحيازة والتخفيض الزمني القانوني' : '2. Durée de détention et abattement légal'}
            </h3>
            <p className="text-xs text-gray-500">
              {isAr ? 'المادة 80 مكرر: تخفيض بنسبة 5% عن كل سنة حيازة ابتداءً من السنة الثالثة، في حدود 50%' : '5% par an au-delà de la 2ème année de détention (plafond 50%)'}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'عدد سنوات الحيازة الكاملة' : 'Nombre d\'années de détention'}
            </label>
            <input
              type="number"
              min="0"
              max="99"
              value={data.anneeDetention}
              onChange={(e) => updateData({ anneeDetention: Number(e.target.value) || 0 })}
              className="w-full px-3.5 py-2.5 text-sm font-semibold border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
            />
            <p className="text-[11px] text-gray-500 mt-1">
              {isAr
                ? `الفترة بين تاريخ التملك (${data.dateActeOrigine || 'غير محدد'}) وتاريخ التنازل`
                : 'Calculé entre la date d\'acquisition et la cession'}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-emerald-950">
            <div className="text-xs font-medium text-emerald-800">
              {isAr ? 'نسبة التخفيض المطبقة على فائض القيمة:' : 'Taux d\'abattement pour durée :'}
            </div>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">
              {calc.abattementRate} %
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {calc.yearsHeld < 3
                ? (isAr ? 'أقل من 3 سنوات: لا يوجد تخفيض زمني' : 'Moins de 3 ans : aucun abattement')
                : (isAr ? `${calc.yearsHeld - 2} سنوات مؤهلة × 5% (بحد أقصى 50%)` : `${calc.yearsHeld - 2} an(s) éligible(s) × 5%`)}
            </div>
          </div>
        </div>
      </div>

      {/* Live Financial Breakdown Card */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h4 className="font-bold text-sm text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{isAr ? 'ملخص تصفية فائض القيمة (حساب إرشادي فوري)' : 'Récapitulatif de la Plus-Value (Simulation directe)'}</span>
          </h4>
          <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
            {isAr ? 'القسم III من الاستمارة' : 'Section III'}
          </span>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-sm divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-slate-800">
          <div className="space-y-1 pt-2 sm:pt-0">
            <span className="text-xs text-slate-400 block">{isAr ? 'صافي التنازل (أ - ب - ج):' : 'Assiette nette (A - B - C) :'}</span>
            <span className="text-base font-bold text-white">{formatCurrency(calc.netSalePrice)}</span>
          </div>

          <div className="space-y-1 pt-2 sm:pt-0 sm:px-4">
            <span className="text-xs text-slate-400 block">{isAr ? 'فائض القيمة الإجمالي (و):' : 'Plus-value brute :'}</span>
            <span className="text-base font-bold text-amber-300">{formatCurrency(calc.grossPlusValue)}</span>
            <span className="text-[11px] text-slate-400 block">
              {isAr ? `تخفيض المدة (${calc.abattementRate}%): -${formatCurrency(calc.abattementAmount)}` : `Abattement : -${formatCurrency(calc.abattementAmount)}`}
            </span>
          </div>

          <div className="space-y-1 pt-2 sm:pt-0 sm:ps-4">
            <span className="text-xs text-emerald-400 block font-semibold">{isAr ? 'الأساس الصافي الخاضع للضريبة (ح):' : 'Base nette imposable :'}</span>
            <span className="text-lg font-extrabold text-emerald-300">{formatCurrency(calc.netImposablePlusValue)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
