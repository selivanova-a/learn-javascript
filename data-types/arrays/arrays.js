//--------------------------------------------------ARRAYS------------------------------------------------------------

//Существует два варианта синтаксиса для создания пустого массива:
// let arr = new Array();
// let arr = [];

//В массиве могут храниться элементы любого типа.

//Массив является объектом и, следовательно, ведёт себя как объект.

//Массив следует считать особой структурой, позволяющей работать с [упорядоченными данными].

//Поледний элемент массива
//arr[arr.length - 1]
//arr.at (-1) -- Новый более лаконичный способ, но может понадобиться полифил

//ОЧЕРЕДЬ
//   push добавляет элемент в конец.
//   shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.

//СТЕК - новые элементы всегда добавляются или удаляются из «конца»
//  push добавляет элемент в конец.
//  pop удаляет последний элемент.

//Методы push/pop(конец массива) выполняются быстро, а методы shift/unshift(начало массива) – медленно.


//Перебор элементов
//цикл for по цифровым индексам:
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
//Цикл for..of не предоставляет доступа к номеру текущего элемента, только к его значению,
// но в большинстве случаев этого достаточно.
let fruits = ["Яблоко", "Апельсин", "Слива"];
for (let fruit of fruits) { // проходит по значениям
  alert( fruit );
}

//--------------------------------------------------Задачи------------------------------------------------------------

//Операции с массивами 1
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let average = Math.floor((styles.length - 1) / 2)
styles[average] = 'Классика'
styles.shift() //alert( styles.shift() );
styles.unshift('Рэп', 'Регги')

//Сумма введённых чисел 2
function sumInput() {
let arrays = []

while (true){
  let input = prompt('Введите число', 0);
  if (input === "" || input === null || !isFinite(input)) break;
  arrays.push(+input)
}

  let sum = 0;
  for (let number of arrays) {
    sum += number;
  }
  return sum;
}
alert( sumInput() );


//Подмассив наибольшей суммы 3                                     ??????????
function getMaxSubSum(arr) {
  let maxSum = 0
  let sum = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      sum += 1
    } else {
      if (maxSum < sum ) maxSum = sum
    }
  }
  return maxSum
}
