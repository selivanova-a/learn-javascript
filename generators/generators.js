//-------------------------------------------------Generators-----------------------------------------------------------


function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
let one = generator.next();
alert(JSON.stringify(one)); // {value: 1, done: false}


/*
Генераторы создаются при помощи функций-генераторов function* f(…) {…}.
Внутри генераторов и только внутри них существует оператор yield.
Внешний код и генератор обмениваются промежуточными результатами посредством вызовов next/yield.
*/

//Псевдослучайный генератор

function* pseudoRandom(seed) {
  let number = seed;

  while(true) {
    number = number * 16807 % 2147483647
    yield number;
  }
}

let generator = pseudoRandom(1);
