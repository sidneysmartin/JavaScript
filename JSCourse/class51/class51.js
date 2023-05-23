const values = [7, 8, 9, 2];
const it_values = values[Symbol.iterator]();

const texts = "YouTube";
const it_texts = texts[Symbol.iterator]();

console.log(values);
console.log(it_values.next()); //{ value: 10, done: false}
console.log(it_values.next()); //{ value: 8, done: false}
console.log(it_values.next()); //{ value: 9, done: false}
console.log(it_values.next()); //{ value: 2, done: false}
console.log(it_values.next()); //{ undefined, done: tue}

console.log(texts);
console.log(it_texts.next()); // {value: 'Y', done: false}
console.log(it_texts.next()); // {value: 'o', done: false}
console.log(it_texts.next()); // {value: 'u', done: false}
console.log(it_texts.next()); // {value: 'T', done: false}
console.log(it_texts.next()); // {value: 'u', done: false}
console.log(it_texts.next()); // {value: 'b', done: false}
console.log(it_texts.next()); // {value: 'e', done: false}
console.log(it_texts.next()); //{ undefined, done: tue}

//Array
//String
//Map
//Sets

/*
Definição e Uso
 Iteradores JavaScript
O protocolo iterador define como produzir uma sequência de valores de um objeto.

Um objeto se torna um iterador quando implementa um método.next()

O método deve retornar um objeto com duas propriedades: next()

value (o próximo valor)
Feito (verdadeiro ou falso)
*/
