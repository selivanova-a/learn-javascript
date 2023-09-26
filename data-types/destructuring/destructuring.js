//-------------------------------------------Destructuring assignment---------------------------------------------------

/*
Деструктурирующее присваивание – это специальный синтаксис,
который позволяет нам «распаковать» массивы или объекты в несколько переменных, так как иногда они более удобны.
*/

//Деструктуризация массива

let arr = ['Vasya','Ivanov']
//let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];

//Деструктуризация объекта

let options = {
  title: "Menu",
  width: 100,
  height: 200
};


let {title, width, height} = options;


/*Если мы хотим присвоить свойство объекта переменной с другим названием,
  например, свойство options.width присвоить переменной w, то мы можем использовать двоеточие:*/
//let {width: w, height: h, title} = options;


//Для потенциально отсутствующих свойств мы можем установить значения по умолчанию, используя "=",
//let {width = 100, height = 200, title} = options;



//Остаток объекта «…»
// tit = свойство с именем title
// rest = объект с остальными свойствами
let {tit, ...rest} = options;


//---------------------------------------------Задачи-------------------------------------------------------------------

//Деструктурирующее присваивание  1
let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
let {name, years: age, isAdmin = false} = user

/*alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false*/


//Максимальная зарплата 2
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let maxSal = 0
  let maxName = null
  for (let [name, sal] of Object.entries(salaries)) {
    console.log(name, sal)
    if (maxSal < sal) {
      maxSal = sal
      maxName = name
    }
  }
  return maxName
}

topSalary(salaries)








