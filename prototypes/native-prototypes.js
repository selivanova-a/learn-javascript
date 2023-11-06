//------------------------------------------------Native prototypes ----------------------------------------------------

// 1 Добавить функциям метод "f.defer(ms)"

/*Function.prototype.defer = function (ms) {
  setTimeout(this, ms)
}

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду*/


//Добавьте функциям декорирующий метод "defer()"

/*
Function.prototype.defer = function () {

}

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.*/
