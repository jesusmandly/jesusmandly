
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 200) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

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

  
  const carrusel = document.querySelector(".proceso_carrusel");
  const slides = document.querySelectorAll(".carrusel_slide");
  const prevBtn = document.querySelector(".carrusel_btn.prev");
  const nextBtn = document.querySelector(".carrusel_btn.next");

  let index = 0;

  function updateCarrusel() {
    carrusel.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarrusel();
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarrusel();
  });


document.getElementById("anioActual").textContent = new Date().getFullYear();