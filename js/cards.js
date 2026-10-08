'use strict';

// Seleccionamos todas las tarjetas de productos
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  card.addEventListener('click', (event) => {
    
    // OPCIONAL: Cierra los otros productos abiertos antes de abrir el actual
    productCards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('active');
      }
    });

    // Alterna la clase active en la tarjeta seleccionada
    card.classList.toggle('active');
  });
});