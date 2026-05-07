import { graficarDestacadosBs, graficarTarjetasBs, graficarPrecioTotalCarrito, graficarProductosCarrito } from './render.js';
import { cargarComponente } from './render.js';
import {quantityButtonsAddEventListeners, renderCartLength} from "./cart.js";
import {toggleNavbarIcon} from "./navbar.js";




document.addEventListener("DOMContentLoaded", () => {
    graficarTarjetasBs('#showcaseprincipal',5);
    graficarTarjetasBs('#showcaseremix',5);
    graficarDestacadosBs();
    graficarTarjetasBs('#showcaseMechanical',5);
    graficarTarjetasBs('#showcaseGilded',5);
    cargarComponente('./footer.html','footer-container');
    cargarComponente('./navbar.html', 'navbar-container').then(function () {
        toggleNavbarIcon();
        renderCartLength();
        graficarProductosCarrito();
        graficarPrecioTotalCarrito();
        quantityButtonsAddEventListeners();
    });
});







