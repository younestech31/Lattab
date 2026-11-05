import Link from "next/link";
import UnifiedPageHeader from "@/components/ui/UnifiedPageHeader";
import { getNAEActivities, getNAEDatasetManifest, getNAESearchIndex } from "@/lib/nae/data";
import { buildNAETaxonomy, filterNAEByTaxonomy, searchNAE, type NAESearchLanguage } from "@/lib/nae/search";
import { NAE_SECTORS, type NAESectorCode } from "@/lib/nae/sectors";
import type { NAEActivity } from "@/lib/nae/schema";

import { getNAEActivityTitle, type NAEPageLanguage } from "./seo";
export type { NAEPageLanguage } from "./seo";

function first(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}
function isSectorCode(value: string): value is NAESectorCode {
  return Object.prototype.hasOwnProperty.call(NAE_SECTORS, value);
}
function usable(value: string): boolean {
  return Boolean(value.trim()) && value.trim() !== "#NOM?";
}
function matchReason(kind: string | undefined, lang: NAEPageLanguage): string {
  const ar: Record<string,string> = {
    code_exact:"مطابقة تامة للرمز",code_prefix:"بداية الرمز",code_contains:"جزء من الرمز",
    label_exact:"مطابقة تامة للتسمية",label_prefix:"بداية التسمية",label_contains:"مطابقة ضمن التسمية",
    content:"مطابقة في محتوى النشاط الفرنسي",accessory:"مطابقة في الأنشطة الإضافية الفرنسية",
  };
  const fr: Record<string,string> = {
    code_exact:"Code exact",code_prefix:"Préfixe du code",code_contains:"Code partiel",
    label_exact:"Libellé exact",label_prefix:"Début du libellé",label_contains:"Correspondance dans le libellé",
    content:"Contenu en français",accessory:"Activités accessoires en français",
  };
  if (!kind) return lang === "ar" ? "تصفح حسب التصنيف" : "Navigation par classification";
  return (lang === "ar" ? ar : fr)[kind] ?? kind;
}

