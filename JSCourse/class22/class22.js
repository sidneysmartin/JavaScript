"use strict";
// JavaScript function parameters
function calcSum(p1, p2) {
  return p1 + p2;
}
function calcDiff(p1, p2) {
  return p1 - p2;
}
function calcMulti(p1 = 0, p2 = 0) {
  return p1 * p2;
}
function calcDiv(p1, p2) {
  return p1 / p2;
}
function calcPow(p1, p2) {
  return p1 ** p2;
}
let n1 = 5,
  n2 = 2;
console.log(`${n1} + ${n2} = ${calcSum(n1, n2)}`);
console.log(`${n1} - ${n2} = ${calcDiff(n1, n2)}`);
console.log(`${n1} * ${n2} = ${calcMulti(n1, n2)}`);
console.log(`${n1} / ${n2} = ${calcDiv(n1, n2)}`);
console.log(`${n1} ${n2} = ${calcPow(n1, n2)}`);
