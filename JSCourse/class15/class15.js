"use strict";
// for/in - loops através das propriedades de um objeto
// for/in é um loop definido

/*
Sintaxe
for (key in object) {
  console.log(object[key])

*/

let num = [10, 12, 14, 16, 20];

for (let i in num) {
  console.log(num[i]);
}
