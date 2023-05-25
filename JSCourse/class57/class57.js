"use strict";
class Person {
  constructor(pNome) {
    this.nome = pNome;
  }
}
let p1 = new Person(10);
let p2 = new Person("Megumin");
let p3 = new Person("Erza");
console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);
