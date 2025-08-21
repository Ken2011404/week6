import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
  },
  autoplay: true,
});
