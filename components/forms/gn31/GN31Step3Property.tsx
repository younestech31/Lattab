'use client';

import { GN31FormData } from '@/lib/forms/gn31/schema';
import { Home, MapPin, Calendar, Layers, CheckSquare } from 'lucide-react';

interface Props {
  data: GN31FormData;
  updateData: (fields: Partial<GN31FormData>) => void;
  isAr: boolean;
}

export default function GN31Step3Property({ data, updateData, isAr }: Props) {
  const natureOptions = [
    {
      id: 'individuel',
      labelAr: 'سكن فردي (فيلا)',
      labelFr: 'Logement individuel',
      descAr: 'فيلا مستقلة، سكن أرضي أو طابقي خاص',
    },
    {
      id: 'appartement',
      labelAr: 'شقة في مبنى جماعي',
      labelFr: 'Appartement en copropriété',
      descAr: 'شقة سكنية ضمن عمارة أو ترقية عقارية',
    },
    {
      id: 'collectif',
      labelAr: 'مبنى جماعي / شبه جماعي',
      labelFr: 'Immeuble collectif',
      descAr: 'عمارة سكنية كاملة تضم عدة طوابق أو شقق',
    },
    {
      id: 'professionnel',
      labelAr: 'محل ذو استعمال مهني',
      labelFr: 'Local à usage professionnel',
      descAr: 'متجر، مكتب، مستودع، أو نشاط تجاري',
    },
    {
      id: 'terrain',
      labelAr: 'قطعة أرض / غير مبنية',
      labelFr: 'Propriété non bâtie / Terrain',
      descAr: 'أرض فلاحية (مسقية/يابسة) أو أرض معدة للبناء',
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Property Location */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
        <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'القسم I — موقع الملكية' : 'Section I — Situation du bien'}</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'الولاية' : 'Wilaya'}
            </label>
            <input
              type="text"
              value={data.propWilaya}
              onChange={(e) => updateData({ propWilaya: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'وهران' : 'Oran'}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'البلدية' : 'Commune'}
            </label>
            <input
              type="text"
              value={data.propCommune}
              onChange={(e) => updateData({ propCommune: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'وهران' : 'Oran'}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'الشارع / الحي / النهج' : 'Rue / Boulevard / Cité'}
            </label>
            <input
              type="text"
              value={data.propRue}
              onChange={(e) => updateData({ propRue: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'حي العقيد لطفي، الشارع الرئيسي' : 'Boulevard Akid Lotfi'}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'توضيحات أخرى (رقم الباب، العمارة، الطابق)' : 'Autres précisions (N° porte, Bâtiment, Étage)'}
            </label>
            <input
              type="text"
              value={data.propDetails}
              onChange={(e) => updateData({ propDetails: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'عمارة ج، المدخل 2، الطابق 4، باب رقم 14' : 'Bâtiment C, Entrée 2, Étage 4, Porte 14'}
            />
          </div>
        </div>
      </div>

      {/* 2. Nature of Property */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
          <Home className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'القسم III — طبيعة الملكية' : 'Section III — Nature de la propriété'}</span>
        </h3>
        <p className="text-xs text-gray-600">
          {isAr
            ? 'اختر طبيعة الملكية ليتم وضع علامة الشطب (X) بدقة في الخانة المحددة على الاستمارة وتفعيل الأقسام المناسبة.'
            : 'Sélectionnez la nature de la propriété pour cocher la case correspondante sur le formulaire.'}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {natureOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => updateData({ natureBien: opt.id as GN31FormData['natureBien'] })}
              className={`p-4 rounded-xl border text-right transition flex flex-col justify-between ${
                data.natureBien === opt.id
                  ? 'bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-500/20'
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div>
                <span className="block font-bold text-sm text-gray-900">
                  {isAr ? opt.labelAr : opt.labelFr}
                </span>
                <span className="block text-xs text-gray-600 mt-1 leading-relaxed">
                  {isAr ? opt.descAr : opt.labelFr}
                </span>
              </div>
              {data.natureBien === opt.id && (
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                  <CheckSquare className="w-3.5 h-3.5" />
                  <span>{isAr ? 'محدد' : 'Sélectionné'}</span>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Dates */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
        <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
          <Calendar className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'تواريخ الشراء وإتمام البناء والإشغال' : 'Dates d\'acquisition, achèvement et occupation'}</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'تاريخ الشراء' : 'Date d\'achat'}
            </label>
            <input
              type="date"
              value={data.dateAchat}
              onChange={(e) => updateData({ dateAchat: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'تاريخ إتمام بناء الملكية' : 'Date d\'achèvement de la construction'}
            </label>
            <input
              type="date"
              value={data.dateAchevement}
              onChange={(e) => updateData({ dateAchevement: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'تاريخ الإشغال الجزئي للملكية (إن وُجد)' : 'Date d\'occupation partielle'}
            </label>
            <input
              type="date"
              value={data.dateOccupationPartielle}
              onChange={(e) => updateData({ dateOccupationPartielle: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'تاريخ إشغال الملكية (النهائي)' : 'Date d\'occupation totale'}
            </label>
            <input
              type="date"
              value={data.dateOccupationTotale}
              onChange={(e) => updateData({ dateOccupationTotale: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* 4. Areas & Specifics based on nature */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">
        <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'تفاصيل الاستعمال والمساحات' : 'Affectation et superficies'}</span>
        </h3>

        {/* Residential options (Individuel or Appartement) */}
        {(data.natureBien === 'individuel' || data.natureBien === 'appartement') && (
          <div className="grid sm:grid-cols-2 gap-4 pb-4 border-b border-gray-100">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                {isAr ? 'طبيعة محل الإقامة' : 'Nature de la résidence'}
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input
                    type="radio"
                    name="usageResidence"
                    value="principale"
                    checked={data.usageResidence === 'principale'}
                    onChange={() => updateData({ usageResidence: 'principale' })}
                    className="text-emerald-700 focus:ring-emerald-500"
                  />
                  <span>{isAr ? 'محل إقامة رئيسية' : 'Résidence principale'}</span>
                </label>
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input
                    type="radio"
                    name="usageResidence"
                    value="secondaire"
                    checked={data.usageResidence === 'secondaire'}
                    onChange={() => updateData({ usageResidence: 'secondaire' })}
                    className="text-emerald-700 focus:ring-emerald-500"
                  />
                  <span>{isAr ? 'محل إقامة ثانوية' : 'Résidence secondaire'}</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                {isAr ? 'حالة الإيجار' : 'Statut locatif'}
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input
                    type="radio"
                    name="isLoue"
                    checked={data.isLoueSelected && !data.isLoue}
                    onChange={() => updateData({ isLoue: false, isLoueSelected: true })}
                    className="text-emerald-700 focus:ring-emerald-500"
                  />
                  <span>{isAr ? 'غير مؤجر (شاغل ذاتي)' : 'Non loué'}</span>
                </label>
                <label className="flex items-center gap-2 text-xs cursor-pointer">
                  <input
                    type="radio"
                    name="isLoue"
                    checked={data.isLoueSelected && data.isLoue}
                    onChange={() => updateData({ isLoue: true, isLoueSelected: true })}
                    className="text-emerald-700 focus:ring-emerald-500"
                  />
                  <span>{isAr ? 'مُؤجَّر' : 'Loué'}</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Collective building nb étages */}
        {data.natureBien === 'collectif' && (
          <div className="grid sm:grid-cols-2 gap-4 pb-4 border-b border-gray-100">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'عدد الطوابق في المبنى الجماعي' : 'Nombre d\'étages'}
              </label>
              <input
                type="number"
                min="0"
                value={data.nbEtages || ''}
                onChange={(e) => updateData({ nbEtages: Number(e.target.value) })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="4"
              />
            </div>
          </div>
        )}

        {/* Areas for built properties */}
        {data.natureBien !== 'terrain' ? (
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'المساحة الكلية (م²)' : 'Superficie totale (m²)'}
              </label>
              <input
                type="number"
                min="0"
                value={data.superficieTotale || ''}
                onChange={(e) => updateData({ superficieTotale: Number(e.target.value) })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="150"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'المساحة السكنية (م²)' : 'Superficie habitation (m²)'}
              </label>
              <input
                type="number"
                min="0"
                value={data.superficieHabitation || ''}
                onChange={(e) => updateData({ superficieHabitation: Number(e.target.value) })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="120"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'المساحة المهنية / التجارية (م²)' : 'Superficie professionnelle (m²)'}
              </label>
              <input
                type="number"
                min="0"
                value={data.superficieProfessionnelle || ''}
                onChange={(e) => updateData({ superficieProfessionnelle: Number(e.target.value) })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="0"
              />
            </div>

            {data.natureBien === 'individuel' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isAr ? 'مساحة الملحقات المشتركة (م²)' : 'Superficie dépendances (m²)'}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={data.superficieDependances || ''}
                    onChange={(e) => updateData({ superficieDependances: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="25"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {isAr ? 'الملحقات غير المبنية: حديقة / فناء (م²)' : 'Jardin / Cour non bâtie (m²)'}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={data.superficieNonBatie || ''}
                    onChange={(e) => updateData({ superficieNonBatie: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="50"
                  />
                </div>
              </>
            )}
          </div>
        ) : (
          /* Areas for non-built lands (Page 3) */
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'أرض فلاحية مسقية (بالهكتار)' : 'Terre agricole irriguée (Hectares)'}
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={data.surfaceAgricoleIrriguee || ''}
                onChange={(e) => updateData({ surfaceAgricoleIrriguee: Number(e.target.value) })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'أرض فلاحية يابسة (بالهكتار)' : 'Terre agricole non irriguée (Hectares)'}
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={data.surfaceAgricoleNonIrriguee || ''}
                onChange={(e) => updateData({ surfaceAgricoleNonIrriguee: Number(e.target.value) })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'أرض معدة للبناء (م²)' : 'Terrain constructible (m²)'}
              </label>
              <input
                type="number"
                min="0"
                value={data.surfaceTerrainConstructible || ''}
                onChange={(e) => updateData({ surfaceTerrainConstructible: Number(e.target.value) })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="300"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
