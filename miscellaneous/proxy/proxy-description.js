//-----------------------------------------------Proxy and Reflect------------------------------------------------------

/*
Объект Proxy «оборачивается» вокруг другого объекта и может перехватывать (и, при желании, самостоятельно обрабатывать)
разные действия с ним, например чтение/запись свойств и другие. Далее мы будем называть такие объекты «прокси».*/


let proxy = new Proxy(target, handler);

//target – это объект, для которого нужно сделать прокси, может быть чем угодно, включая функции.
//handler – конфигурация прокси: объект с «ловушками» («traps»): методами
       // get - для чтения свойства из target
       // set - для записи в свойства target


//Если нет ловушек, то все операции на proxy применяются к оригинальному объекту target.
let target = {};
let proxy2 = new Proxy(target, {}); // пустой handler

proxy2.test = 5; // записываем в прокси (1)
alert(target.test); // 5, свойство появилось в target!


/*
Proxy – это особый, «экзотический», объект, у него нет собственных свойств.
  С пустым handler он просто перенаправляет все операции на target.*/

//Ловушки(get, set) - нжны для перехватывания одноимённых внутренних методов

/*
Прокси должен заменить собой оригинальный объект повсюду.
  Никто не должен ссылаться на оригинальный объект после того, как он был проксирован.
  Иначе очень легко запутаться.*/


//REFLECT - встроенный объект упрощаюший создание прокси
//Его методы – минимальные обёртки вокруг внутренних методов.

/*
Для каждого внутреннего метода, перехватываемого Proxy, есть соответствующий метод в Reflect,
  который имеет такое же имя и те же аргументы, что и у ловушки Proxy.*/

let user1 = {
  name: "Вася",
};

user1 = new Proxy(user, {
  get(target, prop, receiver) {
    alert(`GET ${prop}`);
    return Reflect.get(target, prop, receiver); // (1)
  },
  set(target, prop, val, receiver) {
    alert(`SET ${prop}=${val}`);
    return Reflect.set(target, prop, val, receiver); // (2)
  }
});

let name = user1.name; // выводит "GET name"
user.name = "Петя"; // выводит "SET name=Петя"



//receiver - хранит ссылку на правильный контекст this

let user2 = {
  _name: "Гость",
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user2, {
  get(target, prop, receiver) { // receiver = admin
    return Reflect.get(target, prop, receiver); // (*)
  }
});


let admin = {
  __proto__: userProxy,
  _name: "Админ"
};

alert(admin.name); // Админ



//-------------------------------------------------Tasks----------------------------------------------------------------

//Ошибка при чтении несуществующего свойства----------------------------------------------------------------------------

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new Error('Ошибка: такого свойства не существует')
      }
    }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует




//Получение элемента массива с отрицательной позиции--------------------------------------------------------------------
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver){
    if (prop < 0) {
      prop = +prop + target.length
    }
    return Reflect.get(target, prop, receiver);
  }
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2


