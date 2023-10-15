//-----------------------------------------------Variable scope, closure------------------------------------------------

//---------------------------------------------------Задачи-------------------------------------------------------------

//Учитывает ли функция последние изменения?
//Да, учитывается, ведь переменная была переопределена


//Какие переменные доступны?
/*function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}
let name = "John";
// создаём функцию
let work = makeWorker();
// вызываем её
work(); // что будет показано?
//Ответ: Pete*/



//Независимы ли счётчики?
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}
let counter = makeCounter();
let counter2 = makeCounter();
/*alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?  -> 0
alert( counter2() ); // ?  -> 1*/
//Ответ: счётчики независимы



// Функция внутри if
// Ошибка: Функция sayHi объявлена внутри if, так что она живёт только внутри этого блока. Снаружи нет sayHi.


//Сумма с помощью замыканий
function sum(a) {
  return function (b) {
    return a + b
  }
}
console.log(sum(1)(2))



//Видна ли переменная?
let x = 1;
function func() {
  console.log(x); // ?
  let x = 2;
}
func(); // переменная неинициализированна, следовательно ошибка



//Сортировать по полю
function byField(fieldName) {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}