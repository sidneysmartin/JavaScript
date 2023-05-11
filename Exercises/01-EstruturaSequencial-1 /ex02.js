/*
Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
*/

const prompt = require("../node_modules/prompt-sync")();
let read;
read = prompt("Digite um valor: ");
console.log(`O valor informando - ${read}`);