export function NAEExplorerPage({
  lang, params,
}: {
  lang: NAEPageLanguage;
  params: { q?: string | string[]; sector?: string | string[]; group?: string | string[]; subgroup?: string | string[] };
}) {
  const ar = lang === "ar";
  const action = ar ? "/nae" : "/fr/nae";
  const q = first(params.q).trim();
  const rawSector = first(params.sector);
  const sector = isSectorCode(rawSector) ? rawSector : undefined;
  const taxonomy = buildNAETaxonomy(getNAEActivities());
  const sectorNode = taxonomy.find((item) => item.code === sector);
  const rawGroup = first(params.group);
  const group = sectorNode?.groups.some((item) => item.code === rawGroup) ? rawGroup : undefined;
  const rawSubgroup = first(params.subgroup);
  const subgroup = sectorNode?.groups.find((item) => item.code === group)?.subgroups.some((item) => item.code === rawSubgroup) ? rawSubgroup : undefined;
  const filters = {
    ...(sector ? { sectorCode: sector } : {}),
    ...(group ? { groupCode: group } : {}),
    ...(subgroup ? { subgroupCode: subgroup } : {}),
  };
  const search = q ? searchNAE(getNAESearchIndex(lang as NAESearchLanguage), q, { ...filters, language: lang }) : [];
  const browsed = !q && Object.keys(filters).length
    ? filterNAEByTaxonomy(getNAEActivities(), filters).map((activity) => ({ activity, match: undefined }))
    : [];
  const results = q ? search : browsed;
  const shown = results.slice(0, 50);
  const manifest = getNAEDatasetManifest();
  const groupOptions = sectorNode?.groups ?? [];
  const subgroupOptions = groupOptions.find((item) => item.code === group)?.subgroups ?? [];
  const hasCriteria = Boolean(q || sector || group || subgroup);

  const t = ar ? {
    badge:"مرجع النشاطات الاقتصادية",title:"مستكشف النشاطات الاقتصادية",
    description:"ابحث في رموز النشاطات وتسمياتها ومحتواها، وتصفح التصنيف الوطني حسب القطاع والمجموعة.",
    home:"الرئيسية",current:"مستكشف النشاطات",searchTitle:"البحث في التسمية",
    placeholder:"أدخل رمز النشاط أو التسمية أو كلمة من المحتوى",search:"بحث",clear:"مسح البحث",
    sector:"القطاع",allSectors:"كل القطاعات",group:"المجموعة",allGroups:"كل المجموعات",
    subgroup:"المجموعة الفرعية",allSubgroups:"كل المجموعات الفرعية",browse:"تصفح التصنيف",
    browseText:"ابدأ بالقطاع، ثم ضيّق التصفح باستخدام رمز المجموعة أو المجموعة الفرعية.",
    results:"نتائج المطابقة",count:"نتيجة",showing:"يعرض",of:"من",
    noResults:"لم نعثر على نشاط يطابق هذه المعايير. جرّب رمزاً أقصر أو كلمة أخرى.",
    code:"الرمز",reference:"بطاقة النشاط",excerpt:"مقتطف من النص المصدر بالفرنسية",
    source:"مصدر البيانات وحدودها",
    sourceIntro:"تعتمد الأداة على ملف التسمية الذي جرى تدقيقه وإدراجه في الموقع. اسم الملف لا يثبت تاريخ الإصدار أو تاريخ التنزيل الرسمي.",
    sourceDate:"تاريخ إصدار ملف المصدر",unknown:"غير موثق",fingerprint:"بصمة ملف المصدر",
    portal:"بوابة Sidjilcom التابعة للمركز الوطني للسجل التجاري",
    notice:"تنبيه استرشادي",
    disclaimer:"هذه الأداة ليست بوابة رسمية تابعة للمركز الوطني للسجل التجاري أو Sidjilcom. وهي أداة استرشادية لا تمثل قراراً إدارياً أو استشارة قانونية، ولا تثبت وحدها أهلية ممارسة نشاط أو استيفاء شروط الترخيص أو جواز جمع نشاطات في سجل واحد. غياب حقل تنظيمي لا يعني عدم وجود شرط أو ترخيص؛ يرجى التحقق لدى الجهة المختصة ومن النصوص السارية.",
    sourceLanguage:"تظهر أسماء القطاعات الموثقة بالعربية. أسماء المجموعات والمجموعات الفرعية غير متوفرة في ملف المصدر، لذلك تعرض برموزها.",
  } : {
    badge:"Référence des activités économiques",title:"Explorateur des activités économiques",
    description:"Recherchez par code, libellé ou contenu, et parcourez la nomenclature par secteur, groupe et sous-groupe.",
    home:"Accueil",current:"Explorateur NAE",searchTitle:"Recherche dans la nomenclature",
    placeholder:"Code, libellé ou mot figurant dans le contenu",search:"Rechercher",clear:"Effacer",
    sector:"Secteur",allSectors:"Tous les secteurs",group:"Groupe",allGroups:"Tous les groupes",
    subgroup:"Sous-groupe",allSubgroups:"Tous les sous-groupes",browse:"Parcourir la classification",
    browseText:"Choisissez un secteur, puis affinez par code de groupe ou de sous-groupe.",
    results:"Résultats",count:"résultat(s)",showing:"Affichage de",of:"sur",
    noResults:"Aucune activité ne correspond à ces critères. Essayez un code plus court ou un autre terme.",
    code:"Code",reference:"Fiche activité",excerpt:"Extrait du texte source en français",
    source:"Source et limites des données",
    sourceIntro:"Cet outil utilise le fichier de nomenclature audité et intégré au site. Le nom du fichier ne prouve ni sa date de révision ni sa date officielle de téléchargement.",
    sourceDate:"Date de révision du fichier source",unknown:"Non documentée",fingerprint:"Empreinte du fichier",
    portal:"Portail Sidjilcom du Centre national du registre du commerce",
    notice:"Information indicative",
    disclaimer:"Cet outil n’est pas un portail officiel du CNRC ni de Sidjilcom. Il fournit une information indicative et ne constitue ni une décision administrative ni un conseil juridique. Il ne prouve pas, à lui seul, l'aptitude à exercer une activité, le respect des conditions d'autorisation ou la possibilité de regrouper plusieurs activités dans un même registre. L’absence d’un champ réglementaire ne signifie pas l’absence d’une condition ou d’une autorisation ; vérifiez auprès de l’autorité compétente et dans les textes en vigueur.",
    sourceLanguage:"Les noms vérifiés des secteurs sont affichés en arabe. Le fichier source ne fournit pas les noms des groupes et sous-groupes : leurs codes sont conservés.",
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={ar ? "rtl" : "ltr"} lang={lang}>
      <UnifiedPageHeader lang={lang} badgeText={t.badge} title={t.title} description={t.description}
        breadcrumbs={[{name:t.home,href:ar?"/":"/fr"},{name:t.current}]} />
      <main className="py-10 md:py-14">
        <div className="container mx-auto max-w-6xl px-4">
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7" aria-labelledby="nae-search-title">
            <h2 id="nae-search-title" className="text-lg font-bold text-gray-900">{t.searchTitle}</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">{t.description}</p>
            <form action={action} method="get" className="mt-5 space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="nae-query">{t.placeholder}</label>
                <input id="nae-query" name="q" type="search" defaultValue={q} placeholder={t.placeholder} autoComplete="off"
                  className="min-h-12 min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-4 text-base text-gray-900 outline-none focus-visible:border-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-700/20" />
                <button type="submit" className="min-h-12 rounded-xl bg-emerald-800 px-7 font-bold text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2">{t.search}</button>
                {hasCriteria && <Link href={action} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 px-5 text-sm font-semibold text-gray-700 hover:bg-gray-50">{t.clear}</Link>}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="block text-sm font-semibold text-gray-700"><span className="mb-1.5 block">{t.sector}</span>
                  <select name="sector" defaultValue={sector ?? ""} className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                    <option value="">{t.allSectors}</option>{taxonomy.map((item)=><option key={item.code} value={item.code}>{item.code} — {item.label_ar}</option>)}
                  </select>
                </label>
                <label className="block text-sm font-semibold text-gray-700"><span className="mb-1.5 block">{t.group}</span>
                  <select name="group" defaultValue={group ?? ""} className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                    <option value="">{t.allGroups}</option>{groupOptions.map((item)=><option key={item.code} value={item.code}>{item.code}</option>)}
                  </select>
                </label>
                <label className="block text-sm font-semibold text-gray-700"><span className="mb-1.5 block">{t.subgroup}</span>
                  <select name="subgroup" defaultValue={subgroup ?? ""} className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                    <option value="">{t.allSubgroups}</option>{subgroupOptions.map((item)=><option key={item.code} value={item.code}>{item.code}</option>)}
                  </select>
                </label>
              </div>
              <p className="text-xs leading-5 text-gray-500">{t.sourceLanguage}</p>
            </form>
          </section>

          {hasCriteria ? (
            <section className="mt-8" aria-live="polite" aria-labelledby="nae-results-title">
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div><h2 id="nae-results-title" className="text-xl font-bold text-gray-900">{t.results}</h2><p className="mt-1 text-sm text-gray-500">{results.length} {t.count}</p></div>
                {results.length>shown.length && <p className="text-xs text-gray-500">{t.showing} {shown.length} {t.of} {results.length}</p>}
              </div>
              {shown.length ? <div className="grid gap-4 md:grid-cols-2">
                {shown.map(({activity,match})=>{
                  const primary=ar?activity.label_ar:activity.label_fr;
                  const secondary=ar?activity.label_fr:activity.label_ar;
                  const validPrimary=usable(primary),validSecondary=usable(secondary);
                  const excerpt=match?.field==="contenue_fr"?activity.contenue_fr:match?.field==="accessoires_fr"?(activity.accessoires_fr??""):"";
                  const sectorInfo=NAE_SECTORS[activity.sector_code as NAESectorCode];
                  return <article key={activity.code} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md">
                    <div className="flex items-start justify-between gap-3"><span className="rounded-lg bg-emerald-50 px-3 py-1.5 font-mono text-sm font-bold text-emerald-900" dir="ltr">{activity.code}</span><span className="text-xs text-gray-500">{matchReason(match?.kind,lang)}</span></div>
                    <h3 className="mt-4 text-base font-bold leading-7 text-gray-900">{validPrimary?primary:validSecondary?secondary:activity.code}</h3>
                    {validPrimary&&validSecondary&&<p className="mt-1 text-sm leading-6 text-gray-500">{secondary}</p>}
                    {!validPrimary&&<p className="mt-1 text-xs text-amber-800">{ar?"التسمية بهذه اللغة غير متاحة في ملف المصدر.":"Le libellé dans cette langue n’est pas disponible dans la source."}</p>}
                    <p className="mt-3 text-xs text-gray-500">{t.sector}: {activity.sector_code} — {sectorInfo?.label_ar??""}<span className="mx-2">·</span>{t.group}: <bdi>{activity.group_code}</bdi><span className="mx-2">·</span>{t.subgroup}: <bdi>{activity.subgroup_code}</bdi></p>
                    {excerpt&&<div className="mt-3 rounded-xl bg-gray-50 p-3"><p className="mb-1 text-[11px] font-semibold text-gray-500">{t.excerpt}</p><p dir="ltr" lang="fr" className="text-sm leading-6 text-gray-700">{excerpt.length>230?`${excerpt.slice(0,227).trimEnd()}…`:excerpt}</p></div>}
                    <div className="mt-auto pt-4"><Link href={`${action}/${activity.code}`} className="inline-flex min-h-10 items-center rounded-lg border border-emerald-800 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-50">{t.reference}<span className="ms-2" aria-hidden="true">←</span></Link></div>
                  </article>;
                })}
              </div>:<div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center text-gray-600">{t.noResults}</div>}
            </section>
          ) : (
            <section className="mt-8" aria-labelledby="nae-browse-title">
              <div className="mb-4"><h2 id="nae-browse-title" className="text-xl font-bold text-gray-900">{t.browse}</h2><p className="mt-1 text-sm leading-6 text-gray-600">{t.browseText}</p></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {taxonomy.map((item)=><Link key={item.code} href={`${action}?sector=${item.code}`} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
                  <div className="flex items-center justify-between gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 font-mono text-lg font-bold text-emerald-900">{item.code}</span><span className="text-xs text-gray-500">{item.count} {ar?"نشاط":"activités"}</span></div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-emerald-800">{item.label_ar}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">{item.groups.slice(0,5).map((g)=><span key={g.code} className="rounded-md bg-gray-100 px-2 py-1 font-mono text-xs text-gray-600">{g.code}</span>)}{item.groups.length>5&&<span className="px-1 py-1 text-xs text-gray-400">+{item.groups.length-5}</span>}</div>
                </Link>)}
              </div>
            </section>
          )}

          <section className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
              <h2 className="text-base font-bold text-gray-900">{t.source}</h2><p className="mt-3 text-sm leading-7 text-gray-600">{t.sourceIntro}</p>
              <dl className="mt-4 space-y-2 text-sm"><div className="flex flex-wrap justify-between gap-2 border-b border-gray-100 pb-2"><dt className="text-gray-500">{t.sourceDate}</dt><dd className="font-semibold text-gray-800">{t.unknown}</dd></div><div className="flex flex-wrap justify-between gap-2"><dt className="text-gray-500">{t.fingerprint}</dt><dd className="font-mono text-xs text-gray-700" dir="ltr">{manifest.source_sha256.slice(0,12)}…</dd></div></dl>
              <a href="https://sidjilcom.cnrc.dz/ar/web/sidjilcom/نشاطات" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4">{t.portal}</a>
            </div>
            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6"><h2 className="text-base font-bold text-amber-950">{t.notice}</h2><p className="mt-3 text-sm leading-7 text-amber-950/90">{t.disclaimer}</p></aside>
          </section>
        </div>
      </main>
    </div>
  );
}

export function NAEActivityDetailPage({ lang, activity }: { lang: NAEPageLanguage; activity: NAEActivity }) {
  const ar=lang==="ar", action=ar?"/nae":"/fr/nae";
  const title=getNAEActivityTitle(activity,lang);
  const preferred=ar?activity.label_ar:activity.label_fr;
  const preferredValid=usable(preferred);
  const sector=NAE_SECTORS[activity.sector_code as NAESectorCode];
  const related=getNAEActivities().filter((x)=>x.code!==activity.code&&x.subgroup_code===activity.subgroup_code).slice(0,8);
  const t=ar?{
    badge:"بطاقة نشاط مرجعية",home:"الرئيسية",explorer:"مستكشف النشاطات",code:"رمز النشاط",classification:"التصنيف",
    sector:"القطاع",group:"المجموعة",subgroup:"المجموعة الفرعية",sourceLabel:"التسمية كما وردت في المصدر",
    missing:"التسمية العربية غير متاحة لهذا الرمز في ملف المصدر؛ تظهر التسمية الفرنسية المتاحة.",
    content:"محتوى النشاط",contentHint:"النص المصدر كما ورد بالفرنسية، دون ترجمة آلية.",accessories:"الأنشطة الإضافية",
    regulatory:"المعلومات التنظيمية الواردة في المصدر",tutelle:"الجهة الوصية",authorization:"نوع الترخيص أو الإجراء",references:"المراجع النصية",
    noValue:"لا تتضمن نسخة البيانات قيمة لهذا الحقل.",related:"أنشطة أخرى في المجموعة الفرعية نفسها",
    relatedInfo:"تجميع تصنيفي فقط؛ لا يعني التكافؤ القانوني أو إمكانية جمع الأنشطة في سجل واحد.",
    back:"العودة إلى المستكشف",sidjilcom:"التحقق من التسمية عبر بوابة Sidjilcom",notice:"حدود الاستعمال",
    disclaimer:"هذه البطاقة مبنية على ملف التسمية المتاح، وهذا الموقع ليس بوابة رسمية تابعة للمركز الوطني للسجل التجاري أو Sidjilcom. لا تمثل البطاقة قراراً إدارياً أو استشارة قانونية، ولا تثبت وحدها أهلية ممارسة النشاط أو استيفاء شروط الترخيص أو جواز جمع عدة نشاطات في سجل تجاري واحد. غياب حقل تنظيمي في الملف لا يعني عدم وجود شرط أو ترخيص؛ يجب التحقق لدى الجهة المختصة ومن النصوص السارية.",
  }:{
    badge:"Fiche de référence",home:"Accueil",explorer:"Explorateur NAE",code:"Code activité",classification:"Classification",
    sector:"Secteur",group:"Groupe",subgroup:"Sous-groupe",sourceLabel:"Libellé tel qu’il figure dans la source",
    missing:"Le libellé français n’est pas disponible pour ce code dans le fichier source ; le libellé arabe disponible est affiché.",
    content:"Contenu de l’activité",contentHint:"Texte source en français, sans traduction automatique.",accessories:"Activités accessoires",
    regulatory:"Informations réglementaires présentes dans la source",tutelle:"Tutelle",authorization:"Type d’autorisation ou de procédure",references:"Références textuelles",
    noValue:"Aucune valeur pour ce champ dans l’export disponible.",related:"Autres activités du même sous-groupe",
    relatedInfo:"Regroupement de classification uniquement ; cela ne signifie ni équivalence juridique ni possibilité de cumul dans un même registre.",
    back:"Retour à l’explorateur",sidjilcom:"Vérifier la nomenclature sur Sidjilcom",notice:"Limites d’utilisation",
    disclaimer:"Cette fiche est fondée sur le fichier de nomenclature disponible et ce site n’est pas un portail officiel du CNRC ni de Sidjilcom. Elle ne constitue ni une décision administrative ni un conseil juridique. Elle ne prouve pas, à elle seule, l’aptitude à exercer l’activité, le respect des conditions d’autorisation ou la possibilité de regrouper plusieurs activités dans un même registre. L’absence d’un champ réglementaire ne signifie pas l’absence d’une condition ou d’une autorisation ; vérifiez auprès de l’autorité compétente et dans les textes en vigueur.",
  };
  const field=(value:string|null)=><p dir="ltr" lang="fr" className="whitespace-pre-line text-sm leading-7 text-gray-800">{value||t.noValue}</p>;

  return <div className="min-h-screen bg-gray-50" dir={ar?"rtl":"ltr"} lang={lang}>
    <UnifiedPageHeader lang={lang} badgeText={t.badge} title={title}
      description={ar?`بطاقة مرجعية للنشاط الاقتصادي ذي الرمز ${activity.code} ضمن التسمية الوطنية للنشاطات الاقتصادية.`:`Fiche de référence de l’activité économique portant le code ${activity.code} dans la nomenclature nationale.`}
      breadcrumbs={[{name:t.home,href:ar?"/":"/fr"},{name:t.explorer,href:action},{name:activity.code}]} />
    <main className="py-10 md:py-14"><div className="container mx-auto max-w-5xl px-4">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-semibold text-gray-500">{t.code}</p><p className="mt-1 font-mono text-2xl font-bold tracking-wide text-emerald-900" dir="ltr">{activity.code}</p></div><Link href={`${action}?q=${activity.code}`} className="inline-flex min-h-10 items-center rounded-lg border border-emerald-800 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-50">{t.back}</Link></div>
        <div className="mt-6 border-t border-gray-100 pt-5"><h2 className="text-lg font-bold text-gray-900">{t.classification}</h2><dl className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-4"><dt className="text-xs text-gray-500">{t.sector}</dt><dd className="mt-1 font-semibold text-gray-900">{activity.sector_code} — {sector?.label_ar??""}</dd></div>
          <div className="rounded-xl bg-gray-50 p-4"><dt className="text-xs text-gray-500">{t.group}</dt><dd className="mt-1 font-mono font-semibold text-gray-900" dir="ltr">{activity.group_code}</dd></div>
          <div className="rounded-xl bg-gray-50 p-4"><dt className="text-xs text-gray-500">{t.subgroup}</dt><dd className="mt-1 font-mono font-semibold text-gray-900" dir="ltr">{activity.subgroup_code}</dd></div>
        </dl>{!ar&&<p className="mt-3 text-xs text-gray-500">Le libellé officiel du secteur est présenté en arabe, seule langue disponible dans la référence vérifiée.</p>}</div>
      </section>
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7"><h2 className="text-lg font-bold text-gray-900">{t.sourceLabel}</h2>
        {!preferredValid&&<p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm leading-6 text-amber-900">{t.missing}</p>}
        <div className="mt-3 space-y-2">{ar?<>{usable(activity.label_ar)&&<p className="text-base font-semibold leading-7 text-gray-900">{activity.label_ar}</p>}{usable(activity.label_fr)&&<p dir="ltr" lang="fr" className="text-sm leading-7 text-gray-700">{activity.label_fr}</p>}</>:<>{usable(activity.label_fr)&&<p dir="ltr" lang="fr" className="text-base font-semibold leading-7 text-gray-900">{activity.label_fr}</p>}{usable(activity.label_ar)&&<p className="text-sm leading-7 text-gray-700">{activity.label_ar}</p>}</>}{usable(activity.label_en)&&<p className="text-sm leading-6 text-gray-500">{activity.label_en}</p>}</div>
      </section>
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7"><div className="flex flex-wrap items-end justify-between gap-2"><h2 className="text-lg font-bold text-gray-900">{t.content}</h2><span className="text-xs text-gray-500">{t.contentHint}</span></div>{field(activity.contenue_fr)}<div className="mt-6 border-t border-gray-100 pt-5"><h3 className="mb-3 text-base font-bold text-gray-900">{t.accessories}</h3>{field(activity.accessoires_fr)}</div></section>
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7"><h2 className="text-lg font-bold text-gray-900">{t.regulatory}</h2><dl className="mt-4 space-y-5">
        <div><dt className="mb-1 text-sm font-semibold text-gray-700">{t.tutelle}</dt><dd>{field(activity.tutelle_fr)}</dd></div>
        <div><dt className="mb-1 text-sm font-semibold text-gray-700">{t.authorization}</dt><dd>{field(activity.type_autorisation_fr)}</dd></div>
        <div><dt className="mb-1 text-sm font-semibold text-gray-700">{t.references}</dt><dd>{field(activity.references_texte_fr)}</dd></div>
      </dl></section>
      {related.length>0&&<section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7"><h2 className="text-lg font-bold text-gray-900">{t.related}</h2><p className="mt-1 text-sm leading-6 text-gray-500">{t.relatedInfo}</p><ul className="mt-4 divide-y divide-gray-100">{related.map((item)=><li key={item.code} className="flex flex-wrap items-center justify-between gap-3 py-3"><div className="min-w-0"><p className="font-mono text-xs font-bold text-emerald-800" dir="ltr">{item.code}</p><p className="mt-1 text-sm font-semibold leading-6 text-gray-800">{getNAEActivityTitle(item,lang)}</p></div><Link href={`${action}/${item.code}`} className="text-sm font-semibold text-emerald-800 underline underline-offset-4">{ar?"عرض البطاقة":"Voir la fiche"}</Link></li>)}</ul></section>}
      <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-7"><h2 className="text-base font-bold text-amber-950">{t.notice}</h2><p className="mt-3 text-sm leading-7 text-amber-950/90">{t.disclaimer}</p><a href="https://sidjilcom.cnrc.dz/fr/web/sidjilcom/nomenclature-de-vos-activites" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-emerald-900 underline decoration-emerald-400 underline-offset-4">{t.sidjilcom}</a></section>
    </div></main>
  </div>;
}
