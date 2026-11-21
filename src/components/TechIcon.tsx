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
};
export function TechIcon({
  name,
  label = true,
}: {
  name: string;
  label?: boolean;
}) {
  return (
    <span className="tech">
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
