# Dominio DuckDNS y Vercel

Dominio del portafolio: **https://luis-dionicio.duckdns.org**.

El dominio está registrado en la cuenta de DuckDNS de Luis y asociado al entorno Production del proyecto `luis-dionicio-portfolio` de Vercel. La conexión se realiza mediante DNS y no mediante una redirección web.

| Configuración | Valor |
| --- | --- |
| Proveedor DNS | DuckDNS |
| Subdominio registrado | `luis-dionicio` |
| Nombre completo | `luis-dionicio.duckdns.org` |
| Tipo de registro | A |
| Destino IPv4 indicado por Vercel | `216.198.79.1` |
| IPv6 en DuckDNS | Sin configurar |
| Entorno de Vercel | Production |
| Variable `NEXT_PUBLIC_SITE_URL` | `https://luis-dionicio.duckdns.org` |

La IP se obtuvo del panel de dominios de este proyecto en Vercel el 21 de noviembre de 2026. No se obtuvo resolviendo la URL temporal del despliegue. Si Vercel cambia el destino recomendado, actualizar el registro en DuckDNS con el valor que muestre el panel.

No instalar un actualizador de IP del equipo o del router para este subdominio: sustituiría el destino de Vercel por la IP de la conexión doméstica. Conservar el registro A configurado y comprobarlo después de cualquier cambio en DuckDNS. No configurar CNAME ni cambiar los nameservers de `duckdns.org`, que no pertenecen al estudiante.

La aplicación toma el dominio de `NEXT_PUBLIC_SITE_URL` al compilar para generar canonical, Open Graph, sitemap y robots. Tras cambiar esta variable hay que volver a desplegar.

El token de DuckDNS no es necesario en el código del portafolio, en Vercel ni en GitHub. No se guarda en el repositorio ni en las evidencias.

Referencias: [API de DuckDNS](https://www.duckdns.org/spec.jsp) · [Configuración de dominios en Vercel](https://vercel.com/docs/domains/working-with-domains/add-a-domain).

La dirección anterior de Vercel redirige con código 308 al dominio DuckDNS, conservando las rutas. El panel mantiene Proxy Status Unknown; se documenta sin ocultarlo. Se comprobaron DNS público, HTTPS, dieciséis rutas y diez auditorías directamente sobre el dominio.
