"use strict";
/*
Uma função anônima no JavaScript é uma função que não possui um nome definido.
Ela é declarada de forma literal, geralmente usando as palavras-chave function ou () =>,
e é atribuída a uma variável, passada como argumento para outra função ou usada diretamente onde é necessária.
*/
// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(5, 6));

const sum = new Function("v1", "v2", "return v1+v2");
console.log(sum(5, 6));
