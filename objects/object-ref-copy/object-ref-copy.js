//--------------------------------------  Object references and copying  ----------------------------------------------

//метод Object.assign
//Например, мы можем использовать его для объединения нескольких объектов в один:

let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2); // копируем все свойства из permissions1 и permissions2 в user
// теперь user = { name: "John", canView: true, canEdit: true }


//можем использовать Object.assign для замены цикла for..in для простого клонирования:
let clone = Object.assign({}, user);

