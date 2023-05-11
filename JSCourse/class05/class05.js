"use strict";

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_logicos
/*
 * > - maior
 * >= - maior ou igual
 * < - menor
 * <= - menor ou igual
 * == - igual
 * === - Estritamente igual (compara o tipo )
 * != - diferente
 * !== - Estritamente diferente
 */

let num1 = 10;
let num2 = 5.75;
let num3 = 10;
let value1 = "10";
let value2 = true;
let value3;
let value4 = null;
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
console.log(typeof value1);
console.log(typeof value2);
console.log(num1 > num2);
console.log(num2 < num3);
console.log(num1 >= num2);
console.log(num2 <= num3);
console.log(num1 !== num3);
console.log(num1 == value1);
console.log(num1 === value1);
console.log(num3 == value1);
console.log(num3 === value1);
console.log(value2);
console.log(!value2);
console.log(value3);
console.log(value4);
