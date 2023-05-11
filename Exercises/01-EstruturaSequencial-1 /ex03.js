//Faça um Programa que peça dois números e imprima a soma.

const prompt = require('../node_modules/prompt-sync')();
const n1 = prompt('Digite o 1º valor: ');
const n2 = prompt('Digite o 2º valor: ');
let num1 = Number(n1);
let num2 = Number(n2);
let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);