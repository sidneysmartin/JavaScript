"use strict";
// O parâmetro rest (...) permite que uma função trate um número indefinido de argumentos como um array, por exemplo:
function calcSum(...values) {
  // let res = 0;

  // for (let i = 0; i < values.length; i++) {
  //   res += values[i];
  // }

  // for (let j of values) {
  //   res += j;
  // }

  // for (let j in values) {
  //   res += values[j];
  // }

  let sum = values.reduce((total, value, index, array) => {
    return (total += value);
  });

  return sum;
}
console.log(calcSum(10, 5, 7, 9, 4, 6));
