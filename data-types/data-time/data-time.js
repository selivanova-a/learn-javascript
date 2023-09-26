//-------------------------------------------------Date and time--------------------------------------------------------

/*
Дата и время в JavaScript представлены объектом Date.
Нельзя создать «только дату» или «только время»: объекты Date всегда содержат и то, и другое.
Счёт месяцев начинается с нуля (да, январь – это нулевой месяц).
Дни недели в getDay() также отсчитываются с нуля, что соответствует воскресенью.
*/

//----------------------------------------------------Задачи------------------------------------------------------------


//Создайте дату 20 февраля 2012 года, 3 часа 12 минут
let date = new Date(2012, 1, 20, 3, 12);
alert(date)


//Покажите день недели
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return (days[date.getDay()])
}

let d = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(d) );


// Какой день месяца был много дней назад?
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


//Последнее число месяца?
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0)
  return date.getDate();
}






