//Faça um Programa que peça as 4 notas bimestrais e mostre a média.
const prompt = require('../node_modules/prompt-sync')();
const sc1 = prompt('1ª nota: ');
const sc2 = prompt('2ª nota: ');
const sc3 = prompt('3ª nota: ');
const sc4 = prompt('4ª nota: ');

let score1 = Number(sc1);
let score2 = Number(sc2);
let score3 = Number(sc3);
let score4 = Number(sc4);

let sum = score1 + score2 + score3 + score4;
let avg = sum / 4;

console.log(`1ª Nota ${score1}`);
console.log(`2ª Nota ${score2}`);
console.log(`3ª Nota ${score3}`);
console.log(`4ª Nota ${score4}`);
console.log(`A soma das notas é: ${sum}`);
console.log(`A média das notas é: ${avg.toString(2)}`);