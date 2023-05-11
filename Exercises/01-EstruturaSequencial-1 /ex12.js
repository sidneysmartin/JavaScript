/*
Tendo como dados de entrada a altura de uma pessoa (em metros), construa um algoritmo que calcule seu peso ideal, 
usando a seguinte fórmula: (72.7*altura) - 58
*/

const prompt = require('../node_modules/prompt-sync')();
const h = prompt('Informe a altura. ');

const height = Number(h);
const weight = 72.7 * height - 58;
console.log(`Altura. ${height.toFixed(2)}`);
console.log(`Peso. ${weight.toFixed(2)}`);