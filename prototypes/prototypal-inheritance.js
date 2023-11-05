//------------------------------------------------Prototypal inheritance------------------------------------------------

//------------------------------------------------Задачи---------------------------------------------------------------

// 1 Работа с прототипами

/*
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1) true

delete rabbit.jumps;
alert( rabbit.jumps ); // ? (2) null

delete animal.jumps;
alert( rabbit.jumps ); // ? (3) undefined
*/


// 2 Алгоритм поиска

let head = {
  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};

console.log(pockets.pen) //3
console.log(bed.glasses) //1


// 3 Куда будет произведена запись?
//Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

//ответ: свойство получит rabbit, из-за значения this


//4 Почему наедаются оба хомяка?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple


