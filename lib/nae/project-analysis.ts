import type { NAEActivity } from "./schema";
import { getNAEStatusInfo } from "./status";
import { normalizeNAESearchText } from "./search";

export type NAEProjectSeverity = "info" | "warning" | "critical";
export interface NAEProjectFinding {
  id: string; severity: NAEProjectSeverity; title_ar: string; title_fr: string;
  detail_ar: string; detail_fr: string; article?: string; sourceUrl?: string; codes?: string[];
}
export interface NAEProjectAnalysis {
  selectedCount: number; sectors: string[]; sameSubgroup: boolean; primaryCode: string | null; findings: NAEProjectFinding[];
}
const DECREE_15_249 = "https://www.joradp.dz/FTP/jo-arabe/2015/A2015052.pdf";
const DECREE_20_355 = "https://www.joradp.dz/FTP/JO-francais/2020/F2020073.pdf";
const COMPLEMENTARY = [
  { terms:["نقل","توصيل","تسليم","transport","livraison"], ar:"النقل والتسليم للزبائن", fr:"transport et livraison à la clientèle" },
  { terms:["تركيب","تنصيب","installation","montage"], ar:"تركيب وتنصيب المعدات", fr:"montage et installation du matériel" },
  { terms:["قطع الغيار","قطع","غيار","pieces detachees","pièces détachées"], ar:"توفير قطع الغيار", fr:"fourniture de pièces de rechange" },
  { terms:["استشارة","استشارات","conseil"], ar:"الاستشارة", fr:"conseil" },
  { terms:["تكوين","تدريب","formation"], ar:"التكوين", fr:"formation" }
] as const;

