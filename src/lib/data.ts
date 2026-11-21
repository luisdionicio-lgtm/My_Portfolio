import type { Project } from '@/types';

// Fuente: perfil público de LinkedIn revisado el 21 de noviembre de 2026.
export const personalInfo = {
  name: 'Luis Angel Dionicio Bartolo',
  shortName: 'Luis Dionicio',
  title: 'Desarrollador Full Stack',
  description: 'Estudiante de Diseño y Desarrollo de Software en Tecsup. Desarrollo aplicaciones web y móviles con React, TypeScript, Node.js y Kotlin en Lima, Perú.',
  github: 'https://github.com/luisdionicio-lgtm',
  linkedin: 'https://www.linkedin.com/in/luis-angel-dionicio-bartolo-988b26445/',
  location: 'Lima, Perú',
};

export const projects: Project[] = [
  {
    slug: 'ferremax', title: 'FerreMax', category: 'Full Stack',
    description: 'Del catálogo al inventario: una plataforma de comercio electrónico para conectar la tienda con su operación diaria.',
    image: '/projects/ferremax.webp', imageAlt: 'Captura real de la tienda FerreMax con catálogo de herramientas y navegación por categorías',
    technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'MySQL', 'Prisma'],
    githubUrl: `${personalInfo.github}/E-commerce-Ferreteria`, featured: true,
    status: 'Demo local funcional', color: 'orange',
    highlights: ['Catálogo con búsqueda, filtros y carrito persistente.', 'Registro de clientes y pedidos sujetos a confirmación.', 'Panel de compras, ventas e inventario por lotes con permisos por rol.', 'Repositorio actualizado a Next.js; almacenamiento JSON de demostración y soporte MySQL documentado.'],
  },
  {
    slug: 'factora', title: 'Factora', category: 'Backend',
    description: 'Ventas, existencias y trazabilidad en un solo sistema, con acceso por roles y comprobantes en entorno beta.',
    image: '/projects/factora.webp', imageAlt: 'Ilustración conceptual de Factora: ventas, inventario y trazabilidad; no es una captura de la aplicación',
    technologies: ['Python', 'Flask', 'JavaScript', 'SQLite', 'Docker'],
    githubUrl: `${personalInfo.github}/_Factora_Sistema_de-ventas_SUNAT`, featured: true,
    status: 'Portafolio · integración beta', color: 'violet',
    highlights: ['Gestión de ventas, clientes, existencias y kardex.', 'Auditoría y control de acceso por roles.', 'Pruebas con pytest y Playwright y ejecución con Docker.', 'Integración de boletas en entorno beta del proveedor: documentos sin validez tributaria.'],
  },
  {
    slug: 'aforo-iot', title: 'Aforo IoT', category: 'IoT',
    description: 'Una conexión entre hardware y web para visualizar la ocupación y controlar el acceso en tiempo real.',
    image: '/projects/aforo.webp', imageAlt: 'Ilustración conceptual de Aforo IoT: sensor Arduino conectado a un panel web; no es una captura de la aplicación',
    technologies: ['JavaScript', 'Node.js', 'Arduino', 'HTML', 'CSS'],
    githubUrl: `${personalInfo.github}/FORO-IOT`, featured: true,
    status: 'Prototipo académico local', color: 'lime',
    highlights: ['Arduino UNO conectado por USB mediante Web Serial.', 'Panel de ocupación, estado de acceso, historial y flujo.', 'Integración de sensor ultrasónico, LEDs, buzzer y servo.', 'Prototipo de demostración; requiere hardware compatible.'],
  },
  {
    slug: 'cookplan', title: 'CookPlan', category: 'Mobile',
    description: 'Descubrir recetas, guardar favoritos y organizar planes de comida desde una aplicación Android colaborativa.',
    image: '/projects/cookplan.webp', imageAlt: 'Ilustración conceptual de CookPlan y su organización de recetas en Android; no es una captura de la aplicación',
    technologies: ['Kotlin', 'Android', 'Firebase', 'Room'],
    githubUrl: `${personalInfo.github}/CookPlan`, featured: false,
    status: 'Proyecto académico colaborativo', color: 'orange',
    highlights: ['Desarrollo colaborativo con un compañero.', 'Descubrimiento de recetas y organización de comidas.', 'Persistencia local con Room e integración con Firebase.'],
  },
  {
    slug: 'celumarket', title: 'CeluMarket', category: 'Full Stack',
    description: 'Una plataforma académica para administrar productos, precios y existencias en una tienda de celulares.',
    image: '/projects/celumarket.webp', imageAlt: 'Ilustración conceptual de CeluMarket y su catálogo de celulares; no es una captura de la aplicación',
    technologies: ['PHP', 'Laravel', 'Tailwind CSS', 'MySQL'],
    githubUrl: `${personalInfo.github}/CELUMARKET`, featured: false,
    status: 'Demostración local', color: 'violet',
    highlights: ['Administración de productos, precios y existencias.', 'Operaciones CRUD y organización de la lógica de negocio.', 'Proyecto de formación sin despliegue en producción.'],
  },
];

export const skills = [
  { title: 'Interfaces que se sienten bien', description: 'Frontend', technologies: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Lógica que conecta todo', description: 'Backend y datos', technologies: ['Node.js', 'Java', 'Spring Boot', 'Python', 'Django', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'Más allá del navegador', description: 'Mobile y herramientas', technologies: ['Kotlin', 'Android', 'Flutter', 'Git', 'Docker', 'AWS', 'Arduino'] },
];
