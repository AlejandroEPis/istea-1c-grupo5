const STORAGE_KEY = 'cart';

export function getCartProducts() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveCartProducts(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

export function updateCartItemQuantity(productId, quantity) {
    let cartItems = getCartProducts();

    const product = cartItems.find(item => item.id === productId);

    if (!product) return;

    product.quantity += quantity;

    if (product.quantity <= 0) {
        cartItems = cartItems.filter(item => item.id !== productId);
    }

    saveCartProducts(cartItems);
}

export function getCartTotal() {
    return getCartProducts().reduce(
        (total, product) => total + (product.price * product.quantity),
        0
    );
}

export function getCartItemCount() {
    return getCartProducts().reduce(
        (count, product) => count + product.quantity,
        0
    );
}