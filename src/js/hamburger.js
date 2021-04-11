"use strict";
const menu = document.querySelector(".hamburger");

// method
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".header__nav").classList.toggle("is_active");
  //event.preventDefault();
}

// event
menu.addEventListener("click", toggleMenu, false);

// function handleMenu() {
//   if (condition) {
//     this.classList.toggle("is-active");
//     document.querySelector(".header__nav").classList.toggle("is_active");
//   } else {
//   }
// }
// menu.addEventListener("click", handleMenu);
