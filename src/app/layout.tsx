import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/lib/data";
import { siteUrl, pageMetadata, isPreviewDeployment } from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
  ...pageMetadata(
    "Portafolio de desarrollo web y móvil",
    personalInfo.description,
    "/",
  ),
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.shortName} | Desarrollador Full Stack en Lima`,
    template: `%s | ${personalInfo.shortName}`,
  },
  applicationName: "Portafolio de Luis Dionicio",
  authors: [{ name: personalInfo.name, url: personalInfo.linkedin }],
  creator: personalInfo.name,
  category: "technology",
  robots: { index: !isPreviewDeployment, follow: !isPreviewDeployment },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { var t=localStorage.getItem("luis-portfolio-theme"); if(t === "light" || t === "dark") document.documentElement.dataset.theme=t; } catch {}`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
