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
const btn = document.querySelector("#btnTransfer");
const courses = [...document.querySelectorAll(".courses")];

console.log(box1.children[4]);
console.log(box1.firstElementChild);
console.log(box1.lastElementChild);
console.log(box1.children);
console.log(btn.getRootNode());
