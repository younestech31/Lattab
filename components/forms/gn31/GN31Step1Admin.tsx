'use client';

import { GN31FormData } from '@/lib/forms/gn31/schema';
import { Building2, Hash, FileCheck, Info } from 'lucide-react';

interface Props {
  data: GN31FormData;
  updateData: (fields: Partial<GN31FormData>) => void;
  isAr: boolean;
}

export default function GN31Step1Admin({ data, updateData, isAr }: Props) {
  return (
    <div className="space-y-8">
      {/* Type of Declaration */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <FileCheck className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'نوع التصريح المكتتب' : 'Type de déclaration souscrite'}</span>
        </div>
        <p className="text-xs text-gray-600">
          {isAr
            ? 'حدد ما إذا كان هذا التصريح يُقدّم لأول مرة عن العقار أم أنه تصريح لاحق ناتج عن تغيير في هيكل العقار أو في وجهة تخصيصه.'
            : 'Précisez si cette déclaration concerne la première année d\'application ou un changement de structure/affectation.'}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <label
            className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition ${
              data.declarationType === 'first_year'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <input
              type="radio"
              name="declarationType"
              value="first_year"
              checked={data.declarationType === 'first_year'}
              onChange={() => updateData({ declarationType: 'first_year' })}
              className="mt-1 text-emerald-700 focus:ring-emerald-500"
            />
            <div>
              <span className="block font-bold text-sm text-gray-900">
                {isAr ? 'السنة الأولى من تطبيق الرسم العقاري (1)' : 'Première année d\'application (1)'}
              </span>
              <span className="block text-xs text-gray-600 mt-0.5 leading-relaxed">
                {isAr
                  ? 'للملكيات الجديدة أو التي تخضع للتصريح لأول مرة خلال شهرين من الإنجاز أو الإشغال.'
                  : 'Pour les nouvelles constructions ou déclarations initiales.'}
              </span>
            </div>
          </label>

          <label
            className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition ${
              data.declarationType === 'change'
                ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <input
              type="radio"
              name="declarationType"
              value="change"
              checked={data.declarationType === 'change'}
              onChange={() => updateData({ declarationType: 'change' })}
              className="mt-1 text-emerald-700 focus:ring-emerald-500"
            />
            <div>
              <span className="block font-bold text-sm text-gray-900">
                {isAr ? 'التغيير في الهيكل أو في التخصيص (2)' : 'Changement de structure ou d\'affectation (2)'}
              </span>
              <span className="block text-xs text-gray-600 mt-0.5 leading-relaxed">
                {isAr
                  ? 'في حالة إدخال توسعة أو تغيير وجهة استعمال العقار (سكني إلى تجاري أو العكس).'
                  : 'En cas d\'extension, surélévation ou changement d\'usage du bien.'}
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* Administrative Routing Box */}
      <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 space-y-4">
        <h3 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
          <Building2 className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'بيانات التوجيه الإداري والجبائي' : 'Rattachement administratif et fiscal'}</span>
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'مديرية الضرائب لولاية' : 'Direction des Impôts de Wilaya'}
            </label>
            <input
              type="text"
              value={data.directionWilaya}
              onChange={(e) => updateData({ directionWilaya: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'وهران' : 'Oran'}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'البلدية' : 'Commune'}
            </label>
            <input
              type="text"
              value={data.commune}
              onChange={(e) => updateData({ commune: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'وهران' : 'Oran'}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {isAr ? 'مصلحة المفتشية / م ج ض' : 'Service de l\'Inspection / CDI'}
            </label>
            <input
              type="text"
              value={data.inspection}
              onChange={(e) => updateData({ inspection: e.target.value })}
              className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={isAr ? 'مفتشية الضرائب وهران شرق' : 'Inspection Oran Est'}
            />
          </div>
        </div>
      </div>

      {/* Identifiers Grid */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
        <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
          <Hash className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'أرقام التعريف الجبائي والوطني' : 'Identifiants fiscaux et nationaux'}</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'رقم التعريف الجبائي (NIF)' : 'NIF (20 chiffres)'}
            </label>
            <input
              type="text"
              maxLength={20}
              value={data.nif}
              onChange={(e) => updateData({ nif: e.target.value })}
              className="w-full px-3.5 py-2 text-sm font-mono tracking-wider bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="00000000000000000000"
              dir="ltr"
            />
            <span className="block text-[11px] text-gray-500 mt-1">
              {isAr ? '20 رقماً مخصصاً في الاستمارة الرسمية' : '20 cases réservées'}
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'رقم المادة (NAI)' : 'Numéro d\'article (NAI - 11 chiffres)'}
            </label>
            <input
              type="text"
              maxLength={11}
              value={data.nai}
              onChange={(e) => updateData({ nai: e.target.value })}
              className="w-full px-3.5 py-2 text-sm font-mono tracking-wider bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="00000000000"
              dir="ltr"
            />
            <span className="block text-[11px] text-gray-500 mt-1">
              {isAr ? '11 رقماً (رقم المادة في جدول الضرائب)' : '11 cases réservées'}
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isAr ? 'رقم التعريف الوطني (NIN)' : 'NIN (18 chiffres)'}
            </label>
            <input
              type="text"
              maxLength={18}
              value={data.nin}
              onChange={(e) => updateData({ nin: e.target.value })}
              className="w-full px-3.5 py-2 text-sm font-mono tracking-wider bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="000000000000000000"
              dir="ltr"
            />
            <span className="block text-[11px] text-gray-500 mt-1">
              {isAr ? '18 رقماً من بطاقة التعريف أو جواز السفر البيومتري' : '18 chiffres (CNI / Passeport)'}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2.5 p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-900">
          <Info className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
          <p>
            {isAr
              ? 'تُدرج أرقام NIF و NAI و NIN في الخانات المربعة المخصصة لها على النسخة الرسمية للمطبوع ج 31 لضمان معالجة آلية دقيقة لدى مصالح الضرائب.'
              : 'Ces identifiants sont insérés directement dans les cases prévues du gabarit officiel pour faciliter l\'enregistrement auprès de l\'administration fiscale.'}
          </p>
        </div>
      </div>
    </div>
  );
}
