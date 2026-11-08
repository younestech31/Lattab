import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";
import { NAEExplorerPage } from "@/lib/nae/presentation";
import { JsonLdScript } from "@/components/schema";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const title = "دليل النشاطات الاقتصادية الجزائرية | الديوان العمومي للتوثيق وهران";
  const description =
    "دليل معلوماتي لاستعراض الأنشطة الاقتصادية المعتمدة (NAE) وفحص موانع الجمع وإعداد ورقة عمل تحضيرية لملف التأسيس لدى ديوان التوثيق للأستاذ لعطب محمد بوهران.";
  const url = `${SITE_URL}/nae`;

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
      siteName: "الديوان العمومي للتوثيق — الأستاذ لعطب محمد",
      type: "website",
      locale: "ar_DZ",
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
        "@id": `${SITE_URL}/nae#webpage`,
        "url": `${SITE_URL}/nae`,
        "name": "دليل النشاطات الاقتصادية الجزائرية",
        "description":
          "دليل معلوماتي لاستعراض الأنشطة الاقتصادية المعتمدة (NAE) وفحص موانع الجمع وإعداد ورقة عمل تحضيرية لملف التأسيس.",
        "inLanguage": "ar-DZ",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "url": SITE_URL,
          "name": "الديوان العمومي للتوثيق — الأستاذ لعطب محمد",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/nae#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": SITE_URL,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "دليل النشاطات الاقتصادية",
            "item": `${SITE_URL}/nae`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLdScript schema={schema} />
      <NAEExplorerPage lang="ar" params={{}} />
    </>
  );
}
