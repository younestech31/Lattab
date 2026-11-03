'use client';

import { GN51FormData } from '@/lib/forms/gn51/schema';
import { Home, Calendar, Tag } from 'lucide-react';

interface Props {
  data: GN51FormData;
  updateData: (fields: Partial<GN51FormData>) => void;
  isAr: boolean;
}

export default function GN51Step2Property({ data, updateData, isAr }: Props) {
  return (
    <div className="space-y-8">
      {/* Property Details */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Home className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'تعيين وطبيعة العقار المؤجر' : 'Désignation du bien loué'}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'طبيعة العقار المؤجر' : 'Nature du bien loué'} *
            </label>
            <input
              type="text"
              value={data.natureBien}
              onChange={(e) => updateData({ natureBien: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder={isAr ? 'مثال: شقة سكنية F3، محل تجاري، قطعة أرض...' : 'Ex: Appartement F3, local commercial, terrain...'}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'مكان تواجد العقار المؤجر (العنوان)' : 'Lieu de situation du bien loué (adresse)'} *
            </label>
            <input
              type="text"
              value={data.lieuSituation}
              onChange={(e) => updateData({ lieuSituation: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder={isAr ? 'الشارع، الحي، رقم العمارة أو المحل...' : 'Rue, cité, n° bâtiment ou local...'}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'البلدية' : 'Commune'}
            </label>
            <input
              type="text"
              value={data.communeBien}
              onChange={(e) => updateData({ communeBien: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'الولاية' : 'Wilaya'}
            </label>
            <input
              type="text"
              value={data.wilayaBien}
              onChange={(e) => updateData({ wilayaBien: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'الرمز البريدي' : 'Code postal'}
            </label>
            <input
              type="text"
              value={data.codePostalBien}
              onChange={(e) => updateData({ codePostalBien: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'رقم مادة الضريبة للعقار (NAI)' : 'Numéro d\'article d\'imposition du bien'}
            </label>
            <input
              type="text"
              value={data.articleImposition}
              onChange={(e) => updateData({ articleImposition: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none font-mono"
              placeholder={isAr ? 'مستخرج من وصل الرسم العقاري' : 'Extrait de la taxe foncière'}
            />
          </div>
        </div>
      </div>

      {/* Destination du bien */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Tag className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'استعمال العقار المؤجر (الوجهة)' : 'Destination du bien loué'}</span>
        </div>
        <p className="text-xs text-gray-600">
          {isAr
            ? 'اختر الاستعمال القانوني للعقار لتحديد النسبة الضريبية المطبقة وفق المادة 104 من قانون الضرائب.'
            : 'Sélectionnez l\'affectation du bien pour appliquer le taux légal (Art. 104 du CIDTA).'}
        </p>

        <div className="grid sm:grid-cols-3 gap-3 pt-2">
          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.destination === 'habitation'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'سكني (طابع سكني)' : 'Habitation'}
              </span>
              <input
                type="radio"
                name="destination"
                value="habitation"
                checked={data.destination === 'habitation'}
                onChange={() => updateData({ destination: 'habitation' })}
                className="text-emerald-600 focus:ring-emerald-500"
              />
            </div>
            <span className="text-[11px] text-gray-500 mt-1">
              {isAr ? 'معدل الضريبة: 7%' : 'Taux IRG : 7%'}
            </span>
          </label>

          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.destination === 'commercial'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'تجاري أو مهني' : 'Commercial / Pro'}
              </span>
              <input
                type="radio"
                name="destination"
                value="commercial"
                checked={data.destination === 'commercial'}
                onChange={() => updateData({ destination: 'commercial' })}
                className="text-emerald-600 focus:ring-emerald-500"
              />
            </div>
            <span className="text-[11px] text-gray-500 mt-1">
              {isAr ? 'معدل الضريبة: 15%' : 'Taux IRG : 15%'}
            </span>
          </label>

          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.destination === 'agricole'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'فلاحي (أرض فلاحية)' : 'Agricole'}
              </span>
              <input
                type="radio"
                name="destination"
                value="agricole"
                checked={data.destination === 'agricole'}
                onChange={() => updateData({ destination: 'agricole' })}
                className="text-emerald-600 focus:ring-emerald-500"
              />
            </div>
            <span className="text-[11px] text-gray-500 mt-1">
              {isAr ? 'معدل الضريبة: 10%' : 'Taux IRG : 10%'}
            </span>
          </label>
        </div>
      </div>

      {/* Contract Duration and Periodicity */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Calendar className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'مدة العقد ووتيرة دفع الإيجار' : 'Période du contrat et versement'}</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'تاريخ بداية العقد' : 'Date de début du contrat'}
            </label>
            <input
              type="text"
              value={data.dateDebutContrat}
              onChange={(e) => updateData({ dateDebutContrat: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder="JJ/MM/AAAA"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'تاريخ نهاية العقد' : 'Date de fin du contrat'}
            </label>
            <input
              type="text"
              value={data.dateFinContrat}
              onChange={(e) => updateData({ dateFinContrat: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder="JJ/MM/AAAA"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {isAr ? 'وتيرة دفع الإيجار' : 'Périodicité de versement'}
            </label>
            <input
              type="text"
              value={data.periodicite}
              onChange={(e) => updateData({ periodicite: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
              placeholder={isAr ? 'شهرياً، فصلياً، سنوياً...' : 'Mensuelle, trimestrielle, annuelle...'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
