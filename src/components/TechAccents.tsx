import { TechIcon } from "./TechIcon";

// Decoración limitada al margen inferior de cada sección, fuera del contenido.
export function TechAccents() {
  return (
    <div className="section-tech-accents" aria-hidden="true">
      {["React", "JavaScript", "Python", "Kotlin"].map((name) => (
        <span key={name}>
          <TechIcon name={name} label={false} />
        </span>
      ))}
    </div>
  );
}
