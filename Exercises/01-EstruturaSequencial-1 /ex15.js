/*
Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
Calcule e mostre o totalWage do seu salário no referido mês, sabendo-se que são descontados:
11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

a. salário bruto.
b. quanto pagou ao INSS.
c. quanto pagou ao sindicato.
d. o salário líquido.
e. calcule os descontos e o salário líquido, conforme a tabela abaixo:

-- salário bruto.
-- quanto pagou ao IR 5%.
-- quanto pagou ao INSS 11%.
-- quanto pagou ao sindicato.
-- o salário líquido.
-- calcule os descontos e o salário líquido, conforme a tabela abaixo:
-- Obs.: Salário Bruto - Descontos = Salário Líquido.
*/

const prompt = require('../node_modules/prompt-sync')();
const h = prompt('Salário hora. ');
const w = prompt('Horas trabalhadas. ');
const hour = Number(h);
const worked = Number(w);

const totalWage = hour * worked;
const ir = (totalWage * 11) / 100;
const inss = (totalWage * 8) / 100;
const syndicate = (totalWage * 5) / 100;
const finalWage = totalWage - ir - inss - syndicate;

console.log(`=======Salário Mensal=======`);
console.log(
    `Bruto: ____________________ ${totalWage.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})}`
);
console.log(
    `IR -(11%)__________________  ${ir.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})}`
);
console.log(
    `INSS - (5%)________________  ${inss.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})}`
);
console.log(
    `Sindicato:(5%)_____________  ${syndicate.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})}`
);
console.log(
    `Líquido.___________________  ${finalWage.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})}`
);