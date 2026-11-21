import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, personalInfo } from "@/lib/data";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { TechIcon } from "@/components/TechIcon";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project)
    return { title: "Proyecto no encontrado", robots: { index: false } };
  const base = pageMetadata(
    `${project.title} — ${project.category}`,
    project.description,
    `/projects/${slug}`,
  );
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      images: [
        { url: project.image, width: 1200, height: 750, alt: project.imageAlt },
      ],
    },
    twitter: { ...base.twitter, images: [project.image] },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  const related = projects.filter((item) => item.slug !== slug).slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    url: `${siteUrl}/projects/${slug}`,
    image: `${siteUrl}${project.image}`,
    author: { "@type": "Person", name: personalInfo.name },
    codeRepository: project.githubUrl,
  };
  return (
    <article className="shell page-section project-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <Link href="/">Inicio</Link>
        <span>/</span>
        <Link href="/projects">Proyectos</Link>
        <span>/</span>
        <span>{project.title}</span>
      </nav>
      <div className="detail-heading">
        <div>
          <p className="eyebrow accent">
            {project.category} · {project.status}
          </p>
          <h1 className="page-title">
            {project.title}
            <span>.</span>
          </h1>
          <p className="page-description">{project.description}</p>
        </div>
        <a
          className="button primary"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver repositorio
        </a>
      </div>
      <figure className={`detail-figure ${project.color}`}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={750}
          sizes="(max-width: 1200px) 100vw, 1200px"
          preload
        />
        <figcaption>
          {project.slug === "ferremax"
            ? "Captura real de la tienda · Fuente: repositorio de FerreMax."
            : "Ilustración conceptual del proyecto. No representa una captura de la aplicación."}
        </figcaption>
      </figure>
      <div className="detail-columns">
        <section>
          <p className="eyebrow accent">EL PROYECTO</p>
          <h2>Qué hay detrás</h2>
          <ul className="highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="detail-status">
            Estado: {project.status}. Sin despliegue en producción.
          </p>
        </section>
        <aside className="stack-panel">
          <h2>Tecnologías</h2>
          <div className="tech-list">
            {project.technologies.map((name) => (
              <TechIcon name={name} key={name} />
            ))}
          </div>
          <p>Código y documentación disponibles en GitHub.</p>
        </aside>
      </div>
      <section className="related">
        <h2>Sigue explorando</h2>
        <div>
          {related.map((item) => (
            <Link key={item.slug} href={`/projects/${item.slug}`}>
              <span className="eyebrow">{item.category}</span>
              <strong>{item.title}</strong>
              <span>Ver proyecto</span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
