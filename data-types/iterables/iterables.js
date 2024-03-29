//--------------------------------------------------ITERABLES-------------------------------------------------------

/*
Перебираемые (или итерируемые) объекты – это обобщение массивов.
  Концепция, которая позволяет использовать любой объект в цикле for..of.
*/

/*
Технически итерируемые объекты должны иметь метод Symbol.iterator.

  Результат вызова obj[Symbol.iterator] называется итератором. Он управляет процессом итерации.

  Итератор должен иметь метод next(), который возвращает объект {done: Boolean, value: any},
  где done:true сигнализирует об окончании процесса итерации, в противном случае value – следующее значение.

  Метод Symbol.iterator автоматически вызывается циклом for..of, но можно вызвать его и напрямую.

  Встроенные итерируемые объекты, такие как строки или массивы, также реализуют метод Symbol.iterator.

  Строковый итератор знает про суррогатные пары.

*/


//Объекты, имеющие индексированные свойства и length,
// называются псевдомассивами. Они также могут иметь другие свойства и методы,
// но у них нет встроенных методов массивов.