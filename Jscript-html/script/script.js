// Función para cambiar el idioma
function cambiarIdioma() {
  const idiomaSeleccionado = document.getElementById('select_idioma').value;
  
  // Aquí puedes agregar mensajes o traducciones según el idioma seleccionado
  if (idiomaSeleccionado === 'es') {
    alert('Idioma cambiado a Español');
    // Cambiar el contenido de la página si es necesario
  } else if (idiomaSeleccionado === 'en') {
    alert('Language changed to English');
    // Cambiar el contenido de la página si es necesario
  }
}

// Función para actualizar el tema
function actualizarTheme() {
  const temaSeleccionado = document.getElementById('select_theme').value;
  const body = document.body;

  if (temaSeleccionado === 'dark') {
    localStorage.setItem("theme", "dark")
    body.classList.add('oscuro');
  } else if (temaSeleccionado === 'light') {
    localStorage.setItem("theme", "light")
    body.classList.remove('oscuro');
  }
}
