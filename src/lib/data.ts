import type { Project } from "@/types";

// Fuente: perfil público de LinkedIn revisado el 21 de noviembre de 2026.
export const personalInfo = {
  name: "Luis Angel Dionicio Bartolo",
  shortName: "Luis Dionicio",
  title: "Desarrollador Full Stack",
  description:
    "Estudiante de Diseño y Desarrollo de Software en Tecsup. Desarrollo aplicaciones web y móviles con React, TypeScript, Node.js y Kotlin en Lima, Perú.",
  github: "https://github.com/luisdionicio-lgtm",
  linkedin:
    "https://www.linkedin.com/in/luis-angel-dionicio-bartolo-988b26445/",
  location: "Lima, Perú",
};

export const projects: Project[] = [
  {
    slug: "ferremax",
    title: "FerreMax",
    category: "Full Stack",
    description:
      "Del catálogo al inventario: una plataforma de comercio electrónico para conectar la tienda con su operación diaria.",
    image: "/projects/ferremax-cover.webp",
    imageAlt:
      "Captura real de la tienda FerreMax con catálogo de herramientas y navegación por categorías",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "MySQL",
      "Prisma",
    ],
    githubUrl: `${personalInfo.github}/E-commerce-Ferreteria`,
    featured: true,
    status: "Demo local funcional",
    color: "orange",
    highlights: [
      "Catálogo con búsqueda, filtros y carrito persistente.",
      "Registro de clientes y pedidos sujetos a confirmación.",
      "Panel de compras, ventas e inventario por lotes con permisos por rol.",
      "Repositorio actualizado a Next.js; almacenamiento JSON de demostración y soporte MySQL documentado.",
    ],
  },
  {
    slug: "factora",
    title: "Factora",
    category: "Backend",
    description:
      "Ventas, existencias y trazabilidad en un solo sistema, con acceso por roles y comprobantes en entorno beta.",
    image: "/projects/factora.webp",
    imageAlt:
      "Ilustración conceptual de Factora: ventas, inventario y trazabilidad; no es una captura de la aplicación",
    technologies: ["Python", "Flask", "JavaScript", "SQLite", "Docker"],
    githubUrl: `${personalInfo.github}/_Factora_Sistema_de-ventas_SUNAT`,
    featured: true,
    status: "Portafolio · integración beta",
    color: "violet",
    highlights: [
      "Gestión de ventas, clientes, existencias y kardex.",
      "Auditoría y control de acceso por roles.",
      "Pruebas con pytest y Playwright y ejecución con Docker.",
      "Integración de boletas en entorno beta del proveedor: documentos sin validez tributaria.",
    ],
  },
  {
    slug: "aforo-iot",
    title: "Aforo IoT",
    category: "IoT",
    description:
      "Una conexión entre hardware y web para visualizar la ocupación y controlar el acceso en tiempo real.",
    image: "/projects/aforo.webp",
    imageAlt:
      "Ilustración conceptual de Aforo IoT: sensor Arduino conectado a un panel web; no es una captura de la aplicación",
    technologies: ["JavaScript", "Node.js", "Arduino", "HTML", "CSS"],
    githubUrl: `${personalInfo.github}/FORO-IOT`,
    featured: true,
    status: "Prototipo académico local",
    color: "lime",
    highlights: [
      "Arduino UNO conectado por USB mediante Web Serial.",
      "Panel de ocupación, estado de acceso, historial y flujo.",
      "Integración de sensor ultrasónico, LEDs, buzzer y servo.",
      "Prototipo de demostración; requiere hardware compatible.",
    ],
  },
  {
    slug: "cookplan",
    title: "CookPlan",
    category: "Mobile",
    description:
      "Descubrir recetas, guardar favoritos y organizar planes de comida desde una aplicación Android colaborativa.",
    image: "/projects/cookplan.webp",
    imageAlt:
      "Ilustración conceptual de CookPlan y su organización de recetas en Android; no es una captura de la aplicación",
    technologies: ["Kotlin", "Android", "Firebase", "Room"],
    githubUrl: `${personalInfo.github}/CookPlan`,
    featured: false,
    status: "Proyecto académico colaborativo",
    color: "orange",
    highlights: [
      "Desarrollo colaborativo con un compañero.",
      "Descubrimiento de recetas y organización de comidas.",
      "Persistencia local con Room e integración con Firebase.",
    ],
  },
  {
    slug: "celumarket",
    title: "CeluMarket",
    category: "Full Stack",
    description:
      "Una plataforma académica para administrar productos, precios y existencias en una tienda de celulares.",
    image: "/projects/celumarket.webp",
    imageAlt:
      "Ilustración conceptual de CeluMarket y su catálogo de celulares; no es una captura de la aplicación",
    technologies: ["PHP", "Laravel", "Tailwind CSS", "MySQL"],
    githubUrl: `${personalInfo.github}/CELUMARKET`,
    featured: false,
    status: "Demostración local",
    color: "violet",
    highlights: [
      "Administración de productos, precios y existencias.",
      "Operaciones CRUD y organización de la lógica de negocio.",
      "Proyecto de formación sin despliegue en producción.",
    ],
  },
  {
    slug: "educontrol-360",
    title: "EduControl 360",
    category: "Full Stack",
    description:
      "Una base para conectar instituciones, estudiantes y procesos académicos mediante portales web y permisos por rol.",
    image: "/projects/screenshots/educontrol.webp",
    imageAlt:
      "Captura real del portal académico EduControl 360, demostración Campus Atelier",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/luisdionicio-lgtm/EduControl360",
    featured: true,
    status: "En desarrollo · núcleo académico inicial",
    color: "violet",
    highlights: [
      "Portales web con Next.js App Router y una API en NestJS.",
      "Permisos, validación de datos y persistencia con Prisma y PostgreSQL.",
      "Arquitectura multiinstitucional con PostgreSQL y Redis.",
      "Google OIDC implementado, pendiente de validación con credenciales reales. No se presenta como SaaS terminado.",
    ],
  },
  {
    slug: "gm-campo",
    title: "G&M Campo",
    category: "Mobile",
    description:
      "Una aplicación Flutter para documentar visitas técnicas, tomar medidas y preparar propuestas PDF conectadas con un panel web.",
    image: "/projects/gm-campo.webp",
    imageAlt:
      "Ilustración conceptual de G&M Campo y sus visitas técnicas; no es una captura de la aplicación",
    technologies: ["Flutter", "Dart", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/luisdionicio-lgtm/App_Mobile_GyMelacampos",
    featured: true,
    status: "Aplicación con backend local",
    color: "orange",
    highlights: [
      "Registro de visitas, piezas, medidas y materiales con acceso por roles.",
      "Borradores locales con guardado automático y búsqueda por estado.",
      "Generación de propuestas PDF con cotización y bosquejos acotados.",
      "Conexión mediante API al backend y PostgreSQL compartidos con la web. Las medidas se ingresan manualmente.",
    ],
  },
  {
    slug: "lasjijas",
    title: "LASJIJAS",
    category: "Full Stack",
    description:
      "Pronósticos de fútbol, rankings y salas privadas en una plataforma educativa con reglas de puntuación validadas en el servidor.",
    image: "/projects/screenshots/lasjijas.webp",
    imageAlt:
      "Captura real del dashboard local de LASJIJAS con pronósticos y estadísticas",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/luisdionicio-lgtm/FUTBOL_LAS_JIJAS",
    featured: true,
    status: "Plataforma educativa local",
    color: "lime",
    highlights: [
      "Pronósticos persistentes, historial, rankings y salas privadas.",
      "Motor de puntuación y recálculo determinista con pruebas de reglas y bordes.",
      "PostgreSQL, Redis y balanceo local con Nginx y réplicas de backend.",
      "Sin apuestas ni premios monetarios. Los encuentros de ejemplo están identificados como simulados; la información deportiva consultada tiene fecha de corte.",
    ],
  },
  {
    slug: "mediguard",
    title: "MediGuard AI",
    category: "Mobile",
    description:
      "Proyecto académico colaborativo de primeros auxilios con aplicación Android, plataforma web y servicios backend.",
    image: "/projects/mediguard.webp",
    imageAlt:
      "Ilustración conceptual del proyecto académico MediGuard AI; no es una captura de la aplicación",
    technologies: [
      "Kotlin",
      "Android",
      "React",
      "Java",
      "Spring Boot",
      "Django",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/luisdionicio-lgtm/mediguard_web",
    featured: false,
    status: "Proyecto académico colaborativo",
    color: "violet",
    highlights: [
      "Proyecto desarrollado en equipo durante cuatro sprints, entre abril y junio de 2026.",
      "Mi participación: desarrollo Android, Jetpack Compose, MVVM, integración de API móvil y diseño de interfaz.",
      "El sistema documenta guías, contactos, eventos SOS, cursos y certificados.",
      "El repositorio integra frontend React y servicios Spring Boot y Django. Es un proyecto de formación; no se presenta como servicio clínico validado.",
    ],
  },
  {
    slug: "sabor-andino",
    title: "Sabor Andino",
    category: "Mobile",
    description:
      "Una experiencia Android para explorar platos, organizar un pedido y gestionar el perfil del comensal.",
    image: "/projects/sabor-andino.webp",
    imageAlt:
      "Ilustración conceptual de Sabor Andino y sus pedidos de restaurante; no es una captura de la aplicación",
    technologies: ["Kotlin", "Android"],
    githubUrl: "https://github.com/luisdionicio-lgtm/Restaurante_app",
    featured: false,
    status: "Proyecto académico Android",
    color: "orange",
    highlights: [
      "Inicio de sesión, menú, detalle de platos, carrito y pedido.",
      "Mi participación se centró en el perfil y la consulta del pedido.",
      "Interfaces desarrolladas con Kotlin y Jetpack Compose.",
      "El flujo de Yape es informativo; no se presenta como procesamiento real de pagos.",
    ],
  },
  {
    slug: "el-refugio",
    title: "El Refugio",
    category: "Full Stack",
    description:
      "Un laboratorio de autenticación con identidad visual temática, acceso por proveedores OAuth y rutas protegidas en Next.js.",
    image: "/projects/el-refugio.webp",
    imageAlt:
      "Ilustración conceptual de autenticación y rutas protegidas de El Refugio; no es una captura de la aplicación",
    technologies: ["Next.js", "TypeScript", "SQLite", "PostgreSQL"],
    githubUrl: "https://github.com/luisdionicio-lgtm/LAB13_NEXT_Auth",
    featured: false,
    status: "Laboratorio de autenticación",
    color: "lime",
    highlights: [
      "Acceso con Google, GitHub o correo y contraseña mediante NextAuth.js.",
      "Registro con validación de servidor y contraseñas protegidas con bcrypt.",
      "Sesiones JWT, dashboard y perfil protegidos; bloqueo temporal tras intentos fallidos.",
      "Implementación académica: no incluye verificación de correo ni recuperación de contraseña.",
    ],
  },
  {
    slug: "archivos-magicos",
    title: "Archivos mágicos",
    category: "Full Stack",
    description:
      "Un sistema de biblioteca para gestionar autores y libros, explorar un catálogo y consultar estadísticas con PostgreSQL en Supabase.",
    image: "/projects/screenshots/biblioteca.webp",
    imageAlt: "Captura real del catálogo de libros de Archivos mágicos",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase"],
    githubUrl: "https://github.com/luisdionicio-lgtm/LAB_12_SUPABASE-NEXT",
    featured: false,
    status: "Laboratorio de biblioteca web",
    color: "violet",
    highlights: [
      "Crear, consultar, actualizar y eliminar autores y libros.",
      "Catálogo con búsqueda, filtros por género, orden y paginación.",
      "Estadísticas generales y por autor con consultas de base de datos.",
      "Demostración académica sin autenticación: no está destinada a datos privados.",
    ],
  },
];

export const skills = [
  {
    title: "Interfaces que se sienten bien",
    description: "Frontend",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Lógica que conecta todo",
    description: "Backend y datos",
    technologies: [
      "Node.js",
      "Java",
      "Spring Boot",
      "Python",
      "Django",
      "PHP",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Más allá del navegador",
    description: "Mobile y herramientas",
    technologies: [
      "Kotlin",
      "Android",
      "Flutter",
      "Git",
      "Docker",
      "AWS",
      "Arduino",
    ],
  },
];
