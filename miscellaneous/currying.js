//-----------------------------------------------Currying---------------------------------------------------------------
/*Каррирование – это трансформация, которая превращает вызов f(a, b, c) в f(a)(b)(c).
В JavaScript реализация обычно позволяет вызывать функцию обоими вариантами: либо нормально,
либо возвращает частично применённую функцию, если количество аргументов недостаточно.*/


//Приём, который позволяет вызвать функцию частично

function sum(a, b, c) {
  return a + b + c;
}

function multi(a, b, c) {
  return a * b * c;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }

    return curried.bind(this, ...args)

    // return function test(...newArgs) {
    //   return curried.apply(this, args.concat(newArgs))
    // }
  }
}

const curriedSum = curry(sum);
const curriedMulti = curry(multi);

console.log(curriedSum(2, 3, 4))
console.log(curriedSum(2)(3)(4))
console.log(curriedSum(2,3)(4))


/*
curriedSum(2, 3, 4) => 9
curriedSum(2)(3)(4) => 9
curriedSum(2,3)(4) => 9
*/
