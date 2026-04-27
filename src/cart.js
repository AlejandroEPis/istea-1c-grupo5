import {getCartItemCount} from "./storage/cart-local-storage.js";

export function renderCartLength() {
    const cartItemCount = getCartItemCount();
    console.log(cartItemCount);
    const cartBadge = document.getElementById('cart-badge');

    if (cartBadge) {
        cartBadge.textContent = cartItemCount;
    }
}

export function productItemHTML(image, title, price, quantity) {
    return `
    <li class="cart-item my-4">
        <div class="cart-item-details d-flex justify-content-between align-items-center border-bottom border-1 border-warning pb-4">
            <img class="cart-item-img bg-white" src="${image}" alt="${title}">
            <div>
                <div class="cart-item-title">${title}</div>
                <div class="quantity-button-container border border-1 border-warning mt-2">
                    <button class="btn quantity-button">-</button>
                    <span class="quantity-value">${quantity}</span>
                    <button class="btn quantity-button">+</button>
                </div>
            </div>
            <div class="cart-item-price">${price}</div>
        </div>
    </li>`
}