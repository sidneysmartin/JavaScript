"use strict";
// nested functions (Função aninhadas)

const externalCalcSum = (...values) => {
  const innerCalcSum = (val) => {
    let res = 0;
    /*
    for (let v of val) {
      res += v;
    }
    */
    val.forEach((v) => (res += v));
    return res;
  };
  return innerCalcSum(values);
};

console.log(externalCalcSum(25, 17, 98));
