//------------------------------------Decorators and forwarding, call/apply---------------------------------------------


//Декоратор – это обёртка вокруг функции, которая изменяет поведение последней. Основная работа по-прежнему выполняется функцией.

/*
func.call(context, arg1, arg2…) – вызывает func с данным контекстом и аргументами.
func.apply(context, args) – вызывает func, передавая context как this и псевдомассив args как список аргументов.*/


// Task
function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}