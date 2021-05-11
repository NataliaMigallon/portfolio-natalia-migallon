"use strict";

const eyesDown = document.querySelectorAll(".js-down");
const mouth = document.querySelector(".js-mouth");

for (let index = 0; index < eyesDown.length; index++) {
  eyesDown[index].addEventListener("click", handleCollap);
}

function handleCollap() {
  const parentEye = this.parentNode;
  parentEye.classList.toggle("js-collapsed");
}
eyesDown.addEventListener("click", handleCollap);

// function handleCollap(event) {
//     const clickedEye = event.currentTarget;
//     const parentEye = clickedEye.parentNode;
//     parentEye.classList.toggle("js-collapsed");
// }

// for (let index = 0; index < mouth.length; index++) {
//   mouth[index].addEventListener("click", handleCollap2);
// }

function handleCollap2(event) {
  event.currentTarget.value === mouth.classList.toggle("mouth__text");
  //mouth.classList.toggle("mouth__text") === event.currentTarget.value;
}
mouth.addEventListener("click", handleCollap2);
