"use strict";
class Carro {
  // Classe Base /  Pai
  constructor(tipo, portas) {
    this.tipo = tipo;
    this.portas = portas;
    this.ligado = false;
    this.vel = 0;
    this.cor = undefined;
  }
  ligar = function () {
    this.ligado = true;
  };
  desligar = function () {
    this.ligado = false;
  };
  setCor = function (cor) {
    this.cor = cor;
  };
}

class Militar extends Carro {
  //Classe Filho
  constructor(tipo, portas, blindagem, munition) {
    super(tipo, portas); // invoca elementos da classe Base
    this.blindagem = blindagem;
    this.munition = munition;
    this.setCor("Verde");
  }
  atirar = function () {
    if (this.munition > 0) {
      this.munition--;
    }
  };
}
class Transporte extends Carro {
  constructor(tipo, portas, lugares) {
    super(tipo, portas);
    this.lugares = lugares;
  }
}

const c1 = new Carro("Normal", 4);

c1.ligar();
c1.setCor("Preto");

const c2 = new Militar("Combate", 2, 100, 50);
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.setCor("Camuflado");
console.log(
  `Tipo: ${c1.tipo}\nPortas: ${c1.portas}\nLigado: ${
    c1.ligado ? "Sim" : "Não"
  }\nVelocidade: ${c1.vel}\nCor: ${c1.cor}\n------------------`
);
console.log(
  `Tipo: ${c2.tipo}\nPortas: ${c2.portas}\nLigado: ${
    c2.ligado ? "Sim" : "Não"
  }\nVelocidade: ${c2.vel}\nMunição: ${c2.munition}\nBlindagem: ${
    c2.blindagem
  }\nCor: ${c2.cor}\n------------------`
);
