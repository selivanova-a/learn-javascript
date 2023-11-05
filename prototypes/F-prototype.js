//---------------------------------------------------F.prototype--------------------------------------------------------

//1 Изменяем "prototype"

/*function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
let rabbit = new Rabbit();
alert( rabbit.eats ); // true*/


/*function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
let rabbit = new Rabbit();
Rabbit.prototype = {};
alert( rabbit.eats ); // true*/


/*function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
let rabbit = new Rabbit();
Rabbit.prototype.eats = false;
alert( rabbit.eats ); // false*/


/*function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
let rabbit = new Rabbit();
delete rabbit.eats;
alert( rabbit.eats ); // true*/


/*function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
let rabbit = new Rabbit();
delete Rabbit.prototype.eats;
alert( rabbit.eats ); // undefined*/




