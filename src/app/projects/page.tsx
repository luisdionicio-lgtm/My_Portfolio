import { ProjectExplorer } from '@/components/ProjectExplorer';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Proyectos de software', 'Explora los proyectos web, backend, Android e IoT de Luis Dionicio: FerreMax, Factora, Aforo IoT, CookPlan y CeluMarket.', '/projects');
export default function ProjectsPage() {
  return <section className="shell page-section"><p className="eyebrow accent">DE LA CURIOSIDAD AL CÓDIGO</p><h1 className="page-title">Ideas en<br /><em>construcción.</em></h1><p className="page-description">Cada proyecto es una forma de aprender resolviendo un problema.<br />Explora el proceso, las tecnologías y el código detrás de cada uno.</p><ProjectExplorer /><p className="project-note">Proyectos académicos y de portafolio para demostración local. Las ilustraciones conceptuales se identifican en cada detalle; FerreMax incluye una captura real del repositorio.</p></section>;
}
