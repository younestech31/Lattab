'use client';

import { GN51FormData } from '@/lib/forms/gn51/schema';
import { User, Building, Info, FileText } from 'lucide-react';

interface Props {
  data: GN51FormData;
  updateData: (fields: Partial<GN51FormData>) => void;
  isAr: boolean;
}

export default function GN51Step1Parties({ data, updateData, isAr }: Props) {
  return (
    <div className="space-y-8">
      {/* Legal Deadline Banner */}
      <div className="bg-amber-50/80 border border-amber-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
        <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          <p className="font-bold text-amber-950 mb-1">
            {isAr
              ? 'الأجل القانوني: في أجل أقصاه اليوم العشرون (20) من الشهر الموالي للتحصيل'
              : 'Délai légal : Au plus tard le 20 du mois suivant la perception des loyers'}
          </p>
          <p className="text-amber-800">
            {isAr
              ? 'تصريح يقوم مقام حافظة إشعار بالدفع لمداخيل إيجار العقارات المبنية وغير المبنية (المادتان 42 و104 من قانون الضرائب المباشرة CIDTA)، يكتتب لدى قباضة الضرائب التابع لها مكان تواجد العقار المؤجر.'
              : 'Déclaration tenant lieu de bordereau avis de versement des revenus provenant de la location, à titre civil, de biens bâtis et non bâtis (Articles 42 et 104 du CIDTA), à souscrire auprès de la recette des impôts du lieu de situation du bien loué.'}
          </p>
        </div>
      </div>

      {/* Direction & Structure Administrative */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Building className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'الجهة الجبائية المختصة' : 'Administration fiscale compétente'}</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'مديرية الضرائب لولاية' : 'Direction des Impôts de la Wilaya (DIW)'}
            </label>
            <input
              type="text"
              value={data.wilaya}
              onChange={(e) => updateData({ wilaya: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder={isAr ? 'مثال: وهران' : 'Ex: Oran'}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'المصلحة / القباضة المختصة' : 'Structure / Recette des impôts'}
            </label>
            <input
              type="text"
              value={data.structure}
              onChange={(e) => updateData({ structure: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder={isAr ? 'مثال: قباضة الضرائب وهران المركز' : 'Ex: Recette des impôts Oran Centre'}
            />
          </div>
        </div>
      </div>

      {/* Bailleur (المؤجر) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <User className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'معلومات المؤجر (صاحب العقار)' : 'Renseignements concernant le bailleur'}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'الاسم واللقب أو التسمية الاجتماعية' : 'Nom, Prénom ou raison sociale'} *
            </label>
            <input
              type="text"
              value={data.bailleurNom}
              onChange={(e) => updateData({ bailleurNom: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder={isAr ? 'الاسم الكامل أو اسم الشركة' : 'Nom complet ou raison sociale'}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'العنوان الكامل للمؤجر' : 'Adresse complète du bailleur'}
            </label>
            <input
              type="text"
              value={data.bailleurAdresse}
              onChange={(e) => updateData({ bailleurAdresse: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder={isAr ? 'الشارع، الحي، العمارة...' : 'Rue, quartier, bâtiment...'}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'البلدية' : 'Commune'}
            </label>
            <input
              type="text"
              value={data.bailleurCommune}
              onChange={(e) => updateData({ bailleurCommune: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'الولاية' : 'Wilaya'}
            </label>
            <input
              type="text"
              value={data.bailleurWilaya}
              onChange={(e) => updateData({ bailleurWilaya: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'الرمز البريدي' : 'Code postal'}
            </label>
            <input
              type="text"
              value={data.bailleurCodePostal}
              onChange={(e) => updateData({ bailleurCodePostal: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder="31000"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'رقم التعريف الجبائي (NIF)' : 'Numéro d\'Identification Fiscale (NIF)'}
            </label>
            <input
              type="text"
              maxLength={20}
              value={data.bailleurNif}
              onChange={(e) => updateData({ bailleurNif: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none font-mono"
              placeholder="20 أرقام / 20 chiffres"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'رقم التعريف الوطني (NIN)' : 'Numéro d\'Identification National (NIN)'}
            </label>
            <input
              type="text"
              maxLength={18}
              value={data.bailleurNin}
              onChange={(e) => updateData({ bailleurNin: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none font-mono"
              placeholder="18 رقماً / 18 chiffres"
            />
          </div>
        </div>
      </div>

      {/* Preneur (المستأجر) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <FileText className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'معلومات المستأجر (المستغل)' : 'Renseignements concernant le preneur'}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'الاسم واللقب أو التسمية الاجتماعية للمستأجر' : 'Nom, Prénom ou raison sociale du preneur'} *
            </label>
            <input
              type="text"
              value={data.preneurNom}
              onChange={(e) => updateData({ preneurNom: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder={isAr ? 'اسم المستأجر أو الشركة المستأجرة' : 'Nom du locataire ou de la société preneuse'}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'العنوان' : 'Adresse'}
            </label>
            <input
              type="text"
              value={data.preneurAdresse}
              onChange={(e) => updateData({ preneurAdresse: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'البلدية' : 'Commune'}
            </label>
            <input
              type="text"
              value={data.preneurCommune}
              onChange={(e) => updateData({ preneurCommune: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'الولاية' : 'Wilaya'}
            </label>
            <input
              type="text"
              value={data.preneurWilaya}
              onChange={(e) => updateData({ preneurWilaya: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'الرمز البريدي' : 'Code postal'}
            </label>
            <input
              type="text"
              value={data.preneurCodePostal}
              onChange={(e) => updateData({ preneurCodePostal: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'رقم التعريف الجبائي للمستأجر (NIF)' : 'NIF du preneur (si disponible)'}
            </label>
            <input
              type="text"
              maxLength={20}
              value={data.preneurNif}
              onChange={(e) => updateData({ preneurNif: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
