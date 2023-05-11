"use strict";
// var pode ser reatribuída e redeclarada em qualquer parte da função ou globalmente, tem escopo de função e pode levar a bugs relacionados a escopo.
// let pode ser reatribuída, mas não redeclarada no mesmo escopo, tem escopo de bloco e é recomendada para evitar bugs relacionados a escopo.
// const não pode ser reatribuída ou redeclarada, tem escopo de bloco e é recomendada para declarar constantes que não devem ser alteradas.

var user = "Fulano";

function showVariable() {
  if (true) {
    let user = "Beltrano";
    console.log("Dentro do IF: " + user); //
  }
  console.log("Dentro do Teste: " + user);
}

function defaultVariable() {
  const value = "Beltrano";
  console.log(value);
}
const value = "Teste";
console.log(value);

showVariable();
defaultVariable();
