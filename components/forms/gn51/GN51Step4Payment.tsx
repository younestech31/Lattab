'use client';

import { GN51FormData } from '@/lib/forms/gn51/schema';
import { GN51ComputeResult } from '@/lib/forms/gn51/compute';
import FormDownloadPanel from '@/components/forms/shared/FormDownloadPanel';
import { CreditCard, ShieldCheck, FileCheck } from 'lucide-react';

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
      {calc.thresholdMismatch && (
        <div role="alert" className="rounded-xl border border-red-300 bg-red-50 p-4 text-xs text-red-900">
          {isAr
            ? 'لا يمكن تنزيل ج51: المبلغ السنوي المختار لا يطابق شريحة 1.800.000 دج. راجع المجموع السنوي.'
            : 'Téléchargement bloqué : le montant annuel ne correspond pas au seuil de 1.800.000 DA. Vérifiez le total.'}
        </div>
      )}
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
            <span className="text-gray-500 block">
              {calc.isOverThreshold
                ? (isAr ? 'الاقتطاع المؤقت (7%)' : 'Prélèvement provisoire (7%)')
                : (isAr ? 'الضريبة المحررة من الضريبة' : 'IRG libératoire')}
            </span>
            <span className="font-extrabold text-emerald-800 text-sm">{formatDa(calc.totalTaxDue)}</span>
          </div>
        </div>
      </div>

      {calc.isOverThreshold && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-950">
          <p className="font-bold mb-1">
            {isAr ? 'تنبيه بشأن الإخضاع المؤقت' : 'Précision sur l’imposition provisoire'}
          </p>
          <p>
            {isAr
              ? 'مبلغ 7% المبيّن في هذا التصريح هو اقتطاع مؤقت يُصرّح به ويدفع عبر ج51، ويُحتسب قرضاً ضريبياً يخصم من الضريبة النهائية على الدخل الإجمالي. وتُجرى التصفية النهائية وفق التصريح السنوي ج01؛ وقد ينطبق تخفيض 25% على مداخيل الإيجار السكني المستوفية للشروط، ولا يطبق على العقود المبرمة مع الشركات.'
              : 'Le montant de 7 % déclaré sur ce formulaire est un prélèvement provisoire acquitté via la G51 et constitue un crédit d’impôt imputable sur l’IRG définitif. La liquidation définitive s’effectue via la déclaration annuelle G01 ; l’abattement de 25 % peut concerner les revenus locatifs d’habitation remplissant les conditions, mais ne s’applique pas aux contrats conclus avec des sociétés.'}
          </p>
        </div>
      )}

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

      <FormDownloadPanel
        formCode={isAr ? 'سلسلة ج رقم 51' : 'Série G N° 51'}
        officialTitle={isAr ? 'التصريح بمداخيل إيجار العقارات' : 'Déclaration des revenus de location immobilière'}
        pages={2}
        isAr={isAr}
        isDownloading={isDownloading}
        onDownload={onDownload}
        disabled={calc.thresholdMismatch}
        disabledReason={calc.thresholdMismatch
          ? (isAr
              ? 'لا يمكن إنشاء الملف قبل تصحيح توافق مبلغ الإيجار السنوي مع الشريحة المختارة.'
              : 'Corrigez la cohérence entre le montant annuel des loyers et la tranche sélectionnée avant de générer le PDF.')
          : undefined}
        description={isAr
          ? 'إنشاء ملف PDF للتصريح بمداخيل الإيجار. راجع طبيعة الإيجار والمبالغ وطريقة الدفع قبل الطباعة والإيداع.'
          : 'Génération du PDF de déclaration des revenus locatifs. Vérifiez la nature de la location, les montants et le mode de paiement avant impression et dépôt.'}
      />

    </div>
  );
}
