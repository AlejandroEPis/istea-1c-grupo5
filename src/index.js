import { graficarDestacados, graficarDestacadosBs, graficarTarjetasBs } from './render.js';
import { graficarTarjetas } from './render.js';
import { cargarComponente } from './render.js';




document.addEventListener("DOMContentLoaded", () => {
    graficarTarjetasBs('#showcaseprincipal',5);
    graficarTarjetasBs('#showcaseremix',5);
    graficarDestacadosBs();
    graficarTarjetasBs('#showcaseMechanical',5);
    graficarTarjetasBs('#showcaseGilded',5);
    cargarComponente('./footer.html','footer-container');
    cargarComponente('./navbar.html','navbar-container'); 
});







