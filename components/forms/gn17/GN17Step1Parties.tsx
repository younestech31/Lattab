'use client';

import { GN17FormData } from '@/lib/forms/gn17/schema';
import { User, Users, Building, MapPin, Hash, Briefcase } from 'lucide-react';

interface Props {
  data: GN17FormData;
  updateData: (fields: Partial<GN17FormData>) => void;
  isAr: boolean;
}

export default function GN17Step1Parties({ data, updateData, isAr }: Props) {
  return (
    <div className="space-y-8">
      {/* Administrative Routing Box */}
      <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 space-y-4">
        <h3 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
          <Building className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'بيانات التوجيه الجبائي (القباضة والمفتشية)' : 'Rattachement fiscal (Recette & Inspection)'}</span>
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'الولاية' : 'Wilaya'}
            </label>
            <input
              type="text"
              value={data.wilaya}
              onChange={(e) => updateData({ wilaya: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'وهران' : 'Oran'}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'مفتشية الضرائب المختصة' : 'Inspection des Impôts'}
            </label>
            <input
              type="text"
              value={data.inspection}
              onChange={(e) => updateData({ inspection: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'مفتشية الضرائب وهران شرق' : 'Inspection Oran Est'}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'قباضة الضرائب لموقع العقار' : 'Recette des Impôts du lieu de situation'}
            </label>
            <input
              type="text"
              value={data.recette}
              onChange={(e) => updateData({ recette: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'قباضة العقيد لطفي' : 'Recette Akid Lotfi'}
            />
          </div>
        </div>
      </div>

      {/* Cédant (المتنازل / البائع) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              {isAr ? '1. المتنازل (المكلف بالضريبة)' : '1. Le Cédant (Contribuable)'}
            </h3>
            <p className="text-xs text-gray-500">
              {isAr ? 'الطرف البائع أو المتنازل الملزم بالتصريح' : 'La personne physique ou morale qui cède le bien'}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'الاسم واللقب أو التسمية الاجتماعية *' : 'Nom et Prénom ou Raison Sociale *'}
            </label>
            <input
              type="text"
              required
              value={data.cedantNomPrenom}
              onChange={(e) => updateData({ cedantNomPrenom: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'محمد بن عيسى' : 'Mohamed BENAISSA'}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'تاريخ الازدياد' : 'Date de naissance'}
            </label>
            <input
              type="date"
              value={data.cedantDateNaissance}
              onChange={(e) => updateData({ cedantDateNaissance: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'مكان الازدياد' : 'Lieu de naissance'}
            </label>
            <input
              type="text"
              value={data.cedantLieuNaissance}
              onChange={(e) => updateData({ cedantLieuNaissance: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'وهران' : 'Oran'}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'النسب (ابن... و...)' : 'Filiation (Fils/Fille de... et de...)'}
            </label>
            <input
              type="text"
              value={data.cedantFiliation}
              onChange={(e) => updateData({ cedantFiliation: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              placeholder={isAr ? 'ابن أحمد وفاطمة منصوري' : 'Fils de Ahmed et de Fatima MANSOURI'}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'العنوان الشخصي أو المقر الاجتماعي *' : 'Adresse personnelle ou Siège social *'}
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-gray-400 absolute top-3 end-3 pointer-events-none" />
              <input
                type="text"
                required
                value={data.cedantAdresse}
                onChange={(e) => updateData({ cedantAdresse: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                placeholder={isAr ? 'حي العقيد لطفي، عمارة D24، وهران' : 'Cité Akid Lotfi, Imm D24, Oran'}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'رقم التعريف الجبائي / الوطني (NIF / NIN)' : 'NIF ou NIN'}
            </label>
            <div className="relative">
              <Hash className="w-4 h-4 text-gray-400 absolute top-3 end-3 pointer-events-none" />
              <input
                type="text"
                value={data.cedantNif}
                onChange={(e) => updateData({ cedantNif: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
                placeholder="1980310100..."
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'المهنة أو النشاط' : 'Profession'}
            </label>
            <div className="relative">
              <Briefcase className="w-4 h-4 text-gray-400 absolute top-3 end-3 pointer-events-none" />
              <input
                type="text"
                value={data.cedantProfession}
                onChange={(e) => updateData({ cedantProfession: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                placeholder={isAr ? 'تاجر / موظف' : 'Commerçant / Salarié'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cessionnaires (المتنازل لهم / المشترون) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              {isAr ? '2. المتنازل لهم (المشترون)' : '2. Les Cessionnaires (Acheteurs)'}
            </h3>
            <p className="text-xs text-gray-500">
              {isAr ? 'الأطراف المقتنية للعقار (المشتري الأول إلزامي، ويمكن إضافة مشترين آخرين)' : 'Les acquéreurs du bien immobilier'}
            </p>
          </div>
        </div>

        {/* Buyer 1 */}
        <div className="space-y-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100">
          <div className="font-semibold text-xs text-emerald-800 uppercase tracking-wider">
            {isAr ? 'المشتري الأول (الرئيسي) *' : 'Acquéreur N° 1 (Principal) *'}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isAr ? 'الاسم واللقب *' : 'Nom et Prénom *'}
              </label>
              <input
                type="text"
                required
                value={data.buyer1NomPrenom}
                onChange={(e) => updateData({ buyer1NomPrenom: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500"
                placeholder={isAr ? 'كريم قدور' : 'Karim KADDOUR'}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isAr ? 'تاريخ ومكان الازدياد' : 'Date et lieu de naissance'}
              </label>
              <input
                type="text"
                value={data.buyer1DateLieu}
                onChange={(e) => updateData({ buyer1DateLieu: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500"
                placeholder={isAr ? '1985-04-12 بوهران' : '12/04/1985 à Oran'}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isAr ? 'رقم التعريف الوطني / الجبائي' : 'NIN / NIF'}
              </label>
              <input
                type="text"
                value={data.buyer1Nif}
                onChange={(e) => updateData({ buyer1Nif: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
                placeholder="1085..."
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {isAr ? 'العنوان' : 'Adresse'}
              </label>
              <input
                type="text"
                value={data.buyer1Adresse}
                onChange={(e) => updateData({ buyer1Adresse: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500"
                placeholder={isAr ? 'وهران' : 'Oran'}
              />
            </div>
          </div>
        </div>

        {/* Optional Buyer 2 */}
        <div className="pt-2">
          <details className="group border border-dashed border-gray-200 rounded-xl p-4">
            <summary className="text-xs font-semibold text-gray-700 cursor-pointer list-none flex items-center justify-between">
              <span>{isAr ? '+ إضافة مشتري ثانٍ (في حالة الشراء على الشياع)' : '+ Ajouter un 2ème acquéreur (Indivision)'}</span>
              <span className="text-emerald-700 text-xs font-bold group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="grid sm:grid-cols-2 gap-4 mt-4 pt-3 border-t border-gray-100">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  {isAr ? 'الاسم واللقب (المشتري 2)' : 'Nom et Prénom (Acheteur 2)'}
                </label>
                <input
                  type="text"
                  value={data.buyer2NomPrenom}
                  onChange={(e) => updateData({ buyer2NomPrenom: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  {isAr ? 'تاريخ ومكان الازدياد' : 'Date et lieu de naissance'}
                </label>
                <input
                  type="text"
                  value={data.buyer2DateLieu}
                  onChange={(e) => updateData({ buyer2DateLieu: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  {isAr ? 'العنوان' : 'Adresse'}
                </label>
                <input
                  type="text"
                  value={data.buyer2Adresse}
                  onChange={(e) => updateData({ buyer2Adresse: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-xl bg-white"
                />
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
