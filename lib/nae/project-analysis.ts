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

  // Surface the source-level status of every selected activity. Status is a
  // catalogue signal from the dated dataset, not an independent CNRC decision.
  const blockedCodes = activities
    .filter((activity) => activity.status.trim().toLowerCase() === "red")
    .map((activity) => activity.code);
  if (blockedCodes.length) findings.push({
    id: "selected-blocked-activities",
    severity: "critical",
    title_ar: "نشاط مختار مصنّف محظوراً في نسخة البيانات",
    title_fr: "Une activité sélectionnée est signalée comme bloquée dans la source",
    detail_ar: `تُصنّف نسخة البيانات المرجعية الرموز التالية على أنها محظورة: ${blockedCodes.join("، ")}. هذا تصنيف وارد في مصدر البيانات وليس قراراً قانونياً مستقلاً أو تحديثاً آنياً من CNRC؛ تحقّق من الوضع الحالي لدى Sidjilcom والجهة المختصة قبل اعتماد النشاط.`,
    detail_fr: `La version de référence classe les codes suivants comme bloqués : ${blockedCodes.join(", ")}. Ce statut provient du jeu de données et ne constitue ni une décision juridique indépendante ni une mise à jour en temps réel du CNRC ; vérifiez la situation actuelle auprès de Sidjilcom et de l’autorité compétente.`,
    codes: blockedCodes,
  });

  const regulatedCodes = activities
    .filter((activity) => activity.status.trim().toLowerCase() === "green")
    .map((activity) => activity.code);
  if (regulatedCodes.length) findings.push({
    id: "selected-regulated-activities",
    severity: "warning",
    title_ar: "نشاط مختار مصنّف منظّماً في نسخة البيانات",
    title_fr: "Une activité sélectionnée est signalée comme réglementée dans la source",
    detail_ar: `تُصنّف نسخة البيانات المرجعية الرموز التالية على أنها أنشطة منظّمة: ${regulatedCodes.join("، ")}. راجع الجهة الوصية ونوع الاعتماد أو الترخيص والنصوص السارية؛ وغياب التفاصيل في الملف لا يعني عدم وجود شرط.`,
    detail_fr: `La version de référence classe les codes suivants comme activités réglementées : ${regulatedCodes.join(", ")}. Vérifiez l’autorité de tutelle, le titre ou l’autorisation requis et les textes en vigueur ; l’absence de détail dans le fichier ne signifie pas qu’aucune condition ne s’applique.`,
    codes: regulatedCodes,
  });

  const unknownStatusCodes = activities
    .filter((activity) => !["normal", "green", "red"].includes(activity.status.trim().toLowerCase()))
    .map((activity) => activity.code);
  if (unknownStatusCodes.length) findings.push({
    id: "selected-unknown-status",
    severity: "warning",
    title_ar: "حالة مصدر غير معروفة لنشاط مختار",
    title_fr: "Statut source non reconnu pour une activité sélectionnée",
    detail_ar: `تعذّر تفسير حالة المصدر للرموز التالية: ${unknownStatusCodes.join("، ")}. لا تعتبرها أنشطة حرة؛ تحقّق من تصنيفها لدى CNRC.`,
    detail_fr: `Le statut source des codes suivants n’est pas reconnu : ${unknownStatusCodes.join(", ")}. Ne les considérez pas comme des activités libres ; vérifiez leur classement auprès du CNRC.`,
    codes: unknownStatusCodes,
  });

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
    title_ar: "راجع النصوص الخاصة بنشاطات الاستيراد لإعادة البيع على الحالة",
    title_fr: "Vérifiez les textes propres à l’importation pour la revente en l’état",
    detail_ar: "يصنّف المصدر القطاع 4 ضمن الاستيراد لإعادة البيع على الحالة. هذا التصنيف وحده لا يحدد شروط ممارسة كل نشاط ولا يثبت انطباق دفتر شروط أو إجراء موحد على جميع السلع والشركات. تحقّق من النصوص السارية بحسب طبيعة النشاط والسلع ووضع الشركة لدى وزارة التجارة والجهات المختصة قبل اعتماده.",
    detail_fr: "La source classe le secteur 4 dans l’importation pour la revente en l’état. Cette classification ne détermine pas, à elle seule, les conditions d’exercice de chaque activité ni l’application d’un cahier des charges uniforme à toutes les marchandises et sociétés. Vérifiez les textes en vigueur selon l’activité, les produits et la situation de l’entreprise auprès du ministère du Commerce et des autorités compétentes.",
    article: "Décret exécutif 05-458 modifié, notamment par le décret exécutif 21-94",
    sourceUrl: "https://www.commerce.gov.dz/ar/reglementation/decret-executif-n-deg-21-94-du-9-mars-2021-jo-n-deg-20-du-17-mars-2021",
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
