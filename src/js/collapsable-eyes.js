"use strict";

(function () {
  const toggleElements = document.querySelectorAll(".js-toggle");

  // for (let index = 0; index < toggleElements.length; index++) {
  //   toggleElements[index].addEventListener("click", handleCollap);
  // }
  toggleElements.forEach((element) => {
    element.addEventListener("click", handleCollap);
  });
  function handleCollap() {
    const parentCollapsable = this.parentNode;
    parentCollapsable.classList.toggle("js-collapsed");
  }
})(); // espera a que todo DOM cargado para hacerlo funcionar
