"use strict";
// do/while - também faz um loop através de um bloco de código enquanto uma condição especificada é verdadeira
/*
Syntax
do{
* code
}while (condition)
*/

let n = 5;
let fat = 1;

do {
  fat *= n;
  n--;
} while (n >= 1);

console.log(fat);

let i = 10;
do {
  console.log(`Valor = ${i}`);
  i++;
} while (i < 10);
console.log("Fim do programa!");
