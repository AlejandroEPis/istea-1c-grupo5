import { getProducts } from "../api.js";


export function RenderCards() {
  let productList = document.querySelector('#product-list');
  getProducts().then((products) => {
    let template = '';
    products.forEach((p) => {
      template += `
      <div class="col">
        <div class="card h-100 d-flex flex-column">
          <img src="${p.thumbnail}" class="card-img-top" alt="${p.title} style="height: 300px; width: 200px; object-fit: cover;">

          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.brand}</p

            <div class="mt-auto">
              <p class="precio">$${p.price}</p>
            </div>
          </div>
        </div>
      </div>`;
    });

    productList.innerHTML = template;
  });
} 