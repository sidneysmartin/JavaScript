"use strict";
const allCourses = [...document.querySelectorAll(".courses")];
const courses1 = [...document.querySelectorAll(".c1")];
const courses2 = [...document.querySelectorAll(".c2")];
const courseEspecial = document.querySelector(".courses");

console.log(allCourses);
console.log(courseEspecial);
console.log(courses1);
console.log(courses2);

courses1.map((el) => {
  el.classList.add("active");
});
