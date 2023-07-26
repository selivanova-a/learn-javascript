//--------------------------------------------------Strings------------------------------------------------------------

//Любые текстовые данные являются строками. Не существует отдельного типа «символ»

// обратные кавычки могут занимать более одной строки, вот так:
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

//str.length — это числовое свойство, а не функция, добавлять скобки не нужно.


//slice(start, end)	от start до end (не включая end)	можно передавать отрицательные значения
//substring(start, end)	между start и end	отрицательные значения равнозначны 0
//substr(start, length)	length символов, начиная от start	значение start может быть отрицательным

//Для поиска подстроки используйте indexOf или includes/startsWith/endsWith, когда надо только проверить, есть ли вхождение.

//--------------------------------------------------Задачи------------------------------------------------------------

//Сделать первый символ заглавным 1
function ucFirst(str) {
  if (!str) return str;
  str = str[0].toUpperCase() +  str.slice(1)  //str.charAt(0)
  return str
}


//Проверка на спам 2
function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes('viagra') ||  str.includes('XXX')){
    return true
  }
}


//Усечение строки 3
function truncate(str, maxlength) {
  if (str.length > maxlength ) {
    let shortStr = str.slice(0, maxlength-1) + '…'
    return shortStr
  }
  return str;
}


//Выделить число 4
function extractCurrencyValue(str) {
  return +str.slice(1)
}


