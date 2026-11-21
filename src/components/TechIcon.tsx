import type { CSSProperties } from "react";
import Image from "next/image";
// Iconos oficiales de Devicon, servidos localmente; las etiquetas dan el nombre accesible.
const icons: Record<string, string> = {
  React: "react",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Next.js": "nextjs",
  "Node.js": "nodejs",
  MySQL: "mysql",
  Prisma: "prisma",
  Python: "python",
  Flask: "flask",
  SQLite: "sqlite",
  Docker: "docker",
  Arduino: "arduino",
  HTML: "html5",
  CSS: "css3",
  Kotlin: "kotlin",
  Android: "android",
  Firebase: "firebase",
  Room: "android",
  PHP: "php",
  Laravel: "laravel",
  "Tailwind CSS": "tailwindcss",
  Java: "java",
  "Spring Boot": "spring",
  Django: "django",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Flutter: "flutter",
  Git: "git",
  AWS: "amazonwebservices",
  Dart: "dart",
  NestJS: "nestjs",
  Redis: "redis",
  Supabase: "supabase",
};
const brandColors: Record<string, string> = {
  React: "#61dafb",
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  "Next.js": "#8f95a3",
  "Node.js": "#6dbf50",
  MySQL: "#4799b8",
  Prisma: "#809dd2",
  Python: "#ffd343",
  Flask: "#9bb8d8",
  SQLite: "#55b8e6",
  Docker: "#2496ed",
  Arduino: "#00b5b9",
  HTML: "#f16529",
  CSS: "#409bde",
  Kotlin: "#bf77f6",
  Android: "#3ddc84",
  Firebase: "#ffca28",
  Room: "#3ddc84",
  PHP: "#a3a5e9",
  Laravel: "#ff5b54",
  "Tailwind CSS": "#38bdf8",
  Java: "#ef9638",
  "Spring Boot": "#6db33f",
  Django: "#5eb58e",
  PostgreSQL: "#75acd4",
  MongoDB: "#64b84c",
  Flutter: "#54c5f8",
  Git: "#f66c50",
  AWS: "#ff9900",
  Dart: "#42c0db",
  NestJS: "#f34a72",
  Redis: "#ed6359",
  Supabase: "#3ecf8e",
};
export function TechIcon({
  name,
  label = true,
}: {
  name: string;
  label?: boolean;
}) {
  return (
    <span
      className="tech"
      style={
        { "--tech-color": brandColors[name] || "#d7b578" } as CSSProperties
      }
    >
      <Image
        className={`tech-icon ${["Next.js", "Flask", "Prisma", "Django"].includes(name) ? "icon-neutral" : ""}`}
        src={`/icons/${icons[name] || "javascript"}.svg`}
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
      />
      {label && <span>{name}</span>}
    </span>
  );
}
