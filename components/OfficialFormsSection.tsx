import Link from 'next/link';
import { FileText, Printer, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '@/lib/i18n/translations';

interface OfficialFormsSectionProps {
  lang?: Language;
}

export default function OfficialFormsSection({ lang = 'ar' }: OfficialFormsSectionProps) {
  const isAr = lang === 'ar';

  const forms = [
    {
      slug: 'gn17',
      num: isAr ? 'سلسلة ج رقم 17' : 'Série G N° 17',
      title: isAr ? 'التصريح بفائض القيمة العقارية' : 'Déclaration de plus-value immobilière',
      desc: isAr
        ? 'التصريح بالضريبة على الدخل الإجمالي (IRG) بفائض القيمة عند التنازل عن العقارات (المادة 80 مكرر CIDTA).'
        : 'Déclaration fiscale IRG de la plus-value de cession d\'immeubles bâtis ou non bâtis (Art. 80 bis CIDTA).',
      badge: isAr ? 'إلزامي خلال 30 يوماً' : 'Délai : 30 jours',
    },
    {
      slug: 'gn31',
      num: isAr ? 'سلسلة ج رقم 31' : 'Série G N° 31',
      title: isAr ? 'تصريح الرسم العقاري' : 'Déclaration de la taxe foncière',
      desc: isAr
        ? 'تصريح بالرسم العقاري على الملكيات المبنية وغير المبنية والأراضي القابلة للتعمير (المادتان 261-ص و261-ق CIDTA).'
        : 'Déclaration de taxe foncière sur propriétés bâties et non bâties (Articles 261-r et 261-s du CIDTA).',
      badge: isAr ? 'إيداع سنوي / تغيير' : 'Annuelle / Changement',
    },
    {
      slug: 'gn8',
      num: isAr ? 'سلسلة ج رقم 08' : 'Série G N° 08',
      title: isAr ? 'تصريح بالوجود لممارسة النشاط' : 'Déclaration d\'existence',
      desc: isAr
        ? 'تصريح بداية النشاط التجاري، الصناعي، الحرفي أو المهني خلال 30 يوماً لدى مصالح الضرائب.'
        : 'Déclaration d\'activité à souscrire dans les 30 jours du début d\'exercice auprès des impôts.',
      badge: isAr ? 'إلزامي خلال 30 يوماً' : 'Délai : 30 jours',
    },
  ];

  return (
    <section
      id="official-forms"
      className="py-14 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
              <Printer className="w-3.5 h-3.5" />
              <span>{isAr ? 'خدمة إرشادية وتعبئة فورية' : 'Service informatif & remplissage direct'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {isAr ? 'الاستمارات الرسمية' : 'Formulaires officiels'}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2.5 leading-relaxed">
              {isAr
                ? 'تعبئة وطباعة نماذج جبائية جزائرية رسمية (التصريح بفائض القيمة ج 17، الرسم العقاري ج 31، تصريح بالوجود ج 08) وفق قوالب المديرية العامة للضرائب.'
                : 'Remplissage et impression des imprimés fiscaux officiels (plus-value G17, taxe foncière G31, déclaration d’existence G08) conformes aux modèles de la DGI.'}
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href={isAr ? '/formulaires' : '/fr/formulaires'}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-sm transition hover:shadow group"
            >
              <span>{isAr ? 'عرض الاستمارات' : 'Voir les formulaires'}</span>
              {isAr ? (
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </Link>
          </div>
        </div>

        {/* 3 Form Preview Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((item) => {
            const href = isAr ? `/formulaires/${item.slug}` : `/fr/formulaires/${item.slug}`;
            return (
              <Link
                key={item.slug}
                href={href}
                className="group bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{item.num}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-amber-900 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>{isAr ? 'بدء التعبئة والتحميل (PDF)' : 'Remplir et télécharger (PDF)'}</span>
                  {isAr ? (
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Local Processing Guarantee Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500 text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            {isAr
              ? 'معالجة محلية بالكامل داخل متصفحك — لا يتم نقل أو تخزين أي بيانات شخصية على خوادم خارجية.'
              : 'Traitement 100% local dans votre navigateur — aucune donnée personnelle n\'est transmise ni conservée sur serveur.'}
          </span>
        </div>
      </div>
    </section>
  );
}
