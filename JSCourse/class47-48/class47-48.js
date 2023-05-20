let p_array = document.querySelector("#array");
let btnVerificar = document.querySelector("#btnVerificar");
let resultado = document.querySelector("#resultado");

let elementos_array = [21, 25, 19, 20, 16, 18, 22];
p_array.innerHTML = "[ " + elementos_array + " ]";

btnVerificar.addEventListener("click", (evt) => {
  const ret = elementos_array.every((e, i) => {
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
O every()método executa uma função para cada elemento do array.

O every()método retorna true se a função retornar true para todos os elementos.

O every()método retorna false se a função retornar false para um elemento.

O every()método não executa a função para elementos vazios.

O every()método não altera o array original

*/
