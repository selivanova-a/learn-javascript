//--------------------------------------------------Function object, NFE------------------------------------------------


//Task #1

function makeCounter() {

  counter.count = 0;

  function counter() {
    return counter.count++;
  }

  counter.set = (number) => {
    return counter.count = number;
  }

  counter.decrease = () => {
    return counter.count--;
  }


  return counter;
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
counter.set(10); // установить новое значение счётчика
alert( counter() ); // 10
counter.decrease(); // уменьшить значение счётчика на 1
alert( counter() ); // 10 (вместо 11)