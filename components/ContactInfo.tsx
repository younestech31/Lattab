import React from 'react';
import { Language, translations } from '@/lib/i18n/translations';

export default function ContactInfo({ lang }: { lang: Language }) {
  const isAr = lang === 'ar';
  const t_info = translations[lang].contact.info;
  
  return (
    <address itemScope itemType="https://schema.org/LocalBusiness" className="space-y-6 no-print not-italic" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Address */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="text-start">
            <h3 className="font-bold text-gray-800 mb-1">{t_info.address}</h3>
            <p className="text-gray-600 text-sm" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <a
                href="https://maps.app.goo.gl/NwPD6ik2evPreyCc7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 transition-colors"
                itemProp="streetAddress"
              >
                {isAr ? (
                  <>
                    حي 557 مسكن، العمارة D24، الطابق الأول، رقم 768
                    <br />
                    العقيد لطفي، وهران
                  </>
                ) : (
                  <>
                    Cité 557 Logements, Bâtiment D24, 1er Étage, N° 768
                    <br />
                    Akid Lotfi, Oran
                  </>
                )}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="text-start">
            <h3 className="font-bold text-gray-800 mb-1">{t_info.phone}</h3>
            <div className="text-gray-600 text-sm space-y-2">
              <div className="flex items-center gap-2">
                <a href="tel:+213562296981" itemProp="telephone" className="hover:text-emerald-600 transition-colors font-medium" dir="ltr">
                  +213 562 29 69 81
                </a>
                <span className={`text-gray-400 text-xs ${isAr ? 'mr-2' : 'ml-2'}`}>{t_info.phone_office}</span>
              </div>
              <div className="flex items-center gap-2">
                <a href="tel:+213558440001" itemProp="telephone" className="hover:text-emerald-600 transition-colors font-medium" dir="ltr">
                  +213 558 44 00 01
                </a>
                <span className={`text-gray-400 text-xs ${isAr ? 'mr-2' : 'ml-2'}`}>{t_info.phone_support}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="text-start">
            <h3 className="font-bold text-gray-800 mb-1">{t_info.email}</h3>
            <p className="text-gray-600 text-sm">
              <a href="mailto:maitrelattabmohamed@gmail.com" itemProp="email" className="hover:text-emerald-600 transition-colors" dir="ltr">
                maitrelattabmohamed@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-start">
            <h3 className="font-bold text-gray-800 mb-1">{t_info.working_hours}</h3>
            <p className="text-gray-600 text-sm" itemProp="openingHours" content="Su-Th 08:30-16:00">
              {t_info.working_hours_details}
            </p>
          </div>
        </div>
      </div>
    </address>
  );
}
