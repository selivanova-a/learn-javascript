//---------------------------------------------------MAP SET------------------------------------------------------------

//Map
/*
Map – это коллекция ключ/значение, как и Object. Но основное отличие в том,
  что Map позволяет использовать ключи любого типа.*/


//Перебор Map

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
  alert(entry); // огурец,500 (и так далее)
}


//Set
/*
Объект Set – это особый вид коллекции: «множество» значений (без ключей),
где каждое значение может появляться только один раз.*/

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
alert(set.size); // 3



//--------------------------------------------------Задачи------------------------------------------------------------

//Фильтрация уникальных элементов массива  1
function unique(arr) {
  return(Array.from(new Set(arr)))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(values) );


//Отфильтруйте анаграммы 2
function aclean(arr) {
  let map = new Map()

  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
  }

  return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );



// Перебираемые ключи   3
//Потому что метод push аботает только с массивами, нужно превратить итерируемый объект в массив
//let keys = Array.from(map.keys());