"use strict";
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp

/*
Sintaxe
element.addEventListener(event, function, useCapture)
*/
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const btn = document.querySelector("#btnTransfer");
const courses = [...document.querySelectorAll(".courses")];

courses.map((el) => {
  el.addEventListener("click", (evt) => {
    const course = evt.target;
    console.log(course);
    course.classList.toggle("selected");
  });
});

btn.addEventListener("click", () => {
  const coursesSelected = [...document.querySelectorAll(".selected")];
  const coursesNotSelected = [
    ...document.querySelectorAll(".courses:not(.selected)"),
  ];

  coursesSelected.map((el) => {
    box2.appendChild(el);
  });

  coursesNotSelected.map((el) => box1.appendChild(el));
});
