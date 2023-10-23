//-----------------------------------------------Function binding-------------------------------------------------------

/*
Метод bind возвращает «привязанный вариант» функции func, фиксируя контекст this и первые аргументы arg1, arg2…,
если они заданы.*/

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10

/*
Обычно bind применяется для фиксации this в методе объекта, чтобы передать его в качестве колбэка.
  Например, для setTimeout.*/

let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};

let sayHi = user.sayHi.bind(user); // (*)

sayHi(); // Привет, Вася!
setTimeout(sayHi, 1000); // Привет, Вася!


//Когда мы привязываем аргументы, такая функция называется «частично применённой» или «частичной».


// Task 1 Что выведет функция?
function f() {
  alert( this ); // null
}

let user = {
  g: f.bind(null)
};

user.g();



// Task 2
/*Можем ли мы изменить this дополнительным связыванием?
Что выведет этот код?*/

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
f(); // Вася
//Можно сделать новую привязку, но нельзя изменить существующую.


//Task 3
//В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему? undefined, bind вщзвращает новый объект


// Task 4
//Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Task 5
//Использование частично применённой функции для логина
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));

