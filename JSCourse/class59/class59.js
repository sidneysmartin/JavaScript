"use strict";
class Person {
  constructor(pName, pIdade) {
    this.name = pName;
    this.idade = pIdade;
  }
  getName() {
    return this.name;
  }
  getIdade() {
    return this.idade;
  }
  setName(nome) {
    this.name = name;
  }
  setIdade(idade) {
    this.idade = idade;
  }
  info() {
    console.log(
      `Modelo: ${this.name}\nIdade: ${this.idade}\n---------------------------`
    );
  }
}
let people = [];

const btnAdd = document.querySelector("#btnAdd");
const res = document.querySelector("#res");
// cira pessoa dinamicamente.
const addPerson = (evt) => {
  res.innerHTML = ""; //Limpa o elemento antes de adicionar
  people.map((p) => {
    const div = document.createElement("div");
    div.setAttribute("class", "pessoa");
    div.innerHTML = `Nome: ${p.getName()}<br/>Idade:${p.getIdade()}`;
    res.appendChild(div);
  });
};

btnAdd.addEventListener("click", () => {
  const name = document.querySelector("#f_nome");
  const idade = document.querySelector("#f_idade");
  const p = new Person(name.value, idade.value);
  people.push(p);
  //Limpa os campos
  name.value = "";
  idade.value = "";
  name.focus();
  addPerson();
  console.log(people);
});
