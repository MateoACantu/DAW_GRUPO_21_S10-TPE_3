# DAW Grupo 21 — Sitio web de Game of Thrones (TPE 3)

## Definición del proyecto

**DAW_GRUPO_21_S10-TPE_3** es un sitio web académico de dos páginas sobre la
serie **Game of Thrones**, desarrollado para la práctica **G003-S10 ·
Desarrollo de Aplicaciones Web · Grupo 21** de la UNEMI. El sitio presenta al
equipo en la página principal y muestra un listado de personajes obtenido
desde una API pública en una segunda página.

El proyecto se construye con **HTML5, CSS3 y JavaScript puro (ES6)**. Bootstrap
5 se usa únicamente por CDN para la rejilla y la barra de navegación; la
apariencia propia se define en `css/styles.css`. No se usan frameworks de
JavaScript (Angular, React, Vue), no hay base de datos y no se guarda
información en almacenamiento persistente.

El sitio debe funcionar al abrir `index.html` con doble clic desde el
explorador de archivos. Por eso todas las rutas son relativas y los scripts se
cargan como scripts clásicos con `defer`, nunca con `type="module"`.

> **Estado actual:** el repositorio se encuentra en la **fase de
> planificación y esqueleto**. Los archivos `index.html`, `personajes.html`,
> `css/styles.css`, `js/main.js` y `js/personajes.js` contienen únicamente
> comentarios con instrucciones y referencias a la guía. El desarrollo real se
> hará en las ramas indicadas en la sección de flujo de trabajo.

## Objetivo general

Construir un sitio web de dos páginas, con identidad visual temática y consumo
de una API pública, aplicando HTML semántico, CSS responsive y JavaScript
puro, y demostrando un trabajo colaborativo organizado por fases.

## Objetivos específicos

- Maquetar la página principal con la presentación de los seis integrantes del
  Grupo 21.
- Maquetar la página de personajes con los contenedores y controles necesarios
  para cargar el listado dinámicamente.
- Definir una identidad visual propia inspirada en la serie, con una paleta y
  tipografías coherentes.
- Consumir la API pública de Game of Thrones y renderizar al menos 16
  personajes con imagen, nombre y tres datos adicionales.
- Implementar búsqueda por nombre, filtro por casa y manejo de estados de
  carga y error.
- Documentar el proceso, las decisiones y los resultados en el informe PDF.

## Alcance

**Incluye:**

- Página principal (`index.html`) con nombre de la serie, logo, navegación,
  título «Miembros del equipo # 21» y seis tarjetas de integrantes.
- Página de personajes (`personajes.html`) con controles de búsqueda y filtro,
  zona de estado y listado dinámico.
- Hoja de estilos única con la paleta temática y diseño responsive.
- JavaScript para el comportamiento común y el consumo de la API.
- Documentación del proyecto y estructura de carpetas para el informe.

**No incluye:**

- Backend, base de datos, autenticación o panel administrativo.
- Frameworks SPA (Angular, React, Vue) ni librerías de JavaScript de terceros.
- Almacenamiento persistente de datos (localStorage, cookies, etc.).
- Logotipos oficiales de la serie; se usará un emblema propio.

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

Los nombres exactos de los campos deben verificarse en la respuesta real antes
de programar. El campo `family` debe normalizarse para evitar casas duplicadas
en el selector.

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

## Identidad visual

La estética parte de la oscuridad del Trono de Hierro, el oro de la casa
Lannister, el rojo profundo de la casa Targaryen y el azul hielo de los Stark.
Se usa un tema oscuro de contraste alto, con tipografía serif.

| Color | HEX | Variable CSS | Uso |
|---|---|---|---|
| Negro Trono de Hierro | `#0E0E10` | `--negro-hierro` | Fondo general |
| Grafito de Invernalia | `#1C1D21` | `--grafito` | Barra superior, tarjetas y pie |
| Oro Lannister | `#C9A24B` | `--oro` | Títulos, etiquetas y líneas |
| Rojo Targaryen | `#9B1C1F` | `--rojo` | Enlaces activos, botones y foco |
| Pergamino | `#E9DFC7` | `--pergamino` | Texto principal |
| Azul Hielo Stark | `#8FA9B8` | `--hielo` | Texto secundario y bordes |
| Gris Acero | `#5B6168` | `--acero` | Bordes sutiles y texto deshabilitado |

Los colores se declaran una sola vez en `:root` dentro de `css/styles.css` y
se consumen mediante `var(--nombre)`. No se escriben hexadecimales sueltos en
el HTML ni en otras reglas.

Tipografías: **Cinzel** para títulos y el nombre de la serie; **Lora** o
**Crimson Text** para el cuerpo, con respaldo `Georgia, serif`.

## Estructura del repositorio

