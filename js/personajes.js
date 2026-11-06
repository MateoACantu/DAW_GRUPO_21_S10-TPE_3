/* ============================================================================
   ARCHIVO: js/personajes.js
   RESPONSABLE: Rol 3 - Jorge Marcelo Lojano Novillo
   RAMA: feat/js
   DEPENDE DE: IDs de personajes.html (Rol 2) y contrato de la guía
   ENTREGA: consumo de la API, filtros, tarjetas, modal y estados
   ============================================================================

   OBJETIVO
   Implementar toda la lógica de la página de personajes. Este archivo solo
   contiene indicaciones; el código debe ser escrito por el responsable.

   1. CONFIGURACIÓN
   - Definir la constante API_URL con el valor:
     "https://thronesapi.com/api/v2/Characters"
   - La API no requiere clave ni cabeceras especiales.
   - Campos disponibles por personaje:
     id, firstName, lastName, fullName, title, family, image, imageUrl.

   2. REFERENCIAS AL DOM (usar exactamente estos IDs)
   grid, search, family, resultCount, loading, error, errorMessage, empty,
   retry, modal, modalClose, modalImage, modalId, modalName, modalTitle,
   modalFirstName, modalLastName, modalFamily, modalIdentifier.
   El backdrop se obtiene con modal.querySelector("[data-close]").

   3. ESTADO
   - characters: arreglo con los personajes cargados.
   - lastFocused: elemento que abrió el modal, para devolver el foco.

   4. FUNCIONES OBLIGATORIAS
   normalizeFamily(raw)
     - Si el valor está vacío o solo tiene espacios: "Sin casa".
     - Eliminar el prefijo "House " sin distinguir mayúsculas.
     - Corregir: Lanister -> Lannister, Targaryan -> Targaryen.
     - Unkown, Unknown y None -> "Sin casa".
     - Devolver el valor limpio en los demás casos.

   formatFamily(raw)
     - Versión para mostrar: vacío, None, Unknown o Unkown -> "Sin casa".

   getInitials(character)
     - Primera letra de firstName + primera letra de lastName.
     - Si no hay letras, devolver "?".

   createAvatar(character)
     - Crear div.avatar-fallback con las iniciales y aria-hidden="true".

   createCharacterCard(character)
     - article.character-card con:
       .character-media > img (src=imageUrl, alt=fullName, loading="lazy")
       y evento error para reemplazar la imagen por createAvatar.
       .character-body > h3.character-name, p.character-title y
       p.character-family con span para la casa.
       button (tipo button) "Ver ficha" que llame a openModal(character, boton).
     - Si falta un dato, mostrar un texto de respaldo, nunca "undefined".

   loadCharacters()
     - Ejecutar showLoading().
     - fetch(API_URL) con await; si !response.ok lanzar error.
     - Convertir a JSON y comprobar que sea un arreglo.
     - Guardar en characters, ejecutar buildFamilyOptions() y applyFilters().
     - En catch, ejecutar showError() con un mensaje en español.
     - No usar alert(); los mensajes van en #errorMessage.

   showLoading()
     - Mostrar #loading, ocultar #error y #empty, vaciar #grid y poner
       "Cargando..." en #resultCount.

   showError()
     - Ocultar #loading, vaciar #grid, mostrar #error, poner "0 personajes"
       y un mensaje comprensible con opción de reintentar.

   buildFamilyOptions()
     - Crear un Set con normalizeFamily de cada personaje.
     - Ordenar con localeCompare(..., "es").
     - Limpiar #family y agregar la opción "Todas" con value="".
     - Agregar una opción por casa con value y texto iguales.

   applyFilters()
     - Leer y normalizar el término de #search y el valor de #family.
     - Construir una cadena buscable con fullName, firstName, lastName,
       title y family; pasarla a minúsculas.
     - Coincidencia de texto: término vacío o cadena.includes(term).
     - Coincidencia de casa: family vacío o normalizeFamily(...) === family.
     - Enviar el resultado a renderCharacters().

   renderCharacters(list)
     - Ocultar #loading y #error, vaciar #grid.
     - Actualizar #resultCount:
       "53 personajes" si no hay filtro, o
       "Mostrando X de 53 personajes" si hay filtro.
     - Mostrar #empty solo si list.length === 0.
     - Crear y agregar una tarjeta por personaje.

   openModal(character, trigger)
     - Guardar trigger en lastFocused.
     - Rellenar modalId, modalName, modalTitle, modalFirstName,
       modalLastName, modalFamily, modalIdentifier y modalImage
       (src=imageUrl, alt=fullName).
     - Mostrar #modal, enfocar #modalClose y bloquear el scroll del body.

   closeModal()
     - Ocultar #modal, restaurar el scroll y devolver el foco a lastFocused.

   5. EVENTOS
   - search: input -> applyFilters.
   - family: change -> applyFilters.
   - retry: click -> loadCharacters.
   - modalClose: click -> closeModal.
   - backdrop ([data-close]): click -> closeModal.
   - document keydown: Escape -> closeModal si el modal está abierto.
   - Al final del archivo: ejecutar loadCharacters().

   6. REGLAS
   - No modificar HTML ni CSS; si falta un ID, avisar a Rol 2.
   - No cambiar los nombres de funciones ni de IDs sin avisar al equipo.
   - Usar const/let, comillas dobles, indentación de 2 espacios.
   - Comentarios breves en español; textos de interfaz en español.
   - Manejar siempre los errores de red y las respuestas inesperadas.
   - Evitar innerHTML con datos de la API; usar createElement/textContent.

   7. CRITERIOS DE ACEPTACIÓN
   [ ] Se muestran 53 personajes al abrir la página.
   [ ] Buscar "stark" muestra "Mostrando 10 de 53 personajes".
   [ ] El filtro por casa funciona combinado con la búsqueda.
   [ ] Un término sin coincidencias muestra el estado vacío.
   [ ] El modal abre con los datos correctos y cierra con botón, Escape
       y clic en el backdrop.
   [ ] Al bloquear la API aparece el estado de error y "Reintentar" funciona.
   [ ] No hay errores en la consola del navegador.

   NOTA: en este archivo base solo existen las indicaciones. La lógica debe
   ser escrita por el responsable del rol.
   ========================================================================= */
