
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    hamburgerButton.addEventListener('click', () => {
        const isExpanded =
            hamburgerButton.getAttribute('aria-expanded') === 'true';

        hamburgerButton.setAttribute('aria-expanded', String(!isExpanded));
        mainNav.classList.toggle('nav-open');
    });

    // Cierra el menú cuando se hace clic fuera de él.
    document.addEventListener('click', (event) => {
        if (
            !mainNav.contains(event.target) &&
            !hamburgerButton.contains(event.target)
        ) {
            mainNav.classList.remove('nav-open');
            hamburgerButton.setAttribute('aria-expanded', 'false');
        }
    });
});
