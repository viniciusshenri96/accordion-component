"use strict";

const icons = document.querySelectorAll(".icon");
const itens = document.querySelectorAll(".item");

function openAccordion(index) {
  for (let rep = 0; rep < itens.length; rep++) {
    if (itens[rep].classList.contains("open")) {
      itens[rep].classList.remove("open");
    }

    itens[index].classList.add("open");
  }
}

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function () {
    openAccordion(i);
  });
}
