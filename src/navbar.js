export function toggleNavbarIcon() {
    const navbar = document.querySelector('.navbar');
    const navbarIcon = document.querySelector('.menu-icon');

    navbar.addEventListener('show.bs.collapse', () => {
        navbarIcon.classList.remove('bi-list');
        navbarIcon.classList.add('bi-x');
    })

    navbar.addEventListener('hide.bs.collapse', () => {
        navbarIcon.classList.remove('bi-x');
        navbarIcon.classList.add('bi-list');
    });

    const checkoutBtn = document.getElementById('checkout-button');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            localStorage.removeItem('cart');
            document.getElementById('cart-items').innerHTML = '';
            document.getElementById('cart-badge').textContent = '0';
            document.getElementById('cart-total-price').innerHTML = '';
            alert('Gracias por tu compra!');
        });
    }
}