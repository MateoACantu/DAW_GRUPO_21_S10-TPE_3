# DAW Grupo 21 — Sitio web de Game of Thrones (TPE 3)

## Definición del proyecto

**DAW_GRUPO_21_S10-TPE_3** es un sitio web académico de dos páginas sobre la
serie **Game of Thrones**. El sitio presenta al
equipo en la página principal y muestra un listado de personajes obtenido
desde una API pública en una segunda página.

El proyecto se construye con **HTML5, CSS3 y JavaScript puro (ES6)**. Bootstrap
5 se usa únicamente por CDN para la rejilla y la barra de navegación. No se usan frameworks de
JavaScript (Angular, React, Vue), no hay base de datos y no se guarda
información en almacenamiento persistente.


## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica de las dos páginas |
| CSS3 | Estilos, variables, componentes y responsive |
| Bootstrap 5 (CDN) | Rejilla y barra de navegación |
| JavaScript ES6 | Comportamiento común, consumo de API, filtros y renderizado |
| Google Fonts | Cinzel para títulos; Lora o Crimson Text para el cuerpo |
| Game of Thrones API | Fuente de datos de los personajes |

## Fuente de datos

- **API:** Game of Thrones API
- **Sitio:** <https://thronesapi.com/>
- **Endpoint del listado:**
  <https://thronesapi.com/api/v2/Characters>
- **Campos esperados por personaje:** `id`, `firstName`, `lastName`,
  `fullName`, `title`, `family`, `image`, `imageUrl`.

## Páginas del sitio

### `index.html` — Página principal

- Encabezado con logo, nombre de la serie y navegación.
- Título de sección «Miembros del equipo # 21».
- Rejilla de seis tarjetas de integrantes: foto, nombre, carrera, nivel,
  correo y paralelo.
- Pie de página con el grupo, la materia y el crédito de la API.

Los datos de los integrantes se escriben directamente en el HTML, según el
Anexo A de la guía.

### `personajes.html` — Página de personajes

- Mismo encabezado, navegación y pie que `index.html`, con el enlace activo en
  «Personajes».
- Título de sección «Personajes de la serie».
- Controles: búsqueda por nombre (`#buscador`), filtro por casa
  (`#filtro-casa`) y contador (`#contador`).
- Zona de estado (`#estado`) para mensajes de carga, error y botón
  «Reintentar».
- Listado dinámico (`#lista-personajes`) generado por JavaScript, con un
  mínimo de 16 personajes.

## Equipo y roles

Los nombres reales se completan cuando el grupo confirme el reparto. La guía
usa corchetes como marcadores.

| Fase | Rol | Responsable | Archivos a cargo |
|---|---|---|---|
| 1 | Maquetación de la página principal | [Integrante 1] | `index.html`, `img/integrantes/` |
| 2 | Maquetación de la página de personajes | [Integrante 2] | `personajes.html` |
| 3 | Estilos y diseño visual | [Integrante 3] | `css/styles.css`, `img/logo/` |
| 4 | Lógica y consumo de la API | [Integrante 4] | `js/main.js`, `js/personajes.js` |
| 5 | Revisión y estandarización | [Integrante 5] | Todo el repositorio, `README.md`, `.gitignore` |
| 6 | Informe | [Integrante 6] | `docs/informe/`, `docs/capturas/` |

## Contrato técnico compartido

Estos nombres cruzan fronteras entre HTML, CSS y JavaScript. Cualquier cambio
debe avisarse al equipo antes de aplicarlo.

| Elemento | Selector | Define | Usa |
|---|---|---|---|
| Barra de navegación | `#navbar`, `.nav-link`, `.nav-link.active` | Fases 1 y 2 | Fase 3 |
| Contenedor de integrantes | `#integrantes` | Fase 1 | Fase 3 |
| Tarjeta de integrante | `.card-integrante` y `__foto`, `__nombre`, `__dato` | Fase 1 | Fase 3 |
| Campo de búsqueda | `#buscador` | Fase 2 | Fases 3 y 4 |
| Selector de casa | `#filtro-casa` | Fase 2 | Fases 3 y 4 |
| Contador del listado | `#contador` | Fase 2 | Fases 3 y 4 |
| Mensajes de carga y error | `#estado` | Fase 2 | Fases 3 y 4 |
| Contenedor del listado | `#lista-personajes` | Fase 2 | Fases 3 y 4 |
| Tarjeta de personaje | `.card-personaje` y `__imagen`, `__cuerpo`, `__nombre`, `__dato` | Fase 4 (estructura), Fase 3 (estilo) | Fase 3 |


## Uso académico

Proyecto desarrollado con fines académicos para la práctica TPE3 de
Desarrollo de Aplicaciones Web. La API de Game of Thrones se cita como fuente
de los datos.
