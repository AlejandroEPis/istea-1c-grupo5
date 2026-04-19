import { getProducts } from './api.js';



console.log(getProducts());
//console.log(productList);

graficarTarjetas('#showcaseprincipal',5);
graficarTarjetas('#showcaseremix',3);
graficarDestacados();




function graficarDestacados(){
let destacado1 = document.querySelector(`#highlight-item-1`);
let destacado2 = document.querySelector(`#highlight-item-2`);
let destacado3 = document.querySelector(`#highlight-item-3`);
let destacados = [destacado1,destacado2,destacado3];
let template = '';
getProducts().then((products) => {
    products.slice(0,3).forEach((p, index) => {
        template = `
        <div class="highlight-card-image">
        <img src="${p.thumbnail}" class="card-img-top" alt="${p.title}">
        </div>
        <h3>${p.title}</h3>
        <p>
            ${p.description}
        </p>
`;
        destacados[index].innerHTML = template;
    });
});


}

function graficarTarjetas(id,cantidad){
let cardList = document.querySelector(`${id}`);
getProducts().then((products) => {
    let template = '';
    products.slice(0,cantidad).forEach((p) => { // Corto el array para solo mostrar los primeros 5
        template += `
    <div class="card">
        <img src="${p.thumbnail}" class="card-img-top" alt="${p.title}">
        <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-price">$${p.price.toFixed(0)}</p>
        </div>
    </div>
`;
    });
    cardList.innerHTML = template;
});
}







