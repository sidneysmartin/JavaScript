//Faça um Programa que converta metros para centímetros.

const prompt = require('../node_modules/prompt-sync')();
const m = prompt('Informe o tamanho em metros. ');

const meters = Number(m);

const centimeters = meters * 100;
console.log(`Metros - ${meters} m.`);
console.log(`Centímetros - ${centimeters} c.`);