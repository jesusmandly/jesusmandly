
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
