document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// fullscreen menu
const fullscreenMenu = document.querySelector(".fullscreenMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", () => {
  fullscreenMenu.classList.add("opened");
  console.log("fullscreen menu opened");
});
closeMenu.addEventListener("click", () => {
  fullscreenMenu.classList.remove("opened");
  console.log("fullscreen menu closed");
});
