"use strict";
const allCourses = [...document.getElementsByClassName("courses")];
const courses1 = [...document.getElementsByClassName("c1")];
const courses2 = [...document.getElementsByClassName("c2")];
const courseEspecial = document.getElementsByClassName("courses")[0];

console.log(allCourses);
console.log(courses1);
console.log(courses2);
console.log(courseEspecial);

courses1.map((el) => {
  el.classList.add("active");
});
