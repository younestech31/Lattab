'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { getEnabledForms } from '@/lib/forms/registry';
import { FileText, ArrowLeft, ArrowRight, ShieldCheck, Scale, AlertCircle, Ruler } from 'lucide-react';

export default function FormsIndex() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const forms = getEnabledForms();

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* General Institutional Disclaimer Banner */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-10 text-emerald-950 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-sm leading-relaxed space-y-2">
            <h2 className="font-bold text-base text-emerald-900">
              {isAr ? 'منظومة الاستمارات الإدارية والجبائية الجزائرية' : 'Plateforme des Formulaires Administratifs et Fiscaux Algériens'}
            </h2>
            <p className="text-gray-700">
              {isAr
                ? 'خدمة إعلامية وإرشادية موجهة لتسهيل ملء وطباعة الاستمارات والنماذج الرسمية المطابقة تماماً لقوالب الإدارة العمومية والمديرية العامة للضرائب، مع ملء الحقول مباشرة على النسخة الرسمية وبدون تخزين أي بيانات شخصية أو مالية على الخادم.'
                : 'Service d\'assistance gratuit et informatif pour le remplissage et l\'impression des formulaires officiels conformes aux gabarits de la Direction Générale des Impôts (DGI). Le traitement s\'effectue exclusivement dans votre navigateur, sans aucun stockage sur serveur.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium pt-1">
              <Scale className="w-4 h-4 text-emerald-700" />
              <span>
                {isAr
                  ? 'أداة مساعدة غير ملزمة — تخضع التصفية النهائية والقبول لاختصاص قباضة الضرائب والمصالح المعنية.'
                  : 'Outil d\'aide non contractuel — la liquidation finale reste soumise au contrôle exclusif de la recette des impôts.'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Forms Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {forms.map((form) => {
          const formHref = isAr ? `/formulaires/${form.slug}` : `/fr/formulaires/${form.slug}`;
          return (
            <div
              key={form.slug}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header info & Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                    <FileText className="w-4 h-4" />
                    <span>{form.officialNumber}</span>
                  </div>
                  {form.badge && (
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md">
                      {isAr ? form.badge.ar : form.badge.fr}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  <Link href={formHref} className="hover:text-emerald-700 transition">
                    {isAr ? form.title.ar : form.title.fr}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {isAr ? form.shortDescription.ar : form.shortDescription.fr}
                </p>

                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-1 mb-6">
                  <span className="font-semibold text-gray-700 block">
                    {isAr ? 'المرجع التشريعي:' : 'Référence légale :'}
                  </span>
                  <p>{isAr ? form.legalRef.ar : form.legalRef.fr}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {isAr ? `${form.pages} صفحات (A4)` : `${form.pages} pages officielles`}
                </span>
                <Link
                  href={formHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm transition shadow-sm"
                >
                  <span>{isAr ? 'بدء التعبئة الرسمية' : 'Remplir le formulaire'}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Precision Metric Auditor Section */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-2xl p-6 sm:p-7 mb-10 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold">
            <Ruler className="w-3.5 h-3.5" />
            <span>{isAr ? 'مدقق الإحداثيات الملمترية الدقيقة' : 'Auditeur métrique de précision'}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold">
            {isAr ? 'فحص ومعايرة إحداثيات الاستمارات بالميلمتر (0.00 مم)' : 'Calibration métrique sub-millimétrique des imprimés DGI'}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            {isAr
              ? 'أداة فنية لمطابقة مواضع الخانات والشبكات الرقمية (NIF / NIN / NAI) على قوالب PDF الرسمية بدقة الميلمتر، مع إمكانية تحميل نماذج المعايرة والشبكات الطباعية.'
              : 'Inspection détaillée de l\'alignement des grilles et des champs sur les formulaires officiels DGI avec téléchargement des gabarits de calibration.'}
          </p>
        </div>
        <Link
          href={isAr ? '/formulaires/auditeur' : '/fr/formulaires/auditeur'}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-sm transition shadow flex-shrink-0"
        >
          <span>{isAr ? 'فتح مدقق الإحداثيات' : 'Ouvrir l\'auditeur'}</span>
          {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </Link>
      </div>

      {/* Security and Privacy Assurance */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs sm:text-sm text-gray-600 space-y-2">
        <div className="flex items-center gap-2 font-bold text-gray-800">
          <AlertCircle className="w-4 h-4 text-emerald-700" />
          <span>{isAr ? 'ضمان السرية التامة وحماية المعطيات' : 'Confidentialité et sécurité des données'}</span>
        </div>
        <p>
          {isAr
            ? 'تتم جميع العمليات الحسابية وتوليد المستندات بصيغة PDF محلياً وبشكل حصري في متصفحك (Client-Side). لا يتم إرسال أو تخزين الأسماء، الأرقام التعريفية الوطنية (NIN/NIF)، أو المبالغ المالية على أي خادم أو قاعدة بيانات تماشياً مع قواعد السرية المهنية وقانون حماية المعطيات الشخصية رقم 18-07.'
            : 'Toutes les opérations de calcul et la génération du document PDF s\'effectuent exclusivement et localement dans votre navigateur. Aucun nom, NIF/NIN ou montant financier n\'est transmis ni enregistré sur nos serveurs, conformément à la loi 18-07 relative à la protection des données.'}
        </p>
      </div>
    </div>
  );
}
