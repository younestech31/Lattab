import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/config";
import { getNAEActivityByCode } from "@/lib/nae/data";
import { getNAEActivityTitle, getNAEPageDescription, isNAEActivityIndexable, NAEActivityDetailPage } from "@/lib/nae/presentation";

export const revalidate=604800;
type Props={params:Promise<{code:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {code}=await params;
 const activity=/^\\d{6}$/.test(code)?getNAEActivityByCode(code):undefined;
 if(!activity)return {robots:{index:false,follow:true}};
 const url=`${SITE_URL}/nae/${code}`;
 const arIndexable=isNAEActivityIndexable(activity,"ar"), frIndexable=isNAEActivityIndexable(activity,"fr");
 const languages:Record<string,string>={};
 if(arIndexable)languages["ar-DZ"]=`${SITE_URL}/nae/${code}`;
 if(frIndexable)languages["fr-DZ"]=`${SITE_URL}/fr/nae/${code}`;
 if(arIndexable||frIndexable)languages["x-default"]=arIndexable?`${SITE_URL}/nae/${code}`:`${SITE_URL}/fr/nae/${code}`;
 const title=getNAEActivityTitle(activity,"ar");
 return {title:{absolute:`${title} — النشاط الاقتصادي ${code} | الديوان العمومي للتوثيق`},
  description:getNAEPageDescription(activity,"ar"),
  alternates:{canonical:url,...(Object.keys(languages).length?{languages}:{})},
  robots:{index:isNAEActivityIndexable(activity,"ar"),follow:true},
  openGraph:{title:`${title} — ${code}`,description:getNAEPageDescription(activity,"ar"),url,type:"article",locale:"ar_DZ};
}
export default async function Page({params}:Props){
 const {code}=await params;
 if(!/^\\d{6}$/.test(code))notFound();
 const activity=getNAEActivityByCode(code);
 if(!activity)notFound();
 return <NAEActivityDetailPage lang="ar" activity={activity}/>;
}
