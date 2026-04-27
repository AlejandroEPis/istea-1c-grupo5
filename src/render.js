import { getProducts } from './api.js';
import { crearHTMLTarjeta } from './card.js';
import { crearHTMLTarjetaHighlight } from './card.js';
import {productItemHTML} from "./cart.js";
import {getCartProducts, getCartTotal} from "./storage/cart-local-storage.js";

console.log(getProducts());

export function cargarComponente(ruta, id) {
    return fetch(ruta)
    .then(res => res.text())
    .then(data => {
    document.getElementById(id).innerHTML = data;
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

export function graficarProductosCarrito() {
    const cartItems = document.getElementById('cart-items');

    if (!cartItems) return;

    cartItems.innerHTML = '';
    const productos = getCartProducts();

    console.log(productos);

    productos.forEach(item => {
        const itemHTML = productItemHTML(item.image, item.title, item.price, item.quantity);
        cartItems.innerHTML += itemHTML;
    });
}

export function graficarPrecioTotalCarrito() {
    const totalPrice = document.getElementById('cart-total-price');

    if (!totalPrice) return;

    const total = getCartTotal();
    totalPrice.textContent = `$${total.toFixed(2)}`;
}