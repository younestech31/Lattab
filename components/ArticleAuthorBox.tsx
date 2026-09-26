import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/lib/i18n/translations';

interface ArticleAuthorBoxProps {
  lang: Language;
}

export default function ArticleAuthorBox({ lang }: ArticleAuthorBoxProps) {
  const isAr = lang === 'ar';
  const aboutHref = isAr ? '/a-propos' : '/fr/a-propos';
  const contactHref = isAr ? '/contact' : '/fr/contact';

  return (
    <aside
      aria-label={isAr ? 'عن كاتب المقال' : 'À propos de l\'auteur'}
      className="my-10 p-6 md:p-8 bg-gradient-to-br from-emerald-50 via-teal-50/40 to-slate-50 rounded-2xl border border-emerald-100 shadow-sm"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-white border-2 border-emerald-500/30 flex-shrink-0 flex items-center justify-center p-1.5 shadow-sm">
          <Image
            src="/logo-small.webp"
            alt={isAr ? 'ديوان التوثيق ببلدية وهران' : 'Office Notarial - Oran'}
            width={96}
            height={96}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="space-y-2 flex-grow">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              {isAr ? 'ديوان التوثيق - وهران' : 'Office Notarial - Oran'}
            </h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
              {isAr ? 'موثق معتمد' : 'Notaire agréé'}
            </span>
          </div>

          <p className="text-sm font-medium text-emerald-800">
            {isAr
              ? 'موثق معتمد — محكمة فلاوسن، اختصاص المجلس القضائي لوهران'
              : 'Notaire agréé près le Tribunal de Flaussen — Cour d\'Oran'}
          </p>

          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            {isAr
              ? 'الديوان العمومي للتوثيق يحرر ويوثق العقود المدنية والتجارية والعقارية والتركات وقوانين الشركات وفق أحكام التشريع والأنظمة السارية في الجزائر.'
              : 'Officier public titulaire d\'une charge notariale depuis 2008, titulaire d\'un Magister en Droit Privé de l\'Université d\'Alger, avec plus de 15 années d\'exercice dédié à la sécurisation des actes immobiliers, commerciaux et successoraux.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs md:text-sm font-semibold">
            <Link
              href={aboutHref}
              className="text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1"
            >
              <span>{isAr ? 'المزيد عن المسار المهني والمؤهلات ←' : 'En savoir plus sur le parcours →'}</span>
            </Link>
            <span className="text-gray-300" aria-hidden="true">•</span>
            <Link
              href={contactHref}
              className="text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1"
            >
              <span>{isAr ? 'طلب استشارة أو موعد بالمكتب' : 'Prendre rendez-vous à l\'office'}</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
