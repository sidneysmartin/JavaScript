/*
Faça um Programa que peça 2 números inteiros e um número real. 
Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo.
*/
const prompt = require('../node_modules/prompt-sync')();
const n1 = prompt('Informe o 1º valor. ');
const n2 = prompt('Informe o 2º valor. ');
const n3 = prompt('Informe o 3º valor. ');

const num1 = Number(n1);
const num2 = Number(n2);
const num3 = Number(n3);

const answer1 = (num1 * 2) / num2;
const answer2 = num1 * 3 + num3;
const answer3 = Math.pow(num3, 3);

console.log(
    `O produto do dobro do primeiro com metade do segundo. ${answer1.toFixed(2)}`
);
console.log(
    `A soma do triplo do primeiro com o terceiro. ${answer2.toFixed(2)}`
);
console.log(`O terceiro elevado ao cubo. ${answer3.toFixed(2)}`);