# Luis Dionicio — Portafolio personal

Portafolio de Luis Angel Dionicio Bartolo, estudiante de Diseño y Desarrollo de Software en Tecsup, con información y fotografía de su perfil de LinkedIn. Desarrollo del laboratorio 14 de Optimización y SEO, partes 1 a 6, más contacto, despliegue en Vercel y dominio DuckDNS de la TAREA. [Estado de la TAREA y despliegue](docs/TAREA.md).

[Ver el portafolio con DuckDNS](https://luis-dionicio.duckdns.org) · [Contacto](https://luis-dionicio.duckdns.org/contact) · [Dirección de Vercel](https://luis-dionicio-portfolio.vercel.app).

## Ejecutar

Requisitos: Node.js 26.x y npm. Validado con Node.js 26.12.1 y Next.js 16.4.6.

```bash
npm ci
npm run dev
```

Abrir [localhost:3000](http://localhost:3000). Para reproducir las auditorías, usar producción:

```bash
npm run lint
npm run build
npm run typecheck
npm run check:origin
npm start
# En otra terminal, con el servidor en ejecución:
npm run check:seo
npm run audit:all
```

Las auditorías ejecutan Chrome en modo headless y requieren Google Chrome instalado. Los resultados dependen del equipo y de la carga de ejecución.

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Perfil con foto, presentación y proyectos destacados |
| `/projects` | Doce proyectos reales con filtros por categoría |
| `/projects/ferremax` | Detalle del comercio electrónico FerreMax |
| `/projects/factora` | Detalle de ventas e inventario Factora |
| `/projects/aforo-iot` | Detalle del prototipo Aforo IoT |
| `/projects/cookplan` | Detalle de la aplicación Android CookPlan |
| `/projects/celumarket` | Detalle de la plataforma CeluMarket |
| `/projects/educontrol-360` | Portales educativos EduControl 360 |
| `/projects/gm-campo` | Visitas técnicas con G&M Campo |
| `/projects/lasjijas` | Plataforma educativa de pronósticos LASJIJAS |
| `/projects/mediguard` | Proyecto colaborativo MediGuard AI |
| `/projects/sabor-andino` | Aplicación Android Sabor Andino |
| `/projects/el-refugio` | Autenticación con NextAuth.js |
| `/projects/archivos-magicos` | Biblioteca con PostgreSQL y Supabase |
| `/about` | Perfil, experiencia, formación e iconos de tecnologías |
| `/contact` | Formulario por correo, contacto por LinkedIn, perfil y acceso a GitHub |
| `/sitemap.xml` | Sitemap generado desde los datos de proyectos |
| `/robots.txt` | Directivas de rastreo y referencia al sitemap |

`/projects/ferremax` reemplaza al ejemplo ficticio `/projects/ecommerce-platform` de la guía. No se presenta trabajo de ejemplo como experiencia propia.

## Implementación

- Next.js App Router, React, TypeScript, ESLint, Tailwind CSS y Turbopack.
- Server Components por defecto; componentes cliente para navegación activa, filtros y selector de tema.
- Tema claro, oscuro o automático según `prefers-color-scheme`, con preferencia guardada y aplicación antes de la hidratación.
- Metadata API: títulos y descripciones propios, canonical, Open Graph y Twitter Cards. `generateMetadata` obtiene los metadatos de cada proyecto por slug.
- JSON-LD de persona y código de proyectos; generación de imagen social mediante `next/og`.
- `next/image`, dimensiones reservadas, `sizes`, lazy loading de tarjetas y precarga del retrato principal. Formatos AVIF/WebP y dominios externos limitados en `next.config.ts`.
- Recursos visuales e iconos locales; no se depende de URLs temporales de LinkedIn para mostrar la foto.
- Semántica, enlace de salto, controles por teclado, foco visible y respeto de movimiento reducido.

El origen SEO se configura con `NEXT_PUBLIC_SITE_URL` en `.env.local`, siguiendo `.env.example`. En desarrollo se utiliza `http://localhost:3000`. En Vercel, si no se define la variable, se utiliza `VERCEL_PROJECT_PRODUCTION_URL` y después `VERCEL_URL`. Los metadatos, el sitemap de dieciséis URLs y robots se generan al compilar. Las previews de Vercel solicitan no indexación mediante metadatos y robots. [Configuración y cambio de dominio](docs/TAREA.md).

## Evidencias y laboratorio

- [Word completo con laboratorio, TAREA, DuckDNS y conclusiones resumidas](docs/entrega/GLAB-S14-LUIS-DIONICIO-COMPLETO.docx).

- [Word completado con capturas completas y evidencias de las partes 1 a 6](docs/entrega/GLAB-S14-LUIS-DIONICIO-EVIDENCIAS.docx).
- [Índice de evidencias y páginas del Word](docs/entrega/README.md).
- [Estado de la TAREA y preparación del dominio](docs/TAREA.md).
- [Dirección visual y referencias](docs/DISENO.md).
- [Desarrollo, verificación y cinco conclusiones](docs/LABORATORIO_14.md).
- [Fuentes y alcance de los doce proyectos](docs/PROYECTOS.md).
- [Resultados de Lighthouse](docs/evidencias/lighthouse-summary.json).
- [Comprobación automática de SEO](docs/evidencias/seo-check.json).
- [Capturas completas actuales de todas las páginas y archivos SEO](docs/evidencias/completas/).

## Fuentes y recursos

Información profesional y fotografía obtenidas del [perfil de LinkedIn de Luis Angel Dionicio Bartolo](https://www.linkedin.com/in/luis-angel-dionicio-bartolo-988b26445/), revisado el 21 de noviembre de 2026. Los proyectos se identifican como académicos o de demostración local y conservan sus límites reales.

La imagen de FerreMax es una [captura real de su repositorio](https://github.com/luisdionicio-lgtm/E-commerce-Ferreteria/blob/main/docs/previews/07-next-tienda.png). EduControl 360, LASJIJAS y Archivos mágicos también usan capturas reales de sus repositorios. CeluMarket, El Refugio y MediGuard usan las capturas proporcionadas por Luis; G&M Campo muestra la plataforma web relacionada G&M Melacampos, con una leyenda que lo aclara. Las cuatro portadas restantes son ilustraciones conceptuales propias, identificadas como tales. `npm run assets` regenera las ilustraciones. Iconos de [Devicon](https://github.com/devicons/devicon), versión 2.17.0; licencia incluida en `public/icons/LICENSE`. Las marcas pertenecen a sus respectivos titulares.

Referencias técnicas: [Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata), [next/image](https://nextjs.org/docs/app/api-reference/components/image), [sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) y [robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots).


Actualización visual: iconos oficiales con insignias y colores por tecnología, ocho portadas con capturas y cuatro ilustraciones conceptuales identificadas.
