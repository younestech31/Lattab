'use client';

import { GN17FormData } from '@/lib/forms/gn17/schema';
import { Home, FileCheck, Calendar, Layers, MapPin } from 'lucide-react';

interface Props {
  data: GN17FormData;
  updateData: (fields: Partial<GN17FormData>) => void;
  isAr: boolean;
}

export default function GN17Step2Property({ data, updateData, isAr }: Props) {
  return (
    <div className="space-y-8">
      {/* Property Designation */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Home className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              {isAr ? '1. تعيين العقار أو الحقوق العينية المتنازل عنها' : '1. Désignation du bien ou des droits réels cédés'}
            </h3>
            <p className="text-xs text-gray-500">
              {isAr ? 'طبيعة العقار وموقعه ومراجعه المساحية' : 'Nature, localisation et références cadastrales'}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'طبيعة العقار المتنازل عنه *' : 'Nature du bien cédé *'}
            </label>
            <input
              type="text"
              required
              value={data.natureBien}
              onChange={(e) => updateData({ natureBien: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'شقة سكنية (F4) بالطابق الثالث / قطعة أرض صالحة للبناء' : 'Appartement F4 / Villa / Terrain à bâtir'}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'موقع العقار (العنوان الدقيق والحي) *' : 'Situation du bien (Adresse et quartier) *'}
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-gray-400 absolute top-3 end-3 pointer-events-none" />
              <input
                type="text"
                required
                value={data.situationBien}
                onChange={(e) => updateData({ situationBien: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                placeholder={isAr ? 'حي العقيد لطفي، عمارة D24، رقم 768' : 'Cité Akid Lotfi, Imm D24, Appt 768'}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'البلدية' : 'Commune'}
            </label>
            <input
              type="text"
              value={data.commune}
              onChange={(e) => updateData({ commune: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'وهران' : 'Oran'}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'المراجع المساحية (القسم ومجموعة الملكية)' : 'Références cadastrales (Section, îlot, lot)'}
            </label>
            <div className="relative">
              <Layers className="w-4 h-4 text-gray-400 absolute top-3 end-3 pointer-events-none" />
              <input
                type="text"
                value={data.cadastreRef}
                onChange={(e) => updateData({ cadastreRef: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
                placeholder={isAr ? 'قسم 12، مجموعة ملكية رقم 45' : 'Section 12, Lot 45'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Property Origin */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <FileCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              {isAr ? '2. أصل الملكية وسند التملك السابق' : '2. Origine de propriété et acquisition antérieure'}
            </h3>
            <p className="text-xs text-gray-500">
              {isAr ? 'بيانات العقد الذي اكتسب به المتنازل العقار وتاريخه' : 'Comment le cédant est devenu propriétaire'}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'طبيعة سند الملكية الأصلي' : 'Nature de l\'acte d\'origine'}
            </label>
            <input
              type="text"
              value={data.originePropriete}
              onChange={(e) => updateData({ originePropriete: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'عقد بيع موثق مشهر بالمحافظة العقارية' : 'Acte notarié de vente publié à la conservation foncière'}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'تاريخ عقد التملك الأصلي' : 'Date de l\'acte d\'acquisition'}
            </label>
            <input
              type="date"
              value={data.dateActeOrigine}
              onChange={(e) => updateData({ dateActeOrigine: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'مراجع الإشهار العقاري (حجم / رقم)' : 'Références de publication (Volume / Numéro)'}
            </label>
            <input
              type="text"
              value={data.refPublicationOrigine}
              onChange={(e) => updateData({ refPublicationOrigine: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
              placeholder={isAr ? 'حجم 1245 رقم 67' : 'Vol 1245 N° 67'}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'تاريخ الإنجاز أو الحيازة' : 'Date d\'achèvement ou d\'entrée en jouissance'}
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-gray-400 absolute top-3 end-3 pointer-events-none" />
              <input
                type="date"
                value={data.dateAchevement}
                onChange={(e) => updateData({ dateAchevement: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'طبيعة عقد التنازل الحالي' : 'Nature de l\'acte de cession actuel'}
            </label>
            <input
              type="text"
              value={data.natureActeCession}
              onChange={(e) => updateData({ natureActeCession: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'عقد بيع نهائي' : 'Acte de vente définitive'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
