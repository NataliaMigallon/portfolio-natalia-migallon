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
// for (let index = 0; index < mouth.length; index++) {
//   mouth[index].addEventListener("click", handleCollap2);
// }
// function handleCollap2(event) {
//   const jaja = event.currentTarget;
//   jaja.classList.toggle("js-collapsed");
// }
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
