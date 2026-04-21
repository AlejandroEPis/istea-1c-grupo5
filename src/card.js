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