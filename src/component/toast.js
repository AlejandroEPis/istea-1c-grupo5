export function showToast(mensaje) {
    const toastElement = document.getElementById('cartToast');

    toastElement.querySelector('.toast-body').textContent = mensaje;

    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}