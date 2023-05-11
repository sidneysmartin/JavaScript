/*
Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
Calcule e mostre o total do seu salário no referido mês.
*/

const prompt = require('../node_modules/prompt-sync')();
const hs = prompt('Horas trabalhadas. ');
const w = prompt('Valor Hora. ');

const hours = Number(hs);
const wageH = Number(w);
const wage = hours * wageH;
console.log('=====*=====');
console.log(`Horas trabalhadas - ${hours}`);
console.log(
    `Salário hora - ${wageH.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})}`
);
console.log(
    `Salário final - ${wage.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})}`
);