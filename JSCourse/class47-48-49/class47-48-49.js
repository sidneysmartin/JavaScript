let p_array = document.querySelector("#array");
let btnVerificar = document.querySelector("#btnVerificar");
let resultado = document.querySelector("#resultado");

let elementos_array = [11, 12, 13, 25, 16, 17, 14, 13, 15];
p_array.innerHTML = "[ " + elementos_array + " ]";

btnVerificar.addEventListener("click", (evt) => {
  const ret = elementos_array.some((e, i) => {
    if (e < 18) {
      resultado.innerHTML = `Array não correspondente na posição ${i}`;
    }
    return e >= 18;
  });
  if (ret) {
    resultado.innerHTML = "Array OK";
  }
});

/*
Definição e Uso
O método verifica se algum elemento de matriz passa em um teste (fornecido como uma função de retorno de chamada).some()

O método executa a função de retorno de chamada uma vez para cada elemento de matriz.some()

O método retorna (e para) se a função retorna para um dos elementos da matriz.some()true true

O método retorna se a função retorna para todos os elementos da matriz.some()false false

O método não executa a função para elementos de matriz vazios.some()

O método não altera a matriz original.some()

*/
