//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
const prompt = require('../node_modules/prompt-sync')();
const w = prompt('Informe o lado do Quadrado. ');

const width = Number(w);
const area = width * width;
const doubleArea = area * 2;

console.log(`Lado - ${width}.`);
console.log(`Área - ${area}m².`);
console.log(`Dobro Área - ${doubleArea}m.`);