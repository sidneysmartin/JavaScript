"use strict";
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp

/*
Sintaxe
element.addEventListener(event, function, useCapture)
*/

const courses = [...document.querySelectorAll(".courses")];

courses.map((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.add("active");
    console.log(el.innerHTML + " foi ativado.");
  });
});
