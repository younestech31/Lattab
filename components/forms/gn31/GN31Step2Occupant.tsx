'use client';

import { GN31FormData } from '@/lib/forms/gn31/schema';
import { User, Building } from 'lucide-react';

interface Props {
  data: GN31FormData;
  updateData: (fields: Partial<GN31FormData>) => void;
  isAr: boolean;
}

export default function GN31Step2Occupant({ data, updateData, isAr }: Props) {
  return (
    <div className="space-y-8">
      {/* Occupant Type Selection */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <label className="block text-sm font-bold text-gray-900">
          {isAr ? 'الصفة القانونية للشاغل / المصرح' : 'Qualité juridique du déclarant'}
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => updateData({ occupantType: 'physique' })}
            className={`p-4 rounded-xl border text-right transition flex items-start gap-3.5 ${
              data.occupantType === 'physique'
                ? 'bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-500/20'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'
            }`}
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                data.occupantType === 'physique'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              <User className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-bold text-sm text-gray-900">
                {isAr ? 'شخص طبيعي (فرد / مواطن)' : 'Personne physique'}
              </span>
              <span className="block text-xs text-gray-600 mt-0.5">
                {isAr ? 'مالك فردي أو شاغل أو صاحب حق انتفاع' : 'Propriétaire individuel ou usufruitier'}
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => updateData({ occupantType: 'morale' })}
            className={`p-4 rounded-xl border text-right transition flex items-start gap-3.5 ${
              data.occupantType === 'morale'
                ? 'bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-500/20'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'
            }`}
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                data.occupantType === 'morale'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-bold text-sm text-gray-900">
                {isAr ? 'شخص معنوي (شركة / مؤسسة)' : 'Personne morale (Société)'}
              </span>
              <span className="block text-xs text-gray-600 mt-0.5">
                {isAr ? 'شركة تجارية، مؤسسة، أو صاحب امتياز' : 'Société, établissement ou concessionnaire'}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Personne physique form */}
      {data.occupantType === 'physique' ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-700" />
              <span>{isAr ? 'معلومات الشخص الطبيعي' : 'Informations de la personne physique'}</span>
            </h3>
            {/* Qualité */}
            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="text-gray-500">{isAr ? 'الصفة:' : 'Qualité :'}</span>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="qualitePhysique"
                  value="proprietaire"
                  checked={data.qualitePhysique === 'proprietaire'}
                  onChange={() => updateData({ qualitePhysique: 'proprietaire' })}
                  className="text-emerald-700 focus:ring-emerald-500"
                />
                <span>{isAr ? 'مالك / شاغل' : 'Propriétaire / Occupant'}</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="qualitePhysique"
                  value="usufruitier"
                  checked={data.qualitePhysique === 'usufruitier'}
                  onChange={() => updateData({ qualitePhysique: 'usufruitier' })}
                  className="text-emerald-700 focus:ring-emerald-500"
                />
                <span>{isAr ? 'مُنتفِع' : 'Usufruitier'}</span>
              </label>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'الاسم واللقب' : 'Nom et Prénom'}
              </label>
              <input
                type="text"
                value={data.nomPrenom}
                onChange={(e) => updateData({ nomPrenom: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={isAr ? 'محمد بن علي' : 'Mohamed Benali'}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'تاريخ ومكان الميلاد' : 'Date et lieu de naissance'}
              </label>
              <input
                type="text"
                value={data.dateLieuNaissance}
                onChange={(e) => updateData({ dateLieuNaissance: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={isAr ? '1980/05/12 بوهران' : '12/05/1980 à Oran'}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'عنوان الإقامة' : 'Adresse de résidence'}
              </label>
              <input
                type="text"
                value={data.adresseResidence}
                onChange={(e) => updateData({ adresseResidence: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={isAr ? 'حي مطلع الفجر، عمارة 4' : 'Cité Matlaâ El Fadjr, Bât 4'}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'البلدية' : 'Commune de résidence'}
              </label>
              <input
                type="text"
                value={data.communeResidence}
                onChange={(e) => updateData({ communeResidence: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={isAr ? 'وهران' : 'Oran'}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'الولاية' : 'Wilaya de résidence'}
              </label>
              <input
                type="text"
                value={data.wilayaResidence}
                onChange={(e) => updateData({ wilayaResidence: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={isAr ? 'وهران' : 'Oran'}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'الرمز البريدي' : 'Code postal'}
              </label>
              <input
                type="text"
                value={data.codePostal}
                onChange={(e) => updateData({ codePostal: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="31000"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'رقم الهاتف' : 'Téléphone'}
              </label>
              <input
                type="text"
                value={data.telephone}
                onChange={(e) => updateData({ telephone: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="0550 00 00 00"
                dir="ltr"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => updateData({ email: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="contact@exemple.dz"
                dir="ltr"
              />
            </div>
          </div>
        </div>
      ) : (
        /* Personne morale form */
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <Building className="w-4 h-4 text-emerald-700" />
              <span>{isAr ? 'معلومات الشخص المعنوي (الشركة)' : 'Informations de la personne morale'}</span>
            </h3>
            {/* Qualité */}
            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="text-gray-500">{isAr ? 'الصفة:' : 'Qualité :'}</span>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="qualiteMorale"
                  value="proprietaire"
                  checked={data.qualiteMorale === 'proprietaire'}
                  onChange={() => updateData({ qualiteMorale: 'proprietaire' })}
                  className="text-emerald-700 focus:ring-emerald-500"
                />
                <span>{isAr ? 'مالك' : 'Propriétaire'}</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="qualiteMorale"
                  value="concessionnaire"
                  checked={data.qualiteMorale === 'concessionnaire'}
                  onChange={() => updateData({ qualiteMorale: 'concessionnaire' })}
                  className="text-emerald-700 focus:ring-emerald-500"
                />
                <span>{isAr ? 'صاحب الامتياز' : 'Concessionnaire'}</span>
              </label>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'اسم الشركة / التسمية الاجتماعية' : 'Raison sociale / Nom de la société'}
              </label>
              <input
                type="text"
                value={data.nomSociete}
                onChange={(e) => updateData({ nomSociete: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={isAr ? 'شركة الإخوة للتجارة SARL' : 'SARL Frères & Cie'}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'عنوان المقر الاجتماعي' : 'Adresse du siège social'}
              </label>
              <input
                type="text"
                value={data.siegeSocial}
                onChange={(e) => updateData({ siegeSocial: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={isAr ? 'المنطقة الصناعية السانية، وهران' : 'Zone Industrielle Es Sénia, Oran'}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'رقم الهاتف' : 'Téléphone'}
              </label>
              <input
                type="text"
                value={data.telSociete}
                onChange={(e) => updateData({ telSociete: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="041 00 00 00"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'الفاكس' : 'Fax'}
              </label>
              <input
                type="text"
                value={data.faxSociete}
                onChange={(e) => updateData({ faxSociete: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="041 00 00 01"
                dir="ltr"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {isAr ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <input
                type="email"
                value={data.emailSociete}
                onChange={(e) => updateData({ emailSociete: e.target.value })}
                className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="contact@societe.dz"
                dir="ltr"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
