// ----------------------------------------------Object methods, "this"------------------------------------------------

/*
Функции, которые находятся в свойствах объекта, называются «методами».
Методы позволяют объектам «действовать»: object.doSomething().
Методы могут ссылаться на объект через this.
*/

//Использование "this" в литерале объекта

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();
alert( user.ref.name ); // выдаст Ошибку

//Создайте калькулятор

let calculator = {
  read() {
    this.number1 = +prompt('число1 ', '0');
    this.number2 = +prompt('число2 ', '0');
  },
  sum() {
    return this.number1 + this.number2
  },
  mul() {
    return this.number1 * this.number2
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//Цепь вызовов

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();




