/*
Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
Celsius into/para Fahrenheit: (oC x 9) / 5) + 32
*/

const prompt = require('prompt-sync')();
const value = prompt('Informe a temperatura Celsius. ');

const c = Number(value);
const f = (c * 9) / 5 + 32;

console.log(`Celsius. ${c.toFixed(2)}`);
console.log(`Fahrenheit. ${f.toFixed(2)}`);