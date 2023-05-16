const caixaCursos = document.querySelector("#caixaCursos");
const btnC = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const nomeCurso = document.querySelector("#nomeCurso");
const previousCourse = document.getElementById("btnAdicionarNovoCursoAntes");
const nextCourse = document.getElementById("btnAdicionarNovoCursoDepois");
const cursos = [
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "React",
  "MySQL",
  "ReactNative",
];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.querySelector("#btnRemoverCurso");

let index = 0;

const criarNovoCurso = (el, curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + index);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  const rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso");

  comandos.appendChild(rb);
  novoElemento.appendChild(comandos);
  return novoElemento;
};

cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el);
  caixaCursos.appendChild(novoElemento);
  index++;
});

const radioSelecionado = () => {
  const todosRadios = [...document.querySelectorAll("input[type=radio]")];
  let radioSelecionado = todosRadios.filter((ele, ind, arr) => {
    return ele.checked;
  });

  return radioSelecionado[0];
};

btnCursoSelecionado.addEventListener("click", (evt) => {
  const rs = radioSelecionado();
  try {
    const cursoSelecionado = rs.parentNode.previousSibling.textContent;
    alert("Curso selecionado: " + cursoSelecionado);
  } catch (err) {
    alert("Selecione um curso.");
  }
});

btnRemoverCurso.addEventListener("click", (evt) => {
  const rs = radioSelecionado();
  if (rs !== undefined) {
    const cursoSelecionado = rs.parentNode.parentNode;
    cursoSelecionado.remove();
  } else {
    alert("Selecione um curso.");
  }
});

previousCourse.addEventListener("click", (evt) => {
  const rs = radioSelecionado();
  try {
    if (nomeCurso.value != "") {
      const cursoSelecionado = rs.parentNode.parentNode;
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado);
    } else {
      alert("Digite o nome do curso.");
    }
  } catch (err) {
    alert("Selecione um curso.");
  }
});

nextCourse.addEventListener("click", (evt) => {
  const rs = radioSelecionado();
  try {
    if (nomeCurso.value != "") {
      const cursoSelecionado = rs.parentNode.parentNode;
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling);
    } else {
      alert("Digite o nome do curso.");
    }
  } catch (err) {
    alert("Selecione um curso.");
  }
});
