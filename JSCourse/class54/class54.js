"use strict";
const caixa = document.querySelector("#caixa");

let mapa = new Map();

mapa.set("curso", "Javascript");
mapa.set(10, "Learning Programming");
mapa.set(13.9878, 100);
mapa.set("canal", 100);

mapa.delete("canal");
console.log(mapa);
let pes = 10;
let res = "";

if (mapa.has(pes)) {
  res = "A chave existe na coleção com o valor " + mapa.get(pes);
} else {
  res = "A chave não existe na coleção";
}
res += "<br/> O tamanho da coleção é " + mapa.size;
caixa.innerHTML = res;

mapa.forEach((el) => {
  console.log(el);
});
