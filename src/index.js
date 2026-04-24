import { graficarDestacados } from './render.js';
import { graficarTarjetas } from './render.js';
import { cargarComponente } from './render.js';
import {toggleNavbarIcon} from "./component/navbar.js";

document.addEventListener("DOMContentLoaded", () => {
    graficarTarjetas('#showcaseprincipal',5);
    graficarTarjetas('#showcaseremix',5);
    graficarDestacados();
    graficarTarjetas('#showcaseMechanical',5);
    graficarTarjetas('#showcaseGilded',5);
    cargarComponente('./footer.html','footer-container');
});

toggleNavbarIcon()





