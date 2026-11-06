"use client";

import { useState } from "react";

const STORAGE_KEY = "lattab.nae.project.v1";

export default function NAEAddToProjectButton({code,lang}:{code:string;lang:"ar"|"fr"}) {
  const [message,setMessage] = useState("");
  function add() {
    try {
      const current = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "null") as
        | {version?:number;codes?:unknown;primaryCode?:unknown;description?:unknown}
        | null;
      const oldCodes = current?.version === 1 && Array.isArray(current.codes)
        ? current.codes.filter((value):value is string=>typeof value==="string"&&/^\d{6}$/.test(value))
        : [];
      const codes = [...new Set([...oldCodes,code])].slice(0,50);
      const primaryCode = typeof current?.primaryCode==="string"&&codes.includes(current.primaryCode)
        ? current.primaryCode : codes[0] ?? null;
      window.localStorage.setItem(STORAGE_KEY,JSON.stringify({
        version:1,
        description:typeof current?.description==="string"?current.description.slice(0,180):"",
        codes,
        primaryCode,
      }));
      setMessage(lang==="ar"?"أُضيف النشاط إلى قائمة المشروع المحفوظة على هذا الجهاز.":"Activité ajoutée à la liste du projet sur cet appareil.");
    } catch {
      setMessage(lang==="ar"?"تعذر الحفظ محلياً في المتصفح.":"Impossible d’enregistrer localement dans le navigateur.");
    }
  }
  return <div className="mt-2">
    <button type="button" onClick={add} className="inline-flex min-h-9 items-center rounded-lg border border-emerald-800 px-3 py-2 text-xs font-semibold text-emerald-900 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
      {lang==="ar"?"إضافة إلى قائمة المشروع":"Ajouter au projet"}
    </button>
    {message&&<p role="status" aria-live="polite" className="mt-2 text-xs leading-5 text-gray-600">{message} <a href={lang==="ar"?"/nae":"/fr/nae"} className="font-semibold text-emerald-800 underline underline-offset-4">{lang==="ar"?"فتح قائمة المشروع":"Ouvrir le projet"}</a></p>}
  </div>;
}
