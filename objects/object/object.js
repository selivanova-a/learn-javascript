//------------------------------------------  Objects  ---------------------------------------------------

/*
     let user = new Object(); // синтаксис "конструктор объекта"
     let user = {};  // синтаксис "литерал объекта"
*/

/*
// получаем свойства объекта:
alert( user.name ); // John
alert( user.age ); // 30

доступ к свойству:

Запись через точку: obj.property.
Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
Дополнительные операторы:

Удаление свойства: delete obj.prop.
Проверка существования свойства: "key" in obj.
Перебор свойств объекта: цикл for for (let key in obj).
*/

//Задачи

//Привет, object
let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Peter'
delete user.name

// Проверка на пустоту
function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}

//Объекты-константы?
const users = {
  name: "John"
};
users.name = "Pete"; // Да, это будет работать

//Сумма свойств объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
for (let key in salaries) {
  sum = sum + salaries[key]
}

alert(sum)


//Умножаем все числовые свойства на 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(object) {
  for (let key in object) {
    if (typeof object[key] === "number") {
      object[key] *= 2
    }
  }
}

