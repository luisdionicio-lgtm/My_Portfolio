type SiteEnvironment = Record<string, string | undefined>;

// Un único origen para canonical, Open Graph, sitemap y robots.
export function resolveSiteUrl(env: SiteEnvironment): string {
  const configured = env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelHost = env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL;
  const value =
    configured ||
    (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL debe ser una URL absoluta, por ejemplo https://tu-dominio.com.",
    );
  }
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "El origen SEO debe contener solo http(s), dominio y puerto opcional, sin rutas ni credenciales.",
    );
  }
  if (
    env.VERCEL === "1" &&
    (url.protocol !== "https:" ||
      ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname))
  ) {
    throw new Error(
      "Configura un origen HTTPS público antes de compilar en Vercel.",
    );
  }
  return url.origin;
}
