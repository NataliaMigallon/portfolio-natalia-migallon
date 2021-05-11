"use strict";

const menu = document.querySelector(".hamburger");
const menu2 = document.querySelector(".header__nav");

// function toggleMenu() {
//   this.classList.toggle("is-active");
//   document.querySelector(".header__nav").classList.toggle("is_active");
// }
// menu.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  this.classList.toggle("is-active");
  menu2.classList.toggle("is_active");
}
menu.addEventListener("click", toggleMenu);
