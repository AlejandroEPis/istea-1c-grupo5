const STORAGE_KEY = 'cart';

export function getCartProducts() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveCartProducts(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

export function getCartTotal() {
    return getCartProducts().reduce((total, product) => total + product.price, 0);
}

export function getCartItemCount() {
    return getCartProducts().length;
}