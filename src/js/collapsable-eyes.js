"use strict";

(function () {
  const toggleElements = document.querySelectorAll(".js-toggle");

  toggleElements.forEach((element) => {
    element.addEventListener("click", handleCollap);
  });

  function handleCollap() {
    const parentCollapsable = this.parentNode;
    parentCollapsable.classList.toggle("js-collapsed");
  }
})();
