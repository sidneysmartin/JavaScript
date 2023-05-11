/*
Tendo como dados de entrada a altura de uma pessoa (em metros), construa um algoritmo
que calcule seu peso ideal, usando a seguinte fórmula:
a. Para homens: (72.7*altura) - 58
b. Para mulheres: (62.1*h) - 44.7
*/

const prompt = require("prompt-sync")();
const h = prompt("Informe a altura(em metros). ");
const height = Number(h);

const weightM = 72.7 * height - 58;
const weightF = 62.1 * height - 44.7;
console.log(`Peso ideal Homem: ${weightM.toFixed()}`);
console.log(`Peso ideal Mulher: ${weightF.toFixed()}`);
