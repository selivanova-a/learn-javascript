//----------------------------------------------Async/await----------------------------------------------------------------

// Ключевое слово async перед объявлением функции:

// Обязывает её всегда возвращать промис.
// Позволяет использовать await в теле этой функции.
// Ключевое слово await перед промисом заставит JavaScript дождаться его выполнения, после чего:

// Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw.
// Иначе вернётся результат промиса.

async function showAvatar() {
  // запрашиваем JSON с данными пользователя
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  // запрашиваем информацию об этом пользователе из github
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 3 секунды и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
