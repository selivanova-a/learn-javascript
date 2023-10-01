//-------------------------------------------------JSON methods, toJSON-------------------------------------------------

//JSON (JavaScript Object Notation) – это общий формат для представления значений и объектов.

//JSON.stringify для преобразования объектов в JSON.
//JSON.parse для преобразования JSON обратно в объект.

//JSON поддерживает простые объекты, массивы, строки, числа, логические значения и null.

//Если объект имеет метод toJSON, то он вызывается через JSON.stringify.


//----------------------------------------------------Задачи------------------------------------------------------------

//Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
  name: "Василий Иванович",
  age: 35
};

let jsonUser = JSON.stringify(user)
let objectUser = JSON.parse(jsonUser)
// let user2 = JSON.parse(JSON.stringify(user));


//Исключить обратные ссылки
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));