```text
DAW_GRUPO_21_S10-TPE_3/
├── index.html                      # Página principal (Fase 1)
├── personajes.html                 # Página de personajes (Fase 2)
├── README.md                       # Este documento (Fase 5)
├── .gitignore                      # Archivos excluidos del repositorio (Fase 5)
├── css/
│   └── styles.css                  # Variables, base, componentes y responsive (Fase 3)
├── js/
│   ├── main.js                     # Comportamiento común (Fase 4)
│   └── personajes.js               # API, filtros y renderizado (Fase 4)
├── img/
│   ├── logo/                       # logo.png provisional; reemplazar por emblema propio (Fase 3)
│   ├── integrantes/                # Fotos integrante-01.jpg ... integrante-06.jpg (Fase 1)
│   └── placeholder-personaje.png   # Imagen de respaldo provisional (Fase 3)
└── docs/
    ├── informe/                    # Borradores y PDF final del informe (Fase 6)
    ├── capturas/                   # Capturas para el informe (todas las fases)
    ├── guia-planificacion.pdf      # Copia de la guía de planificación
    └── guia-planificacion.md       # Notas y referencias por archivo
```

Los archivos `img/logo/logo.png` y `img/placeholder-personaje.png` se incluyen
como recursos provisionales para que el esqueleto no tenga rutas rotas. El
equipo debe reemplazar el logo por un emblema propio y, si lo desea, la imagen
de respaldo por una versión acorde a la identidad visual.

Los nombres de archivo van en minúsculas, sin espacios, sin tildes ni `ñ`, y
con guiones. Las fotos de los integrantes deben optimizarse (aproximadamente
400 px de ancho y menos de 200 KB).

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

La convención es un BEM simplificado: bloque, doble guion bajo y elemento
(`card-personaje__nombre`).

## Flujo de trabajo en GitHub

El repositorio pertenece a la cuenta `MateoACantu`. El propietario debe invitar
a los otros cinco integrantes como colaboradores antes del hito 0.

Cada fase trabaja en su rama y nunca sube directamente a `main`. Cuando una
parte está lista, se abre una Pull Request hacia `main` y la fase 5 la revisa.

| Rama | Fase | Contenido |
|---|---|---|
| `main` | Fase 5 fusiona | Versión estable e integrada |
| `feat/index` | 1 | `index.html` y fotos de integrantes |
| `feat/personajes` | 2 | `personajes.html` |
| `feat/css` | 3 | `css/styles.css`, logo y recursos visuales |
| `feat/js` | 4 | `js/main.js` y `js/personajes.js` |
| `review/estandarizacion` | 5 | Formato, `README.md` y `.gitignore` |
| `docs/informe` | 6 | Borradores del informe y capturas |

Comandos básicos:

```bash
# Clonar el repositorio (solo la primera vez)
git clone https://github.com/MateoACantu/DAW_GRUPO_21_S10-TPE_3.git
cd DAW_GRUPO_21_S10-TPE_3

# Crear y cambiar a la rama de la fase
git checkout -b feat/index

# Guardar y subir avances
git add index.html img/integrantes/
git commit -m "feat(index): agrega tarjetas de integrantes"
git pull origin main
git push -u origin feat/index
```

Formato de commits: `tipo(ámbito): descripción en minúsculas`, con los tipos
`feat`, `fix`, `style`, `docs` y `chore`.

## Cómo ejecutar el sitio

1. Abrir la carpeta del proyecto.
2. Hacer doble clic en `index.html`; debe abrir en el navegador.
3. Navegar a `personajes.html` desde la barra de navegación.
4. Comprobar que las rutas de CSS, JavaScript e imágenes son relativas.
5. Opcional: servir la carpeta con un servidor local (por ejemplo, la
   extensión Live Server de VS Code) para probar el consumo de la API.

El sitio requiere conexión a internet para cargar Bootstrap, Google Fonts y la
API de personajes. Si no hay conexión, deben verse las fuentes de respaldo y
un mensaje de error claro en la página de personajes.

## Entregables

- Sitio web completo con las dos páginas y los recursos.
- Informe en PDF con carátula, objetivos, introducción, desarrollo,
  resultados, conclusiones, recomendaciones y bibliografía en APA 7.
- Proyecto anexado en un ZIP que abra desde otra carpeta.
- Repositorio con el código integrado en `main`.

## Lista de verificación rápida

- [ ] Las dos páginas abren con doble clic y se navega entre ellas.
- [ ] La página principal muestra a los 6 integrantes con todos sus datos.
- [ ] El número de grupo «21» aparece en el título de la página principal.
- [ ] La página de personajes muestra al menos 16 personajes con imagen,
      nombre y tres datos más.
- [ ] Los personajes corresponden a la asignación del docente.
- [ ] La paleta se aplica en ambas páginas y se ve bien en móvil, tableta y
      escritorio.
- [ ] No hay errores en la consola, frameworks prohibidos ni base de datos.
- [ ] El informe PDF está completo.
- [ ] El proyecto anexado en ZIP abre desde otra carpeta.
- [ ] Informe y proyecto están subidos a la plataforma.

## Documentación de referencia

La guía completa de planificación se encuentra en:

- `docs/guia-planificacion.pdf` (copia dentro del proyecto).
- `C:\Users\alexm\Downloads\Guia_Planificacion_DAW_Grupo21_S10-TPE3.docx`
  (documento original).

También se deja una referencia en `docs/guia-planificacion.md`. Cada archivo
del proyecto incluye en sus comentarios la sección de la guía que debe
consultarse antes de desarrollar su parte.

## Uso académico

Proyecto desarrollado con fines académicos para la práctica G003-S10 de
Desarrollo de Aplicaciones Web. La API de Game of Thrones se cita como fuente
de los datos. El logo del sitio debe ser un emblema propio del grupo; no se
usarán logotipos oficiales protegidos.
