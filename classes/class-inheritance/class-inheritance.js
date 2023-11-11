//-------------------------------------------Class inheritance---------------------------------------------------------

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} стоит неподвижно.`);
  }
}

let animal = new Animal("Мой питомец");



//создадим class Rabbit, который наследуется от Animal:
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} прячется!`);
  }

  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}


let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.hide(); // Белый кролик прячется!

//У стрелочных функций нет super

//Конструкторы в наследуемых классах должны обязательно вызывать super(...), и (!) делать это перед использованием this..

/*class Rabbit extends Animal {
  // генерируется для классов-потомков, у которых нет своего конструктора
  constructor(...args) {
    super(...args);
  }
}*/

//-----------------------------------------------Tasks-----------------------------------------------------------------

//1 Ошибка создания экземпляра класса
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);




