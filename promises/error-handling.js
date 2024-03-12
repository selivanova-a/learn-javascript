//---------------------------------------------------Error handling with promises------------------------------------------

//.catch перехватывает все виды ошибок в промисах: будь то вызов reject() или ошибка, брошенная в обработчике при помощи throw.

//.then также перехватывает ошибки таким же образом, если задан второй аргумент (который является обработчиком ошибок).

//Необходимо размещать .catch там, где мы хотим обработать ошибки и знаем, как это сделать. Обработчик может проанализировать ошибку (могут быть полезны пользовательские классы ошибок) и пробросить её, если ничего не знает о ней (возможно, это программная ошибка).

// В любом случае нам следует использовать обработчик события unhandledrejection (для браузеров и аналог для других окружений), чтобы отслеживать необработанные ошибки и информировать о них пользователя (и, возможно, наш сервер), благодаря чему наше приложение никогда не будет «просто умирать».
