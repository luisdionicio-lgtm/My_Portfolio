import sharp from "sharp";
import { mkdir } from "node:fs/promises";
await mkdir("public/projects", { recursive: true });
await sharp("public/projects/ferremax.png")
  .resize(1200, 750, { fit: "cover", position: "top" })
  .webp({ quality: 88 })
  .toFile("public/projects/ferremax-cover.webp");
for (const [file, title, sub, accent, theme] of [
  [
    "educontrol",
    "EduControl 360",
    "PORTALES / ROLES / ACADEMIA",
    "#cbb3f7",
    "data",
  ],
  [
    "gm-campo",
    "G&M Campo",
    "VISITAS / MEDIDAS / PROPUESTAS",
    "#ffb27a",
    "mobile",
  ],
  ["lasjijas", "LASJIJAS", "PRONÓSTICOS / SALAS / RANKINGS", "#c4f566", "data"],
  [
    "mediguard",
    "MediGuard AI",
    "ANDROID / APIS / FORMACIÓN",
    "#9fcfe2",
    "mobile",
  ],
  [
    "sabor-andino",
    "Sabor Andino",
    "CARTA / PEDIDOS / PERFIL",
    "#ffb27a",
    "mobile",
  ],
  [
    "el-refugio",
    "El Refugio",
    "ACCESO / SESIONES / PERMISOS",
    "#c4f566",
    "data",
  ],
  [
    "archivos-magicos",
    "Archivos mágicos",
    "AUTORES / LIBROS / CATÁLOGO",
    "#cbb3f7",
    "data",
  ],
  [
    "factora",
    "Factora",
    "VENTAS / INVENTARIO / TRAZABILIDAD",
    "#cbb3f7",
    "data",
  ],
  ["aforo", "Aforo IoT", "HARDWARE CONECTADO A LA WEB", "#c4f566", "iot"],
  [
    "cookplan",
    "CookPlan",
    "RECETAS / PLANIFICACIÓN / ANDROID",
    "#ffb27a",
    "mobile",
  ],
  [
    "celumarket",
    "CeluMarket",
    "CATÁLOGO / PRODUCTOS / EXISTENCIAS",
    "#aabaff",
    "mobile",
  ],
]) {
  const escapedTitle = title.replace(/&/g, "&amp;");
  const labels = sub.split(" / ");
  const visual =
    theme === "iot"
      ? `<circle cx="600" cy="410" r="150" fill="none" stroke="${accent}" stroke-width="2"/><circle cx="600" cy="410" r="115" fill="none" stroke="${accent}" stroke-opacity=".35" stroke-width="30"/><rect x="512" y="347" width="176" height="126" rx="16" fill="${accent}"/><text x="600" y="418" text-anchor="middle" font-family="monospace" font-size="30" fill="#192315">UNO</text><path d="M300 410H450M750 410H900M600 210V250M600 570V620" stroke="${accent}" stroke-width="3" stroke-dasharray="9 9"/><circle cx="280" cy="410" r="33" fill="#2f3f25"/><circle cx="920" cy="410" r="33" fill="#2f3f25"/><text x="280" y="416" text-anchor="middle" fill="${accent}" font-family="monospace" font-size="17">USB</text><text x="920" y="416" text-anchor="middle" fill="${accent}" font-family="monospace" font-size="17">WEB</text>`
      : theme === "data"
        ? `<rect x="235" y="255" width="730" height="350" rx="20" fill="#242a26" stroke="#66705f"/><path d="M235 312H965" stroke="#66705f"/><circle cx="265" cy="285" r="6" fill="${accent}"/><circle cx="288" cy="285" r="6" fill="#68715e"/><circle cx="311" cy="285" r="6" fill="#68715e"/><rect x="270" y="340" width="180" height="100" rx="10" fill="#383345"/><rect x="470" y="340" width="220" height="100" rx="10" fill="#383345"/><rect x="710" y="340" width="220" height="100" rx="10" fill="#383345"/><text x="290" y="380" fill="${accent}" font-size="19" font-family="monospace">${labels[0]}</text><text x="490" y="380" fill="${accent}" font-size="19" font-family="monospace">${labels[1]}</text><text x="730" y="380" fill="${accent}" font-size="19" font-family="monospace">${labels[2]}</text><path d="M280 540L370 515L450 535L540 480L620 495L710 465L800 480L920 455" fill="none" stroke="${accent}" stroke-width="5"/><path d="M280 565H920" stroke="#68715e"/>`
        : `<rect x="430" y="235" width="340" height="395" rx="36" fill="#242b25" stroke="${accent}" stroke-width="2"/><rect x="520" y="250" width="160" height="12" rx="6" fill="#0e130e"/><rect x="457" y="310" width="286" height="100" rx="16" fill="${accent}"/><text x="600" y="371" text-anchor="middle" font-size="28" font-family="sans-serif" font-weight="bold" fill="#192315">${escapedTitle}</text><rect x="457" y="435" width="130" height="105" rx="12" fill="#3f4a37"/><rect x="610" y="435" width="130" height="105" rx="12" fill="#3f4a37"/><rect x="457" y="562" width="286" height="12" rx="6" fill="#65715b"/><rect x="457" y="587" width="180" height="8" rx="4" fill="#435239"/><circle cx="300" cy="400" r="65" fill="none" stroke="${accent}" stroke-opacity=".35"/><circle cx="900" cy="470" r="85" fill="none" stroke="${accent}" stroke-opacity=".35"/>`;
  const svg = `<svg width="1200" height="750" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#66705f" stroke-opacity=".12"/></pattern></defs><rect width="1200" height="750" fill="#1b231b"/><rect width="1200" height="750" fill="url(#grid)"/><text x="80" y="135" fill="${accent}" font-size="54" font-weight="bold" font-family="sans-serif">${escapedTitle}</text><text x="80" y="178" fill="#bbc5b2" font-size="17" letter-spacing="3" font-family="monospace">${sub}</text>${visual}<text x="80" y="704" fill="#9ca78e" font-family="monospace" font-size="14">ILUSTRACIÓN CONCEPTUAL · LUIS DIONICIO</text></svg>`;
  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(`public/projects/${file}.webp`);
}
