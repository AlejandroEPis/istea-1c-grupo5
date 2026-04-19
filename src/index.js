import { getProducts } from './api.js';



console.log(getProducts());
//console.log(productList);

graficarTarjetas('#showcaseprincipal',5);







function graficarTarjetas(id,cantidad){
let cardList = document.querySelector(`${id}`);
getProducts().then((products) => {
    let template = '';
    products.slice(0,5).forEach((p) => { // Corto el array para solo mostrar los primeros 5
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







