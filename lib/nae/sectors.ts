/**
 * Official sector names verified against Article 3 of Executive Decree 15-249.
 * Group and subgroup names are deliberately not inferred from their numeric codes.
 */
export const NAE_SECTORS = {
  "1": {
    code: "1",
    label_ar: "إنتاج السلع",
    source_url: "https://www.commerce.gov.dz/ar/reglementation/decret-executif-n15-249",
    source_note: "المرسوم التنفيذي 15-249، المادة 3",
  },
  "2": {
    code: "2",
    label_ar: "مؤسسات الإنتاج الحرفي",
    source_url: "https://www.commerce.gov.dz/ar/reglementation/decret-executif-n15-249",
    source_note: "المرسوم التنفيذي 15-249، المادة 3",
  },
  "3": {
    code: "3",
    label_ar: "التوزيع بالجملة",
    source_url: "https://www.commerce.gov.dz/ar/reglementation/decret-executif-n15-249",
    source_note: "المرسوم التنفيذي 15-249، المادة 3",
  },
  "4": {
    code: "4",
    label_ar: "الاستيراد لإعادة البيع على الحالة",
    source_url: "https://www.commerce.gov.dz/ar/reglementation/decret-executif-n15-249",
    source_note: "المرسوم التنفيذي 15-249، المادة 3",
  },
  "5": {
    code: "5",
    label_ar: "التوزيع بالتجزئة (القار وغير القار)",
    source_url: "https://www.commerce.gov.dz/ar/reglementation/decret-executif-n15-249",
    source_note: "المرسوم التنفيذي 15-249، المادة 3",
  },
  "6": {
    code: "6",
    label_ar: "الخدمات",
    source_url: "https://www.commerce.gov.dz/ar/reglementation/decret-executif-n15-249",
    source_note: "المرسوم التنفيذي 15-249، المادة 3",
  },
  "7": {
    code: "7",
    label_ar: "التصدير",
    source_url: "https://www.commerce.gov.dz/ar/reglementation/decret-executif-n15-249",
    source_note: "المرسوم التنفيذي 15-249، المادة 3",
  },
} as const;

export type NAESectorCode = keyof typeof NAE_SECTORS;
