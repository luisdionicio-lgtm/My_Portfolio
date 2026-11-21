import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { personalInfo } from '@/lib/data';
import { siteUrl, pageMetadata } from '@/lib/seo';
import './globals.css';
export const metadata: Metadata = {
  ...pageMetadata('Portafolio de desarrollo web y móvil', personalInfo.description, '/'),
  metadataBase: new URL(siteUrl),
  title: { default: `${personalInfo.shortName} | Desarrollador Full Stack en Lima`, template: `%s | ${personalInfo.shortName}` },
  applicationName: 'Portafolio de Luis Dionicio', authors: [{ name: personalInfo.name, url: personalInfo.linkedin }],
  creator: personalInfo.name, category: 'technology', robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a className="skip-link" href="#contenido">Saltar al contenido</a><Header /><main id="contenido" tabIndex={-1}>{children}</main><Footer /></body></html>;
}
