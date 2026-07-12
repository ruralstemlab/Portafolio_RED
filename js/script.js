/**
 * script.js
 * Funcionalidades básicas para el portafolio RED
 */

document.addEventListener('DOMContentLoaded', function() {

    // Resaltar el enlace del menú según la página actual
    const rutaActual = window.location.pathname.split('/').pop() || 'index.html';
    const enlaces = document.querySelectorAll('.menu-principal__lista a');

    enlaces.forEach(function(enlace) {
        const href = enlace.getAttribute('href');
        if (href === rutaActual) {
            enlace.classList.add('activo');
        } else {
            enlace.classList.remove('activo');
        }
    });

    console.log('Portafolio RED - Inicializado correctamente.');
});