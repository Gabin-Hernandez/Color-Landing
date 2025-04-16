// Tomamos el botón y el nav
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Cuando se hace click en el ícono, alternamos la clase 'active'
hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});