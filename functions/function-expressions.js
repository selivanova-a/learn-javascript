//Синтаксис, который мы использовали до этого, называется Function Declaration (Объявление Функции):
function sayHi() {
  alert( "Привет" );
}

/*
Существует ещё один синтаксис создания функций, который называется Function Expression (Функциональное Выражение).
Данный синтаксис позволяет нам создавать новую функцию в середине любого выражения.
*/
let sayHi2 = function() {
  alert( "Привет" );
};


//                                            КОЛБЭКИ
// Аргументы showOk и showCancel функции ask называются функциями-колбэками или просто КОЛБЭКАМИ.

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// Аргументы showOk и showCancel функции ask называются функциями-колбэками или просто КОЛБЭКАМИ.
/*Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно
(от англ. «call back» – обратный вызов) когда-нибудь позже, если это будет необходимо.
  В нашем случае, showOk становится колбэком для ответа «yes», а showCancel – для ответа «no».*/

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);



/*
                                                 Итого
Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.
Если функция была создана как часть выражения, то это “Function Expression”.
Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения достигает их.
*/

