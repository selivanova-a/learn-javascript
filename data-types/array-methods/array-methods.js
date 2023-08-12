//--------------------------------------------------ARRAY-METHODS-------------------------------------------------------
arr = [1, 2, 4, 5, 6]

/*for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}*/

/*for (let item of arr) {
  console.log(item)
}*/

//Исходный массив
let people = [
  {name: 'Алиса', age: 20, budget: 1000},
  {name: 'Ваня', age: 19, budget: 3000},
  {name: 'Катя', age: 32, budget: 11000},
  {name: 'Василиса', age: 21, budget: 2000},
  {name: 'Елена', age: 17, budget: 11000},
  {name: 'Михаил', age: 15, budget: 2000},
]

//-------------------------------------------forEach
people.forEach(function(person, /*index, pArr - эти параметры редко используются*/){
  console.log(person)
})

//forEach (сокращенная запись)
people.forEach(person => console.log(person))



//----------------------------------------------Map
//Map создаёт новый массив по заданным параметрам

const newPeople = people.map(person => {
  return person.name
})
console.log(newPeople) //['Алиса', 'Ваня', 'Катя', 'Василиса']


const newPeople2 = people.map(person => `${person.name} (${person.age})`)
console.log(newPeople2) //['Алиса (20)', 'Ваня (19)', 'Катя (32)', 'Василиса (21)']



//----------------------------------------------Filter
//Filter фильтрует исходный массив по какому-либо условию
let people = [
  {name: 'Алиса', age: 20, budget: 1000},
  {name: 'Ваня', age: 19, budget: 3000},
  {name: 'Катя', age: 32, budget: 11000},
  {name: 'Василиса', age: 21, budget: 2000},
  {name: 'Елена', age: 17, budget: 11000},
  {name: 'Михаил', age: 15, budget: 2000},
]

const adults = []

/* // Вариант реализации с помощью цикла
for (let i = 0; i <= people.length-1; i++) {
  if (people[i].age >= 18) {
    adults.push(people[i])
  }
}
console.log(adults)*/

const filterPeople = people.filter(person => {
  if(person.age >= 18) {
    return true
  }
})
console.log(filterPeople)

//окращенная версия
const filterPeople2 = people.filter(person => person.age >= 18)
console.log(filterPeople2)



//----------------------------------------------Reduce
// Reduce получаем какое-то финальное значение совершая иттерации по данному массиву


//сумммируем бюджет людей из массива
let people = [
  {name: 'Алиса', age: 20, budget: 1000},
  {name: 'Игорь', age: 19, budget: 3000},
  {name: 'Катя', age: 32, budget: 11000},
  {name: 'Василиса', age: 21, budget: 2000},
  {name: 'Елена', age: 17, budget: 11000},
  {name: 'Михаил', age: 15, budget: 2000},
]

/*let sum = 0
for (let i = 0; i < people.length-1; i++) {
  sum += people[i].budget
}
console.log(sum)*/


const amount = people.reduce((total, person) => {
  return total + person.budget
}, 0)
console.log(amount)

//сокращенный варинат
const amount2 = people.reduce((total, person) => total + person.budget, 0)
console.log(amount2)




//----------------------------------------------Find
//find находим нужный нам элемент по условию
const igor = people.find(person => person.name === 'Игорь')
console.log(igor)


//----------------------------------------------FindIndex
//find находим нужный нам элемент по условию, НО получаем его индекс
const igorIndex = people.findIndex(person => person.name === 'Игорь')
console.log(igorIndex)

//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------Splice
/*
arr.splice(start[, deleteCount, elem1, elemN])
Он изменяет arr начиная с индекса start: удаляет deleteCount элементов
и затем вставляет elem1, elemN на их место. Возвращает массив из удалённых элементов.
*/
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");
alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]



//----------------------------------------------Slice
/*
arr.slice([start], [end])
Он возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end).
start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.
*/
let arr2 = ["t", "e", "s", "t"];
alert( arr2.slice(1, 3) ); // e,s (копирует с 1 до 3)


//----------------------------------------------Concat
/*
arr.concat(arg1, arg2...)
создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
*/
// создать массив из: arr и [3,4] и [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6


//-----------------------------------------------Split
/*
Он разбивает строку на массив по заданному разделителю delim.
let names = 'Вася, Петя, Маша';
let arr = names.split(', ');
*/


//-----------------------------------------------Join
/*
oн создаёт строку из элементов arr, вставляя glue между ними.
let arr = ['Вася', 'Петя', 'Маша'];
let str = arr.join(';'); // объединить массив в строку через ;
alert( str ); // Вася;Петя;Маша
*/


//-------------------------------------------------Array.isArray
//Проверка массив ли это
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true




