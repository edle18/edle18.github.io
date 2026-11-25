// Interacciones del sitio: menú en celular, galería con imagen ampliada
// y secciones que aparecen al bajar.

// 1. Botón ☰ para abrir y cerrar el menú en pantallas pequeñas
const botonMenu = document.querySelector(".boton-menu");
const menu = document.querySelector("nav");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("abierto");
});

// 2. Galería: al hacer clic en una captura se ve en grande
const visor = document.querySelector(".visor");

if (visor) {
  const imagenVisor = visor.querySelector("img");
  const textoVisor = visor.querySelector("p");

  document.querySelectorAll(".galeria figure").forEach(function (figura) {
    figura.addEventListener("click", function () {
      const imagen = figura.querySelector("img");
      imagenVisor.src = imagen.src;
      imagenVisor.alt = imagen.alt;
      textoVisor.textContent = figura.querySelector("figcaption").textContent;
      visor.classList.add("abierto");
    });
  });

  // Se cierra con un clic o con la tecla Esc
  visor.addEventListener("click", function () {
    visor.classList.remove("abierto");
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
      visor.classList.remove("abierto");
    }
  });
}

// 3. Las secciones con la clase "aparecer" se muestran al llegar a ellas
const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".aparecer").forEach(function (seccion) {
  observador.observe(seccion);
});

// 4. Año actual en el pie de página
document.querySelector("#anio").textContent = new Date().getFullYear();
