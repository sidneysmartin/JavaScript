/*
Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9).
*/
const prompt = require("../node_modules/prompt-sync")();
const temp = prompt("Informe a temperatura. ");

const f = Number(temp);
const celsius = 5 * ((f - 32) / 9);
console.log(`Temperatura Fahrenheit. ${f.toFixed()}F°`);
console.log(`Temperatura Celsius. ${celsius.toFixed()}C°`);
