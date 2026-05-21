import React from 'react';
import { Accordion } from './ui/Accordion';
import { JsonLdScript } from './schema';
import { DocumentChecklist } from './DocumentChecklist';
import { procedureTypes, generalDocumentsAr, generalDocumentsFr } from '@/lib/data/procedures';
import { Language } from '@/lib/i18n/translations';

const IconComponents = [
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
];

const uiTranslations = {
  ar: {
    badge: 'الإجراءات',
    title: 'الوثائق والإجراءات المطلوبة',
    description: 'دليل شامل للوثائق المطلوبة والإجراءات المتبعة لكل نوع من المعاملات التوثيقية',
    generalTitle: 'وثائق عامة مطلوبة في أغلب العقود',
    generalSubtitle: 'هذه الوثائق تُطلب غالبًا مهما كان نوع العقد',
    accordionTitle: 'الوثائق والإجراءات حسب نوع المعاملة',
    docsTitle: 'الوثائق المطلوبة',
    stepsTitle: 'خطوات الإجراء',
    feesTitle: 'رسوم ومصاريف التوثيق',
    feesIntro: 'مصاريف الموثق في الجزائر عادة تشمل:',
    feeItems: ['أتعاب الموثق', 'حقوق التسجيل', 'حقوق الشهر العقاري (للعقارات)', 'الطوابع والرسوم الجبائية', 'مصاريف النسخ'],
    feeNote: '* تختلف الرسوم حسب نوع العقد، قيمة العقار أو المال، وطبيعة الإجراءات المطلوبة.',
    notesTitle: 'ملاحظات مهمة',
    notes: [
      'بعض الوثائق يجب أن تكون حديثة وليست قديمة.',
      'إذا كان العقار غير ممسوح أو توجد به مشاكل في السندات فقد تتعقد الإجراءات.',
      'في حالة وجود ورثة قصر أو محجور عليهم يلزم أحيانًا إذن قضائي.',
      'إذا كان أحد الأطراف أجنبيًا قد تُطلب وثائق إضافية أو ترجمة رسمية.',
      'الموثق يملك صلاحية طلب أي وثيقة إضافية لضمان صحة العقد.'
    ]
  },
  fr: {
    badge: 'Procédures',
    title: 'Documents et procédures requis',
    description: 'Guide complet des documents nécessaires et des étapes à suivre pour chaque type de transaction notariale',
    generalTitle: 'Documents généraux requis pour la plupart des actes',
    generalSubtitle: 'Ces documents sont généralement demandés quel que soit le type d\'acte',
    accordionTitle: 'Documents et procédures par type de transaction',
    docsTitle: 'Documents requis',
    stepsTitle: 'Étapes de la procédure',
    feesTitle: 'Frais et émoluments notariaux',
    feesIntro: 'Les frais de notaire en Algérie comprennent généralement :',
    feeItems: ['Émoluments du notaire', 'Droits d\'enregistrement', 'Droits de publicité foncière (pour l\'immobilier)', 'Timbres et taxes fiscales', 'Frais d\'expédition et de copies'],
    feeNote: '* Les frais varient selon le type d\'acte, la valeur du bien ou des fonds, et la nature des formalités requises.',
    notesTitle: 'Notes importantes',
    notes: [
      'Certains documents doivent être récents.',
      'Si le bien n\'est pas cadastré ou présente des problèmes de titres, les procédures peuvent être compliquées.',
      'En présence d\'héritiers mineurs ou d\'interdits, une autorisation judiciaire est parfois nécessaire.',
      'Si l\'une des parties est étrangère, des documents supplémentaires ou une traduction officielle peuvent être requis.',
      'Le notaire a le pouvoir de demander tout document supplémentaire pour garantir la validité de l\'acte.'
    ]
  }
};

const Procedures = async ({ lang = 'ar' }: { lang?: Language }) => {
  const isAr = lang === 'ar';
  
  const ui = uiTranslations[lang];
  const generalDocs = isAr ? generalDocumentsAr : generalDocumentsFr;

  return (
    <section id="procedures" className="scroll-mt-20 md:scroll-mt-24 py-12 bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <JsonLdScript
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": procedureTypes.map((procedure, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "HowTo",
              "name": isAr ? procedure.titleAr : procedure.titleFr,
              "description": isAr ? `الإجراءات المطلوبة لـ ${procedure.titleAr}` : `Procédures requises pour ${procedure.titleFr}`,
              "step": (isAr ? procedure.stepsAr : procedure.stepsFr).map((step, stepIndex) => ({
                "@type": "HowToStep",
                "position": stepIndex + 1,
                "text": step
              }))
            }
          }))
        }}
      />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {ui.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {ui.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {ui.description}
          </p>
        </div>

        {/* General Documents */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{ui.generalTitle}</h3>
                <p className="text-gray-500 text-sm mt-1">{ui.generalSubtitle}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {generalDocs.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Procedures Accordion */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{ui.accordionTitle}</h3>
          <Accordion 
            items={procedureTypes.map((procedure) => {
              const Icon = IconComponents[procedure.iconIndex];
              const title = isAr ? procedure.titleAr : procedure.titleFr;
              const documents = isAr ? procedure.documentsAr : procedure.documentsFr;
              const steps = isAr ? procedure.stepsAr : procedure.stepsFr;
              
              return {
                title: title,
                icon: <Icon />,
                content: (
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Documents */}
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {ui.docsTitle}
                      </h4>
                        <DocumentChecklist documents={documents} contractType={title} />
                    </div>

                    {/* Steps */}
                    <div className="bg-emerald-50 rounded-xl p-5">
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        {ui.stepsTitle}
                      </h4>
                      <ul className="space-y-3">
                        {steps.map((step, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                            <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {idx + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              };
            })}
          />
        </div>

        {/* Fees and Expenses */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{ui.feesTitle}</h3>
            <p className="text-gray-600 mb-4">{ui.feesIntro}</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {ui.feeItems.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg text-center font-medium text-gray-700">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              {ui.feeNote}
            </p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-4">{ui.notesTitle}</h4>
                <ul className="space-y-3">
                  {ui.notes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-amber-900">
                      <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
