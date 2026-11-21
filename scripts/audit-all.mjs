import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
const pages = [
  ["inicio", "/"],
  ["proyectos", "/projects"],
  ["detalle", "/projects/ferremax"],
  ["perfil", "/about"],
  ["contacto", "/contact"],
];
const origin = process.env.AUDIT_BASE_URL || "http://localhost:3000";
const summary = [];
for (const [name, path] of pages) {
  for (const mode of ["desktop", "mobile"]) {
    const base = `docs/evidencias/lighthouse-${name}-${mode}`;
    const args = [
      "node_modules/lighthouse/cli/index.js",
      `${origin}${path}`,
      "--output=html",
      "--output=json",
      `--output-path=${base}`,
      "--chrome-flags=--headless=new",
      "--quiet",
    ];
    if (mode === "desktop") args.push("--preset=desktop");
    const result = spawnSync(process.execPath, args, { encoding: "utf8" });
    if (result.status !== 0) throw new Error(result.stderr);
    const report = JSON.parse(readFileSync(`${base}.report.json`, "utf8"));
    const scores = Object.fromEntries(
      ["performance", "accessibility", "best-practices", "seo"].map((key) => [
        key,
        Math.round(report.categories[key].score * 100),
      ]),
    );
    summary.push({
      page: name,
      path,
      mode,
      scores,
      fetchTime: report.fetchTime,
    });
    console.log(name, mode, scores);
  }
}
writeFileSync(
  "docs/evidencias/lighthouse-summary.json",
  JSON.stringify(summary, null, 2),
);
if (
  summary.some((item) =>
    Object.values(item.scores).some((score) => score <= 90),
  )
)
  process.exitCode = 1;
