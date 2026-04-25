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
}