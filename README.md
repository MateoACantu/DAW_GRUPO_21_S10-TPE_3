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

## Funcionalidades

- Presentación de los seis integrantes del Grupo 21.
- Consulta de personajes mediante [Thrones API](https://thronesapi.com/).
- Visualización de los primeros 16 personajes con imagen, nombre, título,
  casa e identificador.
- Búsqueda de personajes por nombre y filtro dinámico por casa.
- Contador de resultados visibles.
- Mensaje de carga y manejo de errores con opción de reintento.
- Diseño adaptable para computadoras, tabletas y dispositivos móviles.

## Cómo ejecutar el proyecto

1. Descargar o clonar este repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir `index.html` en un navegador web.

## Estructura del proyecto

```text
DAW_GRUPO_21_S10-TPE_3/
├── index.html
├── personajes.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── personajes.js
├── img/
│   ├── integrantes/
│   ├── logo/
│   └── placeholder-personaje.png
├── Capturas Finales/
└── README.md
```

## Capturas

### Página principal

![Página principal](<Capturas%20Finales/1.Pagina_Principal(Index).png>)

### Página de personajes

![Página de personajes](Capturas%20Finales/2.Página_Personajes.png)

## Equipo y roles

| Fase | Rol                                    | Responsable     | Archivos a cargo                               |
| ---- | -------------------------------------- | --------------- | ---------------------------------------------- |
| 1    | Maquetación de la página principal     | Pablo Farro     | `index.html`, `img/integrantes/`               |
| 2    | Maquetación de la página de personajes | Joseph Vallejo  | `personajes.html`                              |
| 3    | Estilos y diseño visual                | Marcelo Lojano  | `css/styles.css`, `img/logo/`                  |
| 4    | Lógica y consumo de la API             | Juan Izurieta   | `js/main.js`, `js/personajes.js`               |
| 5    | Revisión y estandarización             | Jhonatan Catota | Todo el repositorio, `README.md`, `.gitignore` |
| 6    | Informe                                | Mateo Cantuña   | `docs/informe/`, `docs/capturas/`              |

## Uso académico

Proyecto desarrollado con fines académicos para la práctica TPE3 de
Desarrollo de Aplicaciones Web. La API de Game of Thrones se cita como fuente
de los datos.
