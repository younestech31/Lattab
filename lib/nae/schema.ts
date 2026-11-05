import { z } from "zod";

/**
 * Canonical row shape for the CNRC NAE CSV export.
 * Source field names are intentionally preserved, including "contenue_fr".
 * Empty optional source cells are normalized to null; original CSV remains untouched.
 */
export const naeActivitySchema = z.object({
  code: z.string().regex(/^\d{6}$/, "Activity code must contain exactly six digits"),
  label_fr: z.string().min(1),
  label_en: z.string().min(1),
  label_ar: z.string().min(1),
  status: z.string().min(1),
  sector_code: z.string().regex(/^[1-7]$/),
  group_code: z.string().regex(/^\d{3}$/),
  subgroup_code: z.string().regex(/^\d{4}$/),
  tutelle_fr: z.string().nullable(),
  type_autorisation_fr: z.string().nullable(),
  contenue_fr: z.string().min(1),
  accessoires_fr: z.string().nullable(),
  references_texte_fr: z.string().nullable(),
}).strict();

export type NAEActivity = z.infer<typeof naeActivitySchema>;

export const NAE_SOURCE_HEADERS = [
  "code",
  "label_fr",
  "label_en",
  "label_ar",
  "status",
  "sector_code",
  "group_code",
  "subgroup_code",
  "tutelle_fr",
  "type_autorisation_fr",
  "contenue_fr",
  "accessoires_fr",
  "references_texte_fr",
] as const;
