//                    -------------------------Loop: while, for------------------------------

//Последнее значение цикла
let a = 3;

while (a) {
  alert( a-- );
}   //1


//Какие значения выведет цикл while?
let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4

let b = 0;
while (b++ < 5) alert( b ); // 1 2 3 4 5 --------------


//Какие значения выведет цикл for?
for (let i = 0; i < 5; i++) alert( i );  //  0 1 2 3 4

for (let i = 0; i < 5; ++i) alert( i ); //  0 1 2 3 4


//Выведите чётные числа
for (let i = 1; i < 11; i++) {
  if (i % 2 !== 0) continue
  alert(i)
}


//Замените for на while

let j = 0
while (j < 3) {
  alert( `number ${j}!` );
  j++
}

//Повторять цикл, пока ввод неверен

let number = 0
while (number < 100 || number === null || number === undefined) {
  number = prompt('Введите число больше 100', '')
}

let num;
do {
  num = prompt('Введите число больше 100', 0);
} while (num <= 100 && num);


//Вывести простые числа
let n = prompt('Введите число', 0);
next:
for (let i = 2; i < n; i++) {
  for (let j = 2;  j < i ; j++) {
    if (i % j === 0) continue next
  }
  alert( i );
}

