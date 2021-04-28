"use strict";

const menu = document.querySelector(".hamburger");

function toggleMenu() {
  this.classList.toggle("is-active");
  document.querySelector(".header__nav").classList.toggle("is_active");
}
menu.addEventListener("click", toggleMenu, false);

// function toggleMenu() {
//   this.classList.toggle("is-active");
//   document.querySelector(".header__nav").classList.toggle("is_active");
// }
// menu.addEventListener("click", toggleMenu, false);
