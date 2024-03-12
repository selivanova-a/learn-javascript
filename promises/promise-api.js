//---------------------------------------------------Promise API-----------------------------------------------------------

//Promise.all
//Например, если у нас есть массив ссылок, то мы можем загрузить их вот так:

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map((url) => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests).then((responses) =>
  responses.forEach((response) => alert(`${response.url}: ${response.status}`))
);

//Если один промис завершается с ошибкой, то весь Promise.all завершается с ней, полностью забывая про остальные промисы в списке. Их результаты игнорируются.

//Promise.allSettled
//Например, мы хотели бы загрузить информацию о множестве пользователей. Даже если в каком-то запросе ошибка, нас всё равно интересуют остальные.

let urls1 = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

Promise.allSettled(urls2.map((url) => fetch(url))).then((results) => {
  // (*)
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      alert(`${urls2[num]}: ${result.value.status}`);
    }
    if (result.status == "rejected") {
      alert(`${urls2[num]}: ${result.reason}`);
    }
  });
});

//Promise.race
//Метод очень похож на Promise.all, но ждёт только первый выполненный промис, из которого берёт результат (или ошибку).
let promise = Promise.race(iterable);

//Promise.any(promises) (добавлен недавно) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any.

//Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.

//Promise.reject(error) – возвращает промис с ошибкой error.
