"use strict";

(function () {
  const menu = document.querySelector(".hamburger");
  const nav = document.querySelector(".header__nav");

  function toggleMenu() {
    this.classList.toggle("is-active");
    nav.classList.toggle("is_active");
  }
  if (menu) {
    menu.addEventListener("click", toggleMenu);
  }
})();
