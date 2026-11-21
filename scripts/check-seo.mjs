import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const baseUrl = process.env.CHECK_BASE_URL || origin;
const evidenceDir = process.env.EVIDENCE_DIR || "docs/evidencias";
const routes = [
  "/",
  "/projects",
  "/about",
  "/contact",
  "/projects/ferremax",
  "/projects/factora",
  "/projects/aforo-iot",
  "/projects/cookplan",
  "/projects/celumarket",
  "/projects/educontrol-360",
  "/projects/gm-campo",
  "/projects/lasjijas",
  "/projects/mediguard",
  "/projects/sabor-andino",
  "/projects/el-refugio",
  "/projects/archivos-magicos",
];
const results = [];
const titles = new Set();
for (const path of routes) {
  const response = await fetch(`${baseUrl}${path}`);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title?.includes("Luis Dionicio"), `Nombre en title: ${path}`);
  assert.ok(!titles.has(title), `Título único: ${path}`);
  titles.add(title);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `Un h1: ${path}`);
  assert.ok(html.includes('lang="es"'), path);
  assert.ok(html.includes('name="description" content="'), path);
  assert.ok(
    html.includes(`rel="canonical" href="${origin}${path === "/" ? "" : path}`),
    `Canonical: ${path}`,
  );
  for (const property of ["og:title", "og:description", "og:url", "og:image"])
    assert.ok(html.includes(`property="${property}"`), `${property}: ${path}`);
  assert.ok(
    html.includes('name="twitter:card" content="summary_large_image"'),
    path,
  );
  if (path.startsWith("/projects/"))
    assert.ok(html.includes("SoftwareSourceCode"), path);
  results.push({
    route: path,
    status: response.status,
    title,
    verified: [
      "title único",
      "description",
      "canonical",
      "Open Graph",
      "Twitter Card",
      "lang es",
      "h1 único",
    ],
  });
}
const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
for (const path of routes)
  assert.ok(
    sitemap.includes(`<loc>${origin}${path === "/" ? "" : path}</loc>`),
    `Sitemap ${path}`,
  );
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
assert.equal(robotsResponse.status, 200);
const robots = await robotsResponse.text();
assert.ok(robots.includes("Allow: /"));
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert.equal((await fetch(`${baseUrl}/projects/no-existe`)).status, 404);
const contactHtml = await (await fetch(`${baseUrl}/contact`)).text();
assert.ok(
  contactHtml.includes(
    "https://www.linkedin.com/in/luis-angel-dionicio-bartolo-988b26445/",
  ),
);
assert.ok(contactHtml.includes("Hablemos en LinkedIn"));
for (const id of [
  "contact-name",
  "contact-email",
  "contact-subject",
  "contact-message",
])
  assert.ok(contactHtml.includes(`id="${id}"`), `Campo de contacto: ${id}`);
if (process.env.EXPECTED_CONTACT_EMAIL) {
  assert.ok(
    contactHtml.includes(
      `action="https://formsubmit.co/${process.env.EXPECTED_CONTACT_EMAIL}"`,
    ),
    "Correo receptor del formulario configurado",
  );
  assert.match(contactHtml, /method="POST"/i);
  assert.ok(
    !contactHtml.includes("El formulario estará disponible cuando"),
    "Envío habilitado",
  );
}
const og = await fetch(`${baseUrl}/opengraph-image`);
assert.equal(og.status, 200);
assert.ok(og.headers.get("content-type").includes("image/png"));
const optimized = await fetch(
  `${baseUrl}/_next/image?url=%2Fprofile-original.webp&w=256&q=75`,
  { headers: { Accept: "image/avif,image/webp" } },
);
assert.equal(optimized.status, 200);
assert.match(optimized.headers.get("content-type"), /^image\/(avif|webp)$/);
await mkdir(evidenceDir, { recursive: true });
await writeFile(
  `${evidenceDir}/seo-check.json`,
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      origin,
      baseUrl,
      results,
      sitemapUrls: routes.length,
      robots: "OK",
      missingProject: 404,
      contact: 200,
      contactForm: process.env.EXPECTED_CONTACT_EMAIL
        ? "Campos y destino verificados; entrega de correo pendiente de activación y prueba"
        : "Campos verificados",
      openGraphImage: "OK",
      optimizedProfile: optimized.headers.get("content-type"),
    },
    null,
    2,
  ),
);
await writeFile(`${evidenceDir}/sitemap.xml`, sitemap);
await writeFile(`${evidenceDir}/robots.txt`, robots);
console.log(
  `SEO verificado: ${routes.length} rutas, metadatos, sitemap, robots, imagen OG, AVIF/WebP y respuestas 404.`,
);
