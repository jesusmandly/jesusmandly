
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 200) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

