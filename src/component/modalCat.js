export function Modal(prod) {
    let container = document.querySelector('#productModal');


let template = `
<div class="modal-dialog">
  <div class="modal-content">

    <div class="modal-header">
      <h1 class="modal-title fs-5">${prod.title}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>

    <div class="modal-body">
      <div class="row">

        <div class="col-md-6">
          <div id="carouselModal" class="carousel slide">
            <div class="carousel-inner">

              <div class="carousel-item active">
                <img src="${prod.images[0]}" class="d-block w-100">
              </div>

              <div class="carousel-item">
                <img src="${prod.images[1]}" class="d-block w-100">
              </div>

              <div class="carousel-item">
                <img src="${prod.images[2]}" class="d-block w-100">
              </div>

            </div>
          </div>
        </div>

        <div class="col-md-6">
          <p><strong>Brand:</strong> ${prod.brand}</p>
          <p><strong>Price:</strong> $${prod.price.toFixed(2)}</p>
          <p><strong>Description:</strong> ${prod.description}</p>
        </div>

      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-primary text-dark btnMC" id="addToCard-${prod.id}">
        Agregar al Carrito
      </button>
    </div>

  </div>
</div>
`;

    container.innerHTML = template;

    const boostrapModal = new bootstrap.Modal(container);
    boostrapModal.show();



    const carousel = document.querySelector('#carouselModal');

    new bootstrap.Carousel(carousel, {
        interval: 2000,
        ride: 'carousel'
    });

const btnAdd = document.getElementById(`addToCard-${prod.id}`);

btnAdd.addEventListener('click', () => {

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.push({
        id: prod.id,
        title: prod.title,
        price: prod.price
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));

    const toastElement = document.getElementById('cartToast');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();

    const modalInstance = bootstrap.Modal.getInstance(container);
    modalInstance.hide();

});
}   