"use strict";
let i = 0;
let max = 1000;
let odd = 0;
// while (i < max) {
//   console.log(`Valor - ${i}`);
//   if (i > 10) {
//     break;
//   }
//   i++;
// }

for (let i = n; i <= max; i++) {
  if (i % 2 == 0) {
    continue;
  }
  odd++;
}
console.log(`Quantidade de músicas: ${odd}`);
console.log("Fim do programa!");
