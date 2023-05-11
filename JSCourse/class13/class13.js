"use strict";
// A instrução Switch é usada para executar diferentes ações com base em diferentes condições.
/**

Sintaxe
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
 */

let weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
let week = 0;
switch (week) {
  case 1:
    console.log(weekdays[0]);
    break;
  case 2:
    console.log(weekdays[1]);
    break;
  case 3:
    console.log(weekdays[2]);
    break;
  case 4:
    console.log(weekdays[3]);
    break;
  case 5:
    console.log(weekdays[4]);
    break;
  case 6:
    console.log(weekdays[5]);
    break;
  case 7:
    console.log(weekdays[6]);
    break;
  default:
    console.log("Dia inválido");
    break;
}
