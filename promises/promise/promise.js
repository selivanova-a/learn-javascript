// --------------------------------------------Promise------------------------------------------------------------------


function doItAfter(seconds) {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('hello0')
      resolve('Test');
    }, seconds)
  });
  return prom;
}

doItAfter(4000)
  .then((message) => {
    setTimeout(() => {
      console.log(message)
    }, 2000)
  })
  .then(()=> {console.log('nextMes')})

//Пример другой записи для понимания
// let promise1 = doItAfter(4000);
// let promise2 = promise1.then((message) => {
//     setTimeout(() => {
//       console.log(message)
//     }, 2000)
//   })
// let promise3 = promise2.then(()=> {console.log('nextMes')})



//Задержка на промисах 1
// function delay(ms) {
//   return new Promise(((resolve, reject) => {
//     setTimeout(() => {
//       alert('выполнилось через 3 секунды')
//     }, ms)
//   }))
// }

// function delay(ms) {
//   return new Promise(((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, ms)
//   }))
// }

function delay(ms) {
  return new Promise(((resolve) => setTimeout(resolve, ms)))
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));