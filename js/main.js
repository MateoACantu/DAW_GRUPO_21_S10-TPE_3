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
