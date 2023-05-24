"use strict";
const caixa = document.querySelector("#caixa");

const language = "JavaScript";
const backend = "NodeJS";
const framework = "ReactJS";
// const phrase =
//   "Frontend " +
//   language +
//   ", backend  " +
//   backend +
//   " e o framework " +
//   framework +
//   ".";
const phrase = `Para o frontend o ${language}, para o backend o ${backend} e como framework ${framework}.`;
console.log(phrase);
caixa.innerHTML = phrase;
