import { mkdir, writeFile } from "node:fs/promises";
await mkdir("public/icons", { recursive: true });
const names = [
  "react",
  "typescript",
  "javascript",
  "nextjs",
  "nodejs",
  "mysql",
  "prisma",
  "python",
  "flask",
  "sqlite",
  "docker",
  "arduino",
  "html5",
  "css3",
  "kotlin",
  "android",
  "firebase",
  "php",
  "laravel",
  "tailwindcss",
  "java",
  "spring",
  "django",
  "postgresql",
  "mongodb",
  "flutter",
  "git",
  "amazonwebservices",
  "dart",
  "nestjs",
  "redis",
  "supabase",
];
for (const name of names) {
  const response = await fetch(
    `https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/${name}/${name}-${name === "django" ? "plain" : name === "amazonwebservices" ? "original-wordmark" : "original"}.svg`,
  );
  if (!response.ok) throw new Error(`${name}: ${response.status}`);
  await writeFile(`public/icons/${name}.svg`, await response.text());
}
const license = await fetch(
  "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/LICENSE",
);
await writeFile("public/icons/LICENSE", await license.text());
