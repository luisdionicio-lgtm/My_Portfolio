import Image from "next/image";
import { skills, personalInfo } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { TechIcon } from "@/components/TechIcon";
export const metadata = pageMetadata(
  "Sobre mí",
  "Conoce a Luis Angel Dionicio Bartolo, estudiante de software en Tecsup, beneficiario de Beca 18 y desarrollador web y móvil en Lima, Perú.",
  "/about",
);
export default function AboutPage() {
  return (
    <>
      <section className="shell page-section about-intro">
        <div>
          <p className="eyebrow accent">MÁS ALLÁ DEL EDITOR</p>
          <h1 className="page-title">
            Curioso por
            <br />
            <em>naturaleza.</em>
            <br />
            Developer por
            <br />
            elección.
          </h1>
          <div className="about-tech-cloud" aria-hidden="true">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Python",
              "Kotlin",
            ].map((name) => (
              <span className="about-floating-tech" key={name}>
                <TechIcon name={name} />
              </span>
            ))}
          </div>
        </div>
        <div className="about-story">
          <Image
            className="about-photo"
            src="/profile-original.webp"
            alt="Luis Angel Dionicio Bartolo, foto de su perfil de LinkedIn"
            width={400}
            height={400}
            sizes="180px"
            preload
          />
          <h2>
            Soy Luis Angel
            <br />
            Dionicio Bartolo.
          </h2>
          <p>
            Estudio el quinto ciclo de Diseño y Desarrollo de Software en
            Tecsup. Soy beneficiario de Beca 18 de PRONABEC y vivo en Lima,
            Perú.
          </p>
          <p>
            Me interesa entender el recorrido completo de una aplicación: desde
            la interfaz que usa una persona hasta los datos y la lógica que la
            sostienen. Trabajo con React, TypeScript, Node.js y Express, y
            continúo explorando backend y desarrollo móvil.
          </p>
          <p>
            Utilizo herramientas de inteligencia artificial como Claude, OpenAI
            y GitHub Copilot para explorar ideas, apoyar el desarrollo y crear
            diseños e interfaces. Creo que, con imaginación, ganas de aprender y
            constancia, una idea puede convertirse en algo real: una solución
            que funcione y un diseño que conecte con las personas.
          </p>
          <a
            className="text-link"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mi perfil en LinkedIn
          </a>
        </div>
      </section>
      <section className="shell section journey">
        <p className="eyebrow accent">MI RECORRIDO</p>
        <h2>
          Formación y experiencia<span>.</span>
        </h2>
        <div className="timeline">
          <article>
            <span className="timeline-date">JUL 2026 — ACTUALIDAD</span>
            <div>
              <p className="eyebrow">JHON TOURS PERÚ</p>
              <h3>Desarrollo web Full Stack</h3>
              <p>
                Desarrollo de una plataforma de tours con frontend, backend,
                gestión de reservas, registro de pagos con Yape, comprobantes
                PDF y funciones administrativas.
              </p>
            </div>
          </article>
          <article>
            <span className="timeline-date">AGO 2024 — JUL 2027</span>
            <div>
              <p className="eyebrow">TECSUP</p>
              <h3>Diseño y Desarrollo de Software</h3>
              <p>
                Estudiante de quinto ciclo. Formación orientada al desarrollo de
                software y aplicaciones web Full Stack. Beneficiario de Beca 18
                desde mayo de 2024.
              </p>
            </div>
          </article>
          <article>
            <span className="timeline-date">MAR 2025 — ACTUALIDAD</span>
            <div>
              <p className="eyebrow">BRITÁNICO</p>
              <h3>Inglés en progreso</h3>
              <p>
                Intermedio 4, nivel aproximado B1. Formación en comprensión y
                comunicación oral y escrita.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="shell section">
        <div className="section-heading">
          <div>
            <p className="eyebrow accent">MI CAJA DE HERRAMIENTAS</p>
            <h2>
              Una base que
              <br />
              sigue creciendo<span>.</span>
            </h2>
          </div>
          <p className="section-description">
            Tecnologías utilizadas en mis proyectos y conocimientos que continúo
            fortaleciendo.
          </p>
        </div>
        <div className="skill-grid">
          {skills.map((group) => (
            <article key={group.description}>
              <p className="eyebrow accent">{group.description}</p>
              <h3>{group.title}</h3>
              <div className="tech-list">
                {group.technologies.map((name) => (
                  <TechIcon name={name} key={name} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="shell learning">
        <div>
          <p className="eyebrow accent">APRENDER HACIENDO</p>
          <h2>
            El código cuenta
            <br />
            parte de la historia.
          </h2>
          <p>
            El resto está en los problemas que resuelvo y en cada iteración.
          </p>
          <a
            className="button secondary"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar mi GitHub
          </a>
        </div>
        <Image
          src="/projects/aforo.webp"
          alt="Ilustración conceptual del proyecto académico Aforo IoT, una conexión entre sensores y aplicaciones web"
          width={1200}
          height={750}
          sizes="(max-width: 700px) 100vw, 50vw"
          loading="lazy"
        />
      </section>
    </>
  );
}
