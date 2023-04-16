//                   ----------------------------Conditional branching: if, '?'-----------------------------

// Название JavaScript
let answer = prompt('Какое «официальное» название JavaScript?', '')
if (answer === 'ECMAScript') {
  alert('Верно!')
} else {
  alert('Не знаете? ECMAScript!')
}


//Покажите знак числа
let number = prompt('Ввведите число:', '');
if (number > 0) {
  alert('1')
} else if (number < 0){
  alert('-1')
} else {
  alert('0')
}

//Перепишите 'if' в '?'
// let result;
// result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите 'if..else' в '?'
let message;
let login = prompt('Введите login')

message = (login === 'Сотрудник') ?
  'Привет':
  (login === 'Директор') ?
    'Здравствуйте':
    (login === '') ?
      'Нет логина':
      '';





