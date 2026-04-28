export function crearHTMLTarjeta(producto) {
    return `
        <div class="product-card">
            <img src="${producto.thumbnail}" class="product-img" alt="${producto.title}">
            <div class="product-body">
                <h5 class="product-title">${producto.title}</h5>
                <p class="product-price">$${producto.price.toFixed(0)}</p>
            </div>
        </div>
    `;
}

export function crearHTMLTarjetaHighlight(p) {
    return `
            <div class="highlight-card-image">
            <img src="${p.thumbnail}" class="product-img" alt="${p.title}">
            </div>
            <h3>${p.title}</h3>
            <p>
                ${p.description}
            </p>
    `;
}

export function crearHTMLTarjetaBs(p) {
    return `
        <div class="col">
        <div class="card h-100 d-flex flex-column">
        <img src="${p.thumbnail}" class="card-img-top " alt="${p.title}" style="height: 300px; width: 200px; object-fit: cover;">

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
}

export function crearHTMLTarjetaHighlightBs(p) {
    return `
        <div class="highlight-card-image">
            <img src="${p.thumbnail}" class="img-fluid product-img" alt="${p.title}">
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
    `;
}