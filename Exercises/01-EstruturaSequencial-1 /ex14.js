/*
João Papo-de-Pescador, homem de bem, comprou um microcomputador 
para controlar o rendimento diário de seu trabalho. 
Toda vez que ele traz um peso de peixes maior que o estabelecido
pelo regulamento de pesca do estado de São Paulo (50 quilos)
deve pagar uma multa de R$ 4,00 por quilo excedente. 
João precisa que você faça um programa que
leia a variável peso (peso de peixes) e calcule o excesso. 
Gravar na variável excesso a quantidade de quilos
além do limite e na variável multa o valor da multa que João deverá pagar. 
Imprima os dados do programa com as mensagens adequadas.
*/

const prompt = require('../node_modules/prompt-sync')();
const fW = prompt('Peso do pescado. ');
const fishWeight = Number(fW);

if (fishWeight < 50) {
    console.log('Não haverá taxação.');
    console.log(`Peso do peixe. ${fishWeight.toFixed(2)}kg.`);
} else {
    const excess = fishWeight - 50;
    const tx = excess * 4;

    console.log(`Peso do peixe. ${fishWeight.toFixed(2)}kg.`);
    console.log(`Excesso de peso. ${excess.toFixed(2)}kg.`);
    console.log(
        `Valor da Multa. ${tx.toLocaleString('pt-br', {
			style: 'currency',
			currency: 'BRL',
		})}`
    );
}