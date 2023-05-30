"use strict";

const Person = {
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.idade;
  },
  setName: function (name) {
    this.name = name;
  },
  setIdade: function (idade) {
    this.idade = idade;
  },
};

const people = [];

const addPerson = () => {
  const name = document.querySelector("#f_nome").value;
  const idade = document.querySelector("#f_idade").value;

  const person = Object.create(Person);
  person.setName(name);
  person.setIdade(idade);

  people.push(person);

  const div = document.createElement("div");
  div.setAttribute("class", "pessoa");
  document.querySelector("#res").appendChild(div);
  div.innerHTML = `Nome: ${person.getName()}<br/>Idade: ${person.getAge()}`;

  document.querySelector("#f_nome").value = "";
  document.querySelector("#f_idade").value = "";
  document.querySelector("#f_nome").focus();
};

document.querySelector("#btnAdd").addEventListener("click", addPerson);
