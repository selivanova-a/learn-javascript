//                       ----------------------Functions----------------------

//Перепишите функцию, используя оператор '?' или '||'


function checkAge(age) {
   return age > 18 ?  true : confirm('Родители разрешили?');
}


function checkAge2(age) {
  return (age > 18) ||confirm('Родители разрешили?')
}


//Функция min(a, b)
function minNum(a,b) {
  return a < b ? a : b;
}

//Функция pow(x,n)
function powNum(x, n) {
  if (n > 1 && x > 1) {
    return x**n
  }
}