import { normalizeNAESearchText } from "./search";

export type NAEProjectRegulatoryStatus = "free" | "regulated" | "blocked" | "unknown";

export interface NAEProjectActivity {
  code: string;
  label_ar: string;
  label_fr: string;
  status: string;
  sector_code: string;
  group_code: string;
  subgroup_code: string;
  tutelle_fr?: string | null;
  type_autorisation_fr?: string | null;
  references_texte_fr?: string | null;
  contenue_fr?: string;
  accessoires_fr?: string | null;
  catalog_note_ar?: string;
  catalog_note_fr?: string;
  catalog_note_kind?: string;
}

export interface NAEProjectFinding {
  id: string;
  severity: "info" | "caution" | "stop";
  title_ar: string;
  title_fr: string;
  message_ar: string;
  message_fr: string;
  legal_reference: string;
}

export interface NAEProjectAnalysis {
  selectedCount: number;
  sectors: string[];
  sameGroup: boolean;
  sameSubgroup: boolean;
  statusCounts: Record<NAEProjectRegulatoryStatus, number>;
  findings: NAEProjectFinding[];
}

export function getNAEProjectRegulatoryStatus(rawStatus: string): NAEProjectRegulatoryStatus {
  switch (rawStatus.trim().toLowerCase()) {
    case "normal": return "free";
    case "green": return "regulated";
    case "red": return "blocked";
    default: return "unknown";
  }
}

/**
 * Applies only broad, source-backed NAE rules. It deliberately does not decide
 * whether an individual combination is administratively accepted.
 */
