/*
Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho 
em metros quadrados da área a ser pintada. 
Considere que a cobertura 
da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é 
vendida em latas de 18 litros, que custam R$ 80,00. 
Informe ao usuário a quantidades de latas de tinta
a serem compradas e o preço total.
*/

const readline = require('../node_modules/prompt-sync')();
const aSize = readline('Tamanho da área. ');
const areaSize = Number(aSize);

const liters = areaSize / 3;
const canOfPaint = Math.ceil(liters) / 18;
const pricePaint = Math.ceil(canOfPaint) * 80;

console.log(`Tamanho da área pintada. ${areaSize.toFixed(2)}m²`);
console.log(`Total de latas. ${Math.ceil(canOfPaint.toFixed(3))}`);
console.log(
    `Preço final. ${pricePaint.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})}`
);