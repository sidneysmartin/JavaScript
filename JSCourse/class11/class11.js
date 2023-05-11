"use strict";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
/*
let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];
let n3 = [...n1, ...n2];
console.log(`Vetor 1 [${n1}]`);
console.log(`Vetor 2 [${n2}]`);
console.log(`Vetor 3 [${n3}]`);
*/
/*
const player1 = {
  nameChar: "Zend",
  energy: 100,
  classRace: "Mage",
  type: "Fire",
  race: "Human",
  intellect: 1000,
};
const player2 = {
  nameChar: "Seville",
  energy: 100,
  classRace: "Hunter",
  type: "Survive",
  race: "High elf",
  agility: 1000,
};

const player3 = { ...player1, ...player2 };
console.log(player1);
console.log(player2);
console.log(player3);

const sum = (v1, v2, v3) => v1 + v2 + v3;
const values = [11, 13, 17];
console.log(sum(...values));

*/

const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];
console.log(objs1);
console.log(objs2);

objs2.forEach((element) => {
  console.log(element);
  // element.innerHTML = `Curso`;
});
