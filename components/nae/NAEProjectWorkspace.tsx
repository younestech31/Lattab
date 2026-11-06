"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";

type Lang = "ar" | "fr";
type Status = { label: string; className: string };
type Hit = {
  code: string; label_ar: string; label_fr: string; status: string; statusInfo: Status;
  sector_code: string; matchedFields: string[]; usedSynonym: boolean;
};
type ProjectActivity = {
  code: string; label_ar: string; label_fr: string; status: string;
  sector_code: string; group_code: string; subgroup_code: string;
};
type Finding = {
  id: string; severity: "info" | "warning" | "critical";
  title_ar: string; title_fr: string; detail_ar: string; detail_fr: string;
  article?: string; sourceUrl?: string;
};
type ResponseData = {
  activities: ProjectActivity[];
  analysis: { selectedCount: number; sectors: string[]; sectorLabels?: string[]; sameGroup?: boolean; sameSubgroup?: boolean; primaryCode: string | null; findings: Finding[] };
};
type Draft = { version: 1; description: string; codes: string[]; primaryCode: string | null };
const KEY = "lattab.nae.project.v1";

function displayLabel(item: {label_ar: string; label_fr: string; code: string}, lang: Lang) {
  const first = lang === "ar" ? item.label_ar : item.label_fr;
  const second = lang === "ar" ? item.label_fr : item.label_ar;
  const good = (value: string) => Boolean(value?.trim()) && value.trim() !== "#NOM?";
  return good(first) ? first : good(second) ? second : item.code;
}
function severityClass(value: Finding["severity"]) {
  return value === "critical" ? "border-rose-200 bg-rose-50" : value === "warning" ? "border-amber-200 bg-amber-50" : "border-gray-200 bg-gray-50";
}
function fieldName(field: string, ar: boolean) {
  const names: Record<string, [string,string]> = {
    code:["الرمز","code"], label_ar:["التسمية","libellé"], label_fr:["التسمية","libellé"],
    contenue_fr:["محتوى النشاط","contenu"], accessoires_fr:["الأنشطة الإضافية","activités accessoires"],
  };
  return names[field]?.[ar ? 0 : 1] ?? field;
}

