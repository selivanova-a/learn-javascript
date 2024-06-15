//Экспорт до объявления

// экспорт массива
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// экспорт класса
export class User {
  constructor(name) {
    this.name = name;
  }
}


// Не ставится точка с запятой после экспорта класса/функции


//список того, что хотим импортировать, в фигурных скобках import {...},
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!



//Модуль, который объявляет что-то одно, например модуль user.js экспортирует только class User.
//Модули предоставляют специальный синтаксис export default («экспорт по умолчанию»)

// 📁 user.js
export default class User { // просто добавьте "default"
  constructor(name) {
    this.name = name;
  }
}

//При export default игурные скобки НЕ нужны
/*
// 📁 main.js
import User from './user.js'; // не {User}, просто User
new User('John');*/


