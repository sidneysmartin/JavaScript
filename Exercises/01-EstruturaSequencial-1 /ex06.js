//Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

const prompt = require('../node_modules/prompt-sync')();
const r = prompt('Informe o raio do círculo. ');
const radius = Number(r);
const area = Math.pow(radius, 2);
console.log(`Raio informado: ${radius}`);
console.log(`Área do círculo: ${area}`);