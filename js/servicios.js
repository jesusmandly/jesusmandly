  const toggleButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const menuLinks = menu.querySelectorAll('a');

  toggleButton.addEventListener('click', () => {
    const isActive = menu.classList.toggle('active');
    toggleButton.classList.toggle('active');

    // Accesibilidad aria
    toggleButton.setAttribute('aria-expanded', isActive);
    menu.setAttribute('aria-hidden', !isActive);
  });

  // Cerrar menú al clicar cualquier enlace
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggleButton.classList.remove('active');
      toggleButton.setAttribute('aria-expanded', false);
      menu.setAttribute('aria-hidden', true);
    });
  });

document.getElementById("anioActual").textContent = new Date().getFullYear();

