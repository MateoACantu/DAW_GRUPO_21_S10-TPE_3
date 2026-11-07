/**
 * js/personajes.js
 * Módulo para consumir la API y renderizar la lista de personajes.
 */

// URL de la API pública de Rick and Morty
const API_URL = "https://rickandmortyapi.com/api/character";

/**
 * Función asíncrona para obtener los personajes desde la API
 */
async function cargarPersonajes() {
  const contenedor = document.getElementById("contenedor-personajes");

  if (!contenedor) return;

  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    // Tomamos al menos 16 personajes
    const personajes = datos.results.slice(0, 16);

    renderizarPersonajes(personajes, contenedor);
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    contenedor.innerHTML = `<p class="error-msg">Ocurrió un error al cargar los personajes. Inténtelo más tarde.</p>`;
  }
}

/**
 * Renderiza la lista de personajes en el contenedor HTML
 * @param {Array} personajes - Lista de objetos de personajes
 * @param {HTMLElement} contenedor - Elemento DOM donde se dibujarán las cards
 */
function renderizarPersonajes(personajes, contenedor) {
  contenedor.innerHTML = ""; // Limpiar contenido previo

  personajes.forEach((personaje) => {
    // Creamos la tarjeta individual
    const card = document.createElement("div");
    card.classList.add("card-personaje");

    // Estructura HTML con la imagen y 4 datos del personaje (Nombre, Especie, Estado, Origen)
    card.innerHTML = `
      <img src="${personaje.image}" alt="${personaje.name}" class="img-personaje">
      <div class="info-personaje">
        <h3>${personaje.name}</h3>
        <p><strong>Especie:</strong> ${personaje.species}</p>
        <p><strong>Estado:</strong> ${personaje.status}</p>
        <p><strong>Origen:</strong> ${personaje.origin.name}</p>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

// Exportamos la función si se usa como módulo o la dejamos disponible globalmente
window.cargarPersonajes = cargarPersonajes;