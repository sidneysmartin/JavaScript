"use strict";
const f_nome = document.querySelector("#f_nome");
const f_portas = document.querySelector("#f_portas");
const f_tipoMilitar = document.querySelector("#f_tipoMilitar");
const f_tipoNormal = document.querySelector("#f_tipoNormal");
const f_blindagem = document.querySelector("#f_blindagem");
const f_munition = document.querySelector("#f_munition");
const carros = document.querySelector("#carros");
const btn_addCarro = document.querySelector("#btn_addCarro");

let arrayCars = [];

f_tipoMilitar.addEventListener("click", (e) => {
  f_nome.value = "";
  f_portas.value = 0;
  f_blindagem.value = 0;
  f_munition.value = 0;
  f_blindagem.removeAttribute("disabled");
  f_munition.removeAttribute("disabled");
});
f_tipoNormal.addEventListener("click", (e) => {
  f_blindagem.setAttribute("disabled", "disabled");
  f_munition.setAttribute("disabled", "disabled");
  f_blindagem.value = 0;
  f_munition.value = 0;
});

const gerenciarExibirCarros = () => {
  carros.innerHTML = "";
  arrayCars.forEach((c) => {
    const div = document.createElement("div");
    div.setAttribute("class", "carro");
    div.innerHTML = `Nome: ${c.nome}<br/>`;
    div.innerHTML += `Portas: ${c.portas}<br/>`;
    div.innerHTML += `Cor: ${c.cor}<br/>`;
    div.innerHTML += `Blindagem: ${c.blindagem}<br/>`;
    div.innerHTML += `Munição: ${c.munition}<br/>`;
    carros.appendChild(div);
  });
};
btn_addCarro.addEventListener("click", (e) => {
  if (f_tipoNormal.checked) {
    const c = new Carro(f_nome.value, f_portas.value);
    arrayCars.push(c);
  } else {
    const m = new Militar(
      f_nome.value,
      f_portas.value,
      f_blindagem.value,
      f_munition.value
    );
    arrayCars.push(m);
  }
  gerenciarExibirCarros();
});

class Carro {
  // Classe Base /  Pai
  constructor(nome, portas) {
    this.nome = nome;
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
  constructor(nome, portas, blindagem, munition) {
    super(nome, portas); // invoca elementos da classe Base
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
  constructor(nome, portas, lugares) {
    super(nome, portas);
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
  `Tipo: ${c1.nome}\nPortas: ${c1.portas}\nLigado: ${
    c1.ligado ? "Sim" : "Não"
  }\nVelocidade: ${c1.vel}\nCor: ${c1.cor}\n------------------`
);
console.log(
  `Tipo: ${c2.nome}\nPortas: ${c2.portas}\nLigado: ${
    c2.ligado ? "Sim" : "Não"
  }\nVelocidade: ${c2.vel}\nMunição: ${c2.munition}\nBlindagem: ${
    c2.blindagem
  }\nCor: ${c2.cor}\n------------------`
);
