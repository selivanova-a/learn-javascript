//-------------------------------------------------Class checking: "instanceof"-----------------------------------------

// Оператор вернёт true, если obj принадлежит классу Class или наследующему от него.

class Rabbit {}
let rabbit = new Rabbit();

// это объект класса Rabbit?
alert( rabbit instanceof Rabbit ); // true

//Также это работает с функциями-конструкторами:

// вместо класса
function Rabbit() {}
alert( new Rabbit() instanceof Rabbit ); // true

//И для встроенных классов, таких как Array:

let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true

// Как мы можем видеть, технически {}.toString «более продвинут», чем typeof.

//А оператор instanceof – отличный выбор, когда мы работаем с иерархией классов и хотим делать проверки с учётом наследования.

//---- Задача

//Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().
//Ответ: Потому что функции путсые и их прототипы равны
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
//Таким образом, по логике instanceof, именно prototype в действительности определяет тип, а не функция-конструктор.