/*
Faça um programa que peça o tamanho de um arquivo para download (em MB)
e a velocidade de um link de Internet (em Mbps), calcule e informe o
tempo aproximado de download do arquivo usando este link (em minutos).
*/

const prompt = require("prompt-sync")();
const file = prompt("Informe o tamanho do arquivo (Mb). ");
const Mbps = prompt("Velocidade da internet (Mb). ");
const fileSize = Number(file);
const download = fileSize / Mbps;

console.log(`Tamanho do arquivo. ${fileSize.toFixed(2)}`);
console.log(`Velocidade da Internet. ${download.toFixed(2)}mbp/s.`);
console.log(`Tempo aproximado de download. ${download.toFixed(2)}s`);
