import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/config";
import { getNAEActivityByCode } from "@/lib/nae/data";
import { NAEActivityDetailPage } from "@/lib/nae/presentation";
import { getNAEActivityTitle, getNAEPageDescription, isNAEActivityIndexable } from "@/lib/nae/seo";

export const revalidate = 604800;

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const activity = /^[0-9]{6}$/.test(code) ? getNAEActivityByCode(code) : undefined;

  if (!activity) return { robots: { index: false, follow: true } };

  const url = `${SITE_URL}/fr/nae/${code}`;
  const arIndexable = isNAEActivityIndexable(activity, "ar");
  const frIndexable = isNAEActivityIndexable(activity, "fr");
  const languages: Record<string, string> = {};

  if (arIndexable) languages["ar-DZ"] = `${SITE_URL}/nae/${code}`;
  if (frIndexable) languages["fr-DZ"] = url;
  if (arIndexable || frIndexable) {
    languages["x-default"] = arIndexable ? `${SITE_URL}/nae/${code}` : url;
  }

  const title = getNAEActivityTitle(activity, "fr");
  const description = getNAEPageDescription(activity, "fr");

  return {
    title: { absolute: `${title} — activité économique ${code} | Office notarial` },
    description,
    alternates: { canonical: url, ...(Object.keys(languages).length ? { languages } : {}) },
    robots: { index: isNAEActivityIndexable(activity, "fr"), follow: true },
    openGraph: {
      title: `${title} — ${code}`,
      description,
      url,
      type: "article",
      locale: "fr_DZ",
    },
  };
}

export default async function FrenchNAEActivityPage({ params }: Props) {
  const { code } = await params;
  if (!/^[0-9]{6}$/.test(code)) notFound();

  const activity = getNAEActivityByCode(code);
  if (!activity) notFound();

  return <NAEActivityDetailPage lang="fr" activity={activity} />;
}
