/* ============================================================================
   personajes.js — Consumo de la API y renderizado del listado
   Fase 4 · Responsable: [Integrante 4]
   ============================================================================

   OBJETIVO
   Cargar los personajes desde la API pública, pintarlos en #lista-personajes
   y permitir búsqueda por nombre y filtro por casa. Este archivo se carga
   únicamente en personajes.html.

   ANTES DE PROGRAMAR
   1. Abrir el endpoint en el navegador y confirmar los nombres exactos de los
      campos y la cantidad de registros.
   2. Confirmar con el docente el documento de asignación del Grupo 21. Si fija
      una lista concreta, guardarla en PERSONAJES_ASIGNADOS y mostrar solo esos
      personajes (mínimo 16). Mientras no se confirme, se puede trabajar con
      el listado completo.

   DATOS DE LA API (§7.3)
   - Endpoint: https://thronesapi.com/api/v2/Characters
   - Campos esperados: id, firstName, lastName, fullName, title, family,
     image, imageUrl.
   - Verificar en la respuesta real antes de usar los nombres.
   - Normalizar el campo family para que el selector de casas no muestre
     duplicados por diferencias de escritura.

   FUNCIONES SUGERIDAS
   - cargarPersonajes(): función async con try/catch, comprobación de
     respuesta.ok y mensaje de error en #estado.
   - mostrarEstado(mensaje, esError): escribe en #estado y, si hay error,
     agrega un botón «Reintentar» que vuelve a llamar a cargarPersonajes().
   - normalizarTexto(texto): minúsculas, sin tildes y sin espacios sobrantes,
     para la búsqueda y para agrupar casas.
   - llenarFiltroCasas(personajes): llena #filtro-casa con las casas únicas.
   - renderizar(lista): limpia #lista-personajes y crea una tarjeta por
     personaje.
   - crearTarjeta(personaje): construye la estructura descrita en §7.2 con
     createElement y textContent. No usar innerHTML con datos de la API.
   - aplicarFiltros(): lee #buscador y #filtro-casa, filtra en memoria y
     actualiza el listado y #contador.
   - manejarErrorImagen(evento): sustituye la imagen rota por
     img/placeholder-personaje.png.

   ESTRUCTURA DE LA TARJETA (§7.2)
     <div class="col">
       <article class="card-personaje">
         <img class="card-personaje__imagen" ... loading="lazy">
         <div class="card-personaje__cuerpo">
           <h3 class="card-personaje__nombre">...</h3>
           <p class="card-personaje__dato"><span>Título:</span> ...</p>
           <p class="card-personaje__dato"><span>Casa:</span> ...</p>
           <p class="card-personaje__dato"><span>Nombre:</span> ...</p>
           <p class="card-personaje__dato"><span>Apellido:</span> ...</p>
           <p class="card-personaje__dato"><span>ID:</span> ...</p>
         </div>
       </article>
     </div>

   COMPORTAMIENTO REQUERIDO
   - Mostrar «Cargando personajes...» mientras llega la respuesta.
   - Mostrar al menos 16 personajes con imagen, nombre y tres datos más.
   - Buscar mientras se escribe, ignorando mayúsculas y tildes.
   - El contador debe reflejar el resultado visible («Mostrando X de Y»).
   - Si una imagen falla, mostrar la imagen de respaldo.
   - Si falla la red o la API, mostrar un mensaje claro con botón Reintentar.
   - No dejar tarjetas con imagen rota ni errores en consola.

   REGLAS DE LA GUÍA (§8 FASE 4)
   - JavaScript puro (ES6); sin librerías externas, sin type="module".
   - Sin bases de datos ni almacenamiento persistente.
   - Sin variables globales sueltas; encapsular el estado del listado.
   - Comentarios en español escritos por el autor del código.
   - Citar la API como fuente en el informe.

   REFERENCIAS
   - Guía de Planificación: §1 (alcance), §5.2 (mockup 2), §6 (estructura),
     §7.1, §7.2 y §7.3 (contrato, tarjeta y API), §8 Fase 4, §8 Fase 5,
     §10 (riesgos) y §11 (lista de verificación).
   ============================================================================ */

/* TODO Fase 4: definir la URL de la API y, si se confirma, PERSONAJES_ASIGNADOS. */

/* TODO Fase 4: implementar cargarPersonajes() y mostrarEstado(). */

/* TODO Fase 4: implementar normalizarTexto(), llenarFiltroCasas() y renderizar(). */

/* TODO Fase 4: implementar crearTarjeta() con createElement y textContent. */

/* TODO Fase 4: implementar aplicarFiltros(), los eventos de #buscador y #filtro-casa y el botón Reintentar. */

/* TODO Fase 4: implementar manejarErrorImagen() con la imagen de respaldo. */
