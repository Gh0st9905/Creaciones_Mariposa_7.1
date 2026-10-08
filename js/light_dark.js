'use strict';

const switcher = document.querySelector('.btn2'); // Botón de temas claros y oscuros.

// 1. Al cargar la página, recupera el tema guardado o usa "light-theme" por defecto
const currentTheme = localStorage.getItem('theme') || 'light-theme';

// 2. Aplica el tema recuperado al body y actualiza el texto del botón
document.body.classList.add(currentTheme);
if (currentTheme === 'light-theme') {
    switcher.textContent = 'Dark';
} else {
    switcher.textContent = 'Light';
}

// 3. Escucha el click para alternar entre temas y guardar la elección
switcher.addEventListener('click', function() {
    let nextTheme = 'light-theme';

    if (document.body.classList.contains('light-theme')) {
        // Si está en claro, cambia a oscuro
        document.body.classList.replace('light-theme', 'dark-theme');
        nextTheme = 'dark-theme';
        this.textContent = 'Light';
    } else {
        // Si está en oscuro (o no tiene clase), cambia a claro
        document.body.classList.replace('dark-theme', 'light-theme');
        this.textContent = 'Dark';
    }

    // 4. Guarda la nueva preferencia en el almacenamiento local del navegador
    localStorage.setItem('theme', nextTheme);
    console.log('Tema guardado: ' + nextTheme);
});