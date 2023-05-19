let p_array = document.querySelector("#array");
let txt_pesquisar = document.querySelector("#txt_pesquisar");
let btnPesquisar = document.querySelector("#btnPesquisar");
let resultado = document.querySelector("#resultado");

let elementos_array = ["html", "css", "javascript"];
p_array.innerHTML = "[ " + elementos_array + " ]";

btnPesquisar.addEventListener("click", (evt) => {
  resultado.innerHTML = "Valor não encontrado";

  const ret = elementos_array.find((e, i) => {
    if (e.toUpperCase() === txt_pesquisar.value.toUpperCase()) {
      resultado.innerHTML = "Valor encontrado " + e + " na posição " + i;
      return e;
    }
  });
  txt_pesquisar.value = ""
  console.log(ret);
});
