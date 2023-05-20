let p_array = document.querySelector("#array");
let btnReduzir = document.querySelector("#btnReduzir");
let resultado = document.querySelector("#resultado");

let elementos_array = [1, 2, 3, 4, 5];
let ant = [];
let atu = [];
p_array.innerHTML = "[ " + elementos_array + " ]";

btnReduzir.addEventListener("click", (evt) => {
  resultado.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
    ant.push(anterior);
    atu.push(atual);
    return atual + anterior;
  });
  resultado.innerHTML += "<br/>Valor anterior: " + ant + "<br/>Valor atual: " + atu;
});

/*
Definição e Uso
O método executa uma função redutora para o elemento de matriz.reduce()

O método retorna um único valor: o resultado acumulado da função.reduce()

O método não executa a função para elementos de matriz vazios.reduce()

O método não altera a matriz original.reduce()

*/
