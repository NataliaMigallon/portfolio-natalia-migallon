"use strict";

const eyesDown = document.querySelectorAll(".js-down");

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
// const jaja = eyesDown.animate(
//   [{ animation: "color(white)" }, { animation: "color(red)" }],
//   500
// );
// jaja.addEventListener("click", function () {
//   eyesDown.style.animation = color("red");
// });
