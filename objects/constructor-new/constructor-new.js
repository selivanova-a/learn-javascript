//---------------------------------------Constructor, operator "new"----------------------------------------------------

//Функция-конструктор
// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна выполняться только с помощью оператора "new".

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

/*
технически любая функция (кроме стрелочных функций, поскольку у них нет this) может использоваться в качестве конструктора.
*/

//Две функции - один объект
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert( a == b ); // true

//Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {
  this.read = function () {
    this.a = +prompt('a', '0')
    this.b = +prompt('b', '0')
  }

  this.sum = function () {
    return this.a + this.b
  }

  this.mul = function () {
    return this.a * this.b
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


//Создайте new Accumulator
function Accumulator(startingValue) {
  this.value = startingValue
  this.read = function () {
    this.value = this.value + +prompt('num', 0)
  }
}
let accumulator = new Accumulator(1);
accumulator.read();
alert(accumulator.value);