import { getProducts } from "../services/api.js";
import { Modal } from "../component/modal.js";


export function RenderCards(products) {
  let productList = document.querySelector('#product-list');

    let template = '';
    products.forEach((p) => {
      template += `
      <div class="col">
        <div class="card h-100 d-flex flex-column">
          <img src="${p.thumbnail}" class="card-img-top" alt="${p.title}" style="height: 300px; width: 200px; object-fit: cover;">

          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.brand}</p>

            <div class="px-3 pb-3">
            <button class="btn w-100 border rounded-pill mt-2 btnCard" id="btn-${p.id}">Mas detalles</button> 
            </div>

          </div>
        </div>
      </div>
      `;
       });
          productList.innerHTML = template;

    //Accion Boton
    products.forEach((p) => {
      let btn = document.querySelector(`#btn-${p.id}`);
      btn.addEventListener('click', () => {
        Modal(p);
      });




    });
 };
 
 
