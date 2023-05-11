"use strict";
function myFunction(n1, n2) {
  let calc = n1 * n2;
  return console.log(`${n1} * ${n2} = ${calc}`);
}
for (let i = 0; i < 10; i++) {
  myFunction(i, 10);
}

document.querySelector("button").addEventListener("click", () => {
  let d1 = document.getElementById("d1");
  let d2 = document.getElementById("d2");
  let d3 = document.getElementById("d3");
  d1.innerHTML = "HTML";
  d2.innerHTML = "CSS";
  d3.innerHTML = "JAVASCRIPT";
});
