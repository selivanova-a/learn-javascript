//--------------------------------------------Recursion and stack-------------------------------------------------------

//Рекурсия – это термин в программировании, означающий вызов функцией самой себя.

//Рекурсивно определяемая структура данных – это структура данных, которая может быть определена с использованием самой себя.

//Factorial
// !4 = 4 * 3 * 2 * 1
// !0 = 1

function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial( n - 1)
  }
}
console.log(factorial(4))

//Fibonacci
//fibonacci(0) -> 0
//fibonacci(1) -> 1
//fibonacci(n) -> fibonacci(n-1) + fibonacci(n-2), n > 1

function fibonacci(n) {
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n-1) + fibonacci(n-2)
  }
}
console.log(fibonacci(6))
// Алгоритм работает очень медленно!


// Pow
//pow(0, 0) -> 1
//pow(1,1) -> 1
//pow(2, 2) -> 4
function pow(x, n) {
  if (n === 0) {
    return 1
  } else {
    return x * pow(x, n-1)
  }
}
console.log(pow(2,2))



//Вычислить сумму чисел до данного
//sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6

// Рекурсивное решение
function sumTo(n) {
  return n === 1 ? 1 : n + sumTo(n-1)
}
console.log( sumTo(100) ); // 5050

//Решение циклом
function sumTo2(n) {
  let num = n
  for (let i = 0; i < n; i++) {
    num += i
  }
  return num
}
console.log( sumTo2(100) ); // 5050


//Вывод односвязного списка
//Напишите функцию printList(list), которая выводит элементы списка по одному.
function printList(list) {
  alert(list.value); // выводим текущий элемент
  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }

}
printList(list);
