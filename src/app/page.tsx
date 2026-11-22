import { TechAccents } from "@/components/TechAccents";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { TechIcon } from "@/components/TechIcon";
import { personalInfo, projects } from "@/lib/data";
import { pageMetadata, siteUrl } from "@/lib/seo";
export const metadata = pageMetadata(
  "Luis Dionicio — Desarrollador Full Stack en Lima",
  personalInfo.description,
  "/",
);
export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: siteUrl,
    sameAs: [personalInfo.github, personalInfo.linkedin],
    description: personalInfo.description,
    image: `${siteUrl}/profile-original.webp`,
    affiliation: { "@type": "EducationalOrganization", name: "Tecsup" },
    knowsAbout: ["React", "TypeScript", "Node.js", "Kotlin", "Desarrollo web"],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero shell with-tech-accents">
        <div className="hero-copy">
          <div className="availability">
            <span /> Disponible para prácticas preprofesionales
          </div>
          <p className="eyebrow hero-intro">
            DESARROLLADOR FULL STACK & MOBILE
          </p>
          <h1>
            Luis Angel
            <br />
            <em>Dionicio Bartolo.</em>
          </h1>
          <p className="hero-description">
            Estudiante de software en Tecsup. Construyo aplicaciones web y
            móviles, conectando interfaces cuidadas con la lógica que las hace
            funcionar.
          </p>
          <div className="actions">
            <Link className="button primary" href="/projects">
              Explorar mis proyectos
            </Link>
            <Link className="button secondary" href="/about">
              Conoce mi historia
            </Link>
          </div>
          <div className="hero-location">
            <span aria-hidden="true">⌖</span> Lima, Perú{" "}
            <span className="divider">/</span> Full Stack & Mobile
          </div>
          <div className="hero-summary">
            <div>
              <strong>{projects.length.toString().padStart(2, "0")}</strong>
              <span>Proyectos de software</span>
            </div>
            <div>
              <strong>Web & Mobile</strong>
              <span>Mi enfoque de desarrollo</span>
            </div>
          </div>
        </div>
        <aside
          className="profile-card"
          aria-label="Perfil profesional de Luis Dionicio"
        >
          <div className="portrait-frame">
            <Image
              className="profile-photo"
              src="/profile-original.webp"
              alt="Retrato original de Luis Angel Dionicio Bartolo, de su perfil de LinkedIn"
              width={900}
              height={900}
              sizes="(max-width: 800px) 90vw, 460px"
              preload
            />
            <div className="portrait-topline">
              <span>LIMA, PERÚ</span>
              <span>DESARROLLO DE SOFTWARE</span>
            </div>
            <div className="portrait-caption">
              <span className="eyebrow">DEL CONCEPTO AL CÓDIGO</span>
              <h2>
                Luis Dionicio<span>.</span>
              </h2>
              <p>Tecsup · Full Stack & Mobile</p>
              <div className="profile-stack">
                {["React", "TypeScript", "Node.js", "Kotlin"].map((name) => (
                  <TechIcon name={name} key={name} />
                ))}
              </div>
            </div>
            <span className="portrait-corner" aria-hidden="true" />
          </div>
          <a
            className="profile-social"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="linkedin-icon" aria-hidden="true">
              in
            </span>{" "}
            Mi perfil profesional en LinkedIn
          </a>
        </aside>
        <TechAccents />
      </section>
      <div className="stack-strip">
        <div className="shell">
          <span className="eyebrow">MI STACK PRINCIPAL</span>
          <div>
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Java",
              "Kotlin",
              "PostgreSQL",
            ].map((name) => (
              <TechIcon name={name} key={name} />
            ))}
          </div>
        </div>
      </div>
      <section className="section shell with-tech-accents">
        <div className="section-heading">
          <div>
            <p className="eyebrow accent">
              CÓDIGO QUE SE CONVIERTE EN EXPERIENCIAS
            </p>
            <h2>
              Una selección de
              <br />
              lo que construyo<span>.</span>
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            Ver todos los proyectos{" "}
            <span className="count">{projects.length}</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <ProjectCard project={project} index={index} key={project.slug} />
            ))}
        </div>
        <TechAccents />
      </section>
      <section className="about-teaser shell with-tech-accents">
        <div>
          <p className="eyebrow accent">LA PERSONA DETRÁS DEL CÓDIGO</p>
          <h2>
            Aprender. Construir.
            <br />
            <em>Volver a intentarlo.</em>
          </h2>
        </div>
        <div>
          <p>
            Soy estudiante de Diseño y Desarrollo de Software en Tecsup y
            beneficiario de Beca 18. Mi experiencia nace de proyectos
            académicos, de portafolio y del desarrollo de una plataforma para
            Jhon Tours Perú.
          </p>
          <Link className="text-link" href="/about">
            Más sobre mi recorrido
          </Link>
        </div>
        <TechAccents />
      </section>
      <section className="connect shell with-tech-accents">
        <span className="eyebrow">SIGAMOS CONECTADOS</span>
        <h2>
          La próxima idea
          <br />
          puede empezar con un <em>hola.</em>
        </h2>
        <Link className="button primary" href="/contact">
          Hablemos de tu idea
        </Link>
        <span className="connect-art" aria-hidden="true">
          ✳
        </span>
        <TechAccents />
      </section>
    </>
  );
}
