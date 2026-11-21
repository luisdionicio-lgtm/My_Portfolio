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
    image: `${siteUrl}/profile.webp`,
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
      <section className="hero shell">
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
        </div>
        <aside
          className="profile-card"
          aria-label="Perfil profesional de Luis Dionicio"
        >
          <div className="profile-cover">
            <span>FULL STACK / MOBILE / IDEAS</span>
            <span aria-hidden="true">✳</span>
          </div>
          <div className="profile-card-body">
            <Image
              className="profile-photo"
              src="/profile.webp"
              alt="Foto de perfil de Luis Angel Dionicio Bartolo tomada de su LinkedIn"
              width={400}
              height={400}
              sizes="(max-width: 520px) 180px, 220px"
              preload
            />
            <p className="profile-handle">@luisdionicio-lgtm</p>
            <h2>Luis Dionicio</h2>
            <p className="profile-role">Desarrollo web & móvil</p>
            <div className="profile-facts">
              <span>Tecsup · Software</span>
              <span>Lima, Perú</span>
              <span>Beca 18 · PRONABEC</span>
            </div>
            <div className="profile-stack">
              {["React", "TypeScript", "Node.js", "Kotlin"].map((name) => (
                <TechIcon name={name} key={name} />
              ))}
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
              Mi perfil en LinkedIn
            </a>
          </div>
        </aside>
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
      <section className="section shell">
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
      </section>
      <section className="about-teaser shell">
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
      </section>
      <section className="connect shell">
        <span className="eyebrow">SIGAMOS CONECTADOS</span>
        <h2>
          La próxima idea
          <br />
          puede empezar con un <em>hola.</em>
        </h2>
        <a
          className="button primary"
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Conectar en LinkedIn
        </a>
        <span className="connect-art" aria-hidden="true">
          ✳
        </span>
      </section>
    </>
  );
}
