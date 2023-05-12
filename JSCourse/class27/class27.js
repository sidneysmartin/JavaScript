"use strict";

// sintaxe

// function*
// A declaração function* (palavra chave function seguida de um asterisco) define uma função geradora
//(generator function), que retorna um objeto Generator.
/*
function* myFunction() {
  * Corpo da função geradora
  yield valor;
 *  Mais código...
}

*/

/*
  const myFunction = function* (){
   * Corpo da função geradora
  yield valor;
  * Mais código
  }

*/
// function* colors() {
//   yield "Vermelho";
//   yield "Verde";
//   yield "Azul";
// }

// const itc = colors();
// console.log(itc.next().value);

// function* questions() {
//   const name = yield "Qual o seu nome? ";
//   const sport = yield "Qual o seu esporte favorito? ";
//   return `Seu nome é ${name}, seu esporte favorito é ${sport}`;
// }

// const iterator = questions();
// console.log(iterator.next().value);
// console.log(iterator.next("Sidney").value);
// console.log(iterator.next("Jui-Jitsu").value);

function* count() {
  let i = 0;
  while (true) {
    yield i++;
    if (i > 17) {
      break;
    }
  }
}
const itc = count();
for (let i of itc) {
  console.log(i);
}