export function analyzeNAEProject(input: readonly NAEActivity[], description = "", requestedPrimaryCode: string | null = null): NAEProjectAnalysis {
  const activities = [...new Map(input.map((activity) => [activity.code, activity])).values()];
  const sectors = [...new Set(activities.map((activity) => activity.sector_code))].sort();
  const subgroups = new Set(activities.map((activity) => activity.subgroup_code));
  const findings: NAEProjectFinding[] = [];
  if (!activities.length) return { selectedCount: 0, sectors: [], sameSubgroup: false, primaryCode: null, findings };

  const primaryCode = requestedPrimaryCode && activities.some((activity) => activity.code === requestedPrimaryCode) ? requestedPrimaryCode : activities[0].code;
  const blocked = activities.filter((activity) => getNAEStatusInfo(activity.status).code === "blocked").map((activity) => activity.code);
  const regulated = activities.filter((activity) => getNAEStatusInfo(activity.status).code === "regulated");

  if (blocked.length) findings.push({
    id:"catalog-blocked", severity:"critical",
    title_ar:"توجد نشاطات حالتها محظورة في نسخة المصدر",
    title_fr:"Des activités sont signalées comme bloquées dans la source",
    detail_ar:"الرموز التالية تحمل حالة «محظور» في نسخة البيانات: "+blocked.join("، ")+". لا تعتمدها كنشاطات قابلة للتسجيل قبل مراجعة الحالة الحالية لدى CNRC والنصوص السارية. هذا تنبيه مبني على حالة المدونة، وليس قراراً إدارياً.",
    detail_fr:"Les codes suivants portent le statut « bloquée » dans l’instantané : "+blocked.join(", ")+". Vérifiez leur situation actuelle auprès du CNRC avant de les considérer comme inscriptibles. Ce signalement ne constitue pas une décision administrative.",
    codes:blocked
  });

  if (regulated.length) {
    const codes = regulated.map((activity) => activity.code);
    const missing = regulated.filter((activity) => !activity.tutelle_fr || !activity.type_autorisation_fr || !activity.references_texte_fr).map((activity) => activity.code);
    findings.push({
      id:"catalog-regulated", severity:"warning",
      title_ar:"توجد نشاطات منظمة تحتاج إلى مراجعة شروطها",
      title_fr:"Des activités réglementées nécessitent une vérification",
      detail_ar:"الرموز المصنفة كنشاطات منظمة: "+codes.join("، ")+". راجع سلطة الوصاية والنص الخاص ونوع الإجراء. "+(missing.length?"البيانات التنظيمية ناقصة في النسخة لهذه الرموز: "+missing.join("، ")+".":"وجود هذه الحقول لا يحسم وحده توقيت الترخيص.")+" لا يُستنتج من الحالة وحدها أن الاعتماد يجب أن يسبق إيداع ملف السجل.",
      detail_fr:"Codes classés réglementés : "+codes.join(", ")+". Vérifiez l’autorité, le texte spécial et la nature de l’autorisation. "+(missing.length?"Les informations sont incomplètes pour : "+missing.join(", ")+".":"La présence de ces champs ne suffit pas à déterminer le moment requis.")+" Le statut seul ne permet pas de conclure que l’agrément doit précéder le dépôt au registre.",
      article:"Articles 4 et 4 bis du décret 15-234, modifiés / introduits par le décret 20-355", sourceUrl:DECREE_20_355, codes
    });
  }

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
  } else if (nonExport.length === 1 && sectors.length === 1) findings.push({
    id:"single-sector", severity:"info",
    title_ar:"النشاطات المختارة تنتمي إلى القطاع نفسه",
    title_fr:"Les activités sélectionnées relèvent du même secteur",
    detail_ar:"هذا تقارب على مستوى التصنيف فقط، ولا يثبت وحده أن النشاطات متجانسة قانونياً أو يمكن جمعها في مستخرج واحد.",
    detail_fr:"Cette proximité de classification ne prouve pas l’homogénéité juridique ni la possibilité de cumul dans un même extrait."
  });

  if (sectors.includes("7") && nonExport.length) findings.push({
    id:"export-sector", severity:"info",
    title_ar:"تحقق قبل إضافة قطاع التصدير كنشاط مستقل",
    title_fr:"Vérifiez avant d’ajouter le secteur exportation comme activité distincte",
    detail_ar:"تسمح المادة 11 للمتعامل الاقتصادي، في إطار نشاطاته التجارية، بتصدير المنتجات وفق التنظيم المعمول به. لا تضف قطاع التصدير تلقائياً لمجرد نية تصدير منتجات نشاط آخر.",
    detail_fr:"L’article 11 permet à un opérateur d’exporter des produits dans le cadre de ses activités commerciales. N’ajoutez pas automatiquement le secteur exportation au seul motif que le projet prévoit l’exportation.",
    article:"Décret exécutif 15-249, article 11", sourceUrl:DECREE_15_249,
    codes:activities.filter((activity) => activity.sector_code === "7").map((activity) => activity.code)
  });

  const text = normalizeNAESearchText(description);
  const operations = COMPLEMENTARY.filter((operation) => operation.terms.some((term) => text.includes(normalizeNAESearchText(term))));
  if (operations.length) findings.push({
    id:"complementary-operations", severity:"info",
    title_ar:"قد تكون بعض الأعمال المذكورة عمليات تكميلية",
    title_fr:"Certaines opérations décrites peuvent être complémentaires",
    detail_ar:"ذكرت في وصف مشروعك: "+operations.map((operation) => operation.ar).join("، ")+". تذكر المادة 2 هذه العمليات ضمن ما قد يمارس تكميلياً للنشاط الرئيسي. افحص محتوى النشاط الرئيسي وأنشطته الإضافية قبل إضافة رمز مستقل؛ فهذا لا يعني أن كل عملية مغطاة تلقائياً بكل نشاط.",
    detail_fr:"Votre description mentionne : "+operations.map((operation) => operation.fr).join(", ")+". L’article 2 cite ces opérations parmi celles qui peuvent être complémentaires. Vérifiez le contenu et les activités accessoires avant d’ajouter un code distinct ; cela ne signifie pas que chaque opération est couverte par toute activité.",
    article:"Décret exécutif 15-249, article 2", sourceUrl:DECREE_15_249
  });

  if (subgroups.size === 1 && activities.length > 1) findings.push({
    id:"classification-proximity", severity:"info",
    title_ar:"النشاطات ضمن المجموعة الفرعية نفسها",
    title_fr:"Les activités relèvent du même sous-groupe",
    detail_ar:"استُخدمت المجموعة الفرعية لتقدير التقارب التصنيفي فقط. لا تعني وحدة المجموعة الفرعية أن الجمع بين النشاطات مسموح قانوناً.",
    detail_fr:"Le sous-groupe mesure uniquement la proximité de classification. L’appartenance au même sous-groupe n’autorise pas automatiquement le cumul."
  });

  return { selectedCount:activities.length, sectors, sameSubgroup:subgroups.size===1 && activities.length>1, primaryCode, findings };
}
