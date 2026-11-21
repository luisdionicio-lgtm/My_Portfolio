import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const routes = [
  "/",
  "/projects",
  "/about",
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
  const response = await fetch(`${origin}${path}`);
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
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
for (const path of routes)
  assert.ok(
    sitemap.includes(`<loc>${origin}${path === "/" ? "" : path}</loc>`),
    `Sitemap ${path}`,
  );
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
const robotsResponse = await fetch(`${origin}/robots.txt`);
assert.equal(robotsResponse.status, 200);
const robots = await robotsResponse.text();
assert.ok(robots.includes("Allow: /"));
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert.equal((await fetch(`${origin}/projects/no-existe`)).status, 404);
assert.equal((await fetch(`${origin}/contact`)).status, 404);
const og = await fetch(`${origin}/opengraph-image`);
assert.equal(og.status, 200);
assert.ok(og.headers.get("content-type").includes("image/png"));
const optimized = await fetch(
  `${origin}/_next/image?url=%2Fprofile-original.webp&w=256&q=75`,
  { headers: { Accept: "image/avif,image/webp" } },
);
assert.equal(optimized.status, 200);
assert.match(optimized.headers.get("content-type"), /^image\/(avif|webp)$/);
await mkdir("docs/evidencias", { recursive: true });
await writeFile(
  "docs/evidencias/seo-check.json",
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      origin,
      results,
      sitemapUrls: routes.length,
      robots: "OK",
      missingProject: 404,
      excludedContact: 404,
      openGraphImage: "OK",
      optimizedProfile: optimized.headers.get("content-type"),
    },
    null,
    2,
  ),
);
await writeFile("docs/evidencias/sitemap.xml", sitemap);
await writeFile("docs/evidencias/robots.txt", robots);
console.log(
  `SEO verificado: ${routes.length} rutas, metadatos, sitemap, robots, imagen OG, AVIF/WebP y respuestas 404.`,
);
