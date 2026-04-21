import { graficarDestacados } from './render.js';
import { graficarTarjetas } from './render.js';
import { cargarComponente } from './render.js';

cargarComponente('./main.html','main').then(() => { /*Hago esto porque sino no me cargaba los relojes, tengo que esperar que se arme el DOM*/
    graficarTarjetas('#showcaseprincipal',5);
    graficarTarjetas('#showcaseremix',5);
    graficarDestacados();
    graficarTarjetas('#showcaseMechanical',5);
    graficarTarjetas('#showcaseGilded',5);
});

cargarComponente('./footer.html','footer-container'); /*Por fuera da igual*/










