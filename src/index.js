import { graficarDestacados } from './utils/render.js';
import { graficarTarjetas } from './utils/render.js';
import { cargarComponente } from './utils/render.js';




document.addEventListener("DOMContentLoaded", () => {
    graficarTarjetas('#showcaseprincipal',5);
    graficarTarjetas('#showcaseremix',5);
    graficarDestacados();
    graficarTarjetas('#showcaseMechanical',5);
    graficarTarjetas('#showcaseGilded',5);
    cargarComponente('./footer.html','footer-container');
    cargarComponente('./navbar.html','navbar-container');
});



