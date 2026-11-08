/* ============================================================================
   main.js — Comportamiento común a las dos páginas
   Fase 4 · Responsable: [Integrante 4]
   ============================================================================

   OBJETIVO
   Concentrar el comportamiento compartido por index.html y personajes.html.
   Este archivo NO debe depender de personajes.js ni de la API.

   QUÉ DEBE IR EN ESTE ARCHIVO
   1. Año actual en el pie de página
      - Tomar el año con new Date().getFullYear().
      - Escribirlo en el elemento que se defina para el pie (por ejemplo, un
        <span id="anio-actual">). Si se usa otro id, avisar al equipo.

   2. Inicialización segura
      - Esperar a DOMContentLoaded o usar scripts con defer.
      - Comprobar que el elemento existe antes de modificarlo, porque este
        archivo se carga en dos páginas distintas.

   3. Comportamiento común adicional (opcional)
      - Cerrar el menú hamburguesa de Bootstrap al hacer clic en un enlace.
      - Mantener el estado activo de la navegación si se decide calcularlo
        por JavaScript (la guía lo deja en el HTML con .active).
      - Cualquier otra acción que necesiten ambas páginas.

   FUNCIONES SUGERIDAS
   - actualizarAnio(): localiza el elemento del año y lo actualiza.
   - iniciar(): se ejecuta al cargar el DOM y llama a actualizarAnio().
   - Cualquier otra función debe tener un nombre claro y en español.

   REGLAS DE LA GUÍA (§8 FASE 4)
   - JavaScript puro (ES6); sin librerías de terceros.
   - Sin type="module"; el archivo se carga como script clásico con defer.
   - Sin variables globales sueltas: usar funciones y, si hace falta, un
     objeto de utilidades.
   - Sin bases de datos ni almacenamiento persistente.
   - Comentarios en español escritos por el autor del código.
   - Manejo defensivo: si un elemento no existe, no debe lanzar error.

   REFERENCIAS
   - Guía de Planificación: §1 (alcance), §6 (estructura), §7.1 (contrato),
     §8 Fase 4, §8 Fase 5 y §10 (riesgos).
   ============================================================================ */

/* TODO Fase 4: implementar actualizarAnio(). */

/* TODO Fase 4: implementar iniciar() y registrar el evento DOMContentLoaded. */



/**
 * js/main.js
 * Script principal para la inicialización y manipulación del DOM.
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Aplicación web inicializada correctamente.");

  // Detectar si estamos en la página de personajes y ejecutar la carga de la API
  const contenedorPersonajes = document.getElementById("contenedor-personajes");
  if (contenedorPersonajes && typeof window.cargarPersonajes === "function") {
    window.cargarPersonajes();
  }
});