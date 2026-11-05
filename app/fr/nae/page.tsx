import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";
import { NAEExplorerPage } from "@/lib/nae/presentation";

type Params = Promise<{q?:string|string[];sector?:string|string[];group?:string|string[];subgroup?:string|string[];compare?:string|string[]}>;
export async function generateMetadata({searchParams}:{searchParams:Params}):Promise<Metadata>{
 const p=await searchParams;
 const filtered=[p.q,p.sector,p.group,p.subgroup,p.compare].some(v=>Array.isArray(v)?v.some(Boolean):Boolean(v));
 const url=`${SITE_URL}/fr/nae`;
 return {title:{absolute:"Explorateur de la nomenclature des activités économiques (NAE) | Office notarial"},description:"Outil de référence pour rechercher les codes, libellés et contenus des activités économiques en Algérie et parcourir leur classification.",
  alternates:{canonical:url,languages:{"ar-DZ":`${SITE_URL}/nae`,"fr-DZ":`${SITE_URL}/fr/nae`,"x-default":`${SITE_URL}/nae`}},
  robots:{index:!filtered,follow:true},
  openGraph:{title:"Explorateur de la nomenclature des activités économiques (NAE) | Office notarial",description:"Outil de référence pour rechercher les codes, libellés et contenus des activités économiques en Algérie et parcourir leur classification.",url,type:"website",locale:"fr_DZ"}};
}
export default async function Page({searchParams}:{searchParams:Params}){return <NAEExplorerPage lang="fr" params={await searchParams}/>;}
