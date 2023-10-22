//----------------------------------------Scheduling: setTimeout and setInterval----------------------------------------


//  Task #1

//solution1
function printNumbers(from, to) {

  let timer = setInterval(() => {
    for (let i = from; i <= to; i++) {
      console.log(i)
    }
    clearInterval(timer)
  }, 1000)

}

printNumbers(1, 10)


//solution2
function printNumbersTimeOut(from, to) {
  let current = from
  setTimeout(function replay() {
    if (current <= to-1) {
      setTimeout(replay, 1000)
    }
    console.log(current++)

  }, 1000)
}

printNumbersTimeOut(10, 20)


