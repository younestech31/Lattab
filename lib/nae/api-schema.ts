import { z } from "zod";

export const SearchPayloadSchema = z.object({
  q: z.string().trim().min(1).max(180),
  lang: z.enum(["ar", "fr"]).default("ar"),
  sector: z.enum(["1", "2", "3", "4", "5", "6", "7", "all"]).optional(),
  status: z.enum(["normal", "green", "red", "all"]).optional(),
  page: z.number().int().min(1).optional(),
  pageSize: z.number().int().min(1).max(100).optional(),
});

export const BrowsePayloadSchema = z.object({
  lang: z.enum(["ar", "fr"]).default("ar"),
  sector: z.enum(["1", "2", "3", "4", "5", "6", "7", "all"]).default("all"),
  status: z.enum(["normal", "green", "red", "all"]).default("all"),
  subgroup: z.string().optional(),
  complementaryTo: z.string().regex(/^\d{6}$/).optional(),
  q: z.string().trim().max(180).optional(),
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).max(100).default(24),
});

export const AnalyzePayloadSchema = z.object({
  codes: z.array(z.string().regex(/^\d{6}$/)).min(1).max(2136),
  description: z.string().trim().max(180).default(""),
  primaryCode: z.string().regex(/^\d{6}$/).nullable().optional(),
  lang: z.enum(["ar", "fr"]).default("ar"),
});

