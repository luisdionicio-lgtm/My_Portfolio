# Tarea del laboratorio 14

La TAREA incorpora contacto por formulario, despliegue en Vercel y el dominio gratuito luis-dionicio.duckdns.org conectado mediante DNS. Las evidencias y el Word completo documentan el estado publicado.

## Publicación en Vercel

[Sitio público DuckDNS](https://luis-dionicio.duckdns.org) · [Contacto](https://luis-dionicio.duckdns.org/contact) · [Dirección de Vercel](https://luis-dionicio-portfolio.vercel.app) · [Proyecto en Vercel](https://vercel.com/luis-projects-afa44a82/luis-dionicio-portfolio).

El proyecto se creó en el equipo Luis' projects desde la rama `main` de GitHub. Vercel confirmó el primer despliegue en Production. Se configuraron las variables de producción `CONTACT_EMAIL` con el correo indicado por Luis y `NEXT_PUBLIC_SITE_URL` con el origen público de Vercel. Después se registró luis-dionicio.duckdns.org en DuckDNS y se actualizó NEXT_PUBLIC_SITE_URL para utilizarlo. [Configuración DNS](DOMINIO_DUCKDNS.md).

La actualización `a984d93` alcanzó el estado Ready en Production. El 21 de noviembre de 2026 se comprobó el sitio público con `check:seo`: dieciséis rutas con respuesta 200, metadatos propios, canonical y archivos SEO con el origen HTTPS de Vercel, imagen social, AVIF/WebP y respuesta 404 para proyectos inexistentes. El formulario publicado incluye el destino configurado y permite iniciar el envío. [Resultado de la verificación pública](evidencias/vercel/seo-check.json) · [Sitemap público verificado](evidencias/vercel/sitemap.xml) · [Robots público verificado](evidencias/vercel/robots.txt).

La recepción de mensajes no se ha probado: sigue pendiente confirmar FormSubmit en la cuenta receptora. La publicación en Vercel y la configuración del destino no equivalen a una entrega de correo comprobada.

## Implementación

- `/contact` presenta un formulario con nombre, correo, asunto y mensaje, además del perfil, la foto original, intereses profesionales y enlaces reales a LinkedIn y GitHub.
- El formulario utiliza el correo definido en `CONTACT_EMAIL` y envía mediante FormSubmit. Tiene campos obligatorios, límites de longitud, campo señuelo antispam y la verificación del proveedor. Hasta configurar la dirección, el envío queda desactivado y LinkedIn continúa disponible.
- El encabezado, el pie y la invitación final de inicio permiten acceder a contacto.
- Contacto tiene título, descripción, canonical, Open Graph y Twitter Card propios.
- El sitemap incluye las dieciséis rutas públicas, incluida `/contact`.
- Robots permite el rastreo de producción y referencia el mismo origen que el sitemap. En previews de Vercel se utiliza `Disallow: /` y metadatos `noindex, nofollow`.
- `vercel.json` selecciona Next.js, instalación con `npm ci` y compilación con `npm run build`. Node.js 26.x está definido en `package.json`.
- `.vercelignore` excluye documentos y evidencias de las cargas por CLI. Estos archivos siguen disponibles en GitHub.

## Origen SEO

`src/lib/site-origin.ts` determina un solo origen para los metadatos y archivos SEO, con esta prioridad:

1. `NEXT_PUBLIC_SITE_URL`, si se configura explícitamente.
2. `VERCEL_PROJECT_PRODUCTION_URL`, con HTTPS.
3. `VERCEL_URL`, con HTTPS.
4. `http://localhost:3000`, únicamente para trabajo local.

La compilación en Vercel rechaza HTTP o localhost para evitar publicar canonical y sitemap con URLs locales. La configuración rechaza credenciales, rutas, consultas y fragmentos en el origen. Las pruebas de `npm run check:origin` verifican estas condiciones.

## Mantenimiento del dominio

El dominio luis-dionicio.duckdns.org ya fue añadido a Production y configurado con el registro A 216.198.79.1 indicado por Vercel. Para un cambio futuro de dominio:

1. Añadirlo en Settings → Domains del proyecto de Vercel.
2. Configurar en el proveedor del dominio los registros DNS que muestre Vercel. No se fijan registros inventados ni valores genéricos en este repositorio.
3. Esperar la validación DNS y el certificado HTTPS.
4. Definir `NEXT_PUBLIC_SITE_URL` en Production como el origen HTTPS definitivo. Elegir una variante principal, con o sin `www`, y redirigir la otra en Vercel.
5. Volver a desplegar para regenerar canonical, Open Graph, sitemap y robots con el dominio elegido.
6. Verificar las dieciséis rutas públicas, los enlaces de contacto, sitemap, robots, imágenes, metadatos y errores 404. Repetir Lighthouse en Desktop y Mobile sobre producción.
7. Tomar las capturas definitivas del sitio, contacto, archivos SEO, estado del despliegue y dominio validado. Incorporar al Word la sección TAREA, las capturas y los enlaces públicos reales. Hacer commit y push de la entrega.

Se registró y asoció el dominio gratuito de DuckDNS. Las capturas locales en `evidencias/tarea-preparada/` conservan la fase de desarrollo. Las evidencias del dominio y del sitio publicado se guardan en `evidencias/duckdns/`; la captura de DuckDNS excluye el token de la cuenta.

## Activación del correo

Configurar `CONTACT_EMAIL` con la dirección confirmada por Luis antes de compilar. Al primer envío, FormSubmit solicita confirmar la dirección receptora mediante un correo de activación. Luis debe abrir ese mensaje y activar el formulario. Hasta completar esa activación no se considera comprobada la entrega de mensajes. No se han enviado mensajes de prueba ni solicitudes de activación automáticamente.

El formulario informa que los campos se procesan mediante FormSubmit. El botón lleva al flujo de envío y comprobación del proveedor; no muestra un éxito simulado. [Instrucciones oficiales de FormSubmit](https://formsubmit.co/).

## Validación local

Pasaron ESLint, compilación de producción, TypeScript, las pruebas de resolución del origen y `check:seo` con dieciséis rutas. Se revisó contacto en escritorio y móvil, con los temas claro y oscuro. [Resultado SEO local](evidencias/tarea-preparada/seo-check.json).

Para comprobar una compilación local que utiliza otro origen canonical:

```bash
NEXT_PUBLIC_SITE_URL=https://dominio-real-autorizado \
CHECK_BASE_URL=http://localhost:3001 \
EVIDENCE_DIR=docs/evidencias/verificacion-dominio \
npm run check:seo
```

Para auditar el sitio público después de publicarlo:

```bash
AUDIT_BASE_URL=https://dominio-real-autorizado npm run audit:all
```

Los ejemplos requieren sustituir el origen por el real. No representan dominios disponibles o registrados.

## Referencias oficiales

[Next.js en Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs) · [Variables del sistema](https://vercel.com/docs/environment-variables/system-environment-variables) · [Dominios](https://vercel.com/docs/domains/working-with-domains/add-a-domain) · [Versiones de Node.js](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).
