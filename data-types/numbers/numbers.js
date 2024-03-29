//--------------------------------------------------Numbers------------------------------------------------------------

//В JavaScript можно использовать букву "e", она добавляется к числу и заменяет указанное количество нулей:
let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей

let ms = 1e-6; // 0.000001

let a = 0b11111111; // бинарная форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255

//Функция parseInt возвращает целое число, а parseFloat возвращает число с плавающей точкой:
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5


//Сумма пользовательских чисел 1
let n = prompt('n', '0')
let m = prompt('m', '0')
alert(+n + +m)


//Почему 6.35.toFixed(1) == 6.3? 2
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4


//Ввод числового значения 3
function readNumber2() {
  let number;
  do {
    number = prompt('Введите число', '');
  }
  while (!isFinite(number));

  if (number === 0 || number === null) return null;
  return number;
}

readNumber2()


//Бесконечный цикл по ошибке 4
//Этот цикл – бесконечный. Он никогда не завершится, почему?
let i = 0;
while (i != 10) {
  i += 0.2;
}
//Он никогда не будет равен десяти при не строгом равенстве, тк числа имеет остаток


// Случайное число от min до max 5
// Вообще хз что они тут хотят

