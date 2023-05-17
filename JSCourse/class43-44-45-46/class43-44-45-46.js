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

const removeSelect = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  cursosSelecionados.map((el) => {
    el.classList.remove("selecionado");
  });
};

const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + index);
  novoElemento.setAttribute("class", "curso c1");

  novoElemento.innerHTML = curso;

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  // const rb = document.createElement("input");
  // rb.setAttribute("type", "radio");
  // rb.setAttribute("name", "rb_curso");

  // comandos.appendChild(rb);
  // novoElemento.appendChild(comandos);

  novoElemento.addEventListener("click", (evt) => {
    removeSelect();
    evt.target.classList.toggle("selecionado");
  });
  return novoElemento;
};

cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el);
  caixaCursos.appendChild(novoElemento);
  index++;
});

const cursoSelecionado = () => {
  const cursoSelecionado = [...document.querySelectorAll(".selecionado")];

  return cursoSelecionado[0];
};

btnCursoSelecionado.addEventListener("click", (evt) => {
  try {
    alert("Curso selecionado: " + cursoSelecionado().innerHTML);
  } catch (err) {
    alert("Selecione um curso.");
  }
});

btnRemoverCurso.addEventListener("click", (evt) => {
  const curso = cursoSelecionado();
  if (curso !== undefined) {
    curso.remove();
  } else {
    alert("Selecione um curso.");
  }
});

previousCourse.addEventListener("click", (evt) => {
  try {
    if (nomeCurso.value != "") {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado());
    } else {
      alert("Digite o nome do curso.");
    }
  } catch (err) {
    alert("Selecione um curso.");
  }
});

nextCourse.addEventListener("click", (evt) => {
  try {
    if (nomeCurso.value != "") {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);
    } else {
      alert("Digite o nome do curso.");
    }
  } catch (err) {
    alert("Selecione um curso.");
  }
});
