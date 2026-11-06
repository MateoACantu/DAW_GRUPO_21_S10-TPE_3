# DAW GRUPO 21 - Práctica G003

Sitio web informativo de personajes de Game of Thrones con consumo de la API pública
ThronesAPI (`https://thronesapi.com/api/v2/Characters`).

## Estado del repositorio

Este repositorio contiene la **base de trabajo**: estructura de carpetas, contrato
técnico y archivos con las indicaciones de cada responsable. **Todavía no contiene la
implementación final**; cada integrante debe desarrollar su archivo en su rama.

La guía completa de trabajo, roles, ruta de ejecución, contrato de IDs y criterios de
aceptación está en:

`docs/Guia_Trabajo_G003_GRUPO_21.docx`

## Equipo y roles

| Rol | Integrante | Archivo / entregable | Rama |
|-----|------------|----------------------|------|
| 1 | Jhonatan Christian Catota Verdezoto | `index.html` | `feat/index` |
| 2 | Juan Carlos Izurieta Cisneros | `personajes.html` | `feat/personajes` |
| 3 | Jorge Marcelo Lojano Novillo | `js/personajes.js` | `feat/js` |
| 4 | Pablo Andres Farro Vera | `css/styles.css` | `feat/styles` |
| 5 | Joseph Salvatore Vallejo Rodriguez | Revisión y correcciones | `qa/revision` |
| 6 | Mateo Alexander Cantuña Intriago | Informe y entrega | `docs/informe` |

Cada archivo tiene un solo dueño. No se edita el archivo de otro rol.

## Orden de trabajo

1. **Rol 1** construye `index.html` y deja listos el encabezado y el pie.
2. **Rol 2** construye `personajes.html` reutilizando el encabezado y el pie, y respeta
   los IDs del contrato.
3. **Rol 3** implementa `js/personajes.js` contra esos IDs (puede avanzar utilidades en
   paralelo desde el día 1).
4. **Rol 4** implementa `css/styles.css` (puede avanzar variables y base en paralelo).
5. **Rol 5** revisa la integración, registra hallazgos y aprueba el congelamiento.
6. **Rol 6** genera las evidencias y redacta el informe con la versión congelada.

Detalle completo en la guía (sección 6).

## Flujo Git

```bash
# 1. Actualizar main
git checkout main
git pull origin main

# 2. Crear la rama del rol
git checkout -b feat/index        # o feat/personajes, feat/js, feat/styles

# 3. Trabajar solo en el archivo asignado
git add index.html
git commit -m "feat(index): estructura de la pagina principal"
git push -u origin feat/index
```

- Abrir un Pull Request hacia `main`.
- El Pull Request debe describir qué se hizo y adjuntar evidencia (captura o video).
- Rol 5 revisa y aprueba; luego se integra en el orden indicado.
- No se hace push directo a `main` después de la revisión inicial.
- Mensajes de commit: `feat(archivo): descripcion`, `fix(archivo): descripcion`,
  `docs: descripcion`.

## Cómo ejecutar

No hay dependencias ni compilación:

1. Abrir `index.html` en Chrome, Edge o Firefox.
2. Navegar a **Personajes** (requiere conexión a internet).
3. Opcional, servidor local:

```bash
python -m http.server 8000
```

y abrir `http://localhost:8000`.

## Reglas rápidas

- Los IDs y clases son un contrato: no se cambian sin avisar a todo el equipo.
- No usar frameworks, CDN ni base de datos.
- Textos de la interfaz en español; código claro y comentado.
- Cada entrega debe funcionar sin errores en la consola.
- Las capturas van en `capturas/` con el nombre indicado en su README.
