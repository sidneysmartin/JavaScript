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
const courses = [...document.querySelectorAll(".courses")];

console.log(box1.hasChildNodes());
console.log(courses[0].children);

box1.children.length > 0
  ? console.log("Possui filhos.")
  : console.log("Não possui filhos.");
console.log(box1.length);
console.log((box1.firstElementChild.innerHTML = "HTML 5"));
console.log((box1.firstElementChild.innerHTML = "DASH"));
console.log((box1.children[2].innerHTML = "CSS 3"));
