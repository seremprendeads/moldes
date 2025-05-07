const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuBtn.classList.toggle('active'); // Agrega o quita la clase "active" para animar
});

// Opcional: cerrar menú al hacer clic en un link y resetear el ícono
const links = mobileMenu.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.classList.remove('active');
    });
});