import { getProducts } from '/api.js';


let productsList = document.querySelector('#product-list')
getProducts().then((products) => {

    let template = '';
    products.forEach(p => {
        template += `
<div class="col">
    <div class="card">
        <img src=${p.imagen}class="card-img-top" alt="${p.tittle}">
            <div class="card-body">
                <h5 class="card-title">${p.tittle}</h5>
                <p class="card-text">${p.description}.</p>
            </div>
    </div>
</div>  
     `;

    });

    productsList.innerHTML = template;
});






