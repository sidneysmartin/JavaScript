"use strict";
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
// typeof
// O operador typeof retorna o tipo de um operando.

let v1 = 10;
let v2 = "10";
let v3 = v1 === v2;
let v4 = { user: "Sidney" };
let v5 = new Number(7.65);
const isNumber = (num) => num * num;

class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}

console.log(typeof v1);
console.log(typeof v2);
console.log(typeof v3);
console.log(typeof v4);
console.log(typeof v5);
console.log(typeof isNumber);
const square = new Rectangle(10, 10);
console.log(typeof square);
