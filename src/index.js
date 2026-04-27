import {graficarDestacados, graficarPrecioTotalCarrito, graficarProductosCarrito} from './render.js';
import { graficarTarjetas } from './render.js';
import { cargarComponente } from './render.js';
import {renderCartLength} from "./cart.js";
import {saveCartProducts} from "./storage/cart-local-storage.js";
import {toggleNavbarIcon} from "./navbar.js";




document.addEventListener("DOMContentLoaded", () => {
    graficarTarjetas('#showcaseprincipal',5);
    graficarTarjetas('#showcaseremix',5);
    graficarDestacados();
    graficarTarjetas('#showcaseMechanical',5);
    graficarTarjetas('#showcaseGilded',5);
    cargarComponente('./footer.html','footer-container');
    cargarComponente('./navbar.html', 'navbar-container').then(function () {
        toggleNavbarIcon();
        testCarrito();
        renderCartLength();
        graficarProductosCarrito();
        graficarPrecioTotalCarrito();
    });
});

function testCarrito() {
    const testProducts = [
        { id: 1, image: 'https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp', title: 'Product 1', price: 10.99, quantity: 2 },
        { id: 2, image: 'https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp', title: 'Product 2', price: 20.99, quantity: 1 },
        { id: 3, image: 'https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp', title: 'Product 3', price: 30.99, quantity: 3 }
    ]

    saveCartProducts(testProducts);
    console.log('prueba');
}







