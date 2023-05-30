"use strict";
class Car {
  constructor(pName, pTipo) {
    this.name = pName;
    if (pTipo === 1) {
      this.tipo = "Sedan";
      this.velMax = 200;
    } else if (pTipo === 2) {
      this.tipo = "SUV";
      this.velMax = 180;
    } else if (pTipo === 3) {
      this.tipo = "Hatch";
      this.velMax = 160;
    } else {
      this.tipo = "Ônibus";
      this.velMax = 80;
    }
  }

  getName() {
    return this.name;
  }
  getTipo() {
    return this.tipo;
  }
  getVelMax() {
    return this.velMax;
  }
  //retornando em array
  getInfo() {
    return [this.name, this.tipo, this.velMax];
  }
  setName(name) {
    this.name = name;
  }
  setTipo(tipo) {
    this.tipo = tipo;
  }
  setVelMax(velMax) {
    this.velMax = velMax;
  }
  info() {
    console.log(
      `Modelo: ${this.name}\nTipo: ${this.tipo}\nVelocidade Máxima: ${this.velMax} km/h\n---------------------------`
    );
  }
}
let c1 = new Car("Voyage", 1);
let c2 = new Car("Argo", 3);
let c3 = new Car("Volvo");

/*
console.log(c1.name, c1.tipo, c1.velMax);
console.log(c2.name, c2.tipo, c2.velMax);
console.log(c3.name, c3.tipo, c3.velMax);
*/
// console.log(c1.getInfo()[0]);
c2.setName("Nivus");
c1.info();
c2.info();
c3.info();
