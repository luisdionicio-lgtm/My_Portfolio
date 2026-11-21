import type { Metadata } from "next";
import { personalInfo } from "./data";
import { resolveSiteUrl } from "./site-origin";
export const siteUrl = resolveSiteUrl(process.env);
export const isPreviewDeployment = process.env.VERCEL_ENV === "preview";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${personalInfo.shortName}`,
      description,
      url: path,
      siteName: personalInfo.shortName,
      locale: "es_PE",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Luis Dionicio — Desarrollo web y móvil",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${personalInfo.shortName}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
