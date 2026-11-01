'use client';

import { GN8FormData } from '@/lib/forms/gn8/schema';
import { MapPin, Phone, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

interface Props {
  data: GN8FormData;
  updateData: (fields: Partial<GN8FormData>) => void;
  isAr: boolean;
}

export default function GN8Step3Location({ data, updateData, isAr }: Props) {
  // Days since start calculation
  let daysNotice: { text: string; isWarning: boolean } | null = null;
  if (data.dateDebutActivite) {
    const start = new Date(data.dateDebutActivite);
    if (!isNaN(start.getTime())) {
      const now = new Date();
      const diffDays = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays < 0) {
        daysNotice = {
          text: isAr ? 'تاريخ بداية النشاط مستقبلي.' : 'La date de début d\'activité est dans le futur.',
          isWarning: false,
        };
      } else if (diffDays <= 30) {
        daysNotice = {
          text: isAr
            ? `أنت ضمن الأجل القانوني (مضى ${diffDays} يوماً من أصل 30 يوماً).`
            : `Dans le délai légal (${diffDays} jours écoulés sur 30 jours).`,
          isWarning: false,
        };
      } else {
        daysNotice = {
          text: isAr
            ? `تنبيه: انقضى ${diffDays} يوماً من بداية النشاط (تجاوز الأجل القانوني 30 يوماً). قد تُطبق غرامة تأخير.`
            : `Attention : ${diffDays} jours écoulés (délai légal de 30 jours dépassé).`,
          isWarning: true,
        };
      }
    }
  }

  return (
    <div className="space-y-8">
      {/* Implantation & Addresses */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <MapPin className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'عناوين المقرات وممارسة النشاط' : 'Implantation et adresses'}</span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'عنوان المقر الاجتماعي أو مكان ممارسة النشاط *' : 'Adresse du siège social ou lieu d\'activité *'}
            </label>
            <input
              type="text"
              required
              value={data.adresseSiege}
              onChange={(e) => updateData({ adresseSiege: e.target.value })}
              placeholder={isAr ? 'مثال: حي النور، عمارة 04، الطابق الأرضي، وهران' : 'Ex: 25 Bd Larbi Ben M\'hidi, Oran'}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr
                ? 'عنوان إقامة المكلف بالضريبة في الجزائر (أو بالخارج لغير المقيمين)'
                : 'Adresse de résidence du contribuable (en Algérie ou à l\'étranger pour non-résidents)'}
            </label>
            <input
              type="text"
              value={data.adresseResidence}
              onChange={(e) => updateData({ adresseResidence: e.target.value })}
              placeholder={isAr ? 'العنوان الشخصي للمكلف' : 'Adresse personnelle'}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {data.taxpayerType === 'morale' && (
            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                {isAr
                  ? 'عنوان المؤسسة في الجزائر (إطار مخصص للشركات الأجنبية - حاشية 2)'
                  : 'Adresse de l\'établissement en Algérie (pour sociétés étrangères - Note 2)'}
              </label>
              <input
                type="text"
                value={data.adresseEtablissementAlgerie}
                onChange={(e) => updateData({ adresseEtablissementAlgerie: e.target.value })}
                placeholder={isAr ? 'خاص بفروع الشركات الأجنبية في الجزائر' : 'Pour les succursales de sociétés étrangères'}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* Contact & Registrations */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Phone className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'الاتصال والتسجيلات الرسمية' : 'Contact et enregistrements officiels'}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'رقم الهاتف' : 'Numéro de téléphone'}
            </label>
            <input
              type="tel"
              value={data.telephone}
              onChange={(e) => updateData({ telephone: e.target.value })}
              placeholder="0550 12 34 56"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'البريد الإلكتروني' : 'Adresse e-mail'}
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              placeholder="contact@exemple.dz"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr ? 'رقم السجل التجاري (إن وجد)' : 'Numéro du Registre du Commerce (le cas échéant)'}
            </label>
            <input
              type="text"
              value={data.numeroRc}
              onChange={(e) => updateData({ numeroRc: e.target.value })}
              placeholder={isAr ? 'مثال: 31/00-1234567B23' : 'Ex: 31/00-1234567B23'}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              {isAr
                ? 'رقم الاعتماد / بطاقة الحرفي / بطاقة المقاول الذاتي'
                : 'N° Agrément / Carte d\'artisan / Carte auto-entrepreneur'}
            </label>
            <input
              type="text"
              value={data.numeroAgrement}
              onChange={(e) => updateData({ numeroAgrement: e.target.value })}
              placeholder={isAr ? 'رقم البطاقة أو الاعتماد المهني' : 'Numéro de carte ou d\'agrément'}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Declarant Capacity & Activity Start Date */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
          <Calendar className="w-5 h-5 text-emerald-700" />
          <span>{isAr ? 'صفة المصرح وتاريخ بداية النشاط' : 'Qualité du déclarant et date de début'}</span>
        </div>

        {/* Declarant Capacity */}
        <div>
          <label className="block text-xs font-semibold text-gray-800 mb-2">
            {isAr ? 'صفة المصرح في العقار/المحل (حاشية 3: تشطيب غير المعنية):' : 'Qualité du déclarant (Note 3):'}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {([
              { id: 'proprietaire', ar: 'مالك', fr: 'Propriétaire' },
              { id: 'locataire', ar: 'مستأجر', fr: 'Locataire' },
              { id: 'gerant_libre', ar: 'مسير حر', fr: 'Gérant libre' },
              { id: 'gerant_salarie', ar: 'مسير أجير', fr: 'Gérant salarié' },
            ] as const).map((item) => (
              <label
                key={item.id}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
                  data.qualiteDeclarant === item.id
                    ? 'bg-emerald-50/80 border-emerald-400 ring-1 ring-emerald-400 font-bold text-emerald-950'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-xs">{isAr ? item.ar : item.fr}</span>
                <input
                  type="radio"
                  name="qualiteDeclarant"
                  value={item.id}
                  checked={data.qualiteDeclarant === item.id}
                  onChange={() => updateData({ qualiteDeclarant: item.id })}
                  className="text-emerald-700 focus:ring-emerald-500"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Start Date */}
        <div className="pt-3 border-t border-gray-100">
          <label className="block text-xs font-semibold text-gray-800 mb-1">
            {isAr ? 'تاريخ بداية النشاط *' : 'Date de début d\'activité *'}
          </label>
          <input
            type="date"
            required
            value={data.dateDebutActivite}
            onChange={(e) => updateData({ dateDebutActivite: e.target.value })}
            className="w-full sm:w-64 text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
          />

          {daysNotice && (
            <div
              className={`mt-2.5 flex items-center gap-2 p-3 rounded-xl text-xs ${
                daysNotice.isWarning
                  ? 'bg-red-50 text-red-800 border border-red-200'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              }`}
            >
              {daysNotice.isWarning ? (
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              ) : (
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
              )}
              <span>{daysNotice.text}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
