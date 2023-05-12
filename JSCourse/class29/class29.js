"use strict";
// JavaScript this Keyword
function Student(name, score) {
  this.name = name;
  this.score = score;

  this.dataInfo = function () {
    setTimeout(() => {
      console.log(this.name);
      console.log(this.score);
    }, 2000);
  };
}
const s = new Student("Gustavo", 9.7);
s.dataInfo();
