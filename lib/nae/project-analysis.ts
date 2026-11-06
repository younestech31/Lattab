import type { NAEActivity } from "./schema";
import { normalizeNAESearchText } from "./search";

export type NAEProjectSeverity = "info" | "warning" | "critical";
export interface NAEProjectFinding {
  id: string; severity: NAEProjectSeverity; title_ar: string; title_fr: string;
  detail_ar: string; detail_fr: string; article?: string; sourceUrl?: string; codes?: string[];
}
export interface NAEProjectAnalysis {
  selectedCount: number; sectors: string[]; sameGroup: boolean; sameSubgroup: boolean; primaryCode: string | null; findings: NAEProjectFinding[];
}
const DECREE_15_249 = "https://www.joradp.dz/FTP/jo-arabe/2015/A2015052.pdf";
const COMPLEMENTARY = [
  { terms:["نقل","النقل","توصيل","التوصيل","تسليم","التسليم","transport","livraison"], ar:"النقل والتسليم للزبائن", fr:"transport et livraison à la clientèle" },
  { terms:["تركيب","التركيب","تنصيب","التنصيب","installation","montage"], ar:"تركيب وتنصيب المعدات", fr:"montage et installation du matériel" },
  { terms:["قطع الغيار","pieces detachees","pièces détachées"], ar:"توفير قطع الغيار", fr:"fourniture de pièces de rechange" },
  { terms:["استشارة","الاستشارة","استشارات","conseil"], ar:"الاستشارة", fr:"conseil" },
  { terms:["تكوين","التكوين","تدريب","التدريب","formation"], ar:"التكوين", fr:"formation" }
] as const;

function tokenForms(token: string): Set<string> {
  const forms = new Set([token]);
  if (token.startsWith("ال") && token.length > 3) forms.add(token.slice(2));
  if (token.startsWith("بال") && token.length > 4) {
    forms.add(token.slice(2));
    forms.add(token.slice(3));
  }
  if (token.startsWith("لل") && token.length > 4) forms.add(token.slice(2));
  return forms;
}

function containsNormalizedPhrase(normalizedText: string, rawPhrase: string): boolean {
  const tokens = normalizedText.split(" ").filter(Boolean);
  const phrase = normalizeNAESearchText(rawPhrase).split(" ").filter(Boolean);
  if (!phrase.length || phrase.length > tokens.length) return false;

  return tokens.some((_, start) =>
    phrase.every((expected, offset) => {
      const actual = tokens[start + offset];
      return actual !== undefined && tokenForms(actual).has(expected);
    }),
  );
}