export default function NAEProjectWorkspace({lang, sourceRevisionDate}: {lang: Lang; sourceRevisionDate: string}) {
  const ar = lang === "ar";
  const [description,setDescription] = useState("");
  const descriptionRef = useRef(description);
  const [reviewedDescription,setReviewedDescription] = useState<string|null>(null);
  const [results,setResults] = useState<Hit[]>([]);
  const [codes,setCodes] = useState<string[]>([]);
  const [primary,setPrimary] = useState<string|null>(null);
  const [data,setData] = useState<ResponseData|null>(null);
  const [busySearch,setBusySearch] = useState(false);
  const [busyAnalysis,setBusyAnalysis] = useState(false);
  const [error,setError] = useState("");
  const [ready,setReady] = useState(false);
  const t = ar ? {
    title:"إعداد ومراجعة نشاطات المشروع",
    intro:"صف الأعمال التي تنوي ممارستها بكلماتك العادية. ابحث في التسميات ومحتوى النشاطات، ثم اجمع الاختيارات في قائمة واحدة لمراجعتها.",
    placeholder:"مثال: بيع الحواسيب وملحقاتها، صيانة الأجهزة وتركيب الشبكات",
    search:"البحث عن النشاطات", searching:"جارٍ البحث…", results:"النشاطات المرشحة",
    noResults:"لا توجد نتائج واضحة. جرّب وصفاً أقصر أو مصطلحاً آخر.",
    evidence:"سبب الظهور", synonym:"مطابقة عبر مصطلح مرادف", add:"إضافة للقائمة",
    added:"مضاف", project:"قائمة نشاطات المشروع", empty:"لم تضف أي نشاط بعد. اختر من النتائج أعلاه أو أضفه من بطاقة النشاط.",
    primary:"النشاط الرئيسي", makePrimary:"تعيين كرئيسي", remove:"إزالة", clear:"مسح القائمة",
    review:"مراجعة الاختيارات", reviewing:"جارٍ تحليل القائمة…", findings:"نتائج المراجعة",
    print:"طباعة ورقة التحضير", sectors:"القطاعات", noFindings:"لا توجد تنبيهات إضافية وفق القواعد الحالية. هذا لا يمثل موافقة قانونية.",
    source:"مصدر البيانات", stale:"البيانات نسخة مؤرخة وليست اتصالاً مباشراً بقاعدة CNRC. تحقق من الوضع الحالي قبل التسجيل.",
    privacy:"تُحفظ القائمة محلياً في هذا المتصفح ولا تحتاج إلى حساب. لا نستخدم خدمة ذكاء اصطناعي خارجية.",
    limit:"يمكن إضافة عدة نشاطات؛ حد المقارنة القديمة (3) لا ينطبق على قائمة المشروع.",
    detail:"البطاقة", error:"تعذر إكمال الطلب. أعد المحاولة.",
  } : {
    title:"Préparer et examiner les activités du projet",
    intro:"Décrivez les opérations envisagées avec vos propres mots. Recherchez dans les libellés et contenus, puis réunissez les choix dans une liste à examiner.",
    placeholder:"Ex. : vente d’ordinateurs et accessoires, maintenance et installation de réseaux",
    search:"Rechercher les activités", searching:"Recherche…", results:"Activités proposées",
    noResults:"Aucun résultat clair. Essayez une description plus courte ou un autre terme.",
    evidence:"Motif", synonym:"Correspondance par synonyme", add:"Ajouter au projet",
    added:"Ajoutée", project:"Liste des activités du projet", empty:"Aucune activité ajoutée. Choisissez un résultat ou ajoutez-la depuis sa fiche.",
    primary:"Activité principale", makePrimary:"Définir comme principale", remove:"Retirer", clear:"Vider la liste",
    review:"Examiner la sélection", reviewing:"Analyse…", findings:"Résultats de l’examen",
    print:"Imprimer la fiche préparatoire", sectors:"Secteurs", noFindings:"Aucune alerte supplémentaire selon les règles actuelles. Cela ne constitue pas une validation juridique.",
    source:"Source des données", stale:"Instantané daté, sans connexion directe à la base du CNRC. Vérifiez la situation actuelle avant l’immatriculation.",
    privacy:"La liste est conservée dans ce navigateur et ne nécessite aucun compte. Aucun service d’IA externe n’est utilisé.",
    limit:"Vous pouvez ajouter plusieurs activités ; la limite de comparaison (3) ne s’applique pas à la liste du projet.",
    detail:"Fiche", error:"La requête a échoué. Veuillez réessayer.",
  };

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(KEY) ?? "null") as Partial<Draft>|null;
      if (saved?.version === 1 && Array.isArray(saved.codes)) {
        const next = [...new Set(saved.codes.filter((v): v is string => typeof v === "string" && /^\d{6}$/.test(v)))].slice(0,50);
        setCodes(next);
        setPrimary(typeof saved.primaryCode === "string" && next.includes(saved.primaryCode) ? saved.primaryCode : next[0] ?? null);
        setDescription(typeof saved.description === "string" ? saved.description.slice(0,180) : "");
      }
    } catch { /* Ignore an invalid local draft. */ }
    setReady(true);
  },[]);

  useEffect(() => { descriptionRef.current = description; },[description]);

  useEffect(() => {
    if (!ready) return;
    try {
      const draft: Draft = {version:1,description,codes,primaryCode:primary&&codes.includes(primary)?primary:codes[0]??null};
      window.localStorage.setItem(KEY,JSON.stringify(draft));
    } catch { setError(ar ? "تعذر حفظ المسودة محلياً." : "Impossible d’enregistrer le brouillon localement."); }
  },[ar,codes,description,primary,ready]);

  const search = useCallback(async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError(""); setBusySearch(true);
    try {
      const params = new URLSearchParams({q:description,lang});
      const response = await fetch("/api/nae/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({q:description,lang})});
      if (!response.ok) throw new Error("search");
      const payload = await response.json() as {results?:Hit[]};
      setResults(Array.isArray(payload.results)?payload.results:[]);
    } catch { setError(t.error); } finally { setBusySearch(false); }
  },[description,lang,t.error]);

  const analyze = useCallback(async () => {
    if (!codes.length) { setData(null); return; }
    setError(""); setBusyAnalysis(true);
    try {
      const response = await fetch("/api/nae/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({codes,description:descriptionRef.current,primaryCode:primary,lang})});
      if (!response.ok) throw new Error("analysis");
      setData(await response.json() as ResponseData);
      setReviewedDescription(descriptionRef.current);
    } catch { setError(t.error); } finally { setBusyAnalysis(false); }
  },[codes,lang,primary,t.error]);


  useEffect(() => { if (ready && codes.length) void analyze(); else if (ready) setData(null); },[ready,codes,primary,analyze]);

  const reviewOutdated = Boolean(data && reviewedDescription !== description);
  const detailByCode = useMemo(()=>new Map((data?.activities??[]).map(item=>[item.code,item])),[data]);
  const add = (code:string) => { setCodes(current=>current.includes(code)?current:current.length<50?[...current,code]:current); setPrimary(current=>current??code); setData(null); };
  const remove = (code:string) => { setCodes(current=>current.filter(item=>item!==code)); setPrimary(current=>current===code?codes.find(item=>item!==code)??null:current); setData(null); };
  const clear = () => { setCodes([]); setPrimary(null); setData(null); };

  return <section data-nae-project-workspace className="mb-8 rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm sm:p-6" aria-labelledby="nae-project-title">
    <style>{"@media print { body:has([data-nae-print-sheet]) * { visibility:hidden!important; } [data-nae-print-sheet], [data-nae-print-sheet] * { visibility:visible!important; } [data-nae-print-sheet] { display:block!important; position:absolute!important; inset:0!important; width:100%!important; margin:0!important; padding:24px!important; background:white!important; color:black!important; border:0!important; box-shadow:none!important; } }"}</style>
    <div className="max-w-3xl">
      <h2 id="nae-project-title" className="text-xl font-bold text-gray-950">{t.title}</h2>
      <p className="mt-2 text-sm leading-7 text-gray-600">{t.intro}</p>
    </div>
    <form onSubmit={search} className="mt-5 flex flex-col gap-2 sm:flex-row">
      <label htmlFor="nae-project-description" className="sr-only">{t.placeholder}</label>
      <input id="nae-project-description" value={description} onChange={event=>setDescription(event.target.value.slice(0,180))} placeholder={t.placeholder} maxLength={180} autoComplete="off" className="min-h-12 min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-4 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700/20"/>
      <button type="submit" disabled={busySearch||description.trim().length<2} className="min-h-12 rounded-xl bg-emerald-800 px-6 font-bold text-white hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2">{busySearch?t.searching:t.search}</button>
    </form>
    {error&&<p role="alert" className="mt-3 text-sm text-rose-800">{error}</p>}
    {results.length>0&&<div className="mt-6" aria-live="polite">
      <div className="mb-3 flex items-center justify-between gap-3"><h3 className="font-bold text-gray-900">{t.results}</h3><span className="text-xs text-gray-500">{results.length}</span></div>
      <div className="divide-y divide-gray-100 rounded-xl border border-gray-200">
        {results.map(hit=>{const exists=codes.includes(hit.code);return <article key={hit.code} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2"><span className="font-mono text-sm font-bold text-emerald-900" dir="ltr">{hit.code}</span><span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${hit.statusInfo.className}`}>{hit.statusInfo.label}</span></div>
            <h4 className="mt-1 font-semibold leading-7 text-gray-900">{displayLabel(hit,lang)}</h4>
            <p className="mt-1 text-xs text-gray-500">{t.evidence}: {hit.matchedFields.map(field=>fieldName(field,ar)).join("، ")}</p>
            {hit.usedSynonym&&<p className="mt-1 text-xs text-gray-500">{t.synonym}</p>}
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Link href={`/${ar?"":"fr/"}nae/${hit.code}`} className="inline-flex min-h-9 items-center rounded-lg border border-gray-300 px-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">{t.detail}</Link>
            <button type="button" onClick={()=>add(hit.code)} disabled={exists||codes.length>=50} className="inline-flex min-h-9 items-center rounded-lg bg-emerald-800 px-3 text-sm font-semibold text-white hover:bg-emerald-900 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-700">{exists?t.added:t.add}</button>
          </div>
        </article>})}
      </div>
    </div>}
    {description.trim().length>=2&&!busySearch&&results.length===0&&<p className="mt-4 rounded-lg border border-dashed border-gray-300 px-4 py-5 text-center text-sm text-gray-600">{t.noResults}</p>}
    <div className="mt-8 border-t border-gray-200 pt-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><h3 className="font-bold text-gray-900">{t.project} <span className="font-normal text-gray-500">({codes.length})</span></h3><p className="mt-1 text-xs text-gray-500">{t.limit}</p></div>
        {codes.length>0&&<button type="button" onClick={clear} className="text-sm font-semibold text-gray-600 underline underline-offset-4">{t.clear}</button>}
      </div>
      {codes.length===0?<p className="mt-4 rounded-lg bg-gray-50 px-4 py-5 text-sm leading-6 text-gray-600">{t.empty}</p>:<div className="mt-4 divide-y divide-gray-100 rounded-xl border border-gray-200">
        {codes.map(code=>{const item=detailByCode.get(code);return <div key={code} className="flex flex-wrap items-center justify-between gap-3 p-3">
          <div className="min-w-0"><span className="font-mono text-xs font-bold text-emerald-900" dir="ltr">{code}</span><p className="mt-1 text-sm font-semibold text-gray-900">{item?displayLabel(item,lang):(ar?"جارٍ تحميل بيانات النشاط…":"Chargement…")}</p>{primary===code&&<span className="mt-1 inline-block text-xs font-semibold text-emerald-800">{t.primary}</span>}</div>
          <div className="flex items-center gap-3">{primary!==code&&<button type="button" onClick={()=>setPrimary(code)} className="text-xs font-semibold text-emerald-800 underline underline-offset-4">{t.makePrimary}</button>}<button type="button" onClick={()=>remove(code)} className="text-xs font-semibold text-gray-500 underline underline-offset-4">{t.remove}</button></div>
        </div>})}
      </div>}
      {codes.length>0&&<div className="mt-4 flex flex-wrap items-center gap-2">{reviewOutdated&&<span className="text-xs text-amber-800">{ar?"تغير وصف المشروع؛ أعد المراجعة لتحديث النتائج.":"La description a changé ; relancez l’examen pour actualiser les résultats."}</span>}<button type="button" onClick={()=>void analyze()} disabled={busyAnalysis} className="min-h-10 rounded-lg bg-emerald-800 px-4 text-sm font-semibold text-white hover:bg-emerald-900 disabled:opacity-50">{busyAnalysis?t.reviewing:t.review}</button><button type="button" onClick={()=>window.print()} disabled={!data||reviewOutdated} className="min-h-10 rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 print:hidden">{t.print}</button></div>}
    </div>
    {data&&<section className="mt-6 border-t border-gray-200 pt-5" aria-live="polite">
      <h3 className="font-bold text-gray-900">{t.findings}</h3><p className="mt-1 text-xs text-gray-500">{t.sectors}: {(data.analysis.sectorLabels ?? data.analysis.sectors).join("، ")||"—"}</p>
      {data.analysis.findings.length>0?<div className="mt-3 space-y-3">{data.analysis.findings.map(f=><article key={f.id} className={`rounded-xl border p-4 ${severityClass(f.severity)}`}><h4 className="font-semibold text-gray-900">{ar?f.title_ar:f.title_fr}</h4><p className="mt-1 text-sm leading-7 text-gray-800">{ar?f.detail_ar:f.detail_fr}</p>{f.article&&<p className="mt-2 text-xs font-semibold text-gray-600">{f.article}</p>}{f.sourceUrl&&<a href={f.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs font-semibold text-emerald-800 underline underline-offset-4">{ar?"النص القانوني":"Texte juridique"}</a>}</article>)}</div>:<p className="mt-3 text-sm text-gray-600">{t.noFindings}</p>}
    </section>}
    {data && <div data-nae-print-sheet className="hidden">
      <h1 className="text-2xl font-bold">{ar ? "ورقة تحضير ومراجعة النشاطات المقترحة" : "Fiche préparatoire et d’examen des activités proposées"}</h1>
      <p className="mt-3 text-sm">{ar ? "وصف المشروع:" : "Description du projet :"} {description || "—"}</p>
      <p className="mt-2 text-sm">{ar ? "النشاط الرئيسي:" : "Activité principale :"} {data.activities.find(item=>item.code===data.analysis.primaryCode) ? displayLabel(data.activities.find(item=>item.code===data.analysis.primaryCode)!,lang) : data.analysis.primaryCode ?? "—"}</p>
      <h2 className="mt-6 text-lg font-bold">{ar ? "النشاطات المختارة" : "Activités sélectionnées"}</h2>
      <table className="mt-3 w-full border-collapse text-sm">
        <thead><tr><th className="border p-2 text-start">{ar ? "الرمز" : "Code"}</th><th className="border p-2 text-start">{ar ? "التسمية" : "Libellé"}</th><th className="border p-2 text-start">{ar ? "القطاع" : "Secteur"}</th><th className="border p-2 text-start">{ar ? "الدور" : "Rôle"}</th></tr></thead>
        <tbody>{data.activities.map(item=><tr key={item.code}><td className="border p-2 font-mono" dir="ltr">{item.code}</td><td className="border p-2">{displayLabel(item,lang)}</td><td className="border p-2">{item.sector_code}</td><td className="border p-2">{item.code===data.analysis.primaryCode?(ar?"رئيسي":"Principale"):(ar?"إضافي مقترح":"Complémentaire proposé")}</td></tr>)}</tbody>
      </table>
      <h2 className="mt-6 text-lg font-bold">{ar ? "ملاحظات المراجعة" : "Constats de l’examen"}</h2>
      {data.analysis.findings.length ? <ol className="mt-3 list-decimal space-y-3 ps-6">{data.analysis.findings.map(f=><li key={f.id}><strong>{ar?f.title_ar:f.title_fr}</strong><p className="mt-1">{ar?f.detail_ar:f.detail_fr}</p>{f.article&&<p className="mt-1 text-xs">{f.article}</p>}{f.sourceUrl&&<p className="text-xs">{f.sourceUrl}</p>}</li>)}</ol>:<p className="mt-2 text-sm">{t.noFindings}</p>}
      <p className="mt-6 border-t pt-3 text-xs leading-6">{ar ? "هذه ورقة مرجعية أولية وليست موافقة من المركز الوطني للسجل التجاري أو استشارة قانونية. يجب التحقق من المدونة والنصوص والجهات المختصة قبل أي إجراء." : "Cette fiche est indicative et ne constitue ni une approbation du CNRC ni un avis juridique. Vérifiez la nomenclature, les textes et les autorités compétentes avant toute démarche."}</p>
      <p className="mt-2 text-xs">UpGrowth — NAE 2026 (CC BY 4.0). {sourceRevisionDate}. https://www.upgrowth.dz/ar/datasets/cnrc-2026</p>
    </div>}
    <footer className="mt-6 border-t border-gray-100 pt-4 text-xs leading-6 text-gray-500">
      <p>{t.source}: <a href="https://www.upgrowth.dz/ar/datasets/cnrc-2026" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">UpGrowth — NAE 2026</a> (CC BY 4.0), {ar ? "نسخة المصدر المؤرخة" : "instantané de données daté du"} {sourceRevisionDate}.</p>
      <p>{t.stale}</p><p>{t.privacy}</p>
    </footer>
  </section>;
}
