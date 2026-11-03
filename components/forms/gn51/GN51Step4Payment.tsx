'use client';

import { GN51FormData } from '@/lib/forms/gn51/schema';
import { GN51ComputeResult } from '@/lib/forms/gn51/compute';
import { CreditCard, Download, ShieldCheck, FileCheck } from 'lucide-react';

interface Props {
  data: GN51FormData;
  updateData: (fields: Partial<GN51FormData>) => void;
  calc: GN51ComputeResult;
  isAr: boolean;
  onDownload: () => void;
  isDownloading: boolean;
}

export default function GN51Step4Payment({
  data,
  updateData,
  calc,
  isAr,
  onDownload,
  isDownloading,
}: Props) {
  const formatDa = (val: number) => {
    return (val || 0).toLocaleString(isAr ? 'ar-DZ' : 'fr-FR', {
      maximumFractionDigits: 0,
    }) + (isAr ? ' دج' : ' DA');
  };

  return (
    <div className="space-y-8">
      {/* Mode de paiement */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <CreditCard className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'طريقة التسديد لدى قباضة الضرائب' : 'Mode de paiement à la recette'}</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.modePaiement === 'numeraire'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'الدفع نقداً' : 'En numéraire'}
              </span>
              <input
                type="radio"
                name="modePaiement"
                value="numeraire"
                checked={data.modePaiement === 'numeraire'}
                onChange={() => updateData({ modePaiement: 'numeraire' })}
                className="text-emerald-600 focus:ring-emerald-500"
              />
            </div>
            <span className="text-[11px] text-gray-500 mt-1">
              {isAr ? 'نقداً بصندوق القباضة' : 'Au guichet de la recette'}
            </span>
          </label>

          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.modePaiement === 'cheque_bancaire'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'صك بنكي' : 'Chèque bancaire'}
              </span>
              <input
                type="radio"
                name="modePaiement"
                value="cheque_bancaire"
                checked={data.modePaiement === 'cheque_bancaire'}
                onChange={() => updateData({ modePaiement: 'cheque_bancaire' })}
                className="text-emerald-600 focus:ring-emerald-500"
              />
            </div>
            <span className="text-[11px] text-gray-500 mt-1">
              {isAr ? 'مع ذكر رقم الصك والوكالة' : 'N°, date et agence'}
            </span>
          </label>

          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.modePaiement === 'cheque_postal'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'صك بريدي' : 'Chèque postal'}
              </span>
              <input
                type="radio"
                name="modePaiement"
                value="cheque_postal"
                checked={data.modePaiement === 'cheque_postal'}
                onChange={() => updateData({ modePaiement: 'cheque_postal' })}
                className="text-emerald-600 focus:ring-emerald-500"
              />
            </div>
            <span className="text-[11px] text-gray-500 mt-1">
              {isAr ? 'حساب CCP' : 'Compte CCP'}
            </span>
          </label>
        </div>

        {/* Chèque bancaire details */}
        {data.modePaiement === 'cheque_bancaire' && (
          <div className="grid sm:grid-cols-3 gap-3 pt-3 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'رقم الصك البنكي' : 'Numéro du chèque'}
              </label>
              <input
                type="text"
                value={data.chequeBanqueNum}
                onChange={(e) => updateData({ chequeBanqueNum: e.target.value })}
                className="w-full text-sm px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'تاريخ الصك' : 'Date du chèque'}
              </label>
              <input
                type="text"
                value={data.chequeBanqueDate}
                onChange={(e) => updateData({ chequeBanqueDate: e.target.value })}
                className="w-full text-sm px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 outline-none"
                placeholder="JJ/MM/AAAA"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'الوكالة البنكية المسحوب عليها' : 'Agence bancaire tirée'}
              </label>
              <input
                type="text"
                value={data.chequeBanqueAgence}
                onChange={(e) => updateData({ chequeBanqueAgence: e.target.value })}
                className="w-full text-sm px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 outline-none"
              />
            </div>
          </div>
        )}

        {/* Chèque postal details */}
        {data.modePaiement === 'cheque_postal' && (
          <div className="grid sm:grid-cols-2 gap-3 pt-3 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'رقم الصك البريدي' : 'Numéro du chèque postal'}
              </label>
              <input
                type="text"
                value={data.chequePostalNum}
                onChange={(e) => updateData({ chequePostalNum: e.target.value })}
                className="w-full text-sm px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'بتاريخ' : 'En date du'}
              </label>
              <input
                type="text"
                value={data.chequePostalDate}
                onChange={(e) => updateData({ chequePostalDate: e.target.value })}
                className="w-full text-sm px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-600 outline-none"
                placeholder="JJ/MM/AAAA"
              />
            </div>
          </div>
        )}
      </div>

      {/* Attestation & Date */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <FileCheck className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'الإقرار بصحة المعلومات والتوقيع' : 'Attestation sur l\'honneur et signature'}</span>
        </div>
        <p className="text-xs text-gray-600">
          {isAr
            ? 'أشهد بصحة المعلومات الواردة في هذا التصريح.'
            : 'J\'atteste de l\'exactitude des renseignements portés sur la présente déclaration.'}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'حُرر بـ' : 'Fait à'}
            </label>
            <input
              type="text"
              value={data.faitA}
              onChange={(e) => updateData({ faitA: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder={isAr ? 'وهران' : 'Oran'}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'في (تاريخ التصريح)' : 'En date du'}
            </label>
            <input
              type="text"
              value={data.dateDeclaration}
              onChange={(e) => updateData({ dateDeclaration: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder={new Date().toLocaleDateString(isAr ? 'ar-DZ' : 'fr-FR')}
            />
          </div>
        </div>
      </div>

      {/* Summary Recap Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-3">
        <h3 className="font-bold text-sm text-gray-900">
          {isAr ? 'ملخص التصريح الجبائي (ج 51)' : 'Récapitulatif de la déclaration (G51)'}
        </h3>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-gray-700">
          <div className="bg-white p-3 rounded-xl border border-gray-100">
            <span className="text-gray-500 block">{isAr ? 'المؤجر' : 'Bailleur'}</span>
            <span className="font-bold text-gray-900">{data.bailleurNom || '—'}</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-100">
            <span className="text-gray-500 block">{isAr ? 'المستأجر' : 'Preneur'}</span>
            <span className="font-bold text-gray-900">{data.preneurNom || '—'}</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-100">
            <span className="text-gray-500 block">{isAr ? 'الضريبة المستحقة' : 'IRG à payer'}</span>
            <span className="font-extrabold text-emerald-800 text-sm">{formatDa(calc.totalTaxDue)}</span>
          </div>
        </div>
      </div>

      {/* Institutional Legal Disclaimer (Law 06-02 compliance) */}
      <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm text-xs text-blue-950 leading-relaxed">
        <ShieldCheck className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-blue-950">
            {isAr
              ? 'تنبيه إرشادي قانوني وفق القانون 06-02 المنظم لمهنة التوثيق'
              : 'Mention légale et informative (Loi 06-02 régissant le notariat)'}
          </p>
          <p className="text-blue-900">
            {isAr
              ? 'توليد هذا الملف يتم حصرياً داخل متصفحك دون إرسال أو تخزين أي بيانات على الخادم. يُرجى طباعة النموذج وتوقيعه ثم التوجه إلى قباضة الضرائب المختصة لدفع المبلغ واستلام وصل الإبراء القانوني (Quittance). هذا الدليل ذو طابع إعلامي وإجرائي مساعد.'
              : 'Ce document est généré localement dans votre navigateur sans aucune transmission de données. Veuillez imprimer le formulaire, le signer et le déposer auprès de la recette des impôts pour acquittement et obtention de la quittance officielle.'}
          </p>
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-2 text-center">
        <button
          type="button"
          onClick={onDownload}
          disabled={isDownloading}
          className="inline-flex items-center justify-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition disabled:opacity-50 cursor-pointer"
        >
          <Download className="w-5 h-5" />
          <span>
            {isDownloading
              ? (isAr ? 'جارٍ إعداد وطباعة النموذج الرسمي...' : 'Génération du PDF officiel en cours...')
              : (isAr ? 'تحميل استمارة ج 51 الرسمية (PDF جاهز للإيداع)' : 'Télécharger le formulaire officiel G51 (PDF)')}
          </span>
        </button>
      </div>
    </div>
  );
}
