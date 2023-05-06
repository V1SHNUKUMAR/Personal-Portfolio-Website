// Slider starts
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// slider ends

// card tilt
// VanillaTilt.init(document.querySelectorAll(".skill"), {
//   max: 25,
//   speed: 400,
//   glare: true,
//   "max-glare": 1,
// });
