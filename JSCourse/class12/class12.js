"use strict";
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// if...else
// A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco,
// se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

// let num = 10;
// if (num < 10) {
//   console.log("Valor menor que 10");
// } else {
//   console.log("Valor maior que 10");
// }

const score = 10;
if (score < 7) {
  console.log("Aluno reprovado.");
} else if (score < 10) {
  console.log("Aluno Aprovado");
} else {
  console.log("Parabéns aprovado com louvor");
}