export function analyzeNAEProject(input: readonly NAEActivity[], description = "", requestedPrimaryCode: string | null = null): NAEProjectAnalysis {
  const activities = [...new Map(input.map((activity) => [activity.code, activity])).values()];
  const sectors = [...new Set(activities.map((activity) => activity.sector_code))].sort();
  const groups = new Set(activities.map((activity) => activity.group_code));
  const subgroups = new Set(activities.map((activity) => activity.subgroup_code));
  const findings: NAEProjectFinding[] = [];
  if (!activities.length) return { selectedCount: 0, sectors: [], sameGroup: false, sameSubgroup: false, primaryCode: null, findings };

  const primaryCode = requestedPrimaryCode && activities.some((activity) => activity.code === requestedPrimaryCode) ? requestedPrimaryCode : activities[0].code;
  const nonExport = sectors.filter((sector) => sector !== "7");
  if (nonExport.length > 1) {
    if (nonExport.length === 2 && nonExport.includes("5") && nonExport.includes("6")) findings.push({
      id:"sector-5-6-conditional", severity:"warning",
      title_ar:"الجمع بين التوزيع بالتجزئة والخدمات استثناء مشروط",
      title_fr:"Le cumul entre distribution au détail et services est une exception conditionnelle",
      detail_ar:"تسمح المادة 9 بإمكانية الترخيص ببعض حالات الجمع بين نشاطات القطاعين 5 و6 لضرورة المنفعة التجارية وتموين تجمعات سكانية أو مناطق نائية أو ضعيفة التغطية. لا يعني ذلك أن كل نشاطات القطاعين قابلة للجمع؛ يجب فحص الشروط والترخيص المطلوب.",
      detail_fr:"L’article 9 permet, sous conditions, certains cumuls entre les secteurs 5 et 6 pour des nécessités d’utilité commerciale et d’approvisionnement de zones concernées. Cela ne rend pas tous les cumuls automatiquement admissibles.",
      article:"Décret exécutif 15-249, article 9", sourceUrl:DECREE_15_249
    });
    else findings.push({
      id:"multiple-sectors", severity:"critical",
      title_ar:"القائمة تضم أكثر من قطاع نشاط",
      title_fr:"La sélection couvre plusieurs secteurs d’activité",
      detail_ar:"تنص المادة 9 كقاعدة عامة على عدم تسجيل أكثر من قطاع نشاط واحد في مستخرج السجل التجاري نفسه. القطاعات الموجودة في قائمتك: "+nonExport.join("، ")+". راجع أي استثناء خاص؛ هذه نتيجة مراجعة أولية وليست حكماً نهائياً.",
      detail_fr:"L’article 9 pose comme règle générale qu’un même extrait ne comporte pas plus d’un secteur d’activité. Secteurs sélectionnés : "+nonExport.join(", ")+". Vérifiez les exceptions éventuelles ; il s’agit d’un examen préliminaire.",
      article:"Décret exécutif 15-249, article 9", sourceUrl:DECREE_15_249
    });
  }

  if (sectors.includes("7") && nonExport.length) findings.push({
    id:"export-sector", severity:"info",
    title_ar:"تحقق قبل إضافة قطاع التصدير كنشاط مستقل",
    title_fr:"Vérifiez avant d’ajouter le secteur exportation comme activité distincte",
    detail_ar:"تسمح المادة 11 للمتعامل الاقتصادي، في إطار نشاطاته التجارية، بتصدير المنتجات وفق التنظيم المعمول به. لا تضف قطاع التصدير تلقائياً لمجرد نية تصدير منتجات نشاط آخر.",
    detail_fr:"L’article 11 permet à un opérateur d’exporter des produits dans le cadre de ses activités commerciales. N’ajoutez pas automatiquement le secteur exportation au seul motif que le projet prévoit l’exportation.",
    article:"Décret exécutif 15-249, article 11", sourceUrl:DECREE_15_249,
    codes:activities.filter((activity) => activity.sector_code === "7").map((activity) => activity.code)
  });

  if (sectors.includes("4")) findings.push({
    id: "sector-4-review",
    severity: "info",
    title_ar: "ملاحظة مراجعة نشاطات قطاع الاستيراد لإعادة البيع على الحالة",
    title_fr: "Note d’examen pour les activités d’importation pour la revente en l’état",
    detail_ar: "يخضع قطاع الاستيراد لإعادة البيع على الحالة (القطاع 4) لشروط تنظيمية خاصة وفق التشريع والتنظيم المعمول بهما (بما في ذلك دفتر الشروط وتجانس الأنشطة وتخصيص مستخرج السجل التجاري). هذه ملاحظة إعلامية للمراجعة مع الجهات المختصة، وليست حكماً بالمنع أو القبول التلقائي.",
    detail_fr: "Le secteur de l’importation pour la revente en l’état (secteur 4) est soumis à des conditions réglementaires spécifiques selon la législation et la réglementation en vigueur (notamment cahier des charges, homogénéité des activités et spécialisation de l’extrait du registre du commerce). Il s’agit d’une note d’information préalable à vérifier auprès des autorités compétentes, et non d’une décision automatique d’autorisation ou de refus.",
    article: "Décret exécutif 15-249 & réglementation du secteur 4",
    sourceUrl: DECREE_15_249,
    codes: activities.filter((activity) => activity.sector_code === "4").map((activity) => activity.code),
  });

  const text = normalizeNAESearchText(description);
  const operations = COMPLEMENTARY.filter((operation) => operation.terms.some((term) => containsNormalizedPhrase(text, term)));
  if (operations.length) findings.push({
    id:"complementary-operations", severity:"info",
    title_ar:"قد تكون بعض الأعمال المذكورة عمليات تكميلية",
    title_fr:"Certaines opérations décrites peuvent être complémentaires",
    detail_ar:"ذكرت في وصف مشروعك: "+operations.map((operation) => operation.ar).join("، ")+". تذكر المادة 2 هذه العمليات ضمن ما قد يمارس تكميلياً للنشاط الرئيسي. افحص محتوى النشاط الرئيسي وأنشطته الإضافية قبل إضافة رمز مستقل؛ فهذا لا يعني أن كل عملية مغطاة تلقائياً بكل نشاط.",
    detail_fr:"Votre description mentionne : "+operations.map((operation) => operation.fr).join(", ")+". L’article 2 cite ces opérations parmi celles qui peuvent être complémentaires. Vérifiez le contenu et les activités accessoires avant d’ajouter un code distinct ; cela ne signifie pas que chaque opération est couverte par toute activité.",
    article:"Décret exécutif 15-249, article 2", sourceUrl:DECREE_15_249
  });


  return { selectedCount:activities.length, sectors, sameGroup:groups.size===1 && activities.length>1, sameSubgroup:subgroups.size===1 && activities.length>1, primaryCode, findings };
}