export function analyzeNAEProject(
  activities: readonly NAEProjectActivity[],
  description = "",
  primaryCode: string | null = null,
): NAEProjectAnalysis {
  const unique = [...new Map(activities.map((item) => [item.code, item])).values()];
  const sectors = [...new Set(unique.map((item) => item.sector_code))].sort();
  const groups = new Set(unique.map((item) => item.group_code));
  const subgroups = new Set(unique.map((item) => item.subgroup_code));
  const primaryActivity = unique.find((item) => item.code === primaryCode) ?? unique[0];
  const statusCounts: Record<NAEProjectRegulatoryStatus, number> = {
    free: 0, regulated: 0, blocked: 0, unknown: 0,
  };
  for (const item of unique) statusCounts[getNAEProjectRegulatoryStatus(item.status)] += 1;

  const findings: NAEProjectFinding[] = [];
  if (statusCounts.blocked > 0) {
    findings.push({
      id: "source-blocked-status",
      severity: "stop",
      title_ar: "نشاط مصنّف مغلق للتسجيل حسب المصدر",
      title_fr: "Activité signalée comme fermée à l’inscription dans la source",
      message_ar: "تتضمن القائمة نشاطاً يحمل حالة «مغلق للتسجيل» حسب قاموس حالات مجموعة البيانات. لا تعتمد هذا الاختيار قبل التحقق من CNRC والنصوص السارية.",
      message_fr: "La sélection comprend une activité signalée comme fermée à l’inscription dans le dictionnaire de statuts de la source. Vérifiez auprès du CNRC et les textes en vigueur avant de retenir ce choix.",
      legal_reference: "upgrowth-status-dictionary",
    });
  }
  if (statusCounts.regulated > 0) {
    findings.push({
      id: "regulated-activity",
      severity: "caution",
      title_ar: "توجد نشاطات منظمة",
      title_fr: "Activités réglementées détectées",
      message_ar: "تحقق من الاعتماد أو الترخيص الخاص بكل نشاط ومن الجهة المختصة. لا يستنتج توقيت إرفاق الترخيص من حالة النشاط وحدها؛ فقد يلزم قبل التسجيل في حالات ينص عليها تشريع خاص.",
      message_fr: "Vérifiez l’agrément ou l’autorisation propre à chaque activité et l’autorité compétente. Le moment de sa présentation ne peut pas être déduit du seul statut.",
      legal_reference: "decree-20-355-articles-4-and-4-bis",
    });
  }
  if (statusCounts.unknown > 0) {
    findings.push({
      id: "unknown-source-status",
      severity: "caution",
      title_ar: "حالة بعض النشاطات غير معروفة",
      title_fr: "Statut source inconnu pour certaines activités",
      message_ar: "لا تتوفر قيمة حالة قابلة للتفسير لبعض النشاطات في نسخة البيانات. لا يعني ذلك أنها حرة أو غير منظمة.",
      message_fr: "Le statut de certaines activités n’est pas disponible ou reconnu dans la version des données. Cela ne signifie pas qu’elles sont libres ou non réglementées.",
      legal_reference: "dataset-manifest",
    });
  }
  if (sectors.length > 1) {
    findings.push({
      id: "multiple-sectors",
      severity: "caution",
      title_ar: "القائمة تجمع أكثر من قطاع",
      title_fr: "Plusieurs secteurs dans la sélection",
      message_ar: "الأصل عدم جمع تسجيل أكثر من قطاع نشاط في مستخرج واحد. توجد حالة استثنائية مشروطة لبعض نشاطات التوزيع بالتجزئة والخدمات، ولا يعني ظهور القطاعين 5 و6 أن الجمع مقبول تلقائياً.",
      message_fr: "En principe, le cumul de plusieurs secteurs sur un même extrait n’est pas admis. Une exception conditionnelle existe pour certaines activités des secteurs 5 et 6 ; leur présence ne rend pas le cumul automatiquement admissible.",
      legal_reference: "decree-15-249-article-9",
    });
  }
  if (sectors.length === 2 && sectors.includes("5") && sectors.includes("6")) {
    findings.push({
      id: "retail-services-exception",
      severity: "caution",
      title_ar: "تحقق من الاستثناء المشروط للقطاعين 5 و6",
      title_fr: "Vérifier l’exception conditionnelle entre les secteurs 5 et 6",
      message_ar: "قد يسمح بجمع بعض نشاطات التوزيع بالتجزئة والخدمات لأسباب المنفعة التجارية وتموين المناطق المعزولة أو ضعيفة التغطية. يلزم التحقق من النشاطات والشروط لدى الجهة المختصة.",
      message_fr: "Le cumul de certaines activités de détail et de services peut être autorisé pour des raisons d’utilité commerciale et d’approvisionnement de localités enclavées ou mal desservies. Les conditions doivent être vérifiées.",
      legal_reference: "decree-15-249-article-9",
    });
  }
  if (unique.length > 1 && (groups.size === 1 || subgroups.size === 1)) {
    findings.push({
      id: "taxonomy-not-legal-approval",
      severity: "info",
      title_ar: "التقارب في التصنيف ليس موافقة قانونية",
      title_fr: "La proximité taxonomique ne vaut pas autorisation juridique",
      message_ar: "وجود نشاطات في المجموعة أو المجموعة الفرعية نفسها يوضح تقاربها في التصنيف فقط، ولا يثبت وحده إمكانية جمعها في مستخرج سجل تجاري واحد.",
      message_fr: "L’appartenance au même groupe ou sous-groupe indique une proximité de classification, mais ne prouve pas à elle seule que le cumul est admis sur un même extrait.",
      legal_reference: "decree-15-249-articles-2-and-9",
    });
  }

  const selectedWithCatalogNotes = unique.filter((item) => item.catalog_note_kind);
  if (selectedWithCatalogNotes.length > 0) {
    findings.push({
      id: "catalog-freshness-observation",
      severity: "caution",
      title_ar: "توجد ملاحظة تحديث على بعض الرموز المختارة",
      title_fr: "Une observation de mise à jour concerne certaines activités",
      message_ar: "تتضمن القائمة نشاطاً ورد بشأنه تقرير تحديث من مصدر متابعة ثانوي بعد نسخة البيانات الحالية. هذه الملاحظة ليست تأكيداً رسمياً؛ تحقّق من سجل CNRC قبل الاعتماد.",
      message_fr: "La sélection comprend une activité faisant l’objet d’un signalement de mise à jour par une source secondaire après l’instantané actuel. Ce signalement n’est pas une confirmation officielle ; vérifiez la fiche CNRC.",
      legal_reference: "source-observations.json",
    });
  }

  const normalizedDescription = normalizeNAESearchText(description);
  const complementaryOperations = [
    {
      id: "complementary-transport-delivery",
      terms: ["نقل", "توصيل", "تسليم", "transport", "livraison", "livrer"],
      activityTerms: ["نقل", "توصيل", "تسليم", "transport", "livraison", "livrer"],
      title_ar: "النقل أو التسليم للزبائن",
      title_fr: "Transport ou livraison à la clientèle",
    },
    {
      id: "complementary-installation",
      terms: ["تركيب", "تنصيب", "montage", "installation"],
      activityTerms: ["تركيب", "تنصيب", "montage", "installation", "installer"],
      title_ar: "تركيب وتنصيب المعدات",
      title_fr: "Montage et installation du matériel",
    },
    {
      id: "complementary-spare-parts",
      terms: ["قطع غيار", "pieces de rechange", "piece detachee"],
      activityTerms: ["قطع غيار", "pieces de rechange", "piece detachee", "spare parts"],
      title_ar: "توفير قطع الغيار",
      title_fr: "Fourniture de pièces de rechange",
    },
    {
      id: "complementary-consulting-training",
      terms: ["استشارة", "تكوين", "تدريب", "conseil", "formation"],
      activityTerms: ["استشارة", "تكوين", "تدريب", "conseil", "formation"],
      title_ar: "الاستشارة والتكوين",
      title_fr: "Conseil et formation",
    },
  ];
  for (const operation of complementaryOperations) {
    if (operation.terms.some((term) => normalizedDescription.includes(normalizeNAESearchText(term)))) {
      const primaryContent = normalizeNAESearchText(primaryActivity?.contenue_fr ?? "");
      const primaryAccessories = normalizeNAESearchText(primaryActivity?.accessoires_fr ?? "");
      const mentionedInContent = operation.activityTerms.some((term) =>
        primaryContent.includes(normalizeNAESearchText(term))
      );
      const mentionedInAccessories = operation.activityTerms.some((term) =>
        primaryAccessories.includes(normalizeNAESearchText(term))
      );
      const coverageNote = !primaryActivity
        ? "لم تحدد نشاطاً رئيسياً بعد؛ أضفه إلى القائمة لتتمكن الأداة من فحص نصه."
        : mentionedInContent
          ? "وجد فحص نصي عبارة مرتبطة بهذه العملية في محتوى النشاط الرئيسي. هذا تطابق لفظي لا يثبت أن كل صور العملية مغطاة قانونياً."
          : mentionedInAccessories
            ? "وجد فحص نصي عبارة مرتبطة بهذه العملية ضمن الأنشطة الملحقة بالنشاط الرئيسي. هذا تطابق لفظي لا يثبت أن كل صور العملية مغطاة قانونياً."
            : "لم يعثر الفحص النصي على ذكر مباشر لهذه العملية في محتوى النشاط الرئيسي أو أنشطته الملحقة؛ راجع البطاقة والنصوص الخاصة قبل إضافة رمز آخر.";
      const coverageNoteFr = !primaryActivity
        ? "Aucune activité principale n’est encore définie ; ajoutez-en une pour examiner son contenu."
        : mentionedInContent
          ? "Une expression liée à cette opération apparaît dans le contenu de l’activité principale. Il s’agit d’une correspondance textuelle, pas d’une confirmation de couverture juridique."
          : mentionedInAccessories
            ? "Une expression liée à cette opération apparaît dans les activités accessoires de l’activité principale. Il s’agit d’une correspondance textuelle, pas d’une confirmation de couverture juridique."
            : "Aucune mention directe n’a été trouvée dans le contenu ni les activités accessoires de l’activité principale ; vérifiez la fiche et les textes avant d’ajouter un autre code.";
      findings.push({
        id: operation.id,
        severity: "info",
        title_ar: operation.title_ar,
        title_fr: operation.title_fr,
        message_ar: "تُذكر هذه العملية ضمن العمليات التكميلية في المادة 2 من المرسوم 15-249 متى أُنجزت تكميلياً للنشاط الرئيسي. " + coverageNote + " لا تضف رمزاً مستقلاً آلياً.",
        message_fr: "Cette opération figure parmi les opérations complémentaires de l’article 2 du décret 15-249 lorsqu’elle est accessoire à l’activité principale. " + coverageNoteFr + " N’ajoutez pas automatiquement un code distinct.",
        legal_reference: "decree-15-249-article-2",
      });
    }
  }

  const exportIntent = ["تصدير", "exporter", "exportation", "export"].some((term) =>
    normalizedDescription.includes(normalizeNAESearchText(term))
  );
  if (exportIntent && !sectors.includes("7")) {
    findings.push({
      id: "export-does-not-require-sector-7-by-default",
      severity: "info",
      title_ar: "التصدير لا يستلزم إضافة القطاع 7 تلقائياً",
      title_fr: "L’exportation n’impose pas automatiquement le secteur 7",
      message_ar: "تنص المادة 11 من المرسوم 15-249 على إمكانية تصدير المتعامل لمنتجاته في إطار نشاطاته التجارية ووفق التنظيم المعمول به. لا تضف نشاط التصدير لمجرد ذكر نية التصدير.",
      message_fr: "L’article 11 du décret 15-249 permet à l’opérateur d’exporter des produits dans le cadre de ses activités commerciales, conformément à la réglementation. N’ajoutez pas automatiquement le secteur 7.",
      legal_reference: "decree-15-249-article-11",
    });
  }

  if (unique.some((item) => !item.tutelle_fr || !item.type_autorisation_fr)) {
    findings.push({
      id: "incomplete-regulatory-metadata",
      severity: "info",
      title_ar: "البيانات التنظيمية غير مكتملة في المصدر",
      title_fr: "Métadonnées réglementaires incomplètes",
      message_ar: "غياب الجهة الوصية أو نوع الترخيص في ملف البيانات لا يثبت عدم وجود شرط أو ترخيص. يلزم التحقق من النصوص الخاصة بالنشاط.",
      message_fr: "L’absence de tutelle ou de type d’autorisation dans le fichier ne prouve pas l’absence d’une exigence. Vérifiez les textes propres à l’activité.",
      legal_reference: "dataset-field-coverage",
    });
  }

  return {
    selectedCount: unique.length,
    sectors,
    sameGroup: unique.length > 0 && groups.size === 1,
    sameSubgroup: unique.length > 0 && subgroups.size === 1,
    statusCounts,
    findings,
  };
}
