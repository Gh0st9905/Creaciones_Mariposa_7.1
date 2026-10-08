'use strict';

// Seleccionar elementos del DOM
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalSlides = slides.length;

// Función para actualizar la posición del carrusel
function updateCarousel() {
  // Calcula el porcentaje de desplazamiento (0%, -100%, -200%, etc.)
  const amountToMove = -currentIndex * 100;
  track.style.transform = `translateX(${amountToMove}%)`;
}

// Evento para el botón "Siguiente"
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++; // Avanza a la siguiente
  } else {
    currentIndex = 0; // Regresa al inicio si llega al final
  }
  updateCarousel();
});

// Evento para el botón "Anterior"
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--; // Retrocede a la anterior
  } else {
    currentIndex = totalSlides - 1; // Va a la última si está en el inicio
  }
  updateCarousel();
});

// Opcional: Reproducción automática (Auto-play) cada 5 segundos
setInterval(() => {
  nextBtn.click();
}, 5000);
