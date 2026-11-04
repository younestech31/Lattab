'use client';

import { GN8FormData } from '@/lib/forms/gn8/schema';
import { digitsOnly } from '@/lib/forms/normalizeDigits';
import { Building2, Hash, Info, Layers } from 'lucide-react';

interface Props {
  data: GN8FormData;
  updateData: (fields: Partial<GN8FormData>) => void;
  isAr: boolean;
}

export default function GN8Step1Admin({ data, updateData, isAr }: Props) {
  return (
    <div className="space-y-8">
      {/* 30-Day Legal Requirement Alert */}
      <div className="bg-amber-50/80 border border-amber-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
        <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          <p className="font-bold text-amber-950 mb-1">
            {isAr
              ? 'أجل إيداع التصريح القانوني: 30 يوماً من تاريخ بداية النشاط'
              : 'Délai légal de souscription : 30 jours suivant le début d\'activité'}
          </p>
          <p className="text-amber-800">
            {isAr
              ? 'وفق المادة 51 من قانون الرسوم على رقم الأعمال والمادة 183 من قانون الضرائب المباشرة، يلتزم كل مكلف يشرع في ممارسة نشاط تجاري، صناعي، حرفي أو مهني باكتتاب هذا التصريح لدى مفتشية الضرائب التابع لها مكان النشاط.'
              : 'Conformément à l\'article 51 du CTCA et à l\'article 183 du CIDTA, toute personne physique ou morale qui entreprend une activité doit souscrire cette déclaration dans les 30 jours auprès du service fiscal compétent.'}
          </p>
        </div>
      </div>

      {/* Tax Regime (النظام الجبائي) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Layers className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'النظام الجبائي الخاضع له' : 'Régime d\'imposition applicable'}</span>
        </div>
        <p className="text-xs text-gray-600">
          {isAr
            ? 'ضع علامة في الخانة المناسبة للنظام الجبائي الخاضع له نشاطك التجاري أو المهني.'
            : 'Cochez la case correspondant au régime fiscal auquel votre activité est assujettie.'}
        </p>

        <div className="grid sm:grid-cols-3 gap-4 pt-2">
          {/* IFU */}
          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.regime === 'ifu'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'الضريبة الجزافية الوحيدة' : 'Impôt Forfaitaire Unique'}
              </span>
              <input
                type="radio"
                name="regime"
                value="ifu"
                checked={data.regime === 'ifu'}
                onChange={() => updateData({ regime: 'ifu' })}
                className="text-emerald-700 focus:ring-emerald-500"
              />
            </div>
            <span className="inline-block mt-2 font-semibold text-xs text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded w-fit">
              IFU
            </span>
            <span className="text-xs text-gray-500 mt-2 leading-relaxed">
              {isAr
                ? 'لصغار التجار والحرفيين والأنشطة الخاضعة للضريبة الجزافية.'
                : 'Pour les personnes physiques sous le régime forfaitaire.'}
            </span>
          </label>

          {/* IRG */}
          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.regime === 'irg'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'الضريبة على الدخل الإجمالي' : 'Impôt sur le Revenu Global'}
              </span>
              <input
                type="radio"
                name="regime"
                value="irg"
                checked={data.regime === 'irg'}
                onChange={() => updateData({ regime: 'irg' })}
                className="text-emerald-700 focus:ring-emerald-500"
              />
            </div>
            <span className="inline-block mt-2 font-semibold text-xs text-blue-800 bg-blue-100/60 px-2 py-0.5 rounded w-fit">
              IRG (Régime Réel)
            </span>
            <span className="text-xs text-gray-500 mt-2 leading-relaxed">
              {isAr
                ? 'للأشخاص الطبيعيين في النظام الحقيقي (أرباح صناعية/تجارية، مهن حرة).'
                : 'Pour les personnes physiques au régime réel (BIC, BNC).'}
            </span>
          </label>

          {/* IBS */}
          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.regime === 'ibs'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'الضريبة على أرباح الشركات' : 'Impôt sur les Sociétés'}
              </span>
              <input
                type="radio"
                name="regime"
                value="ibs"
                checked={data.regime === 'ibs'}
                onChange={() => updateData({ regime: 'ibs' })}
                className="text-emerald-700 focus:ring-emerald-500"
              />
            </div>
            <span className="inline-block mt-2 font-semibold text-xs text-indigo-800 bg-indigo-100/60 px-2 py-0.5 rounded w-fit">
              IBS
            </span>
            <span className="text-xs text-gray-500 mt-2 leading-relaxed">
              {isAr
                ? 'للأشخاص المعنويين والشركات التجارية (SARL, EURL, SPA).'
                : 'Pour les sociétés de capitaux et personnes morales.'}
            </span>
          </label>
        </div>

        {/* IRG Category specification if IRG selected */}
        {data.regime === 'irg' && (
          <div className="pt-3 border-t border-gray-100">
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'صنف الخضوع في الضريبة على الدخل الإجمالي (صنف)' : 'Catégorie d\'imposition IRG'}
            </label>
            <input
              type="text"
              value={data.irgCategorie}
              onChange={(e) => updateData({ irgCategorie: e.target.value })}
              placeholder={isAr ? 'مثال: أرباح المهن غير التجارية BNC أو صناعية وتجارية BIC' : 'Ex: BNC, BIC, etc.'}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        )}
      </div>

      {/* Administrative Routing (الترويسة الإدارية) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Building2 className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'الترويسة الإدارية لمكان النشاط' : 'Rattachement administratif'}</span>
        </div>
        <p className="text-xs text-gray-600">
          {isAr
            ? 'حدد مديرية الضرائب والمفتشية/المركز الجبائي المختص إقليمياً بمكان ممارسة النشاط.'
            : 'Indiquez la Direction des impôts de rattachement et le service fiscal compétent.'}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'مديرية الضرائب لولاية' : 'Direction des Impôts de la wilaya de'}
            </label>
            <input
              type="text"
              value={data.directionWilaya}
              onChange={(e) => updateData({ directionWilaya: e.target.value })}
              placeholder={isAr ? 'مثال: وهران' : 'Ex: Oran'}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'المصلحة / المفتشية' : 'Service / Inspection des impôts'}
            </label>
            <input
              type="text"
              value={data.service}
              onChange={(e) => updateData({ service: e.target.value })}
              placeholder={isAr ? 'مثال: مفتشية الضرائب وهران وسط' : 'Ex: Inspection Oran Centre'}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Identifiers (NIF & NAI) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Hash className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'المعرفات الجبائية (إن توفرت)' : 'Identifiants fiscaux (le cas échéant)'}</span>
        </div>
        <p className="text-xs text-gray-600">
          {isAr
            ? 'تُدرج الأرقام في الخانات الرسمية أعلى يمين الاستمارة (NIF: 20 خانة، رقم المادة: 11 خانة).'
            : 'Les numéros sont imprimés dans les cases dédiées en haut à droite (NIF : 20 cases, Article : 11 cases).'}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'رقم التعريف الجبائي (NIF - حتى 20 رقماً)' : 'Numéro d\'Identification Fiscale (NIF - 20 chiffres)'}
            </label>
            <input
              type="text"
              maxLength={20}
              value={data.nif}
              onChange={(e) => updateData({ nif: digitsOnly(e.target.value) })}
              placeholder="00000000000000000000"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 tracking-wider focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <span className="text-[11px] text-gray-400 mt-1 block">
              {data.nif.length}/20 {isAr ? 'أرقام مدخلة' : 'chiffres saisis'}
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'رقم المادة (NAI - حتى 11 رقماً)' : 'Numéro d\'Article d\'Imposition (NAI - 11 chiffres)'}
            </label>
            <input
              type="text"
              maxLength={11}
              value={data.nai}
              onChange={(e) => updateData({ nai: digitsOnly(e.target.value) })}
              placeholder="00000000000"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 tracking-wider focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <span className="text-[11px] text-gray-400 mt-1 block">
              {data.nai.length}/11 {isAr ? 'أرقام مدخلة' : 'chiffres saisis'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
