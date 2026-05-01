import {getCartItemCount, updateCartItemQuantity} from "./storage/cart-local-storage.js";

export function renderCartLength() {
    const cartItemCount = getCartItemCount();
    console.log(cartItemCount);
    const cartBadge = document.getElementById('cart-badge');

    if (cartBadge) {
        cartBadge.textContent = cartItemCount;
    }
}

export function productItemHTML(id, image, title, price, quantity) {
    return `
    <li class="cart-item my-4">
        <div class="cart-item-details d-flex justify-content-between align-items-center border-bottom border-1 border-warning pb-4">
            <img class="cart-item-img bg-white" src="${image}" alt="${title}">
            <div>
                <div class="cart-item-title">${title}</div>
                <div class="quantity-button-container border border-1 border-warning mt-2">
                    <button class="btn quantity-button-remove" data-product-id="${id}">-</button>
                    <span class="quantity-value">${quantity}</span>
                    <button class="btn quantity-button-add" data-product-id="${id}">+</button>
                </div>
            </div>
            <div class="cart-item-price">${price}</div>
        </div>
    </li>`
}

export function quantityButtonsAddEventListeners() {
    document.addEventListener('click', (event) => {

        if (event.target.classList.contains('quantity-button-add') || event.target.classList.contains('quantity-button-remove')) {
            const productId = Number(event.target.dataset.productId);

            const isAdd = event.target.classList.contains('quantity-button-add');
            const isIncrease = isAdd ? 1 : -1;

            updateCartItemQuantity(productId, isIncrease);

            const container = event.target.closest('.quantity-button-container');
            const quantityValue = container.querySelector('.quantity-value');

            let current = Number(quantityValue.textContent);
            current += isIncrease;

            if (current === 0) {
                const cartItem = event.target.closest('.cart-item');
                cartItem.remove();
                return;
            }

            quantityValue.textContent = current;
        }
    });
}