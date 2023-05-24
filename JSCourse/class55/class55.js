"use strict";
const caixa = document.querySelector("#caixa");
//Não permite entrada duplicada de valores
let songs = new Set(["musica1", "musica boa", "musica10"]);

songs.add("musica muito legal");
songs.add("musica1");
songs.add("musica1");
songs.add("musica10");
console.log(songs);
songs.forEach((el) => (caixa.innerHTML += el + "<br/>"));
