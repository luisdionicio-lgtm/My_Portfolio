import { TechAccents } from "@/components/TechAccents";
import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, MapPin, MessageSquare } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";

export const metadata = pageMetadata(
  "Contacto",
  "Contacta a Luis Angel Dionicio Bartolo por correo o LinkedIn para conversar sobre prácticas preprofesionales, desarrollo web, aplicaciones móviles y proyectos de software en Lima, Perú.",
  "/contact",
);

export default function ContactPage() {
  return (
    <section className="shell page-section contact-page with-tech-accents">
      <div className="contact-intro">
        <p className="eyebrow accent">CONTACTO</p>
        <h1 className="page-title">
          Las buenas ideas
          <br />
          empiezan con
          <br />
          <em>una conversación.</em>
        </h1>
        <p className="page-description">
          ¿Tienes un proyecto en mente o una oportunidad para aprender y
          aportar? Me gustaría conocerla. Hablemos de lo que podemos construir.
        </p>
        <ContactForm recipient={process.env.CONTACT_EMAIL} />
        <div className="contact-topics">
          <p className="eyebrow accent">PODEMOS CONVERSAR SOBRE</p>
          <ul>
            <li>Prácticas preprofesionales en desarrollo de software</li>
            <li>Aplicaciones web, backend y desarrollo móvil</li>
            <li>Proyectos colaborativos e ideas para construir</li>
          </ul>
        </div>
      </div>

      <aside
        className="contact-profile"
        aria-label="Perfil y canales de contacto"
      >
        <Image
          src="/profile-original.webp"
          width={400}
          height={400}
          sizes="(max-width: 700px) 90vw, 400px"
          alt="Luis Angel Dionicio Bartolo"
          className="contact-photo"
          preload
        />
        <p className="eyebrow accent">DETRÁS DE CADA PROYECTO</p>
        <h2>
          Luis Dionicio<span>.</span>
        </h2>
        <p className="contact-role">Desarrollador Full Stack y Mobile</p>
        <p className="contact-fact">
          <MapPin size={18} aria-hidden="true" />
          {personalInfo.location}
        </p>
        <p className="contact-fact">
          <BriefcaseBusiness size={18} aria-hidden="true" />
          Disponible para prácticas preprofesionales
        </p>
        <div className="contact-channels">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare size={22} aria-hidden="true" />
            <span>
              <strong>Conectemos</strong>
              <span>Hablemos en LinkedIn</span>
            </span>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="github-icon"
              src="/icons/github.svg"
              width={22}
              height={22}
              alt=""
            />
            <span>
              <strong>Conoce mi trabajo</strong>
              <span>Proyectos y código en GitHub</span>
            </span>
          </a>
        </div>
        <Link className="text-link" href="/projects">
          Explorar mis proyectos
        </Link>
      </aside>
      <TechAccents />
    </section>
  );
}
