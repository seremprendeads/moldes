  document.addEventListener("DOMContentLoaded", function () {
    const btnTienda = document.getElementById("btn-tienda");
    const btnReservar = document.getElementById("btn-reservar");
    const heroSection = document.getElementById("hero");

    function toggleButtonsOnScroll() {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > heroBottom) {
        btnTienda.classList.remove("hidden");
        btnReservar.classList.remove("hidden");
      } else {
        btnTienda.classList.add("hidden");
        btnReservar.classList.add("hidden");
      }
    }

    window.addEventListener("scroll", toggleButtonsOnScroll);
  });
  