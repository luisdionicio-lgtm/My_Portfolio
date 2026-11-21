import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { TechIcon } from "./TechIcon";
export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className={`project-card ${project.color}`}>
      <Link
        href={`/projects/${project.slug}`}
        className="project-image"
        aria-label={`${project.category} ${String(index + 1).padStart(2, "0")} Explorar proyecto ${project.title}`}
      >
        <div className="image-label">
          {project.category} <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={750}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          loading="lazy"
        />
        <span className="image-explore">Explorar proyecto</span>
      </Link>
      <div className="project-body">
        <p className="eyebrow">{project.status}</p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.technologies.slice(0, 4).map((name) => (
            <TechIcon key={name} name={name} />
          ))}
        </div>
      </div>
    </article>
  );
}
