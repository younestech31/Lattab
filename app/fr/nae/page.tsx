import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";
import { NAEExplorerPage } from "@/lib/nae/presentation";
import { JsonLdScript } from "@/components/schema";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const title = "Nomenclature des activités économiques | Office notarial à Oran";
  const description =
    "Répertoire informatif pour consulter la nomenclature des activités économiques (NAE), vérifier les incompatibilités et préparer la fiche de constitution avec Maître Lattab Mohamed, notaire à Oran.";
  const url = `${SITE_URL}/fr/nae`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        "ar-DZ": `${SITE_URL}/nae`,
        "fr-DZ": `${SITE_URL}/fr/nae`,
        "x-default": `${SITE_URL}/nae`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Office public de notariat — Maître Lattab Mohamed",
      type: "website",
      locale: "fr_DZ",
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/fr/nae#webpage`,
        "url": `${SITE_URL}/fr/nae`,
        "name": "Nomenclature des activités économiques",
        "description":
          "Répertoire informatif pour consulter la nomenclature des activités économiques (NAE), vérifier les incompatibilités et préparer la fiche de constitution avec Maître Lattab Mohamed, notaire à Oran.",
        "inLanguage": "fr-DZ",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "url": SITE_URL,
          "name": "Office public de notariat — Maître Lattab Mohamed",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/fr/nae#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": `${SITE_URL}/fr`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Nomenclature des activités économiques",
            "item": `${SITE_URL}/fr/nae`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLdScript schema={schema} />
      <NAEExplorerPage lang="fr" params={{}} />
    </>
  );
}
