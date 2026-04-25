import { getProducts } from './api.js';
import { crearHTMLTarjeta } from './card.js';
import { crearHTMLTarjetaHighlight } from './card.js';
import {toggleNavbarIcon} from "./navbar.js";

console.log(getProducts());

export function cargarComponente(ruta, id) {
    return fetch(ruta)
    .then(res => res.text())
    .then(data => {
    document.getElementById(id).innerHTML = data;
    toggleNavbarIcon();
    });
}

export function graficarDestacados(){
    let destacado1 = document.querySelector(`#highlight-item-1`);
    let destacado2 = document.querySelector(`#highlight-item-2`);
    let destacado3 = document.querySelector(`#highlight-item-3`);
    let destacados = [destacado1,destacado2,destacado3];
    let template = '';
    getProducts().then((products) => {
        products.slice(0,3).forEach((p, index) => {
            template = crearHTMLTarjetaHighlight(p);
            destacados[index].innerHTML = template;
        });
    });
}

export function graficarTarjetas(id,cantidad){
    let cardList = document.querySelector(`${id}`);
    getProducts().then((products) => {
        let template = '';
        products.slice(0,cantidad).forEach((p) => { 
            template += crearHTMLTarjeta(p);
        });
        cardList.innerHTML = template;
    });
}