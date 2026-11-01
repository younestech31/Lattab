'use client';

import { GN8FormData } from '@/lib/forms/gn8/schema';
import { User, Briefcase, Plus, Trash2, Building, ShieldCheck } from 'lucide-react';

interface Props {
  data: GN8FormData;
  updateData: (fields: Partial<GN8FormData>) => void;
  isAr: boolean;
}

export default function GN8Step2Identity({ data, updateData, isAr }: Props) {
  return (
    <div className="space-y-8">
      {/* Taxpayer Category (نوع المكلف) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <User className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'صفة المكلف بالضريبة (حاشية 1)' : 'Statut du contribuable (Note 1)'}</span>
        </div>
        <p className="text-xs text-gray-600">
          {isAr
            ? 'وضح ما إذا كان يتعلق الأمر بشخص طبيعي، شخص معنوي (شركة)، أو مقاول ذاتي.'
            : 'Précisez s\'il s\'agit d\'une personne physique, morale (société) ou d\'un auto-entrepreneur.'}
        </p>

        <div className="grid sm:grid-cols-3 gap-4 pt-2">
          {/* Physique */}
          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.taxpayerType === 'physique'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'شخص طبيعي' : 'Personne physique'}
              </span>
              <input
                type="radio"
                name="taxpayerType"
                value="physique"
                checked={data.taxpayerType === 'physique'}
                onChange={() =>
                  updateData({
                    taxpayerType: 'physique',
                    formeJuridique: isAr ? 'شخص طبيعي' : 'Personne physique',
                  })
                }
                className="text-emerald-700 focus:ring-emerald-500"
              />
            </div>
            <span className="text-xs text-gray-500 mt-2 leading-relaxed">
              {isAr ? 'تاجر فردي، حرفي، صاحب مهنة حرة.' : 'Commerçant individuel, artisan, profession libérale.'}
            </span>
          </label>

          {/* Morale */}
          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.taxpayerType === 'morale'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'شخص معنوي (شركة)' : 'Personne morale'}
              </span>
              <input
                type="radio"
                name="taxpayerType"
                value="morale"
                checked={data.taxpayerType === 'morale'}
                onChange={() =>
                  updateData({
                    taxpayerType: 'morale',
                    regime: 'ibs',
                    formeJuridique: 'SARL',
                  })
                }
                className="text-emerald-700 focus:ring-emerald-500"
              />
            </div>
            <span className="text-xs text-gray-500 mt-2 leading-relaxed">
              {isAr ? 'شركة ذات مسؤولية محدودة، ش.ذ.أ، ش.ت.ب، إلخ.' : 'SARL, EURL, SPA, SNC, etc.'}
            </span>
          </label>

          {/* Auto-entrepreneur */}
          <label
            className={`flex flex-col p-4 rounded-xl border cursor-pointer transition ${
              data.taxpayerType === 'auto_entrepreneur'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-900">
                {isAr ? 'مقاول ذاتي' : 'Auto-entrepreneur'}
              </span>
              <input
                type="radio"
                name="taxpayerType"
                value="auto_entrepreneur"
                checked={data.taxpayerType === 'auto_entrepreneur'}
                onChange={() =>
                  updateData({
                    taxpayerType: 'auto_entrepreneur',
                    regime: 'ifu',
                    formeJuridique: isAr ? 'مقاول ذاتي' : 'Auto-entrepreneur',
                  })
                }
                className="text-emerald-700 focus:ring-emerald-500"
              />
            </div>
            <span className="text-xs text-gray-500 mt-2 leading-relaxed">
              {isAr ? 'حامل بطاقة المقاول الذاتي وفق القانون 22-23.' : 'Titulaire de la carte d\'auto-entrepreneur.'}
            </span>
          </label>
        </div>
      </div>

      {/* Taxpayer Name, NIN, Legal Form */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Building className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'التعريف والبيانات الأساسية' : 'Identité et forme juridique'}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'الاسم واللقب / التسمية الاجتماعية *' : 'Nom et prénom / Raison sociale *'}
            </label>
            <input
              type="text"
              required
              value={data.nomRaisonSociale}
              onChange={(e) => updateData({ nomRaisonSociale: e.target.value })}
              placeholder={isAr ? 'مثال: شركة النور للتجارة أو بن عيسى كريم' : 'Ex: SARL EL NOUR ou BENAISSA Karim'}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'رقم التعريف الوطني (NIN - 18 رقماً)' : 'Numéro d\'Identification Nationale (NIN - 18 chiffres)'}
            </label>
            <input
              type="text"
              maxLength={18}
              value={data.nin}
              onChange={(e) => updateData({ nin: e.target.value.replace(/\D/g, '') })}
              placeholder="100000000000000000"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <span className="text-[11px] text-gray-400 mt-1 block">
              {data.nin.length}/18 {isAr ? 'أرقام مدخلة' : 'chiffres saisis'}
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'الشكل القانوني *' : 'Forme juridique *'}
            </label>
            <input
              type="text"
              value={data.formeJuridique}
              onChange={(e) => updateData({ formeJuridique: e.target.value })}
              placeholder={isAr ? 'مثال: شخص طبيعي، SARL، EURL، SPA، إلخ' : 'Ex: SARL, EURL, Personne physique, etc.'}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Main Activity & Secondary Activities */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Briefcase className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'النشاط الرئيسي والنشاطات الثانوية' : 'Activité principale et secondaires'}</span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-800 mb-1">
            {isAr ? 'النشاط الرئيسي *' : 'Activité principale *'}
          </label>
          <input
            type="text"
            required
            value={data.activitePrincipale}
            onChange={(e) => updateData({ activitePrincipale: e.target.value })}
            placeholder={isAr ? 'مثال: تجارة بالتجزئة للمواد الغذائية العامة أو خدمات الاستشارة القانونية' : 'Ex: Commerce de détail, Conseil juridique, etc.'}
            className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Secondary Activities */}
        <div className="pt-2 border-t border-gray-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700">
              {isAr ? 'النشاطات الثانوية وعناوينها (إن وجدت)' : 'Activités secondaires et adresses'}
            </span>
            <span className="text-[11px] text-gray-400">
              {isAr ? 'حتى 3 نشاطات ثانوية' : 'Jusqu\'à 3 activités'}
            </span>
          </div>

          {/* Secondary 1 */}
          <div className="grid sm:grid-cols-2 gap-3 p-3.5 bg-gray-50/70 rounded-xl border border-gray-100">
            <div>
              <label className="block text-[11px] font-medium text-gray-600 mb-1">
                {isAr ? 'نشاط ثانوي 1' : 'Activité secondaire 1'}
              </label>
              <input
                type="text"
                value={data.activiteSec1}
                onChange={(e) => updateData({ activiteSec1: e.target.value })}
                placeholder={isAr ? 'طبيعة النشاط' : 'Nature de l\'activité'}
                className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-gray-600 mb-1">
                {isAr ? 'عنوان النشاط الثانوي 1' : 'Adresse de l\'activité 1'}
              </label>
              <input
                type="text"
                value={data.activiteSec1_adr}
                onChange={(e) => updateData({ activiteSec1_adr: e.target.value })}
                placeholder={isAr ? 'العنوان أو المقر' : 'Adresse ou lieu d\'exercice'}
                className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Secondary 2 */}
          <div className="grid sm:grid-cols-2 gap-3 p-3.5 bg-gray-50/70 rounded-xl border border-gray-100">
            <div>
              <label className="block text-[11px] font-medium text-gray-600 mb-1">
                {isAr ? 'نشاط ثانوي 2' : 'Activité secondaire 2'}
              </label>
              <input
                type="text"
                value={data.activiteSec2}
                onChange={(e) => updateData({ activiteSec2: e.target.value })}
                placeholder={isAr ? 'طبيعة النشاط' : 'Nature de l\'activité'}
                className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-gray-600 mb-1">
                {isAr ? 'عنوان النشاط الثانوي 2' : 'Adresse de l\'activité 2'}
              </label>
              <input
                type="text"
                value={data.activiteSec2_adr}
                onChange={(e) => updateData({ activiteSec2_adr: e.target.value })}
                placeholder={isAr ? 'العنوان أو المقر' : 'Adresse ou lieu d\'exercice'}
                className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Secondary 3 */}
          <div className="p-3.5 bg-gray-50/70 rounded-xl border border-gray-100">
            <label className="block text-[11px] font-medium text-gray-600 mb-1">
              {isAr ? 'نشاط ثانوي 3 وعنوانه' : 'Activité secondaire 3 et adresse'}
            </label>
            <input
              type="text"
              value={data.activiteSec3}
              onChange={(e) => updateData({ activiteSec3: e.target.value })}
              placeholder={isAr ? 'النشاط ومكانه' : 'Activité et localisation'}
              className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
