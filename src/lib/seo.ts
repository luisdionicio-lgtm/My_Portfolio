import type { Metadata } from 'next';
import { personalInfo } from './data';
// No se inventa un dominio público: usar el origen local hasta configurar uno real.
export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').origin;
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description, alternates: { canonical: path },
    openGraph: { title: `${title} | ${personalInfo.shortName}`, description, url: path, siteName: personalInfo.shortName, locale: 'es_PE', type: 'website', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Luis Dionicio — Desarrollo web y móvil' }] },
    twitter: { card: 'summary_large_image', title: `${title} | ${personalInfo.shortName}`, description, images: ['/opengraph-image'] },
  };
}
