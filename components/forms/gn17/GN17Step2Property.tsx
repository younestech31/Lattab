'use client';

import { GN17FormData } from '@/lib/forms/gn17/schema';
import { Home, FileCheck, Calendar, MapPin } from 'lucide-react';

interface Props {
  data: GN17FormData;
  updateData: (fields: Partial<GN17FormData>) => void;
  isAr: boolean;
}

export default function GN17Step2Property({ data, updateData, isAr }: Props) {
  return (
    <div className="space-y-8">
      <section className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <header className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
            <Home className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              {isAr ? 'تعيين العقار أو الحقوق العينية المتنازل عنها' : 'Désignation du bien ou des droits réels cédés'}
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              {isAr
                ? 'أدخل البيانات كما تظهر في سند الملكية والوثائق الجبائية للعقار.'
                : 'Reprenez les informations telles qu’elles figurent sur le titre et les documents fiscaux du bien.'}
            </p>
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-700">
              {isAr ? 'طبيعة العقار المتنازل عنه *' : 'Nature du bien cédé *'}
            </label>
            <input
              type="text"
              required
              value={data.natureBien}
              onChange={(e) => updateData({ natureBien: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'أرض عارية، منزل فردي، ملكية جماعية...' : 'Terrain nu, maison individuelle, bien collectif...'}
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-700">
              {isAr ? 'القوام الإجمالي (مبني أو غير مبني)' : 'Consistance globale (bâtie ou non bâtie)'}
            </label>
            <input
              type="text"
              value={data.consistanceGlobale}
              onChange={(e) => updateData({ consistanceGlobale: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'المساحة الإجمالية، الجزء المبني وغير المبني وعدد الطوابق عند الاقتضاء' : 'Surface totale, parties bâties/non bâties et niveaux si nécessaire'}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs font-medium text-gray-700">
              {isAr ? 'طبيعة الحقوق العينية المتنازل عنها' : 'Nature des droits réels cédés'}
            </label>
            <input
              type="text"
              value={data.natureDroitsReels}
              onChange={(e) => updateData({ natureDroitsReels: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'الملكية التامة، حق الانتفاع...' : 'Pleine propriété, usufruit...'}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs font-semibold text-gray-700">
              {isAr ? 'عنوان أو مكان موقع العقار *' : 'Adresse ou lieu de situation du bien *'}
            </label>
            <div className="relative">
              <MapPin className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                required
                value={data.situationBien}
                onChange={(e) => updateData({ situationBien: e.target.value })}
                className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 pe-10 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                placeholder={isAr ? 'العنوان الدقيق، الحي، رقم العمارة والشقة...' : 'Adresse précise, cité, immeuble et appartement...'}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              {isAr ? 'بلدية موقع العقار' : 'Commune du bien'}
            </label>
            <input
              type="text"
              value={data.commune}
              onChange={(e) => updateData({ commune: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              {isAr ? 'ولاية موقع العقار' : 'Wilaya du bien'}
            </label>
            <input
              type="text"
              value={data.wilayaBien}
              onChange={(e) => updateData({ wilayaBien: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              {isAr ? 'الرمز البريدي' : 'Code postal'}
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={data.codePostalBien}
              onChange={(e) => updateData({ codePostalBien: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              {isAr ? 'رقم المادة الضريبية للعقار' : 'Numéro d’article d’imposition du bien'}
            </label>
            <input
              type="text"
              value={data.articleImposition}
              onChange={(e) => updateData({ articleImposition: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs font-semibold text-gray-700">
              {isAr ? 'طبيعة العملية المنجزة' : 'Nature de l’opération réalisée'}
            </label>
            <select
              value={data.natureOperation}
              onChange={(e) => updateData({ natureOperation: e.target.value as GN17FormData['natureOperation'] })}
              className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            >
              <option value="unspecified">{isAr ? 'اختر طبيعة العملية' : 'Sélectionner la nature de l’opération'}</option>
              <option value="onerous">{isAr ? 'تنازل بمقابل مادي' : 'Cession à titre onéreux'}</option>
              <option value="donation">{isAr ? 'هبة' : 'Donation'}</option>
            </select>
          </div>
        </div>
      </section>

      <section className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <header className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
            <FileCheck className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              {isAr ? 'أصل الملكية وتواريخ العقود' : 'Origine de propriété et dates des actes'}
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              {isAr ? 'بيانات أصل الملكية وعقد التنازل الحالي.' : 'Origine du bien et acte de cession actuel.'}
            </p>
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs font-medium text-gray-700">
              {isAr ? 'أصل الملكية (إرث، هبة، شراء...)' : 'Origine de la propriété (succession, donation, acquisition...)'}
            </label>
            <input
              type="text"
              value={data.originePropriete}
              onChange={(e) => updateData({ originePropriete: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              {isAr ? 'تاريخ الاقتناء أو الإنشاء' : 'Date d’acquisition ou de création'}
            </label>
            <div className="relative">
              <Calendar className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="date"
                value={data.dateActeOrigine}
                onChange={(e) => updateData({ dateActeOrigine: e.target.value })}
                className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 pe-10 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              {isAr ? 'تاريخ تحرير عقد التنازل' : 'Date d’établissement de l’acte de cession'}
            </label>
            <div className="relative">
              <Calendar className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="date"
                value={data.dateActeCession}
                onChange={(e) => updateData({ dateActeCession: e.target.value })}
                className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 pe-10 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs font-medium text-gray-700">
              {isAr ? 'طبيعة سند أو عقد التنازل' : 'Nature de l’acte de cession'}
            </label>
            <input
              type="text"
              value={data.natureActeCession}
              onChange={(e) => updateData({ natureActeCession: e.target.value })}
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'عقد موثق، عقد إداري، سند ملكية...' : 'Acte notarié, acte administratif, titre de propriété...'}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
