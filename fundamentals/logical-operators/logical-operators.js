//                                -----------------------Logical operators-------------------

//Что выведет alert (ИЛИ)?
//alert( null || 2 || undefined );//2


//Что выведет alert (И)?
//alert( 1 && null && 2 ); //null


//Что выведет alert (И)?
//alert( alert(1) && alert(2) );  //1 undefined


//Что выведет этот код?
//alert( null || 2 && 3 || 4 );  //3


//Проверка значения из диапазона
let age;
if (age >= 14 && age <= 90) {
  console.log(true)
}


//Проверка значения вне диапазона

let age;
if (age < 14 && age > 90) {
  console.log(true)
}


let age;
if (!(age >= 14 && !age <= 90)) {
  console.log(true)
}



//Вопрос об "if"
/*
if (-1 || 0) alert( 'first' ); // -1, Выполнится.
if (-1 && 0) alert( 'second' ); // 0, alert не выполнится
if (null || -1 && 1) alert( 'third' ); // 1, Выполнится.
*/
// -1 в логическом значении true


//Проверка логина

let login = prompt('введите login', '');

if (login === 'Админ') {

  let password = prompt('введите пароль', '');

  if (password === 'Я главный') {
    alert('Здравствуйте!')
  } else if (password === '' || password === null) {
    alert('Отменено')
  } else {
    alert('Неверный пароль')
  }

} else if (login === '' || login === null) {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
}






