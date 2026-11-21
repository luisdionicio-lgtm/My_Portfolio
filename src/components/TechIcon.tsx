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
      <span
        className="tech-icon"
        aria-hidden="true"
        style={{
          maskImage: `url(/icons/${icons[name] || "javascript"}.svg)`,
          WebkitMaskImage: `url(/icons/${icons[name] || "javascript"}.svg)`,
        }}
      />
      {label && <span>{name}</span>}
    </span>
  );
}
