"use strict";
//  for - loops através de um bloco de código um número de vezes
// for é um loop definido

/**
Sintaxe
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
 */
let sumValues = () => {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  return sum;
};
let sumEven = () => {
  let sum = 0;
  for (let i = 0; i <= 100; i += 2) {
    // if (i % 2 == 0) {
    sum += i;
    // }
  }
  return sum;
};
let sumOdd = () => {
  let sum = 0;
  for (let i = 1; i <= 100; i += 2) {
    // if (i % 2 == 0) {
    sum += i;
    // }
  }
  return sum;
};

console.log(
  `Soma dos números entre [0:100] = ${sumValues()}\nSoma dos números pares [0:100] = ${sumEven()}\nSoma dos números ímpares entre [1:99] = ${sumOdd()}`
);

// console.log(" ");
// console.log(" ");
// For também pode ser executado dessa maneira, mas não é recomendado, pois basicamente é um while
// const cars = ["BMW", "Volvo", "Audi", "Citroen"];
// let i = 0;

// for (; cars[i]; ) {
//   console.log(cars[i]);
//   i++;
// }
