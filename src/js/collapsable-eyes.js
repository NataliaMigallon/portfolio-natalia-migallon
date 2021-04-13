"use strict";

// const eyeLeftUp = document.querySelectorAll(".js-left-up");
// const eyeRightUp = document.querySelectorAll(".js-left-down");

const eyesDown = document.querySelectorAll(".js-down");
//const eyeRightDown = document.querySelectorAll(".js-left-down");

for (let index = 0; index < eyesDown.length; index++) {
  eyesDown[index].addEventListener("click", handleCollap);
}

function handleCollap() {
  const parentEye = this.parentNode;
  parentEye.classList.toggle("js-collapsed");
}

// function handleCollap(event) {
//     const clickedEye = event.currentTarget;
//     const parentEye = clickedEye.parentNode;
//     parentEye.classList.toggle("js-collapsed");
// }
