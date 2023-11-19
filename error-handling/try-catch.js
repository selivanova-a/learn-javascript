//-------------------------------------------Error handling, "try...catch"----------------------------------------------

//при ошибке в блоке try {…} скрипт не «падает», и мы получаем возможность обработать ошибку внутри catch.

//Когда возникает ошибка, JavaScript генерирует объект, содержащий её детали.
// Затем этот объект передаётся как аргумент в блок catch:


try {
  lalala; // ошибка, переменная не определена!
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)

  // Можем также просто вывести ошибку целиком
  // Ошибка приводится к строке вида "name: message"
  alert(err); // ReferenceError: lalala is not defined
}

//В JavaScript есть множество встроенных конструкторов для стандартных ошибок:
// Error, SyntaxError, ReferenceError, TypeError и другие.

let json = '{ "age": 30 }'; // данные неполны

try {

  let user = JSON.parse(json); // <-- выполнится без ошибок

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
}


//Блок catch должен обрабатывать только те ошибки, которые ему известны, и «пробрасывать» все остальные.

/*catch(e) {

  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // проброс (*)
  }

}*/


//try…catch…finally
/*
Если секция есть, то она выполняется в любом случае:
  после try, если не было ошибок,
  после catch, если ошибки были.
*/


//Секцию finally часто используют, когда мы начали что-то делать и хотим завершить это вне зависимости от того, будет ошибка или нет.

function func() {

  try {
    return 1;

  } catch (e) {
    /* ... */
  } finally {
    alert( 'finally' );
  }
}

alert( func() ); // сначала срабатывает alert из finally, а затем этот код












