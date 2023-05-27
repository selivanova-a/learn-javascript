//---------------------------------------Optional chaining '?.'----------------------------------------------------

//безопасный способ получить доступ к user.address.street, используя ?.:
let user = {}; // пользователь без адреса
alert( user?.address?.street ); // undefined (без ошибки)


//пример с document.querySelector:
let html = document.querySelector('.elem')?.innerHTML; // будет undefined, если элемента нет

//Например, ?.() используется для вызова функции, которая может не существовать.
userGuest.admin?.(); // ничего не произойдет (такого метода нет)

