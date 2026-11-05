'use client';

import { GN17FormData } from '@/lib/forms/gn17/schema';
import { Building, User, Users, MapPin, Hash } from 'lucide-react';

interface Props {
  data: GN17FormData;
  updateData: (fields: Partial<GN17FormData>) => void;
  isAr: boolean;
}

const inputClass =
  'w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600';

export default function GN17Step1Parties({ data, updateData, isAr }: Props) {
  const text = {
    wilaya: isAr ? 'الولاية' : 'Wilaya',
    destination: isAr ? 'هيكل استقبال التصريح' : 'Structure destinataire',
    seller: isAr ? 'المتنازل (المكلف بالضريبة)' : 'Le cédant (contribuable)',
    sellerName: isAr ? 'الاسم واللقب أو التسمية الاجتماعية *' : 'Nom, prénom ou raison sociale *',
    sellerAddress: isAr ? 'عنوان المتنازل *' : 'Adresse du cédant *',
    commune: isAr ? 'بلدية إقامة المتنازل' : 'Commune de résidence du cédant',
    sellerWilaya: isAr ? 'ولاية إقامة المتنازل' : 'Wilaya de résidence du cédant',
    postal: isAr ? 'الرمز البريدي' : 'Code postal',
    nif: isAr ? 'رقم التعريف الجبائي (NIF)' : 'Numéro d’identification fiscale (NIF)',
    nin: isAr ? 'رقم التعريف الوطني (NIN)' : 'Numéro d’identification national (NIN)',
    buyers: isAr ? 'المتنازل لهم (المشترون)' : 'Les acquéreurs',
    buyerHint: isAr
      ? 'أدخل أسماء المشترين وعناوينهم كما ستظهر في الأسطر الثلاثة المخصصة لهم في الاستمارة الرسمية.'
      : 'Renseignez les noms et adresses des acquéreurs dans les trois lignes prévues par l’imprimé officiel.',
    name: isAr ? 'الاسم واللقب أو التسمية الاجتماعية' : 'Nom, prénom ou raison sociale',
    address: isAr ? 'العنوان' : 'Adresse',
  };

  const buyerFields = [
    { number: 1, nameKey: 'buyer1NomPrenom' as const, addressKey: 'buyer1Adresse' as const },
    { number: 2, nameKey: 'buyer2NomPrenom' as const, addressKey: 'buyer2Adresse' as const },
    { number: 3, nameKey: 'buyer3NomPrenom' as const, addressKey: 'buyer3Adresse' as const },
  ];

  return (
    <div className="space-y-8" dir={isAr ? 'rtl' : 'ltr'}>
      <section className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
        <h3 className="flex items-center gap-2 text-sm font-bold text-emerald-950">
          <Building className="h-4 w-4 text-emerald-700" aria-hidden="true" />
          {isAr ? 'التوجيه الإداري للتصريح' : 'Rattachement administratif de la déclaration'}
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-xs font-semibold text-gray-700">
            {text.wilaya}
            <input
              type="text"
              value={data.wilaya}
              onChange={(e) => updateData({ wilaya: e.target.value })}
              className={inputClass + ' mt-1.5'}
              placeholder={isAr ? 'وهران' : 'Oran'}
            />
          </label>

          <label className="block text-xs font-semibold text-gray-700">
            {text.destination}
            <input
              type="text"
              value={data.recette}
              onChange={(e) => updateData({ recette: e.target.value })}
              className={inputClass + ' mt-1.5'}
              placeholder={isAr ? 'مصلحة الضرائب المختصة' : 'Service des impôts compétent'}
            />
          </label>
        </div>
      </section>

      <section className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <header className="flex items-center gap-3 border-b border-gray-100 pb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
            <User className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-base font-bold text-gray-900">{text.seller}</h3>
            <p className="mt-1 text-xs text-gray-500">
              {isAr ? 'بيانات المتنازل كما يجب أن ترد في التصريح.' : 'Identité et adresse du cédant à reporter sur la déclaration.'}
            </p>
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-xs font-semibold text-gray-700 sm:col-span-2">
            {text.sellerName}
            <input
              type="text"
              value={data.cedantNomPrenom}
              onChange={(e) => updateData({ cedantNomPrenom: e.target.value })}
              className={inputClass + ' mt-1.5'}
            />
          </label>

          <label className="block text-xs font-semibold text-gray-700 sm:col-span-2">
            {text.sellerAddress}
            <span className="relative mt-1.5 block">
              <MapPin className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                value={data.cedantAdresse}
                onChange={(e) => updateData({ cedantAdresse: e.target.value })}
                className={inputClass + ' pe-10'}
                placeholder={isAr ? 'الشارع، الحي، رقم العمارة والشقة...' : 'Rue, cité, immeuble, appartement...'}
              />
            </span>
          </label>

          <label className="block text-xs font-semibold text-gray-700">
            {text.commune}
            <input
              type="text"
              value={data.cedantCommune}
              onChange={(e) => updateData({ cedantCommune: e.target.value })}
              className={inputClass + ' mt-1.5'}
            />
          </label>

          <label className="block text-xs font-semibold text-gray-700">
            {text.sellerWilaya}
            <input
              type="text"
              value={data.cedantWilaya}
              onChange={(e) => updateData({ cedantWilaya: e.target.value })}
              className={inputClass + ' mt-1.5'}
            />
          </label>

          <label className="block text-xs font-semibold text-gray-700">
            {text.postal}
            <input
              type="text"
              inputMode="numeric"
              value={data.cedantCodePostal}
              onChange={(e) => updateData({ cedantCodePostal: e.target.value })}
              className={inputClass + ' mt-1.5'}
              dir="ltr"
            />
          </label>

          <label className="block text-xs font-semibold text-gray-700">
            {text.nif}
            <span className="relative mt-1.5 block">
              <Hash className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                inputMode="numeric"
                value={data.cedantNif}
                onChange={(e) => updateData({ cedantNif: e.target.value })}
                className={inputClass + ' pe-10'}
                dir="ltr"
              />
            </span>
          </label>

          <label className="block text-xs font-semibold text-gray-700">
            {text.nin}
            <span className="relative mt-1.5 block">
              <Hash className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                inputMode="numeric"
                value={data.cedantNin}
                onChange={(e) => updateData({ cedantNin: e.target.value })}
                className={inputClass + ' pe-10'}
                dir="ltr"
              />
            </span>
          </label>
        </div>
      </section>

      <section className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <header className="flex items-center gap-3 border-b border-gray-100 pb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
            <Users className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-base font-bold text-gray-900">{text.buyers}</h3>
            <p className="mt-1 text-xs leading-relaxed text-gray-500">{text.buyerHint}</p>
          </div>
        </header>

        <div className="space-y-4">
          {buyerFields.map((buyer) => (
            <div key={buyer.number} className="grid gap-4 rounded-xl border border-gray-100 bg-gray-50/70 p-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <span className="mb-2 block text-xs font-bold text-emerald-800">
                  {isAr ? `المشتري رقم ${buyer.number}` : `Acquéreur N° ${buyer.number}`}
                  {buyer.number === 1 ? ' *' : ''}
                </span>
                <label className="block text-xs font-semibold text-gray-700">
                  {text.name}
                  <input
                    type="text"
                    required={buyer.number === 1}
                    value={data[buyer.nameKey]}
                    onChange={(e) => updateData({ [buyer.nameKey]: e.target.value })}
                    className={inputClass + ' mt-1.5'}
                  />
                </label>
              </div>

              <label className="block text-xs font-semibold text-gray-700 sm:col-span-2">
                {text.address}
                <input
                  type="text"
                  value={data[buyer.addressKey]}
                  onChange={(e) => updateData({ [buyer.addressKey]: e.target.value })}
                  className={inputClass + ' mt-1.5'}
                />
              </label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
