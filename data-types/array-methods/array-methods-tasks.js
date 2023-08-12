//----------------------------------------------------Задачи------------------------------------------------------------

// 1 Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
  let arr = str.split('-')
  let arrUpperCase =  arr.map((item, index) => {
    if (index === 0) {
      return item
    }
    return item[0].toUpperCase() + item.slice(1)
  })
 return arrUpperCase.join('')
}

alert(camelize('my-short-string')) //myShortString



// 2 Фильтрация по диапазону
//let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);


function filterRange(arr, a, b) {
  return arr.filter(item => {
    if (item >= a && item <= b) return true
  })
}

alert( filtered ); // 3,1 (совпадающие значения)
alert( arr );



// 3 Фильтрация по диапазону "на месте" --------------------------------------------------------
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {

  }
}



// 4 Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => a - b).reverse()
alert( arr );



// 5  Скопировать и отсортировать массив
function copySorted(arr) {
  return arr.slice().sort(); //Для копирования массива используем slice()
}



// 6 Создать расширяемый калькулятор ------------------------------------------------------------------------
function Calculator() {
  this.calculate = function(str) {

  }
}



// 7 Трансформировать в массив имён
/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };*/

/*let users = [ vasya, petya, masha ];*/

let names = users.map(person => person.name)

alert( names ); // Вася, Петя, Маша




// 8 Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [ vasya, petya, masha ];

let usersMapped = users.map(person => ({
  fullName: `${person.name} ${person.surname}`,
  id: person.id
}))
  /*
  usersMapped = [
    { fullName: "Вася Пупкин", id: 1 },
    { fullName: "Петя Иванов", id: 2 },
    { fullName: "Маша Петрова", id: 3 }
  ]
  */
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин



// 9 Отсортировать пользователей по возрасту
function sortByAge(users) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1)
}




//