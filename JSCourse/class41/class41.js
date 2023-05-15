"use strict";
// https://www.w3schools.com/jsref/dom_obj_document.asp#

/*
Quando um documento HTML é carregado em um navegador da Web, ele se torna um objeto de documento .

O objeto de documento é o nó raiz do documento HTML.

O objeto documento é uma propriedade do objeto janela .

O objeto de documento é acessado com:

window.documentou apenas document
*/
const box1 = document.querySelector("#box1");
const courses = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "MYSQL", "PYTHON"];

courses.map((el, key) => {
  const newElement = document.createElement("div");
  newElement.setAttribute(`c1`, `c${key + 1}`);
  newElement.setAttribute("class", "courses c1");
  newElement.innerHTML = el;

  const btnDelete = document.createElement("img");
  btnDelete.setAttribute("src", "./trash.svg");
  btnDelete.setAttribute("class", "icon");
  btnDelete.addEventListener("click", (evt) => {
    evt.stopPropagation();
    box1.removeChild(evt.target.parentNode);
  });

  newElement.appendChild(btnDelete);
  box1.appendChild(newElement);
});
