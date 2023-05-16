const filterBigger18 = (value) => {
  if (value >= 18) {
    return value;
  }
};

const age = [15, 21, 30, 17, 18, 44, 12, 50];
const bigger = age.filter((val, ind, arr) => {
  if ((val) => 18) {
    return val;
  }
});

const less = age.filter((val, ind, arr) => {
  if (val < 18) {
    return val;
  }
});

console.log(
  `Idades - ${age}\n Maior que 18 - ${bigger}\n Menor que 18 - ${less}`
);
