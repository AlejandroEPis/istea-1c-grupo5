import { cargarComponente } from './render.js';
import { renderCartLength } from './cart.js';
import { toggleNavbarIcon } from './navbar.js';
import { graficarProductosCarrito, graficarPrecioTotalCarrito } from './render.js';
import { quantityButtonsAddEventListeners } from './cart.js';

document.addEventListener("DOMContentLoaded", () => {
    cargarComponente('./footer.html', 'footer-container');

    cargarComponente('./navbar.html', 'navbar-container').then(() => {
        toggleNavbarIcon();
        renderCartLength();
        graficarProductosCarrito();
        graficarPrecioTotalCarrito();
        quantityButtonsAddEventListeners();
    });
});

document.addEventListener("submit", (event) => {
    alert("Formulario enviado, gracias por tu mensaje!");
})