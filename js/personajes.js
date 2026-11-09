/**
 * js/personajes.js
 * Fase 4: Lógica y consumo de la API (Game of Thrones)
 * Cumple con el Contrato Técnico del grupo (IDs: lista-personajes, estado, contador, etc.)
 */

const API_URL = "https://thronesapi.com/api/v2/Characters";

// Referencias a los elementos del DOM definidos en personajes.html
const contenedorLista = document.getElementById("lista-personajes");
const contenedorEstado = document.getElementById("estado");
const contadorElem = document.getElementById("contador");
const buscadorInput = document.getElementById("buscador");
const filtroCasaSelect = document.getElementById("filtro-casa");

let todosLosPersonajes = [];

/**
 * Carga los personajes desde Thrones API
 */
async function cargarPersonajes() {
  if (!contenedorLista) return;

  // Mostrar mensaje de carga en la zona de estado
  if (contenedorEstado) {
    contenedorEstado.innerHTML = `<p class="text-info fs-5">Cargando personajes...</p>`;
  }

  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    // Tomamos al menos 16 personajes según la guía práctica
    todosLosPersonajes = datos.slice(0, 16);

    // Limpiar mensaje de estado
    if (contenedorEstado) contenedorEstado.innerHTML = "";

    // Llenar el selector de casas dinámicamente
    poblarFiltroCasas(todosLosPersonajes);

    // Renderizar tarjetas iniciales
    renderizarPersonajes(todosLosPersonajes);
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    if (contenedorEstado) {
      contenedorEstado.innerHTML = `
        <p class="text-danger fs-5">Ocurrió un error al cargar los personajes.</p>
        <button class="btn btn-warning" onclick="cargarPersonajes()">Reintentar</button>
      `;
    }
  }
}

/**
 * Renderiza la lista de personajes respetando el contrato de clases CSS del equipo
 */
function renderizarPersonajes(lista) {
  contenedorLista.innerHTML = "";

  // Actualizar contador ("Mostrando X de Y")
  if (contadorElem) {
    contadorElem.textContent = `Mostrando ${lista.length} de ${todosLosPersonajes.length}`;
  }

  if (lista.length === 0) {
    contenedorLista.innerHTML = `<p class="text-center text-muted col-12">No se encontraron personajes que coincidan.</p>`;
    return;
  }

  lista.forEach((personaje) => {
    // Columna Bootstrap ajustada al grid del grupo
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    // Tarjeta individual con la estructura exigida por el equipo (§7.1)
    col.innerHTML = `
      <div class="card card-personaje h-100 shadow-sm bg-dark text-light border-secondary">
        <img src="${personaje.imageUrl}" alt="${personaje.fullName}" class="card-img-top card-personaje__imagen" style="height: 260px; object-fit: cover;">
        <div class="card-body card-personaje__cuerpo text-center">
          <h3 class="card-title h5 card-personaje__nombre font-cinzel text-warning">${personaje.fullName}</h3>
          <p class="card-text card-personaje__dato mb-1"><strong>Título:</strong> ${personaje.title || "Sin título"}</p>
          <p class="card-text card-personaje__dato mb-1"><strong>Casa:</strong> ${personaje.family || "Desconocida"}</p>
          <p class="card-text card-personaje__dato mb-0"><small class="text-muted">ID: #${personaje.id}</small></p>
        </div>
      </div>
    `;

    contenedorLista.appendChild(col);
  });
}

/**
 * Llena el elemento <select> con las casas detectadas
 */
function poblarFiltroCasas(personajes) {
  if (!filtroCasaSelect) return;
  const casas = [...new Set(personajes.map((p) => p.family).filter(Boolean))];

  casas.forEach((casa) => {
    const option = document.createElement("option");
    option.value = casa;
    option.textContent = casa;
    filtroCasaSelect.appendChild(option);
  });
}

/**
 * Eventos de búsqueda y filtrado
 */
if (buscadorInput) {
  buscadorInput.addEventListener("input", aplicarFiltros);
}
if (filtroCasaSelect) {
  filtroCasaSelect.addEventListener("change", aplicarFiltros);
}

function aplicarFiltros() {
  const textoBuscado = buscadorInput ? buscadorInput.value.toLowerCase() : "";
  const casaSeleccionada = filtroCasaSelect ? filtroCasaSelect.value : "";

  const filtrados = todosLosPersonajes.filter((p) => {
    const coincideNombre = p.fullName.toLowerCase().includes(textoBuscado);
    const coincideCasa =
      casaSeleccionada === "" || p.family === casaSeleccionada;
    return coincideNombre && coincideCasa;
  });

  renderizarPersonajes(filtrados);
}

// Inicializar automáticamente al cargar el DOM
document.addEventListener("DOMContentLoaded", cargarPersonajes);
