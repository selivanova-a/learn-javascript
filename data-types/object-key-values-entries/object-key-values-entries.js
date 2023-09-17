//------------------------------------------Object.keys, values, entries------------------------------------------------

//----------------------------------------------------Задачи------------------------------------------------------------

//Сумма свойств объекта 1
function sumSalaries(salaries) {
  let sumSalaries = 0
  for(let value of Object.values(salaries)) {
    sumSalaries += value
  }
  return sumSalaries
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) );


// Подсчёт количества свойств объекта 2

function count(obj) {
  return Object.keys(obj).length
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) );