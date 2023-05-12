"use strict";
/*
const convertInt = (e) => parseInt(e);
const doubleValues = (e) => e * 2;

let num = ["12", "22", "13", "34", "45"];
console.log(num);
let newNum = num.map(convertInt);
let doubleNum = newNum.map(doubleValues);
console.log(newNum);
console.log(doubleNum);

*/

/*
const courses = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "NodeJs",
  "MySql",
  "ReactJS",
  "ReactNative",
  "NextJs",
];

const stepLearning = courses.map((el, i) => {
  return `${i + 1}º curso - ${el}.`;
});
console.log(stepLearning);
*/

let el = document.getElementsByTagName("div");
el = [...el];
el.map((e, i) => {
  e.innerHTML = "Curso JavaScript";
});
